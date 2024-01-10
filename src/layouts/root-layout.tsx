import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="over h-dvh w-full overflow-hidden px-8 py-12.5">
      {children}
    </div>
  );
}
