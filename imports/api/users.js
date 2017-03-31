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
    const tipo = recipe.tipo;
    const likes = recipe.likes;
    const username = recipe.username;
    const title = recipe.title;
    const description = recipe.description;
    const pictureGif = recipe.pictureGif;
    const Ingredients = recipe.Ingredients;

    UsersWithRecipesCollection.insert({
      tipo, likes, username, title, description, pictureGif, Ingredients });
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

    UsersWithRecipesCollection.update(recipesId, {
      $inc: { likes: 1 }
    });
  },
  'recipes.findAll'() {
    /* check(recipesId, String);*/
    UsersWithRecipesCollection.find({}, { sort: { likes: -1 } }).fetch()
  },

});
