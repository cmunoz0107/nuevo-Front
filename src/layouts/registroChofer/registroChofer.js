import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { Link } from "react-router-dom";
import axios from "axios";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import MDAlert from "components/MDAlert";
import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({});
  const closeNotification = () => setShowNotification(false);

  const registerUser = async () => {
    if (nombre && apellidos && correo && edad) {
      const response = await axios.post(
        "http://localhost:8080/registerChofer",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: {
            nombre,
            apellidos,
            correo,
            edad,
          },
        },
      );
      setShowNotification(true);
      if (response.data === "Chofer Creado")
        setNotification({ color: "success", label: "Chofer creado" });
      if (response.data === "Chofer ya existe")
        setNotification({ color: "warning", label: "Chofer ya existe" });
      if (
        response.data !== "Chofer ya existe" &&
        response.data !== "Chofer Creado"
      )
        setNotification({ color: "error", label: "Error al crear el Chofer" });
    } else {
      setShowNotification(true);
      setNotification({ color: "warning", label: "Ingrese todos los campos" });
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
                Registro Chofer
              </MDTypography>
              <MDTypography
                display="block"
                variant="button"
                color="white"
                my={1}
              >
                Ingrese sus datos
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
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                    label="Nombre"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    onChange={(e) => setApellido(e.target.value)}
                    type="text"
                    label="Apellido"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    onChange={(e) => setEdad(e.target.value)}
                    type="text"
                    label="Edad"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    onChange={(e) => setCorreo(e.target.value)}
                    type="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                  />
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton
                    onClick={registerUser}
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
