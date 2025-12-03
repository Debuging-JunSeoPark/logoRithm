import { useEffect } from "react";
import Header from '@widgets/header';
import Footer from '@widgets/footer';
import { Outlet } from "react-router-dom";
import { Bg01,Bg02 } from '@shared/assets/images';

const AppLayout = () => {

  return (
    <div className="min-h-screen bg-background flex justify-center relative overflow-hidden">
      <div className="layout bg-grid min-h-screen relative z-10">
        <img
          src={Bg02}
          alt=""
          loading="eager"
          decoding="async"
          aria-hidden
          className="
                pointer-events-none 
                select-none 
                absolute 
                opacity-50
                -z-10
                right-0
                top-[80px]   
                w-[150px]
      "
        />

        <Header />
        <main className="py-6 pb-24 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
