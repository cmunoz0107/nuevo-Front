import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Select from "react-select";
import axios from "axios";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import MDAlert from "components/MDAlert";
import { useEffect, useState } from "react";

function Formulario() {
  const [productos, setProductos] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [bodeguero, setBodeguero] = useState("");
  const [guiaDespacho, setGuiaDespacho] = useState("");
  const [chofer, setChofer] = useState("");
  const [fechaDeCaducidad, setFechaDeCaducidad] = useState(null);
  const [fechaDeIngreso, setFechaDeIngreso] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({});
  const [optionsProductos, setOptionsProductos] = useState();
  const [optionsChofer, setOptionsChofer] = useState();
  const [optionsBodeguero, setOptionsBodeguero] = useState();

  const closeNotification = () => setShowNotification(false);

  const setValueProductos = (data) => {
    const newProducts = [];
    data.forEach((e) => {
      newProducts.push({
        label: e.nombre,
        value: e.cod_Producto,
      });
    });
    setOptionsProductos(newProducts);
  };
  const setValueBodeguero = (data) => {
    const newProducts = [];
    data.forEach((e) => {
      const nombre = `${e.nombre} ${e.apellidos}`;
      newProducts.push({
        label: nombre,
        value: e.cod_Bodeguero,
      });
    });
    setOptionsBodeguero(newProducts);
  };
  const setValueChofer = (data) => {
    const newProducts = [];
    data.forEach((e) => {
      const nombre = `${e.nombre} ${e.apellidos}`;
      newProducts.push({
        label: nombre,
        value: e.cod_Chofer,
      });
    });
    setOptionsChofer(newProducts);
  };

  const resetValues = () => {
    setProductos("");
    setCantidad("");
    setBodeguero("");
    setGuiaDespacho("");
    setChofer("");
    setFechaDeCaducidad("");
    setFechaDeIngreso("");
  };

  const obtenerDataSelects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getSelects", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (response.data) {
        const { allProductos, bodegueros, choferes } = response.data;
        setValueBodeguero(bodegueros);
        setValueChofer(choferes);
        setValueProductos(allProductos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerDataSelects();
  }, []);

  const agregarProductos = async () => {
    if (
      productos &&
      cantidad &&
      bodeguero &&
      guiaDespacho &&
      chofer &&
      fechaDeCaducidad &&
      fechaDeIngreso
    ) {
      const response = await axios.post(
        "http://localhost:8080/ingresoProducto",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: {
            productos: productos.value,
            cantidad,
            bodeguero: bodeguero.value,
            guiaDespacho,
            chofer: chofer.value,
            fechaDeCaducidad,
            fechaDeIngreso,
          },
        },
      );
      setShowNotification(true);
      if (response.data) {
        setNotification({ color: "success", label: "Producto Ingresado!!!!!" });
        resetValues();
      } else {
        setNotification({
          color: "error",
          label: "Error al ingresar producto",
        });
      }
    } else {
      setShowNotification(true);
      setNotification({
        color: "warning",
        label: "Llene todos los campos",
      });
    }
    setTimeout(closeNotification, 3000);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={20} sm={20} md={10} lg={8} xl={8}>
          <Card>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-3}
              p={3}
              mb={1}
              textAlign="center"
            >
              <MDTypography
                variant="h4"
                fontWeight="medium"
                color="white"
                mt={1}
              >
                Ingreso Productos
              </MDTypography>
              <MDTypography
                display="block"
                variant="button"
                color="white"
                my={1}
              >
                Ingrese datos
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              {showNotification && (
                <MDAlert color={notification.color} dismissible>
                  {notification.label}
                </MDAlert>
              )}
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput
                    onChange={(e) => setCantidad(e.target.value)}
                    value={cantidad}
                    type="number"
                    label="Cantidad"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    onChange={(e) => setFechaDeIngreso(e.target.value)}
                    value={fechaDeIngreso}
                    type="date"
                    label="Fecha de ingreso"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    onChange={(e) => setFechaDeCaducidad(e.target.value)}
                    value={fechaDeCaducidad}
                    type="date"
                    label="fecha de caducidad"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    onChange={(e) => setGuiaDespacho(e.target.value)}
                    value={guiaDespacho}
                    type="number"
                    label="Guia de despacho"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2}>
                  <Select
                    placeholder="Productos"
                    onChange={setProductos}
                    options={optionsProductos}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <Select
                    placeholder="Bodeguero"
                    onChange={setBodeguero}
                    options={optionsBodeguero}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <Select
                    placeholder="Chofer"
                    onChange={setChofer}
                    options={optionsChofer}
                  />
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton
                    onClick={agregarProductos}
                    variant="gradient"
                    color="info"
                    fullWidth
                  >
                    Registrar
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Formulario;
