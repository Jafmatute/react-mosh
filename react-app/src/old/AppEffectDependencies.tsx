import ProductList from "../components/ProductList.tsx";
import {useState} from "react";

const AppEffect = () => {
    const [category, setCategory] = useState('Clothing');
    return (
        <div>
            <select name="category" id="category" className="form-select"
                    onChange={(evt) => setCategory(evt.target.value)}>
                <option value="Clothing">Clothing</option>
                <option value="HouseHold">HouseHold</option>
            </select>
            <ProductList category={category}/>
        </div>
    );
};

export default AppEffect;
