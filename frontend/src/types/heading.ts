import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IHeading {
  children: ReactNode,
  type: "main" | "blocks" | "description" | "none"
}