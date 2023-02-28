export const commands: CommandGroup[] = [
  {
    children: [
      {
        icon: "#email-all",
        label: "Email all participants",
        shortcut: "E E",
        shortcutUI: "E E",
        callback: () => console.log("EE shortcut triggered"),
      },
      {
        icon: "#copy",
        label: "Copy event",
        shortcut: "Meta+C",
        shortcutUI: "⌘+C",
        callback: () => console.log("⌘C shortcut triggered"),
      },
      {
        icon: "#change",
        label: "Change color of event…",
        shortcut: "E C",
        shortcutUI: "E C",
        callback: () => console.log("EC shortcut triggered"),
      },
      {
        icon: "#delete",
        label: "Delete event",
        shortcut: "Backspace",
        shortcutUI: "⌫",
        callback: () => console.log("⌫ shortcut triggered"),
      },
    ],
  },
  {
    label: "Navigation",
    children: [
      {
        icon: "#go",
        label: "Go to day view",
        shortcutUI: "D",
        shortcut: "D",
        callback: () => console.log("D shortcut triggered"),
      },
      {
        icon: "#go",
        label: "Go to month view",
        shortcutUI: "M",
        shortcut: "M",
        callback: () => console.log("M shortcut triggered"),
      },
    ],
  },
];

export interface Command {
  icon: string;
  label: string;
  shortcut: string;
  shortcutUI: string;
  callback: () => void;
}

export interface CommandGroup {
  label?: string;
  children: Command[];
}
