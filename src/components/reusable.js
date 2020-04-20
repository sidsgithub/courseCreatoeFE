import React from "react";
import Modal from '@material-ui/core/Modal';

const ReusableComponent =({openModal,onClose,body}) =>{
    
    return <Modal
    open={openModal}
    onClose={onClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body}
  </Modal>
}

export default ReusableComponent;