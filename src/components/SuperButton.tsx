import React, {ReactNode} from "react";

type SuperButtonProps ={
    onClick: () => void;
    disabled: boolean;
    children: ReactNode;
}

const SuperButton: React.FC<SuperButtonProps> = ({ onClick, disabled, children }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
export default SuperButton;