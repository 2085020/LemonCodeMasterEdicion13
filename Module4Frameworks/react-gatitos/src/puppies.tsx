import React from 'react';
import { allPuppies } from './kitties-data';

export const PuppiesPage: React.FC = () => {
    const kittenIds = [7,8,9,10];
    const handleClickCheckBox = () => {

    }
    return (
        <div className='list-user-list-container'>
            {allPuppies.map((kittie) => 
                <div key={kittie.id}>
                <img src={kittie.picUrl} />
                {kittie.title} <br/>
                add to cart <input type="checkbox" onChange={handleClickCheckBox} value={kittie.id}></input>
                </div>
            )}
        </div>
    )
}