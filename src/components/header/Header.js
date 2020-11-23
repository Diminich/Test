import React from "react";
import styles from './header.module.scss'
import MenuItem from "./menu/MenuItem";

const Header = () => {
    return (
        <div className={styles.wrapperHeader}>
                <MenuItem/>
        </div>
    )
}

export default Header;