import { SubjectTypes } from "../types/Subjects_Types";
import { isAvailable } from "./controllers";
type props = {
  subject: SubjectTypes;
};
function Row({ subject }: props) {
  let style = "";
  subject?.done
    ? (style =
        "  text-center my-5 mx-9 bg-green-400 hover:rotate-2 duration-100 shadow-lg")
    : (style =
        " text-center my-5 mx-9 bg-red-400 hover:rotate-2 duration-100 shadow-2xl");
  if (isAvailable(subject))
    style =
      " text-center my-5 mx-9 bg-blue-400 hover:rotate-2 duration-100 shadow-2xl";
  return (
    <div className={style}>
      <h4 className="text-2xl font-bold underline">{subject?.name}</h4>
      <p>code: {subject?.code}</p>
      <p>
        correlativity:
        {subject?.correlativity.length >= 1
          ? subject?.correlativity.map((e: number) => {
              return `${e}, `;
            })
          : "none"}
      </p>
      <p></p>
    </div>
  );
}

export default Row;
