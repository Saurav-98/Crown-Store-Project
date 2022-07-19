import "./App.css";
import categories from "./components/menu/menu";
import Directory from "./components/directory/Directory";

function App() {
  return <Directory categories={categories} />;
}

export default App;
