interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({onSelectCategory}: Props) => {
    return (
        <select name="category" id="category" className="form-control"
                onChange={(evt) => onSelectCategory(evt.target.value)}>
            <option value="">All categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
        </select>
    )
}
export default ExpenseFilter
