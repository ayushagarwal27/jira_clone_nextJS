import { NavItem } from "@/components/Nav/nav";

export interface NavGroupInterface {
  id: number;
  items: NavItemInterface[];
}

enum NavTypes {
  LOGO = "logo",
  AVATAR = "avatar",
  ITEM = "item",
  THEME_TOGGLE = "themeToggle",
}

export interface NavItemInterface {
  id: number;
  type: NavTypes;
  content: string;
  authOnly?: boolean;
}

export type NavDataType = NavGroupInterface[];
