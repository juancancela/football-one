DROP TABLE IF EXISTS CLIENTS;
DROP TABLE IF EXISTS PRODUCTS;

CREATE TABLE CLIENTS (
	name TEXT(256),
	id NUMBER,
	phone TEXT(25),
	fixed BOOLEAN,
	instagram TEXT(256),
	facebook TEXT(256),
	mail TEXT(256),
	birthday TEXT(40),
	PRIMARY KEY (id),
	CONSTRAINT unique_values UNIQUE (name, id, phone, instagram, facebook)
);

CREATE TABLE PRODUCTS (
    id NUMBER,
    name TEXT(256),
    price REAL,
    cost REAL,
    profit REAL,
    stock INTEGER,
    PRIMARY KEY (id),
	CONSTRAINT unique_values UNIQUE (name)
);

INSERT 
INTO CLIENTS(id, phone, name, fixed, instagram, facebook, mail, birthday) 
VALUES (1, '1556065555', 'Juan Cancela', 'true', 'instagram', 'facebook', 'cancela.juancarlos@gmail.com', '10-05-1984');

INSERT 
INTO CLIENTS(id, phone, name, fixed, instagram, facebook, mail, birthday) 
VALUES (2, '1556065532', 'Pepe Cancela', 'false', 'instagram1', 'facebook1', 'cancela.juancarlos1@gmail.com', '11-05-1984');