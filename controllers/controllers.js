const pool = require('../config/dbconfig');

exports.getAllStudents = (req, res, next) => {
    pool.query(`SELECT * FROM etudiants`, (error, result) => {
        if (error) next(error);
        res.render("home", { etudiants: result?.rows });
    });
};
