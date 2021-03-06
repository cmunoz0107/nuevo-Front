import Productos from "layouts/productos";
// import RegistroProducto from "layouts/registroProductos";
import Usuarios from "layouts/usuarios";
import RegistroChofer from "layouts/registroChofer/registroChofer";
import ListadoIngresos from "layouts/ingresoProductos/listadoIngresos/listadoIngresos";
import Icon from "@mui/material/Icon";
import Formulario from "layouts/ingresoBodegueros/formularioIngreso";
import IngresoProductos from "layouts/ingresoProductos/ingresoProductos";
import Despacho from "layouts/despacho/formularioDespacho";
import ListadoDespacho from "layouts/despacho/listadoDespachos/listadoDespachos";
import SignIn from "layouts/authentication/sign-in";

const routes = [
  {
    type: "collapse",
    name: "Productos",
    key: "productos",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/productos",
    component: <Productos />,
  },
  {
    type: "collapse",
    name: "ingreso Productos",
    key: "ingresoProductos",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/ingresoProductos",
    component: <IngresoProductos />,
  },
  {
    type: "collapse",
    name: "Listado de ingresos",
    key: "listadoIngresos",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/listadoIngreso",
    component: <ListadoIngresos />,
  },
  {
    type: "collapse",
    name: "Despacho de productos",
    key: "despachoProductos",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/despacho",
    component: <Despacho />,
  },
  {
    type: "collapse",
    name: "Listado de Despachos ",
    key: "listadoDespacho",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/listadoDespacho",
    component: <ListadoDespacho />,
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
    name: "Registro Chofer",
    key: "registroChofer",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/registroChofer",
    component: <RegistroChofer />,
  },
  {
    type: "collapse",
    name: "Cerrar Sesion",
    key: "authentication",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
