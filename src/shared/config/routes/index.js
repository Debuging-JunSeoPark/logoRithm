export const ROUTES = {
    HOME: '/',
    SIGN_UP: '/sign-up',
    LOG_IN: '/log-in',
    MY_POSTS: '/posts/me',
    MY_PAGE: '/my-page',

    POST_DETAIL: (postId) => `/posts/${postId}`,
    POST_CREATE: '/posts/new',
};
