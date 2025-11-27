import { NavLink } from "react-router-dom";

export default function Footer() {
  const baseStyle = "flex-1 flex flex-col items-center justify-center text-xs transition-colors";
  const iconStyle = "w-6 h-6";
  return (
    <footer
      className="
        fixed bottom-0 left-1/2 transform -translate-x-1/2
        w-full max-w-[600px] h-20
        backdrop-blur-lg
        border-t border-gray-300/30
        rounded-t-2xl
        overflow-hidden
        shadow-[0_-4px_20px_rgba(0,0,0,0.12)]
        flex items-center justify-around
        z-50
      "
    >


      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative flex-1 h-full flex flex-col items-center justify-center text-xs
     after:transition-all after:duration-200
     ${isActive
            ? "text-main font-bold after:absolute after:left-0 after:right-0 after:bottom-1 after:h-2 after:bg-main"
            : "text-gray-700 font-normal after:h-0"
          }`
        }
      >

        <svg fill="none" strokeWidth={1.5} stroke="currentColor"
          className={`${iconStyle}`}
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.45-.45 1.18-.45 
            1.63 0L21.75 12M4.5 9.75v10.125c0 
            .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
            1.125-1.125h2.25c.621 0 1.125.504 
            1.125 1.125V21h4.125c.621 0 1.125-.504 
            1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        Home
      </NavLink>


      <button className="flex-1 flex flex-col items-center justify-center text-xs">
        <svg fill="none" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6 text-gray-700" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 
            1-2.247 2.118H6.622a2.25 2.25 0 0 
            1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 
            7.5h17.25c.621 0 1.125-.504 
            1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 
            0-1.125.504-1.125 1.125v1.5c0 .621.504 
            1.125 1.125 1.125Z" />
        </svg>
        Mine
      </button>

      {/* 3. 글쓰기 */}
      <button className="flex-1 flex flex-col items-center justify-center text-xs">
        <svg fill="none" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6 text-gray-700" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 
            1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        New
      </button>

      {/* 4. 채팅 */}
      <button className="flex-1 flex flex-col items-center justify-center text-xs">
        <svg fill="none" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6 text-gray-700" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M8.625 9.75a.375.375 0 1 
            1-.75 0 .375.375 0 0 1 .75 0Zm0 
            0H8.25m4.125 0a.375.375 0 1 
            1-.75 0 .375.375 0 0 1 .75 0Zm0 
            0H12m4.125 0a.375.375 0 1 
            1-.75 0 .375.375 0 0 1 .75 0Zm0 
            0h-.375m-13.5 3.01c0 1.6 1.123 
            2.994 2.707 3.227 1.087.16 
            2.185.283 3.293.369V21l4.184-4.183a1.14 
            1.14 0 0 1 .778-.332 48.294 48.294 
            0 0 0 5.83-.498c1.585-.233 2.708-1.626 
            2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 
            48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 
            3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        Chat
      </button>

      {/* 5. 마이페이지 */}
      <button className="flex-1 flex flex-col items-center justify-center text-xs">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"
          className="w-6 h-6 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15.75 6.75a3.75 3.75 0 1 
            1-7.5 0 3.75 3.75 0 0 1 7.5 
            0ZM4.5 20.25a8.25 8.25 0 1 
            1 15 0v.75H4.5v-.75Z" />
        </svg>
        My Page
      </button>

    </footer>
  );
}
