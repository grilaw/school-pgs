export default function Button({ children, onClick, isActive }) {
  return (
    <button
      className={
        !isActive
          ? "button bg-gray-300 outline-2 outline-taupe-500 outline-offset-2 justify-center align-middle rounded-md px-5 py-3 hover:bg-gray-400 m-3"
          : "button bg-taupe-700 outline-2 outline-taupe-200 text-white outline-offset-2 justify-center align-middle rounded-md px-5 py-3 hover:bg-gray-400 m-3"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
