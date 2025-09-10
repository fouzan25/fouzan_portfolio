import { useEffect, useRef, useCallback } from "react";

interface UseTypewriterAnimationOptions {
  speed?: number;
  lineDelay?: number;
  autoStart?: boolean;
  onComplete?: () => void;
  containerSelector?: string;
  lineSelector?: string;
  tabName?: string; // Add tab identifier
}

export const useTypewriterAnimation = (
  options: UseTypewriterAnimationOptions = {}
) => {
  const {
    speed = 20, // Slightly faster (was 25)
    lineDelay = 65, // Slightly faster (was 80)
    autoStart = true,
    onComplete,
    containerSelector = ".code-content",
    lineSelector = ".code-line",
    tabName = "default",
  } = options;

  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);
  const userInteractingRef = useRef(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentLineRef = useRef<HTMLElement | null>(null);

  // Check if this tab has been viewed in this session
  const hasTabBeenViewed = useCallback(() => {
    const viewedTabs = JSON.parse(sessionStorage.getItem('portfolio_viewed_tabs') || '[]');
    return viewedTabs.includes(tabName);
  }, [tabName]);

  // Mark tab as viewed
  const markTabAsViewed = useCallback(() => {
    const viewedTabs = JSON.parse(sessionStorage.getItem('portfolio_viewed_tabs') || '[]');
    if (!viewedTabs.includes(tabName)) {
      viewedTabs.push(tabName);
      sessionStorage.setItem('portfolio_viewed_tabs', JSON.stringify(viewedTabs));
    }
  }, [tabName]);

  // Handle user interaction detection (wheel, touch, key events)
  const handleUserInteraction = useCallback(() => {
    userInteractingRef.current = true;
    
    // Clear any existing timeout
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    
    // Reset interaction detection after 1.5 seconds of no interaction
    interactionTimeoutRef.current = setTimeout(() => {
      userInteractingRef.current = false;
    }, 1500);
  }, []);

  const startAnimation = useCallback(() => {
    try {
      if (isAnimatingRef.current) return;

      const container = document.querySelector(containerSelector);
      if (!container) {
        console.warn(
          `useTypewriterAnimation: Container not found with selector "${containerSelector}"`
        );
        return;
      }

      const codeLines = container.querySelectorAll(lineSelector);
      if (codeLines.length === 0) {
        console.warn(
          `useTypewriterAnimation: No lines found with selector "${lineSelector}"`
        );
        return;
      }

      // If tab has been viewed before in this session, show content immediately
      if (hasTabBeenViewed()) {
        container.classList.remove('pre-animation');
        container.classList.add('animation-ready');
        codeLines.forEach((line) => {
          const element = line as HTMLElement;
          element.classList.remove("typing", "active-cursor");
          element.classList.add("finished");
        });
        return;
      }

      // First view of this tab - run animation and mark as viewed
      markTabAsViewed();
      isAnimatingRef.current = true;
      userInteractingRef.current = false; // Reset interaction detection
      
      // Show content and start animation
      container.classList.remove('pre-animation');
      container.classList.add('animation-ready');

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
          currentLineRef.current = element;

          // Auto-scroll only if user is not interacting
          if (!userInteractingRef.current) {
            // Check if element is already in view to avoid unnecessary scrolling
            const rect = element.getBoundingClientRect();
            const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            
            if (!isInView) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }
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
    } catch (error) {
      console.error("Error in typewriter animation:", error);
      isAnimatingRef.current = false;
    }
  }, [speed, lineDelay, onComplete, containerSelector, lineSelector, hasTabBeenViewed, markTabAsViewed]);

  const resetAnimation = useCallback(() => {
    try {
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
    } catch (error) {
      console.error("Error resetting animation:", error);
    }
  }, [containerSelector, lineSelector]);

  const triggerAnimation = useCallback(() => {
    resetAnimation();
    setTimeout(() => {
      startAnimation();
    }, 100);
  }, [resetAnimation, startAnimation]);

  useEffect(() => {
    // Add multiple user interaction event listeners
    const events = ['wheel', 'touchstart', 'touchmove', 'keydown'];
    
    events.forEach(event => {
      window.addEventListener(event, handleUserInteraction, { passive: true });
    });

    if (autoStart) {
      // Small delay to ensure DOM is ready
      animationRef.current = setTimeout(() => {
        startAnimation();
      }, 300);
    }

    return () => {
      // Cleanup all event listeners
      events.forEach(event => {
        window.removeEventListener(event, handleUserInteraction);
      });
      
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      resetAnimation();
    };
  }, [autoStart, startAnimation, resetAnimation, handleUserInteraction]);

  return {
    startAnimation,
    resetAnimation,
    triggerAnimation,
    isAnimating: () => isAnimatingRef.current,
  };
};
