import React from "react";
import { Routes, Route } from "react-router-dom";
import ClassicBouquets from "../../pages/ClassicBouquets";
import MixedBouquets from "../../pages/MixedBouquets";
import MonoBouquets from "../../pages/MonoBouquets";
import InBoxBouquets from "../../pages/InBoxBouquets";
import WowEffect from "../../pages/WowEffect";
import PromoBouquets from "../../pages/PromoBouquets";
import HomePage from "../../pages/HomePage";
import AboutUs from "../../pages/AboutUs";
import Contacts from "../../pages/Contacts";
import Payment from "../../pages/Payment";
import Delivery from "../../pages/Delivery";

import homepage from "../../homepageName";

import "./content.scss";

export default function Content() {
  return (
    <div className='app-content'>
      <Routes>
        <Route path={`${homepage}`} element={<HomePage />} />
        <Route path={`${homepage}classic`} element={<ClassicBouquets />} />
        <Route path={`${homepage}mono`} element={<MonoBouquets />} />
        <Route path={`${homepage}mixed`}element={<MixedBouquets />} />
        <Route path={`${homepage}boxes`} element={<InBoxBouquets />} />
        <Route path={`${homepage}wow`} element={<WowEffect />} />
        <Route path={`${homepage}promo`} element={<PromoBouquets />} />
        <Route path={`${homepage}about`} element={<AboutUs />} />
        <Route path={`${homepage}payment`} element={<Payment />} />
        <Route path={`${homepage}delivery`} element={<Delivery />} />
        <Route path={`${homepage}contacts`} element={<Contacts />} />
      </Routes>
    </div>
  );
}
