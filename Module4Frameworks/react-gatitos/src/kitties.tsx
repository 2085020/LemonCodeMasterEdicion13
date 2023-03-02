import React from 'react';
import { allKitties } from './kitties-data';
import { MyUserContext } from "./context";

export const KittiesPage: React.FC = () => {
    
    const {selectedCats, selectCat} = React.useContext(MyUserContext);
    const handleClickCheckBox = (event) => {
        if (selectedCats.indexOf(event.target.value)===-1) {
            selectCat([...selectedCats, event.target.value]);
        } else {
            selectCat(selectedCats.filter(a => a !== event.target.value));
        }
    }
    return (
        <div className='list-user-list-container'>
            {allKitties.map((kittie) => 
                <div key={kittie.id}>
                <img src={`${kittie.picUrl}`}/>
                {kittie.title} <br/>
                add to cart <input type="checkbox" onChange={handleClickCheckBox} value={kittie.id}></input>
                </div>
            )}
        </div>
    )
}