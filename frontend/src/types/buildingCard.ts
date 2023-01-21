import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IBildings extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  titled: string;
  description: string;
  image: string;
}
