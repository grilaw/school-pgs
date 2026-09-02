import "./index.css";
import { useState } from "react";
import NavBar from "./components/main/NavBar";
import Index from "./components/main/Index";
import SearchResults from "./components/searchResults/SearchResults";
import Queue from "./components/queue/Queue";
import Admin from "./components/admin/Admin";
import Profile from "./components/profile/profile";

export default function MyApp() {
  const [activeSection, setSection] = useState("home");
  const [searchQuery, setQuery] = useState("");

  function handleSearchEnter(e) {
    if (e.key === "Enter") {
      const query = e.target.value.trim();
      if (query) {
        console.log("Поиск:", query);
        setQuery(query);
        setSection("results");
      }
    }
  }

  const sections = {
    home: <Index handleSearchEnter={handleSearchEnter} />,
    results: <SearchResults query={searchQuery} />,
    queue: <Queue />,
    profile: <Profile />,
    admin: <Admin />,
  };

  return (
    <>
      <main className="grid grid-cols-[16rem_1fr]">
        <NavBar setSection={setSection} />
        {sections[activeSection] || sections.home}
      </main>
    </>
  );
}
