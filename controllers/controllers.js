const pool = require('../config/dbconfig');

exports.getAllStudents = (req, res, next) => {
    pool.query(`SELECT * FROM etudiants`, (error, result) => {
        if (error) next(error);
        res.render("home", { etudiants: result?.rows });
    });
};

exports.createStudent = (req, res, next) => {
    const { nom, genre, adresse } = req.body;
    pool.query(`INSERT INTO etudiants (nom, genre, adresse) VALUES (?, ?, ?)`,
        [nom, genre, adresse],
        (error, result) => {
            if (error) next(error);
            if (result) res.redirect("/");
        });
};