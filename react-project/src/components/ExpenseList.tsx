interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;

}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

const ExpenseList = ({expenses, onDelete}: Props) => {

    if (expenses.length === 0) return null;

    return (
        <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
            <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {expenses.map(expense => <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                    <button onClick={() => onDelete(expense.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>)}
            </tbody>
            <tfoot>
            <tr>
                <td>Total</td>
                <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                <td></td>
                <td></td>
            </tr>
            </tfoot>
        </table>

    )
}
export default ExpenseList;
