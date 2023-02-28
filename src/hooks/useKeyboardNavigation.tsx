import { Command, CommandGroup } from "components/CommandLine/commands";
import { useEffect, useState } from "react";

export const useKeyboardNavigation = (
  items: Command[],
  onCommandSelected: (command: any) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

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
        const nextIndex = prevIndex + direction;

        if (nextIndex < 0) {
          return lastIndex;
        } else if (nextIndex > lastIndex) {
          return 0;
        }

        return nextIndex;
      });

      return;
    }

    if (code === "Enter" && selectedIndex >= 0) {
      onCommandSelected(items[selectedIndex]);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return selectedIndex;
};
