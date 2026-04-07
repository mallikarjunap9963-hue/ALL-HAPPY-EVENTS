export type FAQItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
};

export type FAQTab = {
  id: string;
  title: string;
  heading: string;
  items: FAQItem[];
};