import { useState } from "react";

const navBtns = [
  { id: "home", icon: "fa-solid fa-house", title: "Главная" },
  { id: "queue", icon: "fa-solid fa-bars", title: "Очередь" },
  { id: "profile", icon: "fa-solid fa-user", title: "Профиль" },
  { id: "admin", icon: "fa-solid fa-shield", title: "Админ-панель" },
];

function NavBtn({ icon, children, isActive, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`
        relative flex items-center gap-3 px-3 py-2 rounded-lg 
        text-white transition-all duration-300 cursor-pointer text-sm
        before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-cyan-400/10
        before:opacity-0 before:scale-95 before:transition-all before:duration-300
        hover:before:opacity-100 hover:before:scale-100
        ${isActive ? "text-white" : "text-white/60 hover:text-white"}
        ${isActive ? "before:opacity-100 before:scalex-105 hover:before:scalex-105 before:bg-cyan-500/40" : ""}
      `}
    >
      <i className={`${icon} relative z-10 text-lg w-5 text-center`}></i>
      <span className="relative z-10">{children}</span>
    </li>
  );
}

export default function NavBar({ setSection }) {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <nav className="sticky top-0 flex h-screen flex-col border-r-2 border-solid border-white/10 bg-sky-700 px-4 w-64 overflow-y-auto">
      {/* Логотип */}
      <div className="sticky top-0 bg-sky-700 pt-6 pb-6 z-10">
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
            onClick={() => {
              setActiveItem(btn.id);
              setSection(btn.id);
            }}
          >
            {btn.title}
          </NavBtn>
        ))}
      </ol>

      {/* Нижняя часть - теперь тоже прилипает к низу */}
      <div className="sticky bottom-0 bg-sky-700 pt-4 pb-3 border-t border-white/10">
        <div
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
          onClick={() => {
            setActiveItem("profile");
            setSection("profile");
          }}
        >
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
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
