//aqui va a estar el codigo de usuarios.model.js

function init() {
    $("#frm_Doctores").on("submit", function (e) {
        guardaryeditar(e);
    });
}

$().ready(() => {
    todos();
});

var todos = () => {
    var html = "";
    $.get("../../Controllers/doctores.controller.php?op=todos", (res) => {
        res = JSON.parse(res);
        $.each(res, (index, valor) => {
            html += `<tr>
                  <td>${index + 1}</td>
                  <td>${valor.hospital}</td>
                  <td>${valor.Nombre}</td>
                  <td>${valor.Especialidad}</td>
                  <td>${valor.Salario}</td>
              <td>
              <button class='btn btn-success' onclick='editar(${valor.ID_doctor
                })'>Editar</button>
              <button class='btn btn-danger' onclick='eliminar(${valor.ID_doctor
                })'>Eliminar</button>
              <button class='btn btn-info' onclick='ver(${valor.ID_doctor
                })'>Ver</button>
              </td></tr>
                  `;
        });
        $("#tabla_doctores").html(html);
    });
};

var guardaryeditar = (e) => {
    e.preventDefault();
    var dato = new FormData($("#frm_Doctores")[0]);
    var ruta = "";
    var ID_doctor = document.getElementById("ID_doctor").value;
    if (ID_doctor > 0) {
        ruta = "../../Controllers/doctores.controller.php?op=actualizar";
    } else {
        ruta = "../../Controllers/doctores.controller.php?op=insertar";
    }
    $.ajax({
        url: ruta,
        type: "POST",
        data: dato,
        contentType: false,
        processData: false,
        success: function (res) {
            res = JSON.parse(res);
            if (res == "ok") {
                Swal.fire("Doctores", "Doctor registrado con éxito", "success");
                todos();
                limpia_Cajas();
            } else {
                Swal.fire("Doctores", "Error al guardo, intente mas tarde", "error");
            }
        },
    });
};

var cargaDoctores = () => {
    return new Promise((resolve, reject) => {
        $.post("../../Controllers/hospitales.controller.php?op=todos", (res) => {
            res = JSON.parse(res);
            var html = "";
            $.each(res, (index, val) => {
                html += `<option value="${val.ID_hospital}"> ${val.Nombre}</option>`;
            });
            $("#ID_hospital").html(html);
            resolve();
        }).fail((error) => {
            reject(error);
        });
    });
};

var editar = async (ID_doctor) => {
    await cargaDoctores();
    $.post(
        "../../Controllers/doctores.controller.php?op=uno",
        { ID_doctor: ID_doctor },
        (res) => {
            res = JSON.parse(res);

            $("#ID_doctor").val(res.ID_doctor);
            $("#ID_hospital").val(res.ID_hospital);
            $("#Nombre").val(res.Nombre);
            $("#Especialidad").val(res.Especialidad);
            $("#Salario").val(res.Salario);
        }
    );
    $("#Modal_doctor").modal("show");
};

var eliminar = (ID_doctor) => {
    Swal.fire({
        title: "Doctores",
        text: "Esta seguro de eliminar al Doctor",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar",
    }).then((result) => {
        if (result.isConfirmed) {
            $.post(
                "../../Controllers/doctores.controller.php?op=eliminar",
                { ID_doctor: ID_doctor },
                (res) => {
                    res = JSON.parse(res);
                    if (res === "ok") {
                        Swal.fire("Doctores", "Doctor eliminado", "success");
                        todos();
                    } else {
                        Swal.fire("Error", res, "error");
                    }
                }
            );
        }
    });

    limpia_Cajas();
};

var limpia_Cajas = () => {
    document.getElementById("ID_doctor").value = "";
    document.getElementById("ID_hospital").value = "";
    document.getElementById("Nombre").value = "";
    document.getElementById("Especialidad").value = "";
    document.getElementById("Salario").value = "";

    $("#Modal_doctor").modal("hide");
};
init();
