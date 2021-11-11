import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchContent, setSearchContent] = useState("");

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log(setSelectedCategory)
  }

  function onSearchChange(event) {
    setSearchContent(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  let searchedItems = "";
  if (searchContent === ""){
    searchedItems = [...itemsToDisplay]
  } else if (searchContent !== ""){
    searchedItems = itemsToDisplay.filter((item) => {
      return item.name.includes(searchContent) || item.name.toLowerCase().includes(searchContent)
    });
  }

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter
      onCategoryChange={onCategoryChange}
      onSearchChange={onSearchChange}
      search={searchContent}
      />
      <ul className="Items">
        {searchedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
