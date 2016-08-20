-- phpMyAdmin SQL Dump
-- version 4.6.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 20, 2016 at 12:30 AM
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
-- Table structure for table `ps-metric`
--

CREATE TABLE `ps-metric` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `unit` varchar(250) NOT NULL,
  `metric-type-id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ps-metric`
--

INSERT INTO `ps-metric` (`id`, `name`, `unit`, `metric-type-id`) VALUES
(1, 'seconds', 's', 1),
(2, 'minutes', 'min', 1),
(3, 'units', '', 2),
(4, 'kilometers', 'km', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ps-metric`
--
ALTER TABLE `ps-metric`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
