import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {

  const[expenses,setExpenses]=useState([
    {id:1, description:'aaa', amount:10,category:'Utilities'},
    {id:2, description:'abc', amount:10,category:'Utilities'},
    {id:3, description:'hhjh', amount:10,category:'Utilities'},
    {id:4, description:'nhjh', amount:10,category:'Utilities'},

  ])
  return (
    <div>
<ExpenseList expenses={expenses} onDelete={(id)=> setExpenses(expenses.filter(e => e.id !== id))}/>  
  </div>
  );
}
export default App;
