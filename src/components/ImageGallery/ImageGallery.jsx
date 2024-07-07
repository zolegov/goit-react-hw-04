import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.imageGalleryList}>
      {items.map((item) => (
        <li key={item.id} className={css.imageGalleryListItem}>
          <div>
            <img
              src={item.urls.small}
              alt={item.alt_description}
              onClick={() =>
                openModal(item.urls.regular, item.likes, item.description)
              }
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
