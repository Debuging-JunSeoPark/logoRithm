import Header from '@widgets/header';
import Footer from '@widgets/footer';
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="layout bg-grid min-h-screen relative">
        <Header />
        <main className="py-6 pb-24 pt-20"><Outlet /> </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
