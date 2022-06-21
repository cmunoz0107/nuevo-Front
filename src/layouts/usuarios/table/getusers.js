import axios from "axios";
import { useEffect, useState } from "react";

export default function data() {
  const [dataProduct, setDataProduct] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getUsers", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const elements = response.data;
      setDataProduct(elements);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return {
    columns: [
      { Header: "Nombre", accessor: "nombre", align: "left" },
      { Header: "Apellido", accessor: "apellidos", align: "left" },
      { Header: "Correo", accessor: "correo", align: "left" },
    ],

    rows: dataProduct,
  };
}
