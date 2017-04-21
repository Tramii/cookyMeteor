import {Meteor} from 'meteor/meteor';
import {UsersWithRecipesCollection} from './users.js';
import {assert} from 'meteor/practicalmeteor:chai';


    Meteor.user = function() {
        return {'username': 'pruebita'};
    };

    describe('UsersWithRecipesCollection', function() {
        beforeEach(function() {
            UsersWithRecipesCollection.remove({});
            UsersWithRecipesCollection.insert({
                "_id": "JxojW4S4QW6CkJpye",
                "tipos": [
                    {
                        "tipo": "1"
                    }
                ],
                "likes": 6,
                "username": "josega149",
                "title": "Parfait con yogurt",
                "description": "Preheat oven to 350ºF/180ºC\nIn a medium bowl combine granola ingredients, stir until well mixed.\nPour mixture onto a greased baking sheet and bake for 40-45 minutes, tossing halfway through to ensure even baking. \nSave granola for up to 2 months, or use right away.\nAssemble parfaits in bowls or mason jars (great for on the go!). Layer yogurt with granola and your choice of assorted mixed fruits and/or nuts, alternating layers.\nEnjoy!",
                "pictureGif": "https://www.youtube.com/watch?v=3ab-e37VSbI",
                "Ingredients": [
                    {
                        "ingrediente": "Granola"
                    }, {
                        "ingrediente": "Miel"
                    }, {
                        "ingrediente": "Yogurt"
                    }, {
                        "ingrediente": "Muchas frutas"
                    }
                ]
            });
            UsersWithRecipesCollection.insert({
                "_id": "HEsTX6vgjjES4CyEi",
                "tipos": [
                    {
                        "tipo": "2"
                    }
                ],
                "likes": 4,
                "username": "josega149",
                "title": "Ramen para 2",
                "description": "500ml chicken stock 3 cloves of garlic, halved 2 slices of ginger 2-3 tablespoons soy sauce 1/2 teaspoon Chinese Five Spice Powder 1 tablespoon mirin 1 teaspoon sugar (or more to taste)\nPork or Chicken marinated in garlic/soy sauce, soft boiled eggs, green onions, noodles.",
                "pictureGif": "https://www.youtube.com/watch?v=MEroOP0Z1lA",
                "Ingredients": [
                    {
                        "ingrediente": "Pollo"
                    }, {
                        "ingrediente": "Ajo"
                    }, {
                        "ingrediente": "Salsa soya"
                    }, {
                        "ingrediente": "Fideos japoneses"
                    }
                ]
            });
        });

        it("Should find inserted recipes", function() {
            const result = UsersWithRecipesCollection.find({});
            assert.equal(result.count(), 2);
        });

        it("Should update likes", function() {
            Meteor.call('recipesLike.update', 'JxojW4S4QW6CkJpye', function() {
                const recipes = UsersWithRecipesCollection.find({}).fetch();
                assert.equal(recipes[0].likes, 7);
            });
        });

        it("Should remove recipes", function() {
            Meteor.call('recipes.remove', 'JxojW4S4QW6CkJpye', function() {
              console.log('margaritaa');
                const recipex = UsersWithRecipesCollection.find({}).fetch();
                assert.equal(recipex.length, 1);
            });
        });
    })
