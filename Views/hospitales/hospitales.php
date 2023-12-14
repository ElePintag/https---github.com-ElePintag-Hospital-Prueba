<?php require_once('../html/head2.php') ?>




<div class="row">

    <div class="col-lg-8 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Lista de Hospitales</h5>

                <div class="table-responsive">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_Hospital">
                        Nuevo Hospital
                    </button>
                    <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                            <tr>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">#</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Nombres</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Ciudad</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Numero_camas</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Opciones</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tabla_Hospitales">

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
<div class="modal fade" id="Modal_Hospital" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="form_Hospitales">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Hospitales</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <input type="hidden" name="ID_hospital" id="ID_hospital">


                    <div class="form-group">
                        <label for="Nombre">Nombres</label>
                        <input type="text" onfocusout="verificar_nombre();" required class="form-control" id="Nombre" name="Nombre" placeholder="Ingrese sus nombres">
                        <div class="alert alert-danger d-none" role="alert" id="VerificarNombre">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Ciudad">Ciudad</label>
                        <input type="text" required class="form-control" id="Ciudad" name="Ciudad" placeholder="Ingrese su ciudad">
                    </div>
                    <div class="form-group">
                        <label for="Numero_camas">Numero_camas</label>
                        <input type="number" onfocusout="verificar_camas();" required class="form-control" id="Numero_camas" name="Numero_camas" placeholder="Ingrese el numero de camas">

                                 <!-- verificar_camas-->   
                        <!-- <input type="text" onfocusout="verificar_camas();" required class="form-control" id="Numero_camas" name="Numero_camas" placeholder="Ingrese el numero de camas">-->

                        <div class="alert alert-danger d-none" role="alert" id="VerificarCamas">
                        </div>
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

<script src="hospitales.controller.js"></script>
<script src="hospitales.model.js"></script>