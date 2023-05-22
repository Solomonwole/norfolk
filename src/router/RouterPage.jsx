import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectRoutes from "../utils/ProtectRoutes";
import LoginScreen from "../auth/login/LoginScreen";
import Dashboard from "../admin/dashboard/Dashboard";
import Home from "../website/homepage/Home";
import Transactions from "../admin/transaction/Transactions";
import Support from "../admin/support/Support";
import Settings from "../admin/settings/Settings";
import ForgotScreen from "../auth/forgot/ForgotScreen";
import SignUp from "../auth/signup/SignUp";


function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotScreen />} />

        <Route path="/" element={<Home />} />
        <Route element={<ProtectRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterPage;
