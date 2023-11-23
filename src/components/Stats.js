export default function Stats({ item }) {
  if (item.length === 0)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const numItems = item.length;
  const numPackedItem = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItem / numItems) * 100);

  console.log(numItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got all your travel items packed and ready to go!!! ✈️"
          : `We have ${numItems} item in our list, and you already packed
          ${numPackedItem} (${percentage}%)`}
      </em>
    </footer>
  );
}
