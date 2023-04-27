interface NavItemBase {
  id: string;
  label: string;
}

export interface NavItemCategory extends NavItemBase {
  open?: boolean;
  items: NavItem[];
}

export interface NavItemLink extends NavItemBase {
  href: string;
}

export type NavItem = NavItemCategory | NavItemLink;
