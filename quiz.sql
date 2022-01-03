-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 26, 2021 at 08:01 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `anwsers`
--

DROP TABLE IF EXISTS `anwsers`;
CREATE TABLE IF NOT EXISTS `anwsers` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `anwser` varchar(300) NOT NULL,
  `question_id` int(100) NOT NULL,
  `correct_answer` int(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `anwsers`
--

INSERT INTO `anwsers` (`id`, `anwser`, `question_id`, `correct_answer`) VALUES
(1, 'ddd', 1, 2),
(2, 'ddd', 1, 2),
(3, 'ddd', 1, 2),
(4, 'ddd', 1, 2),
(5, 'ddd', 1, 2),
(6, 'ddd', 1, 2),
(7, 'ddd', 1, 2),
(8, 'ddd', 1, 2),
(9, 'ddd', 1, 2),
(10, 'mmm', 3, 4),
(11, 'mmm', 3, 4),
(12, 'mmm', 3, 4),
(13, 'mmm', 3, 4),
(14, 'mmm', 3, 4),
(15, 'ddds', 1, 2),
(16, 'ddds', 1, 2),
(17, 'ddds', 1, 2),
(18, 'ddds', 1, 2),
(19, 'ddds', 1, 2),
(20, 'ddds', 1, 2),
(21, 'ddds', 1, 2),
(22, 'ddds', 1, 2),
(23, 'ddds', 1, 2),
(24, 'ddds', 1, 2),
(25, 'ddds', 1, 2),
(26, 'ddds', 1, 2),
(27, 'ddds', 1, 2),
(28, 'ddds', 1, 2),
(29, 'ddwds', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
CREATE TABLE IF NOT EXISTS `auth` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'walid', 'admin@gmail.com', 'aa', 'admin'),
(2, 'zzz', 'eded', 'zefze', ''),
(3, 'azea', 'wwwww@chillleo.com', '$2b$10$/0NzlrNOWUrAKgZutuQveeNSYwMSaCAW6nQJN.Fx2lrdWv9JwOQyO', ''),
(4, 'ali', 'alid@gmail.com', '$2b$10$9ONAVD6mxYXBWS9iRmuaWekdYr0xkWhQ0PJgJuSQReycQN1NwHq0u', ''),
(5, 'ddsd', 'dahinrafft@chillleo.com', '[object Promise]', ''),
(6, 'zzz', 'portawalid@gmail.com', '[object Promise]', ''),
(7, 'mark1', 'azeaze@AZEAZE.COM', '[object Promise]', ''),
(8, 'aaaa', 'aazaaeaz@gmail.com', 'aaaazazd', ''),
(9, 'adaz', 'azd@adaz.faz', '$2b$10$TTB0xiYjmfOIqI9T57Ki1OxY8t/RX5cf1RNnWCqBtJGGEHjxGn4x6', ''),
(10, 'adazzzz', 'azeaze@AZEAZE.COM', '$2b$10$FS763XEmcoyOg3KJf/M/N.EbDvs.0sDoRuzP10MnEz6OCjs79FLpe', ''),
(11, 'aeda', 'azeaze@AZEAZE.COM', '$2b$10$JiR1KLQkhL8Yegwck/lrTOMGWsIkczSRQzktJMsKROL1bV7tBA646', ''),
(12, 'jiokima', 'portawalid@gmail.com', '$2b$10$pJGRhZq8BLAFxpVCHPFyj.ARXe/Rx9n/aawG0tYYpLqJNB6AEWwm.', ''),
(13, 'jiokima', 'dahinrafft@chillleo.com', 'azdazdddd', ''),
(14, 'zzz', 'zzz@gmail.com', 'mmmm', ''),
(15, 'aa', 'aa@gmail.com', 'zaeaqq', ''),
(16, 'mm', 'portaezlid@gmail.com', 'ze', ''),
(17, 'test', 'admieeen@gmail.com', 'eee', ''),
(18, 'jiokima', 'aazzad@gmail.com', 'ss', ''),
(19, 'zz', 'qq@gmail.com', 'll', ''),
(20, 'aaa', 'm@gmail.com', 'mp', ''),
(21, 'zzz', 'portawaliddd@gmail.com', 'dd', ''),
(22, 'a', 'aazzad@gmail.com', 'ssss', ''),
(23, 'd', 'd@gmail.com', 'ddde', ''),
(24, 'd', 'd@gmail.com', 'ddde', ''),
(25, 'q', 'portawalid@gmail.com', 'qq', ''),
(26, 'q', 'portawalid@gmail.com', 'qq', ''),
(27, 'jiokima', 'ssssesaz@gmail.com', 'sedd', ''),
(28, 'jiokima', 'ssssesaz@gmail.com', 'sedd', ''),
(29, 'kk', 'portawalid@gmail.com', 'mm', ''),
(30, 'q', 'aazzad@gmail.com', 'sssss', ''),
(31, 'dd', 'admin@gmail.com', 'e', ''),
(32, 'z', 'admin@gmail.com', 'zz', ''),
(33, 'z', 'admin@gmail.com', 'zz', ''),
(34, 'zqq', 'dahinrafft@chillleo.com', 'zzz', ''),
(35, 'eee', 'zd@gmail.com', 'ff', ''),
(36, 'eee', 'zd@gmail.com', 'ff', ''),
(37, 'dd', 'dqsdsq@adz.dsq', 'azazd', ''),
(38, 'zzzs', 'aazzad@gmail.com', 'azaz', ''),
(39, 'jiokima', 'user@gmail.com', 'user', 'user'),
(40, 'tttest', 'aazzad@gmail.comz', 'test', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `childscategory`
--

DROP TABLE IF EXISTS `childscategory`;
CREATE TABLE IF NOT EXISTS `childscategory` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `child_category` varchar(200) NOT NULL,
  `parent_category_id` int(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_category_id` (`parent_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `childscategory`
--

INSERT INTO `childscategory` (`id`, `child_category`, `parent_category_id`) VALUES
(6, 'qq', 1),
(7, 'aaza', 1),
(8, 'aeaz', 12),
(9, 'eez', 14),
(10, 'ee', 12);

-- --------------------------------------------------------

--
-- Table structure for table `parentscategory`
--

DROP TABLE IF EXISTS `parentscategory`;
CREATE TABLE IF NOT EXISTS `parentscategory` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `parent_category` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parentscategory`
--

INSERT INTO `parentscategory` (`id`, `parent_category`) VALUES
(1, 'math'),
(11, 'SVT'),
(12, 'ENGLISH'),
(13, 'ARABIC'),
(14, 'FR'),
(15, 'undefined'),
(16, 'undefined'),
(17, 'sss');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(300) NOT NULL,
  `correct_answer` int(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `anwsers_id` (`correct_answer`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `correct_answer`) VALUES
(8, 'ddddeeee', 3),
(9, 'ddddeeee', 3),
(10, 'ddddffffgg', 3),
(11, 'jhhh', 3),
(12, 'jhhh', 3),
(13, 'jhhh', 3),
(14, 'jhhh', 3),
(15, 'jhhhs', 3),
(16, 'jhhhs', 3),
(17, 'jhhhs', 3),
(18, 'jhhhs', 3),
(19, 'jhhhfss', 3),
(20, 'jhhhfss', 3),
(21, 'jhhhfss', 3),
(22, 'fffff', 3),
(23, 'fffff', 3),
(24, 'fffff', 3),
(25, 'fffff', 3),
(26, 'fffff', 3),
(27, 'fffff', 3),
(28, 'fffff', 3),
(29, 'fffff', 3),
(30, 'fffff', 3),
(31, 'fffff', 3),
(32, 'fffff', 3),
(33, 'fffff', 3),
(34, 'fffff', 3),
(35, 'fffff', 3),
(36, 'fffwff', 3);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `childscategory`
--
ALTER TABLE `childscategory`
  ADD CONSTRAINT `childscategory_ibfk_1` FOREIGN KEY (`parent_category_id`) REFERENCES `parentscategory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
