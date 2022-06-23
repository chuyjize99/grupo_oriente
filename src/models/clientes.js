const { Schema, model } =require ("mongoose");
 

const ClientesSchema = new Schema(
  {
    nombre: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//export.defaultmodel("Task", TaskSchema);
module.exports=model ("Clientes",ClientesSchema);