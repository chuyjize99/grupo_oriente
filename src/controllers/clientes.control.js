const res = require("express/lib/response");
const clientesctrl = {};
const clientes = require("../models/clientes");

clientesctrl.RederNotesForm = (req, res) => {
  res.render("esp/clientes/nuevo-cliente");
};
clientesctrl.createnewnote = async (req, res) => {
  const { nombre, direccion, tarea, producto } = req.body;
  const Ncliente = new clientes({ nombre, direccion, tarea, producto });
<<<<<<< HEAD
  await Ncliente.save();
  res.redirect("/clientes");
};

clientesctrl.RederNote = async (req, res) => {
  const Lcliente = await clientes.find();
=======
  Ncliente.user=req.user.id;
  await Ncliente.save();
  req.flash('success_msg','cliente agregado');
  res.redirect("/clientes");
};

//busca las notas para su lectura
clientesctrl.RederNote = async (req, res) => {
  //busca las notas por usuario task.find({user:req.user.id})  //.sort({createdAt: 'desc'}) es para ordenar 
  const Lcliente = await clientes.find({user:req.user.id}).sort({createdAt: 'desc'});
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
  res.render("esp/clientes/clientes-totales", { Lcliente });
};

clientesctrl.RederEdit = async (req, res) => {
  const Ecliente = await clientes.findById(req.params.id);
<<<<<<< HEAD
=======
  if(Ecliente.user !=req.user.id){
  req.flash('error_msg', 'no autorizado');
  return res.redirect('/clientes');
  }
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
  res.render("esp/clientes/edit-cliente", { Ecliente });
};

clientesctrl.update = async (req, res) => {
  const { nombre, direccion,tarea,producto } = req.body;
  await clientes.findByIdAndUpdate(req.params.id, { nombre, direccion,tarea,producto });
<<<<<<< HEAD
=======
  req.flash('success_msg', 'cliente actualizado');
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
  res.redirect("/clientes");
};

clientesctrl.deleclientes = async (req, res) => {
  await clientes.findByIdAndDelete(req.params.id);
<<<<<<< HEAD
=======
  req.flash('success_msg', 'cliente eliminado');
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
  res.redirect("/clientes");
};

module.exports = clientesctrl;