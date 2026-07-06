"use client"
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

export const useStaggeredScrollAnimation = (
  count: number,
  options: UseScrollAnimationOptions = {}
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = elementRefs.current.map((element, index) => {
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100); // Stagger delay

              if (options.triggerOnce !== false) {
                observer.unobserve(element);
              }
            } else if (options.triggerOnce === false) {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = false;
                return newState;
              });
            }
          });
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px',
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, [count, options]);

  const setRef = (index: number) => (element: HTMLDivElement | null) => {
    elementRefs.current[index] = element;
  };

  return { setRef, visibleItems };
};