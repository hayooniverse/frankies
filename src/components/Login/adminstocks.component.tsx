import React, { Fragment, useState } from "react";

import {store} from "../../app/store";
import {Provider} from "react-redux";
import Header from "../Layout/Header"
import Cart from "../Cart/Cart"
import Snack from "../Meals/AvailableSnack";

interface Props{
  showHeader?: boolean;
}
const Adminstocks = ({showHeader=true}: Props) => {

  return (
    <div>
            <main>
                <Snack />
            </main>
    </div>
  );
};

export default Adminstocks;

