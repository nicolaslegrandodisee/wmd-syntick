-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Machine: localhost:3306
-- Genereertijd: 25 apr 2016 om 08:50
-- Serverversie: 5.6.29
-- PHP-versie: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `r0447394_syntick`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Complains`
--

CREATE TABLE IF NOT EXISTS `Complains` (
  `complainId` int(11) NOT NULL AUTO_INCREMENT,
  `ownerId` int(11) NOT NULL,
  `renterId` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `message` text NOT NULL,
  `priority` tinyint(4) NOT NULL,
  `solved` tinyint(1) NOT NULL,
  `createdOn` datetime NOT NULL,
  `solvedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`complainId`),
  KEY `fk_Complains_Renters_idx` (`renterId`),
  KEY `fk_Complains_Owners1_idx` (`ownerId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Gegevens worden uitgevoerd voor tabel `Complains`
--

INSERT INTO `Complains` (`complainId`, `ownerId`, `renterId`, `title`, `message`, `priority`, `solved`, `createdOn`, `solvedOn`) VALUES
(1, 1, 1, 'Vaatwas werkt neit?', 'De vaatwas in de kelder is kapot! Maak dat aub, bitch!', 5, 0, '2016-04-18 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Owners`
--

CREATE TABLE IF NOT EXISTS `Owners` (
  `ownerId` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) NOT NULL,
  `name` varchar(45) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  PRIMARY KEY (`ownerId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Gegevens worden uitgevoerd voor tabel `Owners`
--

INSERT INTO `Owners` (`ownerId`, `email`, `name`, `telephone`) VALUES
(1, 'philippe.devos@gmail.com', 'Philippe Devos', '047777585');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Renters`
--

CREATE TABLE IF NOT EXISTS `Renters` (
  `renterId` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(150) NOT NULL,
  `ownerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`renterId`),
  KEY `fk_Renters_Owners1_idx` (`ownerId`)
) ENGINE=InnoDB  DEFAULT CHARSET=big5 AUTO_INCREMENT=2 ;

--
-- Gegevens worden uitgevoerd voor tabel `Renters`
--

INSERT INTO `Renters` (`renterId`, `address`, `name`, `email`, `ownerId`) VALUES
(1, 'Keilaan 85, 9860 Oosterzele (BE)', 'Fabrice Guillermin', 'fabrice@kadonation.com', 1);

--
-- Beperkingen voor gedumpte tabellen
--

--
-- Beperkingen voor tabel `Complains`
--
ALTER TABLE `Complains`
  ADD CONSTRAINT `fk_Complains_Owners1` FOREIGN KEY (`ownerId`) REFERENCES `Owners` (`ownerId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Complains_Renters` FOREIGN KEY (`renterId`) REFERENCES `Renters` (`renterId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Beperkingen voor tabel `Renters`
--
ALTER TABLE `Renters`
  ADD CONSTRAINT `fk_Renters_Owners1` FOREIGN KEY (`ownerId`) REFERENCES `Owners` (`ownerId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
