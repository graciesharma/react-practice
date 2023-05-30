import React, { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [category, setCategory] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    document.title = "My App";
  }, []);

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="value1"></option>
        <option value="swimwear">Swimwear</option>
        <option value="shoe">Shoe</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
