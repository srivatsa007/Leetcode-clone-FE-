import { BsChevronUp } from "react-icons/bs";
function EditorFooter({ handleSubmit }) {
  return (
    <div className="flex  bottom-0 z-10 w-full">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="px-3 py-1.5 font-medium items-center transition-all inline-flex  bg-gray-200 text-sm hover:bg-gray-400 text-black hover:text-white rounded-lg pl-3 pr-2">
            Console
            <div className="ml-1 transform transition flex items-center">
              <BsChevronUp className="fill-gray-600 mx-1" />
            </div>
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button
            onClick={handleSubmit}
            className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-gray-200 hover:bg-gray-600 text-gray-800 hover:text-white rounded-lg"
          >
            Run
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-green-600 hover:bg-green-800 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorFooter;
