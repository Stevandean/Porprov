-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2023 at 05:09 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ipsi_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `hukum_tgr`
--

CREATE TABLE `hukum_tgr` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_peserta` char(36) NOT NULL,
  `hukum1` double DEFAULT NULL,
  `hukum2` double DEFAULT NULL,
  `hukum3` double DEFAULT NULL,
  `hukum4` double DEFAULT NULL,
  `hukum5` double DEFAULT NULL,
  `hukum6` double DEFAULT NULL,
  `total` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hukum_tgr`
--

INSERT INTO `hukum_tgr` (`id`, `id_jadwal`, `id_peserta`, `hukum1`, `hukum2`, `hukum3`, `hukum4`, `hukum5`, `hukum6`, `total`, `createdAt`, `updatedAt`) VALUES
('28c2804a-dbfe-469a-8b97-c7d771bac705', '22fc2a72-a804-4b46-8f81-203443e52ef2', '9013ec1e-fcc7-4302-a5d3-eab037b7f34a', 0, 0, 0, 0, 0, 0, 0, '2023-01-22 04:54:39', '2023-01-22 07:13:34'),
('47493150-294c-405f-a24d-78a0c3866aa8', 'ebc28b78-c194-4c1f-98eb-bce12302983b', '9598365a-889a-40e9-af45-6e744e09a8d0', 0, 0, 0, 0, 0, 0, 0, '2023-01-21 21:12:53', '2023-01-22 07:29:06'),
('64712bd1-2618-4c25-b7e6-866b64f33b89', '7f85b2c2-bdb6-4c4c-8719-177e3f252f48', 'b3d49fc6-7c0e-4989-9255-879dcdee7dfe', 0, 0, 0, 0, 0, 0, 0, '2023-01-22 04:32:38', '2023-01-23 01:35:48'),
('abab79c1-b0cd-47fd-9df0-e79a6749c24c', 'cabc0308-8619-4bba-8898-aede67ded007', '70f16c1d-06d4-4849-874b-d51d918dbfa0', 0, 0, 0, 0, 0, 0, 0, '2023-01-21 03:42:16', '2023-01-21 03:42:16'),
('b4cf00b8-2004-4861-8122-093fdc5e1e64', 'cabc0308-8619-4bba-8898-aede67ded007', 'b0dcfa67-3e63-4b9f-93bf-73260a45940b', 0, 0, 0, 0, 0, 0, 0, '2023-01-22 08:56:17', '2023-01-22 08:56:17'),
('b90a68dc-e465-4b87-a97c-11cfccb52b4f', 'ebc28b78-c194-4c1f-98eb-bce12302983b', '456c68cd-38e8-46f0-973c-b649e5f05b96', 0, 0, 0, 0, 0, 0, 0, '2023-01-21 03:42:25', '2023-01-21 22:51:51');

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_tgr`
--

CREATE TABLE `jadwal_tgr` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `partai` int(11) NOT NULL,
  `id_biru` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_merah` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `jk` enum('PUTRA','PUTRI') DEFAULT NULL,
  `kelas` varchar(255) DEFAULT NULL,
  `babak` varchar(255) NOT NULL,
  `selesai` tinyint(1) DEFAULT NULL,
  `aktif` tinyint(1) DEFAULT NULL,
  `id_pemenang` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_skor_merah` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_skor_biru` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `juri`
--

CREATE TABLE `juri` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `no` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `juri`
--

INSERT INTO `juri` (`id`, `no`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
('14ebde37-f4c7-485d-bba8-663e0953f6ca', 9, 'juri9', 'c97f8a0f051962403e24c9ae46337ef3', '2023-01-14 08:41:10', '2023-01-14 08:41:10'),
('267e4c27-7f95-4e30-988d-136053097177', 3, 'juri3', 'fe2db04b38c700a8af8f401177b0ebbb', '2023-01-14 08:40:24', '2023-01-14 08:40:24'),
('5869ba11-8de0-44f2-9a1a-728dcf6baf96', 4, 'juri4', 'ca5e3e3cbf8ed4f750dbe177269fcf91', '2023-01-14 08:40:32', '2023-01-14 08:40:32'),
('68ec5cc6-5452-452f-9163-8a6ddc14afd0', 6, 'juri6', '9f91e4c6a7d0499ddf65ea505624750f', '2023-01-14 08:40:47', '2023-01-14 08:40:47'),
('8133ada3-bcf7-4231-9687-be44045f422c', 7, 'juri7', '6cc7cf78dcdb41d73433ef9a08ada5ff', '2023-01-14 08:40:53', '2023-01-14 08:40:53'),
('b3796607-f868-46c7-ae43-a3440cb4ad61', 5, 'juri5', '39a2836699793207add548712320e126', '2023-01-14 08:40:40', '2023-01-14 08:40:40'),
('ba3b0693-22fd-4df5-beec-7c8bd4d41662', 1, 'juri1', '8ec59cb5a587a2016263427d17b94790', '2023-01-14 08:40:07', '2023-01-14 08:40:07'),
('c44b3c08-61b7-4b90-9a78-6549079a49f1', 2, 'juri2', 'f807fe8fa76f83bb7c1770229a0475e9', '2023-01-14 08:40:15', '2023-01-14 08:40:15'),
('ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', 10, 'juri10', '414f19a8d242351bad1cc8ca21e315ef', '2023-01-14 08:41:23', '2023-01-14 08:41:23'),
('ea88dd97-68f0-4779-9a87-93c8353070b8', 8, 'juri8', 'fdbf46df286d463885032c8233cc296f', '2023-01-14 08:41:01', '2023-01-14 08:41:01');

-- --------------------------------------------------------

--
-- Table structure for table `nama_juri`
--

CREATE TABLE `nama_juri` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nama_juri`
--

INSERT INTO `nama_juri` (`id`, `nama`, `createdAt`, `updatedAt`) VALUES
('690334b8-ad65-438c-89ee-74fd383658f8', 'ngunardi', '2023-01-22 10:47:04', '2023-01-22 10:47:04'),
('71e0ada6-d829-4e0e-ab7e-155d93a7d7a4', 'joko', '2023-01-20 02:09:47', '2023-01-20 02:09:47');

-- --------------------------------------------------------

--
-- Table structure for table `nilai_ganda`
--

CREATE TABLE `nilai_ganda` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_peserta` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_juri` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `nama_juri` varchar(255) DEFAULT NULL,
  `technique` double DEFAULT NULL,
  `firmness` double DEFAULT NULL,
  `soulfulness` double DEFAULT NULL,
  `total` double NOT NULL,
  `total_skor` double NOT NULL,
  `dis` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `nilai_regu`
--

CREATE TABLE `nilai_regu` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_peserta` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_juri` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `nama_juri` varchar(255) DEFAULT NULL,
  `jurus1` double DEFAULT NULL,
  `jurus2` double DEFAULT NULL,
  `jurus3` double DEFAULT NULL,
  `jurus4` double DEFAULT NULL,
  `jurus5` double DEFAULT NULL,
  `jurus6` double DEFAULT NULL,
  `jurus7` double DEFAULT NULL,
  `jurus8` double DEFAULT NULL,
  `jurus9` double DEFAULT NULL,
  `jurus10` double DEFAULT NULL,
  `jurus11` double DEFAULT NULL,
  `jurus12` double DEFAULT NULL,
  `skor_a` double DEFAULT NULL,
  `skor_b` double NOT NULL,
  `total_skor` double NOT NULL,
  `dis` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `nilai_tunggal`
--

CREATE TABLE `nilai_tunggal` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_peserta` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_juri` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `nama_juri` varchar(255) DEFAULT NULL,
  `jurus1` double DEFAULT NULL,
  `jurus2` double DEFAULT NULL,
  `jurus3` double DEFAULT NULL,
  `jurus4` double DEFAULT NULL,
  `jurus5` double DEFAULT NULL,
  `jurus6` double DEFAULT NULL,
  `jurus7` double DEFAULT NULL,
  `jurus8` double DEFAULT NULL,
  `jurus9` double DEFAULT NULL,
  `jurus10` double DEFAULT NULL,
  `jurus11` double DEFAULT NULL,
  `jurus12` double DEFAULT NULL,
  `jurus13` double DEFAULT NULL,
  `jurus14` double DEFAULT NULL,
  `skor_a` double DEFAULT NULL,
  `skor_b` double DEFAULT NULL,
  `total_skor` double DEFAULT NULL,
  `dis` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `peserta_seni`
--

CREATE TABLE `peserta_seni` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `gelanggang` varchar(255) DEFAULT NULL,
  `pool` varchar(255) DEFAULT NULL,
  `jk` enum('PUTRA','PUTRI') NOT NULL,
  `kelas` varchar(255) DEFAULT NULL,
  `nama1` varchar(255) DEFAULT NULL,
  `nama2` varchar(255) DEFAULT NULL,
  `nama3` varchar(255) DEFAULT NULL,
  `kontingen` varchar(255) DEFAULT NULL,
  `gugur` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221230134524-create-admin.js'),
('20221230140633-create-juri.js'),
('20221230140734-create-nama-juri.js'),
('20221230150821-create-peserta-seni.js'),
('20221230150929-create-jadwal-tgr.js'),
('20230102060831-create-nilai-tunggal.js'),
('20230102061132-create-nilai-ganda.js'),
('20230102061205-create-nilai-regu.js'),
('20230105143344-create-hukum_tgr.js'),
('20230114082626-create-skor.js');

-- --------------------------------------------------------

--
-- Table structure for table `skor`
--

CREATE TABLE `skor` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_peserta` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `waktu` varchar(255) NOT NULL,
  `median` double NOT NULL,
  `skor_akhir` double DEFAULT NULL,
  `deviasi` double DEFAULT NULL,
  `selesai` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','dewan') DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
('5114de53-fca5-441b-a798-8698257824a0', 'admin', '0192023a7bbd73250516f069df18b500', 'admin', '2023-01-14 08:31:21', '2023-01-14 08:31:21'),
('d81b7041-9163-4d81-87ed-a8fca49e9561', 'dewan', '38d9e411bf7e1cf329047723a353e2e1', 'dewan', '2023-01-15 23:27:30', '2023-01-15 23:27:30'),
('eea60a59-40fa-4727-bbd9-721fc3c0c773', 'dewan', '38d9e411bf7e1cf329047723a353e2e1', 'dewan', '2023-01-22 10:49:15', '2023-01-22 10:49:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hukum_tgr`
--
ALTER TABLE `hukum_tgr`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_peserta` (`id_peserta`),
  ADD KEY `id_jadwal` (`id_jadwal`);

--
-- Indexes for table `jadwal_tgr`
--
ALTER TABLE `jadwal_tgr`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_biru` (`id_biru`),
  ADD KEY `id_merah` (`id_merah`),
  ADD KEY `id_pemenang` (`id_pemenang`),
  ADD KEY `id_skor_merah` (`id_skor_merah`,`id_skor_biru`),
  ADD KEY `id_skor_biru` (`id_skor_biru`);

--
-- Indexes for table `juri`
--
ALTER TABLE `juri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nama_juri`
--
ALTER TABLE `nama_juri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nilai_ganda`
--
ALTER TABLE `nilai_ganda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jadwal` (`id_jadwal`),
  ADD KEY `id_peserta` (`id_peserta`),
  ADD KEY `id_juri` (`id_juri`);

--
-- Indexes for table `nilai_regu`
--
ALTER TABLE `nilai_regu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jadwal` (`id_jadwal`),
  ADD KEY `id_peserta` (`id_peserta`),
  ADD KEY `id_juri` (`id_juri`);

--
-- Indexes for table `nilai_tunggal`
--
ALTER TABLE `nilai_tunggal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jadwal` (`id_jadwal`),
  ADD KEY `id_peserta` (`id_peserta`),
  ADD KEY `id_juri` (`id_juri`);

--
-- Indexes for table `peserta_seni`
--
ALTER TABLE `peserta_seni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `skor`
--
ALTER TABLE `skor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jadwal` (`id_jadwal`,`id_peserta`),
  ADD KEY `id_peserta` (`id_peserta`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hukum_tgr`
--
ALTER TABLE `hukum_tgr`
  ADD CONSTRAINT `hukum_tgr_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tgr` (`id`);

--
-- Constraints for table `jadwal_tgr`
--
ALTER TABLE `jadwal_tgr`
  ADD CONSTRAINT `jadwal_tgr_ibfk_1` FOREIGN KEY (`id_biru`) REFERENCES `peserta_seni` (`id`),
  ADD CONSTRAINT `jadwal_tgr_ibfk_2` FOREIGN KEY (`id_merah`) REFERENCES `peserta_seni` (`id`),
  ADD CONSTRAINT `jadwal_tgr_ibfk_3` FOREIGN KEY (`id_pemenang`) REFERENCES `peserta_seni` (`id`),
  ADD CONSTRAINT `jadwal_tgr_ibfk_4` FOREIGN KEY (`id_skor_merah`) REFERENCES `skor` (`id`),
  ADD CONSTRAINT `jadwal_tgr_ibfk_5` FOREIGN KEY (`id_skor_biru`) REFERENCES `skor` (`id`);

--
-- Constraints for table `nilai_ganda`
--
ALTER TABLE `nilai_ganda`
  ADD CONSTRAINT `nilai_ganda_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tgr` (`id`),
  ADD CONSTRAINT `nilai_ganda_ibfk_2` FOREIGN KEY (`id_peserta`) REFERENCES `peserta_seni` (`id`),
  ADD CONSTRAINT `nilai_ganda_ibfk_3` FOREIGN KEY (`id_juri`) REFERENCES `juri` (`id`);

--
-- Constraints for table `nilai_regu`
--
ALTER TABLE `nilai_regu`
  ADD CONSTRAINT `nilai_regu_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tgr` (`id`),
  ADD CONSTRAINT `nilai_regu_ibfk_2` FOREIGN KEY (`id_peserta`) REFERENCES `peserta_seni` (`id`),
  ADD CONSTRAINT `nilai_regu_ibfk_3` FOREIGN KEY (`id_juri`) REFERENCES `juri` (`id`);

--
-- Constraints for table `nilai_tunggal`
--
ALTER TABLE `nilai_tunggal`
  ADD CONSTRAINT `nilai_tunggal_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tgr` (`id`),
  ADD CONSTRAINT `nilai_tunggal_ibfk_2` FOREIGN KEY (`id_peserta`) REFERENCES `peserta_seni` (`id`),
  ADD CONSTRAINT `nilai_tunggal_ibfk_3` FOREIGN KEY (`id_juri`) REFERENCES `juri` (`id`);

--
-- Constraints for table `skor`
--
ALTER TABLE `skor`
  ADD CONSTRAINT `skor_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tgr` (`id`),
  ADD CONSTRAINT `skor_ibfk_2` FOREIGN KEY (`id_peserta`) REFERENCES `peserta_seni` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
