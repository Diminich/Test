import React from 'react';
import styles from "../burgerMenu.module.scss";
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const ButtonSubMenuItemElement = ({id, addSubItemElement, subMenuItemElementFour, subMenuItemElementTwo}) => {
    return (
        <>
            {id === '2.2' ?
                <button className={subMenuItemElementTwo ? styles.upSubElementsButton : styles.downSubItemElementsButton}
                        onClick={() => addSubItemElement(id)}>
                    {subMenuItemElementTwo ? <UpOutlined/> : <DownOutlined/>}
                </button> : <></>}
            {id === '2.4' ?
                <button className={subMenuItemElementFour ? styles.upSubElementsButton : styles.downSubItemElementsButton}
                        onClick={() => addSubItemElement(id)}>
                    {subMenuItemElementFour ? <UpOutlined/> : <DownOutlined/>}
                </button> : <></>}
        </>
    )
}

export default ButtonSubMenuItemElement;