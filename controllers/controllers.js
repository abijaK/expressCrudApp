const pool = require('../config/dbconfig');

exports.getAllStudents = (req, res, next) => {
    pool.query(`SELECT * FROM etudiants`, (error, result) => {
        if (error) next(error);
        res.render("home", { etudiants: result?.rows });
    });
};

exports.getOneStudent = (req, res, next) => {
    const id = parseInt(req.params.id);
    pool.query(`SELECT * FROM etudiants WHERE id = ?`, [id], (error, result) => {
        if (error) next(error);
        res.render('editStudent', { student: result?.rows[0] });
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

exports.updateStudent = (req, res, next) => {
    const id = parseInt(req.params.id);
    const { nom, genre, adresse } = req.body;
    pool.query(`UPDATE etudiants SET nom=?, genre=?, adresse=? WHERE id=?`,
        [nom, genre, adresse, id], (error, result) => {
            if (error) next(error);
            if (result) res.redirect('/');
        });
};

exports.deleteStudent = (req, res, next) => {
    const id = parseInt(req.params.id);
    pool.query(`DELETE FROM etudiants WHERE id=?`, [id], (error, result) => {
        if (error) next(error);
        if (result) res.redirect('/');
    });
};