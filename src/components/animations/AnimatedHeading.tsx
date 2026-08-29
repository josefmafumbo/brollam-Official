import { useEffect, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export function AnimatedHeading({ text, className = "", delay = 200, charDelay = 30 }: AnimatedHeadingProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Split text by newlines to handle multiple lines
  const lines = text.split("\n");

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split("").map((char, charIndex) => {
            const totalCharsBefore = lines.slice(0, lineIndex).reduce((sum, l) => sum + l.length + 1, 0);
            const charPosition = totalCharsBefore + charIndex;
            const animationDelay = charPosition * charDelay;

            return (
              <span
                key={`${lineIndex}-${charIndex}`}
                className="inline-block transition-all"
                style={{
                  opacity: isAnimating ? 1 : 0,
                  transform: isAnimating ? "translateX(0)" : "translateX(-18px)",
                  transitionDuration: "500ms",
                  transitionDelay: `${animationDelay}ms`,
                  transitionTimingFunction: "ease-out",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
