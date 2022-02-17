import React from "react";
import s from './Popup.module.css'

type PopupType = {
    closePopup: (setPopupActive: boolean) => void
}

export const Popup = (props: PopupType) => {
    return(
        <div className={s.popup_wrapper} onClick={() => {props.closePopup(false)}}>
            <div className={s.popup} onClick={e => e.stopPropagation()}>
                <span>SORRY, SENDING A MESSAGE IS NOT POSSIBLE AT THE MOMENT. THIS WILL BE FIXED SOON.</span>
            </div>
        </div>
    )
}