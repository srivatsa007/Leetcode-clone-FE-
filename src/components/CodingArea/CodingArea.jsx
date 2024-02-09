import Navbar from "../Header/Navbar";
import Split from "react-split";
import Description from "./Description/Description";
import CodeEditor from "./CodeEditor/CodeEditor";
import { ProblemsList } from "../Problems/ProblemList";
import { useLocation } from "react-router-dom";

function CodingArea() {
  //from the slug of url
  const data = useLocation().pathname.split("/");
  const index = data[data.length - 2];
  const name = data[data.length - 1].toLowerCase();

  const Problem = ProblemsList[index].name;
  return (
    <>
        <Navbar pagination={true}></Navbar>

        <Split className="split overflow-x-hidden" minSize={0}>
            <Description Problem={Problem} />
            <CodeEditor Problem={Problem} />
        </Split>
    </>
  );
}

export default CodingArea;
