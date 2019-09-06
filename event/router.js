const { Router } = require('express')
const Event = require('./model')

const eventRouter = new Router()

eventRouter.post(
  '/event',
  (request, response, next) => {
    Event.create(request.body)
    .then((eventInstance) => response.send(eventInstance))
    .catch(next)
  }
)

eventRouter.get(
  '/event',
  (request, response, next) => {
    Event.findAll()
    .then((arrayOfEvents) => response.send(arrayOfEvents))
    .catch(next)
  }
)

eventRouter.get(
  '/event/:id',
  (request, response, next) => {
    Event.findByPk(request.params.id)
    .then((event) => response.send(event))
    .catch(next)
  }
)

eventRouter.put(
  '/event/:id',
  (request, response, next) => {
    Event.findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(response.send)
    .catch(next)
  }
)

eventRouter.delete(
  '/event/:id',
  (request, response, next) => {
    Event.destroy({ where: {id: request.params.id}})
    .then(deletedEvent => response.send(deletedEvent))
    .catch(next)
  }
)


module.exports = eventRouter