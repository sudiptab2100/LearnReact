import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onItemSelect: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelect }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onItemSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
