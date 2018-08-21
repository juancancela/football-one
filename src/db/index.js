const sqlite3 = require('sqlite3').verbose();

const APPLICATION_DB_PATH = `${process.env.PWD}/data/db.db`;
const log = console.log;
const ok = Object.keys;
const ov = Object.values;

export const db = new sqlite3.Database(
  APPLICATION_DB_PATH,
  sqlite3.OPEN_READWRITE,
  err => (err ? log(err.message) : log('Connected to db')),
);

export const insert = (t, e, cb) =>
  db.run(
    `INSERT INTO ${t}(${ok(e).toString()}) VALUES (${ok(e).map(() => '?')})`,
    ov(e),
    (err, row) => cb(err, row),
  );
export const findAll = (t, cb) =>
  db.all(`SELECT * FROM ${t}`, [], (error, row) => cb(error, row));
export const findById = (t, id, cb) =>
  db.get(`SELECT * FROM ${t} WHERE ID = ?`, [id], (err, row) => cb(err, row));
export const remove = (t, id, cb) =>
  db.run(`DELETE FROM ${t} WHERE ID = ?`, [id], (err, row) => cb(err, row));
export const update = (t, id, e, cb) =>
  db.run(
    `UPDATE ${t} SET ${ok(e).map(e => `${e} = ?`)} WHERE ID = ?`,
    [...ov(e), id],
    (err, row) => cb(err, row),
  );
