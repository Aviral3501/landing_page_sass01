import { useEffect, useRef, useState, MutableRefObject } from 'react';
// the fade in effect of the image in landing effect 

const useIntersectionObserver = (options: IntersectionObserverInit): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsIntersecting(true);
        }, 800); // Delay of 300ms before setting isIntersecting to true
        observer.unobserve(ref.current!);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
