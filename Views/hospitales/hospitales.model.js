class Hospitales_Model {
    constructor(
        ID_hospital,
        Nombre,
        Ciudad,
        Numero_camas,
        Ruta
    ) {
        this.ID_hospital = ID_hospital;
        this.Nombre = Nombre;
        this.Ciudad = Ciudad;
        this.Numero_camas = Numero_camas;
        this.Ruta = Ruta;
    }
    todos() {
        var html = "";
        $.get("../../Controllers/hospitales.controller.php?op=" + this.Ruta, (res) => {
            res = JSON.parse(res);
            $.each(res, (index, valor) => {

                html += `<tr>
                  <td>${index + 1}</td>
                  <td>${valor.Nombre}</td>
                  <td>${valor.Ciudad}</td>
                  <td>${valor.Numero_camas}</td>
                  
              <td>
              <button class='btn btn-success' onclick='editar(${valor.ID_hospital
                    })'>Editar</button>
              <button class='btn btn-danger' onclick='eliminar(${valor.ID_hospital
                    })'>Eliminar</button>
              <button class='btn btn-info' onclick='ver(${valor.ID_hospital
                    })'>Ver</button>
              </td></tr>
                  `;
            });
            $("#tabla_Hospitales").html(html);
        });
    }

    insertar() {
        var dato = new FormData();
        dato = this.Numero_camas;
        $.ajax({
            url: "../../Controllers/hospitales.controller.php?op=insertar",
            type: "POST",
            data: dato,
            contentType: false,
            processData: false,
            success: function (res) {
                res = JSON.parse(res);
                if (res === "ok") {
                    Swal.fire("Hospitales", "Hospital Registrado", "success");
                    todos_controlador();
                } else {
                    Swal.fire("Error", res, "error");
                }
            },
        });
        this.limpia_Cajas();
    }

     verificar_nombre() {
        var Nombre = this.Nombre;
        $.post(
            "../../Controllers/hospitales.controller.php?op=verificar_nombre",
            { Nombre: Nombre },
            (res) => {
                res = JSON.parse(res);
                if (parseInt(res.verificar_nombre) > 0) {
                    $("#VerificarNombre").removeClass("d-none");
                    $("#VerificarNombre").html(
                        "El nombre ingresado, ya exite en la base de datos"
                    );
                    $("button").prop("disabled", true);
                } else {
                    $("#VerificarNombre").addClass("d-none");
                    $("button").prop("disabled", false);
                }
            }
        );
    }

    /* verificar_camas() {
        var Numero_camas = this.Numero_camas;
        $.post(
            "../../Controllers/hospitales.controller.php?op=verificar_camas",
            { Numero_camas: Numero_camas },
            (res) => {
                res = JSON.parse(res);
                if (parseInt(res.verificar_camas) > 0) {
                    $("#VerificarCamas").removeClass("d-none");
                    $("#VerificarCamas").html(
                        "El Numero de camas ingresadas, ya exite en la base de datos"
                    );
                    $("button").prop("disabled", true);
                } else {
                    $("#VerificarCamas").addClass("d-none");
                    $("button").prop("disabled", false);
                }
            }
        );
    }*/

    uno() {
        var ID_hospital = this.ID_hospital;
        $.post(
            "../../Controllers/hospitales.controller.php?op=uno",
            { ID_hospital: ID_hospital },
            (res) => {
                res = JSON.parse(res);
                $("#ID_hospital").val(res.ID_hospital);
                $("#Nombre").val(res.Nombre);
                $("#Ciudad").val(res.Ciudad);
                $("#Numero_camas").val(res.Numero_camas);
            }
        );
        $("#Modal_Hospital").modal("show");
    }

    editar() {
        var dato = new FormData();
        dato = this.Numero_camas;
        $.ajax({
            url: "../../Controllers/hospitales.controller.php?op=actualizar",
            type: "POST",
            data: dato,
            contentType: false,
            processData: false,
            success: function (res) {
                res = JSON.parse(res);
                if (res === "ok") {
                    Swal.fire("Hospitales", "Hospital Registrado", "success");
                    todos_controlador();
                } else {
                    Swal.fire("Error", res, "error");
                }
            },
        });
        this.limpia_Cajas();
    }

    eliminar() {
        var ID_hospital = this.ID_hospital;

        Swal.fire({
            title: "Hospitales",
            text: "Esta seguro de eliminar el hospital",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                $.post(
                    "../../Controllers/hospitales.controller.php?op=eliminar",
                    { ID_hospital: ID_hospital },
                    (res) => {
                        res = JSON.parse(res);
                        if (res === "ok") {
                            Swal.fire("Hospitales", "Hospital Eliminado", "success");
                            todos_controlador();
                        } else {
                            Swal.fire("Error", res, "error");
                        }
                    }
                );
            }
        });

        this.limpia_Cajas();
    }

    limpia_Cajas() {

        document.getElementById("Nombre").value = "";
        document.getElementById("Ciudad").value = "";
        document.getElementById("Numero_camas").value = "";
        $("#ID_hospital").val("");

        $("#Modal_Hospital").modal("hide");
    }
}
