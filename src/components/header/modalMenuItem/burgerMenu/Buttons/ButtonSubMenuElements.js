import React from 'react';
import styles from "../burgerMenu.module.scss";
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const ButtonSubMenuElements = ({id, addBurgerSubMenu, subMenuElementFour, subMenuElementTwo}) => {
    return (
        <>
            {id === '2' ?
                <button
                    className={subMenuElementTwo ? styles.upSubElementsButton : styles.downSubItemElementsButton}
                    onClick={() => addBurgerSubMenu(id)}>
                    {subMenuElementTwo ? <UpOutlined/> : <DownOutlined/>}
                </button> : <></>}
            {id === '4' ?
                <button className={subMenuElementFour ? styles.upSubElementsButton : styles.downSubItemElementsButton}
                        onClick={() => addBurgerSubMenu(id)}>
                    {subMenuElementFour ? <UpOutlined/> : <DownOutlined/>}
                </button> : <></>}
        </>
    )
}

export default ButtonSubMenuElements;