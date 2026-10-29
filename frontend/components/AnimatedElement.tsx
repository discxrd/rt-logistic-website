import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  delay?: number; // delay in ms
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '', 
  tag = 'div', 
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
            if (!triggerOnce) {
                setIsVisible(false);
            }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, triggerOnce]);

  const CustomTag = tag as any;

  return (
    <CustomTag
      ref={ref}
      className={`scroll-animate ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </CustomTag>
  );
};

export default AnimatedElement;
