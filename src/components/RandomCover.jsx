const covers = [
  "bg-linear-to-r from-purple-700 to-pink-500",
  "bg-linear-to-l from-blue-700 to-cyan-400",
  "bg-linear-to-b from-emerald-700 to-teal-400",
  "bg-linear-to-t from-red-700 to-orange-400",
  "bg-linear-to-tr from-indigo-700 to-sky-500",
  "bg-linear-to-bl from-rose-700 to-amber-400",
  "bg-linear-to-br from-violet-700 to-fuchsia-500",
  "bg-linear-to-tl from-cyan-700 to-blue-400",
  "bg-linear-to-r from-amber-700 to-yellow-400",
  "bg-linear-to-l from-lime-700 to-green-400",
  "bg-linear-to-b from-fuchsia-700 to-pink-400",
  "bg-linear-to-t from-sky-700 to-indigo-400",
  "bg-linear-to-tr from-orange-700 to-rose-400",
  "bg-linear-to-bl from-teal-700 to-cyan-400",
  "bg-linear-to-br from-emerald-700 to-lime-400",
  "bg-linear-to-tl from-pink-700 to-rose-400",
  "bg-linear-to-r from-violet-700 to-indigo-400",
  "bg-linear-to-l from-blue-700 to-sky-400",
  "bg-linear-to-b from-amber-700 to-orange-400",
  "bg-linear-to-t from-green-700 to-emerald-400",
];

export default function RandomCover() {
  // 1. Generate a random index between 0 and choices.length - 1
  const randomIndex = Math.floor(Math.random() * covers.length);

  // 2. Grab the item
  const randomChoice = covers[randomIndex];
  return randomChoice;
}
