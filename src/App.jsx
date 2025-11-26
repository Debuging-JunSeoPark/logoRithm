import '@app/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from '@widgets/layouts/app-layout';
import AuthLayout from '@widgets/layouts/auth-layout';

import HomePage from '@/pages/home';
import SignUpPage from '@/pages/sign-up';
import { ROUTES } from '@/shared/config/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* -------- App 레이아웃 (헤더/푸터 있음) -------- */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* 홈, 피드, 글 상세, 채팅 등 */}
        </Route>

        {/* -------- Auth 레이아웃 (헤더/푸터 없음) -------- */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
