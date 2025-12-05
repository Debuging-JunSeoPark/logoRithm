import { Navigate } from "react-router-dom";
import { tokenStorage } from "@/shared/auth/token";
import { ROUTES } from '@/shared/config/routes';

export const ProtectedRoute = ({ children }) => {
    const isAuth = tokenStorage.isAuthenticated()
    if (!isAuth) {
        return <Navigate to={ROUTES.LOG_IN} replace />;
    }
    return children;
};