import React from "react";
import { categories } from "../../App";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Category
            </label>
            <select id="category" className="form-select">
              <option value=""></option>
              {categories.map((categories) => (
                <option key={categories} value={categories}>
                  {categories}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary">Subm</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
