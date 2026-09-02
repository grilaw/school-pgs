import { useState } from "react";
import Card from "../Card";
import { CardBody, CardHeader } from "../Card";
import { tracks } from "../Lists/Tracks";
import { votes } from "../Lists/Votes";
import RandomCover from "../RandomCover";
// Функция подсчёта процентов
function getScore(id) {
  const total = Object.values(votes).reduce((acc, val) => acc + val, 0);
  if (total === 0) return 0;
  return Math.round((votes[id] / total) * 100);
}

function TrackNode({
  title,
  author,
  album,
  year,
  duration,
  onClick,
  isVoted,
  percentage,
}) {
  return (
    <div
      className="grid grid-cols-[auto_1fr_1fr_1fr] h-16 w-full border-2 border-black/10 rounded-lg px-2 py-1.5 gap-3 items-center shadow-sm hover:bg-sky-200 hover:scale-x-101 ease-in-out duration-200 transition-all origin-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`aspect-square h-full w-auto rounded-sm shrink-0 ${RandomCover()}`}
      />

      <div className="flex flex-col justify-between h-full min-w-0">
        <span className="font-semibold truncate">{title}</span>
        <span className="text-black/60 truncate">{author}</span>
      </div>

      <div className="flex flex-col justify-between h-full text-center min-w-0">
        <p className="text-black/80 truncate">
          {album} • {year}
        </p>
        <span className="leading-tight text-black/50">
          {isVoted ? `${percentage}` : "0"}%
        </span>
        {/* Контейнер для прогресс-бара */}
        <div className="h-1 bg-stone-300 w-full rounded-full overflow-hidden">
          <div
            className="h-full bg-sky-400 transition-all duration-300 ease-in-out"
            style={{
              width: isVoted ? `${percentage}%` : "0%",
            }}
          />
        </div>
      </div>

      <span className="text-right shrink-0">{duration}</span>
    </div>
  );
}

export default function SongVote() {
  // Состояние: какой трек выбран (храним id)
  const [isVoted, setVoted] = useState(false);

  const handleVote = () => {
    setVoted(true);
  };

  return (
    <Card>
      <CardHeader>Голосование</CardHeader>
      <CardBody>
        <ul className="flex flex-col gap-3">
          {tracks.slice(0, 4).map((track) => {
            const percentage = getScore(track.id);
            return (
              <li key={track.id}>
                <TrackNode
                  {...track}
                  onClick={() => handleVote()}
                  isVoted={isVoted}
                  percentage={percentage}
                />
              </li>
            );
          })}
        </ul>
      </CardBody>
    </Card>
  );
}
