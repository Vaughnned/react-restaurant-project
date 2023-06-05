import { useState } from "react";

export default function MenuItem() {
  const [menuItemName, setMenuItemName] = useState("");
  const [menuItemPrice, setMenuItemPrice] = useState("");

  function addToCart(e) {
    e.preventDefault();
  }

  return (
    <>
      <header>
        <h1>Majestic Thai</h1>
      </header>
      <form onSubmit={addToCart}>
        <ul>
          <li className="menuItem">
            <img
              src="https://media.cheddars.com/en_us/images/product/smokehouse-burger-grilled-onions.jpg"
              alt="Cheese Burger"
            />
            <p>Cheese Burger</p>
            <p className="price">Price: 10.99</p>
            <input type="submit" value="Add to cart" />
          </li>
          <li className="menuItem">
            <img
              src="https://media.cheddars.com/en_us/images/product/smokehouse-burger-grilled-onions.jpg"
              alt="Cheese Burger"
            />
            <p>Cheese Burger</p>
            <p className="price">Price: 10.99</p>
            <input type="submit" value="Add to cart" />
          </li>
          <li className="menuItem">
            <img
              src="https://media.cheddars.com/en_us/images/product/smokehouse-burger-grilled-onions.jpg"
              alt="Cheese Burger"
            />
            <p>Cheese Burger</p>
            <p className="price">Price: 10.99</p>
            <input type="submit" value="Add to cart" />
          </li>
          <li className="menuItem">
            <img
              src="https://media.cheddars.com/en_us/images/product/smokehouse-burger-grilled-onions.jpg"
              alt="Cheese Burger"
            />
            <p>Cheese Burger</p>
            <p className="price">Price: 10.99</p>
            <input type="submit" value="Add to cart" />
          </li>
          <li className="menuItem">
            <img
              src="https://media.cheddars.com/en_us/images/product/smokehouse-burger-grilled-onions.jpg"
              alt="Cheese Burger"
            />
            <p>Cheese Burger</p>
            <p className="price">Price: 10.99</p>
            <input type="submit" value="Add to cart" />
          </li>
          <li className="menuItem">
            <img
              src="https://media.cheddars.com/en_us/images/product/smokehouse-burger-grilled-onions.jpg"
              alt="Cheese Burger"
            />
            <p>Cheese Burger</p>
            <p className="price">Price: 10.99</p>
            <input type="submit" value="Add to cart" />
          </li>
        </ul>
        <aside>
          <h1>Your Cart</h1>
          <p></p>
        </aside>
      </form>
    </>
  );
}
