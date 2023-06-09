import React, {useState} from 'react';
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.scss";
import {Provider} from "react-redux";
import {store} from "../../app/store";

const Header = (props: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown(){
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <Fragment>
      <Provider store={store}>
        <header className={classes.header} style={{paddingRight: '200px',paddingTop :'15px'}}>
          <HeaderCartButton onClick={props.onShowCart} style = {{paddingRight: '100px'}}/>

        </header>
      </Provider>
    </Fragment>
  );
};

export default Header;
