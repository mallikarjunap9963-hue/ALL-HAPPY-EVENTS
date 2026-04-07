import type { Tag } from "../../../types/blog-type/tag-type";

const TagItem = ({ item }: { item: Tag }) => {
    return (
        <a href="#">{item.name}</a>
    );
};

export default TagItem;