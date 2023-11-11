import { activeSectionContext } from "@/context/active-section-context";
import { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActive, timeOfLastClick } = useContext(activeSectionContext);
  // const { setActive } = useContext(activeSectionContext);
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
    }
  }, [inView, setActive, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
