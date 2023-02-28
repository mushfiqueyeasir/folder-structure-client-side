import React, { useState } from "react";
import createData from "../../hooks/createData";
import deleteData from "../../hooks/deleteData";
import useFetch from "../../hooks/useFetch";
import { folder } from "../../utility/utilityFunctions";
import AddModal from "../modal/AddModal";
import DeleteModal from "../modal/DeleteModal";
import {
  ArrowButton,
  FlexDiv,
  FolderView,
  Label,
  Loading,
} from "../styles/component.styles";

const Folder = ({ item, index }) => {
  const [on, setOn] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [data, loading, refetch] = useFetch(item._id);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  const openAddModal = () => {
    setAddModal(true);
  };
  const closeAddModal = () => {
    setAddModal(false);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleAdd = (id, name) => {
    const body = { name: name, parentId: id };
    createData(body, refetch);
    closeAddModal();
  };

  const handleDelete = (parentData, id) => {
    console.log("clicked");
    const body = { itemId: id, parentId: parentData };
    const dom = document.getElementById(index).classList;
    deleteData(body, dom);
    closeDeleteModal();
  };

  return (
    <div c key={index} id={index}>
      <FlexDiv align="space-between">
        <FlexDiv gap=".5rem">
          <ArrowButton rotate={!on} onClick={() => setOn(!on)}>
            <i className="fa-solid fa-sort-down" />
          </ArrowButton>
          <FolderView className="text-xl">{item.name}</FolderView>
          <Label large onClick={openDeleteModal}>
            <i className="fa-solid fa-circle-xmark"></i>
          </Label>
        </FlexDiv>
        <div>
          <Label onClick={openAddModal}>
            <i className="fa-solid fa-plus"></i> <h2>New</h2>
          </Label>
        </div>
      </FlexDiv>
      {on && data.children.length > 0 && folder({ data: data })}
      {on && data.children.length === 0 && (
        <FolderView left>- No Folder</FolderView>
      )}
      <AddModal
        show={addModal}
        name={item.name}
        id={item._id}
        handleAdd={handleAdd}
        close={closeAddModal}
      />
      <DeleteModal
        show={deleteModal}
        name={item.name}
        parent={data?.parent}
        id={item._id}
        handleDelete={handleDelete}
        close={closeDeleteModal}
      />
    </div>
  );
};

export default Folder;
