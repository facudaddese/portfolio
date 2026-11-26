import { JSX } from "react";

interface Links {
  href: string;
  label: string;
  name: string;
  icon: JSX.Element;
}

interface ProfileLinksProps {
  links: Links[];
  isFooter: boolean;
}

export const styles =
  "flex items-center justify-center gap-2 border border-gray-200 rounded-full transition-transform duration-200 ease-out hover:-translate-y-1 w-45 p-0.5 text-center hover:border-gray-400 dark:border-gray-600 dark:text-gray-300";

export const ProfileLinks = ({ links, isFooter }: ProfileLinksProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 w-full">
      {links.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`${styles} ${isFooter && "w-10! border-0!"}`}
        >
          {isFooter ? (
            item.icon
          ) : (
            <>
              {item.name}
              {item.icon}
            </>
          )}
        </a>
      ))}
    </div>
  );
};
