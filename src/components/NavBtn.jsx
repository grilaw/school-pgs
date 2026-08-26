export default function NavBtn({ icon, children, isActive, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`
        relative flex items-center gap-3 px-3 py-2 rounded-lg 
        text-white transition-all duration-300 cursor-pointer
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
