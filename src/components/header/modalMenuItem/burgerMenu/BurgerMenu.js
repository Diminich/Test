import React, {useState} from 'react';
import styles from './burgerMenu.module.scss'
import {SUB_ITEMS_2, SUB_ITEMS_4} from "../../../constant/constants";
import ButtonSubMenuElements from "./Buttons/ButtonSubMenuElements";
import ButtonSubMenuItemElement from "./Buttons/ButtonSubMenuItemElement";


const BurgerMenu = ({stateMenu}) => {
    const [subBurgerElements, setSubBurgerElements] = useState([]);
    const [subMenuElementTwo, isSubMenuElementTwo] = useState(false);
    const [subMenuItemElementTwo, isSubMenuItemElementTwo] = useState(false);
    const [subMenuElementFour, isSubMenuElementFour] = useState(false);
    const [subMenuItemElementFour, isSubMenuItemElementFour] = useState(false);
    const [showSubMenuElementTwo, isShowSubMenuElementTwo] = useState('');
    const [showSubMenuItemElementTwo, isShowSubMenuItemElementTwo] = useState('');
    const [showSubMenuElementFour, isShowSubMenuElementFour] = useState('');
    const [showSubMenuItemElementFour, isShowSubMenuItemElementFour] = useState('');

    const addBurgerSubMenu = (id) => {
        if (id === '2') {
            setSubBurgerElements(SUB_ITEMS_2)
            isSubMenuElementTwo(!subMenuElementTwo)
            isShowSubMenuElementTwo('2')
            if (showSubMenuElementTwo === '2') {
                isShowSubMenuElementTwo('')
            }
            if (subMenuElementFour === true) {
                isShowSubMenuElementFour('')
                isSubMenuElementFour(false)
            }
        } else if (id === '4') {
            setSubBurgerElements(SUB_ITEMS_4)
            isSubMenuElementFour(!subMenuElementFour)
            isShowSubMenuElementFour('4')
            if (showSubMenuElementFour === '4') {
                isShowSubMenuElementFour('')
            }
            if (subMenuElementTwo === true) {
                isShowSubMenuElementTwo('')
                isSubMenuElementTwo(false)
            }
        } else {
            setSubBurgerElements([])
            isShowSubMenuElementTwo('')
            isShowSubMenuElementFour('')
        }
    }

    const addSubItemElement = (id) => {
        if (id === '2.2') {
            isSubMenuItemElementTwo(!subMenuItemElementTwo)
            isShowSubMenuItemElementTwo('2.2')
            if (subMenuItemElementTwo === true) {
                isShowSubMenuItemElementTwo('')
            }
            if (subMenuItemElementFour === true) {
                isShowSubMenuItemElementFour('')
                isSubMenuItemElementFour(false)
            }
        } else if (id === '2.4') {
            isSubMenuItemElementFour(!subMenuItemElementFour)
            isShowSubMenuItemElementFour('2.4')
            if (subMenuItemElementFour === true) {
                isShowSubMenuItemElementFour('')
            }
            if (subMenuItemElementTwo === true) {
                isShowSubMenuItemElementTwo('')
                isSubMenuItemElementTwo(false)
            }
        }
    }

    return (
        <div className={styles.burgerMenuElements}>
            {stateMenu.map(({id, element}) => {
                return (
                    <>
                        <a key={id} className={styles.textBurgerMenuElement}>
                            {element}
                            <ButtonSubMenuElements
                                id={id}
                                subMenuElementTwo={subMenuElementTwo}
                                subMenuElementFour={subMenuElementFour}
                                addBurgerSubMenu={addBurgerSubMenu}/>
                        </a>
                        {id === showSubMenuElementTwo &&
                        <div key={id} className={styles.subBurgerItem}>
                            {subBurgerElements.map(({id, element, subItemElements}) => {
                                return (
                                    <>
                                        <div key={id} className={styles.textSubBurgerItemElement}>
                                            {element}
                                            <ButtonSubMenuItemElement
                                                id={id}
                                                subMenuItemElementTwo={subMenuItemElementTwo}
                                                subMenuItemElementFour={subMenuItemElementFour}
                                                addSubItemElement={addSubItemElement}/>
                                        </div>
                                        {id === showSubMenuItemElementTwo &&
                                        <div className={styles.subMenuItemElement}>
                                            {subItemElements.map(({id, element}) => {
                                                return (
                                                    <div key={id} className={styles.textSubMenuItemElement}>
                                                        {element}
                                                    </div>
                                                )
                                            })}
                                        </div>}
                                        {id === showSubMenuItemElementFour &&
                                        <div className={styles.subMenuItemElement}>
                                            {subItemElements.map(({id, element}) => {
                                                return (
                                                    <div key={id} className={styles.textSubMenuItemElement}>
                                                        {element}
                                                    </div>
                                                )
                                            })}
                                        </div>}
                                    </>
                                )
                            })}
                        </div>}
                        {id === showSubMenuElementFour &&
                        <div key={id} className={styles.subBurgerItem}>
                            {subBurgerElements.map(({id, element}) => {
                                return (
                                    <div key={id} className={styles.textSubBurgerItemElement}>
                                        {element}
                                    </div>
                                )
                            })}
                        </div>}
                    </>
                )
            })}
        </div>
    )
}

export default BurgerMenu;