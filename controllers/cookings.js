const recipeModel = require('../models/cooking');

const index = (request, response) => {
    recipeModel.index()
        .then(result => {
            response.send(result);
        })
        .catch(error => {
            console.error(error);
        });
}

const show = (request, response) => {
    recipeModel.show(request.params.id)
        .then(result => {
            response.send(result);
        })
        .catch(error => {
            console.error(error);
        });
}


const update = (request, response) => {
    recipeModel.update(request.params.id, request.body)
        .then(result => {
            response.send(result);
        })
        .catch(error => {
            console.error(error);
        });
}

const create = (request, response) => {
    recipeModel.create(request.body)
        .then(result => {
            response.send(result);
        })
        .catch(error => {
            console.error(error);
        });
}

const destroy = (request, response) => {
    recipeModel.destroy(request.params.id)
        .then(result => {
            response.send(result);
        })
        .catch(error => {
            console.error(error);
        });
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
