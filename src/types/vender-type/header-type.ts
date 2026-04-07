export type MegaMenuColumn = {
  heading: string;
  links: string[];
};

export type MegaMenuItem = {
  title: string;
  megaClass: string;
  columns: MegaMenuColumn[];
};