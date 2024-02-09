import Navbar from "../Header/Navbar";
import Split from "react-split";
import Description from "./Description/Description";
import CodeEditor from "./CodeEditor/CodeEditor";
import { list } from "../Problems/ProblemList";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function CodingArea() {
  //from the slug of url
  const data = useLocation().pathname.split("/");
  const index = data[data.length - 2];
  const name = data[data.length - 1].toLowerCase();
  const [popup, setpopup] = useState(false);
  const Problem = list[index].name;
  return (
    <>
      <Navbar pagination={true} setpopup={setpopup}></Navbar>

      <Split className="split overflow-x-hidden flex" minSize={0}>
        <Description Problem={Problem} />
        <CodeEditor Problem={Problem} />
      </Split>
    </>
  );
}

export default CodingArea;
