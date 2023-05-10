import React, { Fragment, useState } from "react";

import {store} from "../../app/store";
import {Provider} from "react-redux";
import Header from "../Layout/Header"
import Cart from "../Cart/Cart"
import Drink from "./AvailableDrinks";

interface Props{
  showHeader?: boolean;
}

const Meals = ({showHeader=true}: Props) => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
        <Provider store={store} >
            {showCart && <Cart onHideCart={hideCartHandler} />}
            {showHeader && <Header onShowCart={showCartHandler} />}
            <main>
                <Drink />
            </main>
        </Provider>
    </Fragment>
  );
};

export default Meals;

