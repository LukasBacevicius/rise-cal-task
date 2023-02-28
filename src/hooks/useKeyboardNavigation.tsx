import { Command } from "utils/commands";
import { useEffect, useState, useRef } from "react";

export const useKeyboardNavigation = (
  items: Command[]
): [React.RefObject<HTMLDivElement>, number] => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code } = event;

      if (code === "Escape") {
        setSelectedIndex(-1);
        return;
      }

      if (["ArrowUp", "ArrowDown"].includes(code)) {
        event.preventDefault();
        const direction = code === "ArrowUp" ? -1 : 1;

        setSelectedIndex((prevIndex) => {
          const lastIndex = items.length - 1;
          let nextIndex = prevIndex + direction;

          if (nextIndex < 0) {
            nextIndex = lastIndex;
          } else if (nextIndex > lastIndex) {
            nextIndex = 0;
          }

          document
            .querySelector(`[data-key="${nextIndex}"]`)
            ?.scrollIntoViewIfNeeded();
          return nextIndex;
        });

        return;
      }

      if (code === "Enter" && selectedIndex >= 0) {
        items[selectedIndex].callback();
        return;
      }
    };

    const handleMouseover = (e: any) => {
      const targetIndex = e.target.getAttribute("data-key");

      if (!targetIndex) return;

      setSelectedIndex(parseInt(targetIndex));
    };

    ref?.current?.addEventListener("keydown", handleKeyDown);
    ref?.current?.addEventListener("mouseover", handleMouseover);

    return () => {
      ref?.current?.removeEventListener("keydown", handleKeyDown);
      ref?.current?.removeEventListener("mouseover", handleMouseover);
    };
  }, [selectedIndex]);

  return [ref, selectedIndex];
};
