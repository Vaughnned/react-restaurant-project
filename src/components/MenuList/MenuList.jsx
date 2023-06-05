import { useState } from "react";
import { INITIAL_MENU } from "../../Items";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuList(props) {
  return (
    <>
      <section className="menu-list">
        {props.menuList &&
          props.menuList.map((menuItem) => (
            <div key={menuItem.id}>
              <MenuItem
                menuItem={menuItem}
                menuList={props.menuList}
                orderList={props.orderList}
                setOrderList={props.setOrderList}
              />
            </div>
          ))}
      </section>
    </>
  );
}

// use local storage to hold the info for the orders
// react.dev website
