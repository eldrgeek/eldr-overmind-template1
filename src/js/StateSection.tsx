import { CurrentModule, React, useApp } from "./CurrentModule";
import JSX from "./JSX";
export default function StateSection({
  section,
  title
}: {
  section: string;
  title?: string;
}) {
  const { state } = useApp();
  let contents = {};

  contents = {};
  Object.keys(state).forEach(key => {
    console.log(key, section, key.match(section));
    if (key.match(section)) {
      contents[key] = state[key];
    }
  });

  // console.log('contents',section,contents)
  return (
    <section className="  px-2">
      {/* <div className=" text-center">{title ? title : section}</div> */}
      <div className="">
        {Object.keys(contents).map(key => (
          <div key={key} className="flex divide-y divide-gray-40">
            <div
              className="my-2 mr-3 h-6
          
           pl-1 rounded inline-block 
           bg-white w-1/3 	"
            >
              {key}
            </div>
            <span className="my-2 mr-3 pl-1 rounded inline-block bg-white w-full">
              {" "}
              {JSX(contents[key])}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
CurrentModule(StateSection);
