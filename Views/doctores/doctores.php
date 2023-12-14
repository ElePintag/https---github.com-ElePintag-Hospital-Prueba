<?php require_once('../html/head2.php') ?>




<div class="row">

    <div class="col-lg-8 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Lista de Doctores</h5>

                <div class="table-responsive">
                    <button type="button" onclick="cargaDoctores()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_doctor">
                        Nuevo Doctor
                    </button>
                    <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                            <tr>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">#</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Hospital</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Nombres</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Especialidad</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Salario</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Opciones</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tabla_doctores">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Ventana Modal-->

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="Modal_doctor" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="frm_Doctores">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Doctores</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <input type="hidden" name="ID_doctor" id="ID_doctor">

                    <div class="form-group">
                        <label for="ID_hospital">Hospital</label>
                        <select name="ID_hospital" id="ID_hospital" class="form-control">
                            <option value="0">Seleccione a un hospital</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="Nombre">Nombre del doctor</label>
                        <input type="text" required class="form-control" id="Nombre" name="Nombre" placeholder="Ingrese el nombre del Nombre">
                    </div>

                    <div class="form-group">
                        <label for="Especialidad">Especialidad</label>
                        <input type="text" required class="form-control" id="Especialidad" name="Especialidad" placeholder="Ingrese la especialidad">
                    </div>

                    <div class="form-group">
                        <label for="Salario">Salario</label>
                        <input type="number step="0.01" required class="form-control" id="Salario" name="Salario" placeholder="Ingrese el salario">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Grabar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once('../html/script2.php') ?>

<script src="doctores.js"></script>