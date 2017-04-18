import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const UsersWithRecipesCollection = new Mongo.Collection('UsersWithRecipesCollection');

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
    UsersWithRecipesCollection.remove(recipeId);
  },
  'recipes.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    UsersWithRecipesCollection.update(taskId, { $set: { checked: setChecked } });
  },
  'recipesLike.update'(recipesId) {
    /** check(recipesId, String);*/
    //si aqui mandan recipesID {} le daria like a todo!!
    
    UsersWithRecipesCollection.update(recipesId, {
      $inc: { likes: 1 }
    });
  },
  'recipes.findAll'() {
    /* check(recipesId, String);*/
    UsersWithRecipesCollection.find({}, { sort: { likes: -1 } }).fetch()
  },
  'user.points'(){
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    UsersWithRecipesCollection.find({}).fetch();
  },
});


// Deny all client-side updates on the Lists collection

UsersWithRecipesCollection.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
