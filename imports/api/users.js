import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const UsersWithRecipesCollection = new Mongo.Collection('UsersWithRecipesCollection');

// Deny all client-side updates on the Lists collection
UsersWithRecipesCollection.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Meteor.methods({
  'recipes.insert'(recipe) {
    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    const tipos = recipe.tipos;
    const likes = recipe.likes;
    const username = recipe.username;
    const title = recipe.title;
    const description = recipe.description;
    const pictureGif = recipe.pictureGif;
    const Ingredients = recipe.Ingredients;

    UsersWithRecipesCollection.insert({
      tipos, likes, username, title, description, pictureGif, Ingredients });
  },
  'recipes.remove'(recipeId) {
    /** check(recipeId, String);*/
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    //si aqui mandan recipesID {} borraria todas las recetas!!
    if(((typeof recipesId) === 'string') && !recipesId.includes("{")){
      UsersWithRecipesCollection.remove(recipeId);
    }
  },
  'recipesLike.update'(recipesId) {
    /** check(recipesId, String);*/
    //si aqui mandan recipesID {} sin seguridad le daria like a todo!!
    if(((typeof recipesId) === 'string') && !recipesId.includes("{")){
      UsersWithRecipesCollection.update(recipesId, {
        $inc: { likes: 1 }
      });
    }
  },/**
  'recipes.findAll'() {
    UsersWithRecipesCollection.find({}, { sort: { likes: -1 } }).fetch()
  },
  'user.points'(){
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    UsersWithRecipesCollection.find({}).fetch();
  },*/
});

/**
export const updateText = new ValidatedMethod({
  name: 'todos.updateText',
  validate: new SimpleSchema({
    todoId: { type: String },
    newText: { type: String }
  }).validator(),
  run({ todoId, newText }) {
    const todo = Todos.findOne(todoId);
    if (!todo.editableBy(this.userId)) {
      throw new Meteor.Error('todos.updateText.unauthorized',
        'Cannot edit todos in a private list that is not yours');
    }
    Todos.update(todoId, {
      $set: { text: newText }
    });
  }
});*/
