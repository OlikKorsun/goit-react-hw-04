import css from './ImageCard.module.css'

export default function ImageCard({ imgCard }) {
    return (
            <img src={imgCard.urls.small} alt={imgCard.slug} className={css.image} />
    )
}