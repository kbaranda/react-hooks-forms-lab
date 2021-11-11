import React from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setName] = useState("");
  const [itemCategory, setCategory] = useState("Produce");
  
  function handleUpdatedName (event) {
    setName(event.target.value);
  }

  function handleUpdatedCategory(event){
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem ={
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onItemFormSubmit(newItem)
    setName("")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name"
        onChange ={handleUpdatedName}
        value={itemName}
        />
      </label>

      <label>
        Category:
        <select 
        name="category"
        onChange={handleUpdatedCategory}
        value={itemCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
