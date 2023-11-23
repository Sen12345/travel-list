export default function Form({
  description,
  setDescription,
  quantity,
  setQuantity,
  onHandleAddItem,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    if (description === "") return;
    onHandleAddItem(newItem);
    setDescription("");
    setQuantity(1);
    console.log(newItem);
  }
  return (
    <div>
      <form className="add-form" method="post" onSubmit={handleSubmit}>
        <h3>What do you want for your 😎 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Items"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
