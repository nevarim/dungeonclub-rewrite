import type { ICampaign } from '$lib/db/schemas';
import type { CampaignCardSnippet, CampaignSnippet } from '../snippets/campaign';
import type { DefinePrivateRequest, UUID } from './messages';

export interface CampaignMessageCategory {
	campaignCreate: DefinePrivateRequest<
		{
			name: string;
		},
		ICampaign
	>;

	campaignEdit: DefinePrivateRequest<Omit<CampaignCardSnippet, 'createdAt'>, CampaignCardSnippet>;

	campaignHost: DefinePrivateRequest<
		{
			id: UUID;
		},
		CampaignSnippet
	>;

	campaignJoin: DefinePrivateRequest<
		{
			id: UUID;
		},
		CampaignSnippet
	>;
}
