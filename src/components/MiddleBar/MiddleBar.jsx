import React from "react";
import Contacts from "../Contacts/Contacts";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import HeaderActions from "../HeaderActions/HeaderActions";
import "./middle-bar.scss";

export default function MiddleBar() {
  return (
    <div className='app-middle-bar'>
      <Contacts />
      <Link to='/flowers-front/'>
        <Logo className='app-logo' />
      </Link>
      <HeaderActions />
    </div>
  );
}
