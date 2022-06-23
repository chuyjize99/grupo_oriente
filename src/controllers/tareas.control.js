const res = require("express/lib/response");
const tareasctrl = {};
const task = require("../models/Task");

tareasctrl.RederNotesForm = (req, res) => {
<<<<<<< HEAD
=======
  console.log(req.user.id)
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
  res.render("tareas/nueva-tarea");
};

tareasctrl.createnewnote = async (req, res) => {
  const { titulo, descripcion } = req.body;
  const Ntarea = new task({ titulo, descripcion });
<<<<<<< HEAD
=======
  Ntarea.user=req.user.id;
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
  await Ntarea.save();
  req.flash('success_msg','tarea agregada');
  res.redirect("/tareas");
};

<<<<<<< HEAD
tareasctrl.RederNote = async (req, res) => {
  const Ltarea = await task.find();
=======
//busca las notas para su lectura
tareasctrl.RederNote = async (req, res) => {
//busca las notas por usuario task.find({user:req.user.id})  //.sort({createdAt: 'desc'}) es para ordenar 
  const Ltarea = await task.find({user:req.user.id}).sort({createdAt: 'desc'});
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
  res.render("tareas/tareas-totales", { Ltarea });
};

tareasctrl.RederEdit = async (req, res) => {
  const Etarea = await task.findById(req.params.id);
<<<<<<< HEAD
=======
  if(Etarea.user !=req.user.id){
    req.flash('error_msg', 'no autorizado');
    return res.redirect('/tareas');
  }
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
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
