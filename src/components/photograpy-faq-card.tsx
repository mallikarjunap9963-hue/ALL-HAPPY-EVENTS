import type{ FAQItem } from "../types/vender-type/faq-type";

type Props = {
  item: FAQItem;
  parentId: string;
  tabId: string;
};

const FaqCard = ({ item, parentId, tabId }: Props) => {
  const collapseId = `collapse-${tabId}-${item.id}`;
  const headingId = `heading-${tabId}-${item.id}`;

  return (
    <div className="card">
      <div className="card-header" id={headingId}>
        <button
          className={`btn w-100 text-start ${!item.defaultOpen ? "collapsed" : ""}`}
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={item.defaultOpen ? "true" : "false"}
        >
          {item.question}
        </button>
      </div>

      <div
        id={collapseId}
        className={`collapse ${item.defaultOpen ? "show" : ""}`}
        data-bs-parent={`#${parentId}`}
      >
        <div className="card-body">{item.answer}</div>
      </div>
    </div>
  );
};

export default FaqCard;