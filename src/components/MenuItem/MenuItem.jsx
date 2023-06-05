export default function MenuItem({
  menuItem,
  menuList,
  orderList,
  setOrderList,
}) {
  function addToCart(id) {
    const index = menuList.findIndex((menuItem) => menuItem.id === id);
    const orderItem = menuList[index];
    setOrderList([...orderList, orderItem]);
  }

  return (
    <>
      <ul>
        <li className="menuItem">
          <img src={menuItem.src} alt="Cheese Burger" />
          <h1>{menuItem.name}</h1>
          <p className="desc">{menuItem.description}</p>
          <p className="price">Price: {menuItem.price}</p>
          <button
            name={menuItem.name}
            value="Add to cart"
            onClick={() => addToCart(menuItem.id)}
          >
            Add to cart
          </button>
        </li>
      </ul>
    </>
  );
}
