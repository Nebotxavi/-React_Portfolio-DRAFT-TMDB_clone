import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { getItems } from "../services/itemsService";

export const ItemsSelection = props => {
  const [items, setItems] = useState([]);
  const { type, option } = useParams();
  const { state: section } = useLocation();

  console.log("type :", type);
  console.log("option :", option);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getItems(type, option);
      setItems(items);
    };
    fetchData();
  }, [setItems, option, type]);

  return (
    <div>
      <h3>{section.title}</h3>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {item.original_title || item.original_name || item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
