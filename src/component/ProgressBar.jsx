import { useState, useEffect } from "react";

export function ProgressBar({ FinalFormNumber, Form }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (Form / FinalFormNumber) * 100;
    setProgress(percentage);
  }, [FinalFormNumber, Form]);

  const circlePosition = `calc(${progress}% - 0.5rem)`;
  const circleTranslate = progress === 100 ? "translate-x-full" : "-translate-x-1/2";

  return (
    <div className="relative w-full h-2 bg-gray-200 rounded-full">
      
      <div
        className={"absolute top-0 left-0 h-2  rounded-full transition-all duration-500 "+(Form==FinalFormNumber?"bg-green-400":"bg-gradient-to-r from-sky-400 to-sky-500")}
        style={{ width: `${progress}%` }}
      ></div>
    {Form!==FinalFormNumber&&(<div
      className={`absolute -top-3 left-0 ml-0.5 transform ${circleTranslate} transition-all duration-500`}
      style={{ left: circlePosition }}
    >
      <div className="w-8 h-8 bg-white rounded-full shadow-lg "></div>
    </div>)}
    </div>
  );
}
