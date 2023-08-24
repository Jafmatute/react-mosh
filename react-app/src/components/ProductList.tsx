import {useEffect, useState} from "react";

const ProductList = ({category}: { category: string }) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log("Fetching products in " + category);
        setProducts([...products, category]);
    }, [category]);

    return (
        <>
            {products.length > 0 && products.map(c => <ul key={c}>
                <li>{c}</li>
            </ul>)}
        </>
    )
}
export default ProductList
