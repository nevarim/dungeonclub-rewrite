import type { TokensMessageCategory } from './tokens';

export interface IMessageForServer<P> {
	payloadForServer: P;
}
export interface IMessageForClient<P> {
	payloadForClient: P;
}
export interface IResponse<R> {
	response: R;
}

export interface DefineSend<P, F> extends IMessageForServer<P> {
	forward: F;
}
export type DefineSendAndForward<P> = DefineSend<P, P>;

export interface DefineRequest<P, R, F> extends IMessageForServer<P>, IResponse<R> {
	forward: F;
}
export type DefineRequestWithPublicResponse<P, R> = DefineRequest<P, R, R>;

export type ID = string;

export type AllMessages = TokensMessageCategory;

export type Scope<T> = Record<string, T>;

export type PickMessages<S> = {
	[K in keyof AllMessages as AllMessages[K] extends S ? K : never]: AllMessages[K];
};

export type ServerHandledMessages = PickMessages<IMessageForServer<unknown>>;
export type ClientHandledMessages = PickMessages<IMessageForClient<unknown>>;

export type ServerSentMessages = ClientHandledMessages;
export type ClientSentMessages = ServerHandledMessages;
