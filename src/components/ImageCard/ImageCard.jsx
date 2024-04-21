import css from './ImageCard.module.css'

export default function ImageCard({ imgCard, onClick }) {

    const handleClick = () => {
        onClick(imgCard.urls.regular);
    }

    return (
        <img src={imgCard.urls.small} alt={imgCard.alt_description}
            className={css.image} onClick={handleClick} />
    )
}