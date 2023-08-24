import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";
import ExpenseFilter from "./components/ExpenseFilter.tsx";

const App = () => {

    const [selectedCategory, setSelectedCategory] = useState('')

    const [expenses, setExpenses] = useState([
        {id: 1, description: 'aaaa', amount: 10, category: "Utilities"},
        {id: 2, description: 'bbbb', amount: 15, category: "Utilities"},
        {id: 3, description: 'cccc', amount: 20, category: "Utilities"},
        {id: 4, description: 'dddd', amount: 25, category: "Utilities"},
    ]);

    const visibleExpanses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) :
        expenses;

    return (
        <>
            <div className="mb-3">
                <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
            </div>
            <ExpenseList expenses={visibleExpanses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
        </>
    )
}
export default App
