import React, {useState} from "react";
import styles from './header.module.scss'
import ModalMenuItem from "./modalMenuItem/ModalMenuItem";
import {Button} from "antd";
import {CloseOutlined, OrderedListOutlined} from "@ant-design/icons";
import {STATE_MENU, SUB_ITEMS_2, SUB_ITEMS_4} from "../constant/constants";

const Header = () => {
    const [subElements, setSubElements] = useState([]);
    const [show, isShow] = useState(false);
    const [burgerMenu, isBurgerMenu] = useState(false);

    const addSubElements = (id) => {
        if (id === '2') {
            setSubElements(SUB_ITEMS_2);
            isShow(true);
        } else if (id === '4') {
            setSubElements(SUB_ITEMS_4);
            isShow(true);
        } else {
            setSubElements([]);
            isShow(false)
        }
    }

    const addSubBurgerMenu = () => {
        isShow(!show)
        isBurgerMenu(!burgerMenu)
    }
    return (
        <>
            <div className={styles.wrapperHeader}>
                <div className={styles.menuItem}>
                    {STATE_MENU.map(({id, element}) => {
                        return (
                            <a id={id} className={styles.textMenuElement}
                               onMouseEnter={() => addSubElements(id)}>
                                {element}
                            </a>
                        )
                    })}
                </div>
                <Button className={styles.burgerMenuButton} type="primary" onClick={addSubBurgerMenu}>
                    {burgerMenu ? <CloseOutlined/> : <OrderedListOutlined/>}
                </Button>
            </div>
            <ModalMenuItem subElements={subElements} setSubElements={setSubElements}
                           isShow={isShow} show={show} burgerMenu={burgerMenu} isBurgerMenu={isBurgerMenu}/>
        </>
    )
}

export default Header;