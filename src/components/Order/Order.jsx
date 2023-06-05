import { v4 as uuidv4 } from "uuid";

export default function Order({ orderList, setOrderList }) {
  function clearOrder() {
    setOrderList([]);
  }

  function submitOrder() {
    localStorage.setItem(uuidv4(), JSON.stringify(orderList));
    setOrderList([]);
    alert("Thanks for placing an order with Pop's Burger Joint!");
  }

  const sum = orderList.reduce((acc, orderItem) => acc + orderItem.price, 0);
  console.log(uuidv4());

  // console.log(Object.entries(orderItem.price));

  return (
    <aside>
      <h1>Your Cart</h1>
      {orderList.map((orderItem, i) => (
        <div key={i}>
          <h2>{orderItem.name}</h2>
          <p>{orderItem.price}</p>
        </div>
      ))}
      <h2>Subtotal: {sum}</h2>

      <button onClick={submitOrder}>Submit Order</button>
      <button onClick={clearOrder}>Clear Order</button>
    </aside>
  );
}
