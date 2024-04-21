import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ items, onImageClick}) {
    return (
    <ul className={css.gallery}>
    {items.map(item => (
        <li key={item.id}>
            <ImageCard imgCard={item} onClick={onImageClick} />
        </li>   
    ))}
    </ul>
    )}