import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
import RegistroProducto from "layouts/registroProductos";
import Usuarios from "layouts/usuarios";
import RegistroChofer from "layouts/registroChofer/registroChofer";
import RegistroProveedor from "layouts/proveedor/registro_Proveedor";
import Icon from "@mui/material/Icon";
import Formulario from "layouts/ingresoBodegueros/formularioIngreso";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Registrar Usuario",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <Formulario />,
  },
  {
    type: "collapse",
    name: "usuarios",
    key: "usuarios",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/usuarios",
    component: <Usuarios />,
  },
  {
    type: "collapse",
    name: "Productos",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },

  {
    type: "collapse",
    name: "Registro Chofer",
    key: "registroChofer",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/registroChofer",
    component: <RegistroChofer />,
  },
  {
    type: "collapse",
    name: "Registro Proveedor",
    key: "registroProveedor",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/registroProveedor",
    component: <RegistroProveedor />,
  },
  {
    type: "collapse",
    name: "Registro producto",
    key: "registroProductos",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/registro_Producto",
    component: <RegistroProducto />,
  },
  {
    type: "collapse",
    name: "ingreso Productos",
    key: "ingresoProductos",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Iniciar sesion",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
