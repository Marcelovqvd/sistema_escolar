import styles from './Header.module.css'

import logo from '../assets/logo.svg'

export function Header() {

    return (
        <header className={styles.header}>
            <strong>Sistema Escolar</strong>
            <img src={logo} alt="logotipo" />
        </header>
    )
}