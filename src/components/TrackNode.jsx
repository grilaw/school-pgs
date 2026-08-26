export default function TrackNode(props) {
  return (
    <li className="flex flex-row h-14 w-full border-2 border-black rounded-2xl px-2 py-1 gap-3">
      <div className="aspect-square h-full w-auto bg-linear-to-tr from-taupe-800 to-taupe-400 rounded-sm" />
      <div className="flex flex-col justify-between h-full">
        <span>{props.title}</span>
        <span>{props.author}</span>
      </div>
    </li>
  );
}
