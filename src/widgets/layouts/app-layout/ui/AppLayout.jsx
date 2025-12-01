import { useEffect } from "react";
import Header from '@widgets/header';
import Footer from '@widgets/footer';
import { Outlet } from "react-router-dom";
import { Bg01 } from '@shared/assets/images';

const AppLayout = () => {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = Bg01;
    link.fetchPriority = "high";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex justify-center relative overflow-hidden">
      <div className="layout bg-grid min-h-screen relative z-10">
        <img
          src={Bg01}
          alt=""
          width={200}
          height={200}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          aria-hidden
          className="
                pointer-events-none 
                select-none 
                absolute 
                -z-10
                right-0
                top-[60px]   
                w-[200px]
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
