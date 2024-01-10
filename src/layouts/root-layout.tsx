import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-dvh w-full overflow-hidden px-4 py-6 md:px-8 md:py-12.5">
      {children}
    </div>
  );
}
