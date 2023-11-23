import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [quanty, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [item, setItem] = useState([]);

  function handleClearList() {
    setQuantity(1);
    setDescription("");
    setItem([]);
  }

  function handleDeleteItem(id) {
    setItem((item) => item.filter((items) => items.id !== id));
  }

  function toggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleAddItem(items) {
    setItem((item) => [...item, items]);
  }
  return (
    <div className="app">
      <Header />
      <Form
        description={description}
        setDescription={setDescription}
        quantity={quanty}
        setQuantity={setQuantity}
        onHandleAddItem={handleAddItem}
      />
      <PackingList
        item={item}
        setItem={setItem}
        onHandleDeleteItem={handleDeleteItem}
        onToggleItem={toggleItem}
        onClearList={handleClearList}
      />
      <Stats item={item} />
    </div>
  );
}

export default App;
