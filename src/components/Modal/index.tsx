import React, { ReactElement, ReactNode } from "react";
import { Portal } from "./Portal";
import { Overlay } from "./Overlay";

import "./modal.scss";

type FormModalTypes = {
  content: ReactElement | ReactNode;
  className?: string;
  onClose: () => null | void;
};

const Modal: React.FC<FormModalTypes> = ({
  content,
  onClose,
  className = "",
}): ReactElement => {
  return (
    <Portal>
      <div data-testid="modal" className={`${className} formModal`}>
        <Overlay onClick={onClose} />
        <div className="formModalWrapper">
          <div className="formModalBox">
            <button className="formModalClose" onClick={onClose}>
              +
            </button>
            {content}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
