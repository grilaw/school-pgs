import SongVote from "./SongVote";
import Header from "./Header";
import LastWinner from "./LastWinner";
import NewsFeed from "./NewsFeed";
import SearchBar from "./SearchBar";

export default function Index({ handleSearchEnter }) {
  return (
    <div className="bg-taupe-50 w-full p-4 flex flex-col gap-5">
      <Header />
      <SearchBar handleKeyDown={handleSearchEnter} />
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-4">
        <SongVote />
        <LastWinner />
      </div>
      <NewsFeed />
    </div>
  );
}
