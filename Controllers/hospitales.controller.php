<?php
require_once('../Models/hospitales.model.php');
$hospitales = new Clase_Hospitales;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array();
        $datos = $hospitales->todos();
        while ($fila = mysqli_fetch_assoc($datos)) {
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $ID_hospital = $_POST["ID_hospital"];
        $datos = array();
        $datos = $hospitales->uno($ID_hospital);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    case 'insertar':
        $Nombre = $_POST["Nombre"];
        $Ciudad = $_POST["Ciudad"];
        $Numero_camas = $_POST["Numero_camas"];

        $datos = array();
        $datos = $hospitales->insertar($Nombre, $Ciudad, $Numero_camas,);
        echo json_encode($datos);
        break;
    case 'actualizar':
        $ID_hospital = $_POST["ID_hospital"];
        $Nombre = $_POST["Nombre"];
        $Ciudad = $_POST["Ciudad"];
        $Numero_camas = $_POST["Numero_camas"];

        $datos = array();
        $datos = $hospitales->actualizar($ID_hospital, $Nombre, $Ciudad, $Numero_camas);
        echo json_encode($datos);
        break;
    case 'eliminar':
        $ID_hospital = $_POST["ID_hospital"];
        $datos = array();
        $datos = $hospitales->eliminar($ID_hospital);
        echo json_encode($datos);
        break;
    case "verificar_nombre":
        $Nombre = $_POST["Nombre"];
        $datos = array();
        $datos = $hospitales->verificar_nombre($Nombre);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    /* case "verificar_camas":
        $Numero_camas = $_POST["Numero_camas"];
        $datos = array();
        $datos = $hospitales->verificar_camas($Numero_camas);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;*/
}
