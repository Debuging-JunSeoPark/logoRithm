import Header from '@widgets/header';
import Footer from '@widgets/footer';
import { Outlet } from "react-router-dom";
import { Bg01 } from '@shared/assets/images';

const AppLayout = () => {

  return (
    <div className="min-h-screen bg-background flex justify-center relative overflow-hidden">


      <div className="layout bg-grid min-h-screen relative z-10">


        <img
          src={Bg01}
          alt="background decorative bottom"
          className="
                pointer-events-none 
                select-none 
                absolute 
                -z-10
                right-0
                top-[70px]   
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
