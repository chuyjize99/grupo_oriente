const { Schema, model } =require ("mongoose");
 
<<<<<<< HEAD

=======
//si se edita el modelo borrar la base de datos para efectuar los cambios!!!
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
const ClientesSchema = new Schema(
  {
    nombre: { 
      type: String, 
      required: true, 
      trim: true, 
<<<<<<< HEAD
      unique: true 
=======
      //unique: true 
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
    },
    direccion: {
      type: String,
      trim: true, //quita los espacios inecesarios del string
    },
    tarea: { 
        type: String, 
        required: true, 
        trim: true, 
        //unique: true 
      },
      producto: { 
        type: String, 
        required: true, 
        trim: true, 
        //unique: true 
      },
    done: {
      type: Boolean,
      default: false,
    },
<<<<<<< HEAD
=======
    user: {
      type: String,
      required:true
    },
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//export.defaultmodel("Task", TaskSchema);
module.exports=model ("Clientes",ClientesSchema);