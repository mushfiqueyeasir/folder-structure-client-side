import styled from "styled-components";

export const Container = styled.div`
  width: 33.333333%;
  margin-left: auto;
  margin-right: auto;
  padding: 2.5rem 0.5rem 2.5rem 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  font-weight: 700;
  padding 2.5rem 0rem
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.align || "center"};
  gap: ${(props) => (props.gap ? ".5rem" : "0px")};
  padding-top: ${(props) => (props.top ? "40px" : "0px")};
  align-items: center;
`;

export const ArrowButton = styled.button`
  border: none;
  background-color: unset;
  font-size: 1.5rem;
  line-height: 2rem;
  transform: ${(props) => (props.rotate ? "rotate(-90deg)" : "")};
  cursor: pointer;
`;

export const FolderView = styled.h1`
  font-size: 1em;
  padding-left: ${(props) => (props.left ? "2rem" : "0rem")};
`;

export const Label = styled.label`
  font-size: ${(props) => (props.large ? "1.1rem" : ".8rem")};
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const FolderName = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: center;
  text-transform: capitalize;
`;

export const Input = styled.input`
  flex-shrink: 1;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  border-opacity: 0.2;
  width: 100%;
  max-width: 20rem;
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 0.8rem;
  background-color: #313641;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

export const Modal = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalBox = styled.div`
  max-height: calc(100vh - 5em);
  padding: 1.5rem;
  width: 91.666667%;
  max-width: 32rem;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const Loading = styled.h1`
  font-size: 0.8rem;
  margin-left: 40px;
`;

export const MainLoading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;
