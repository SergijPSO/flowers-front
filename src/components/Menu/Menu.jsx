import React from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  return (
    <Tabs className='app-header__menu'>
      <Link className='app-header__menu_link' to='/classic'>
        <Tab className='app-header__menu_item' label='Класика' />
      </Link>
      <Link className='app-header__menu_link' to='/mono'>
        <Tab className='app-header__menu_item' label='Моно-букети' />
      </Link>
      <Link className='app-header__menu_link' to='/mixed'>
        <Tab className='app-header__menu_item' label='Мікс-букети' />
      </Link>
      <Link className='app-header__menu_link' to='/boxes'>
        <Tab className='app-header__menu_item' label='Квіти у  боксах' />
      </Link>
      <Link className='app-header__menu_link' to='/promo'>
        <Tab className='app-header__menu_item' label='Акційні' />
      </Link>
      <Link className='app-header__menu_link' to='/wow'>
        <Tab className='app-header__menu_item' label='Wow-еффект' />
      </Link>
    </Tabs>
  );
};

export default Menu;
