import "./App.css";

const categories = [
  {
    title: "Hats",
    id: "001",
  },
  {
    title: "Jackets",
    id: "002",
  },
  {
    title: "Sneakers",
    id: "003",
  },
  {
    title: "Mens",
    id: "004",
  },
  {
    title: "Womens",
    id: "005",
  },
];

function App() {
  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => (
        <div key={id} className="category-container">
          {/* IMG */}
          <div className="category-info-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
