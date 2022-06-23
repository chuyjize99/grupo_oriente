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

module.exports = router;
