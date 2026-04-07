import type { GalleryItem } from "../../../types/vender-detailed -page/gallery-type";

type Props = {
    item: GalleryItem;
};

const GalleryItem = ({ item }: Props) => {
    return (
        <div className="col-md-3 mb-0">
            <div className="vendor-gallery">
                <a href={item.image} title={item.title}>
                    <img src={item.image} className="rounded" alt="" />
                </a>
            </div>
        </div>
    );
};

export default GalleryItem;