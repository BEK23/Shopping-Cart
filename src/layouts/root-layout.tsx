import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return <div className="h-dvh w-full px-8 py-12.5">{children}</div>;
}
