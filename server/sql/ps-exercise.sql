-- phpMyAdmin SQL Dump
-- version 4.6.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 20, 2016 at 12:17 AM
-- Server version: 10.0.25-MariaDB
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
-- Table structure for table `ps-exercise`
--

CREATE TABLE `ps-exercise` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `metric_id` int(11) NOT NULL,
  `suggested_load` int(11) NOT NULL,
  `is_exercise` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ps-exercise`
--
INSERT INTO `ps-exercise` (`id`, `name`, `metric_id`, `suggested_load`, `is_exercise`) VALUES
(1, 'Warm up', 2, 2, 1),
(2, 'Squats', 3, 20, 1),
(3, 'Push ups', 3, 10, 1),
(4, 'Walking lunges', 3, 20, 1),
(5, 'Dumbell rows', 3, 10, 1),
(6, 'Plank', 1, 15, 1),
(7, 'Jumping jacks', 3, 30, 1),
(8, 'Rest', 2, 1, 1),
(9, 'Stretch', 2, 3, 1),
(10, 'Time running', 2, 30, 1),
(11, 'Distance running', 4, 2, 1),
(12, 'Default set', 3, 1, 0),
(13, 'Running set', 3, 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ps-exercise`
--
ALTER TABLE `ps-exercise`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
