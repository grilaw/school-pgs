import { tracks } from "../Lists/Tracks";
import QueueNode from "./QueueNode";

export default function Queue() {
  return (
    <ul className="flex flex-wrap flex-row gap-3 h-fit justify-center p-5">
      {tracks.map((track) => (
        <QueueNode key={track.id} {...track} />
      ))}
    </ul>
  );
}
