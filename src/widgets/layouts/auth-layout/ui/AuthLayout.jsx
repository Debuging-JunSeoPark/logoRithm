import { Outlet } from "react-router-dom";
import Header from '@widgets/header';

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-background flex justify-center">
            <div className="layout bg-grid min-h-screen relative">
                <Header />
                <Outlet /> 
            </div>
        </div>
    );
}
