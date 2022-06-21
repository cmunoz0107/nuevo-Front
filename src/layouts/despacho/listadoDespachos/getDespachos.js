import axios from "axios";
import { useEffect, useState } from "react";

export default function data() {
  const [egresos, setEgresos] = useState([]);
  const getIngresos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getDespachos", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const elements = response.data;
      setEgresos(elements);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIngresos();
  }, []);

  return {
    columns: [
      { Header: "Nombre", accessor: "producto", align: "left" },
      { Header: "Cantidad", accessor: "cantidad", align: "left" },
      { Header: "Fecha de Egreso", accessor: "fechaEgreso", align: "left" },
      {
        Header: "Fecha de caducidad",
        accessor: "fechaCaducidad",
        align: "left",
      },
      { Header: "Bodeguero", accessor: "bodeguero", align: "left" },
      { Header: "Guia de despacho", accessor: "guiaDespacho", align: "left" },
      { Header: "Chofer", accessor: "chofer", align: "left" },
      { Header: "Empleado", accessor: "empleado", align: "left" },
      { Header: "Bodega", accessor: "bodega", align: "left" },
    ],

    rows: egresos,
  };
}
