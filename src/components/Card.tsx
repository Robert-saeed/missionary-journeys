import { Link } from "react-router-dom";
import "../globals.css";

type CardType = {
  link: string;
  name: string;
  human: string;
  stations: string[];
};

function Card({ link, name, human, stations }: CardType) {
  const listed: string[] = stations;

  return (
    <>
      <div className="card relative flex flex-col gap-4 p-4 m-5 w-76 h-130 rounded-xl shadow-inner text-right bg-[#00c080] bg-[radial-gradient(at_88%_40%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_49%_30%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_14%_26%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_0%_64%,#00c080_0px,transparent_85%),radial-gradient(at_41%_94%,#00c080_0px,transparent_85%),radial-gradient(at_100%_99%,#00c080_0px,transparent_85%)]">
        <div>
          <h1 className="text-white text-2xl">{name}</h1>
          <p className="mt-1 w-5/6 text-xs text-(--paragraph)">{human}</p>
        </div>

        <hr className="w-full h-[0.1rem] border-0 bg-(--line)" />

        <ul className="flex flex-col items-right gap-2">
          {listed.map((list, index) => (
            <li className="flex items-center gap-2" key={index}>
              <span className="flex justify-center items-center w-4 h-4 rounded-full bg-(--primary)">
                <svg
                  className="w-3 h-3 fill-(--black)"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  ></path>
                </svg>
              </span>
              <span className="text-lg text-white">{list}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/${link}-journey`}
          className="cursor-pointer p-2 mb-0 mt-auto w-full text-md text-white rounded-full border-0 bg-linear-[0deg,#00c080,#00c080_100%] shadow-[inset_0_-2px_25px_-4px_var(--white)]"
        >
          تعلم اكثر ...
        </Link>
      </div>
    </>
  );
}

export default Card;
