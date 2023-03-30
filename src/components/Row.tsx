import { SubjectTypes } from "../types/Subjects_Types";
type props = {
  subject: SubjectTypes;
  isAvailable: boolean;
};
function Row({ subject, isAvailable }: props) {
  let style = "";
  subject?.done
    ? (style =
        "  text-center my-5 mx-9 bg-green-400 hover:rotate-2 duration-100 shadow-lg md:w-2/5 w-full")
    : (style =
        " text-center my-5 mx-9 bg-red-400 hover:rotate-2 duration-100 shadow-2xl md:w-2/5 w-full");
  if (isAvailable)
    style =
      " text-center my-5 mx-9 bg-blue-400 hover:rotate-2 duration-100 shadow-2xl md:w-2/5 w-full";
  return (
    <li className={style}>
      <h4 className="text-2xl font-bold underline">{subject?.name}</h4>
      <p>Comisión: {subject?.code}</p>
      <p>
        Correlativas:
        {subject?.correlativity[0] > 1000
          ? subject?.correlativity.map((e: number) => {
              return `${e}, `;
            })
          : " Ninguna"}
      </p>
      <p></p>
    </li>
  );
}

export default Row;
