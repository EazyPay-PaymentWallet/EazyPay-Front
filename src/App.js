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
      </Routes>
    </Router>
  );
}

export default App;