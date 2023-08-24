import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";

const App = () => {

    const [expenses, setExpenses] = useState([
        {id: 1, description: 'aaaa', amount: 10, category: "Utilities"},
        {id: 2, description: 'bbbb', amount: 15, category: "Utilities"},
        {id: 3, description: 'cccc', amount: 20, category: "Utilities"},
        {id: 4, description: 'dddd', amount: 25, category: "Utilities"},
    ]);


    return (
        <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
    )
}
export default App
