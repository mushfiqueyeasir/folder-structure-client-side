import React, { useState } from "react";
import AddModal from "./component/modal/AddModal";
import createData from "./hooks/createData";
import useFetch from "./hooks/useFetch";
import { folder } from "./utility/utilityFunctions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ArrowButton,
  Container,
  FlexDiv,
  FolderView,
  Label,
  MainLoading,
  Title,
} from "./component/styles/component.styles";

const App = () => {
  const [on, setOn] = useState(true);
  const [addModal, setAddModal] = useState(false);
  const [data, loading, refetch] = useFetch();

  if (loading) {
    return <MainLoading>Loading...</MainLoading>;
  }
  const openAddModal = () => {
    setAddModal(true);
  };
  const closeAddModal = () => {
    setAddModal(false);
  };

  const handleAdd = (id, name) => {
    const body = { name: name, parentId: id };
    createData(body, refetch);
    closeAddModal();
  };

  return (
    <Container>
      <Title>Folder Structure</Title>
      {[data].map((item) => (
        <div key={item._id}>
          <FlexDiv align="space-between">
            <FlexDiv gap>
              <ArrowButton rotate={!on} onClick={() => setOn(!on)}>
                <i className="fa-solid fa-sort-down " />
              </ArrowButton>
              <FolderView>{item.name}</FolderView>
            </FlexDiv>

            <Label onClick={openAddModal}>
              <i className="fa-solid fa-plus"></i> <h2>New</h2>
            </Label>
          </FlexDiv>

          {on && item.children && folder({ data: item })}
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
        </div>
      ))}

      <ToastContainer />
    </Container>
  );
};
export default App;
