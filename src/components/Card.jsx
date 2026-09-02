export default function Card({ className = "", children, hover = false }) {
  return (
    <div
      className={`${className} p-5 border border-black/10 shadow-lg bg-white rounded-xl ${hover ? `hover:bg-sky-100 hover:scale-102 ease-in-out duration-300 transition-all origin-center cursor-pointer` : null}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="pb-3 mb-1 text-2xl font-header">{children}</div>;
}

export function CardBody({ children }) {
  return <div className="text-stone-800">{children}</div>;
}

export function CardFooter({ children }) {
  return (
    <div className="mt-3 text-sm font-light text-stone-500">{children}</div>
  );
}
