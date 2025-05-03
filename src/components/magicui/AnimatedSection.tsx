'use client';

import { useInView } from 'react-intersection-observer';
import { BlurFade } from "./blur-fade";
import { useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

export function AnimatedSection({ children }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div ref={ref} className="min-h-[1px]">
      <BlurFade
        duration={0.6}
        delay={0.1}
        blur="4px"
        offset={8}
        inView={isVisible}
        transition={{
          ease: [0.16, 1, 0.3, 1],
          duration: 0.6,
          delay: 0.1
        }}
      >
        {children}
      </BlurFade>
    </div>
  );
} 