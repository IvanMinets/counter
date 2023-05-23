import React, {ReactNode} from "react";
import s from './SuperButton.module.css'

type SuperButtonProps ={
    onClick: () => void;
    disabled: boolean;
    children: ReactNode;
}

const SuperButton: React.FC<SuperButtonProps> = ({ onClick, disabled, children }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={s.btn}
        >
            {children}
        </button>
    );
};
export default SuperButton;