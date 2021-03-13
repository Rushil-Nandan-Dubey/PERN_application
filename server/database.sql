CREATE DATABASE perntodo;

CREATE TABLE material(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    volume INT,
    delivery_date VARCHAR(255),
    color VARCHAR(255),
    cost NUMERIC(8,2)
);