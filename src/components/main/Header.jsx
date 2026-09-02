import { CardBody, CardHeader } from "../Card";
import Card from "../Card";

export default function Header() {
  return (
    <Card>
      <CardHeader>
        Музыка которую <span className="text-sky-600">любят!</span>
      </CardHeader>
      <CardBody>
        <p className="text-nm w-full text-stone-800">
          Голосуй за треки которые тебе нравятся, итоги голосование будут играть
          на перемене по <strong>понедельникам</strong> и{" "}
          <strong>четвергам</strong>!
        </p>
      </CardBody>
    </Card>
  );
}
