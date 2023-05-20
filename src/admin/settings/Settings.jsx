import { useEffect, useState } from "react";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import { Welcome } from "../dashboard/styled";
import { AuthHTwo } from "../../GlobalStyle";
import { Layout, TabBg } from "./styled";
import AccountInfo from "./tabs/AccountInfo";
import PaymentInfo from "./tabs/PaymentInfo";
import SecurityInfo from "./tabs/SecurityInfo";


function Settings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <AdminDashboardLayout>
      <Welcome>
        <AuthHTwo>Settings</AuthHTwo>
      </Welcome>

      <Layout>
        <TabBg>
          <button
            className={activeTab === 1 ? "active" : "inactive"}
            onClick={() => handleTabClick(1)}
          >
            Account Info
          </button>
          <button
            className={activeTab === 2 ? "active" : "inactive"}
            onClick={() => handleTabClick(2)}
          >
            Payment Info
          </button>
          <button
            className={activeTab === 3 ? "active" : "inactive"}
            onClick={() => handleTabClick(3)}
          >
            Security Info
          </button>
        </TabBg>
      </Layout>

      {activeTab === 1 && <AccountInfo />}
      {activeTab === 2 && <PaymentInfo />}
      {activeTab === 3 && <SecurityInfo />}
    </AdminDashboardLayout>
  );
}

export default Settings;
