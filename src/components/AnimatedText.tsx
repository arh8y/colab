import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');
  let charCount = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const chars = word.split('');
        const wordElement = (
          <span key={i} className="relative mr-[0.25em] mb-[0.25em] inline-flex">
            {chars.map((char, j) => {
              const currentCount = charCount;
              charCount++;
              
              const start = currentCount / totalChars;
              const end = start + (1 / totalChars);
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              
              return (
                <span key={j} className="relative inline-block">
                  <span className="opacity-0">{char}</span>
                  <motion.span
                    className="absolute left-0 top-0"
                    style={{ opacity }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
        charCount++; // for the space
        return wordElement;
      })}
    </p>
  );
};

export default AnimatedText;
