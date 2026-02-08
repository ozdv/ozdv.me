import { cn } from "@/lib/utils";

export default function Colors() {
  const cssColors = [
    "background",
    // "card",
    // "popover",

    "primary-foreground",
    // "sidebar",
    // "sidebar-primary-foreground",

    "ring",
    // "sidebar-ring",

    "muted-foreground",

    "secondary",
    // "muted",
    // "accent",
    // "sidebar-accent",

    "border",
    // "input",
    // "sidebar-border",

    "primary",
    // "secondary-foreground",
    // "accent-foreground",
    // "sidebar-primary",
    // "sidebar-accent-foreground",

    "foreground",
    // "card-foreground",
    // "popover-foreground",
    // "sidebar-foreground",

    "destructive",
    // "destructive-foreground",

    // "chart-1",
    // "chart-2",
    // "chart-3",
    // "chart-4",
    // "chart-5",
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Color System</h1>
        <p className="text-muted-foreground">
          All CSS variables from globals.css visualized
        </p>
      </div>

      <div className="flex flex-row">
        {cssColors.map((color: string) => (
          <div className="" key={color}>
            <code className="text-xs whitespace-nowrap text-muted-foreground">
              bg-{color}
            </code>
            <div className={cn("w-32", `bg-${color}`)}>
              {cssColors.map((textColor: string) => (
                <div
                  className={cn(
                    "text-center text-xs whitespace-nowrap",
                    `text-${textColor}`,
                  )}
                  key={`${color}-${textColor}`}
                >
                  {textColor}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
