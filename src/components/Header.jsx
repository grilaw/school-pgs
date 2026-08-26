import Card from "./Card";

export default function Header() {
  return (
    <Card>
      <h1 className="font-header text-stone-900 mb-3">
        Музыка которую <span className="text-sky-600">любят!</span>
      </h1>
      <p className="text-[0.6em] w-full text-stone-800">
        Голосуй за треки которые тебе нравятся, итоги голосование будут играть
        на перемене по понедельникам и четвергам!
      </p>
    </Card>
  );
}
