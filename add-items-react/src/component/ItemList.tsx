import { ItemId } from "../helpers";
export function ItemList({
  id,
  text,
  handleClick,
}: {
  id: ItemId;
  text: string;
  handleClick: () => void;
}) {
  return (
    <li key={id}>
      {text}
      <button onClick={handleClick}>Eliminar</button>
    </li>
  );
}
