import { Schema } from 'mongoose';
import { RectSchema, type IRect } from './compounds/rect';
import { TokenSchema, type IToken } from './token';
import { AssetType, modelWithHierarchy, type Asset, type DocumentArray } from './util';

export interface ISceneGrid {
	bounds: IRect;
	cellsPerRow: number;
}

export const SceneGridSchema = new Schema<ISceneGrid>(
	{
		bounds: { type: RectSchema, required: true },
		cellsPerRow: { type: Number, required: true }
	},
	{ _id: false }
);

export interface IScene {
	background: Asset;
	grid: ISceneGrid;

	tokens: IToken[];
}

export const SceneSchema = new Schema<IScene>({
	background: { type: AssetType, required: true },
	grid: {
		type: SceneGridSchema,
		default: {
			cellsPerRow: 20,
			bounds: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			}
		}
	},
	tokens: [TokenSchema]
});

export const Scene = modelWithHierarchy<
	IScene,
	{
		tokens: DocumentArray<IToken>;
	}
>('Scene', SceneSchema);
