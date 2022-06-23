const res = require("express/lib/response");
const tareasctrl = {};
const task = require("../models/Task");

tareasctrl.RederNotesForm = (req, res) => {
  res.render("tareas/nueva-tarea");
};

tareasctrl.createnewnote = async (req, res) => {
  const { titulo, descripcion } = req.body;
  const Ntarea = new task({ titulo, descripcion });
  await Ntarea.save();
  req.flash('success_msg','tarea agregada');
  res.redirect("/tareas");
};

tareasctrl.RederNote = async (req, res) => {
  const Ltarea = await task.find();
  res.render("tareas/tareas-totales", { Ltarea });
};

tareasctrl.RederEdit = async (req, res) => {
  const Etarea = await task.findById(req.params.id);
  res.render("tareas/edit-tarea", { Etarea });
};

tareasctrl.update = async (req, res) => {
  const { titulo, descripcion } = req.body;
  await task.findByIdAndUpdate(req.params.id, { titulo, descripcion });
  req.flash('success_msg', 'tarea actualizada');
  res.redirect("/tareas");
};

tareasctrl.deletask = async (req, res) => {
  await task.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'tarea eliminada');
  res.redirect("/tareas");
};

module.exports = tareasctrl;
