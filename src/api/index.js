import express from 'express';
import * as db from '../db';

const r = express.Router();
const MODELS = ['clients', 'reservations', 'products'];

// Application CRUD API Operations
//-----------------------------------------------------------------------------
MODELS.forEach(m => {
  console.log('m => ', m);
  const a = '/api/v1/';
  console.log('`${a}${m}` => ', `${a}${m}`);
  r.get(`${a}${m}`, (req, res) => {
    console.log('db.findAll');
    db.findAll(`${m}`, (e, row) => res.send(e || row));
  });

  r.get(`${a}${m}/:id`, (req, res) => {
    console.log('db.findById');
    db.findById(`${m}`, req.params.id, (e, row) => res.send(e || row));
  });

  r.post(`${a}${m}`, (req, res) => {
    console.log('db.insert');
    db.insert(`${m}`, req.body, (e, row) => res.send(e || row));
  });

  r.delete(`${a}${m}/:id`, (req, res) => {
    console.log('db.remove');
    db.remove(`${m}`, req.params.id, (e, row) => res.send(e || row));
  });

  r.patch(`${a}${m}/:id`, (req, res) => {
    console.log('db.update');
    db.update(`${m}`, req.params.id, req.body, (e, row) => res.send(e || row));
  });
});
// -----------------------------------------------------------------------------

export default r;
