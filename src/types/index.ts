import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
}

export interface AskButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
   
}
