import { cn } from "./ui/utils.ts";
import { Simple } from "./icons";

const stacks = [
  {
    name: "Remix",
    category: "UI Framework",
    icon: Simple.IconRemix,
    url: "https://remix.run/",
  },
  {
    name: "Vue",
    category: "UI Framework",
    icon: Simple.IconVue,
    url: "https://vuejs.org",
  },
  {
    name: "Phoenix",
    category: "Web Framework",
    icon: Simple.IconPhoenix,
    url: "https://www.phoenixframework.org",
  },
  {
    name: "Sublime Text",
    category: "Editor",
    icon: Simple.IconSublime,
    url: "https://www.sublimetext.com/",
  }
];

export default () => {
  return (
    <div className="flex items-center justify-center p-4 md:p-5 xl:p-6 w-full h-full">
      <ul className="grid grid-cols-2 gap-3 w-full h-full">
        {stacks.map((stack) => {
          return (
            <li key={stack.name} className="flex items-center">
              <a
                href={stack.url}
                className={cn(
                  "group",
                  "flex items-center justify-between px-4 py-3 w-full",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target="_blank"
                aria-label="Open"
              >
                <div className="flex flex-row items-stretch gap-5 pl-2">
                  <div className="flex items-center justify-center">
                    <stack.icon
                      size={24}
                      className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                    />
                  </div>

                  <div>
                    <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{stack.name}</h3>
                    <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                      {stack.category}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
