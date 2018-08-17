import express from 'express';
const apiRouter = express.Router();
const sqlite3 = require('sqlite3').verbose();
const APPLICATION_DB_PATH = process.env.PWD + '/data/db.db';

const db = new sqlite3.Database(APPLICATION_DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log('error: ', err.message);
    }
    console.log('Connected to the application database.');
});

apiRouter.get('/api/v1/create', (req, res) => {
    db.run('CREATE TABLE langs(name text)', (err) => {
        if (err) console.log(err);
        return res.send("ok");
    });
});

apiRouter.get('/api/v1/insert', (req, res) => {
    let languages = ['C++', 'Python', 'Java', 'C#', 'Go'];
    let placeholders = languages.map((language) => '(?)').join(',');
    let sql = 'INSERT INTO langs(name) VALUES ' + placeholders;
    db.run(sql, languages, function (err) {
        if (err) return res.send(err.message);
        return res.send(`Rows inserted ${this.changes}`);
    });
});

//
// Application User API
// -----------------------------------------------------------------------------
apiRouter.get('/api/v1/user', (req, res) => {
    let sql = `SELECT DISTINCT Name name FROM langs ORDER BY name`;
    let results = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
          res.send(err);
        }
        rows.forEach((row) => {
          results.push(row.name);
        });
        return res.send(results);
      });
});

apiRouter.get('/api/v1/user/:id', (req, res) => {
    res.send(`GET /api/v1/user/${req.params.id}`);
});

apiRouter.post('/api/v1/user', (req, res) => {
    res.send('POST /api/v1/user');
});

apiRouter.delete('/api/v1/user', (req, res) => {
    res.send('DELETE /api/v1/user');
});
// -----------------------------------------------------------------------------



//
// Application Reservation API
// -----------------------------------------------------------------------------
apiRouter.get('/api/v1/reservation', (req, res) => {
    res.send('GET /api/v1/reservation');
});

apiRouter.get('/api/v1/reservation/:id', (req, res) => {
    res.send(`GET /api/v1/user/${req.params.id}`);
});

apiRouter.post('/api/v1/reservation', (req, res) => {
    res.send('POST /api/v1/reservation');
});

apiRouter.delete('/api/v1/reservation', (req, res) => {
    res.send('DELETE /api/v1/reservation');
});
// -----------------------------------------------------------------------------


export default apiRouter;