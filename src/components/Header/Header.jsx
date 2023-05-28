import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = (props) => {
   const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;