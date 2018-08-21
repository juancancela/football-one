import express from 'express';
import * as db from '../db';

const apiRouter = express.Router();
const MODELS = ['clients', 'reservations'];

// Application CRUD API Operations
//-----------------------------------------------------------------------------

MODELS.forEach(m => {
  apiRouter.get(`/api/v1/${m}`, (req, res) =>
    db.findAll(`${m}`, (e, row) => res.send(e || row)),
  );
  apiRouter.get(`/api/v1/${m}/:id`, (req, res) =>
    db.findById(`${m}`, req.params.id, (e, row) => res.send(e || row)),
  );
  apiRouter.post(`/api/v1/${m}`, (req, res) =>
    db.insert(`${m}`, req.body, (e, row) => res.send(e || row)),
  );
  apiRouter.delete(`/api/v1/${m}/:id`, (req, res) =>
    db.remove(`${m}`, req.params.id, (e, row) => res.send(e || row)),
  );
  apiRouter.patch(`/api/v1/${m}/:id`, (req, res) =>
    db.update(`${m}`, req.params.id, req.body, (e, row) => res.send(e || row)),
  );
});
// -----------------------------------------------------------------------------

export default apiRouter;
