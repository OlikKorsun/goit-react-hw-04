import css from './ErrorMessage.module.css'
import { FaRegSadCry } from "react-icons/fa";

export default function ErrorMessage() {
    return (
        <p className={css.error}><FaRegSadCry className={css.icon} />
            Sorry, something wrong. Try again!</p>
    )
}