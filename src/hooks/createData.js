import axios from "axios";
import { toast } from "react-toastify";

const createData = (body, refetch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}`, body)
    .then((response) => {
      refetch();
      toast.success("Folder Created!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch((error) =>
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    );
};

export default createData;
