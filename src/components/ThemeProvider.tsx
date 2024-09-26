import { Header } from "@/components/layout";
import { Fragment } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
