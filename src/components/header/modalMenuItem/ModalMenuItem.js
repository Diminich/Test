import React from 'react';
import styles from './modalMenuItem.module.scss';
import BurgerMenu from "./burgerMenu/BurgerMenu";
import {STATE_MENU} from "../../constant/constants";

const ModalMenuItem = ({subElements, setSubElements, show, isShow, burgerMenu, isBurgerMenu}) => {

    const addModalWindow = () => {
        isBurgerMenu(false)
        isShow(false)
        setSubElements([]);
    }

    return (
        <div className={styles.wrapperMenuItem}>
            <div className={show ? styles.activeModal : styles.modal} onMouseEnter={addModalWindow}/>
            <div className={show ? styles.activeModalContent : styles.modalContent}>
                {burgerMenu && <BurgerMenu stateMenu={STATE_MENU}/>}
                {subElements.map(({id, element, subItemElements}) => {
                    return <div className={styles.textSubElement} key={id}>
                        {element}
                        {subItemElements.map(({id, element}) => {
                            return <div key={id} className={styles.textSubSubElement}>{element}</div>
                        })}
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default ModalMenuItem;