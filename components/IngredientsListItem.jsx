import React, {useState} from 'react'
import closeIcon from "../images/close-icon2.png";

const IngredientsListItem = ({ingredient, setIngredients}) => {
     const [showIcon, setShowIcon] = useState(false);

     const removeIngredient = (e) => {
          e.preventDefault();
          setIngredients(prev => {
             return prev.filter(prev => prev !== ingredient);
          })
     }

     return(
         <li onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} key={ingredient}>{ingredient} {showIcon && <img onClick={(e) => removeIngredient(e)} src={closeIcon}/>}</li>
     )
  
}

export default IngredientsListItem;