import { Suspense } from "react";
import Categories from "../Categories";


const LeftSide = () => {

    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-sm"></span>}>
            <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftSide;