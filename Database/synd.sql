-- MySQL Script generated by MySQL Workbench
-- 04/18/16 12:08:38
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema r0447394_syntick
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema r0447394_syntick
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `r0447394_syntick` DEFAULT CHARACTER SET utf8 ;
USE `r0447394_syntick` ;

-- -----------------------------------------------------
-- Table `r0447394_syntick`.`Owners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `r0447394_syntick`.`Owners` (
  `ownerId` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(150) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ownerId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `r0447394_syntick`.`Renters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `r0447394_syntick`.`Renters` (
  `renterId` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `ownerId` INT NULL,
  PRIMARY KEY (`renterId`),
  INDEX `fk_Renters_Owners1_idx` (`ownerId` ASC),
  CONSTRAINT `fk_Renters_Owners1`
    FOREIGN KEY (`ownerId`)
    REFERENCES `r0447394_syntick`.`Owners` (`ownerId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `r0447394_syntick`.`Complains`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `r0447394_syntick`.`Complains` (
  `complainId` INT NOT NULL AUTO_INCREMENT,
  `ownerId` INT NOT NULL,
  `renterId` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `message` TEXT NOT NULL,
  `priority` TINYINT NOT NULL,
  `solved` TINYINT(1) NOT NULL,
  `createdOn` DATETIME NOT NULL,
  `solvedOn` DATETIME NULL,
  INDEX `fk_Complains_Renters_idx` (`renterId` ASC),
  INDEX `fk_Complains_Owners1_idx` (`ownerId` ASC),
  PRIMARY KEY (`complainId`),
  CONSTRAINT `fk_Complains_Renters`
    FOREIGN KEY (`renterId`)
    REFERENCES `r0447394_syntick`.`Renters` (`renterId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Complains_Owners1`
    FOREIGN KEY (`ownerId`)
    REFERENCES `r0447394_syntick`.`Owners` (`ownerId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
