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
import PaymentAndDelivery from "../../pages/PaymentAndDelivery";
import Contacts from "../../pages/Contacts";
import "./content.scss";

export default function Content() {
  return (
    <div className='app-content'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/classic' element={<ClassicBouquets />} />
        <Route path='/mono' element={<MonoBouquets />} />
        <Route path='/mixed' element={<MixedBouquets />} />
        <Route path='/mixed' element={<MixedBouquets />} />
        <Route path='/boxes' element={<InBoxBouquets />} />
        <Route path='/wow' element={<WowEffect />} />
        <Route path='/promo' element={<PromoBouquets />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/payment-&-delivery' element={<PaymentAndDelivery />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
}
