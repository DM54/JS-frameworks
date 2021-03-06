import React from 'react';

const modal = ({isOpen, onClose, children}) => {

  if (isOpen) {
    return (
      <div className="app-modal">
        <div className="app-modal-content">
          <span
            onClick={onClose}
            className="close">&times;</span>
            {/*children is the setting form, letting know modal is passing a children. */}
          <div>{children}</div>
        </div>
      </div>
    )
  }

  return <></>
}

export default modal;
