import RandomCover from "../RandomCover";
import { useState } from "react";

export default function ResultsTrackNode({
  title,
  author,
  album,
  year,
  duration,
}) {
  const [submitState, setSubmitState] = useState("default");

  const states = {
    default: {
      gradient: "from-sky-700 to-sky-500",
      icon: "fa-solid fa-bars text-white",
    },
    loading: {
      gradient: "from-gray-700 to-gray-800",
      icon: "fa-solid fa-spinner fa-spin text-white",
    },
    submitted: {
      gradient: "from-lime-400 to-lime-600",
      icon: "fa-solid fa-check text-white",
    },
    declined: {
      gradient: "from-red-900 to-red-700",
      icon: "fa-solid fa-xmark text-white",
    },
  };

  function handleClick() {
    if (submitState === "submitted") {
      setSubmitState("default");
      return;
    }

    setSubmitState("loading");

    setTimeout(() => {
      setSubmitState("submitted");
    }, 1500);
  }

  function handleDoubleClick() {
    setSubmitState("declined");
  }

  const currentState = states[submitState];

  return (
    <div className="grid grid-cols-[auto_1fr_1fr_1fr] h-16 w-full border-2 border-black/10 rounded-lg px-2 py-1.5 gap-3 items-center shadow-sm hover:bg-black/5 ease-in-out duration-200 transition-all origin-center cursor-default">
      <div
        className={`aspect-square h-full w-auto rounded-sm shrink-0 ${RandomCover()}`}
      />

      <div className="flex flex-col justify-between h-full min-w-0">
        <span className="font-semibold truncate">{title}</span>
        <span className="text-black/60 truncate">{author}</span>
      </div>

      <div className="flex flex-col justify-between h-full text-center min-w-0">
        <span className="text-black/80 truncate">{album}</span>
        <span className="text-black/60 truncate">{year}</span>
      </div>

      <div className="flex items-center justify-end">
        <span className="text-right shrink-0">{duration}</span>
        <button
          className={`h-9 w-9 mx-2 rounded-lg bg-linear-to-bl ${currentState.gradient} hover:scale-110 flex items-center justify-center cursor-pointer transition-all duration-300 ${
            submitState === "submitted" ? "scale-110" : ""
          }`}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        >
          <i className={currentState.icon}></i>
        </button>
      </div>
    </div>
  );
}
