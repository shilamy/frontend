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

export interface Member {
  avatar: string;
  name: string;
}


export interface Group {
  id: string
  name: string
  description: string
  memberCount: number
  isMember: boolean
  avatar: string
  members: Member[]
}

export interface GroupMember {
  avatar: string;
  name: string;
}

export interface Resource {
  fileUrl(fileUrl: any, arg1: string): void;
  uploadDate: string | number | Date;
  id: string;
  title: string;
  description: string;
  category: string;
  file: string;
}
