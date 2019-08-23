Node.js, Express & MySQL
========

**Creating database and table**

```
create database test;

use test;

CREATE TABLE users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE csvdata (
id int(11) NOT NULL auto_increment,
filename varchar(100) NOT NULL,
PRIMARY KEY (id)
);


```

Installing project

- npm install
- node app.js
