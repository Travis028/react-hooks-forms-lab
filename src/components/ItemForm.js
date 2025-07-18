import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemName.trim()) {
      return; // Don't submit if name is empty
    }
    const newItem = {
      id: uuid(),
      name: itemName.trim(),
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form className="ItemForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="itemName">Item Name:</label>
        <input
          id="itemName"
          type="text"
          name="name"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="itemCategory">Category:</label>
        <select
          id="itemCategory"
          name="category"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <button type="submit" disabled={!itemName.trim()}>
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
