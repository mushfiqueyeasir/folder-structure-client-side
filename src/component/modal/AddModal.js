import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  FlexDiv,
  FolderName,
  Input,
  Modal,
  ModalBox,
} from "../styles/component.styles";

const AddModal = ({ show, name, id, handleAdd, close }) => {
  const [newFolderName, setName] = useState("");

  const getFolderName = (event) => {
    let value = event.target.value;
    setName(value);
  };

  return (
    <Modal show={show}>
      <ModalBox>
        <FolderName>Add Folder in {name}</FolderName>
        <FlexDiv top>
          <Input
            onChange={getFolderName}
            type="text"
            placeholder="Folder Name "
          />
        </FlexDiv>

        <FlexDiv align="end" top gap>
          <Button onClick={close}>Cancel</Button>
          <Button
            onClick={() => {
              newFolderName
                ? handleAdd(id, newFolderName)
                : toast.error("Please Enter Folder Name", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
            }}
            htmlFor={newFolderName ? id : ""}
            className="btn"
          >
            Create
          </Button>
        </FlexDiv>
      </ModalBox>
    </Modal>
  );
};

export default AddModal;
