import { useEffect, useState } from "react";

export function useResponsiveSize(
  ratio = 0.4,
  min = 200,
  max = 300
) {
  const getSize = () => Math.min(Math.max(window.innerWidth * ratio, min), max);

  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
