import { CardBody } from "../Card";
import Card from "../Card";
import RandomCover from "../RandomCover";

export default function QueueNode({ artwork, title, author, duration }) {
  return (
    <li className="w-50 h-fit">
      {/* 4 колонки с учетом gap */}
      <Card className="w-full h-full flex flex-col">
        <div
          className={`w-full h-auto aspect-square rounded-md ${RandomCover()}`}
        />
        <CardBody>
          <div>
            <p className="font-semibold truncate mt-2">{title}</p>
            <p className="truncate">{author}</p>
          </div>
        </CardBody>
      </Card>
    </li>
  );
}
