import { tracks } from "../Lists/Tracks";
import Card, { CardHeader } from "../Card";
import ResultsTrackNode from "./ResultsTrackNode";

export default function SearchResults({ query }) {
  const filtered = tracks.filter((track) =>
    track.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Card className="m-4 w-full h-fit">
      <CardHeader>
        <p className="w-full line-clamp-4">
          Результаты по запросу: <span className="text-sky-400">{query}</span>
        </p>
      </CardHeader>
      {filtered.length === 0 ? (
        <div className="text-center py-8 text-black/60">
          <p>Ничего не найдено</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {filtered.map((track, index) => (
            <li key={`${track.title}-${index}`}>
              <ResultsTrackNode {...track} />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
