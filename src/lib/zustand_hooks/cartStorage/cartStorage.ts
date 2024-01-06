import { IPosition } from '@/lib/apis/positions/positions.types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface PositionStore {
	cart: Array<IPosition> | null;
	onAddToCart: (position: IPosition) => void;
	onRemoveFromCart: (code: string) => void;
	onRemoveAllFromCart: () => void;
	liked: Array<IPosition> | null;
	onAddToLiked: (position: IPosition) => void;
	onRemoveFromLiked: (code: string) => void;
	onRemoveAllFromLiked: () => void;
}

const usePositionStorage = create(
	persist<PositionStore>(
		(set, get) => ({
			cart: [],
			onAddToCart: (position: IPosition) => {
				const currentItems = get().cart;
				const existingItem = currentItems?.find(
					(item) => item.code === position.code
				);

				if (existingItem) {
					throw 'Position was already added to cart lately';
				}
				const all: any = get().cart;
				set({ cart: [position, ...all] });
			},
			onRemoveFromCart: (code: string) => {
				const all: any = get().cart?.filter((item) => item.code !== code);
				set({
					cart: [...all],
				});
			},
			onRemoveAllFromCart: () => set({ cart: [] }),
			liked: [],
			onAddToLiked: (position: IPosition) => {
				const currentItems = get().liked;
				const existingItem = currentItems?.find(
					(item) => item.code === position.code
				);

				if (existingItem) {
					throw 'Position was already added to cart lately';
				}
				const all: any = get().liked;
				set({ liked: [position, ...all] });
			},
			onRemoveFromLiked: (code: string) => {
				const all: any = get().liked?.filter((item) => item.code !== code);
				set({
					liked: [...all],
				});
			},
			onRemoveAllFromLiked: () => set({ liked: [] }),
		}),
		{
			name: 'cart',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default usePositionStorage;
