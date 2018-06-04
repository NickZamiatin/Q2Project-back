
exports.up = function (knex, Promise) {
    return knex.schema.createTable('cookings', table => {
        table.increments();
        table.string('name', 64)
        table.string('ingredients', 300)
        table.float('preparation_time', 2, 1)
        table.string('country', 64)
        table.string('cooking_img_url')
        table.boolean('gluten_free')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('cookings');
};
