import { useEffect, useRef, useState } from 'react';

export function useIntersection (options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementoRef = useRef();

  useEffect(() => {
    const elemento = elementoRef.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsIntersecting(entry.isIntersecting);
          if (entry.isIntersecting) {
            observer.unobserve(elemento);
          }
        });
      },
      options
    );

    if (elemento) observer.observe(elemento);

    return () => {
      if (elemento) observer.unobserve(elemento);
    };
  }, [options]);

  return [elementoRef, isIntersecting];
}
