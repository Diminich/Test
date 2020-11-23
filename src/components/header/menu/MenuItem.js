import React, {useState} from 'react';
import {SUB_ITEMS_2, SUB_ITEMS_4} from "./constants";
import styles from './menuItem.module.scss';

const MenuItem = () => {
    const [subElements, setSubElements] = useState([])

    let [show, isShow] = useState(false);

    const stateMenu = [
        {id: '1', element: 'Элемент 1'},
        {id: '2', element: 'Элемент 2'},
        {id: '3', element: 'Элемент 3'},
        {id: '4', element: 'Элемент 4'},
        {id: '5', element: 'Элемент 5'},
        {id: '6', element: 'Элемент 6'}
    ]

    const addSubElements = async (id) => {
        if (id === '2') {
            await setSubElements(SUB_ITEMS_2);
            isShow(true);
        } else if (id === '4') {
            await setSubElements(SUB_ITEMS_4);
            isShow(true);
        } else {
            await setSubElements([]);
            isShow(false);
        }
    }

    return (
        <div className={styles.wrapperMenuItem}>
            {stateMenu.map(({id, element}) => {
                return (
                    <a id={id} className={styles.textMenuElement}
                       onClick={() => addSubElements(id)}>
                        {element}
                    </a>
                )
            })}
            <div className={show ? styles.activeModal : styles.modal} onClick={() => isShow(false)}/>
            {show && <div className={show ? styles.activeModalContent : styles.modalContent}>
                {subElements.map(subElement => {
                    return <div className={styles.textSubElement} key={subElement.id}>
                        {subElement.element}
                        {subElement.subSubElements.map(subSubElement => {
                            return <div className={styles.textSubSubElement}>{subSubElement.element}</div>
                        })}
                    </div>
                })
                }
            </div>}
        </div>
    )
}

export default MenuItem;