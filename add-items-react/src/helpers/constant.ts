export type ItemId = `${string}-${string}-${string}-${string}-${string}`;

export interface Item {
  id: ItemId;
  timestamp: number;
  text: string;
}
export const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Libros",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Video juegos",
  },
];
