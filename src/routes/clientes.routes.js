const { Router } = require("express");
const router = Router();

const {
  RederNotesForm,
  createnewnote,
  RederNote,
  RederEdit,
  update,
  deleclientes,
} = require("../controllers/clientes.control");
<<<<<<< HEAD
//nueva tarea
router.get("/clientes/add", RederNotesForm);
router.post("/clientes/nuevo-cliente", createnewnote);
//ver tareas
router.get("/clientes", RederNote);
//edit tareas
router.get("/clientes/edit/:id", RederEdit);
router.put("/clientes/edit/:id", update);
//eliminar tareas
router.delete("/clientes/delete/:id", deleclientes);
=======

//isAuthenticated es una funcion que restringe los datos a los usuarios no registrados
const {isAuthenticated}= require('../helpers/autenticacion')

//nueva tarea
router.get("/clientes/add",isAuthenticated, RederNotesForm);
router.post("/clientes/nuevo-cliente",isAuthenticated, createnewnote);
//ver tareas
router.get("/clientes", isAuthenticated,RederNote);
//edit tareas
router.get("/clientes/edit/:id", isAuthenticated, RederEdit);
router.put("/clientes/edit/:id", isAuthenticated, update);
//eliminar tareas
router.delete("/clientes/delete/:id", isAuthenticated, deleclientes);
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9

module.exports = router;
