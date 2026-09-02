import Card from "../Card";
import { CardBody, CardFooter, CardHeader } from "../Card";
import { newsItems } from "../Lists/Articles";
import RandomCover from "../RandomCover";

function NewsCard({ head, body, footer }) {
  return (
    <a className="block h-full">
      <Card className="h-full w-full flex flex-col" hover={true}>
        <div className={`w-full aspect-21/9 shrink-0 ${RandomCover()}`} />

        <CardHeader className="shrink-0">
          <p className="text-xl line-clamp-2 mt-2">{head}</p>
        </CardHeader>

        <CardBody className="flex-1 min-h-0">
          <p className="line-clamp-3">{body}</p>
        </CardBody>

        <CardFooter className="shrink-0 mt-auto pt-2">
          <p className="truncate">{footer}</p>
        </CardFooter>
      </Card>
    </a>
  );
}

export default function NewsFeed() {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {newsItems.slice(0, 6).map((article) => {
        return <NewsCard key={article.head} {...article} />;
      })}
    </ul>
  );
}
