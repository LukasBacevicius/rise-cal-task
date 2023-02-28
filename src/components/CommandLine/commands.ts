export const commands: CommandGroup[] = [
  {
    children: [
      {
        icon: "#email-all",
        label: "Email all participants",
        shortcut: ["E", "E"],
      },
      {
        icon: "#copy",
        label: "Copy event",
        shortcut: ["⌘C"],
      },
      {
        icon: "#change",
        label: "Change color of event…",
        shortcut: ["E", "C"],
      },
      {
        icon: "#delete",
        label: "Delete event",
        shortcut: ["⌫"],
      },
    ],
  },
  {
    label: "Navigation",
    children: [
      {
        icon: "#go",
        label: "Go to day view",
        shortcut: ["D"],
      },
      {
        icon: "#go",
        label: "Go to month view",
        shortcut: ["M"],
      },
    ],
  },
];

export interface Command {
  icon: string;
  label: string;
  shortcut: string[];
}

export interface CommandGroup {
  label?: string;
  children: Command[];
}
