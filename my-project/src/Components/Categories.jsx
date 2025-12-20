import { use } from "react";
import { NavLink } from "react-router-dom";

const categoriesPromise = fetch('/categories.json').then((res) => res.json());

const Categories = () => {

    const categories= use(categoriesPromise)
    
    return (
        <div>
            
            <div className="grid grid-cols-1 gap-2">
                {
                    categories.map((category)=>
                    (<NavLink key={category.id} 
                    to={`category/${category.id}`} 
                    // 
                    className={({isActive})=>`btn border-0 hover:bg-base-300' ${isActive ? 'bg-base-300' : 'bg-base-100'}`}
                    >
                        {category.name}
                    </NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;