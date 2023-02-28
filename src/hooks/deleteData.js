import axios from "axios";
import { toast } from "react-toastify";

const deleteData = (body, dom) => {
  axios
    .delete(`${process.env.REACT_APP_API_URL}`, {
      data: body,
    })
    .then((response) => {
      dom.add("hidden");
      toast.info("Folder Deleted!", {
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
    .catch((error) => {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
};

export default deleteData;
