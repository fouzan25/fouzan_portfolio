import React, { useEffect, useRef, useCallback } from "react";

export interface CodeToken {
  text: string;
  type:
    | "keyword"
    | "variable"
    | "string"
    | "comment"
    | "operator"
    | "bracket"
    | "punctuation"
    | "property";
}

export interface CodeLine {
  content: string;
  className?: string;
  tokens?: CodeToken[];
}

export interface TypewriterAnimationProps {
  lines: CodeLine[];
  speed?: number; // milliseconds per character
  lineDelay?: number; // milliseconds between lines
  autoStart?: boolean;
  onComplete?: () => void;
  containerSelector?: string; // CSS selector for the container
  lineSelector?: string; // CSS selector for individual lines
}

const TypewriterAnimation: React.FC<TypewriterAnimationProps> = ({
  speed = 25,
  lineDelay = 80,
  autoStart = true,
  onComplete,
  containerSelector = ".code-content",
  lineSelector = ".code-line",
}) => {
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  const startAnimation = useCallback(() => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const container = document.querySelector(containerSelector);
    if (!container) {
      console.warn(
        `TypewriterAnimation: Container not found with selector "${containerSelector}"`
      );
      return;
    }

    const codeLines = container.querySelectorAll(lineSelector);
    if (codeLines.length === 0) {
      console.warn(
        `TypewriterAnimation: No lines found with selector "${lineSelector}"`
      );
      return;
    }

    let cumulativeDelay = 0;

    codeLines.forEach((line, index) => {
      const element = line as HTMLElement;
      const textContent = element.textContent || "";
      const charCount = Math.max(textContent.length, 1);
      const typingTime = charCount * speed;

      // Set timing variables
      element.style.setProperty("--char-count", charCount.toString());
      element.style.setProperty("--cumulative-delay", `${cumulativeDelay}ms`);

      // Reset any existing classes
      element.classList.remove("typing", "active-cursor", "finished");

      // Add typing class
      element.classList.add("typing");

      // Show cursor at the start of typing for this line
      setTimeout(() => {
        // Remove cursor from all other lines
        codeLines.forEach((l) => l.classList.remove("active-cursor"));
        // Add cursor to current line
        element.classList.add("active-cursor");

        // Auto-scroll to keep the typing line in view
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, cumulativeDelay);

      // Remove cursor and finish typing for this line
      setTimeout(() => {
        element.classList.remove("typing", "active-cursor");
        element.classList.add("finished");

        // If this is the last line, call onComplete
        if (index === codeLines.length - 1) {
          isAnimatingRef.current = false;
          onComplete?.();
        }
      }, cumulativeDelay + typingTime + 100);

      // Update cumulative delay for next line
      cumulativeDelay += typingTime + lineDelay;
    });
  }, [speed, lineDelay, onComplete, containerSelector, lineSelector]);

  const resetAnimation = useCallback(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const codeLines = container.querySelectorAll(lineSelector);
    codeLines.forEach((line) => {
      const element = line as HTMLElement;
      element.classList.remove("typing", "active-cursor", "finished");
      element.style.removeProperty("--char-count");
      element.style.removeProperty("--cumulative-delay");
    });

    isAnimatingRef.current = false;
  }, [containerSelector, lineSelector]);

  useEffect(() => {
    if (autoStart) {
      // Small delay to ensure DOM is ready
      animationRef.current = setTimeout(() => {
        startAnimation();
      }, 300);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      resetAnimation();
    };
  }, [autoStart, startAnimation, resetAnimation]);

  // Note: This component is designed to be used via the useTypewriterAnimation hook
  // If you need imperative control, use the hook's returned methods instead

  // This component doesn't render anything - it just controls animations
  return null;
};

export default TypewriterAnimation;
