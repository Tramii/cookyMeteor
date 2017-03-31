import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const UsersWithRecipesCollection = new Mongo.Collection('UsersWithRecipesCollection');

Meteor.methods({
  'recipes.insert'(recipe) {

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    var tipo = recipe.tipo;
    var likes = recipe.likes;
    var username = recipe.username;
    var title = recipe.title;
    var description = recipe.description;
    var pictureGif = recipe.pictureGif;
    var Ingredients = recipe.Ingredients;

    UsersWithRecipesCollection.insert({
      tipo, likes, username, title, description, pictureGif, Ingredients
    });
  },
  'recipes.remove'(recipeId) {
    /**check(recipeId, String);*/
    if (! Meteor.userId()) {
      console.log("not authorized");
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
    /**check(recipesId, String);*/

    UsersWithRecipesCollection.update(recipesId, {
      $inc: { likes:1 }
    });
  },
  'recipes.findAll'() {
    /**check(recipesId, String);*/
    UsersWithRecipesCollection.find({}, { sort: { likes: -1 } }).fetch()
  },

});
