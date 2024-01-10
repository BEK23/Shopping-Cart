import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: ClassValue;
  classNames?: {
    wrapper?: ClassValue;
    title?: ClassValue;
    subtitle?: ClassValue;
  };
}

export const Title = ({
  title,
  subtitle,
  className,
  classNames,
}: TitleProps) => {
  return (
    <div className={cn("font-medium", className, classNames?.wrapper)}>
      <h1 className={cn("text-lg", classNames?.title)}>{title}</h1>
      {subtitle && <span className={cn(classNames?.subtitle)}>{subtitle}</span>}
    </div>
  );
};
