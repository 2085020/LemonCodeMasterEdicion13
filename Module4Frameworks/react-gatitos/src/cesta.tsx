import React from "react";
import { MyUserContext } from "./context";
export const Cesta: React.FC = () => {

    const {selectedCats, selectCat} = React.useContext(MyUserContext);
    return (
        <div>
            Aquí va la cesta
            {selectedCats.map((cat) => 
            <div>
                {cat}
                </div>)}
        </div>
    )
}