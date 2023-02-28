import React from "react";
import {
  Button,
  FlexDiv,
  FolderName,
  Modal,
  ModalBox,
} from "../styles/component.styles";

const DeleteModal = ({ show, name, parent, id, handleDelete, close }) => {
  return (
    <Modal show={show}>
      <ModalBox>
        <FolderName>Delete {name}?</FolderName>
        <FlexDiv align="center" top gap>
          <Button onClick={close}>Cancel</Button>
          <Button type="button" onClick={() => handleDelete(parent, id)}>
            Delete
          </Button>
        </FlexDiv>
      </ModalBox>
    </Modal>
  );
};

export default DeleteModal;
