
function init() {
    $("#form_Hospitales").on("submit", function (e) {
        guardaryeditar(e);
    });
}

$().ready(() => {
    //detecta carga de la pagina
    todos_controlador();
});

var todos_controlador = () => {
    var todos = new Hospitales_Model("", "", "", "", "todos");
    todos.todos();
};

var guardaryeditar = (e) => {
    e.preventDefault();
    var formData = new FormData($("#form_Hospitales")[0]);
    var ID_hospital = document.getElementById("ID_hospital").value;

    if (ID_hospital > 0) {
        var hospitales = new Hospitales_Model("", "", "", formData, "editar");
        hospitales.editar();
    } else {
        var hospitales = new Hospitales_Model("", "", "", formData, "insertar");
        hospitales.insertar();
    }
};

var editar = (ID_hospital) => {
    var uno = new Hospitales_Model(ID_hospital, "", "", "", "uno");
    uno.uno();
};

var verificar_nombre = () => {
    var Nombre = $("#Nombre").val();
    var hospitales = new Hospitales_Model("", Nombre, "", "", "verificar_nombre");
    hospitales.verificar_nombre();
};

/*var verificar_camas = () => {
    var Numero_camas = $("#Numero_camas").val();
    var hospitales = new Hospitales_Model("", "", "", Numero_camas, "verificar_camas");
    hospitales.verificar_camas();
}*/

var eliminar = (ID_hospital) => {
    var eliminar = new Hospitales_Model(ID_hospital, "", "", "", "eliminar");
    eliminar.eliminar();
}


init();
