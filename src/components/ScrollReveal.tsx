import React, { ReactNode } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: 100 | 200 | 300 | 400;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}) => {
  const elementRef = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'scroll-reveal-left';
      case 'right':
        return 'scroll-reveal-right';
      case 'scale':
        return 'scroll-reveal-scale';
      default:
        return 'scroll-reveal';
    }
  };

  const getDelayClass = () => {
    if (!delay) return '';
    return `scroll-reveal-delay-${delay}`;
  };

  const combinedClassName = [
    getDirectionClass(),
    getDelayClass(),
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={elementRef} className={combinedClassName}>
      {children}
    </div>
  );
};

export default ScrollReveal;