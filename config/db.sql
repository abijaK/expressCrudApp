DROP DATABASE IF EXISTS etudiants_crud;

CREATE DATABASE etudiants_crud;

\c etudiants_crud

CREATE TABLE etudiants (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(30) NOT NULL,
    genre VARCHAR(7) NOT NULL,
    adresse VARCHAR(90)
);

INSERT INTO etudiants (nom, genre, adresse) VALUES
    ('Gloire', 'M', 'Entree president'),
    ('Karis', 'M', 'Kyeshero'),
    ('Urbain', 'M', 'Himbi');