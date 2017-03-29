import { Mongo } from 'meteor/mongo';


//Deberían poner los métodos del api de una vez, para ser usados en el cliente y que este no pueda hacerse desde el cliente
export const UsersWithRecipesCollection = new Mongo.Collection('UsersWithRecipesCollection');
