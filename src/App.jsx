import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from '@/shared/config/routes';

import AppLayout from '@widgets/layouts/app-layout';
import AuthLayout from '@widgets/layouts/auth-layout';

import HomePage from '@/pages/home';
import SignUpPage from '@/pages/sign-up';
import LogInPage from '@/pages/log-in';
import PostDetailPage from "@/pages/post-detail";
import PostCreatePage  from "@/pages/post-create";
import MyPostsPage from "@/pages/my-posts";
import MyPage from "@/pages/my-page";
import  {ProtectedRoute } from "@/app/routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* -------- App 레이아웃 (헤더/푸터 있음) -------- */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path={ROUTES.MY_POSTS} element={<ProtectedRoute><MyPostsPage /></ProtectedRoute>} />
          <Route path="/posts/:postId" element={<ProtectedRoute><PostDetailPage /></ProtectedRoute>} />
          <Route path="/posts/new" element={<ProtectedRoute><PostCreatePage /></ProtectedRoute>} />
          <Route path={ROUTES.MY_PAGE} element={<ProtectedRoute><MyPage /></ProtectedRoute>} />
        </Route>

        {/* -------- Auth 레이아웃 (헤더/푸터 없음) -------- */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={ROUTES.LOG_IN} element={<LogInPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
