-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2023 at 06:11 AM
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
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `icon1` varchar(255) DEFAULT NULL,
  `icon2` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `nama`, `logo`, `icon1`, `icon2`, `createdAt`, `updatedAt`) VALUES
('075fed30-902d-4aeb-883d-cb00aa890cc5', 'KEJURPROV JATIM 2023', 'img-1676593942062.png', 'img-1676286532550.png', 'img-1676286532564.png', '2023-02-01 14:10:15', '2023-02-18 13:20:42');

-- --------------------------------------------------------

--
-- Table structure for table `gelanggang`
--

CREATE TABLE `gelanggang` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `gelanggang` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gelanggang`
--

INSERT INTO `gelanggang` (`id`, `gelanggang`, `createdAt`, `updatedAt`) VALUES
('013e3101-cc88-4025-b374-cbb3249f0337', 2, '2023-02-09 17:05:04', '2023-02-09 17:05:04'),
('4d0ebee3-6df2-4139-bb33-b88076f06b8c', 3, '2023-02-09 17:05:07', '2023-02-09 17:05:07'),
('d39e1ffd-e1a0-477d-95e8-5e310c17f5cc', 1, '2023-02-09 17:04:56', '2023-02-09 17:04:56');

-- --------------------------------------------------------

--
-- Table structure for table `hukum_tgr`
--

CREATE TABLE `hukum_tgr` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_peserta` char(36) DEFAULT NULL,
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
('00d87bfc-0760-4d22-92c8-8c816da50921', 'cc415254-e4c1-4b22-b511-8a27a5fdbe5d', '4a68566a-9424-49c9-8e3f-2f8980933e4e', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 18:43:57', '2023-02-18 18:43:57'),
('0173d440-f219-4289-a6a6-1008702bfc59', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', 0, 0, 0, -0.5, -0.5, 0, -1, '2023-02-18 14:26:58', '2023-02-18 18:04:22'),
('1b1f42aa-e3f5-482d-a51c-b2bd7178f0ec', 'dc4c41f7-cdd8-4bc4-a815-2abbe8af8fc4', '67ab2410-0b83-44c6-ae09-cacbc81d8b83', 0, 0, 0, 0, 0, 0, 0, '2023-02-16 17:02:40', '2023-02-16 17:02:40'),
('2e5ad3d3-bd5b-4321-9e4b-5305b83c87a5', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 18:54:14', '2023-02-18 18:54:14'),
('336c7cf4-ad60-456a-97be-a5eb94deca69', 'ec620c66-312e-4e21-acd4-5507416c1786', 'c10b38d3-72cb-4767-88db-b5352e40979b', 0, 0, 0, 0, 0, 0, 0, '2023-02-16 11:03:30', '2023-02-16 11:03:30'),
('5178c98b-07b9-45f9-b126-8c402d6562be', '81bb7b24-001b-4240-990e-703b823b98ef', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 08:57:37', '2023-02-18 08:57:37'),
('528ab64e-2f68-4523-bdbf-3a3616d64fe6', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', 0, 0, 0, 0, 0, 0, 0, '2023-02-16 16:38:10', '2023-02-16 16:38:10'),
('693fb63e-1bdb-4ee4-a00b-8ba8ad606b44', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 14:23:52', '2023-02-18 14:23:52'),
('70525249-7b04-4c3a-98dc-dc6af993e52a', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', 0, 0, 0, 0, 0, 0, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('7e6e035e-5221-41f2-aaa8-b25df19b43bb', 'ec620c66-312e-4e21-acd4-5507416c1786', '8a723ebc-3b3a-49f4-a5cb-a4e634371541', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 04:51:33', '2023-02-18 04:51:33'),
('922987bd-0939-4b55-b614-35b9b1a4fd5f', 'da541310-b5e2-49f6-b8c6-400d48f7182f', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', -0.5, 0, 0, 0, -0.5, 0, -1, '2023-02-16 11:11:05', '2023-02-16 15:21:04'),
('94e1857f-56a5-44c1-abb8-e19a74997eef', 'da541310-b5e2-49f6-b8c6-400d48f7182f', 'b451c395-3748-43ce-93ff-167036227088', -0.5, 0, 0, 0, 0, 0, -0.5, '2023-02-16 15:21:12', '2023-02-16 15:21:14'),
('995bdb2a-d5b4-4b98-9bc9-383c28660968', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', -0.5, 0, 0, 0, 0, 0, -0.5, '2023-02-18 14:23:29', '2023-02-18 18:01:57'),
('a1afc5b7-cc7f-4635-a89d-d6ef217e2e65', 'dc4c41f7-cdd8-4bc4-a815-2abbe8af8fc4', '6d815157-d895-4fe2-8b1b-05dff71ab888', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 02:53:16', '2023-02-18 02:53:16'),
('a9498c90-0c30-4bf1-8e40-dd20d0d6fbcd', 'cc415254-e4c1-4b22-b511-8a27a5fdbe5d', '5e906988-e979-416e-91c7-129984b622e5', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 18:58:40', '2023-02-18 18:58:40'),
('b920c323-972a-4245-9a9b-66f8015abb19', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', 0, 0, -0.5, -0.5, -0.5, 0, -1.5, '2023-02-18 17:24:15', '2023-02-18 18:04:32'),
('cc97f19c-9ca2-4869-95f0-dadd1d4860cc', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', 0, 0, 0, 0, 0, 0, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('d733577c-222c-4ddc-896a-a87d4cc95534', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 18:43:49', '2023-02-18 18:43:49'),
('d873aba1-522b-4a11-bb22-779cb8533c6b', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('d9b7c7f5-cd47-459c-b234-b468f32e6056', 'e913fc85-6993-4455-9660-70b3f972370b', 'ff7214b5-165c-4276-bc88-86ecc70be6e7', 0, 0, 0, 0, 0, 0, 0, '2023-02-16 11:06:49', '2023-02-16 11:06:49'),
('f81efcaf-cfad-48d0-b260-fe10fe4e588b', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('fe24025d-7ad4-431d-bf98-db00be2d8def', '81bb7b24-001b-4240-990e-703b823b98ef', 'b451c395-3748-43ce-93ff-167036227088', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 09:01:27', '2023-02-18 09:01:27'),
('fe4780be-98f2-470b-982c-c3c7a6b1e905', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', 0, 0, 0, 0, 0, 0, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('fe76ef2d-aa62-40ed-84f2-da25384ac07d', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', 0, 0, 0, 0, 0, 0, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26');

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_tanding`
--

CREATE TABLE `jadwal_tanding` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `partai` int(11) DEFAULT NULL,
  `babak` varchar(255) DEFAULT NULL,
  `gelanggang` varchar(255) DEFAULT NULL,
  `kelas` varchar(255) DEFAULT NULL,
  `jk` enum('PUTRA','PUTRI') DEFAULT NULL,
  `golongan` varchar(255) DEFAULT NULL,
  `id_merah` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_biru` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `total_merah` int(11) DEFAULT NULL,
  `total_biru` int(11) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `id_pemenang` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `selesai` tinyint(1) DEFAULT 0,
  `aktif` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jadwal_tanding`
--

INSERT INTO `jadwal_tanding` (`id`, `partai`, `babak`, `gelanggang`, `kelas`, `jk`, `golongan`, `id_merah`, `id_biru`, `total_merah`, `total_biru`, `keterangan`, `id_pemenang`, `selesai`, `aktif`, `createdAt`, `updatedAt`) VALUES
('00a6ffeb-739f-4542-a906-3892a3ffba04', 3, 'PENYISIHAN', '1', 'A', 'PUTRA', 'DEWASA', '9e9eb864-5a77-434c-aa7c-6009329179bc', '1f1d934d-d319-41cb-9a90-886af3e1735b', 22, 46, NULL, NULL, 0, 0, '2023-02-18 13:33:57', '2023-02-19 03:28:10'),
('29eaaa77-d0c0-4671-9be3-31f5d30cbb59', 1, 'PENYISIHAN', '1', 'A', 'PUTRA', 'REMAJA', 'bd5ca616-06fe-4324-b9a9-fe6b72acd1e3', '03b3dbd6-335c-4592-9876-1b3de5e3b04d', 1, -7, 'ANGKA', 'bd5ca616-06fe-4324-b9a9-fe6b72acd1e3', 1, 0, '2023-02-18 13:02:04', '2023-02-18 14:08:36'),
('a2c06016-cb78-4511-8818-7fadf8eb6cf2', 2, 'PENYISIHAN', '1', 'A', 'PUTRA', 'REMAJA', '8173b540-b3d6-4582-926e-aa12805842f1', 'e4052bd0-c66d-4455-8af5-f5eea9c4ab5f', -13, 19, 'ANGKA', 'e4052bd0-c66d-4455-8af5-f5eea9c4ab5f', 1, 0, '2023-02-18 13:32:28', '2023-02-18 23:24:44'),
('e8175088-c611-47bc-beb9-1a22d9773482', 4, 'PENYISIHAN', '1', 'A', 'PUTRA', 'DEWASA', 'bc1d7c75-808f-4b8d-ad99-4f0ee70b86c5', 'f8a83b5c-6dfc-4f94-8d16-ec90076ebf2b', 5, 13, NULL, NULL, 0, 0, '2023-02-18 13:38:07', '2023-02-19 02:06:54');

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

--
-- Dumping data for table `jadwal_tgr`
--

INSERT INTO `jadwal_tgr` (`id`, `partai`, `id_biru`, `id_merah`, `kategori`, `jk`, `kelas`, `babak`, `selesai`, `aktif`, `id_pemenang`, `id_skor_merah`, `id_skor_biru`, `createdAt`, `updatedAt`) VALUES
('09f762fd-4293-4d68-a897-4b5f902ca92a', 1, '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', 'TUNGGAL', 'PUTRA', 'REMAJA', 'PENYISIHAN', 1, 0, '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', '0ebf9aac-277a-42d0-b88e-43050d6a9708', 'c14ee87d-4081-4bb3-bf94-413bcde8e709', '2023-02-18 13:13:48', '2023-02-18 18:02:01'),
('0b19bbbf-be56-4321-9fd1-32e92680db5e', 2, '0ddfc3fd-4827-45cd-b98a-75723eb759d3', '6e214497-b03d-47c4-8093-47998a45204b', 'GANDA', 'PUTRA', 'DEWASA', 'PENYISIHAN', 0, 1, NULL, '661347bf-18a2-4fff-9e2c-275bc35e2a63', '95d8346c-3b88-41e8-a1d0-10aa1f5239f5', '2023-02-18 13:39:36', '2023-02-18 20:31:36'),
('272dbc3a-ad92-44c2-a510-00515c5a421e', 1, '74ba9f3c-7166-4d78-8a33-3b1d05039637', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', 'GANDA', 'PUTRA', 'REMAJA', 'PENYISIHAN', 0, 0, NULL, NULL, NULL, '2023-02-18 13:08:08', '2023-02-18 13:10:25'),
('74a588aa-ca85-4012-a8f3-2bd67f2e3138', 1, 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', '102e5c52-3941-4397-a6bd-f06e52be07f3', 'REGU', 'PUTRA', 'REMAJA', 'PENYISIHAN', 0, 1, NULL, 'd63f3051-1916-47e8-bf3f-166c08d72ce1', '6a7a1c84-0daa-4d37-a900-f3735e0f81b8', '2023-02-18 13:11:53', '2023-02-18 20:46:21'),
('9659d237-5487-4854-a5ed-88de93d658d7', 1, '47b5ad6e-0869-4517-9b77-52a112a48567', '5526e425-90c5-4e59-97a9-2cb5cc0684ac', 'SOLO_KREATIF', 'PUTRA', 'REMAJA', 'PENYISIHAN', 0, 0, NULL, NULL, 'e72660d8-a9dd-42bd-b6c2-ef73658e77e5', '2023-02-18 13:10:06', '2023-02-18 19:43:26'),
('cc415254-e4c1-4b22-b511-8a27a5fdbe5d', 2, '5e906988-e979-416e-91c7-129984b622e5', '4a68566a-9424-49c9-8e3f-2f8980933e4e', 'REGU', 'PUTRA', 'REMAJA', 'PENYISIHAN', 0, 1, NULL, '1619aa0b-55a6-45fc-a644-f4b2148375bd', '9ccf9ccc-1fd3-42f0-9048-651a53ebbbef', '2023-02-18 13:36:21', '2023-02-18 19:02:03'),
('d2375b54-b81e-4b66-a8c4-7d5969f20bb7', 2, '3f408374-42f5-430a-af91-233246314a51', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', 'TUNGGAL', 'PUTRA', 'REMAJA', 'PENYISIHAN', 1, 1, '3f408374-42f5-430a-af91-233246314a51', '3a09c567-762b-4833-93e5-3ea4c1d31190', 'bb39c764-6dfa-4689-af42-fd49c29db226', '2023-02-18 13:34:56', '2023-02-18 18:10:47');

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
('14ebde37-f4c7-485d-bba8-663e0953f6ca', 9, 'juri9', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:41:10', '2023-02-19 01:11:48'),
('267e4c27-7f95-4e30-988d-136053097177', 3, 'juri3', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:40:24', '2023-02-19 01:10:32'),
('5869ba11-8de0-44f2-9a1a-728dcf6baf96', 4, 'juri4', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:40:32', '2023-02-19 01:10:42'),
('68ec5cc6-5452-452f-9163-8a6ddc14afd0', 6, 'juri6', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:40:47', '2023-02-19 01:24:24'),
('8133ada3-bcf7-4231-9687-be44045f422c', 7, 'juri7', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:40:53', '2023-02-19 01:24:37'),
('b3796607-f868-46c7-ae43-a3440cb4ad61', 5, 'juri5', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:40:40', '2023-02-19 01:24:09'),
('ba3b0693-22fd-4df5-beec-7c8bd4d41662', 1, 'juri1', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:40:07', '2023-02-19 01:09:59'),
('c44b3c08-61b7-4b90-9a78-6549079a49f1', 2, 'juri2', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:40:15', '2023-02-19 01:10:20'),
('ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', 10, 'juri10', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:41:23', '2023-02-19 01:12:01'),
('ea88dd97-68f0-4779-9a87-93c8353070b8', 8, 'juri8', 'e4c1c0a3b1ff359b6cb3eca594f5395c', '2023-01-14 08:41:01', '2023-02-19 01:11:37');

-- --------------------------------------------------------

--
-- Table structure for table `log_binaan`
--

CREATE TABLE `log_binaan` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_poin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `poin` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_binaan`
--

INSERT INTO `log_binaan` (`id`, `id_poin`, `poin`, `createdAt`, `updatedAt`) VALUES
('075593c1-bb06-49c5-90b0-c48393c99b7f', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', '1x', '2023-02-18 17:41:36', '2023-02-18 17:41:36'),
('2d533b82-04c1-41d8-b975-0176febb4788', '4f1fe5ea-4b5a-4960-9919-206c9afc5c42', '2x', '2023-02-17 08:42:17', '2023-02-17 08:42:18'),
('50749f38-d667-408b-bf1e-0ba7dee07e63', '7a742feb-29b1-4e78-a903-007cbf1b6822', '2x', '2023-02-17 17:30:42', '2023-02-17 17:31:08'),
('525d3e46-f3bc-48e0-86b8-8c4bae27b0a9', 'ba03567f-bf2d-4264-9238-157cf5661e0e', '1x', '2023-02-18 04:09:24', '2023-02-18 04:09:24'),
('661f87d8-cb90-495d-be12-4405c24c3382', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', '1x', '2023-02-18 14:06:33', '2023-02-18 14:06:33'),
('6cd458c4-da96-40cb-b54c-2a3dce81793d', 'cce3abff-d14a-40fe-b979-bb57762f9ccf', '1x', '2023-02-18 14:11:28', '2023-02-18 14:11:28'),
('6e70ae5d-d8e0-4d99-94be-24bf49d5be16', '23017696-9890-4f12-a186-78bf49c017b7', '1x', '2023-02-18 10:44:19', '2023-02-18 10:46:55'),
('7e18b136-5866-4442-a006-69dc84376a26', '22f50921-b796-4805-b3f3-5776ee7ab13d', '1x', '2023-02-18 04:09:28', '2023-02-18 04:09:28'),
('8b3f6495-ee30-4037-8068-5ecbb92db0cd', 'df0bbfb9-567d-441a-bf1c-e099d089ede5', '1x', '2023-02-18 10:44:24', '2023-02-18 10:46:52'),
('8b8f8c2b-159b-4d61-9227-ab89de67592d', '660494f5-e613-4200-9f77-b4a757f0e4a2', '1x', '2023-02-17 02:26:28', '2023-02-17 02:26:28'),
('934f665e-c99e-431c-9bd5-299baad3b8cf', '67c9944d-c194-489d-bfb5-db9251ccc839', '2x', '2023-02-17 00:14:32', '2023-02-17 00:45:10'),
('968d33f6-cd30-486e-93fe-ce0664e9d8e7', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', '2x', '2023-02-17 00:52:40', '2023-02-17 00:54:27'),
('9eca0348-e4cc-49ab-938e-bc49655fd9f5', 'dc4019c5-d958-4973-a20a-e67732ce9189', '2x', '2023-02-18 09:58:19', '2023-02-18 09:58:20'),
('aaf8d047-f9b4-4b35-86f5-83a5fa67bcbe', '8d4acee4-6dd7-4dcd-82e5-4f29dec498ec', '1x', '2023-02-17 08:42:08', '2023-02-17 08:42:12'),
('c5aedfa3-d887-4ad6-98c2-8ff630837658', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', '1x', '2023-02-19 03:28:06', '2023-02-19 03:28:06'),
('dd2200d5-d1b6-4c5c-a283-056bade8aa10', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', '2x', '2023-02-18 17:41:52', '2023-02-18 17:41:55'),
('e16e65ab-d850-478a-836d-f4a5813d06d0', 'ac258794-488d-4efa-990d-46e37b4b456c', '2x', '2023-02-18 10:39:54', '2023-02-18 10:39:57');

-- --------------------------------------------------------

--
-- Table structure for table `log_jatuhan`
--

CREATE TABLE `log_jatuhan` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_poin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `poin` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_jatuhan`
--

INSERT INTO `log_jatuhan` (`id`, `id_poin`, `poin`, `createdAt`, `updatedAt`) VALUES
('0f814c9b-8ceb-49f1-9780-1bf6d03ae716', 'd16a044f-69e2-4f7b-abc6-38dc2a201029', 3, '2023-02-17 09:11:52', '2023-02-17 09:11:52'),
('159a52a7-e9f1-4e94-a916-7d3310de1e7d', 'd2aee1f2-f397-47a2-a559-3cc9b17b96be', 3, '2023-02-17 01:08:16', '2023-02-17 01:08:16'),
('17220a5c-ec53-4c3c-a440-dfed3862fcb2', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 3, '2023-02-18 22:51:38', '2023-02-18 22:51:38'),
('22380c5c-51d4-48f7-a252-243ea5ba215a', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', 3, '2023-02-18 14:06:56', '2023-02-18 14:06:56'),
('26487e30-61e5-403d-b7f5-ffcb05df9ea0', 'df0bbfb9-567d-441a-bf1c-e099d089ede5', 3, '2023-02-18 11:00:54', '2023-02-18 11:00:54'),
('278edc4a-ff3b-4551-ad20-d029ff9ec75f', '4f1fe5ea-4b5a-4960-9919-206c9afc5c42', 3, '2023-02-17 08:41:59', '2023-02-17 08:41:59'),
('288f2f72-b782-4e86-b020-7b14fe8e77c2', 'd2aee1f2-f397-47a2-a559-3cc9b17b96be', 3, '2023-02-17 02:01:52', '2023-02-17 02:01:52'),
('2dc35ee5-cf17-47b7-9f3b-b31e0d634630', '660494f5-e613-4200-9f77-b4a757f0e4a2', 3, '2023-02-17 02:26:35', '2023-02-17 02:26:35'),
('372a8042-7e9d-4e76-8e52-ef3ed20f5266', 'd16a044f-69e2-4f7b-abc6-38dc2a201029', 3, '2023-02-17 09:11:47', '2023-02-17 09:11:47'),
('392c3cdc-b662-4e40-8ec1-4bb8669154fa', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', 3, '2023-02-17 01:06:22', '2023-02-17 01:06:22'),
('404431ca-3db2-4c40-90e6-8214b2298faf', '23017696-9890-4f12-a186-78bf49c017b7', 3, '2023-02-18 10:44:21', '2023-02-18 10:44:21'),
('4b57ea2c-ce2c-41bd-a075-afd852883169', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', 3, '2023-02-18 14:06:17', '2023-02-18 14:06:17'),
('558ccb03-0e0a-4082-8fbd-bb758a846f76', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', 3, '2023-02-17 01:13:54', '2023-02-17 01:13:54'),
('563fbafc-e4d1-4403-a424-b24478b4aca5', 'd16a044f-69e2-4f7b-abc6-38dc2a201029', 3, '2023-02-17 09:11:27', '2023-02-17 09:11:27'),
('5e0f734e-a64c-44b4-9472-07ae687e9291', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 3, '2023-02-18 20:30:40', '2023-02-18 20:30:40'),
('6e529510-1748-4268-851c-6b497bfc39b1', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', 3, '2023-02-17 01:13:55', '2023-02-17 01:13:55'),
('76d6fe1d-df99-47a1-9c02-40a9619164b6', '8d4acee4-6dd7-4dcd-82e5-4f29dec498ec', 3, '2023-02-16 04:41:05', '2023-02-16 04:41:05'),
('7748ecc7-d050-4417-9879-f34988b5b05e', '4f1fe5ea-4b5a-4960-9919-206c9afc5c42', 3, '2023-02-16 04:41:51', '2023-02-16 04:41:51'),
('7a8e099c-b82e-4104-b468-272ecea7bc20', '4f1fe5ea-4b5a-4960-9919-206c9afc5c42', 3, '2023-02-16 04:41:49', '2023-02-16 04:41:49'),
('7e032393-5e5e-402b-b5c5-4d3f191acc10', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 3, '2023-02-18 20:30:29', '2023-02-18 20:30:29'),
('7eb90b21-ee5f-4865-a4c1-2a16618be6f5', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', 3, '2023-02-17 01:13:57', '2023-02-17 01:13:57'),
('845b719d-4e8d-41b1-b419-cc13979aa0e5', 'd16a044f-69e2-4f7b-abc6-38dc2a201029', 3, '2023-02-17 09:11:25', '2023-02-17 09:11:25'),
('882ade7b-c4e2-4b1e-a3f1-97b4f37b5afb', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', 3, '2023-02-17 01:13:58', '2023-02-17 01:13:58'),
('903b7785-38f5-4bb9-ad1d-f1a894498d5e', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 3, '2023-02-18 22:51:24', '2023-02-18 22:51:24'),
('922198e5-8d5b-4a7d-b1ad-b3a626e83766', 'c3d8d08d-a6ea-4c3f-a86c-2bab53eef09e', 3, '2023-02-17 09:11:32', '2023-02-17 09:11:32'),
('95528014-6743-4c04-9697-b38dbc47fd1c', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', 3, '2023-02-19 03:28:08', '2023-02-19 03:28:08'),
('95821424-69eb-44f5-96e4-96efb6d3b670', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 3, '2023-02-18 22:51:23', '2023-02-18 22:51:23'),
('989e7f3b-3ce6-4f00-9b63-aabf5eec757e', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 3, '2023-02-18 22:51:18', '2023-02-18 22:51:18'),
('a0dc9ce1-faf5-4249-800f-ef1a6b98f30a', 'c3d8d08d-a6ea-4c3f-a86c-2bab53eef09e', 3, '2023-02-17 09:11:28', '2023-02-17 09:11:28'),
('a172c8e5-39b9-480d-a617-31ac5af1e165', 'c3d8d08d-a6ea-4c3f-a86c-2bab53eef09e', 3, '2023-02-17 09:11:49', '2023-02-17 09:11:49'),
('a2ca7f98-c610-48fc-ba47-71365e4857c1', '67c9944d-c194-489d-bfb5-db9251ccc839', 3, '2023-02-17 02:26:36', '2023-02-17 02:26:36'),
('a4e0c70f-57a7-43b0-ba0d-e52966dc7545', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 3, '2023-02-18 20:30:09', '2023-02-18 20:30:09'),
('aca40e49-16f5-4682-b448-e5db258c53dc', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 3, '2023-02-18 20:30:04', '2023-02-18 20:30:04'),
('ad89329c-f2e7-4e48-984f-30b831163f6f', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 3, '2023-02-18 20:30:06', '2023-02-18 20:30:06'),
('b6616e72-079a-48e9-b3a1-4d439a53a4d8', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 3, '2023-02-18 22:51:20', '2023-02-18 22:51:20'),
('b8c817fa-b287-4b28-9774-a4661d4e26bb', 'dc4019c5-d958-4973-a20a-e67732ce9189', 3, '2023-02-18 09:58:16', '2023-02-18 09:58:16'),
('c0f6f016-1f2d-4f90-8bb8-41ab8f236ebb', 'dc4019c5-d958-4973-a20a-e67732ce9189', 3, '2023-02-18 09:57:40', '2023-02-18 09:57:40'),
('c901cee7-e49c-43d6-ac61-91b3b964baff', 'dc4019c5-d958-4973-a20a-e67732ce9189', 3, '2023-02-18 09:57:41', '2023-02-18 09:57:41'),
('c94cd24b-a7df-42c9-a87c-387c492ae5b1', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', 3, '2023-02-17 01:13:57', '2023-02-17 01:13:57'),
('d36c2d39-e61f-48f4-b7d8-3f52386d2baf', 'dc4019c5-d958-4973-a20a-e67732ce9189', 3, '2023-02-18 09:57:42', '2023-02-18 09:57:42'),
('d684c295-ea20-401b-9ace-1aaf4196299f', 'd16a044f-69e2-4f7b-abc6-38dc2a201029', 3, '2023-02-17 09:11:51', '2023-02-17 09:11:51'),
('deae3942-6bc0-48c4-be3d-2b1bdbc59807', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 3, '2023-02-18 20:30:04', '2023-02-18 20:30:04'),
('e07c03cf-9a1b-456d-a9a8-d9958bd3e79f', '7a742feb-29b1-4e78-a903-007cbf1b6822', 3, '2023-02-17 17:32:32', '2023-02-17 17:32:32'),
('e09b5bc9-9387-4582-9214-91174d16144a', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', 3, '2023-02-17 01:13:59', '2023-02-17 01:13:59'),
('e1c3c090-7423-4235-8166-4d0a1b5c6af7', '22f50921-b796-4805-b3f3-5776ee7ab13d', 3, '2023-02-18 04:09:27', '2023-02-18 04:09:27'),
('e259c6aa-c863-48ba-b1e8-b4b089c1c5ae', 'ba03567f-bf2d-4264-9238-157cf5661e0e', 3, '2023-02-18 04:09:24', '2023-02-18 04:09:24'),
('e6171c2f-aa7f-4828-baa7-c0ab1f89f7dd', 'f6410e16-62a5-475e-8cad-4757ea79a0bd', 3, '2023-02-17 01:13:55', '2023-02-17 01:13:55'),
('e858cd0b-c2d9-4b7d-97e7-81c3b5ab4a0c', 'c3d8d08d-a6ea-4c3f-a86c-2bab53eef09e', 3, '2023-02-17 09:11:37', '2023-02-17 09:11:37'),
('ec5cc917-0349-4079-b315-c1497be55875', '4f1fe5ea-4b5a-4960-9919-206c9afc5c42', 3, '2023-02-16 04:41:51', '2023-02-16 04:41:51'),
('eda8a548-1d51-4bcc-8196-4a91029c485f', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', 3, '2023-02-18 14:06:19', '2023-02-18 14:06:19'),
('f511a786-e839-4f8a-8353-c47b99c02e92', 'ac258794-488d-4efa-990d-46e37b4b456c', 3, '2023-02-18 10:39:51', '2023-02-18 10:39:51');

-- --------------------------------------------------------

--
-- Table structure for table `log_juri1`
--

CREATE TABLE `log_juri1` (
  `id` int(11) NOT NULL,
  `id_jadwal` int(11) NOT NULL,
  `id_juri` int(11) NOT NULL,
  `sudut` int(11) NOT NULL,
  `poin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `log_pause_tanding`
--

CREATE TABLE `log_pause_tanding` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_timer_tanding` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `finish` datetime DEFAULT NULL,
  `total` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `log_peringatan`
--

CREATE TABLE `log_peringatan` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_poin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `poin` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_peringatan`
--

INSERT INTO `log_peringatan` (`id`, `id_poin`, `poin`, `createdAt`, `updatedAt`) VALUES
('50ef5d03-fcf7-4720-8611-5045b60f669c', 'cce3abff-d14a-40fe-b979-bb57762f9ccf', -5, '2023-02-18 14:12:55', '2023-02-18 14:12:55'),
('5e2109e9-f308-45be-a4f9-0fc8d1663e5a', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', -5, '2023-02-18 17:41:54', '2023-02-18 17:41:54'),
('77e804a3-4144-4b91-a960-99470662c91e', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', -5, '2023-02-19 03:28:10', '2023-02-19 03:28:10'),
('a2c3282b-731e-4c8d-a539-50076cdc437b', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', -10, '2023-02-18 17:41:55', '2023-02-18 17:41:55'),
('b1fc4c1a-e55a-4b6c-9cd2-225fbf1204d9', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', -10, '2023-02-18 14:06:41', '2023-02-18 14:06:41'),
('f007caf0-1fee-4bef-9cb3-d9193d0c93d5', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', -5, '2023-02-18 14:06:37', '2023-02-18 14:06:37');

-- --------------------------------------------------------

--
-- Table structure for table `log_poin_juri1`
--

CREATE TABLE `log_poin_juri1` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_poin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_juri` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `no` int(11) NOT NULL,
  `sudut` enum('biru','merah') DEFAULT NULL,
  `poin` int(11) DEFAULT NULL,
  `masuk` tinyint(1) DEFAULT 0,
  `cek_start` datetime DEFAULT NULL,
  `cek_end` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_poin_juri1`
--

INSERT INTO `log_poin_juri1` (`id`, `id_poin`, `id_juri`, `no`, `sudut`, `poin`, `masuk`, `cek_start`, `cek_end`, `createdAt`, `updatedAt`) VALUES
('05bfe183-0cf9-4754-b2ec-4b90fed81f44', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:09', '2023-02-19 00:03:12', '2023-02-19 00:03:09', '2023-02-19 00:03:09'),
('0dda6a28-db55-4366-926c-e9e17b8c43de', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 1, '2023-02-19 01:58:53', '2023-02-19 01:58:56', '2023-02-19 01:58:53', '2023-02-19 01:58:56'),
('0ed78668-3878-46a4-b6ae-cbf7ef007a9e', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 2, 1, '2023-02-18 23:48:57', '2023-02-18 23:49:00', '2023-02-18 23:48:57', '2023-02-18 23:49:00'),
('118a26c4-1234-4858-9d64-f5d74ee3c412', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-18 23:45:03', '2023-02-18 23:45:06', '2023-02-18 23:45:03', '2023-02-18 23:45:03'),
('1cc88794-0f15-4ed3-8110-6abe56785a83', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:10', '2023-02-19 00:03:13', '2023-02-19 00:03:10', '2023-02-19 00:03:10'),
('20e18752-b385-4760-bb2d-33f9c77fad04', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 9, 'merah', 1, 0, '2023-02-18 23:50:19', '2023-02-18 23:50:23', '2023-02-18 23:50:19', '2023-02-18 23:50:19'),
('2379274d-9356-482d-a278-428a93ca7405', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:10', '2023-02-19 00:03:13', '2023-02-19 00:03:10', '2023-02-19 00:03:10'),
('257fa9f5-cfa7-4067-95aa-81f26cb20d8a', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-18 23:49:42', '2023-02-18 23:49:45', '2023-02-18 23:49:42', '2023-02-18 23:49:42'),
('25d5995c-0a80-4d6a-871e-341cac827451', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:11', '2023-02-19 00:03:14', '2023-02-19 00:03:11', '2023-02-19 00:03:11'),
('3afc9ccc-b0f0-448e-825d-abe9668984d2', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:10', '2023-02-19 00:03:13', '2023-02-19 00:03:10', '2023-02-19 00:03:10'),
('3b080a71-31cc-44ea-98aa-bcaa932bd5fb', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 01:13:30', '2023-02-19 01:13:33', '2023-02-19 01:13:30', '2023-02-19 01:13:30'),
('3be533a5-5140-4be3-8726-e9bc7578b173', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 6, 'merah', 2, 0, '2023-02-18 23:49:24', '2023-02-18 23:49:27', '2023-02-18 23:49:24', '2023-02-18 23:49:24'),
('3bf12944-386c-431f-858c-21bbff264ae9', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:09', '2023-02-19 00:03:13', '2023-02-19 00:03:09', '2023-02-19 00:03:09'),
('3c6a2d71-a75f-4257-9dbc-79a3b54ca60e', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 1, '2023-02-19 01:48:39', '2023-02-19 01:48:42', '2023-02-19 01:48:39', '2023-02-19 01:48:42'),
('3da4d279-a7ea-4d96-9ac3-da78ce4c861e', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 10, 'merah', 1, 1, '2023-02-18 23:54:33', '2023-02-18 23:54:36', '2023-02-18 23:54:33', '2023-02-18 23:54:36'),
('3f6d3a59-cc6b-4af2-a24c-450e4b7ad340', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 2, 1, '2023-02-18 23:55:37', '2023-02-18 23:55:40', '2023-02-18 23:55:37', '2023-02-18 23:55:40'),
('4066bfd1-016f-45fa-a075-f25b3697cefb', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 01:53:09', '2023-02-19 01:53:12', '2023-02-19 01:53:09', '2023-02-19 01:53:09'),
('47f40439-63dd-48a6-95fd-de7d4f9b1ca3', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 1, '2023-02-18 23:54:21', '2023-02-18 23:54:24', '2023-02-18 23:54:21', '2023-02-18 23:54:24'),
('489aff66-f3a5-4ef8-acf1-51b9e66f7083', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-18 23:55:53', '2023-02-18 23:55:57', '2023-02-18 23:55:53', '2023-02-18 23:55:53'),
('48a0fb23-e9b0-4349-bbbf-3693091a016b', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 01:13:39', '2023-02-19 01:13:42', '2023-02-19 01:13:39', '2023-02-19 01:13:39'),
('4a594aea-029d-4f17-9c57-f9f4fd6046f2', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:10', '2023-02-19 00:03:14', '2023-02-19 00:03:10', '2023-02-19 00:03:10'),
('4f78bae4-1d2f-4ea6-9fad-8e21e0b5e037', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 2, 'merah', 1, 0, '2023-02-19 01:40:03', '2023-02-19 01:40:07', '2023-02-19 01:40:03', '2023-02-19 01:40:03'),
('53d72c21-1f58-4bc6-8828-24482dcaf857', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 2, 0, '2023-02-19 01:13:31', '2023-02-19 01:13:35', '2023-02-19 01:13:31', '2023-02-19 01:13:31'),
('562ffae4-3082-4df4-a90d-53e17520d875', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 1, 'merah', 1, 0, '2023-02-18 23:12:43', '2023-02-18 23:12:47', '2023-02-18 23:12:43', '2023-02-18 23:12:43'),
('56f3bc38-f23f-42f3-be19-09fcf5ef9d51', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 2, 1, '2023-02-19 01:49:00', '2023-02-19 01:49:04', '2023-02-19 01:49:00', '2023-02-19 01:49:04'),
('5f9a5b3d-a100-4011-9ced-1351809bab81', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:11', '2023-02-19 00:03:15', '2023-02-19 00:03:11', '2023-02-19 00:03:11'),
('60cc9758-a363-4af4-aef9-e876be33ffd9', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 4, 'merah', 2, 0, '2023-02-18 23:23:58', '2023-02-18 23:24:01', '2023-02-18 23:23:58', '2023-02-18 23:23:58'),
('615cbce4-a5da-4b90-b5e7-3faf4c2f4f4d', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 4, 'merah', 2, 1, '2023-02-18 23:49:06', '2023-02-18 23:49:09', '2023-02-18 23:49:06', '2023-02-18 23:49:09'),
('61a63ef6-675d-4a74-a46b-728a2d1acd01', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 2, 1, '2023-02-18 23:54:27', '2023-02-18 23:54:30', '2023-02-18 23:54:27', '2023-02-18 23:54:30'),
('61e2d314-375f-4dc0-95b7-427b67eb7359', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 3, 'merah', 2, 0, '2023-02-18 23:48:35', '2023-02-18 23:48:38', '2023-02-18 23:48:35', '2023-02-18 23:48:35'),
('6c2007d6-20f1-4d91-9e5f-12245f949ad9', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 01:13:58', '2023-02-19 01:14:01', '2023-02-19 01:13:58', '2023-02-19 01:13:58'),
('6e970fe1-21bf-46bf-b79b-98e7db402461', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 3, 'merah', 2, 0, '2023-02-18 23:20:29', '2023-02-18 23:20:33', '2023-02-18 23:20:29', '2023-02-18 23:20:29'),
('7765f318-0096-46b2-b9cf-71e3174c8653', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:11', '2023-02-19 00:03:14', '2023-02-19 00:03:11', '2023-02-19 00:03:11'),
('7c7a9c71-8ba4-4455-b2ae-c5dd38d4a091', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:11', '2023-02-19 00:03:14', '2023-02-19 00:03:11', '2023-02-19 00:03:11'),
('84de64a5-9c7c-4b4a-a8ec-2c0747648004', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 2, 0, '2023-02-18 23:49:47', '2023-02-18 23:49:51', '2023-02-18 23:49:47', '2023-02-18 23:49:47'),
('86e435ea-eb23-4c6b-b73f-455db614ec7c', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 2, 'merah', 1, 1, '2023-02-18 23:48:10', '2023-02-18 23:48:14', '2023-02-18 23:48:10', '2023-02-18 23:48:14'),
('89e4ee58-c545-45c1-8bf8-4dda2bb72a08', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-18 23:12:52', '2023-02-18 23:12:55', '2023-02-18 23:12:52', '2023-02-18 23:12:52'),
('9400c465-e62b-4045-989e-2183e70e8466', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 5, 'merah', 2, 0, '2023-02-18 23:49:14', '2023-02-18 23:49:17', '2023-02-18 23:49:14', '2023-02-18 23:49:14'),
('9f8794e4-9122-4c0a-9606-ebeee8da740d', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 11, 'merah', 2, 1, '2023-02-18 23:54:38', '2023-02-18 23:54:41', '2023-02-18 23:54:38', '2023-02-18 23:54:41'),
('a6fd6e92-4dc4-4862-83f3-58a6bfd27515', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-18 23:17:18', '2023-02-18 23:17:22', '2023-02-18 23:17:18', '2023-02-18 23:17:18'),
('aa3ddb99-123f-45ed-a110-8e857c1a5dff', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 2, 1, '2023-02-18 23:54:59', '2023-02-18 23:55:02', '2023-02-18 23:54:59', '2023-02-18 23:55:02'),
('b48708f2-6a4e-4eaf-8e51-fa578ab08c3e', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 8, 'merah', 2, 0, '2023-02-18 23:50:12', '2023-02-18 23:50:15', '2023-02-18 23:50:12', '2023-02-18 23:50:12'),
('b6e7c572-7810-4bbd-856f-7ce70da7628a', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:11', '2023-02-19 00:03:15', '2023-02-19 00:03:11', '2023-02-19 00:03:11'),
('b8db8f39-41d1-4893-98a7-99c1a5828494', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-18 23:44:56', '2023-02-18 23:45:00', '2023-02-18 23:44:56', '2023-02-18 23:44:56'),
('c12c699c-7b0c-4e31-bd06-a7e5720cc958', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 3, 'merah', 1, 1, '2023-02-19 02:01:53', '2023-02-19 02:01:57', '2023-02-19 02:01:53', '2023-02-19 02:01:57'),
('c29012b6-31e8-428d-b939-f65663c927e5', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 7, 'merah', 1, 0, '2023-02-18 23:49:33', '2023-02-18 23:49:37', '2023-02-18 23:49:33', '2023-02-18 23:49:33'),
('c4bf9a95-197a-4994-b010-8fed125d517f', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 1, '2023-02-18 23:54:45', '2023-02-18 23:54:49', '2023-02-18 23:54:45', '2023-02-18 23:54:47'),
('c4e0cc58-6b12-4c39-b03b-9daed0c8d8a9', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 12, 'merah', 1, 1, '2023-02-18 23:55:05', '2023-02-18 23:55:08', '2023-02-18 23:55:05', '2023-02-18 23:55:07'),
('c97e3935-e49a-47a5-afd3-3efc950c7790', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 5, 'merah', 1, 0, '2023-02-18 23:24:08', '2023-02-18 23:24:11', '2023-02-18 23:24:08', '2023-02-18 23:24:08'),
('cd1f7c7a-090d-49fc-bd45-a9a8f5a856ce', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 2, 'merah', 2, 0, '2023-02-18 23:18:53', '2023-02-18 23:18:56', '2023-02-18 23:18:53', '2023-02-18 23:18:53'),
('d4aade0c-646f-45e3-837d-4f9f9becbb22', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 2, 1, '2023-02-18 23:54:50', '2023-02-18 23:54:53', '2023-02-18 23:54:50', '2023-02-18 23:54:53'),
('d5f327c5-58b4-462b-8880-c68d3b6a223a', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-18 23:45:48', '2023-02-18 23:45:52', '2023-02-18 23:45:48', '2023-02-18 23:45:48'),
('d77fb683-4968-4554-a119-82dd21676b46', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:03', '2023-02-19 00:03:06', '2023-02-19 00:03:03', '2023-02-19 00:03:03'),
('d7a53f04-4789-4821-b795-548810be245b', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-18 23:44:54', '2023-02-18 23:44:58', '2023-02-18 23:44:54', '2023-02-18 23:44:54'),
('d98a7709-77fa-4caf-a685-8d4c5d2fcb11', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 1, 'merah', 1, 1, '2023-02-19 01:37:51', '2023-02-19 01:37:54', '2023-02-19 01:37:51', '2023-02-19 01:37:55'),
('e104fa17-45ee-4db2-af6c-e8f785be0082', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 1, '2023-02-19 01:51:15', '2023-02-19 01:51:18', '2023-02-19 01:51:15', '2023-02-19 01:51:18'),
('e27f01d0-40aa-4a0b-b5d7-9bef4b48546f', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:09', '2023-02-19 00:03:12', '2023-02-19 00:03:09', '2023-02-19 00:03:09'),
('e7c40e1a-4388-48ef-93e3-e6658b62a6a7', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 4, 'merah', 1, 1, '2023-02-19 02:02:12', '2023-02-19 02:02:15', '2023-02-19 02:02:12', '2023-02-19 02:02:15'),
('e9a37173-681d-44c8-adee-ecae5c85fc0e', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 13, 'merah', 2, 1, '2023-02-18 23:55:10', '2023-02-18 23:55:13', '2023-02-18 23:55:10', '2023-02-18 23:55:13'),
('ef249719-e726-43b8-b34d-ffd5372eec11', '6bffa22b-6342-4725-87c6-e38d2e36e221', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 1, 'merah', 1, 0, '2023-02-19 01:14:03', '2023-02-19 01:14:06', '2023-02-19 01:14:03', '2023-02-19 01:14:03'),
('f056fa8a-a43d-4def-9186-c646540efa3a', '242f3517-6404-4c33-a290-3f34f713ac20', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 1, '2023-02-18 23:55:58', '2023-02-18 23:56:02', '2023-02-18 23:55:58', '2023-02-18 23:56:01'),
('fb216f71-0fd1-4912-beee-bef9f01a7684', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 1, '2023-02-19 01:57:25', '2023-02-19 01:57:28', '2023-02-19 01:57:25', '2023-02-19 01:57:29'),
('fc9c2eb7-a5cb-4aaa-8b13-8de5eab946b6', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 1, 'merah', 1, 0, '2023-02-18 23:47:58', '2023-02-18 23:48:01', '2023-02-18 23:47:58', '2023-02-18 23:47:58'),
('ffa73657-3072-458e-a013-709d17b974af', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 0, 'biru', 1, 0, '2023-02-19 00:03:11', '2023-02-19 00:03:14', '2023-02-19 00:03:11', '2023-02-19 00:03:11');

-- --------------------------------------------------------

--
-- Table structure for table `log_poin_juri2`
--

CREATE TABLE `log_poin_juri2` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_poin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_juri` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `sudut` enum('biru','merah') DEFAULT NULL,
  `poin` int(11) DEFAULT NULL,
  `masuk` tinyint(1) DEFAULT 0,
  `cek_start` datetime DEFAULT NULL,
  `cek_end` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_poin_juri2`
--

INSERT INTO `log_poin_juri2` (`id`, `id_poin`, `id_juri`, `sudut`, `poin`, `masuk`, `cek_start`, `cek_end`, `createdAt`, `updatedAt`) VALUES
('01617e4d-5f6b-4662-bf00-7b471231bc56', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 01:45:06', '2023-02-19 01:45:10', '2023-02-19 01:45:06', '2023-02-19 01:45:06'),
('0832c7b8-e1b2-46b0-9a45-fce99f08f521', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 1, '2023-02-18 23:53:47', '2023-02-18 23:53:50', '2023-02-18 23:53:47', '2023-02-18 23:53:50'),
('160bb970-c904-45dc-a1c8-742ba4f14d2d', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 1, '2023-02-18 23:54:38', '2023-02-18 23:54:42', '2023-02-18 23:54:38', '2023-02-18 23:54:41'),
('179df746-0d8f-4829-adfd-ab4bf4b0b03c', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 1, '2023-02-18 23:55:38', '2023-02-18 23:55:42', '2023-02-18 23:55:38', '2023-02-18 23:55:40'),
('1927856b-dac2-4020-82b8-171c1d47ba03', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-18 23:50:54', '2023-02-18 23:50:57', '2023-02-18 23:50:54', '2023-02-18 23:50:57'),
('2098b42c-f652-453d-adba-7baa7a43cb05', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-19 02:01:08', '2023-02-19 02:01:11', '2023-02-19 02:01:08', '2023-02-19 02:01:09'),
('266aa469-f46b-478d-9818-c0a595eded00', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-19 01:53:07', '2023-02-19 01:53:11', '2023-02-19 01:53:07', '2023-02-19 01:53:10'),
('27162201-64ba-451d-8082-492ca02741d2', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-18 23:12:16', '2023-02-18 23:12:20', '2023-02-18 23:12:16', '2023-02-18 23:12:16'),
('2e4a4ba5-13c2-40c3-84f8-15fc909c0574', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:31:12', '2023-02-18 23:31:15', '2023-02-18 23:31:12', '2023-02-18 23:31:12'),
('30c209f7-a640-476d-93ab-c3960c45a332', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 1, '2023-02-18 23:55:03', '2023-02-18 23:55:07', '2023-02-18 23:55:03', '2023-02-18 23:55:07'),
('32106256-2a86-4dad-a464-2ac9e32651fc', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:51:12', '2023-02-18 23:51:15', '2023-02-18 23:51:12', '2023-02-18 23:51:12'),
('324e546f-8e28-4592-a473-f72b83c6503e', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 01:44:57', '2023-02-19 01:45:00', '2023-02-19 01:44:57', '2023-02-19 01:44:57'),
('33152512-87bf-43af-9778-d63ec6a03188', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:31:05', '2023-02-18 23:31:08', '2023-02-18 23:31:05', '2023-02-18 23:31:05'),
('33e3999a-2507-41dd-a63c-05e6d1e85bb5', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-18 23:30:34', '2023-02-18 23:30:37', '2023-02-18 23:30:34', '2023-02-18 23:30:34'),
('35074bfc-eced-44a1-bcea-cf4a6c359e90', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-18 23:29:52', '2023-02-18 23:29:55', '2023-02-18 23:29:52', '2023-02-18 23:29:52'),
('390b7406-6032-4042-bf6a-dd5048fb4710', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 0, '2023-02-19 00:59:59', '2023-02-19 01:00:03', '2023-02-19 00:59:59', '2023-02-19 00:59:59'),
('3b983846-41df-4027-ae5f-591fe3226d4b', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 1, '2023-02-18 23:54:33', '2023-02-18 23:54:37', '2023-02-18 23:54:33', '2023-02-18 23:54:36'),
('3c311583-f647-427e-9d41-f72fc92c17de', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 01:45:07', '2023-02-19 01:45:10', '2023-02-19 01:45:07', '2023-02-19 01:45:07'),
('40d6b3e5-810a-4fd8-b29c-381acc71c508', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 1, '2023-02-19 01:50:46', '2023-02-19 01:50:49', '2023-02-19 01:50:46', '2023-02-19 01:50:48'),
('4243083b-97cc-4629-933b-e064e9cdbc13', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 00:59:09', '2023-02-19 00:59:12', '2023-02-19 00:59:09', '2023-02-19 00:59:09'),
('4cc31c84-d699-4b9c-a48d-45de5625ecc2', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 01:45:07', '2023-02-19 01:45:10', '2023-02-19 01:45:07', '2023-02-19 01:45:07'),
('4fdfc019-f016-4c92-a9dd-9abd96bde125', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 01:45:07', '2023-02-19 01:45:11', '2023-02-19 01:45:07', '2023-02-19 01:45:07'),
('529fd41d-459f-417b-843b-f39bc8913eaa', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-18 23:12:25', '2023-02-18 23:12:28', '2023-02-18 23:12:25', '2023-02-18 23:12:25'),
('5333de04-cbd6-4bdf-8a44-b1098cf55d2a', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 0, '2023-02-19 01:44:58', '2023-02-19 01:45:01', '2023-02-19 01:44:58', '2023-02-19 01:44:58'),
('54cc62d2-522c-4221-94ac-8727ffaa74ca', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:30:52', '2023-02-18 23:30:55', '2023-02-18 23:30:52', '2023-02-18 23:30:52'),
('5c285e53-d8e8-4d39-b837-a30730ee199f', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-18 23:55:57', '2023-02-18 23:56:01', '2023-02-18 23:55:57', '2023-02-18 23:56:01'),
('6050d49e-d434-4fc5-ab0a-2e6087110ccf', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 0, '2023-02-19 01:40:19', '2023-02-19 01:40:22', '2023-02-19 01:40:19', '2023-02-19 01:40:19'),
('68ccf9a5-5489-44f6-89e1-3ef84f2509b5', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:27:56', '2023-02-18 23:27:59', '2023-02-18 23:27:56', '2023-02-18 23:27:56'),
('68e3d34c-7163-41cc-9b67-6b57e627555b', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:33:01', '2023-02-18 23:33:04', '2023-02-18 23:33:01', '2023-02-18 23:33:01'),
('6a0bc391-84f2-4dba-bfbe-c619a3d9b7ee', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 01:45:01', '2023-02-19 01:45:04', '2023-02-19 01:45:01', '2023-02-19 01:45:01'),
('6c44bae1-7c75-4bab-8ce6-1cdf90d79f86', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:32:04', '2023-02-18 23:32:07', '2023-02-18 23:32:04', '2023-02-18 23:32:04'),
('6f9270ae-2275-4d21-a104-005192a1c21a', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 1, '2023-02-18 23:54:51', '2023-02-18 23:54:54', '2023-02-18 23:54:51', '2023-02-18 23:54:53'),
('7272409d-b23c-4261-96b1-9cdf24e469b4', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-18 23:56:20', '2023-02-18 23:56:23', '2023-02-18 23:56:20', '2023-02-18 23:56:22'),
('738205a9-049d-4bc0-a065-0064d2a55b82', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-19 01:45:43', '2023-02-19 01:45:47', '2023-02-19 01:45:43', '2023-02-19 01:45:43'),
('743866b2-c490-4e44-9b53-1cb5a6da970f', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 1, '2023-02-18 23:55:55', '2023-02-18 23:55:58', '2023-02-18 23:55:55', '2023-02-18 23:55:58'),
('75553e4d-ffbd-4305-9bee-cd2088a15c95', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:51:04', '2023-02-18 23:51:07', '2023-02-18 23:51:04', '2023-02-18 23:51:04'),
('76189a9f-9fc0-4ea3-bb20-73befbedfe28', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:31:15', '2023-02-18 23:31:19', '2023-02-18 23:31:15', '2023-02-18 23:31:15'),
('7b94239a-5e80-4ba2-81e5-fb3059604d16', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 1, '2023-02-18 23:53:16', '2023-02-18 23:53:19', '2023-02-18 23:53:16', '2023-02-18 23:53:19'),
('7c2ac084-59be-4a49-af10-3aa5555e7704', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 0, '2023-02-18 23:10:52', '2023-02-18 23:10:55', '2023-02-18 23:10:52', '2023-02-18 23:10:52'),
('7edc263c-a7b0-4c15-8053-56a1c71abd4e', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 02:01:06', '2023-02-19 02:01:09', '2023-02-19 02:01:06', '2023-02-19 02:01:06'),
('820fd4c5-b642-4982-8b35-6fd87832efa6', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 0, '2023-02-19 01:45:44', '2023-02-19 01:45:48', '2023-02-19 01:45:44', '2023-02-19 01:45:44'),
('83a71128-cc9d-409c-949c-cb84d3a20f15', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:52:06', '2023-02-18 23:52:10', '2023-02-18 23:52:06', '2023-02-18 23:52:06'),
('846983e6-2b7c-4eef-a1e5-3129c434e19b', 'a1bf80ba-53cf-4b68-a00b-3f40d76423d0', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-19 02:06:51', '2023-02-19 02:06:54', '2023-02-19 02:06:51', '2023-02-19 02:06:54'),
('87581cec-3114-49c3-b57a-2d84cd1ad304', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 01:45:07', '2023-02-19 01:45:11', '2023-02-19 01:45:07', '2023-02-19 01:45:07'),
('8b6637d8-9ee2-45da-a5ed-2ae3809f9d6d', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 1, '2023-02-18 23:54:28', '2023-02-18 23:54:31', '2023-02-18 23:54:28', '2023-02-18 23:54:30'),
('8cbcae11-e138-4cca-bc27-b19d9910b89d', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:15:44', '2023-02-18 23:15:47', '2023-02-18 23:15:44', '2023-02-18 23:15:44'),
('9006707e-0259-4fb8-8a76-fd9874cf1fd6', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 0, '2023-02-19 01:45:02', '2023-02-19 01:45:06', '2023-02-19 01:45:02', '2023-02-19 01:45:02'),
('9660feba-df65-438c-bf7e-e0a8005b6874', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 1, '2023-02-19 02:03:34', '2023-02-19 02:03:37', '2023-02-19 02:03:34', '2023-02-19 02:03:35'),
('97985ddd-87bd-43dc-9591-0430c6d8aca2', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 1, '2023-02-19 02:01:43', '2023-02-19 02:01:46', '2023-02-19 02:01:43', '2023-02-19 02:01:45'),
('99e6e71f-9e54-406d-a90b-fec0d80a6411', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 1, '2023-02-18 23:54:58', '2023-02-18 23:55:02', '2023-02-18 23:54:58', '2023-02-18 23:55:02'),
('9bff3c67-befc-4654-aac0-5fc63872e4b6', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 1, '2023-02-18 23:55:38', '2023-02-18 23:55:41', '2023-02-18 23:55:38', '2023-02-18 23:55:39'),
('9cbf43b2-0941-4c3a-97ac-880e19fbc4da', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 1, '2023-02-18 23:53:36', '2023-02-18 23:53:39', '2023-02-18 23:53:36', '2023-02-18 23:53:38'),
('9e571b0e-8c94-460f-a4ca-4fb08f0072f7', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 0, '2023-02-18 23:10:49', '2023-02-18 23:10:52', '2023-02-18 23:10:49', '2023-02-18 23:10:49'),
('a3171900-1199-4449-994f-5150d967c147', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-18 23:10:51', '2023-02-18 23:10:54', '2023-02-18 23:10:51', '2023-02-18 23:10:51'),
('a451f403-6054-4ae7-ad0c-f78ed4c3c2b4', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:30:50', '2023-02-18 23:30:53', '2023-02-18 23:30:50', '2023-02-18 23:30:50'),
('aab85ebc-f8b9-4001-ae18-02443008ca6c', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 0, '2023-02-18 23:51:00', '2023-02-18 23:51:04', '2023-02-18 23:51:00', '2023-02-18 23:51:00'),
('abb0e715-99ca-4c82-aba2-5ec516962be1', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 0, '2023-02-18 23:28:10', '2023-02-18 23:28:13', '2023-02-18 23:28:10', '2023-02-18 23:28:10'),
('ac13c4f2-c837-442f-8519-398af268ac74', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-18 23:54:43', '2023-02-18 23:54:47', '2023-02-18 23:54:43', '2023-02-18 23:54:47'),
('ae7465dc-15a4-4b1e-9908-06baf29c0d36', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 1, '2023-02-19 02:01:54', '2023-02-19 02:01:57', '2023-02-19 02:01:54', '2023-02-19 02:01:57'),
('aef431a9-d296-47ec-a209-b15a7547178d', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:30:47', '2023-02-18 23:30:51', '2023-02-18 23:30:47', '2023-02-18 23:30:47'),
('b2c476f5-2da6-4f13-8355-d84a35987661', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-18 23:50:42', '2023-02-18 23:50:45', '2023-02-18 23:50:42', '2023-02-18 23:50:45'),
('b6de61fc-ba92-4106-b884-e44fd78de185', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 2, 0, '2023-02-19 01:50:35', '2023-02-19 01:50:39', '2023-02-19 01:50:35', '2023-02-19 01:50:35'),
('bc330d41-7649-41a3-aca7-ed1608bcd78e', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-19 01:45:08', '2023-02-19 01:45:11', '2023-02-19 01:45:08', '2023-02-19 01:45:08'),
('bcabe532-6061-4dc4-a903-683ac856bc4b', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 1, '2023-02-18 23:55:09', '2023-02-18 23:55:13', '2023-02-18 23:55:09', '2023-02-18 23:55:13'),
('c4381e10-18cc-4997-8641-77f683f8e870', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 1, '2023-02-18 23:53:11', '2023-02-18 23:53:14', '2023-02-18 23:53:11', '2023-02-18 23:53:14'),
('d26bd419-e150-4812-8945-70d8999d3cdc', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-19 01:51:16', '2023-02-19 01:51:19', '2023-02-19 01:51:16', '2023-02-19 01:51:18'),
('d5b9de47-0659-439a-a70d-ecf0d16fecec', '242f3517-6404-4c33-a290-3f34f713ac20', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-18 23:54:22', '2023-02-18 23:54:25', '2023-02-18 23:54:22', '2023-02-18 23:54:24'),
('d7c3f644-3226-43ea-a4a7-a750a58fcc7c', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:10:47', '2023-02-18 23:10:50', '2023-02-18 23:10:47', '2023-02-18 23:10:47'),
('db333a03-93fe-4005-8dde-b2eb3a4baa72', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-18 23:12:17', '2023-02-18 23:12:20', '2023-02-18 23:12:17', '2023-02-18 23:12:17'),
('e9013969-925e-4cb4-ae2e-3b2322080846', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-19 01:40:14', '2023-02-19 01:40:17', '2023-02-19 01:40:14', '2023-02-19 01:40:14'),
('eb1738cf-1836-4cfe-a2df-52ba9f70f440', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:31:03', '2023-02-18 23:31:07', '2023-02-18 23:31:03', '2023-02-18 23:31:03'),
('ef9247f4-0f94-48ba-bdfe-c8621c36279e', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 2, 0, '2023-02-18 23:53:43', '2023-02-18 23:53:46', '2023-02-18 23:53:43', '2023-02-18 23:53:43'),
('f515fd39-74a4-4b4e-8f27-435bb6b7126f', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'merah', 1, 0, '2023-02-19 02:01:30', '2023-02-19 02:01:33', '2023-02-19 02:01:30', '2023-02-19 02:01:30'),
('f650fdbe-e2aa-4d71-a01c-87c93dc1cca8', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 0, '2023-02-18 23:13:25', '2023-02-18 23:13:28', '2023-02-18 23:13:25', '2023-02-18 23:13:25'),
('fde6e041-e441-4e47-867c-0ef6971cd899', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', 'biru', 1, 1, '2023-02-19 01:59:44', '2023-02-19 01:59:47', '2023-02-19 01:59:44', '2023-02-19 01:59:47');

-- --------------------------------------------------------

--
-- Table structure for table `log_poin_juri3`
--

CREATE TABLE `log_poin_juri3` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_poin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_juri` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `sudut` enum('biru','merah') DEFAULT NULL,
  `poin` int(11) DEFAULT NULL,
  `masuk` tinyint(1) DEFAULT 0,
  `cek_start` datetime DEFAULT NULL,
  `cek_end` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_poin_juri3`
--

INSERT INTO `log_poin_juri3` (`id`, `id_poin`, `id_juri`, `sudut`, `poin`, `masuk`, `cek_start`, `cek_end`, `createdAt`, `updatedAt`) VALUES
('02cf1f2c-b68e-45c6-8ab8-201560fe8550', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 1, '2023-02-18 23:48:58', '2023-02-18 23:49:01', '2023-02-18 23:48:58', '2023-02-18 23:49:00'),
('036dac5d-ec47-4ba3-8cfa-b9282c345489', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 1, '2023-02-18 23:52:39', '2023-02-18 23:52:42', '2023-02-18 23:52:39', '2023-02-18 23:52:42'),
('052f21af-f117-4150-bd72-a2dfea7bb3f7', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-18 23:45:02', '2023-02-18 23:45:05', '2023-02-18 23:45:02', '2023-02-18 23:45:05'),
('09c14260-65ea-4db7-ba16-9b287a018827', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-19 02:01:06', '2023-02-19 02:01:09', '2023-02-19 02:01:06', '2023-02-19 02:01:09'),
('0bcdffdb-0eb5-4e34-a55b-75197c46c335', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 1, '2023-02-18 23:52:48', '2023-02-18 23:52:51', '2023-02-18 23:52:48', '2023-02-18 23:52:51'),
('0e60e2fa-c64e-4777-b0a0-f3df5d382858', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-19 01:37:54', '2023-02-19 01:37:58', '2023-02-19 01:37:54', '2023-02-19 01:37:55'),
('0e65ad5f-7454-48c5-845c-58e97581076f', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 2, 1, '2023-02-18 23:49:06', '2023-02-18 23:49:10', '2023-02-18 23:49:06', '2023-02-18 23:49:09'),
('11e102bf-4561-48ab-8109-7a024314960e', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-18 23:48:11', '2023-02-18 23:48:14', '2023-02-18 23:48:11', '2023-02-18 23:48:14'),
('1bdc57f3-2bad-417f-b466-1b839112e18a', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:12', '2023-02-19 01:38:15', '2023-02-19 01:38:12', '2023-02-19 01:38:12'),
('245d30c4-1810-4525-8ea2-d6243f4b9ef1', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:13', '2023-02-19 01:38:16', '2023-02-19 01:38:13', '2023-02-19 01:38:13'),
('261b486d-3e1c-4625-9fb0-5e37f468c4f4', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 02:01:26', '2023-02-19 02:01:30', '2023-02-19 02:01:26', '2023-02-19 02:01:26'),
('3129224c-bf90-4e1a-88ef-5d35de988948', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-19 02:03:31', '2023-02-19 02:03:35', '2023-02-19 02:03:31', '2023-02-19 02:03:35'),
('32ec8f93-c94a-400b-9c6b-88b1d2285b04', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:12', '2023-02-19 01:38:16', '2023-02-19 01:38:12', '2023-02-19 01:38:12'),
('36d10dfc-a7a7-48bb-b968-52de0dc34e0a', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-18 23:49:32', '2023-02-18 23:49:36', '2023-02-18 23:49:32', '2023-02-18 23:49:36'),
('381e8601-d5b1-49a7-8702-ed471645142e', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-19 01:37:47', '2023-02-19 01:37:50', '2023-02-19 01:37:47', '2023-02-19 01:37:49'),
('389bfa2e-e547-4be4-8f70-fc7245767e83', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 0, '2023-02-18 23:44:58', '2023-02-18 23:45:01', '2023-02-18 23:44:58', '2023-02-18 23:44:58'),
('39696dc6-03f9-4205-a85f-2225db1abee1', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 2, 1, '2023-02-18 23:53:17', '2023-02-18 23:53:21', '2023-02-18 23:53:17', '2023-02-18 23:53:19'),
('3a016ef5-337d-4fc3-be3b-1d85ffd9c05f', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 2, 0, '2023-02-18 23:48:34', '2023-02-18 23:48:37', '2023-02-18 23:48:34', '2023-02-18 23:48:34'),
('3dd35c8b-dd10-4714-a317-a7d4425049c9', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 0, '2023-02-19 01:47:18', '2023-02-19 01:47:22', '2023-02-19 01:47:18', '2023-02-19 01:47:18'),
('4eb6d697-0ebe-4074-9b0e-189ccca8667b', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-18 23:50:18', '2023-02-18 23:50:21', '2023-02-18 23:50:18', '2023-02-18 23:50:22'),
('57b44618-6f24-43fa-b6de-c40dff2f9946', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 0, '2023-02-19 01:48:43', '2023-02-19 01:48:46', '2023-02-19 01:48:43', '2023-02-19 01:48:43'),
('58af7d29-45cb-4691-8e2c-64d1e6c6a092', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-18 23:50:55', '2023-02-18 23:50:58', '2023-02-18 23:50:55', '2023-02-18 23:50:57'),
('59d4b113-c47e-4533-8c3d-8c558995ba80', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 2, 0, '2023-02-18 23:49:22', '2023-02-18 23:49:26', '2023-02-18 23:49:22', '2023-02-18 23:49:22'),
('645b7ada-beab-4596-9f3f-eaf764de210e', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:00', '2023-02-19 01:38:03', '2023-02-19 01:38:00', '2023-02-19 01:38:00'),
('64f8f1d5-da48-431c-9cc0-96e0d1d476ea', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:13', '2023-02-19 01:38:17', '2023-02-19 01:38:13', '2023-02-19 01:38:13'),
('71f51346-7684-4689-95b3-11c47b7d4b60', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-18 23:53:35', '2023-02-18 23:53:38', '2023-02-18 23:53:35', '2023-02-18 23:53:38'),
('7253b104-efe9-4b26-a50d-965c71bffb13', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-19 02:02:13', '2023-02-19 02:02:17', '2023-02-19 02:02:13', '2023-02-19 02:02:15'),
('7b852c8d-b219-40c3-a5ef-53c68c927e67', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-19 01:59:43', '2023-02-19 01:59:47', '2023-02-19 01:59:43', '2023-02-19 01:59:47'),
('7be061b7-aabb-4e7f-baea-1e025f9f9cf5', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:12', '2023-02-19 01:38:15', '2023-02-19 01:38:12', '2023-02-19 01:38:12'),
('7dbd23ea-ef17-4262-a092-84e5d0fb1638', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-19 01:48:39', '2023-02-19 01:48:43', '2023-02-19 01:48:39', '2023-02-19 01:48:42'),
('870f370d-0569-44e1-9f56-ff1812d1f8d0', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 2, 1, '2023-02-18 23:53:46', '2023-02-18 23:53:50', '2023-02-18 23:53:46', '2023-02-18 23:53:50'),
('8d9105be-18af-46e8-a941-089385cb55ad', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-18 23:50:42', '2023-02-18 23:50:46', '2023-02-18 23:50:42', '2023-02-18 23:50:45'),
('8eaf19e1-138b-4a78-a0af-091fd00ffc7e', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-19 02:01:42', '2023-02-19 02:01:45', '2023-02-19 02:01:42', '2023-02-19 02:01:45'),
('933828da-0e98-4745-a8cc-ff651d08fdf1', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-19 01:57:26', '2023-02-19 01:57:29', '2023-02-19 01:57:26', '2023-02-19 01:57:29'),
('960f9eb5-1929-47bd-b646-52544932ea8d', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 2, 1, '2023-02-18 23:50:11', '2023-02-18 23:50:15', '2023-02-18 23:50:11', '2023-02-18 23:50:15'),
('a07f17d4-c21a-4c90-bd03-c8a875f249ff', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:13', '2023-02-19 01:38:16', '2023-02-19 01:38:13', '2023-02-19 01:38:13'),
('a0ad2d9e-ce92-4a5d-89cd-f2c6cb9ca400', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:13', '2023-02-19 01:38:16', '2023-02-19 01:38:13', '2023-02-19 01:38:13'),
('a1665d0a-ea06-43ae-8a84-3432c2df4402', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 2, 0, '2023-02-18 23:53:39', '2023-02-18 23:53:43', '2023-02-18 23:53:39', '2023-02-18 23:53:39'),
('afbdb8e4-1436-434a-b98c-fbc2eda62475', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-18 23:48:02', '2023-02-18 23:48:05', '2023-02-18 23:48:02', '2023-02-18 23:48:02'),
('b08ec657-24f6-4925-a5dc-47c14ee4b98d', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-19 01:58:54', '2023-02-19 01:58:57', '2023-02-19 01:58:54', '2023-02-19 01:58:56'),
('b701f71f-50d5-493a-ba46-ccfeeaa9f6a5', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 1, '2023-02-18 23:53:12', '2023-02-18 23:53:16', '2023-02-18 23:53:12', '2023-02-18 23:53:14'),
('cdffb9f1-0f7f-432d-bd00-0cec1a425a58', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 1, '2023-02-18 23:49:47', '2023-02-18 23:49:50', '2023-02-18 23:49:47', '2023-02-18 23:49:50'),
('d56daa72-ab7c-4dcd-8c4b-83c9ed1c2dff', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 1, '2023-02-19 01:50:45', '2023-02-19 01:50:48', '2023-02-19 01:50:45', '2023-02-19 01:50:48'),
('d7171e52-480b-4ff5-8a8c-3ffcc0168b59', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 1, 0, '2023-02-19 01:38:12', '2023-02-19 01:38:16', '2023-02-19 01:38:12', '2023-02-19 01:38:12'),
('d8d9de23-081b-4fbb-9cac-1f92a914a3e7', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 1, '2023-02-19 01:49:01', '2023-02-19 01:49:04', '2023-02-19 01:49:01', '2023-02-19 01:49:04'),
('d9dbf089-8a48-49c7-83d9-23787285b064', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-18 23:52:33', '2023-02-18 23:52:36', '2023-02-18 23:52:33', '2023-02-18 23:52:35'),
('da9a2726-63d1-4702-b857-0e6383613c60', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 0, '2023-02-18 23:45:09', '2023-02-18 23:45:13', '2023-02-18 23:45:09', '2023-02-18 23:45:09'),
('ddf1d9b6-05f3-40ab-894d-7e1b56901c48', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-18 23:53:23', '2023-02-18 23:53:27', '2023-02-18 23:53:23', '2023-02-18 23:53:27'),
('de7fcd5e-eac8-447e-844a-0327eec4fb7e', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '267e4c27-7f95-4e30-988d-136053097177', 'merah', 2, 0, '2023-02-18 23:49:13', '2023-02-18 23:49:16', '2023-02-18 23:49:13', '2023-02-18 23:49:13'),
('e391be65-75d8-4259-b37f-afb721a52590', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-18 23:49:41', '2023-02-18 23:49:44', '2023-02-18 23:49:41', '2023-02-18 23:49:44'),
('eea29dc3-8140-47eb-a098-8c47bc82cbe9', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 0, '2023-02-19 01:47:20', '2023-02-19 01:47:23', '2023-02-19 01:47:20', '2023-02-19 01:47:20'),
('f092f6b5-f5b9-4683-8438-adef9691fee2', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-19 01:53:06', '2023-02-19 01:53:10', '2023-02-19 01:53:06', '2023-02-19 01:53:10'),
('f4895bcb-4606-401e-801c-b884268d7705', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 1, '2023-02-18 23:53:29', '2023-02-18 23:53:33', '2023-02-18 23:53:29', '2023-02-18 23:53:33'),
('f8165c3a-a73b-428d-adb2-5b4a94056b39', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 1, 1, '2023-02-18 23:45:47', '2023-02-18 23:45:51', '2023-02-18 23:45:47', '2023-02-18 23:45:51'),
('fdf3a4f5-68d0-4227-9d01-a5f2761e6b51', '242f3517-6404-4c33-a290-3f34f713ac20', '267e4c27-7f95-4e30-988d-136053097177', 'biru', 2, 1, '2023-02-18 23:53:00', '2023-02-18 23:53:03', '2023-02-18 23:53:00', '2023-02-18 23:53:03');

-- --------------------------------------------------------

--
-- Table structure for table `log_poin_masuk`
--

CREATE TABLE `log_poin_masuk` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_poin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `poin` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_poin_masuk`
--

INSERT INTO `log_poin_masuk` (`id`, `id_poin`, `poin`, `createdAt`, `updatedAt`) VALUES
('02e33d85-9ae0-4046-ae07-0df8de8e4bce', '12961967-e36d-400a-86ed-880cb828974e', 1, '2023-02-18 06:16:35', '2023-02-18 06:16:35'),
('035280c8-33ae-4bd5-9719-7e579794d82e', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:52:51', '2023-02-18 23:52:51'),
('05e8e9f7-3fa0-452a-a974-544ef3a0681f', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 2, '2023-02-18 23:55:13', '2023-02-18 23:55:13'),
('06a9c0cd-bf4e-40b5-ac69-a571a71181c0', 'b8f5bde5-e944-4695-bd32-96e71453506d', 1, '2023-02-18 11:22:11', '2023-02-18 11:22:11'),
('0e4b399a-6b42-4586-8c62-57b8cfeed821', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:49:00', '2023-02-18 23:49:00'),
('0ed0c6dc-1e3b-42df-bd04-9bffb4899a75', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:27', '2023-02-18 23:44:27'),
('0efaaaec-d337-466c-bf39-36751c1aa96c', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:28', '2023-02-18 23:44:28'),
('0f4d0ca1-0c90-450b-a5d6-8962f0bc37d6', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:53:27', '2023-02-18 23:53:27'),
('11b729ae-6ab5-4f72-8069-6784960e4344', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 2, '2023-02-18 23:53:19', '2023-02-18 23:53:19'),
('137ce39e-721d-4679-8e39-2dc737b8c1b6', 'dc4019c5-d958-4973-a20a-e67732ce9189', 1, '2023-02-18 06:55:48', '2023-02-18 06:55:48'),
('14856eaa-7338-457b-bf4a-5d1408ff4b9a', '56117f31-594a-4449-9747-8602007de2a1', 2, '2023-02-18 11:17:58', '2023-02-18 11:17:58'),
('182e60e2-f102-43d3-891c-0dba12f23e4c', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:28', '2023-02-18 23:44:28'),
('1f85704b-ba4a-49f5-9442-c0b133f25240', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 1, '2023-02-19 01:53:10', '2023-02-19 01:53:10'),
('247f72ee-c8aa-4c77-a337-574568c62d9c', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:53:33', '2023-02-18 23:53:33'),
('26e78722-750b-4fcb-a74a-04fc8f92a33c', '8d4acee4-6dd7-4dcd-82e5-4f29dec498ec', 2, '2023-02-16 04:38:08', '2023-02-16 04:38:08'),
('27842edc-310d-4dd7-99a5-e44dfda814cb', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 1, '2023-02-18 23:50:22', '2023-02-18 23:50:22'),
('29598627-6221-45ca-990a-57d595bd18bc', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 1, '2023-02-18 23:48:14', '2023-02-18 23:48:14'),
('2dab3461-fa79-4cdb-a395-5c9384cb7469', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 2, '2023-02-18 20:13:25', '2023-02-18 20:13:25'),
('2ff9a68e-fc4f-4523-ac59-2a54001d4ee6', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:45:51', '2023-02-18 23:45:51'),
('3011e93f-d217-4940-aa47-571d4e29aa33', 'dc4019c5-d958-4973-a20a-e67732ce9189', 2, '2023-02-18 07:05:26', '2023-02-18 07:05:26'),
('306bdbe2-8ceb-42d1-bbcf-1a99f74cea14', '12961967-e36d-400a-86ed-880cb828974e', 1, '2023-02-18 06:17:52', '2023-02-18 06:17:52'),
('3349d96d-c909-470a-a60e-94daeecb15e8', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:27', '2023-02-18 23:44:27'),
('335b331c-3fd3-48b0-8b99-77a8acf25cb2', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 2, '2023-02-18 20:14:23', '2023-02-18 20:14:23'),
('33eb6bc5-ee77-402c-8713-acf321fb48f3', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:29', '2023-02-18 23:44:29'),
('359192f9-bda5-42d5-8d1f-1c9c06117281', '56117f31-594a-4449-9747-8602007de2a1', 2, '2023-02-18 11:14:14', '2023-02-18 11:14:14'),
('36f85c16-747e-4e34-b5c1-f8195d69f97a', '3a7872b3-5108-473b-8784-4c28f68bec1f', 2, '2023-02-17 18:08:39', '2023-02-17 18:08:39'),
('3741ddfc-7804-4fd2-b270-28e00bd5327b', '47133381-24c0-4053-ab4a-c8e088d64a13', 2, '2023-02-17 18:08:44', '2023-02-17 18:08:44'),
('3e43cc9d-620a-47e2-991f-ec300bcf132b', '12961967-e36d-400a-86ed-880cb828974e', 1, '2023-02-18 06:22:01', '2023-02-18 06:22:01'),
('418c9380-54e3-449f-8969-0868d1bfc8a6', '2beb5517-a52b-4fd8-bb3f-0e8b1322715c', 1, '2023-02-18 11:53:10', '2023-02-18 11:53:10'),
('42fd0bdf-5ff3-42df-b1d8-214881b5033e', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:27', '2023-02-18 23:44:27'),
('4571f79a-7fef-4d0e-8980-cc2db0781926', '12961967-e36d-400a-86ed-880cb828974e', 1, '2023-02-18 06:17:24', '2023-02-18 06:17:24'),
('46281c0c-de05-469d-8fe9-a118e5a59442', '12961967-e36d-400a-86ed-880cb828974e', 2, '2023-02-13 16:27:32', '2023-02-13 16:27:32'),
('466e8f24-4ec5-46d1-89b6-7eef93ad1147', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:56:01', '2023-02-18 23:56:01'),
('4b730fa5-16b1-4164-af13-4c2718f9a45c', '7cd69cc7-0cc2-4e50-8991-c61c8ac2ce78', 1, '2023-02-17 13:07:16', '2023-02-17 13:07:16'),
('4e8b724d-51a1-439d-82ff-009a10a91526', '12961967-e36d-400a-86ed-880cb828974e', 1, '2023-02-18 11:04:50', '2023-02-18 11:04:50'),
('51555b73-f6a6-457e-b02c-0560d07e3723', '23017696-9890-4f12-a186-78bf49c017b7', 2, '2023-02-18 11:06:08', '2023-02-18 11:06:08'),
('52ef7875-2754-47b9-ae65-69d26b54d613', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:54:53', '2023-02-18 23:54:53'),
('52f1ecae-ac46-434d-a435-415f1d22afdd', 'b8f5bde5-e944-4695-bd32-96e71453506d', 2, '2023-02-18 11:24:54', '2023-02-18 11:24:54'),
('572b3c26-3521-4902-980b-d0fe5f4874b1', 'feee44c5-4bb2-4c90-be62-4625caeebe01', 1, '2023-02-17 15:18:00', '2023-02-17 15:18:00'),
('57429267-77ba-4c71-8aa1-778d98a6537e', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 2, '2023-02-18 23:49:09', '2023-02-18 23:49:09'),
('57f40daa-4218-4485-be9a-a5ef5e84f6a0', '12961967-e36d-400a-86ed-880cb828974e', 2, '2023-02-13 16:21:24', '2023-02-13 16:21:24'),
('587438c7-2d5a-41ba-99d6-296778222857', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 1, '2023-02-19 01:37:48', '2023-02-19 01:37:48'),
('58d61d29-eac6-4ad4-8322-f8e1535ae2a6', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 1, '2023-02-18 20:11:01', '2023-02-18 20:11:01'),
('5adf30ec-9319-438b-9c83-d08d2a809a60', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 1, '2023-02-18 23:49:36', '2023-02-18 23:49:36'),
('5c8ef806-00c3-4a57-9ba9-b0c2281a2164', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', 1, '2023-02-18 13:06:31', '2023-02-18 13:06:31'),
('5d5cd87f-9f4f-4d89-8a99-d2b229c9f202', '47133381-24c0-4053-ab4a-c8e088d64a13', 1, '2023-02-17 18:08:36', '2023-02-17 18:08:36'),
('5d99ec18-506b-47a5-b2d5-46de8dffbac8', '3a7872b3-5108-473b-8784-4c28f68bec1f', 2, '2023-02-17 18:08:48', '2023-02-17 18:08:48'),
('5f27a08b-53b9-443b-a5b7-0119927c7216', 'dc4019c5-d958-4973-a20a-e67732ce9189', 1, '2023-02-18 06:56:05', '2023-02-18 06:56:05'),
('63bcf6dd-54d6-4f9c-93ac-d9598e4422b1', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:28', '2023-02-18 23:44:28'),
('63d17d55-5f99-4f67-85a2-a9087c994421', '8d4acee4-6dd7-4dcd-82e5-4f29dec498ec', 1, '2023-02-16 04:37:40', '2023-02-16 04:37:40'),
('66a57605-ad2a-4ff6-b5ee-c504ac52414a', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:52:35', '2023-02-18 23:52:35'),
('682b1e1c-ffff-44d0-bea1-c28a250dc350', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:27', '2023-02-18 23:44:27'),
('69c7ca0f-249e-4bd5-9302-f9705071de5a', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 1, '2023-02-18 20:17:06', '2023-02-18 20:17:06'),
('6ade9f98-e4fa-41bb-9a28-6101046cd7a4', '12961967-e36d-400a-86ed-880cb828974e', 1, '2023-02-18 11:04:40', '2023-02-18 11:04:40'),
('6dd72b34-497a-46d8-b95e-bd6b53e59ab1', '2beb5517-a52b-4fd8-bb3f-0e8b1322715c', 2, '2023-02-18 11:53:11', '2023-02-18 11:53:11'),
('7161c8b0-32d2-4833-98d5-8de92e6e13d7', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:28', '2023-02-18 23:44:28'),
('71e3f124-bd7d-412c-a2ce-8e8819f23402', '56117f31-594a-4449-9747-8602007de2a1', 2, '2023-02-18 11:22:47', '2023-02-18 11:22:47'),
('726d3880-744a-4e70-b010-5ac38de27bb5', 'ac258794-488d-4efa-990d-46e37b4b456c', 2, '2023-02-18 07:15:11', '2023-02-18 07:15:11'),
('72f7876d-3796-44e0-b664-6904b47534e9', '56117f31-594a-4449-9747-8602007de2a1', 2, '2023-02-18 11:40:24', '2023-02-18 11:40:24'),
('7397e13f-9315-41bd-a1ed-fc5a65cadd01', '56117f31-594a-4449-9747-8602007de2a1', 1, '2023-02-18 11:22:37', '2023-02-18 11:22:37'),
('7598d5cc-702f-4741-b3d8-bd0f94b013ba', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:50:57', '2023-02-18 23:50:57'),
('776ee898-e316-411d-b658-6dd47397a10b', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:29', '2023-02-18 23:44:29'),
('7a0d0272-679d-4b64-b91e-39af71985dcd', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 1, '2023-02-18 23:53:14', '2023-02-18 23:53:14'),
('7ae1b2e0-9189-4d50-b807-cdadce04eaf2', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 1, '2023-02-18 23:54:36', '2023-02-18 23:54:36'),
('7fea7dd9-646b-475b-93e0-11f180e1b236', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 1, '2023-02-19 02:02:15', '2023-02-19 02:02:15'),
('85cc8908-2ef4-47d6-961c-6fc69488a686', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:45:05', '2023-02-18 23:45:05'),
('86ca8658-a4c3-4350-8471-a7998a8679f3', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:55:40', '2023-02-18 23:55:40'),
('872d56c3-e19d-4d4d-8c58-09185136d768', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:50:45', '2023-02-18 23:50:45'),
('8773220d-4eda-4c92-9e2c-71102d3f4205', '12961967-e36d-400a-86ed-880cb828974e', 2, '2023-02-13 16:33:00', '2023-02-13 16:33:00'),
('8798dacd-5306-4c06-b419-43cdf340ff7a', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 1, '2023-02-18 20:09:16', '2023-02-18 20:09:16'),
('8a1d7e7c-a9c9-4cbb-b4d5-849bc25e2df7', '4f1fe5ea-4b5a-4960-9919-206c9afc5c42', 2, '2023-02-16 04:39:20', '2023-02-16 04:39:20'),
('8bef2de2-7bd1-49c9-8710-dbb419e6e415', '64432d19-14b8-494e-ad87-4735f80d09d4', 1, '2023-02-18 08:07:46', '2023-02-18 08:07:46'),
('8bf84c2b-303b-40ed-aefe-660ac344344d', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 1, '2023-02-19 01:48:42', '2023-02-19 01:48:42'),
('8c32287c-9ed1-4b34-9e9c-f9d4e762f578', '12961967-e36d-400a-86ed-880cb828974e', 2, '2023-02-17 14:11:00', '2023-02-17 14:11:00'),
('8d486514-fc5a-4fcd-a233-8935881f8162', 'dc4019c5-d958-4973-a20a-e67732ce9189', 1, '2023-02-18 06:56:54', '2023-02-18 06:56:54'),
('8e868012-f215-4228-bb30-e236f461b1e8', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 1, '2023-02-18 23:53:38', '2023-02-18 23:53:38'),
('903a4714-90e5-4f66-9b2a-10d5fd32f635', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:52:42', '2023-02-18 23:52:42'),
('95a4b72c-c456-4add-a440-3ab0ecd31d10', 'dc4019c5-d958-4973-a20a-e67732ce9189', 2, '2023-02-18 07:05:16', '2023-02-18 07:05:16'),
('986c282e-03d4-4a5b-b46b-d295d4d608c2', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 1, '2023-02-19 02:01:09', '2023-02-19 02:01:09'),
('99a264e8-a153-4db4-9dd8-03c99f0f49bd', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 2, '2023-02-18 20:15:52', '2023-02-18 20:15:52'),
('9a8eab79-9a49-4e31-b9ae-7dc26b712f33', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 1, '2023-02-19 01:51:18', '2023-02-19 01:51:18'),
('9b3aee2b-7605-4a7e-8cea-b7af4ba5e4fb', 'b8f5bde5-e944-4695-bd32-96e71453506d', 2, '2023-02-18 11:22:19', '2023-02-18 11:22:19'),
('9b9e8af5-d702-4fcd-8ced-e9371ba92a0e', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:27', '2023-02-18 23:44:27'),
('9d7a8195-774c-40d6-8fdf-06010a8ac8e4', '7cd69cc7-0cc2-4e50-8991-c61c8ac2ce78', 2, '2023-02-17 13:03:08', '2023-02-17 13:03:08'),
('9de92e81-960f-4483-b9d1-0b15aeb0d25b', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:29', '2023-02-18 23:44:29'),
('a0e36f04-8b6c-4a7a-8477-493142e0e9cb', '4f1fe5ea-4b5a-4960-9919-206c9afc5c42', 1, '2023-02-16 04:39:40', '2023-02-16 04:39:40'),
('a218cf7f-31c9-4500-8180-7c0920444f15', '12961967-e36d-400a-86ed-880cb828974e', 1, '2023-02-18 06:22:18', '2023-02-18 06:22:18'),
('a426b511-fcc6-43a6-a496-9a834953b383', 'df0bbfb9-567d-441a-bf1c-e099d089ede5', 2, '2023-02-18 11:04:56', '2023-02-18 11:04:56'),
('a61f0d18-08f5-41f3-b274-416966a75766', '56117f31-594a-4449-9747-8602007de2a1', 2, '2023-02-18 11:15:02', '2023-02-18 11:15:02'),
('a7ba3c1b-ab86-4bd2-9493-ed974324b403', '56117f31-594a-4449-9747-8602007de2a1', 1, '2023-02-18 11:18:23', '2023-02-18 11:18:23'),
('a954a5e5-3897-474e-97b6-f04bc183d0a0', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 2, '2023-02-18 23:53:50', '2023-02-18 23:53:50'),
('aa4958fd-26c7-420a-ba45-c09f21c3d304', 'a1bf80ba-53cf-4b68-a00b-3f40d76423d0', 1, '2023-02-19 02:06:54', '2023-02-19 02:06:54'),
('ab9fba09-29a0-4fcb-aa09-b02ed2bfcfd3', 'dc4019c5-d958-4973-a20a-e67732ce9189', 1, '2023-02-18 08:32:07', '2023-02-18 08:32:07'),
('abadcfd4-0fb1-4ccf-bbc8-0df7a51a15f5', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 1, '2023-02-18 23:55:39', '2023-02-18 23:55:39'),
('acd1c2bb-80f7-415d-96d9-27b5903d01dc', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:49:44', '2023-02-18 23:49:44'),
('ae9c0fd3-73d1-4096-a4f8-42e7fb3cb264', '0b28fc97-aa50-494e-af08-0118511faa33', 1, '2023-02-18 13:07:25', '2023-02-18 13:07:25'),
('b118f052-627c-4182-a381-10e317fe220b', '12961967-e36d-400a-86ed-880cb828974e', 1, '2023-02-18 05:51:35', '2023-02-18 05:51:35'),
('b1a71bae-f85d-48d1-bf8e-4e01c70af489', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 2, '2023-02-18 23:55:58', '2023-02-18 23:55:58'),
('b23f9ded-64f4-4b1c-a552-6dedaa87bdcf', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:28', '2023-02-18 23:44:28'),
('b452e3c3-7966-4858-803c-834605d1c1a3', '01b34f3f-7c36-415f-b53e-9558d58486fb', 1, '2023-02-17 15:36:28', '2023-02-17 15:36:28'),
('b6161b02-5377-44fd-900d-5f7b5d590134', '7cd69cc7-0cc2-4e50-8991-c61c8ac2ce78', 2, '2023-02-17 13:02:56', '2023-02-17 13:02:56'),
('b9a5e145-048c-4f7c-918a-462e49f0c9c3', 'b8f5bde5-e944-4695-bd32-96e71453506d', 2, '2023-02-18 11:16:54', '2023-02-18 11:16:54'),
('b9ffdc76-29f3-4a7b-bb9f-05d2d0da5990', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:49:50', '2023-02-18 23:49:50'),
('bbd88dcd-17d1-490f-930b-0ea835f60ea6', '7cd69cc7-0cc2-4e50-8991-c61c8ac2ce78', 1, '2023-02-17 13:01:48', '2023-02-17 13:01:48'),
('bc91713b-2d3f-454b-a557-e9e0d8426fdd', 'b8f5bde5-e944-4695-bd32-96e71453506d', 1, '2023-02-18 11:23:13', '2023-02-18 11:23:13'),
('bca312e3-dc23-499c-a3eb-a182c489f086', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 1, '2023-02-19 01:57:29', '2023-02-19 01:57:29'),
('be7e4971-af21-427e-be83-48836758edba', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 1, '2023-02-18 20:20:20', '2023-02-18 20:20:20'),
('c45510ca-6ccc-41e3-a916-fbb3bbf03de5', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 2, '2023-02-19 01:49:04', '2023-02-19 01:49:04'),
('c480f78d-e218-4b98-8ccd-13d395234be9', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 2, '2023-02-18 23:54:41', '2023-02-18 23:54:41'),
('c6eb33f4-e3f4-4981-bf1a-fa7ea7603c2a', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:54:47', '2023-02-18 23:54:47'),
('c7321fd1-79f4-4895-97f1-e7d5c3efa53a', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:29', '2023-02-18 23:44:29'),
('cd70fb1a-294d-4bef-8ef3-082b1e872d4d', '7cd69cc7-0cc2-4e50-8991-c61c8ac2ce78', 1, '2023-02-17 13:01:16', '2023-02-17 13:01:16'),
('cf2f22d4-5fb6-4d53-8c0a-c58fd2b4cd69', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 1, '2023-02-19 01:37:55', '2023-02-19 01:37:55'),
('d080a927-aa5f-4101-9812-223d76a887db', '7cd69cc7-0cc2-4e50-8991-c61c8ac2ce78', 1, '2023-02-17 13:07:28', '2023-02-17 13:07:28'),
('d1d7c594-2ed4-4f39-a270-8a1a5ff480e0', '7cd69cc7-0cc2-4e50-8991-c61c8ac2ce78', 1, '2023-02-17 13:07:04', '2023-02-17 13:07:04'),
('d231dda2-48e8-408c-9de2-db565869cf53', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:28', '2023-02-18 23:44:28'),
('d2983c03-5d58-4ada-93a1-cb8672e8f06d', '56117f31-594a-4449-9747-8602007de2a1', 1, '2023-02-18 11:31:50', '2023-02-18 11:31:50'),
('d2eb2d25-115e-43c8-a2ec-4540aca4c465', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:26', '2023-02-18 23:44:26'),
('d34c57d3-1823-401f-97e7-21ee5681fe95', '56117f31-594a-4449-9747-8602007de2a1', 1, '2023-02-18 11:16:10', '2023-02-18 11:16:10'),
('d5885a1b-61cd-4abf-babf-2259cd159a27', '56117f31-594a-4449-9747-8602007de2a1', 2, '2023-02-18 11:21:14', '2023-02-18 11:21:14'),
('d67b9a34-b1db-40cf-8390-96bc066dbcf9', '12961967-e36d-400a-86ed-880cb828974e', 2, '2023-02-13 16:19:04', '2023-02-13 16:19:04'),
('d78b8ebe-0d7e-4002-8d9b-90148db8b444', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 2, '2023-02-18 23:50:15', '2023-02-18 23:50:15'),
('d7df7b39-17f0-4f4a-bd80-50179a8bc5d5', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 2, '2023-02-19 01:50:48', '2023-02-19 01:50:48'),
('d89adae0-6760-4261-b58f-74accf65386e', '2beb5517-a52b-4fd8-bb3f-0e8b1322715c', 2, '2023-02-18 08:01:44', '2023-02-18 08:01:44'),
('dbaef7fe-0fc7-4a5a-83e0-6db04132782b', '56117f31-594a-4449-9747-8602007de2a1', 1, '2023-02-18 11:31:44', '2023-02-18 11:31:44'),
('dbb1a6ad-982b-4eb6-898d-de9c9ca4203a', '01b34f3f-7c36-415f-b53e-9558d58486fb', 1, '2023-02-17 15:36:00', '2023-02-17 15:36:00'),
('dd8396ee-43dd-444c-9c1b-5a770d780ce0', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 1, '2023-02-18 20:18:38', '2023-02-18 20:18:38'),
('dedde323-3a4b-47d1-8137-91cee6a7e5e5', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', 1, '2023-02-18 23:55:07', '2023-02-18 23:55:07'),
('df170f31-7712-4ada-b200-64a2ce46c465', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 1, '2023-02-18 20:19:47', '2023-02-18 20:19:47'),
('dfcdeceb-2b88-4414-9d33-775ae6f81403', '3a7872b3-5108-473b-8784-4c28f68bec1f', 1, '2023-02-17 18:11:57', '2023-02-17 18:11:57'),
('e6baa68e-8289-40d2-8abc-3aef513461b9', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 1, '2023-02-19 01:59:47', '2023-02-19 01:59:47'),
('eac9f385-687d-4483-8e5e-01c5bb8bef8b', '3a7872b3-5108-473b-8784-4c28f68bec1f', 2, '2023-02-17 18:12:55', '2023-02-17 18:12:55'),
('eb5e0ca8-5a6c-47c9-809a-4e51086f37fb', '56117f31-594a-4449-9747-8602007de2a1', 1, '2023-02-18 11:20:58', '2023-02-18 11:20:58'),
('ecd22f3c-6a17-441c-857b-35cffe86b1fd', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 1, '2023-02-19 02:01:57', '2023-02-19 02:01:57'),
('ed6afce6-09d8-4daf-a911-90e56e0dbba5', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', 1, '2023-02-18 20:16:10', '2023-02-18 20:16:10'),
('edd33f01-c94d-441e-8dbc-40d3e4d00eac', '64432d19-14b8-494e-ad87-4735f80d09d4', 1, '2023-02-18 11:53:26', '2023-02-18 11:53:26'),
('edefe0eb-46b2-4d32-b5df-a50ddc668827', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', 1, '2023-02-19 01:58:56', '2023-02-19 01:58:56'),
('efcb8980-e9b2-48b4-aa4e-0a56de28e8c7', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:27', '2023-02-18 23:44:27'),
('f12b8ec9-bc5d-4209-967c-d54ac619c3a2', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 1, '2023-02-19 02:01:45', '2023-02-19 02:01:45'),
('f5992614-491f-4a3e-b92c-447fd8afad20', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', 1, '2023-02-18 13:05:09', '2023-02-18 13:05:09'),
('f674d59f-b545-4f5d-81f2-cc8d5cdcbce7', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 1, '2023-02-18 20:04:26', '2023-02-18 20:04:26'),
('f7dc3c9b-9eb6-41a6-be99-ad1ae63dac86', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', 1, '2023-02-18 20:07:29', '2023-02-18 20:07:29'),
('f909c57e-fb2a-4b27-89b2-0c701f1e1460', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:53:03', '2023-02-18 23:53:03'),
('fa2a7112-46bd-4f1d-b2cb-af2cdc45293d', '56117f31-594a-4449-9747-8602007de2a1', 1, '2023-02-18 11:15:21', '2023-02-18 11:15:21'),
('fa8bf3c9-3f26-4cf1-b353-3ff991918bd9', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:44:29', '2023-02-18 23:44:29'),
('fad382c3-1edb-4095-a557-987f3f8268ca', 'b8f5bde5-e944-4695-bd32-96e71453506d', 1, '2023-02-18 11:20:27', '2023-02-18 11:20:27'),
('faef171d-91b1-4092-9483-62ac93bc58e6', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:55:02', '2023-02-18 23:55:02'),
('faf08930-6960-4231-b236-fc71751280fa', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:54:24', '2023-02-18 23:54:24'),
('fc0113f4-a674-497c-8e46-33ffe742c7b9', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 1, '2023-02-19 02:03:35', '2023-02-19 02:03:35'),
('fc320ad9-c534-45f2-a398-b8ed02c00db3', '242f3517-6404-4c33-a290-3f34f713ac20', 2, '2023-02-18 23:54:30', '2023-02-18 23:54:30'),
('fcdda5c8-3460-4a75-ae77-ded5cecd461f', '97b90bd0-f77c-447d-8577-9ab53aefb12c', 2, '2023-02-13 16:42:32', '2023-02-13 16:42:32'),
('fd4dbe0c-1159-4276-a7eb-707b1a289f39', 'b8f5bde5-e944-4695-bd32-96e71453506d', 2, '2023-02-18 11:19:14', '2023-02-18 11:19:14'),
('fe7b02c0-3894-4e8a-9b31-f7ba2716dc14', '242f3517-6404-4c33-a290-3f34f713ac20', 1, '2023-02-18 23:56:22', '2023-02-18 23:56:22');

-- --------------------------------------------------------

--
-- Table structure for table `log_teguran`
--

CREATE TABLE `log_teguran` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_poin` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `poin` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_teguran`
--

INSERT INTO `log_teguran` (`id`, `id_poin`, `poin`, `createdAt`, `updatedAt`) VALUES
('0a058627-4ced-43f6-84b1-c22010c63e91', '52fb59d1-db83-4c85-baad-00c9a651200a', -1, '2023-02-16 14:50:17', '2023-02-16 14:54:04'),
('0da53eda-d0f2-458e-b89a-989d293a6510', '23017696-9890-4f12-a186-78bf49c017b7', -1, '2023-02-18 10:48:31', '2023-02-18 10:48:31'),
('181f7ad2-867a-4d26-9199-15df81646444', '7a742feb-29b1-4e78-a903-007cbf1b6822', -1, '2023-02-17 17:31:22', '2023-02-17 17:31:22'),
('34a96501-5428-45d1-8488-4dadf10da299', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', -1, '2023-02-18 14:06:25', '2023-02-18 14:06:25'),
('38f55679-35f9-4bfd-9f96-b4b812da1ade', 'ac258794-488d-4efa-990d-46e37b4b456c', -1, '2023-02-18 01:51:59', '2023-02-18 01:51:59'),
('3cb473b7-8feb-46ff-a72d-5aea7fd5645b', 'dc4019c5-d958-4973-a20a-e67732ce9189', -2, '2023-02-18 09:58:23', '2023-02-18 09:58:23'),
('49766565-a28e-47cb-ada8-a23d20741574', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', -2, '2023-02-18 17:41:54', '2023-02-18 17:41:54'),
('5ff70648-9f91-457b-acae-c174cd917922', 'ac258794-488d-4efa-990d-46e37b4b456c', -2, '2023-02-18 10:40:13', '2023-02-18 10:40:13'),
('6ca57721-834a-4cdf-b45d-fc3c20f6fed8', 'df0bbfb9-567d-441a-bf1c-e099d089ede5', -2, '2023-02-18 10:46:46', '2023-02-18 10:46:46'),
('6ddfa464-ead8-4569-957e-ad8563dc0306', 'df0bbfb9-567d-441a-bf1c-e099d089ede5', -1, '2023-02-18 10:44:24', '2023-02-18 10:44:24'),
('7293f568-00e3-4d4d-a3c6-e4e3d6b798fa', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', -1, '2023-02-18 16:38:00', '2023-02-18 16:38:00'),
('736eb326-b460-4077-86c7-74bb58b13ada', 'ba03567f-bf2d-4264-9238-157cf5661e0e', -1, '2023-02-18 04:09:23', '2023-02-18 04:09:23'),
('86770c56-10d3-4b65-a696-9a7e4a5e629e', '4f1fe5ea-4b5a-4960-9919-206c9afc5c42', -2, '2023-02-16 04:42:13', '2023-02-16 04:42:18'),
('93c6b80b-6cde-44a6-a4fd-a852f2ba2f39', '23017696-9890-4f12-a186-78bf49c017b7', -2, '2023-02-18 10:48:31', '2023-02-18 10:48:31'),
('acd7b9b8-8d4e-4258-825a-752dc0518498', '7a742feb-29b1-4e78-a903-007cbf1b6822', -2, '2023-02-17 17:31:48', '2023-02-17 17:31:48'),
('b1e33833-bb8f-4032-87eb-cc6030a99286', '22f50921-b796-4805-b3f3-5776ee7ab13d', -1, '2023-02-18 04:09:29', '2023-02-18 04:09:29'),
('b3525a21-7fed-4d66-a362-3a6b7d0a8251', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', -1, '2023-02-18 17:41:53', '2023-02-18 17:41:53'),
('c0b84bac-f8c0-4d2d-a4d1-9216a76ce5ff', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', -1, '2023-02-19 03:28:09', '2023-02-19 03:28:09'),
('ebc543ae-f4b5-44ce-b7ff-ca41bdd1dc85', '660494f5-e613-4200-9f77-b4a757f0e4a2', -1, '2023-02-17 02:26:32', '2023-02-17 02:26:32'),
('f26a531e-5430-487e-bf1b-09c1ce192551', 'dc4019c5-d958-4973-a20a-e67732ce9189', -1, '2023-02-18 09:58:22', '2023-02-18 09:58:22'),
('ff7a58bb-ed62-4104-9405-0266517082b2', '2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', -2, '2023-02-18 14:06:49', '2023-02-18 14:06:49');

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
('03542c7a-b8a2-4fe0-b024-73e819f914da', 'Sabnga', '2023-02-16 10:53:16', '2023-02-16 10:53:16'),
('1ae8b43c-d88a-4060-8dc2-e88a462b531e', 'Wahid', '2023-02-16 10:52:42', '2023-02-16 10:52:42'),
('1e6436b5-ff42-49c9-8b38-8e4e2a728533', 'Sixta', '2023-02-16 10:53:10', '2023-02-16 10:53:10'),
('36387b87-41fa-4685-b57b-a864d7bd0c03', 'Qomsa', '2023-02-16 10:53:04', '2023-02-16 10:53:04'),
('7e34a557-3e56-4e6f-aa7e-7c24ff7e0c67', 'Arbanga', '2023-02-16 10:52:58', '2023-02-16 10:52:58'),
('868cc3ce-9b69-414b-b79c-2f8eb8c14069', 'Samani', '2023-02-16 10:53:41', '2023-02-16 10:53:41'),
('a76ec6c6-1835-4766-8a6f-4e685ddd8c07', 'Sedoso', '2023-02-16 10:53:46', '2023-02-16 10:53:46'),
('d143c3d8-ddf4-4469-a83e-4dc70c322d8c', 'Salasa', '2023-02-16 10:52:52', '2023-02-16 10:52:52'),
('e8ca4dfe-1ac9-44d9-be05-797ebc54f7e2', 'Qomsa', '2023-02-16 10:53:24', '2023-02-16 10:53:24'),
('f1573f57-1129-4885-8967-2109c8808054', 'Isnen', '2023-02-16 10:52:48', '2023-02-16 10:52:48');

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

--
-- Dumping data for table `nilai_ganda`
--

INSERT INTO `nilai_ganda` (`id`, `id_jadwal`, `id_peserta`, `id_juri`, `nama_juri`, `technique`, `firmness`, `soulfulness`, `total`, `total_skor`, `dis`, `createdAt`, `updatedAt`) VALUES
('02a68222-dc86-4279-b7d2-17b11f56b650', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('0b7e00f0-9e0c-4f0c-b5f1-46a6db68a661', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 16:38:10', '2023-02-16 16:38:10'),
('0cdbf099-f10f-4d97-bc19-f6d76816af1e', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('0d532c5a-3bf1-4c39-b80f-359609235491', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('0e3af6fe-1795-41aa-a774-cd96f967bc7b', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', 'Arbanga', 0.1, 0.2, 0.3, 0.6000000000000001, 9.7, 0, '2023-02-17 11:15:02', '2023-02-17 15:18:00'),
('122c01a7-cb0e-4357-857e-6ecf0f4ec7fb', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 16:38:10', '2023-02-16 16:38:10'),
('1279f200-dbd5-4779-ab2e-c49ae258b624', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('15715b00-da0c-4ca6-866c-e1f7af4fbfe3', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('17173341-156d-4f60-ad62-56bd57212d3e', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('1d2a41cd-52bb-4a5c-8421-556303345362', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('2297e540-bcb2-4e7b-b14c-7747a848747a', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('23ea7568-f590-46cc-ae03-1404beb61f9a', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('2b0b7799-7099-409a-aba1-d0b7be55dd37', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('32e47e4f-2d41-4e42-acf1-e444ed7b4c76', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('35fdcb09-d685-4cc3-9184-66df99ef1a12', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('3d03b82c-e11a-452c-ae13-e25f88dc0f9d', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('47aacce0-ec46-4dd5-80ae-651c3ee8f04a', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 16:38:10', '2023-02-16 16:38:10'),
('486d25f2-6fb9-46c6-8974-305648e7cd3c', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('4953ca33-329d-4cdd-bf34-41635a796e40', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('518baada-4b93-4558-a30e-9e00eb6e6d4b', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('57b8e87f-617a-4a6a-a21f-a19ee1b5e6cd', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('62c17a65-5e77-4535-91f7-a6b33231bf59', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('64f9b8f3-0bac-41e4-96c3-1a589aa45d0d', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', 'Arbanga', 0.28, 0.27, 0.28, 0.8300000000000001, 9.93, 0, '2023-02-17 08:00:55', '2023-02-17 14:54:43'),
('6843f7c5-dcaf-4886-8a32-b309583ccb8f', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('6a8bcb9e-15fb-496e-b457-9b456ada80ad', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', '267e4c27-7f95-4e30-988d-136053097177', 'Arbanga', 0.11, 0.28, 0.01, 0.4, 9.5, 0, '2023-02-16 16:38:10', '2023-02-18 04:59:19'),
('6c2cfb1b-7ae1-4cda-967a-3161ace87fbb', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('6c733571-49c3-4d62-87de-59ad3df37f44', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('7412b219-bb47-4e23-b960-db6910a50d97', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('75a3ceee-b8de-40ee-b132-fbbfd57df74a', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('769be23f-43df-4b29-b8ce-fb6e3f3b36b4', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('78582481-534f-4986-8158-45afbc54ab0a', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('790fc9fb-90e2-4b7b-a32c-bdb5b679c49d', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('7a601579-7ac5-4fd8-8071-a6df0fb31b27', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 16:38:10', '2023-02-16 16:38:10'),
('7c70f986-a689-4222-80bc-0382198671d4', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('7d11c684-a356-45d9-86ed-2f694778170c', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('838f7e22-9ec4-472f-a27c-ab0df7041681', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('84ea8d03-84d9-4db6-847f-9a74033d0bea', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 16:38:10', '2023-02-16 16:38:10'),
('86400f07-0e6c-460f-b564-cea646ff645d', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('8a2ff847-e5d4-4f3f-a4b1-6beaed7b0207', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('994c99bc-6f4a-49ee-a5dc-593fa85da9aa', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('9b442179-3d81-4fad-bd90-7ab6984fcf13', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('9f1c376d-0017-423c-8d6e-7b466795b5a0', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('9ffe1b7d-e5c1-4ab6-b0e0-dc62d62dd03c', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('a42f6901-c08d-4881-9bb6-0654f166b5fa', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('a562c381-3bdf-4b4d-b04a-b4b1bc2ac343', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('a7b45f23-1763-43e4-9111-ff7c5ee53a84', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 'Qomsa', 0.03, 0.13, 0.06, 0.22, 9.32, 0, '2023-02-18 14:27:41', '2023-02-18 19:19:32'),
('ae759ecc-6d98-4a23-84bb-001000489eec', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 16:38:10', '2023-02-16 16:38:10'),
('aef70a8b-6a54-4a4d-a6ed-93d1e35cf718', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('afe58b27-feeb-40fb-ba5b-d1d1cf6f6136', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('b71c6623-6cd3-4f77-b9be-08223834bd0e', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 'Sabnga', 0.22, 0.24, 0.28, 0.74, 9.84, 0, '2023-02-16 16:38:10', '2023-02-18 04:58:26'),
('b7cdefca-fc46-46ee-97cc-43f426e9f1d1', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 16:38:10', '2023-02-16 16:38:10'),
('b9b59e3b-e6e1-4861-befb-e1a3923dfc1f', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('b9e0bd3e-c798-4a57-9f0a-ed6847346bab', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('ba7802b8-5c1d-4181-8758-b303c492d1e9', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('cc653be7-96a3-4608-ac07-599152c963ef', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('cf5236a8-b3a2-4a35-b41d-7a603c4914c4', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('d69781ba-616d-4a4a-a825-04ad751d7cab', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 08:00:55', '2023-02-17 08:00:55'),
('dbe165bf-9883-4121-a9ff-4d9fddf80823', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('df2b6880-f863-4be7-aa23-4340270e3f8f', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('dfacbd27-9a5e-4ed9-90f1-b57ab88fde7a', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('dfd26bcf-fe3e-4b82-9d57-58e9ef150786', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('e70b06e2-7bbf-4170-8fc5-91aead569436', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('ed3c5dd1-0fa5-44d9-a054-e7fd40c46cf4', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('f4e9a404-d8c0-425a-97d6-f36cc95b4573', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('f60ae95c-2756-417b-9b75-21792bd2f5a9', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('f805af7d-2a7c-438f-8642-87271a496cf9', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', 'Qomsa', 0.1, 0.2, 0.3, 0.6000000000000001, 9.7, 0, '2023-02-16 16:38:10', '2023-02-17 15:13:23'),
('f93a9974-b7d4-4b07-adc6-689fac648541', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('fac18d9a-c078-49c5-9a85-c28c7790dedc', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('fc5c52ea-0ea0-4d83-9b1e-7ff9bef2f496', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 'Sedoso', 0.12, 0.24, 0.16, 0.52, 9.62, 0, '2023-02-18 19:16:05', '2023-02-18 19:19:39'),
('fd437e70-9993-493a-b0bf-eb013a9c5f50', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 9.1, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26');

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

--
-- Dumping data for table `nilai_regu`
--

INSERT INTO `nilai_regu` (`id`, `id_jadwal`, `id_peserta`, `id_juri`, `nama_juri`, `jurus1`, `jurus2`, `jurus3`, `jurus4`, `jurus5`, `jurus6`, `jurus7`, `jurus8`, `jurus9`, `jurus10`, `jurus11`, `jurus12`, `skor_a`, `skor_b`, `total_skor`, `dis`, `createdAt`, `updatedAt`) VALUES
('0c1b0a26-d6c9-4ee5-a646-ee6521ed72bd', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('18cffabd-552a-47e4-bb34-8f110aec9153', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('27cfa26e-7130-4fb8-a059-e565102ebd5b', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('2bc51825-3534-47b9-b4e5-74ac1b907233', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('310c4202-5277-4fd1-9b69-65697f4adf4d', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('3928acb1-1064-41e6-91e1-9efb342abe1a', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('4b38e0a0-b76d-45c4-83cc-c920fc1a435d', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('5d00b732-78e8-42d9-8f1b-3a7152714b18', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('679ef263-803c-4811-8dd3-8ccffea9ccf6', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('7eac2e90-a75f-44c6-8bb1-98e702146444', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('8efd9ac3-3061-4e32-bf4f-4aea8eabd8f0', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('925074be-672d-4c45-b961-3824ca2bc579', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('9b95a91a-3419-4d00-941a-626f71ec91c1', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('a5931e7f-1efa-4de5-bc47-8edec716384c', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('a60bb760-b2a7-4d0d-91ba-181d6c4c294b', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('acc980fd-b18e-4973-9cab-794138f1756f', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('b4e22e23-05b1-4053-b0c2-8ae4120d6a9a', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40'),
('cf75b8d3-5bd0-4e29-9a71-fb453ed48421', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('d8e0116f-c0aa-4c85-9bad-4dcbf9b26a27', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:05:31', '2023-02-18 19:05:31'),
('ed49fa20-40eb-4629-b8be-8b34f34dc80f', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 19:25:40', '2023-02-18 19:25:40');

-- --------------------------------------------------------

--
-- Table structure for table `nilai_tanding`
--

CREATE TABLE `nilai_tanding` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `babak` varchar(255) DEFAULT NULL,
  `waktu` varchar(255) NOT NULL DEFAULT '-',
  `id_poin_merah` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_poin_biru` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nilai_tanding`
--

INSERT INTO `nilai_tanding` (`id`, `id_jadwal`, `babak`, `waktu`, `id_poin_merah`, `id_poin_biru`, `createdAt`, `updatedAt`) VALUES
('1e215047-18b5-4683-b736-b5194c2f3da2', '00a6ffeb-739f-4542-a906-3892a3ffba04', 'III', '-', '6bffa22b-6342-4725-87c6-e38d2e36e221', '64b0df86-df0f-479e-a23e-ecd1ef4675c2', '2023-02-19 00:03:44', '2023-02-19 00:03:44'),
('207cb530-441e-4446-8ee7-e25a2ac41581', 'e8175088-c611-47bc-beb9-1a22d9773482', 'II', '-', 'e72d9cad-bf89-4fc5-902f-ae9fe933e27b', 'd3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', '2023-02-19 01:28:37', '2023-02-19 01:28:37'),
('5a4607a7-7cc5-455f-b5fd-716ea622e77d', 'e8175088-c611-47bc-beb9-1a22d9773482', 'I', '-', '8a561ff3-9b77-43c1-8df5-126683f775e9', 'cbd22fa0-5496-4578-bca2-3bfabde8dbe3', '2023-02-19 01:28:24', '2023-02-19 01:28:24'),
('7ad838e3-c906-4158-a5da-e18b3ece9119', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 'II', '-', '86efdc67-49c3-49a1-a5c7-94ea90bdbb01', '1a647be1-b7cf-46d8-8b00-34f97bf80cc5', '2023-02-18 16:20:08', '2023-02-18 16:20:08'),
('a89f7812-cad5-443d-b7f5-19e151540178', '00a6ffeb-739f-4542-a906-3892a3ffba04', 'II', '-', '74941ab5-477c-421e-8e53-137c578dd926', 'a5d10e67-6c4d-49e9-b9f1-401b540075b7', '2023-02-19 00:00:12', '2023-02-19 00:00:12'),
('cc429cf2-b823-40a5-b88a-83b16c11b518', '29eaaa77-d0c0-4671-9be3-31f5d30cbb59', 'I', '-', 'c7e486e9-9de2-436f-b267-787c70da3569', '661ccb27-9af4-418a-95d0-082e0fc13942', '2023-02-18 22:28:06', '2023-02-18 22:28:06'),
('cf00579d-3edb-4e0d-8314-665065b4cdf9', '29eaaa77-d0c0-4671-9be3-31f5d30cbb59', 'II', '-', 'cb5db10d-0df4-4c99-ad5e-7b996e063e48', '07580241-4f5b-41a4-843a-b60ba4ddde65', '2023-02-18 22:28:29', '2023-02-18 22:28:29'),
('e1cfdd79-a1a1-4dcd-a7e3-6506c2d07674', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 'I', '-', 'ae6e7769-2db6-4648-8e56-9c8cf47ccb2b', 'f7fc7888-a1f8-4fd5-9e03-74fd1dcfcba2', '2023-02-18 16:07:31', '2023-02-18 16:07:31'),
('e4d14986-1477-4b4f-8886-8982649222fe', 'e8175088-c611-47bc-beb9-1a22d9773482', 'III', '-', 'f22f0365-2905-407e-a157-8def7177b1e8', 'a1bf80ba-53cf-4b68-a00b-3f40d76423d0', '2023-02-19 02:06:16', '2023-02-19 02:06:16'),
('e522aafc-f94a-4903-806f-80fe2d0f330b', '00a6ffeb-739f-4542-a906-3892a3ffba04', 'I', '-', 'c25f33a9-ae05-414f-a91b-77740a3ad0fa', '242f3517-6404-4c33-a290-3f34f713ac20', '2023-02-18 23:25:29', '2023-02-18 23:25:29');

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

--
-- Dumping data for table `nilai_tunggal`
--

INSERT INTO `nilai_tunggal` (`id`, `id_jadwal`, `id_peserta`, `id_juri`, `nama_juri`, `jurus1`, `jurus2`, `jurus3`, `jurus4`, `jurus5`, `jurus6`, `jurus7`, `jurus8`, `jurus9`, `jurus10`, `jurus11`, `jurus12`, `jurus13`, `jurus14`, `skor_a`, `skor_b`, `total_skor`, `dis`, `createdAt`, `updatedAt`) VALUES
('0506b523-9038-4626-a728-1bd38100e2c4', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('05c06423-f3d7-4fd3-98a7-0a040c2a4ad5', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:29:15', '2023-02-18 14:29:15'),
('09c256b7-3e26-4f4a-9515-e7672e8ac4eb', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('0db94b72-ac06-4273-b242-4bcaf82c178e', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:27:35', '2023-02-18 14:27:35'),
('194d960f-293f-46ed-ba6a-744d7bde1f2c', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('1c80c815-93cf-4411-a940-dfd9a6147714', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:29:15', '2023-02-18 14:29:15'),
('1ecbe38d-4a9f-4464-9bad-389af3a2d053', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:27:35', '2023-02-18 14:27:35'),
('2da235ee-ae48-4fbd-b19c-cba2fa88a81f', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', 'Ngunardi', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:31:45', '2023-02-18 14:31:45'),
('342da6c1-3776-4af0-868c-fc1ecaec247f', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:26:55', '2023-02-18 17:26:55'),
('3dc141b5-0616-40a3-8c98-86e30124529f', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:26:55', '2023-02-18 17:26:55'),
('4e7a0932-eae7-45ab-b200-2565564a59a0', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:26:55', '2023-02-18 17:26:55'),
('4ebc7986-25b8-4c12-b03b-1a8f04115a12', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('50cd0e4a-2912-40f1-ac1f-89eccba2c44d', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('658e11a3-47c1-43bd-9804-0b0e2b8dbe41', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('6da0c855-bad2-4b12-aefe-4f8383f9e6ab', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:29:15', '2023-02-18 14:29:15'),
('708b01e6-4731-427e-ba8a-8c2e3f209c34', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:27:35', '2023-02-18 14:27:35'),
('7adb0ca2-39f9-47a0-a70f-647eaa432ed0', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('7bfbca98-7445-4aef-b5c6-762d52ea2bfa', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:29:15', '2023-02-18 14:29:15'),
('8987e2b6-e7ee-42dd-a8c0-e67e0a4ac53b', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:26:55', '2023-02-18 17:26:55'),
('8b76bda8-83c4-4f0e-b89f-9f03d0e0922e', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('9a15b571-6a81-4c8e-aaae-6515fdf50505', 'ec620c66-312e-4e21-acd4-5507416c1786', 'c10b38d3-72cb-4767-88db-b5352e40979b', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 11:03:31', '2023-02-16 11:03:31'),
('a05b77f9-2fe3-4ec5-9e6c-e29904ce3e69', 'da541310-b5e2-49f6-b8c6-400d48f7182f', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 11:11:05', '2023-02-16 11:11:05'),
('a0fa1d06-8ddf-40ee-bb70-26ba10bb9760', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:26:55', '2023-02-18 17:26:55'),
('a4194206-4979-4246-9ee9-0e8df21cabae', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', 'ca1d1be4-d4f3-40d1-abc2-0ad66c76ee24', 'Sabnga', -0.01, -0.01, -0.02, -0.01, -0.01, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 9.72, 0.05, 9.770000000000001, 0, '2023-02-18 14:23:29', '2023-02-18 16:16:28'),
('a43855d5-82fa-4f8d-b10d-f9a57b399205', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:23:29', '2023-02-18 14:23:29'),
('a50dbc76-04cb-4c45-b130-0d9a306ffb36', 'ec620c66-312e-4e21-acd4-5507416c1786', '8a723ebc-3b3a-49f4-a5cb-a4e634371541', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 04:51:33', '2023-02-18 04:51:33'),
('a5d5f435-86d7-4d0f-90a4-22415392a915', 'da541310-b5e2-49f6-b8c6-400d48f7182f', 'b451c395-3748-43ce-93ff-167036227088', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 15:21:12', '2023-02-16 15:21:12'),
('a72942cc-c901-442d-acf8-58dbfd8b719a', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:23:29', '2023-02-18 14:23:29'),
('a774a0a9-da76-4574-87e8-179ebb67ee17', '81bb7b24-001b-4240-990e-703b823b98ef', 'b451c395-3748-43ce-93ff-167036227088', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 09:01:27', '2023-02-18 09:01:27'),
('a77bb622-74ff-4e8c-87d7-9523b1f8e76e', 'ec620c66-312e-4e21-acd4-5507416c1786', '8a723ebc-3b3a-49f4-a5cb-a4e634371541', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 04:51:33', '2023-02-18 04:51:33'),
('a9b24fd0-09c0-46fe-9a11-f5708fd98bf1', 'da541310-b5e2-49f6-b8c6-400d48f7182f', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 11:11:05', '2023-02-16 11:11:05'),
('afa05ebf-ef80-46b1-8526-f930721f6d25', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:26:58', '2023-02-18 14:26:58'),
('b51151c3-5079-42f9-baa8-f1b96cf575d7', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, -0.02, -0.060000000000000005, -0.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.790000000000001, 0.06, 9.850000000000001, 0, '2023-02-18 14:23:29', '2023-02-18 18:37:19'),
('b9682a94-24e2-407b-8a83-ce669e1d4cef', '81bb7b24-001b-4240-990e-703b823b98ef', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 08:57:37', '2023-02-18 08:57:37'),
('b983ffa4-bd97-4ec3-bb42-108a54f4d442', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:29:15', '2023-02-18 14:29:15'),
('bb30577b-302a-4e44-9655-530ea0f50348', 'ec620c66-312e-4e21-acd4-5507416c1786', '8a723ebc-3b3a-49f4-a5cb-a4e634371541', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 04:51:33', '2023-02-18 04:51:33'),
('bb7a4995-a8d6-4d46-92df-556088edfc7c', 'da541310-b5e2-49f6-b8c6-400d48f7182f', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', '267e4c27-7f95-4e30-988d-136053097177', 'Qomsa', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 11:11:05', '2023-02-17 11:19:22'),
('bbc421b0-2b79-454f-b458-587c3788645d', 'da541310-b5e2-49f6-b8c6-400d48f7182f', 'b451c395-3748-43ce-93ff-167036227088', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 15:21:12', '2023-02-16 15:21:12'),
('bc5bcadf-d88c-4763-bfa4-817e845bb202', 'ec620c66-312e-4e21-acd4-5507416c1786', 'c10b38d3-72cb-4767-88db-b5352e40979b', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 11:03:30', '2023-02-16 11:03:30'),
('c065d7fc-789c-4989-9b89-02ced83985de', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:26:58', '2023-02-18 14:26:58'),
('c260d965-7b5e-49f8-b402-812e315e9420', 'da541310-b5e2-49f6-b8c6-400d48f7182f', 'b451c395-3748-43ce-93ff-167036227088', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 15:21:12', '2023-02-16 15:21:12'),
('c9033102-7cff-4cb7-8078-b55644c18498', 'da541310-b5e2-49f6-b8c6-400d48f7182f', 'b451c395-3748-43ce-93ff-167036227088', 'ea88dd97-68f0-4779-9a87-93c8353070b8', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 15:21:12', '2023-02-16 15:21:12'),
('c93eea27-469f-4f8a-a2ee-cce0c37c9411', 'da541310-b5e2-49f6-b8c6-400d48f7182f', 'b451c395-3748-43ce-93ff-167036227088', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 15:21:12', '2023-02-16 15:21:12'),
('c9e97de2-ff87-414c-9b70-a0e8d071cfb8', 'ec620c66-312e-4e21-acd4-5507416c1786', '8a723ebc-3b3a-49f4-a5cb-a4e634371541', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 04:51:33', '2023-02-18 04:51:33'),
('cb0edf8c-bbf0-4c95-b0f1-569dde7686bb', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:26:58', '2023-02-18 14:26:58'),
('cd64ac7a-a30c-4f5f-971a-aa2f4df7862a', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:26:58', '2023-02-18 14:26:58'),
('d1816d38-7bfe-44f0-9b3e-0ac0be075161', '81bb7b24-001b-4240-990e-703b823b98ef', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 08:57:37', '2023-02-18 08:57:37'),
('d2d574a9-89ad-40ec-9f81-21aed402f51a', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('d96e57c5-ec21-4ec1-8715-339997e80236', '81bb7b24-001b-4240-990e-703b823b98ef', 'b451c395-3748-43ce-93ff-167036227088', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 09:01:27', '2023-02-18 09:01:27'),
('daa4312e-fa13-4211-b465-28aec1b83df6', '81bb7b24-001b-4240-990e-703b823b98ef', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 08:57:37', '2023-02-18 08:57:37'),
('dce50684-07f4-414f-a743-1dbce1529485', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:23:52', '2023-02-18 14:23:52'),
('dd9116e6-9734-4279-9d9b-87dbe0df41d2', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 17:24:15', '2023-02-18 17:24:15'),
('de90141a-1392-475f-bd43-28ad3394fab6', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:27:35', '2023-02-18 14:27:35'),
('dffc5cc3-4a96-40d9-b3a2-d40a9199d7be', 'da541310-b5e2-49f6-b8c6-400d48f7182f', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 11:11:05', '2023-02-16 11:11:05'),
('e0dfba0d-a763-484c-9eed-8a095090a8f9', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:23:52', '2023-02-18 14:23:52'),
('e30f10bb-d5d9-4c8a-9e59-ae50da33f660', '81bb7b24-001b-4240-990e-703b823b98ef', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 08:57:37', '2023-02-18 08:57:37'),
('e51a05eb-865a-4e0a-903b-0c981291a3b5', 'da541310-b5e2-49f6-b8c6-400d48f7182f', 'b451c395-3748-43ce-93ff-167036227088', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 15:21:12', '2023-02-16 15:21:12'),
('e5aeb7d4-0e5b-4be5-bf4f-f037782d7953', '81bb7b24-001b-4240-990e-703b823b98ef', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 08:57:37', '2023-02-18 08:57:37'),
('e7210f68-940d-4abb-9ec5-e0ad6cfa9ecd', 'da541310-b5e2-49f6-b8c6-400d48f7182f', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', '8133ada3-bcf7-4231-9687-be44045f422c', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 11:11:05', '2023-02-16 11:11:05'),
('e7f91a27-f2d5-4970-902e-7d0a09a972ec', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', 'c44b3c08-61b7-4b90-9a78-6549079a49f1', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:27:35', '2023-02-18 14:27:35'),
('eb073423-5097-4497-99c0-ceda678c01d0', 'ec620c66-312e-4e21-acd4-5507416c1786', '8a723ebc-3b3a-49f4-a5cb-a4e634371541', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 04:51:33', '2023-02-18 04:51:33'),
('eb66fd6c-5b8b-4fd1-a606-9483cfa9f405', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:23:52', '2023-02-18 14:23:52'),
('f559be1f-47b5-41be-835a-08c3a2e15812', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', '68ec5cc6-5452-452f-9163-8a6ddc14afd0', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:29:15', '2023-02-18 14:29:15'),
('fd43e917-05ff-4759-aef8-e799e9d62b81', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', '267e4c27-7f95-4e30-988d-136053097177', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:29:15', '2023-02-18 14:29:15'),
('fda727f9-7643-41b9-9452-f67cbbae57f7', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', 'b3796607-f868-46c7-ae43-a3440cb4ad61', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:26:58', '2023-02-18 14:26:58'),
('fdd23ea6-9853-4277-b861-009591760fed', '81bb7b24-001b-4240-990e-703b823b98ef', 'b451c395-3748-43ce-93ff-167036227088', 'ba3b0693-22fd-4df5-beec-7c8bd4d41662', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 09:01:27', '2023-02-18 09:01:27'),
('ff511ecd-f68a-45d9-b454-06734ac5af91', '09f762fd-4293-4d68-a897-4b5f902ca92a', '21af2c72-fd9e-49f3-9ece-3bfeaf57db07', '14ebde37-f4c7-485d-bba8-663e0953f6ca', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-18 14:23:29', '2023-02-18 14:23:29'),
('fff3332e-5cfa-41aa-b3d0-41df837bfe71', 'ec620c66-312e-4e21-acd4-5507416c1786', 'c10b38d3-72cb-4767-88db-b5352e40979b', '5869ba11-8de0-44f2-9a1a-728dcf6baf96', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9, 0, 9.9, 0, '2023-02-16 11:03:30', '2023-02-16 11:03:30');

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

--
-- Dumping data for table `peserta_seni`
--

INSERT INTO `peserta_seni` (`id`, `kategori`, `gelanggang`, `pool`, `jk`, `kelas`, `nama1`, `nama2`, `nama3`, `kontingen`, `gugur`, `createdAt`, `updatedAt`) VALUES
('0ddfc3fd-4827-45cd-b98a-75723eb759d3', 'ganda', NULL, NULL, 'PUTRA', 'DEWASA', 'RAMA', 'FIRMAN', NULL, 'MALANG', 0, '2023-02-18 13:39:11', '2023-02-18 13:39:11'),
('102e5c52-3941-4397-a6bd-f06e52be07f3', 'regu', NULL, NULL, 'PUTRA', 'REMAJA', 'RAFI', 'ZADIT', 'RIZKY', 'MALANG', 0, '2023-02-18 13:11:04', '2023-02-18 13:11:04'),
('21af2c72-fd9e-49f3-9ece-3bfeaf57db07', 'tunggal', NULL, NULL, 'PUTRA', 'REMAJA', 'YOGA PRATAMA', NULL, NULL, 'JOMBANG', 0, '2023-02-18 13:13:31', '2023-02-18 13:13:31'),
('3495184e-e4fc-4139-8317-2371d3e8a16a', 'ganda', NULL, NULL, 'PUTRI', 'REMAJA', 'Mutikah', 'Jumirah', NULL, 'Jakarta', 0, '2023-02-16 10:37:55', '2023-02-16 10:37:55'),
('37c841aa-dca1-4a63-9734-d53b6d069041', 'ganda', NULL, NULL, 'PUTRI', 'REMAJA', 'Sari', 'Suti', NULL, 'Surabaya', 0, '2023-02-16 10:38:53', '2023-02-16 10:38:53'),
('3f408374-42f5-430a-af91-233246314a51', 'tunggal', NULL, NULL, 'PUTRA', 'REMAJA', 'NARENDA', NULL, NULL, 'BLITAR', 0, '2023-02-18 13:34:20', '2023-02-18 13:34:20'),
('402af48f-cedb-4fc5-9380-7752a24b2795', 'solo_kreatif', NULL, NULL, 'PUTRI', 'REMAJA', 'Nahida', NULL, NULL, 'Sumeru', 0, '2023-02-16 10:47:03', '2023-02-16 10:47:03'),
('47b5ad6e-0869-4517-9b77-52a112a48567', 'solo_kreatif', NULL, NULL, 'PUTRA', 'REMAJA', 'FADIL', NULL, NULL, 'SURABAYA', 0, '2023-02-18 13:09:42', '2023-02-18 13:09:42'),
('4a68566a-9424-49c9-8e3f-2f8980933e4e', 'regu', NULL, NULL, 'PUTRA', 'REMAJA', 'RAMA', 'RANGGA', 'GILANG', 'SURABAYA', 0, '2023-02-18 13:35:24', '2023-02-18 13:35:24'),
('4fda32a3-a2bc-4e1c-b08a-1cb49c547c87', 'regu', NULL, NULL, 'PUTRI', 'REMAJA', 'Titin', 'Silpi', 'Lupi', 'Jabar', 0, '2023-02-16 10:43:30', '2023-02-16 10:43:30'),
('5526e425-90c5-4e59-97a9-2cb5cc0684ac', 'solo_kreatif', NULL, NULL, 'PUTRA', 'REMAJA', 'REHAN', NULL, NULL, 'KEDIRI', 0, '2023-02-18 13:09:30', '2023-02-18 13:09:30'),
('5e906988-e979-416e-91c7-129984b622e5', 'regu', NULL, NULL, 'PUTRA', 'REMAJA', 'GALANG', 'BUDI', 'FIRMAN', 'MALANG', 0, '2023-02-18 13:35:59', '2023-02-18 13:35:59'),
('601d9914-a18a-4e3a-bdbb-ca96e48cb497', 'tunggal', NULL, NULL, 'PUTRA', 'REMAJA', 'WAHYU', NULL, NULL, 'MALANG', 0, '2023-02-18 13:34:35', '2023-02-18 13:34:35'),
('67ab2410-0b83-44c6-ae09-cacbc81d8b83', 'regu', NULL, NULL, 'PUTRA', 'REMAJA', 'Beta', 'Kaka', 'Coo', 'Papua', 0, '2023-02-16 10:42:26', '2023-02-16 10:42:26'),
('6d815157-d895-4fe2-8b1b-05dff71ab888', 'regu', NULL, NULL, 'PUTRA', 'REMAJA', 'Yanto', 'Sarji', 'Agus', 'Jawa', 0, '2023-02-16 10:42:02', '2023-02-16 10:42:02'),
('6e214497-b03d-47c4-8093-47998a45204b', 'ganda', NULL, NULL, 'PUTRA', 'DEWASA', 'NARENDA', 'GILANG', NULL, 'SURABAYA', 0, '2023-02-18 13:38:46', '2023-02-18 13:38:46'),
('709a1fc2-e7cc-4b68-8fc5-53646d9e662b', 'tunggal', NULL, NULL, 'PUTRA', 'USIA DINI', 'Stevan Dean Achmad Ngunardi Stevan Dean Achmad Ngunardi', NULL, NULL, 'Telkom', 0, '2023-02-17 10:42:08', '2023-02-17 10:42:08'),
('74ba9f3c-7166-4d78-8a33-3b1d05039637', 'ganda', NULL, NULL, 'PUTRA', 'REMAJA', 'SUKIRNO', 'FIRDAN', NULL, 'TRENGGALEK', 0, '2023-02-16 10:37:06', '2023-02-18 13:40:30'),
('8a723ebc-3b3a-49f4-a5cb-a4e634371541', 'tunggal', NULL, NULL, 'PUTRI', 'REMAJA', 'Fatimah', NULL, NULL, 'Makkah', 0, '2023-02-16 10:34:09', '2023-02-16 10:34:09'),
('8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', 'tunggal', NULL, NULL, 'PUTRA', 'REMAJA', 'Walid', NULL, NULL, 'Madinah', 0, '2023-02-16 10:33:35', '2023-02-16 10:33:35'),
('960a69f3-149b-449c-89c5-35b310f7e192', 'solo_kreatif', NULL, NULL, 'PUTRA', 'REMAJA', 'Albedo', NULL, NULL, 'Monstad', 0, '2023-02-16 10:46:40', '2023-02-16 10:46:40'),
('b2d2af33-48cd-411f-8eca-0355d5c5c6da', 'tunggal', NULL, NULL, 'PUTRA', 'REMAJA', 'Stevan Dean Achmad Ngunardi', NULL, NULL, 'TRENGGALEK', 0, '2023-02-17 10:41:51', '2023-02-18 13:04:54'),
('b451c395-3748-43ce-93ff-167036227088', 'tunggal', NULL, NULL, 'PUTRA', 'REMAJA', 'Khalid', NULL, NULL, 'Makkah', 0, '2023-02-16 10:33:22', '2023-02-16 10:33:22'),
('be2ee94d-6a5a-438d-99e2-a59732ffefe7', 'solo_kreatif', NULL, NULL, 'PUTRA', 'REMAJA', 'Alhaitam', NULL, NULL, 'Sumeru', 0, '2023-02-16 10:46:52', '2023-02-16 10:46:52'),
('c10b38d3-72cb-4767-88db-b5352e40979b', 'tunggal', NULL, NULL, 'PUTRI', 'REMAJA', 'Aisyah', NULL, NULL, 'Madinah', 0, '2023-02-16 10:34:19', '2023-02-16 10:34:19'),
('cf53c517-7b09-4e6c-b29a-f34af6ffb4ec', 'solo_kreatif', NULL, NULL, 'PUTRI', 'REMAJA', 'Raiden', NULL, NULL, 'Inazuma', 0, '2023-02-16 10:47:41', '2023-02-16 10:47:41'),
('d3e5b81d-1336-4661-a9b5-899e5e4a2e4a', 'tunggal', NULL, NULL, 'PUTRA', 'REMAJA', 'RAZAQ FARHAN', NULL, NULL, 'KEDIRI', 0, '2023-02-18 13:03:00', '2023-02-18 13:05:32'),
('d951e2a9-3b7f-4857-8e47-4cccd950bbad', 'ganda', NULL, NULL, 'PUTRA', 'REMAJA', 'JOKO', 'ZAIDAN', NULL, 'BLITAR', 0, '2023-02-16 10:37:25', '2023-02-18 13:40:49'),
('dab5895c-6847-4697-98ff-b7c3ffe0c4f7', 'regu', NULL, NULL, 'PUTRA', 'REMAJA', 'RAFLI', 'EKA', 'DENIS', 'SURABAYA', 0, '2023-02-18 13:11:29', '2023-02-18 13:11:29'),
('ff7214b5-165c-4276-bc88-86ecc70be6e7', 'regu', NULL, NULL, 'PUTRI', 'REMAJA', 'Damirah', 'Sukijah', 'Samirah', 'Jatim', 0, '2023-02-16 10:42:49', '2023-02-16 10:42:49');

-- --------------------------------------------------------

--
-- Table structure for table `peserta_tanding`
--

CREATE TABLE `peserta_tanding` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `kelas` varchar(255) DEFAULT NULL,
  `jk` enum('PUTRA','PUTRI') DEFAULT NULL,
  `golongan` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `kontingen` varchar(255) DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `umur` int(11) DEFAULT NULL,
  `tinggi_badan` int(11) DEFAULT NULL,
  `berat_badan` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `peserta_tanding`
--

INSERT INTO `peserta_tanding` (`id`, `kelas`, `jk`, `golongan`, `nama`, `kontingen`, `kota`, `umur`, `tinggi_badan`, `berat_badan`, `createdAt`, `updatedAt`) VALUES
('03b3dbd6-335c-4592-9876-1b3de5e3b04d', 'A', 'PUTRA', 'REMAJA', 'MUHAMMAD ALI FIRDAUS', 'TRENGGALEK', NULL, NULL, NULL, NULL, '2023-02-17 10:41:19', '2023-02-17 10:42:31'),
('1f1d934d-d319-41cb-9a90-886af3e1735b', 'A', 'PUTRA', 'DEWASA', 'RENDY', 'SIDOARJO', NULL, NULL, NULL, NULL, '2023-02-18 13:32:58', '2023-02-18 13:32:58'),
('218a2930-ce64-407f-bfcb-b68ef57d673c', 'B', 'PUTRI', 'DEWASA', 'KHADIJAH', 'ARAB', NULL, NULL, NULL, NULL, '2023-02-16 04:31:43', '2023-02-16 04:31:43'),
('5275eb02-8df3-441c-a6f8-d4169d029c36', 'C', 'PUTRI', 'USIA DINI', 'FARUZAN', 'SUMERU', NULL, NULL, NULL, NULL, '2023-02-17 11:02:15', '2023-02-17 11:02:15'),
('5e1794f3-d234-43c0-b316-c485e43a8fa8', 'A', 'PUTRA', 'REMAJA', 'Alfian', 'Malang', NULL, NULL, NULL, NULL, '2023-02-13 11:21:10', '2023-02-13 11:21:10'),
('66bba55c-2b49-4584-abe9-3a8dcfac11e6', 'A', 'PUTRA', 'REMAJA', 'Rafli', 'Kediri', NULL, NULL, NULL, NULL, '2023-02-13 11:21:41', '2023-02-13 11:21:41'),
('6c5004f3-9f18-4e29-804e-8588141fff96', 'A', 'PUTRA', 'REMAJA', 'ABU BAKAR', 'MAKKAH', NULL, NULL, NULL, NULL, '2023-02-17 17:19:01', '2023-02-17 17:19:01'),
('8173b540-b3d6-4582-926e-aa12805842f1', 'A', 'PUTRA', 'REMAJA', 'ZAKI', 'KEDIRI', NULL, NULL, NULL, NULL, '2023-02-18 13:30:51', '2023-02-18 13:30:51'),
('9e9eb864-5a77-434c-aa7c-6009329179bc', 'A', 'PUTRA', 'DEWASA', 'RAMA', 'BANYUWANGI', NULL, NULL, NULL, NULL, '2023-02-18 13:33:29', '2023-02-18 13:33:29'),
('ae5c832e-5adb-4dde-a728-04278993ca2b', 'A', 'PUTRA', 'MASTER B', 'KAEYA', 'CRYO', NULL, NULL, NULL, NULL, '2023-02-17 08:27:37', '2023-02-17 08:27:37'),
('bc1d7c75-808f-4b8d-ad99-4f0ee70b86c5', 'A', 'PUTRA', 'DEWASA', 'HENDRA', 'KEDIRI', NULL, NULL, NULL, NULL, '2023-02-18 13:37:30', '2023-02-18 13:37:30'),
('bd5ca616-06fe-4324-b9a9-fe6b72acd1e3', 'A', 'PUTRA', 'REMAJA', 'MUHAMMAD JAMIL FAQIH', 'SURABAYA', NULL, NULL, NULL, NULL, '2023-02-17 10:41:43', '2023-02-17 10:41:43'),
('db5eb62b-3118-4d2b-87c2-cef4dc353196', 'A', 'PUTRA', 'MASTER B', 'DILUC', 'PYRO', NULL, NULL, NULL, NULL, '2023-02-17 08:27:54', '2023-02-17 08:27:54'),
('e4052bd0-c66d-4455-8af5-f5eea9c4ab5f', 'A', 'PUTRA', 'REMAJA', 'JOKO', 'BLITAR', NULL, NULL, NULL, NULL, '2023-02-18 13:30:32', '2023-02-18 13:31:55'),
('e98a8037-7ab1-46e3-b1ad-3a9e1104eeab', 'A', 'PUTRA', 'REMAJA', 'USMAN', 'MADINAH', NULL, NULL, NULL, NULL, '2023-02-17 17:19:19', '2023-02-17 17:19:19'),
('eea2a10c-a638-4142-ab70-64605c8960b3', 'C', 'PUTRI', 'USIA DINI', 'KOKOMI', 'INAZUMA', NULL, NULL, NULL, NULL, '2023-02-17 11:01:14', '2023-02-17 11:01:14'),
('f8a83b5c-6dfc-4f94-8d16-ec90076ebf2b', 'A', 'PUTRA', 'DEWASA', 'AGUS', 'MALANG', NULL, NULL, NULL, NULL, '2023-02-18 13:37:07', '2023-02-18 13:37:07');

-- --------------------------------------------------------

--
-- Table structure for table `poin`
--

CREATE TABLE `poin` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_peserta` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `poin_masuk` int(11) DEFAULT NULL,
  `jatuhan` int(11) DEFAULT NULL,
  `total_hukum` int(11) DEFAULT NULL,
  `total_poin` int(11) DEFAULT NULL,
  `dis` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `poin`
--

INSERT INTO `poin` (`id`, `id_peserta`, `poin_masuk`, `jatuhan`, `total_hukum`, `total_poin`, `dis`, `createdAt`, `updatedAt`) VALUES
('01b34f3f-7c36-415f-b53e-9558d58486fb', NULL, 2, 0, 0, 2, 0, '2023-02-17 10:55:10', '2023-02-17 15:36:28'),
('07580241-4f5b-41a4-843a-b60ba4ddde65', NULL, 0, 0, 0, 0, 0, '2023-02-18 22:28:29', '2023-02-18 22:28:29'),
('0b28fc97-aa50-494e-af08-0118511faa33', NULL, 1, 0, 0, 1, 0, '2023-02-18 13:03:23', '2023-02-18 13:07:25'),
('0ed526f6-7609-4c4e-bba8-ae60f6895496', NULL, 0, 0, 0, 0, 0, '2023-02-17 17:29:24', '2023-02-17 17:29:24'),
('12961967-e36d-400a-86ed-880cb828974e', NULL, 18, 0, 0, 18, 0, '2023-02-13 14:31:55', '2023-02-18 11:04:50'),
('1804d996-8afa-4e5e-8404-03b6e6cbca50', NULL, 0, 0, 0, 0, 0, '2023-02-13 17:58:57', '2023-02-16 16:58:17'),
('1a647be1-b7cf-46d8-8b00-34f97bf80cc5', NULL, 8, 15, -1, 22, 0, '2023-02-18 16:20:08', '2023-02-18 23:04:24'),
('218f4bf6-d173-40f7-8b78-214852e88a9d', NULL, 0, 0, 0, 0, 0, '2023-02-15 09:36:19', '2023-02-15 09:36:19'),
('22f50921-b796-4805-b3f3-5776ee7ab13d', NULL, 0, 3, -16, -13, 0, '2023-02-18 03:27:04', '2023-02-18 04:09:38'),
('23017696-9890-4f12-a186-78bf49c017b7', NULL, 2, 3, -18, -13, 0, '2023-02-18 03:05:25', '2023-02-18 11:06:11'),
('242f3517-6404-4c33-a290-3f34f713ac20', NULL, 49, 0, 0, 49, 0, '2023-02-18 23:25:28', '2023-02-18 23:56:22'),
('260ed6d5-0e0e-4d31-beaa-bc4f74540515', NULL, 0, 0, 0, 0, 0, '2023-02-17 09:08:15', '2023-02-17 09:08:15'),
('2ac8ccf6-65f9-492a-9b1e-d2e5d56c9404', NULL, 0, 0, 0, 0, 0, '2023-02-17 17:52:47', '2023-02-17 17:52:47'),
('2beb5517-a52b-4fd8-bb3f-0e8b1322715c', NULL, 5, 0, 0, 5, 0, '2023-02-18 03:01:50', '2023-02-18 11:53:11'),
('2dfd427a-3311-4fa9-914b-ded8cf9d0bd9', NULL, 2, 9, -18, -7, 1, '2023-02-18 13:03:23', '2023-02-18 14:06:56'),
('2e581ab3-33bf-4efc-9095-cc06a4f6a412', NULL, 0, 0, -15, -15, 1, '2023-02-18 05:50:01', '2023-02-18 05:52:57'),
('30c723d4-5fbe-4d0c-baef-951b5e4663ae', NULL, 0, 0, 0, 0, 0, '2023-02-15 15:31:41', '2023-02-15 15:31:41'),
('33feea7b-eed7-4b56-83e5-cae2b11e4b80', NULL, 0, 0, 0, 0, 0, '2023-02-13 16:24:19', '2023-02-13 16:24:19'),
('36466daa-749b-4acf-bf81-14d5f68dafe9', NULL, 0, 0, 0, 0, 0, '2023-02-18 14:09:42', '2023-02-18 14:09:42'),
('36898fc0-307f-4bb7-b435-81ffd8907a63', NULL, 0, 0, 0, 0, 0, '2023-02-17 15:43:10', '2023-02-17 15:43:10'),
('385e039f-ad8a-4333-a0c8-e4eea2bf0796', NULL, 0, 0, 0, 0, 0, '2023-02-17 11:04:07', '2023-02-17 11:04:07'),
('3a7872b3-5108-473b-8784-4c28f68bec1f', NULL, 7, 0, 0, 7, 0, '2023-02-17 18:07:03', '2023-02-17 18:12:55'),
('47133381-24c0-4053-ab4a-c8e088d64a13', NULL, 3, 0, 0, 3, 0, '2023-02-17 18:07:03', '2023-02-17 18:08:44'),
('4a7cf548-a5cd-418b-ae6b-d13e92fb6ba8', NULL, 0, 0, 0, 0, 0, '2023-02-13 16:24:21', '2023-02-13 16:24:21'),
('4c6c179a-088f-4f5e-b7c8-484305d17046', NULL, 0, 0, 0, 0, 0, '2023-02-17 17:33:32', '2023-02-17 17:33:32'),
('4df42d64-4891-4134-a3bc-e51b7f82f06a', NULL, 0, 0, -15, -15, 1, '2023-02-18 05:19:36', '2023-02-18 05:43:00'),
('4f1fe5ea-4b5a-4960-9919-206c9afc5c42', NULL, 3, 12, -12, 3, 0, '2023-02-16 04:34:59', '2023-02-17 08:41:59'),
('52fb59d1-db83-4c85-baad-00c9a651200a', NULL, 0, 0, -1, -1, 0, '2023-02-13 16:24:19', '2023-02-16 14:54:04'),
('549299eb-6474-48de-916a-0cdc9b2d3169', NULL, 0, 0, 0, 0, 0, '2023-02-18 01:52:35', '2023-02-18 01:52:35'),
('54d1163c-84b1-40b5-92dc-4fc7095ccf6e', NULL, 0, 0, 0, 0, 0, '2023-02-13 16:24:21', '2023-02-13 16:24:21'),
('56117f31-594a-4449-9747-8602007de2a1', NULL, 19, 0, 0, 19, 0, '2023-02-18 06:04:09', '2023-02-18 11:40:24'),
('64432d19-14b8-494e-ad87-4735f80d09d4', NULL, 2, 0, -5, -3, 0, '2023-02-18 03:01:50', '2023-02-18 11:53:26'),
('64915d7e-5d36-4ad2-b8dc-ab2881e9e191', NULL, 0, 0, 0, 0, 0, '2023-02-18 05:50:01', '2023-02-18 05:50:01'),
('64b0df86-df0f-479e-a23e-ecd1ef4675c2', NULL, 0, 3, -6, -3, 0, '2023-02-19 00:03:44', '2023-02-19 03:28:10'),
('658dc32c-cbcf-43de-9c44-801229f48b41', NULL, 0, 0, 0, 0, 0, '2023-02-17 09:08:15', '2023-02-17 09:08:15'),
('660494f5-e613-4200-9f77-b4a757f0e4a2', NULL, 0, 3, -1, 2, 0, '2023-02-15 15:53:49', '2023-02-17 02:26:35'),
('661ccb27-9af4-418a-95d0-082e0fc13942', NULL, 0, 0, 0, 0, 0, '2023-02-18 22:28:06', '2023-02-18 22:28:06'),
('67c9944d-c194-489d-bfb5-db9251ccc839', NULL, 0, 3, 0, 3, 0, '2023-02-15 15:53:49', '2023-02-17 02:26:36'),
('6ae28c31-bbe5-43b7-92dc-124ec0ced1c8', NULL, 0, 0, 0, 0, 0, '2023-02-17 17:35:03', '2023-02-17 17:35:03'),
('6bffa22b-6342-4725-87c6-e38d2e36e221', NULL, 0, 0, 0, 0, 0, '2023-02-19 00:03:44', '2023-02-19 00:03:44'),
('70a58be0-3ab9-4282-8953-75336fa01d5b', NULL, 0, 0, 0, 0, 0, '2023-02-17 17:35:03', '2023-02-17 17:35:03'),
('71c0c22f-46e0-4eee-9253-30d99a398bdb', NULL, 0, 0, 0, 0, 0, '2023-02-17 08:19:24', '2023-02-17 08:19:24'),
('74941ab5-477c-421e-8e53-137c578dd926', NULL, 0, 0, 0, 0, 0, '2023-02-19 00:00:12', '2023-02-19 00:00:12'),
('7a742feb-29b1-4e78-a903-007cbf1b6822', NULL, 0, 3, -18, -15, 0, '2023-02-17 17:29:24', '2023-02-17 17:33:16'),
('7ac8033c-2c38-4ec2-b6a3-ccff46df5dec', NULL, 0, 0, 0, 0, 0, '2023-02-18 14:18:39', '2023-02-18 14:18:39'),
('7cd69cc7-0cc2-4e50-8991-c61c8ac2ce78', NULL, 9, 0, 0, 9, 0, '2023-02-17 09:08:17', '2023-02-17 15:09:01'),
('80a9945c-0536-4205-83e7-e13345add6bc', NULL, 0, 0, -15, -15, 1, '2023-02-18 05:19:36', '2023-02-18 05:44:46'),
('819a9105-4dab-48af-bf7a-e28b03c23689', NULL, 0, 0, 0, 0, 0, '2023-02-17 18:24:02', '2023-02-17 18:24:02'),
('86efdc67-49c3-49a1-a5c7-94ea90bdbb01', NULL, 7, 3, -18, -8, 1, '2023-02-18 16:20:08', '2023-02-18 22:52:14'),
('8a561ff3-9b77-43c1-8df5-126683f775e9', NULL, 0, 0, 0, 0, 0, '2023-02-19 01:28:24', '2023-02-19 01:28:24'),
('8d4acee4-6dd7-4dcd-82e5-4f29dec498ec', NULL, 3, 3, -10, -4, 0, '2023-02-16 04:34:59', '2023-02-17 08:42:12'),
('97b90bd0-f77c-447d-8577-9ab53aefb12c', NULL, 2, 0, 0, 2, 0, '2023-02-13 14:31:55', '2023-02-13 16:42:32'),
('9a4b38aa-9cdc-4a65-9f8f-bb8f307a8bd1', NULL, 0, 0, 0, 0, 0, '2023-02-17 18:24:16', '2023-02-17 18:24:16'),
('a0fdde8a-5968-47b1-b471-5dea6c6594b3', NULL, 0, 0, -15, -15, 0, '2023-02-17 10:55:10', '2023-02-17 15:33:03'),
('a1bf80ba-53cf-4b68-a00b-3f40d76423d0', NULL, 1, 0, 0, 1, 0, '2023-02-19 02:06:16', '2023-02-19 02:06:54'),
('a31a4d80-bc28-44d0-8afa-8af83a4e8b67', NULL, 0, 0, 0, 0, 0, '2023-02-17 08:29:51', '2023-02-17 08:29:51'),
('a5d10e67-6c4d-49e9-b9f1-401b540075b7', NULL, 0, 0, 0, 0, 0, '2023-02-19 00:00:12', '2023-02-19 00:00:12'),
('a98c250f-67c4-4a07-bc06-bc0b78476df7', NULL, 0, 0, 0, 0, 0, '2023-02-15 09:36:19', '2023-02-15 09:36:19'),
('ac258794-488d-4efa-990d-46e37b4b456c', NULL, 2, 3, -18, -13, 1, '2023-02-18 01:10:42', '2023-02-18 10:40:31'),
('ae3129f5-2f88-4c9f-9ad6-0a2954618c11', NULL, 0, 0, 0, 0, 0, '2023-02-17 08:33:19', '2023-02-17 08:33:19'),
('ae6e7769-2db6-4648-8e56-9c8cf47ccb2b', NULL, 0, 0, 0, 0, 0, '2023-02-18 16:07:30', '2023-02-18 16:07:30'),
('ae87917c-aeef-4a15-b22b-b48762a495e0', NULL, 0, 0, 0, 0, 0, '2023-02-18 14:18:49', '2023-02-18 14:18:49'),
('afbdd0d9-498c-4d3d-94fc-dc9af149dc23', NULL, 0, 0, 0, 0, 0, '2023-02-17 08:29:51', '2023-02-17 08:29:51'),
('b838c86c-6b0d-41e7-b063-0c494f9ffe58', NULL, 0, 0, 0, 0, 0, '2023-02-17 11:04:07', '2023-02-17 11:04:07'),
('b8f5bde5-e944-4695-bd32-96e71453506d', NULL, 11, 0, 0, 11, 0, '2023-02-18 06:04:09', '2023-02-18 11:24:59'),
('ba03567f-bf2d-4264-9238-157cf5661e0e', NULL, 0, 3, -6, -3, 0, '2023-02-18 03:27:04', '2023-02-18 04:09:24'),
('bb022cec-5ef3-4ed5-8485-63a32be82904', NULL, 0, 0, 0, 0, 0, '2023-02-17 08:33:19', '2023-02-17 08:33:19'),
('bb31ed4b-c961-45f5-bbe4-f5d210ecfb49', NULL, 0, 0, 0, 0, 0, '2023-02-17 09:08:47', '2023-02-17 09:08:47'),
('bc078b36-8d7b-451d-ad5d-d9ba6919d926', NULL, 0, 0, 0, 0, 0, '2023-02-18 08:39:07', '2023-02-18 08:39:07'),
('beac79b3-6425-4fe7-bca0-ad6661f6bfd0', NULL, 0, 0, 0, 0, 0, '2023-02-17 09:08:47', '2023-02-17 09:08:47'),
('beee7d78-28da-4068-b2de-6eb66568911d', NULL, 0, 0, 0, 0, 0, '2023-02-18 14:18:49', '2023-02-18 14:18:49'),
('c0d715e9-4f2b-4da1-a7d3-ac1c29d9700e', NULL, 0, 0, 0, 0, 0, '2023-02-17 18:22:58', '2023-02-17 18:22:58'),
('c25f33a9-ae05-414f-a91b-77740a3ad0fa', NULL, 22, 0, 0, 22, 0, '2023-02-18 23:25:28', '2023-02-18 23:55:58'),
('c30a4aae-3d1d-4752-afeb-c2134709c570', NULL, 0, 0, 0, 0, 0, '2023-02-15 15:31:41', '2023-02-15 15:31:41'),
('c35da050-7ec0-408d-9d98-92c8c0b2ffc5', NULL, 0, 0, 0, 0, 0, '2023-02-17 15:43:10', '2023-02-17 15:43:10'),
('c3d8d08d-a6ea-4c3f-a86c-2bab53eef09e', NULL, 0, 12, 0, 12, 0, '2023-02-17 08:46:40', '2023-02-17 09:11:49'),
('c7e486e9-9de2-436f-b267-787c70da3569', NULL, 0, 0, 0, 0, 0, '2023-02-18 22:28:06', '2023-02-18 22:28:06'),
('cb5db10d-0df4-4c99-ad5e-7b996e063e48', NULL, 0, 0, 0, 0, 0, '2023-02-18 22:28:29', '2023-02-18 22:28:29'),
('cbd22fa0-5496-4578-bca2-3bfabde8dbe3', NULL, 0, 0, 0, 0, 0, '2023-02-19 01:28:24', '2023-02-19 01:28:24'),
('cbf7ee76-006e-4330-83fc-8264f4111edd', NULL, 0, 0, 0, 0, 0, '2023-02-17 17:33:32', '2023-02-17 17:33:32'),
('cce3abff-d14a-40fe-b979-bb57762f9ccf', NULL, 0, 0, -5, -5, 0, '2023-02-18 14:09:42', '2023-02-18 14:13:19'),
('ce305368-6a97-4a81-8737-29ed91c74d25', NULL, 0, 0, 0, 0, 0, '2023-02-17 15:46:32', '2023-02-17 15:46:32'),
('d16a044f-69e2-4f7b-abc6-38dc2a201029', NULL, 0, 15, 0, 15, 0, '2023-02-17 08:46:40', '2023-02-17 09:11:52'),
('d2aee1f2-f397-47a2-a559-3cc9b17b96be', NULL, 0, 6, 0, 6, 0, '2023-02-17 00:52:18', '2023-02-17 02:01:52'),
('d3a16ebd-ad3d-4af7-a39e-cb7c68df1d2d', NULL, 12, 0, 0, 12, 0, '2023-02-19 01:28:37', '2023-02-19 02:01:09'),
('d6320a2f-e999-4576-a16c-52a864869434', NULL, 0, 0, 0, 0, 0, '2023-02-18 03:12:08', '2023-02-18 03:12:08'),
('dc4019c5-d958-4973-a20a-e67732ce9189', NULL, 8, 12, -8, 12, 0, '2023-02-18 01:10:42', '2023-02-18 10:41:25'),
('df0bbfb9-567d-441a-bf1c-e099d089ede5', NULL, 2, 3, -18, -13, 0, '2023-02-18 03:05:25', '2023-02-18 11:04:56'),
('e4de0313-d41e-48e1-bd2f-70375d7877df', NULL, 0, 0, 0, 0, 0, '2023-02-18 14:18:39', '2023-02-18 14:18:39'),
('e72d9cad-bf89-4fc5-902f-ae9fe933e27b', NULL, 5, 0, 0, 5, 0, '2023-02-19 01:28:37', '2023-02-19 02:03:35'),
('e76c33aa-c342-48ce-bd2b-fc2186c0db16', NULL, 0, 0, 0, 0, 0, '2023-02-17 15:46:32', '2023-02-17 15:46:32'),
('ec7d5c8f-fc81-432a-88a8-6b2e83c27238', NULL, 0, 0, 0, 0, 0, '2023-02-17 08:19:24', '2023-02-17 08:19:24'),
('ed152364-6449-41a4-9490-2fd0227b7a1a', NULL, 0, 0, 0, 0, 0, '2023-02-18 08:39:07', '2023-02-18 08:39:07'),
('f1c7cbbd-712f-4f22-8e8c-fdd922b85450', NULL, 0, 0, 0, 0, 0, '2023-02-18 01:52:35', '2023-02-18 01:52:35'),
('f22f0365-2905-407e-a157-8def7177b1e8', NULL, 0, 0, 0, 0, 0, '2023-02-19 02:06:15', '2023-02-19 02:06:15'),
('f26beda6-f713-48d5-b923-db6ba933ea3f', NULL, 0, 0, 0, 0, 0, '2023-02-17 17:52:47', '2023-02-17 17:52:47'),
('f6410e16-62a5-475e-8cad-4757ea79a0bd', NULL, 0, 24, 0, 24, 0, '2023-02-17 00:52:18', '2023-02-17 01:57:39'),
('f7fc7888-a1f8-4fd5-9e03-74fd1dcfcba2', NULL, 0, 0, 0, 0, 0, '2023-02-18 16:07:31', '2023-02-18 16:07:31'),
('f8a8526d-fad0-4355-bc19-afd05721adf7', NULL, 0, 0, 0, 0, 0, '2023-02-18 03:12:08', '2023-02-18 03:12:08'),
('fa5e32c4-6972-42c3-9365-8271db1bd1e8', NULL, 0, 0, 1, 1, 0, '2023-02-13 17:58:57', '2023-02-16 16:57:48'),
('feee44c5-4bb2-4c90-be62-4625caeebe01', NULL, 1, 0, 0, 1, 0, '2023-02-17 09:08:17', '2023-02-17 15:18:00');

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
('20221230134524-create-user.js'),
('20221230140633-create-juri.js'),
('20221230140734-create-nama-juri.js'),
('20221230150821-create-peserta-seni.js'),
('20221230150929-create-jadwal-tgr.js'),
('20230102060831-create-nilai-tunggal.js'),
('20230102061132-create-nilai-ganda.js'),
('20230102061205-create-nilai-regu.js'),
('20230105143344-create-hukum_tgr.js'),
('20230114082626-create-skor.js'),
('20230201051947-create-event.js'),
('20230207232615-create-peserta-tanding.js'),
('20230208011557-create-jadwal-tanding.js'),
('20230209165813-create-gelanggang.js'),
('20230210141345-create-poin.js'),
('20230210141547-create-nilai-tanding.js'),
('20230210170042-create-log-poin-juri-1.js'),
('20230211041411-create-log-poin-juri-2.js'),
('20230211041417-create-log-poin-juri-3.js'),
('20230211042201-create-log-poin-masuk.js'),
('20230211042801-create-log-jatuhan.js'),
('20230211043300-create-log-binaan.js'),
('20230211043315-create-log-teguran.js'),
('20230211043332-create-log-peringatan.js'),
('20230214064727-create-timer-seni.js'),
('20230215054533-create-timer-tanding.js'),
('20230216004653-create-verifikasi-juri.js'),
('20230216180821-create-log-pause-tanding.js');

-- --------------------------------------------------------

--
-- Table structure for table `skor`
--

CREATE TABLE `skor` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `id_peserta` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `waktu` varchar(255) NOT NULL DEFAULT '-',
  `median` double NOT NULL,
  `total_hukum` double NOT NULL,
  `skor_akhir` double DEFAULT NULL,
  `deviasi` double DEFAULT NULL,
  `selesai` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skor`
--

INSERT INTO `skor` (`id`, `id_jadwal`, `id_peserta`, `waktu`, `median`, `total_hukum`, `skor_akhir`, `deviasi`, `selesai`, `createdAt`, `updatedAt`) VALUES
('019fc72a-6395-4e43-b433-44d321f0533f', 'e913fc85-6993-4455-9660-70b3f972370b', 'ff7214b5-165c-4276-bc88-86ecc70be6e7', '-', 0, 0, 0, 0, 0, '2023-02-16 11:06:49', '2023-02-16 11:06:49'),
('0ebf9aac-277a-42d0-b88e-43050d6a9708', '09f762fd-4293-4d68-a897-4b5f902ca92a', 'd3e5b81d-1336-4661-a9b5-899e5e4a2e4a', '-', 0, 0, 0, 0, 0, '2023-02-18 14:23:52', '2023-02-18 16:45:47'),
('120423c2-ff78-49db-a551-3ace4713b748', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', '00:05', 0, 0, 0, 0, 0, '2023-02-16 16:38:10', '2023-02-18 09:03:55'),
('1619aa0b-55a6-45fc-a644-f4b2148375bd', 'cc415254-e4c1-4b22-b511-8a27a5fdbe5d', '4a68566a-9424-49c9-8e3f-2f8980933e4e', '-', 0, 0, 0, 0, 0, '2023-02-18 18:43:58', '2023-02-18 18:43:58'),
('1e07a18d-023f-4e7a-b9f1-72819f7df0f0', 'ec620c66-312e-4e21-acd4-5507416c1786', 'c10b38d3-72cb-4767-88db-b5352e40979b', '-', 0, 0, 0, 0, 0, '2023-02-16 11:03:31', '2023-02-16 11:03:31'),
('388838df-1977-439a-b04a-cbc31583b22d', 'dc4c41f7-cdd8-4bc4-a815-2abbe8af8fc4', '67ab2410-0b83-44c6-ae09-cacbc81d8b83', '-', 0, 0, 0, 0, 0, '2023-02-16 17:02:40', '2023-02-16 17:02:40'),
('3a09c567-762b-4833-93e5-3ea4c1d31190', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '601d9914-a18a-4e3a-bdbb-ca96e48cb497', '-', 9.9, 0, 8.4, 3.146426544510455, 1, '2023-02-18 17:24:15', '2023-02-18 18:04:35'),
('4e8f5d38-6510-469f-8754-e1673cdca592', '81bb7b24-001b-4240-990e-703b823b98ef', 'b451c395-3748-43ce-93ff-167036227088', '00:15', 0, 0, 0, 0, 0, '2023-02-18 09:01:27', '2023-02-18 09:03:16'),
('5f208766-aafa-4df9-b00a-37e5bf66c72d', 'dc4c41f7-cdd8-4bc4-a815-2abbe8af8fc4', '6d815157-d895-4fe2-8b1b-05dff71ab888', '-', 0, 0, 0, 0, 0, '2023-02-18 02:53:16', '2023-02-18 02:53:16'),
('60ce4e1f-0a96-4f0e-bfa9-1623193ca60f', '81bb7b24-001b-4240-990e-703b823b98ef', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', '00:08', 0, 0, 0, 0, 0, '2023-02-18 08:57:37', '2023-02-18 09:00:44'),
('661347bf-18a2-4fff-9e2c-275bc35e2a63', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '6e214497-b03d-47c4-8093-47998a45204b', '-', 0, 0, 0, 0, 0, '2023-02-18 19:16:05', '2023-02-18 19:16:05'),
('6a7a1c84-0daa-4d37-a900-f3735e0f81b8', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', 'dab5895c-6847-4697-98ff-b7c3ffe0c4f7', '-', 0, 0, 0, 0, 0, '2023-02-18 18:43:49', '2023-02-18 18:43:49'),
('742f1cda-d9a9-4ea7-8760-a6e6e8952d10', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', '00:15', 0, 0, 0, 0, 0, '2023-02-17 08:00:55', '2023-02-18 09:04:52'),
('89b2913a-9d21-441f-9a70-7811ba863164', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', '960a69f3-149b-449c-89c5-35b310f7e192', '-', 0, 0, 0, 0, 0, '2023-02-17 11:15:02', '2023-02-17 11:15:02'),
('95d8346c-3b88-41e8-a1d0-10aa1f5239f5', '0b19bbbf-be56-4321-9fd1-32e92680db5e', '0ddfc3fd-4827-45cd-b98a-75723eb759d3', '-', 0, 0, 0, 0, 0, '2023-02-18 14:27:41', '2023-02-18 14:27:41'),
('9ccf9ccc-1fd3-42f0-9048-651a53ebbbef', 'cc415254-e4c1-4b22-b511-8a27a5fdbe5d', '5e906988-e979-416e-91c7-129984b622e5', '-', 0, 0, 0, 0, 0, '2023-02-18 18:58:40', '2023-02-18 18:58:40'),
('bb39c764-6dfa-4689-af42-fd49c29db226', 'd2375b54-b81e-4b66-a8c4-7d5969f20bb7', '3f408374-42f5-430a-af91-233246314a51', '-', 9.9, 0, 8.9, 3.146426544510455, 1, '2023-02-18 18:04:17', '2023-02-18 18:07:27'),
('d63f3051-1916-47e8-bf3f-166c08d72ce1', '74a588aa-ca85-4012-a8f3-2bd67f2e3138', '102e5c52-3941-4397-a6bd-f06e52be07f3', '-', 0, 0, 0, 0, 0, '2023-02-18 18:54:14', '2023-02-18 18:54:14'),
('d8cc6a1a-7f25-4e55-8af9-cb6558e8faba', 'ae3e177e-b2c0-43cd-aa4b-89c1c2afc37d', 'be2ee94d-6a5a-438d-99e2-a59732ffefe7', '-', 0, 0, 0, 0, 0, '2023-02-16 11:11:58', '2023-02-16 11:11:58'),
('e72660d8-a9dd-42bd-b6c2-ef73658e77e5', '9659d237-5487-4854-a5ed-88de93d658d7', '47b5ad6e-0869-4517-9b77-52a112a48567', '-', 0, 0, 0, 0, 0, '2023-02-18 19:43:26', '2023-02-18 19:43:26'),
('f2d3e0b2-ed94-4160-ab00-3e3ab8ae0dfd', 'ec620c66-312e-4e21-acd4-5507416c1786', '8a723ebc-3b3a-49f4-a5cb-a4e634371541', '-', 0, 0, 0, 0, 0, '2023-02-18 04:51:33', '2023-02-18 04:51:33');

-- --------------------------------------------------------

--
-- Table structure for table `timer_seni`
--

CREATE TABLE `timer_seni` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_peserta` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `running` tinyint(1) DEFAULT 0,
  `start` datetime DEFAULT NULL,
  `finish` datetime DEFAULT NULL,
  `selesai` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timer_seni`
--

INSERT INTO `timer_seni` (`id`, `id_jadwal`, `id_peserta`, `running`, `start`, `finish`, `selesai`, `createdAt`, `updatedAt`) VALUES
('2dab632a-8068-4e72-9bb7-7d1ccbd66815', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', '74ba9f3c-7166-4d78-8a33-3b1d05039637', 0, '2023-02-18 09:03:49', '2023-02-18 09:03:55', 1, '2023-02-18 09:03:49', '2023-02-18 09:03:55'),
('51f673ff-1255-4cd9-980c-b8e5bf8617a5', '389900dc-edc1-4d5c-ba4d-ddd06509d1c7', 'd951e2a9-3b7f-4857-8e47-4cccd950bbad', 0, '2023-02-18 09:04:37', '2023-02-18 09:04:52', 1, '2023-02-18 09:04:37', '2023-02-18 09:04:52'),
('7190f716-f304-446d-8fab-6049245d74d5', '81bb7b24-001b-4240-990e-703b823b98ef', 'b451c395-3748-43ce-93ff-167036227088', 0, '2023-02-18 09:03:00', '2023-02-18 09:03:16', 1, '2023-02-18 09:03:00', '2023-02-18 09:03:16'),
('ab457eb2-2c42-46db-9d46-1c4dde8e55ae', '14888c0e-00ae-4b7a-8cfb-ecab53c3cf18', 'b2d2af33-48cd-411f-8eca-0355d5c5c6da', 0, '2023-02-17 18:33:08', '2023-02-17 18:36:40', 1, '2023-02-17 18:33:08', '2023-02-17 18:36:40'),
('e80dab45-6fe5-45e6-96a3-22bc4d2b9a30', '81bb7b24-001b-4240-990e-703b823b98ef', '8bcc5dd4-2946-446e-b69d-ad0e2fdac9ad', 0, '2023-02-18 09:00:35', '2023-02-18 09:00:44', 1, '2023-02-18 09:00:35', '2023-02-18 09:00:44');

-- --------------------------------------------------------

--
-- Table structure for table `timer_tanding`
--

CREATE TABLE `timer_tanding` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `babak` varchar(255) NOT NULL,
  `running` tinyint(1) DEFAULT 0,
  `start` datetime DEFAULT NULL,
  `total_pause` int(11) DEFAULT NULL,
  `finish` datetime DEFAULT NULL,
  `selesai` tinyint(1) DEFAULT 0,
  `saved_time` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timer_tanding`
--

INSERT INTO `timer_tanding` (`id`, `id_jadwal`, `babak`, `running`, `start`, `total_pause`, `finish`, `selesai`, `saved_time`, `createdAt`, `updatedAt`) VALUES
('02f86416-5633-409d-be55-d286357370f6', 'af7110ca-5cd1-46f5-9354-a25876674aed', 'II', 0, '2023-02-17 08:19:25', NULL, '2023-02-17 08:21:27', 1, 0, '2023-02-17 08:19:25', '2023-02-17 08:21:27'),
('1442f771-0928-4257-93af-ca04cae4ba2d', 'eeb19373-2f1f-4c21-9311-b18649deba70', 'I', 0, '2023-02-17 17:29:44', NULL, NULL, 0, 16753, '2023-02-17 17:29:44', '2023-02-17 17:30:02'),
('14aa5aa8-80d0-4bee-be27-b6842a114450', '7e4c8912-80ae-49e7-9ae1-3b04e1038941', 'I', 0, '2023-02-17 10:55:20', 9809, '2023-02-17 10:57:36', 1, 21019, '2023-02-17 10:55:20', '2023-02-17 10:57:36'),
('1e463712-e89b-4a3b-96e5-5b6a91617c6c', 'be3a3679-008c-443f-a416-2d8a82267db3', 'I', 0, '2023-02-17 10:53:41', NULL, '2023-02-17 10:54:42', 1, 0, '2023-02-17 10:53:41', '2023-02-17 10:54:42'),
('1ed3f4ff-835e-4cf0-840b-3a5cf9e36429', '96223c99-4ca8-45f2-b2e5-f9d329602819', 'I', 1, '2023-02-17 08:29:52', 1219, '2023-02-17 08:30:54', 1, 0, '2023-02-17 08:29:52', '2023-02-17 08:32:53'),
('3cdfa30f-ce84-4e9b-8b2e-2c89550d7ac7', '96223c99-4ca8-45f2-b2e5-f9d329602819', 'III', 1, '2023-02-17 08:46:43', 936093, '2023-02-17 08:47:51', 1, 6261, '2023-02-17 08:46:43', '2023-02-17 09:02:26'),
('40376caa-09c8-4f5c-a9ef-bf55aa23fcbd', '37412100-0e74-44a4-86bd-9c5bfbfdc58e', 'I', 0, '2023-02-17 01:30:18', NULL, '2023-02-17 01:32:18', 1, 0, '2023-02-17 01:30:18', '2023-02-17 01:32:18'),
('4899a2c9-c4b7-48b5-92c6-1dea7becc5b5', 'd57f140c-f400-46f6-855c-0bef89157da8', 'I', 0, '2023-02-17 18:07:47', 57202, NULL, 0, 59648, '2023-02-17 18:07:47', '2023-02-17 18:09:44'),
('48ad8035-7e38-4508-82a4-1c752ea47b3f', 'e9f889f8-5cb6-4489-8270-79966c3d75e4', 'I', 0, '2023-02-17 17:33:49', 39583, NULL, 0, 26042, '2023-02-17 17:33:49', '2023-02-17 17:34:54'),
('585db93b-2afe-4cfb-9dea-8612d50f119c', 'e9f889f8-5cb6-4489-8270-79966c3d75e4', 'II', 0, '2023-02-17 17:35:18', NULL, '2023-02-17 17:37:18', 1, 0, '2023-02-17 17:35:18', '2023-02-17 17:37:18'),
('5e8fc522-2480-4856-84cb-e649bec9ae42', '3efb997e-3b24-4676-a884-516180bee9f5', 'I', 0, '2023-02-17 11:04:14', NULL, '2023-02-17 11:05:45', 1, 0, '2023-02-17 11:04:14', '2023-02-17 11:05:45'),
('8088fce5-5e97-4e2d-b5d0-5862b719ccf9', '96223c99-4ca8-45f2-b2e5-f9d329602819', 'II', 0, '2023-02-17 08:33:21', 581053, '2023-02-17 08:44:03', 1, 10278, '2023-02-17 08:33:21', '2023-02-17 08:44:03'),
('8e98599d-ad5c-4b79-ac2e-cc9ba88cbfa2', '7e4c8912-80ae-49e7-9ae1-3b04e1038941', 'II', 0, '2023-02-17 15:45:43', 33755072, '2023-02-18 01:10:19', 1, 63088, '2023-02-17 15:45:43', '2023-02-18 01:10:19'),
('93213d74-70f5-4999-ab9b-52682d598cbf', 'af7110ca-5cd1-46f5-9354-a25876674aed', 'I', 0, '2023-02-17 08:15:55', 3138, '2023-02-17 08:17:59', 1, 3119, '2023-02-17 08:15:55', '2023-02-17 08:17:59'),
('9cd99807-c402-4a15-b467-7036d4859947', '6eeaf677-dc37-475e-9fbc-e8a2f06eef8d', 'I', 0, '2023-02-18 03:12:19', 756891, '2023-02-18 03:26:55', 1, 54448, '2023-02-18 03:12:19', '2023-02-18 03:26:55'),
('9dfbd821-dacc-4045-ae6f-8e57a7c2f17c', '358a0c60-754a-4c00-86a6-1c6c30cc0bca', 'I', 0, '2023-02-18 08:08:14', 2073715, NULL, 0, 72057, '2023-02-18 08:08:14', '2023-02-18 08:44:01'),
('a3d8faae-b0b2-4935-808d-a28779d0d8da', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 'I', 0, '2023-02-18 03:05:28', 245027, NULL, 0, 25087, '2023-02-18 03:05:28', '2023-02-18 03:09:57'),
('dab6c21d-91d0-4be1-877b-486b0d5d22dc', '7e4c8912-80ae-49e7-9ae1-3b04e1038941', 'III', 0, '2023-02-18 01:44:22', 24512066, '2023-02-18 08:37:12', 1, 75272, '2023-02-18 01:44:22', '2023-02-18 08:37:12'),
('e76be2f1-4f39-4e01-9b14-8436c079166b', 'be3a3679-008c-443f-a416-2d8a82267db3', 'III', 0, '2023-02-18 01:59:03', 29495, '2023-02-18 02:00:33', 1, 12879, '2023-02-18 01:59:03', '2023-02-18 02:00:33'),
('e89fe2ac-776f-4bfe-b9aa-d12124d6a96f', '6eeaf677-dc37-475e-9fbc-e8a2f06eef8d', 'II', 0, '2023-02-18 03:27:07', 82038, NULL, 0, 39530, '2023-02-18 03:27:07', '2023-02-18 03:29:09'),
('ea3be15f-025b-4119-8174-db1fd6f018d0', '3efb997e-3b24-4676-a884-516180bee9f5', 'III', 1, '2023-02-18 03:02:02', 19897135, NULL, 0, 11466, '2023-02-18 03:02:02', '2023-02-18 08:34:09'),
('ee3c13ae-5177-4d12-853c-63c15436cbe4', '878ff8f2-285e-4219-a829-baae6e6049e3', 'I', 0, '2023-02-18 05:19:41', 1679736, '2023-02-18 05:49:40', 1, 90697, '2023-02-18 05:19:41', '2023-02-18 05:49:40'),
('f4599702-5103-4945-9943-0d0d8baad49a', '3efb997e-3b24-4676-a884-516180bee9f5', 'II', 1, '2023-02-17 15:46:34', NULL, NULL, 0, 0, '2023-02-17 15:46:34', '2023-02-17 15:46:34');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','dewan','superadmin','timer') DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
('5114de53-fca5-441b-a798-8698257824a0', 'admin', 'e4c1c0a3b1ff359b6cb3eca594f5395c', 'admin', '2023-01-14 08:31:21', '2023-02-19 01:49:50'),
('7deb511c-0cfe-4934-9c70-58de9a35baa7', 'sudo', 'e178f759fe55c8c9596f2202060dc7dd', 'superadmin', '2023-02-13 10:32:25', '2023-02-13 10:32:25'),
('828c55ec-aec4-48c5-b9c4-8b103e21253d', 'timerseni', 'e4c1c0a3b1ff359b6cb3eca594f5395c', 'timer', '2023-02-16 00:08:23', '2023-02-19 01:50:50'),
('8f717372-287e-490e-a39a-958fc7370392', 'timertanding', 'e4c1c0a3b1ff359b6cb3eca594f5395c', 'timer', '2023-02-16 00:09:31', '2023-02-19 01:51:01'),
('d81b7041-9163-4d81-87ed-a8fca49e9561', 'dewan', 'e4c1c0a3b1ff359b6cb3eca594f5395c', 'dewan', '2023-01-15 23:27:30', '2023-02-19 01:50:46');

-- --------------------------------------------------------

--
-- Table structure for table `verifikasi_juri`
--

CREATE TABLE `verifikasi_juri` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_jadwal` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `show` tinyint(1) DEFAULT 1,
  `poin` enum('Jatuhan','Hukuman') DEFAULT NULL,
  `juri1` enum('biru','tidak_sah','merah') DEFAULT NULL,
  `juri2` enum('biru','tidak_sah','merah') DEFAULT NULL,
  `juri3` enum('biru','tidak_sah','merah') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `verifikasi_juri`
--

INSERT INTO `verifikasi_juri` (`id`, `id_jadwal`, `show`, `poin`, `juri1`, `juri2`, `juri3`, `createdAt`, `updatedAt`) VALUES
('02947c73-48f5-4aa3-94f9-8f36aa7302cd', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 13:18:16', '2023-02-17 13:18:16'),
('042de287-1b62-485b-80ae-94fa9fea93f6', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', 'merah', NULL, '2023-02-18 02:03:23', '2023-02-18 02:03:35'),
('046023c8-b0ae-43d4-9bd8-98ab20f99215', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:57:28', '2023-02-18 10:57:28'),
('04a12514-39b3-427a-9d3b-895e83ae23f6', '29eaaa77-d0c0-4671-9be3-31f5d30cbb59', 1, 'Jatuhan', 'merah', NULL, 'tidak_sah', '2023-02-18 13:09:25', '2023-02-18 13:09:37'),
('0bb78307-219e-4206-b580-cf05d140b6ed', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 02:02:33', '2023-02-18 02:02:33'),
('1274cc26-0f00-41a1-b45f-71619b3dbc7c', 'e9f889f8-5cb6-4489-8270-79966c3d75e4', 1, 'Jatuhan', 'biru', 'merah', NULL, '2023-02-17 17:39:02', '2023-02-17 17:43:31'),
('131604cd-4b9a-4120-9826-29d79c3f9fcf', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:14:52', '2023-02-17 12:14:52'),
('1615c181-c5f6-444f-b31f-22d6a3a91e6e', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Hukuman', NULL, NULL, NULL, '2023-02-18 23:01:05', '2023-02-18 23:01:05'),
('1731bcb0-8550-4a02-adf4-627573d62419', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', 'tidak_sah', NULL, NULL, '2023-02-18 23:02:36', '2023-02-18 23:02:47'),
('1a190fcc-b926-495f-8209-50423817c01b', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:56:42', '2023-02-18 10:56:42'),
('1a605a4b-a5fa-477b-bd9e-dd0acb42898b', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:56:56', '2023-02-18 10:56:56'),
('1c7d630c-8f42-4b9c-b981-cd066ddd5d43', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', 'tidak_sah', 'biru', 'merah', '2023-02-18 10:52:57', '2023-02-18 10:54:27'),
('2330205a-af83-4534-bc7e-bd7dcb16839d', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Hukuman', NULL, NULL, NULL, '2023-02-18 23:01:24', '2023-02-18 23:01:24'),
('27ba42b8-a308-4022-b19e-c8f94f808da3', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:58:14', '2023-02-18 10:58:14'),
('28037e6f-1799-4705-b6f2-1151baeb8ab0', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:37:40', '2023-02-17 12:37:40'),
('28829bba-fbef-4f9a-ac51-73daf3b25501', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:46:57', '2023-02-17 12:46:57'),
('29e6bed6-0576-4946-a281-4344c2c129ec', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:45:19', '2023-02-17 12:45:19'),
('2aa611df-72d3-4831-91a3-59d87ef8f502', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 13:16:18', '2023-02-17 13:16:18'),
('2fba1dbe-421f-432b-8d3b-3b947010279a', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 22:59:58', '2023-02-18 22:59:58'),
('39649eb0-583a-4008-b572-121bf5d64aef', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', 'merah', 'merah', 'biru', '2023-02-18 10:57:18', '2023-02-18 10:57:24'),
('3d669b04-bb8d-4976-94f2-a2d1c921cb19', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:50:32', '2023-02-17 12:50:34'),
('3eab66f0-46f3-49b9-8c4f-aa44feee6049', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Hukuman', NULL, NULL, NULL, '2023-02-18 23:02:51', '2023-02-18 23:02:51'),
('468510c4-09ba-4aa0-ab99-7ba01f150a24', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-18 23:03:02', '2023-02-18 23:03:05'),
('4ae4f9cb-3c46-470c-8392-184fa3b0eed8', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:13:32', '2023-02-17 12:13:32'),
('51a30718-82b5-48c6-875e-f03037310f57', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:58:44', '2023-02-18 10:58:44'),
('58bff602-fd6d-4b87-b561-afda2de90ad7', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:31:13', '2023-02-17 12:31:14'),
('5c117674-148e-4639-ba17-7e03fced947b', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:12:08', '2023-02-17 12:12:08'),
('6209948a-1324-4a5c-9058-cff7b5058801', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 02:04:06', '2023-02-18 02:04:06'),
('62369c67-3e21-45e8-95c1-c8bf8dce4d2b', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:30:51', '2023-02-17 12:30:54'),
('63774908-5f14-4a3e-b256-b85cfb444045', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:57:09', '2023-02-18 10:57:09'),
('67ac7282-a0a0-4404-81d0-b22049311ef9', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', 'merah', NULL, NULL, '2023-02-18 23:02:56', '2023-02-18 23:02:58'),
('6c826441-707b-4f0e-875e-188e3a00edda', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'merah', NULL, NULL, '2023-02-17 12:57:05', '2023-02-17 12:57:07'),
('6dd8f82a-0ad1-4664-8363-0782571da662', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:27:09', '2023-02-17 12:27:09'),
('725c1555-4d2b-4657-8e25-4db42f744c23', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:58:42', '2023-02-17 12:58:54'),
('786087fd-fe3f-4633-8e98-0e3ca622598b', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, 'merah', NULL, '2023-02-17 13:05:58', '2023-02-17 13:06:22'),
('8325972b-d537-474e-bc25-68be8eae2095', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:29:37', '2023-02-17 12:29:39'),
('85de6dce-9e1d-43f5-8168-2efb1c57a388', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:30:24', '2023-02-17 12:30:25'),
('86501373-dc5e-4a90-a919-bf26b7361e3e', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', 'tidak_sah', NULL, NULL, '2023-02-18 23:00:56', '2023-02-18 23:01:02'),
('87655a45-ad4e-472f-a129-cc65fef412d3', '358a0c60-754a-4c00-86a6-1c6c30cc0bca', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 07:00:11', '2023-02-18 07:00:11'),
('8bb5324c-202c-4a78-b97b-8a0cf4c4c4ba', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:58:26', '2023-02-18 10:58:26'),
('8e1d64ab-7f5b-42b9-9a12-7e338e5aa797', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', 'biru', NULL, '2023-02-17 12:59:42', '2023-02-17 13:00:38'),
('9298379d-4c29-4de6-adcb-7f4f08979018', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', 'tidak_sah', 'merah', '2023-02-18 02:04:50', '2023-02-18 02:33:20'),
('95061535-1c1a-42a8-9409-bf965a2a0b6e', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:44:59', '2023-02-17 12:44:59'),
('97170fc3-4230-40f9-99ea-b2a73607cd6d', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:11:16', '2023-02-17 12:11:16'),
('97199dc6-f012-43bd-abd4-374bb9371c6f', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:15:35', '2023-02-17 12:15:35'),
('974c3403-0202-4317-9d14-1ecbd7788e57', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, 'tidak_sah', NULL, '2023-02-17 13:16:35', '2023-02-17 13:17:42'),
('9886c84d-19a5-4e2c-bd04-cddef1a60b4d', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 02:03:54', '2023-02-18 02:03:54'),
('9e2ca1f7-9dde-4609-9ea5-44d9db69f18f', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', 'biru', 'tidak_sah', 'tidak_sah', '2023-02-18 10:54:29', '2023-02-18 10:56:34'),
('a3a00ce0-7dc3-4bcc-aef9-0d17d30d2d0d', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 23:01:21', '2023-02-18 23:01:21'),
('a7e76d90-5b5a-4ca8-b48e-61cbff0ea350', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:30:57', '2023-02-17 12:30:57'),
('abf41971-7ff7-4809-b2b5-6d6e8d71e2bf', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-18 14:19:43', '2023-02-18 14:20:09'),
('b23e56f4-ec91-49a4-999e-13427fc67f7e', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, 'tidak_sah', NULL, '2023-02-17 13:15:26', '2023-02-17 13:15:31'),
('b2557d19-80a5-44ba-851e-70fe8ae4e411', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:56:47', '2023-02-18 10:56:47'),
('b9fdb02d-36bd-46df-89ba-47d105b572ce', 'e196eec7-0647-49ab-9fc0-7d6b6d0aade0', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 10:57:04', '2023-02-18 10:57:04'),
('bcc59353-b486-4049-a504-f4a3ce588dfa', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:13:39', '2023-02-17 12:13:39'),
('c9ef5799-685b-4a14-8d6d-84d8b0ad8ea5', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 12:12:30', '2023-02-17 12:12:30'),
('ced71603-0bee-4b87-9156-13d056d930ed', '358a0c60-754a-4c00-86a6-1c6c30cc0bca', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 06:59:55', '2023-02-18 06:59:55'),
('d48fa16f-7494-491b-9550-b68e0cb240d7', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:38:10', '2023-02-17 12:38:12'),
('d71205de-d96d-422d-aa98-4e1b8c87e11f', '29eaaa77-d0c0-4671-9be3-31f5d30cbb59', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 14:07:11', '2023-02-18 14:07:11'),
('dc0b0d56-a994-4453-a1cb-513d869cbea9', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', 'merah', NULL, '2023-02-18 01:52:58', '2023-02-18 02:01:27'),
('de0a4be7-458a-46a5-8226-66a7c5fafe7e', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, 'tidak_sah', NULL, '2023-02-17 13:18:29', '2023-02-17 13:58:09'),
('dec50825-8e2c-4a04-a3ff-2ecd3322c174', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 13:16:10', '2023-02-17 13:16:10'),
('e15e986d-10ac-4335-a701-6fd36d03d922', 'eeb19373-2f1f-4c21-9311-b18649deba70', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 17:24:54', '2023-02-17 17:24:54'),
('e311a448-9398-48e0-b6f0-4a1b187bc249', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:15:58', '2023-02-17 12:16:00'),
('e7703c35-1108-46cc-8c25-11084b38cf18', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 02:01:33', '2023-02-18 02:01:33'),
('ec0d7eda-574f-48d1-a20f-ca74682a78e9', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 23:01:12', '2023-02-18 23:01:12'),
('ef7500e2-601c-4245-9e73-264f98e771e4', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, 'biru', NULL, '2023-02-17 13:05:34', '2023-02-17 13:05:41'),
('ef8f3e7d-a1a3-4169-9518-5c796054e6db', '7e4c8912-80ae-49e7-9ae1-3b04e1038941', 1, 'Jatuhan', NULL, 'biru', NULL, '2023-02-17 15:38:52', '2023-02-17 15:38:54'),
('f006cf0a-ee38-461f-81eb-f00d86ec91a9', 'a2c06016-cb78-4511-8818-7fadf8eb6cf2', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-18 22:54:09', '2023-02-18 22:54:09'),
('f0864871-d931-4869-8c7f-f80923a3690e', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', 'merah', 'tidak_sah', '2023-02-18 02:01:43', '2023-02-18 02:02:28'),
('f375241b-8c17-4f80-9779-1a9111f82118', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', NULL, NULL, NULL, '2023-02-17 13:16:04', '2023-02-17 13:16:04'),
('f5a82693-e5a8-4ead-b8a4-9dd5e22b9c87', '29eaaa77-d0c0-4671-9be3-31f5d30cbb59', 1, 'Jatuhan', 'biru', 'biru', 'biru', '2023-02-18 14:07:28', '2023-02-18 14:07:53'),
('f6480683-2a07-4b7a-a039-2976acfe666f', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:28:06', '2023-02-17 12:28:07'),
('fba9d818-07cd-46af-99f8-cb04f285b150', 'be3a3679-008c-443f-a416-2d8a82267db3', 1, 'Jatuhan', 'biru', NULL, NULL, '2023-02-17 12:27:48', '2023-02-17 12:27:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gelanggang`
--
ALTER TABLE `gelanggang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hukum_tgr`
--
ALTER TABLE `hukum_tgr`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jadwal` (`id_jadwal`),
  ADD KEY `id_peserta` (`id_peserta`) USING BTREE;

--
-- Indexes for table `jadwal_tanding`
--
ALTER TABLE `jadwal_tanding`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_merah` (`id_merah`),
  ADD KEY `id_biru` (`id_biru`),
  ADD KEY `id_pemenang` (`id_pemenang`);

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
-- Indexes for table `log_binaan`
--
ALTER TABLE `log_binaan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poin` (`id_poin`);

--
-- Indexes for table `log_jatuhan`
--
ALTER TABLE `log_jatuhan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poin` (`id_poin`);

--
-- Indexes for table `log_juri1`
--
ALTER TABLE `log_juri1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `aasa` (`id_jadwal`);

--
-- Indexes for table `log_pause_tanding`
--
ALTER TABLE `log_pause_tanding`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_timer_tanding` (`id_timer_tanding`);

--
-- Indexes for table `log_peringatan`
--
ALTER TABLE `log_peringatan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poin` (`id_poin`);

--
-- Indexes for table `log_poin_juri1`
--
ALTER TABLE `log_poin_juri1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poin` (`id_poin`),
  ADD KEY `id_juri` (`id_juri`);

--
-- Indexes for table `log_poin_juri2`
--
ALTER TABLE `log_poin_juri2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poin` (`id_poin`),
  ADD KEY `id_juri` (`id_juri`);

--
-- Indexes for table `log_poin_juri3`
--
ALTER TABLE `log_poin_juri3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poin` (`id_poin`),
  ADD KEY `id_juri` (`id_juri`);

--
-- Indexes for table `log_poin_masuk`
--
ALTER TABLE `log_poin_masuk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poin` (`id_poin`);

--
-- Indexes for table `log_teguran`
--
ALTER TABLE `log_teguran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_poin` (`id_poin`);

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
-- Indexes for table `nilai_tanding`
--
ALTER TABLE `nilai_tanding`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jadwal` (`id_jadwal`),
  ADD KEY `id_poin_merah` (`id_poin_merah`),
  ADD KEY `id_poin_biru` (`id_poin_biru`);

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
-- Indexes for table `peserta_tanding`
--
ALTER TABLE `peserta_tanding`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `poin`
--
ALTER TABLE `poin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_peserta` (`id_peserta`);

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
-- Indexes for table `timer_seni`
--
ALTER TABLE `timer_seni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timer_tanding`
--
ALTER TABLE `timer_tanding`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jadwal` (`id_jadwal`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `verifikasi_juri`
--
ALTER TABLE `verifikasi_juri`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jadwal` (`id_jadwal`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log_juri1`
--
ALTER TABLE `log_juri1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hukum_tgr`
--
ALTER TABLE `hukum_tgr`
  ADD CONSTRAINT `hukum_tgr_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tgr` (`id`);

--
-- Constraints for table `jadwal_tanding`
--
ALTER TABLE `jadwal_tanding`
  ADD CONSTRAINT `jadwal_tanding_ibfk_1` FOREIGN KEY (`id_merah`) REFERENCES `peserta_tanding` (`id`),
  ADD CONSTRAINT `jadwal_tanding_ibfk_2` FOREIGN KEY (`id_biru`) REFERENCES `peserta_tanding` (`id`),
  ADD CONSTRAINT `jadwal_tanding_ibfk_3` FOREIGN KEY (`id_pemenang`) REFERENCES `peserta_tanding` (`id`);

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
-- Constraints for table `log_binaan`
--
ALTER TABLE `log_binaan`
  ADD CONSTRAINT `log_binaan_ibfk_1` FOREIGN KEY (`id_poin`) REFERENCES `poin` (`id`);

--
-- Constraints for table `log_jatuhan`
--
ALTER TABLE `log_jatuhan`
  ADD CONSTRAINT `log_jatuhan_ibfk_1` FOREIGN KEY (`id_poin`) REFERENCES `poin` (`id`);

--
-- Constraints for table `log_pause_tanding`
--
ALTER TABLE `log_pause_tanding`
  ADD CONSTRAINT `log_pause_tanding_ibfk_1` FOREIGN KEY (`id_timer_tanding`) REFERENCES `timer_tanding` (`id`);

--
-- Constraints for table `log_peringatan`
--
ALTER TABLE `log_peringatan`
  ADD CONSTRAINT `log_peringatan_ibfk_1` FOREIGN KEY (`id_poin`) REFERENCES `poin` (`id`);

--
-- Constraints for table `log_poin_juri1`
--
ALTER TABLE `log_poin_juri1`
  ADD CONSTRAINT `log_poin_juri1_ibfk_1` FOREIGN KEY (`id_poin`) REFERENCES `poin` (`id`),
  ADD CONSTRAINT `log_poin_juri1_ibfk_2` FOREIGN KEY (`id_juri`) REFERENCES `juri` (`id`);

--
-- Constraints for table `log_poin_juri2`
--
ALTER TABLE `log_poin_juri2`
  ADD CONSTRAINT `log_poin_juri2_ibfk_1` FOREIGN KEY (`id_poin`) REFERENCES `poin` (`id`),
  ADD CONSTRAINT `log_poin_juri2_ibfk_2` FOREIGN KEY (`id_juri`) REFERENCES `juri` (`id`);

--
-- Constraints for table `log_poin_juri3`
--
ALTER TABLE `log_poin_juri3`
  ADD CONSTRAINT `log_poin_juri3_ibfk_1` FOREIGN KEY (`id_poin`) REFERENCES `poin` (`id`),
  ADD CONSTRAINT `log_poin_juri3_ibfk_2` FOREIGN KEY (`id_juri`) REFERENCES `juri` (`id`);

--
-- Constraints for table `log_poin_masuk`
--
ALTER TABLE `log_poin_masuk`
  ADD CONSTRAINT `log_poin_masuk_ibfk_1` FOREIGN KEY (`id_poin`) REFERENCES `poin` (`id`);

--
-- Constraints for table `log_teguran`
--
ALTER TABLE `log_teguran`
  ADD CONSTRAINT `log_teguran_ibfk_1` FOREIGN KEY (`id_poin`) REFERENCES `poin` (`id`);

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
-- Constraints for table `nilai_tanding`
--
ALTER TABLE `nilai_tanding`
  ADD CONSTRAINT `nilai_tanding_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tanding` (`id`),
  ADD CONSTRAINT `nilai_tanding_ibfk_2` FOREIGN KEY (`id_poin_merah`) REFERENCES `poin` (`id`),
  ADD CONSTRAINT `nilai_tanding_ibfk_3` FOREIGN KEY (`id_poin_biru`) REFERENCES `poin` (`id`);

--
-- Constraints for table `nilai_tunggal`
--
ALTER TABLE `nilai_tunggal`
  ADD CONSTRAINT `nilai_tunggal_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tgr` (`id`),
  ADD CONSTRAINT `nilai_tunggal_ibfk_2` FOREIGN KEY (`id_peserta`) REFERENCES `peserta_seni` (`id`),
  ADD CONSTRAINT `nilai_tunggal_ibfk_3` FOREIGN KEY (`id_juri`) REFERENCES `juri` (`id`);

--
-- Constraints for table `poin`
--
ALTER TABLE `poin`
  ADD CONSTRAINT `poin_ibfk_1` FOREIGN KEY (`id_peserta`) REFERENCES `peserta_tanding` (`id`);

--
-- Constraints for table `skor`
--
ALTER TABLE `skor`
  ADD CONSTRAINT `skor_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tgr` (`id`),
  ADD CONSTRAINT `skor_ibfk_2` FOREIGN KEY (`id_peserta`) REFERENCES `peserta_seni` (`id`);

--
-- Constraints for table `timer_tanding`
--
ALTER TABLE `timer_tanding`
  ADD CONSTRAINT `timer_tanding_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tanding` (`id`);

--
-- Constraints for table `verifikasi_juri`
--
ALTER TABLE `verifikasi_juri`
  ADD CONSTRAINT `verifikasi_juri_ibfk_1` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal_tanding` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
