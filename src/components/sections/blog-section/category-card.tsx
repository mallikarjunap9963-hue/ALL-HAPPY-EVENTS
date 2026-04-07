import type { Category } from "../../../types/blog-type/category-type";

const CategoryItem = ({ item }: { item: Category }) => {
    return (
        <li>
            <a href="#">{item.name}</a>
        </li>
    );
};

export default CategoryItem;