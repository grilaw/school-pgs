import Card from "../Card";
import { CardBody, CardHeader, CardFooter } from "../Card";

export default function LastWinner() {
  return (
    <Card className="w-full xl:w-75">
      <CardHeader>Победитель прошлого голосования</CardHeader>
      <CardBody>
        <div className="flex flex-col items-center justify-center h-full w-auto text-center">
          <div className="aspect-square w-40 rounded-xl hidden xl:block bg-linear-to-r from-amber-300 to-amber-600 " />
          <div className="flex flex-col xl:block">
            <p className="text-base xl:text-2xl font-bold text-stone-900">
              <span className="xl:hidden">
                Навыаыв
                <span className="font-normal text-stone-600"> - фывфывфав</span>
              </span>
              <span className="hidden xl:inline">Навыаыв</span>
            </p>
            <p className="hidden xl:block text-base text-stone-600">
              фывфывфав
            </p>
          </div>

          <span className="text-xs xl:text-sm text-stone-500 mt-1 xl:mt-2 flex items-center gap-1">
            123123 голосов
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
