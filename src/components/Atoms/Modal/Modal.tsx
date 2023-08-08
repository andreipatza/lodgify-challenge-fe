import React from 'react';

// STYLES
import { ModalContainer, ModalWrapper } from './ModalStyle';

// LIBRARIES
import { Modal } from '@mui/material';

// MISC
import { ModalProps } from './ModalModel';

const ModalAtom = (props: ModalProps) => {
  // PROPS
  const { open, onClose, children } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS 

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <ModalWrapper>
      <ModalContainer>
        {children}
      </ModalContainer>
    </ModalWrapper >
  </Modal>
}

export default ModalAtom;