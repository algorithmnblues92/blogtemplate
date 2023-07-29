CREATE DATABASE IF NOT EXISTS `blogLogin`;
USE `blogLogin`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `indexid` INT NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `accountid` varchar(40) NOT NULL,
  PRIMARY KEY (`indexid`)
);

CREATE TABLE IF NOT EXISTS `blogposts` (
  `indexid` INT NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `blogtext` varchar(255),
  `date` varchar(30),
  `creatorid` varchar(40) NOT NULL,
  `blogcommentid` varchar(40) NOT NULL,
  PRIMARY KEY (`indexid`)
);

CREATE TABLE IF NOT EXISTS `comments` (
  `indexid` INT NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `commenttext` varchar(255),
  `date` varchar(30),
  `creatorid` varchar(40) NOT NULL,
  `blogcommentid` varchar(40) NOT NULL,
  PRIMARY KEY (`indexid`)
);


-- INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (DEFAULT, 'test', 'test', 'test@test.com');