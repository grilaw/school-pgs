export default function Card({ children }) {
  return (
    <div className="m-10 p-5 max-w-110 h-fit border border-black/10 shadow-xl bg-white text-2xl rounded-xl">
      {children}
    </div>
  );
}
