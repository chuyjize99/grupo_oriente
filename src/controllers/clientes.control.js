const res = require("express/lib/response");
const clientesctrl = {};
const clientes = require("../models/clientes");

clientesctrl.RederNotesForm = (req, res) => {
  res.render("esp/clientes/nuevo-cliente");
};
clientesctrl.createnewnote = async (req, res) => {
  const { nombre, direccion, tarea, producto } = req.body;
  const Ncliente = new clientes({ nombre, direccion, tarea, producto });
  await Ncliente.save();
  res.redirect("/clientes");
};

clientesctrl.RederNote = async (req, res) => {
  const Lcliente = await clientes.find();
  res.render("esp/clientes/clientes-totales", { Lcliente });
};

clientesctrl.RederEdit = async (req, res) => {
  const Ecliente = await clientes.findById(req.params.id);
  res.render("esp/clientes/edit-cliente", { Ecliente });
};

clientesctrl.update = async (req, res) => {
  const { nombre, direccion,tarea,producto } = req.body;
  await clientes.findByIdAndUpdate(req.params.id, { nombre, direccion,tarea,producto });
  res.redirect("/clientes");
};

clientesctrl.deleclientes = async (req, res) => {
  await clientes.findByIdAndDelete(req.params.id);
  res.redirect("/clientes");
};

module.exports = clientesctrl;