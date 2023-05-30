import { useEffect, useRef } from "react";
import ProductList from "./components/ProductList";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My document";
  });
  return (
    <div>
      <select name="" id="" className="form-select">
        <option value=""></option>
        <option value="clothing">Clothing</option>
        <option value="household">Household </option>
        <option value=""></option>
      </select>

      <ProductList />
    </div>
  );
}

export default App;
