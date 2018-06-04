exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('cookings').insert([{
        name: "Crispy Shrimp Pasta",
        ingredients: `4 ounces fettuccine pasta,  3/4 pound shrimp (peeled, deveined and tails removed),  1 teaspoon kosher salt,  1 teaspoon freshly ground pepper,  2 tablespoons flour,  1 1/4 cups low sodium chicken broth,  1/2 cup whipping cream,  1/2 teaspoon cajun seasoning`,
        preparation_time: 35,
        country: "pan asian cuisine",
        cooking_img_url: " http://www.newdesignfile.com/postpic/2012/10/healthy-food-icon-transparent_248816.png",
        gluten_free: false
      }, {
        name: "Macaroons",
        ingredients: ` 1 7/8 tablespoons granulated sugar,  5/8 cup almond flour ,  2 large egg whites,  15/16 cup powdered sugar,
         `,
        preparation_time: 80,
        country: "France",
        cooking_img_url: " http://www.newdesignfile.com/postpic/2012/10/healthy-food-icon-transparent_248816.png",
        gluten_free: true
      }, {
        name: "Tuna Tartare with Sesame",
        ingredients: `2 teaspoons sesame seeds,  1 pound tuna fillets ,  3/4 teaspoon fresh ginger ,  1 1/2 tablespoons soy sauce ,  2 1/4 teaspoons fresh lime juice,  1 chilies,  1 1/2 tablespoons sesame oil ,  8 pieces fresh chives`,
        preparation_time: 25,
        country: "pan asian cuisine",
        cooking_img_url: " http://www.newdesignfile.com/postpic/2012/10/healthy-food-icon-transparent_248816.png",
        gluten_free: true
      }, {
        name: "Chile Colorado Burritos",
        ingredients: `2 pounds stew meat ,  1 can red enchilada sauce (mild, *, at least 19 oz.),  2 beef stock cubes ,  1/2 can refried beans ,  7 large flour tortillas,  1 cup shredded cheddar cheese `,
        preparation_time: 65,
        country: "USA",
        cooking_img_url: " http://www.newdesignfile.com/postpic/2012/10/healthy-food-icon-transparent_248816.png",
        gluten_free: false
      }, {
        name: "Salmon and Tuna Poke Bowl",
        ingredients: ` 150 grams fresh salmon ,  150 grams tuna ,  2 tablespoons leaves ,  3 tablespoons soy sauce,  2 tablespoons rice vinegar,  1 tablespoon sesame oil,  1 tablespoon sesame seeds,  3 tablespoons corn kernels,  3 tablespoons edamame beans,  1 avocado `,
        preparation_time: 20,
        country: "Japan",
        cooking_img_url: " http://www.newdesignfile.com/postpic/2012/10/healthy-food-icon-transparent_248816.png",
        gluten_free: true
      }]);
    });
};