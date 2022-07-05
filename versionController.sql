-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 03, 2020 at 04:38 PM
-- Server version: 5.7.29-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `versionController`
--

-- --------------------------------------------------------

--
-- Table structure for table `androidConfig`
--

CREATE TABLE `androidConfig` (
  `id` int(50) NOT NULL,
  `appVersion` varchar(50) DEFAULT NULL,
  `reactNativeVersion` varchar(50) DEFAULT NULL,
  `shopReactVersion` varchar(50) DEFAULT NULL,
  `parentReactVersion` varchar(50) DEFAULT NULL,
  `shopBundlePath` varchar(100) DEFAULT NULL,
  `parentBundlePath` varchar(100) DEFAULT NULL,
  `versionCode` varchar(50) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `createdOn` datetime DEFAULT NULL,
  `modifiedOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `androidConfig`
--

INSERT INTO `androidConfig` (`id`, `appVersion`, `reactNativeVersion`, `shopReactVersion`, `parentReactVersion`, `shopBundlePath`, `parentBundlePath`, `versionCode`, `description`, `createdOn`, `modifiedOn`) VALUES
(1, '11.01', '16.99', '4.3.4', '4.3.4', 'http://www.google.com', 'http://www.google.com', 'V1', 'Test version', '2020-03-03 00:00:00', '2020-03-03 00:00:00'),
(2, '11.02', '17', '4.3.6', '4.3.6', 'http:www.google.com', 'http://www.google.com', 'V2', 'Test description2', '2020-03-03 00:00:00', '2020-03-03 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `configController`
--

CREATE TABLE `configController` (
  `id` int(11) NOT NULL,
  `createdOn` datetime DEFAULT NULL,
  `modifiedOn` datetime DEFAULT NULL,
  `appVersion` varchar(100) DEFAULT NULL,
  `reactVersion` varchar(100) DEFAULT NULL,
  `versionCode` varchar(100) DEFAULT NULL,
  `reactBundlePath` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `configController`
--

INSERT INTO `configController` (`id`, `createdOn`, `modifiedOn`, `appVersion`, `reactVersion`, `versionCode`, `reactBundlePath`) VALUES
(1, '2020-02-24 16:53:20', '2020-02-24 16:53:20', NULL, '564.0000', NULL, 'url://home/');

-- --------------------------------------------------------

--
-- Table structure for table `iosConfig`
--

CREATE TABLE `iosConfig` (
  `id` int(50) NOT NULL,
  `appVersion` varchar(50) DEFAULT NULL,
  `reactNativeVersion` varchar(50) DEFAULT NULL,
  `shopReactVersion` varchar(50) DEFAULT NULL,
  `parentReactVersion` varchar(50) DEFAULT NULL,
  `shopBundlePath` varchar(100) DEFAULT NULL,
  `parentBundlePath` varchar(100) DEFAULT NULL,
  `versionCode` varchar(50) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `createdOn` datetime DEFAULT NULL,
  `modifiedOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `iosConfig`
--

INSERT INTO `iosConfig` (`id`, `appVersion`, `reactNativeVersion`, `shopReactVersion`, `parentReactVersion`, `shopBundlePath`, `parentBundlePath`, `versionCode`, `description`, `createdOn`, `modifiedOn`) VALUES
(1, '12', '33', '15', '15', 'uri://home/etc/usr', 'uri://home/etc/usr', 'V1', 'Test ios desc', '2020-03-03 00:00:00', '2020-03-03 00:00:00'),
(2, '13', '34', '16', '16', 'uri://home/rohan/v2', 'uri://home/rohan/v2', 'V2', 'Test desc 2', '2020-03-03 00:00:00', '2020-03-03 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roleController`
--

CREATE TABLE `roleController` (
  `id` int(11) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  `createdOn` datetime DEFAULT NULL,
  `modifiedOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roleController`
--

INSERT INTO `roleController` (`id`, `role`, `createdOn`, `modifiedOn`) VALUES
(1, 'admin', '2020-02-24 17:18:46', '2020-02-24 17:18:46'),
(2, 'data', '2020-02-25 00:00:00', '2020-02-25 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `userController`
--

CREATE TABLE `userController` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `empId` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `emailId` varchar(45) DEFAULT NULL,
  `createdOn` datetime DEFAULT NULL,
  `modifiedOn` datetime DEFAULT NULL,
  `roleId` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userController`
--

INSERT INTO `userController` (`id`, `firstName`, `lastName`, `empId`, `password`, `emailId`, `createdOn`, `modifiedOn`, `roleId`) VALUES
(1, '', '', '1233', '545432r243', 'arjun.karan@firstcry.com', '2020-02-24 18:22:00', '2020-02-25 09:58:15', 1),
(3, '', '', '114', 'afdsferff', 'arjun.ram@firstcry.com', '2020-02-25 09:59:58', '2020-02-25 09:59:58', 2),
(4, '', '', '3414', '$2a$08$WbFpC/iJb8pEOfr6uJzztuyiECPTx7//CCWibnPaGoRaoxQ1rIix6', 'karan.ram@firstcry.com', '2020-02-25 10:42:52', '2020-02-25 10:42:52', 1),
(5, '', '', '1515', '$2a$08$33v2do7.ohXtCWXSMZhG.Ol4wvNqKwWenU0DL7Qy3UqFSl/2pIfo2', 'ram@firstcry.com', '2020-02-25 14:59:02', '2020-02-25 14:59:02', 1),
(6, '', '', '9784', '$2a$08$d9O6B.adWD0Ms33KIlknn.BHiRrWFNyM36DWUEuNFjy/wkzTXUgyq', 'rocky@firstcry.com', '2020-02-25 15:04:55', '2020-02-25 15:04:55', 2),
(7, '', '', '3245', '$2a$08$/27dNsMwOgx.VxbgeDGYt.7B4bROnfRYs/6B1yQ.dffjFwsTQ9jWK', 'ronnie@firstcry.com', '2020-02-25 15:06:47', '2020-02-25 15:06:47', 2),
(8, NULL, NULL, '12345', '$2a$08$X5bPkOjRLF.HNiYPh8X/0uvTawcokAhiYRYZGjkwGi9ppTnasXx8O', 'rohan@gmail.com', '2020-02-29 19:41:08', '2020-02-29 19:41:08', 1),
(9, NULL, NULL, '1234', '$2a$08$sQ.Srdns2JIAzdcyXNYYyOjpxhvoT8LDYf3HWiDB2FohQmrMxDXqq', 'rohan@gmail.com', '2020-02-29 21:10:23', '2020-02-29 21:10:23', 1),
(10, 'Kunal', 'Gupta', '123', '$2a$08$4/9TIPh2oy8vKO7gwb1z5.adKtUvJ9adCtB2oEbzuxEfAaU3OsKEu', 'rohan@gmail.com', '2020-02-29 21:13:59', '2020-02-29 21:13:59', 1),
(11, 'Kunal', 'Gupta', '12', '12345', 'rohan@gmail.com', NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `androidConfig`
--
ALTER TABLE `androidConfig`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `configController`
--
ALTER TABLE `configController`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `iosConfig`
--
ALTER TABLE `iosConfig`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roleController`
--
ALTER TABLE `roleController`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userController`
--
ALTER TABLE `userController`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `empId_UNIQUE` (`empId`),
  ADD KEY `idx_c4` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `androidConfig`
--
ALTER TABLE `androidConfig`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `configController`
--
ALTER TABLE `configController`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `iosConfig`
--
ALTER TABLE `iosConfig`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `roleController`
--
ALTER TABLE `roleController`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `userController`
--
ALTER TABLE `userController`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `userController`
--
ALTER TABLE `userController`
  ADD CONSTRAINT `fk_userController_1` FOREIGN KEY (`roleId`) REFERENCES `roleController` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
