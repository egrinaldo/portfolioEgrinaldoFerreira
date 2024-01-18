import { Link, useLocation } from "react-router-dom"
import styles from './MenuLink.css'


export const MenuLink = (children, to) => {
    const localizacao =useLocation();

    return (
        <Link className={ `${styles.Link} ${localizacao.pathname === to ? styles.linkDestacado : "" }`} to={to}>
            {children}
        </Link>
    )
}