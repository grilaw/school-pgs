export default function SearchBar({ handleKeyDown }) {
  return (
    <div className="border border-black/10 rounded-full w-full h-10 bg-white shadow-sm flex flex-row items-center pl-2 gap-2">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Поиск песни"
        className="w-full h-full focus:outline-none"
        autoComplete="off"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
