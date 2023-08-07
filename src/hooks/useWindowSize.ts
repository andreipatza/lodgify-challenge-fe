import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Call the function immediately to set the initial window size
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once when component mounts, and the return is called when it unmounts.

  return windowSize;
};

export default useWindowSize;
