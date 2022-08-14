CREATE DATABASE presupuesto;
USE presupuesto;
CREATE TABLE `credential`
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_text VARCHAR(100) NOT NULL
);
CREATE TABLE person
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    credential_id INT NOT NULL UNIQUE,
    CONSTRAINT fk_person_credential_id FOREIGN KEY(credential_id) REFERENCES credential(id)
);
CREATE TABLE type_movement
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(7) NOT NULL UNIQUE
);

CREATE TABLE categories_personal
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    person_id INT NOT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_categories_personal_person_id FOREIGN KEY(person_id) REFERENCES person(id)
);
CREATE TABLE movement
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL,
    balance DECIMAL(12,2) NOT NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    type_movement_id INT NOT NULL,
    category_personal_id INT NULL DEFAULT NULL,
    person_id INT NOT NULL,
    CONSTRAINT fk_movement_type_movement_id FOREIGN KEY(type_movement_id) REFERENCES type_movement(id),
    CONSTRAINT fk_movement_category_personal_id FOREIGN KEY(category_personal_id) REFERENCES categories_personal(id),
    CONSTRAINT fk_movement_person_id FOREIGN KEY(person_id) REFERENCES person(id)
);
INSERT INTO type_movement(name) VALUES('Ingreso'),('Egreso');
CREATE PROCEDURE create_credential(IN new_email VARCHAR(100), IN password VARCHAR(100))
    INSERT INTO credential(email,password_text) VALUES(new_email,MD5(password));
CREATE PROCEDURE validate_credential(IN email_user VARCHAR(100), IN password_user VARCHAR(100))
    SELECT id FROM credential WHERE email = email_user AND password_text = MD5(password_user);        
CREATE PROCEDURE get_user(IN user_credential_id INT) 
    SELECT id, name,birthday,created_at FROM person WHERE credential_id = user_credential_id;

    -- SELECT * FROM type_movement AS tm ORDER BY tm.id ASC

    -- CREATE PROCEDURE create_credential(IN new_email VARCHAR(100), IN password VARCHAR(100))
    --     INSERT INTO credential(email,password_text) VALUES(new_email,MD5(password));
    
    -- CALL create_credential('lupequi12@gmail.com','password');

    -- ***************************************Validate Credential***********************************

    -- CREATE PROCEDURE validate_credential(IN email_user VARCHAR(100), IN password_user VARCHAR(100))
    --     SELECT id FROM credential WHERE email = email_user AND password_text = MD5(password_user);
    
    -- CALL validate_credential('lupequi12@gmail.com','password');
    -- CREATE PROCEDURE get_user(IN user_credential_id INT) 
    --     SELECT id, name,birthday,created_at FROM person WHERE credential_id = user_credential_id;
    
CREATE PROCEDURE get_movements_by_user_id(IN user_id INT)
    SELECT m.id, m.description, m.balance, m.created_at, tm.id AS 'tmId', tm.name AS 'tmName', cp.id AS 'categoryId', cp.name AS 'categoryName'
    FROM movement AS m
    INNER JOIN type_movement AS tm 
    ON m.type_movement_id = tm.id 
    INNER JOIN categories_personal AS cp 
    ON m.category_personal_id = cp.id
    WHERE m.person_id = user_id;

CREATE PROCEDURE create_movement
(
    IN new_description VARCHAR(255), 
    IN new_balance DECIMAL(12,2),
    IN new_type_movement_id INT,
    IN new_category_personal_id INT,
    IN new_person_id INT
)
    INSERT INTO movement(description,balance,type_movement_id,category_personal_id,person_id) 
    VALUES(new_description,new_balance,new_type_movement_id,new_category_personal_id,new_person_id);