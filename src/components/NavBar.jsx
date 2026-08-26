import { useState } from "react";
import NavBtn from "./NavBtn";

const navBtns = [
  { id: "home", icon: "fa-solid fa-house", title: "Главная" },
  { id: "queue", icon: "fa-solid fa-bars", title: "Очередь" },
  { id: "profile", icon: "fa-solid fa-user", title: "Профиль" },
  { id: "admin", icon: "fa-solid fa-shield", title: "Админ-панель" },
];

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <nav className="flex h-screen flex-col border-r-2 border-solid border-white/10 bg-sky-700 px-4 w-64">
      {/* Логотип с анимацией */}
      <div className="mt-6 mb-6 flex h-12 w-full items-center animate-fade-in">
        <h1 className="flex items-center gap-2 text-xl font-bold text-white">
          <i className="bi bi-vinyl-fill text-2xl text-blue-400"></i>
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Школьный DJ
          </span>
        </h1>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-4"></div>

      <ol className="flex flex-col gap-1 w-full flex-1">
        {navBtns.map((btn) => (
          <NavBtn
            key={btn.id}
            icon={btn.icon}
            isActive={activeItem === btn.id}
            onClick={() => setActiveItem(btn.id)}
          >
            {btn.title}
          </NavBtn>
        ))}
      </ol>

      {/* Нижняя часть с пользователем */}
      <div className="mt-auto mb-3 pt-4 border-t border-white/10 animate-slide-up">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm animate-pulse-slow">
            DJ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              Администратор
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
