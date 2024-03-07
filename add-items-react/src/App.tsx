import "./App.css";
import { ItemList } from "./component/ItemList";
import { ItemId } from "./helpers";
import { useItems } from "./hooks/useItems";
import { useSEO } from "./hooks/useSEO";

function App() {
  const { items, addItem, removeItem } = useItems();
  useSEO({
    title: `[${items.length}] prueba tecnica`,
    description: "Añadir y eleminar elementos de la lista",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // e.target.value -> para escuchar el onChange de un INPUT

    const { elements } = event.currentTarget;

    // estrategia 1, trampa de TypeScript
    // no os lo recomiendo:
    // const input = elements.namedItem('item') as HTMLInputElement

    // estrategia 2, es asegurarse que realmente es lo que es
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement; // JavaScript puro
    if (!isInput || input == null) return;

    addItem(input.value);
    input.value = "";
  };

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id);
  };

  return (
    <main>
      <aside>
        <h1>Prueba tecnica</h1>
        <h2>Añadir o eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label="Añadir elementos">
          <label>
            Elemento a introducir
            <input
              type="text"
              name="item"
              required
              placeholder="Video juegos"
            />
          </label>
          <button>Elemento a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        {items.length === 0 ? (
          <p>
            <strong>No hay elementos en la lista</strong>
          </p>
        ) : (
          <ul>
            {items.map((item) => {
              return (
                <ItemList
                  {...item}
                  handleClick={createHandleRemoveItem(item.id)}
                  key={item.id}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
