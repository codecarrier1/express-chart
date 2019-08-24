Node.js, Express & MySQL
========

**Install MySQL on Ubuntu**

- sudo apt-get update
- sudo apt-get install mysql-server
- mysql_secure_installation
  This utility prompts you to define the mysql root password and other security-related options, including removing remote     access to the root user and setting the root password.
- sudo ufw allow mysql
  Allow Remote Access
- systemctl start mysql
  Start Mysql Service
  
**Set the root password**

If you logged in by entering a blank password, or if you want to change the root password that you set, you can create or change the password.

For versions earlier than MySQL 5.7, enter the following command in the mysql shell, replace password with your new password:

- UPDATE mysql.user SET Password = PASSWORD('password') WHERE User = 'root';

For version MySQL 5.7 and later, enter the following command in the mysql shell, replacing password with your new password:

- UPDATE mysql.user SET authentication_string = PASSWORD('password') WHERE User = 'root';

To make the change take effect, reload the stored user information with the following command:

- FLUSH PRIVILEGES;



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
