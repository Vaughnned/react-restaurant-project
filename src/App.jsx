import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import { INITIAL_MENU } from "./Items";
import Order from "./components/Order/Order";

function App() {
  const [menuList, setMenuList] = useState(INITIAL_MENU);
  const [orderList, setOrderList] = useState([]);
  console.log(orderList);

  return (
    <>
      <header>
        <h1>Pop's Burger Joint</h1>
      </header>
      <section className="container">
        <MenuList
          menuList={menuList}
          orderList={orderList}
          setOrderList={setOrderList}
        />
        <Order orderList={orderList} setOrderList={setOrderList} />
      </section>
    </>
  );
}

export default App;
