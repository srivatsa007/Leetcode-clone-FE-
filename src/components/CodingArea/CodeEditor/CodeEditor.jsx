import Split from "react-split";
import LanguageSelector from "./LanguageSelector";
import CodeMirror from "@uiw/react-codemirror";
import { bbedit, bbeditInit } from "@uiw/codemirror-theme-bbedit";
import { javascript } from "@codemirror/lang-javascript";
import CodeEditorFooter from "./CodeEditorFooter";
import { useRef, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

function CodeEditor({ Problem }) {
  if (!localStorage.getItem(Problem.id)) {
    localStorage.setItem(Problem.id, Problem.starterCode);
  }
  const [user] = useAuthState(auth);
  const [caseNumber, setCaseNumber] = useState(1);
  const inputCode = useRef(Problem.starterCode);
  function handleOnChange(newValue) {
    localStorage.setItem(Problem.id, newValue);
  }
  const handleSubmit = async () => {
    if (!user) {
      alert("Please login to submit your code");
      return;
    }
    try {
      const cb = new Function(`return ${localStorage.getItem(Problem.id)}`)();
      // console.log(cb, typeof cb);
      const result = Problem.handlerFunction(cb);
      // const result = Problem.handlerFunction(cb);
      if (result) {
        alert("Congratulations! All tests passed");
        localStorage.setItem(`status_${Problem.id}`, "yes");
      } else {
        alert("Wrong answer");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="min-w-0 mb-2 bg-white m-2 ml-0.5 rounded-md">
      <LanguageSelector Problem={Problem} />
      <Split
        className="splitver h-[calc(100vh-160px)]"
        direction="vertical"
        sizes={[55, 45]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value={
              localStorage.getItem(Problem.id) != null
                ? localStorage.getItem(Problem.id)
                : inputCode.current
            }
            onChange={handleOnChange} // Update localStorage on change
            theme={bbedit}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div className="w-full px-5 overflow-hidden">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5">TestCases</div>
              <hr className="absolute bottom-0 h-0.5 w-full  rounded-full border-none bg-black" />
            </div>
          </div>
          <div className="flex">
            {Problem.examples.map((item) => (
              <div className="mr-2 items-start mt-2 text-black" key={item.id}>
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                    onClick={() => {
                      setCaseNumber(item.id);
                    }}
                    className="font-medium items-center transition-all focus:outline-none inline-flex bg-gray-200 hover:bg-gray-300 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap"
                  >
                    Case {item.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="font-semibold my-4">
            <p className="text-sm font-medium mt-1">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px]  bg-gray-200 border-transparent mt-2">
              {Problem.examples[caseNumber - 1].inputText}
            </div>
            <p className="text-sm font-medium mt-1 ">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px]  bg-gray-200 border-transparent mt-2">
              {Problem.examples[caseNumber - 1].outputText}
            </div>
          </div>
        </div>
      </Split>
      <CodeEditorFooter handleSubmit={handleSubmit} />
    </div>
  );
}

export default CodeEditor;
