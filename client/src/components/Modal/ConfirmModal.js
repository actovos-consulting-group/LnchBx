import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalContent,
} from '@actovos-consulting-group/ui-core';

const ConfimModal = ({ toggleModal, info: { show, name } }) => (
  <Modal
    size="lg"
    show={show}
    onClose={toggleModal}
    closeOnBackdropClick={toggleModal}
  >
    <ModalHeader>NIOCE!</ModalHeader>
    <ModalContent>Enjoy {name}</ModalContent>
  </Modal>
);

export default ConfimModal;
