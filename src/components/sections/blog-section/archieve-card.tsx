import type { Archive } from "../../../types/blog-type/archieve-type";

const ArchiveItem = ({ item }: { item: Archive }) => {
    return (
        <li>
            <a href="#">{item.month}</a>
        </li>
    );
};

export default ArchiveItem;