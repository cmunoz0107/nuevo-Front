import axios from "axios";
import { useEffect, useState } from "react";

export default function data() {
  const [dataProduct, setDataProduct] = useState([]);
  const getProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const { elements } = response.data;
      setDataProduct(elements);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);

  return {
    columns: [
      { Header: "Nombre", accessor: "Producto", align: "left" },
      { Header: "Proveedor", accessor: "Proveedor", align: "left" },
      { Header: "Tipo", accessor: "Tipo", align: "left" },
      { Header: "Medida", accessor: "Medida", align: "left" },
      { Header: "Stock", accessor: "stock", align: "left" },
    ],

    rows: dataProduct,
  };
}
