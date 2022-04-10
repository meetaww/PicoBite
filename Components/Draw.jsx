import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { MdDraw } from "react-icons/md";
import { MdOutlineUndo } from "react-icons/md";
import { MdOutlineRedo } from "react-icons/md";
import { MdOutlineLayersClear } from "react-icons/md";
import { BsFillEraserFill } from "react-icons/bs";

function Draw() {
  const canvasEl = React.useRef(null);
  const handleErease = () => {
    canvasEl.current.eraseMode(true);
  };
  const handleDraw = () => {
    canvasEl.current.eraseMode(false);
  };
  const handleClear = () => {
    canvasEl.current.resetCanvas();
  };
  const handleUndo = () => {
    canvasEl.current.undo();
  };
  const handleRedo = () => {
    canvasEl.current.redo();
  };
  return (
    <div className='flex w-[80%] h-[80%] flex-row z-10 mx-auto mt-12'>
      <div className=' m-4 mr-2 mt-0 ml-2 w-full  rounded-xl overflow-hidden shadow-xl'>
        <div className='w-full h-6 relative top-0 dark:bg-gray-200 bg-gray-200 rounded-t-lg flex flex-row items-center ease-linear duration-200'>
          <div className='h-3 w-3 rounded-full cursor-pointer bg-[#FF605C] hover:bg-[#b94846] m-1 ml-3'></div>
          <div className='h-3 w-3 rounded-full cursor-pointer bg-[#FFBD44] hover:bg-[#ca9737] m-1'></div>
          <div className='h-3 w-3 rounded-full cursor-pointer bg-[#00CA4E] hover:bg-[#00a53f] m-1'></div>
          <div className=' font-semibold ml-[40%] text-gray-500'>
            Whiteboard
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="w-[95%] h-[550px] ">
            <ReactSketchCanvas
              ref={canvasEl}
              width='100%'
              height='100%'
              strokeWidth={2}
              strokeColor='#000'
            />
          </div>
          <div className="flex flex-col mx-auto">
            <button className="my-2 mt-4 bg-black hover:scale-[1.09] hover:bg-[#252525] active:scale-[0.99] text-white font-bold py-2 px-2 w-12 rounded-lg ease-linear duration-100" type='button' onClick={handleDraw}>
              <MdDraw color="#fff" size={30}/>
            </button>
            <button className="my-2 bg-black hover:scale-[1.09] hover:bg-[#252525] active:scale-[0.99] text-white font-bold py-2 px-2 w-12 rounded-lg ease-linear duration-100" type='button' onClick={handleUndo}>
            <MdOutlineUndo color="#fff" size={30}/>
            </button>
            <button className="my-2 bg-black hover:scale-[1.09] hover:bg-[#252525] active:scale-[0.99] text-white font-bold py-2 px-2 w-12 rounded-lg ease-linear duration-100" type='button' onClick={handleRedo}>
            <MdOutlineRedo color="#fff" size={30}/>
            </button>
            <button className="my-2 bg-black hover:scale-[1.09] hover:bg-[#252525] active:scale-[0.99] text-white font-bold py-2 px-2 w-12 rounded-lg ease-linear duration-100" type='button' onClick={handleClear}>
            <MdOutlineLayersClear color="#fff" size={30}/>
            </button>
            <button className="my-2 bg-black hover:scale-[1.09] hover:bg-[#252525] active:scale-[0.99] text-white font-bold py-2 px-2 w-12 rounded-lg ease-linear duration-100" type='button' onClick={handleErease}>
            <BsFillEraserFill color="#fff" size={30}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draw;
