import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFetch = (parameter) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetchData, setRefetchData] = useState(false);
  const uri = parameter
    ? `${process.env.REACT_APP_API_URL}/${parameter}`
    : `${process.env.REACT_APP_API_URL}`;

  useEffect(() => {
    axios
      .get(uri)
      .then((response) => {
        setData(response.data);
        setLoading(false);
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
  }, [refetchData]);
  const refetch = () => setRefetchData((prevState) => !prevState);
  return [data, loading, refetch];
};

export default useFetch;
