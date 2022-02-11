const routes = require("express").Router();
const Condominio = require("./../app/Controllers/Condominio");
const { body, validationResult } = require('express-validator');

routes.get("/", (req, res) => {
  return res.status(200).send();
});

routes.post("/condominio",
  body('tipo').isLength({ min: 5 }).withMessage('Deve ter no minimo 5 caracteres'),
  body('nome_fantasia').isLength({ min: 5 }).withMessage('Deve ter no minimo 5 caracteres'),
  (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let condominio = new Condominio;
    condominio.create(req.body);

    return res.status(200).send("foi");
  }
);

routes.put("/condominio/:id", (req, res) => {
  const condominio = new Condominio;
  const search = condominio.update(Number(req.params.id), req.body);

  return res.status(200).send(search);
})

routes.get("/condominio/:id", async (req, res) => {
  const condominio = new Condominio();
  const search = await condominio.getById(Number(req.params.id));

  return res.status(200).send(search);
})

routes.get("/condominio", async (req, res) => {
  let condominio = new Condominio();
  let search = await condominio.getAll();

  return res.status(200).send(search);
})

module.exports = routes;