// IMPORTS ////////////////////////////////////////////////////
// Import libraries ------------------------------------------
import { useState, useEffect } from "react";

// Import helpers --------------------------------------------
import debounce from "../helpers/debounce";

const useMousePosition = (delay) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", debounce(updateMousePosition, delay));

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [delay]);

  return mousePosition;
};

export default useMousePosition;

//EXAMPLE
// function App() {
//   const { x, y } = useMousePosition();

//   const hasMovedCursor = typeof x === "number" && typeof y === "number";

//   return (
//     <div className="App">
//       <h1>
//         {hasMovedCursor
//           ? `Your cursor is at ${x}, ${y}.`
//           : "Move your mouse around."}
//       </h1>
//     </div>
//   );
// };
