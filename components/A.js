import Link from "next/link";
import styles from "../styles/A.module.css";

export default function ({href, text}) {
    return (
        <Link href={href} className={styles.link} >
            <span>{text}</span>
        </Link>
    )
}