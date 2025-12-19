import { use } from "react";

const categoriesPromise = fetch('/categories.json').then((res) => res.json());

const Categories = () => {

    const categories= use(categoriesPromise)
    
    return (
        <div>
            <h1>All Category - {categories.length}</h1>
        </div>
    );
};

export default Categories;