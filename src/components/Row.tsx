import { SubjectTypes } from "../types/Subjects_Types";
type props = {
  subject: SubjectTypes;
  isAvailable: boolean;
};
function Row({ subject, isAvailable }: props) {
  let style = "";
  subject?.done
    ? (style =
        "rounded border-2 border-solid border-green-700 text-center my-5 mx-9 bg-green-500 hover:rotate-2 duration-100 shadow-lg md:w-2/5 w-full p-1")
    : (style =
        "rounded border-2 border-solid border-red-700 text-center my-5 mx-9 bg-red-500 hover:rotate-2 duration-100 shadow-2xl md:w-2/5 w-full p-1");
  if (isAvailable)
    style =
      "rounded border-2 border-solid border-blue-700 text-center my-5 mx-9 bg-blue-500 hover:rotate-2 duration-100 shadow-2xl md:w-2/5 w-full p-1";
  return (
    <li className={style}>
      <h4 className="text-2xl font-bold underline">{subject?.name}</h4>
      <div className="flex justify-around p-1">
        <p>Comisión: {subject?.code}</p>
        <p>
          Correlativas:
          {subject?.correlativity[0] > 1000
            ? subject?.correlativity.map((e: number) => {
                return `${e}, `;
              })
            : " Ninguna"}
        </p>
      </div>
    </li>
  );
}

export default Row;
