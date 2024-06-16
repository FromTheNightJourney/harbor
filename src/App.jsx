// src/app.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Ongoingshipments from './pages/ongoingshipments.jsx';
import ConfirmOrder from './pages/confirmorder.jsx'; 
import ShippingHistory from './pages/shippinghistory.jsx';
import AdminHomeMobile from './pages/adminmobilehome.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/adminmobilehome" element={<AdminHomeMobile />} />
        <Route path="*" element={<Navigate to="/adminmobilehome" />} />
        <Route path="/" element={<AdminHomeMobile />} />
        <Route path="/ongoingshipments" element={<Ongoingshipments />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} /> 
        <Route path="/shippinghistory" element={<ShippingHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
