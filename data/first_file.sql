
CREATE TABLE cats
(
  id int auto_increment primary key ,
            name varchar(50),
            age int
);

INSERT INTO cats(name,age) VALUES('billi',10),('choti billi',20);
SELECT * from cats;