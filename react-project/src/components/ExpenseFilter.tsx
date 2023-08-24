import categories from './categories.ts';

interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({onSelectCategory}: Props) => {
    return (
        <select name="category" id="category" className="form-control"
                onChange={(evt) => onSelectCategory(evt.target.value)}>
            <option value="">All categories</option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
    )
}
export default ExpenseFilter
