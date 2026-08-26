import "./index.css";
import { useState } from "react";
import { tracks } from "./components/Tracks";
import NavBar from "./components/NavBar";
import TrackNode from "./components/TrackNode";
import Button from "./components/Button";
import Header from "./components/Header";

const users = {
  banned: "Ваня, Петя, Анатолий",
  unbanned: "Максим",
  tap: "привет",
};

export default function MyApp() {
  const [content, setContent] = useState();

  function handleCLick(text) {
    setContent(text);
  }

  return (
    <>
      <main className="grid grid-cols-[16rem_1fr]">
        <NavBar />
        <div className="bg-cyan-600 w-full">
          <Header />
          <div className="p-2 flex flex-col gap-3">
            {tracks.map((track, index) => (
              <TrackNode key={index} {...track} />
            ))}
          </div>
          <Button
            isActive={content == "tap"}
            onClick={() => handleCLick("tap")}
          >
            Тык
          </Button>
          <Button
            isActive={content == "banned"}
            onClick={() => handleCLick("banned")}
          >
            Забанить
          </Button>
          <Button
            isActive={content == "unbanned"}
            onClick={() => handleCLick("unbanned")}
          >
            Разбанить
          </Button>

          {!content && <p>нажимай</p>}
          {content && <p>{users[content]}</p>}
        </div>
      </main>
    </>
  );
}
