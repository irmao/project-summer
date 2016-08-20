-- phpMyAdmin SQL Dump
-- version 4.6.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 20, 2016 at 01:29 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectsummer-database`
--

-- --------------------------------------------------------

--
-- Table structure for table `ps-exercise-group`
--

CREATE TABLE `ps-exercise-group` (
  `group_id` int(11) NOT NULL,
  `exercise_id` int(11) NOT NULL,
  `parent_exercise_id` int(11) NOT NULL,
  `order_in_group` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ps-exercise-group`
--

INSERT INTO `ps-exercise-group` (`group_id`, `exercise_id`, `parent_exercise_id`, `order_in_group`) VALUES
(1, 1, 12, 1),
(1, 2, 12, 2),
(1, 3, 12, 3),
(1, 4, 12, 4),
(1, 5, 12, 5),
(1, 6, 12, 6),
(1, 7, 12, 7),
(1, 8, 12, 8),
(1, 9, 12, 9),
(2, 11, 13, 1),
(2, 10, 13, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
