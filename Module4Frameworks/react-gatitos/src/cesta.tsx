import React from "react";
import { MyUserContext } from "./context";
import { allPuppies, allKitties } from "./kitties-data";

export const Cesta: React.FC = () => {
  const allCats = allKitties.concat(allPuppies);

  const { selectedCats, selectCat } = React.useContext(MyUserContext);

  const handleClickPapelera = (id) => () => {
    if (selectedCats.indexOf(id)===-1) {
        selectCat([...selectedCats, id]);
    } else {
        selectCat(selectedCats.filter(a => a !== id));
    }
}
  return (
    <div>
      <h2>Cesta de la compra</h2>
      {allCats.map((cat) => (
        selectedCats.includes(cat.id) &&
        <div key={cat.id}>
                <img src={`${cat.picUrl}`} width={"30px"}/>
                {cat.title} 
                <img className="papelera" src="/assets/images/papelera.png" width={"20px"} onClick={handleClickPapelera(cat.id)} />
                
                </div>
      ))}
    </div>
  );
};
