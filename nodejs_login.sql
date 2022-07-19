-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 21, 2021 at 03:56 AM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'miler', 'patiphan@gmail.com', '$2b$12$KtcQiLTLTZX2FxDzFy7dV.WoeBImvxx5mVrZhDu1wdJ5ZotXIRVaO'),
(2, 'June', 'june@gmail.com', '$2b$12$C4n.gx8rTaxjdWVw2V1f/.k.LADOMztWBdSCwBqjH7Is46SRaCQxe'),
(3, 'kong', 'kong@gmail.com', '$2b$12$1cYMaWWbCcq3sukzHAsVSOENtA1BVFePuO0lVfv33sBNGWr9RWRrS'),
(4, '1111', 'pand@gmail.com', '$2b$12$70SUpWaMkH65r5f/YV7O8.akGxl6UiZZKUcU2rA.mhevh2mScqYiC'),
(5, 'pp', 'pp@gmail.com', '$2b$12$NGhcNRt4NYQDQj7hYZHp8O7Mpmp7WN7KJuIkX3K2PXenvjyUGzmXO'),
(6, 'aa', 'aa@gmail.com', '$2b$12$R1tm2Tx6eSBQLKriMx7I.uIAzko3TnAe/BBSnguxNXqeMjefKSGrq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
