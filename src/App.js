import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Signup from './pages/signup'
import Signin from './pages/signin'
import Mobilerecharge from './pages/mobilerecharges'
import Transactionhistory from './pages/transactionhistory'
import Addmoney from './pages/addmoney'
import Paynumber from './pages/paynumber'
import Banktransfer from './pages/banktransfer'
import Payupi from './pages/payupi'
import Dthcable from './pages/dthcable'
import Googleplay from './pages/googleplay'
import Fastagrecharge from './pages/fastagrecharge'
import Educationfees from './pages/educationfees'
import Electricitybill from './pages/electricitybill'
import Broadbandbill from './pages/broadbandbill'
import Help from './pages/help'
import Foodreward from './pages/foodrewards.js'
import Shoppingreward from './pages/shoppingrewards.js'
import Travelreward from './pages/travelrewards.js'
import Paymentmethod from './pages/paymentmethod.js'
import Ministatement from './pages/ministatement.js'
import Dialogbox from './pages/dialogbox.js'
import EReciept from './pages/ereciept.js'
import Chat from './pages/chat.js'
import Donateorganization from './pages/donate.js'
import Donate from './pages/donateform.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Login" element={<Signin />} />
        <Route path="/MobileRecharge" element={<Mobilerecharge />} />
        <Route path="/TransactionHistory" element={<Transactionhistory />} />
        <Route path="/AddMoney" element={<Addmoney />} />
        <Route path="/PayNumber" element={<Paynumber />} />
        <Route path="/BankTransfer" element={<Banktransfer />} />
        <Route path="/PayUPI" element={<Payupi />} />
        <Route path="/DTHCableTV" element={<Dthcable />} />
        <Route path="/GooglePlay" element={<Googleplay />} />
        <Route path="/FASTagRecharge" element={<Fastagrecharge />} />
        <Route path="/EducationFees" element={<Educationfees />} />
        <Route path="/Electricity" element={<Electricitybill />} />
        <Route path="/BroadbandLandline" element={<Broadbandbill />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/FoodOrders" element={<Foodreward />} />
        <Route path="/Shopping" element={<Shoppingreward />} />
        <Route path="/Travel" element={<Travelreward />} />
        <Route path="/PaymentMethod" element={<Paymentmethod />} />
        <Route path="/MiniStatement" element={<Ministatement />} />
        <Route path="/DialogBox" element={<Dialogbox />} />
        <Route path="/E-Reciept" element={<EReciept />} />
        <Route path="/ChatSupport" element={<Chat />} />
        <Route path="/DonateOrganization" element={<Donateorganization />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;