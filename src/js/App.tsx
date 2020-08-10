import React from "react";
import { CurrentModule, useApp } from "./CurrentModule";
import Button from "./components/Button";
// import JSX from "./JSX";
import StateSection from "./StateSection";
function App() {
  const { actions } = useApp();
  const [thing, setThing] = React.useState("this");
  React.useEffect(() => {
    const doSync = async () => setThing(await actions.rooms.fiddle());
    doSync();
  }, []);

  return (
    <div className="bg-gray-300 divide-y divide-gray-800">
<div className="h-20 bg-gray-400 border border-blue-300 hover:border-red-200">
  <h1> this stuff
    <h2></h2>
  </h1>
</div>
      <input
        className="bg-white focus:outline
         focus:shadow-outline border border-gray-500 
         rounded-lg py-2 px-4 block w-full 
         appearance-none leading-normal"
        type="email"
        placeholder="jane@example.com"
      />
      <header className="header">
        <h1 className="text-center border- py-2 bg-blue-300">
          Overmind!!! and {thing}{" "}
        </h1>
      </header>

      <StateSection section={"^[^_]"} title="App" />
      <StateSection section="_message" />
      <StateSection section="_server" />

      <Button action="setMessage" value="whatever" />
    </div>
  );
}

export default App;
CurrentModule(App);
