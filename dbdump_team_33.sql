-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: project
-- ------------------------------------------------------
-- Server version	8.1.0
DROP SCHEMA IF EXISTS `project`;
CREATE SCHEMA `project`;
USE `project`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `case`
--

DROP TABLE IF EXISTS `case`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `case` (
  `case_id` varchar(10) NOT NULL,
  `location` varchar(45) DEFAULT NULL,
  `time` timestamp NULL DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `is_open` tinyint DEFAULT NULL,
  PRIMARY KEY (`case_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case`
--

LOCK TABLES `case` WRITE;
/*!40000 ALTER TABLE `case` DISABLE KEYS */;
INSERT INTO `case` VALUES ('C-085','Hotel Room','2012-10-07 19:00:00','Suspected Poisoning',1),('C-293','Victim\'s Residence','2013-06-20 08:45:00','Suspicious Death',1),('C-405','Victim\'s Car','2007-08-02 13:45:00','Drive-by Shooting',1),('C-412','City Park','2010-03-04 07:30:00','Assault in City Park',1),('C-491','Crime Scene Alley','2014-05-10 04:20:00','Homicide with Unusual Symbol',1),('C-625','Underground Bunker','2011-02-15 12:30:00','Human Trafficking',0),('C-647','Downtown Alley','2005-09-17 17:15:00','Robbery at Gunpoint',1),('C-826','Abandoned Warehouse','2008-12-12 01:00:00','Kidnapping and Ransom',0),('C-933','Victim\'s House','2020-09-09 21:10:00','Mysterious Disappearance',0);
/*!40000 ALTER TABLE `case` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `case_has_policeman`
--

DROP TABLE IF EXISTS `case_has_policeman`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `case_has_policeman` (
  `Case_case_id` varchar(10) NOT NULL,
  `Policeman_policeman_id` varchar(10) NOT NULL,
  `is_head` tinyint DEFAULT NULL,
  PRIMARY KEY (`Case_case_id`,`Policeman_policeman_id`),
  KEY `fk_Case_has_Policeman_Policeman1_idx` (`Policeman_policeman_id`),
  KEY `fk_Case_has_Policeman_Case1_idx` (`Case_case_id`),
  CONSTRAINT `fk_Case_has_Policeman_Case1` FOREIGN KEY (`Case_case_id`) REFERENCES `case` (`case_id`),
  CONSTRAINT `fk_Case_has_Policeman_Policeman1` FOREIGN KEY (`Policeman_policeman_id`) REFERENCES `policeman` (`policeman_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_has_policeman`
--

LOCK TABLES `case_has_policeman` WRITE;
/*!40000 ALTER TABLE `case_has_policeman` DISABLE KEYS */;
INSERT INTO `case_has_policeman` VALUES ('C-085','POL-003',0),('C-293','POL-005',1),('C-405','POL-008',1),('C-412','POL-008',1),('C-491','POL-009',0),('C-625','POL-005',0),('C-647','POL-007',0),('C-826','POL-001',1),('C-933','POL-010',0);
/*!40000 ALTER TABLE `case_has_policeman` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `case_has_suspect`
--

DROP TABLE IF EXISTS `case_has_suspect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `case_has_suspect` (
  `Case_case_id` varchar(10) NOT NULL,
  `Suspect_suspect_id` varchar(10) NOT NULL,
  `alibi` varchar(45) DEFAULT NULL,
  `has_contact` tinyint DEFAULT NULL,
  PRIMARY KEY (`Case_case_id`,`Suspect_suspect_id`),
  KEY `fk_Case_has_Suspect_Suspect1_idx` (`Suspect_suspect_id`),
  KEY `fk_Case_has_Suspect_Case1_idx` (`Case_case_id`),
  CONSTRAINT `fk_Case_has_Suspect_Case1` FOREIGN KEY (`Case_case_id`) REFERENCES `case` (`case_id`),
  CONSTRAINT `fk_Case_has_Suspect_Suspect1` FOREIGN KEY (`Suspect_suspect_id`) REFERENCES `suspect` (`suspect_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_has_suspect`
--

LOCK TABLES `case_has_suspect` WRITE;
/*!40000 ALTER TABLE `case_has_suspect` DISABLE KEYS */;
INSERT INTO `case_has_suspect` VALUES ('C-085','SUS-245','Family Gathering',1),('C-293','SUS-031','Work',0),('C-293','SUS-192','Work',1),('C-412','SUS-001','Work',1),('C-491','SUS-004','No',0),('C-491','SUS-030','Cameras',1),('C-647','SUS-049','Travel',1),('C-826','SUS-532','No',1),('C-933','SUS-022','No',1);
/*!40000 ALTER TABLE `case_has_suspect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `case_has_witness`
--

DROP TABLE IF EXISTS `case_has_witness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `case_has_witness` (
  `Case_case_id` varchar(10) NOT NULL,
  `Witness_witness_id` varchar(10) NOT NULL,
  `relation_to_case` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Case_case_id`,`Witness_witness_id`),
  KEY `fk_Case_has_Witness_Witness1_idx` (`Witness_witness_id`),
  KEY `fk_Case_has_Witness_Case1_idx` (`Case_case_id`),
  CONSTRAINT `fk_Case_has_Witness_Case1` FOREIGN KEY (`Case_case_id`) REFERENCES `case` (`case_id`),
  CONSTRAINT `fk_Case_has_Witness_Witness1` FOREIGN KEY (`Witness_witness_id`) REFERENCES `witness` (`witness_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_has_witness`
--

LOCK TABLES `case_has_witness` WRITE;
/*!40000 ALTER TABLE `case_has_witness` DISABLE KEYS */;
INSERT INTO `case_has_witness` VALUES ('C-085','WIT-096','Undercover Agent'),('C-085','WIT-765','Hotel Staff, Found the Body'),('C-293','WIT-005','Nearby Resident'),('C-405','WIT-111','Driver of the Victim\'s Car'),('C-405','WIT-235','Passenger of the Victimâ€™s Car'),('C-412','WIT-436','Eyewitness to the Assault'),('C-412','WIT-467','Eyewitness to the Assault'),('C-491','WIT-321','Discovered the Unusual Symbol'),('C-826','WIT-356','Friend of the Missing Person'),('C-933','WIT-436','Nearby Resident');
/*!40000 ALTER TABLE `case_has_witness` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!50001 DROP VIEW IF EXISTS `clients`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `clients` AS SELECT 
 1 AS `lawyer_id`,
 1 AS `lawyer_name`,
 1 AS `client_id`,
 1 AS `client_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `clue`
--

DROP TABLE IF EXISTS `clue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clue` (
  `clue_id` varchar(10) NOT NULL,
  `is_murder_weapon` tinyint DEFAULT NULL,
  `date` date DEFAULT NULL,
  `place` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `Case_case_id` varchar(10) NOT NULL,
  `type` enum('physical evidence','digital evidence','crime scene characteristics') DEFAULT NULL,
  PRIMARY KEY (`clue_id`,`Case_case_id`),
  KEY `fk_Clue_Case1_idx` (`Case_case_id`),
  CONSTRAINT `fk_Clue_Case1` FOREIGN KEY (`Case_case_id`) REFERENCES `case` (`case_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clue`
--

LOCK TABLES `clue` WRITE;
/*!40000 ALTER TABLE `clue` DISABLE KEYS */;
INSERT INTO `clue` VALUES ('1',0,'2008-12-12','Underground Bunker','Fingerprint','C-826','physical evidence'),('19',0,'2013-06-20','Abandoned Warehouse','Bloodstained Clothing','C-293','physical evidence'),('2',0,'2008-12-13','Dark Alley','Surveillance Footage','C-826','digital evidence'),('24',0,'2013-06-21','Victim\'s Residence','Broken Necklace','C-293','physical evidence'),('3',1,'2005-09-30','Victim\'s Car','Gun Shell Casings','C-647','physical evidence'),('5',0,'2010-03-04','Crime Scene Alley','Footprints','C-412','physical evidence'),('6',1,'2012-10-14','Hotel Room','Poiso0us Substance','C-085','physical evidence'),('68',0,'2014-05-14','Abandoned Factory','Cryptic 0te','C-491','digital evidence'),('7',0,'2014-05-14','Park','Unusual Symbol','C-491','crime scene characteristics'),('93',0,'2020-09-10','City Park','Burned Documents','C-933','physical evidence');
/*!40000 ALTER TABLE `clue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `criminal_record`
--

DROP TABLE IF EXISTS `criminal_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `criminal_record` (
  `criminal_record` varchar(45) NOT NULL,
  `Suspect_suspect_id` varchar(10) NOT NULL,
  `type_of_sentence` enum('prison','fine','suspended','psychiatric treatment') NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`criminal_record`,`Suspect_suspect_id`,`date`),
  KEY `fk_Criminal_record_Suspect1_idx` (`Suspect_suspect_id`),
  CONSTRAINT `fk_Criminal_record_Suspect1` FOREIGN KEY (`Suspect_suspect_id`) REFERENCES `suspect` (`suspect_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `criminal_record`
--

LOCK TABLES `criminal_record` WRITE;
/*!40000 ALTER TABLE `criminal_record` DISABLE KEYS */;
INSERT INTO `criminal_record` VALUES ('Arson','SUS-004','fine','2005-09-30'),('Assault','SUS-001','prison','2014-06-20'),('Assault','SUS-030','prison','2013-06-21'),('Assault','SUS-532','prison','2010-03-04'),('Drug Possession','SUS-049','prison','2013-06-21'),('Drug Trafficking','SUS-004','suspended','2008-12-12'),('Forgery','SUS-245','fine','2013-06-20'),('Fraud','SUS-031','fine','2012-10-14'),('Grand Larceny','SUS-030','prison','2014-05-14'),('Kidnapping','SUS-532','prison','2012-10-14'),('Robbery','SUS-245','prison','2008-12-13'),('Theft','SUS-001','suspended','2013-05-14');
/*!40000 ALTER TABLE `criminal_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lawyer`
--

DROP TABLE IF EXISTS `lawyer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lawyer` (
  `lawyer_id` varchar(10) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `law_office_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`lawyer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lawyer`
--

LOCK TABLES `lawyer` WRITE;
/*!40000 ALTER TABLE `lawyer` DISABLE KEYS */;
INSERT INTO `lawyer` VALUES ('LAW-002','Stephanie Edwards',1,' 234-5678','Johnson Legal Services'),('LAW-008','Preston Burke',0,' 890-1234','Lee & Associates'),('LAW-012','Megan Hunt',1,' 789-0123','Brown Legal Solutions'),('LAW-043','Shane Ross',0,' 123-4567','Smith & Associates'),('LAW-056','Andrew DeLuca',0,' 456-7890','Anderson & Partners'),('LAW-089','Leah Murphy',1,' 678-9012','Turner Law Group'),('LAW-109','Teddy Altman',0,' 345-6789','Davis Law Firm'),('LAW-349','Holly Wheeler',1,' 901-2345','Spider Law Office'),('LAW-389','Nico Kim',0,' 012-3456','Smith Legal'),('LAW-905','Ben Warren',0,' 567-8901','Harris & Co.');
/*!40000 ALTER TABLE `lawyer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_examiner`
--

DROP TABLE IF EXISTS `medical_examiner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_examiner` (
  `medical_examiner_id` varchar(10) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `medical_department_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`medical_examiner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_examiner`
--

LOCK TABLES `medical_examiner` WRITE;
/*!40000 ALTER TABLE `medical_examiner` DISABLE KEYS */;
INSERT INTO `medical_examiner` VALUES ('ME-135','Vik Roy',1,' 456-7890','MD-732'),('ME-247','Carina DeLuca',1,' 123-4567','MD-178'),('ME-356','Heath Mercer',1,' 012-3456','MD-597'),('ME-498','Claudia Hunt',1,' 890-1234','MD-103'),('ME-512','Atticus Lincoln',0,' 234-5678','MD-409'),('ME-603','Reed Adamson',0,' 678-9012','MD-675'),('ME-689','Molly Grey-Thompson',1,' 345-6789','MD-586'),('ME-721','Hayes Morrison',1,' 567-8901','MD-841'),('ME-874','Robert Stark',0,' 901-2345','MD-264'),('ME-925','Ryan Spalding',0,' 789-0123','MD-318');
/*!40000 ALTER TABLE `medical_examiner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policeman`
--

DROP TABLE IF EXISTS `policeman`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policeman` (
  `policeman_id` varchar(10) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `police_station_id` varchar(10) DEFAULT NULL,
  `specialty` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`policeman_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policeman`
--

LOCK TABLES `policeman` WRITE;
/*!40000 ALTER TABLE `policeman` DISABLE KEYS */;
INSERT INTO `policeman` VALUES ('POL-001','Harper Wilson',0,'123-4567','PS-001','Homicide Investigation'),('POL-002','Meredith Grey',1,'234-5678','PS-098','Cybercrime'),('POL-003','Derek Shepherd',0,'345-6789','PS-501','Narcotics'),('POL-004','Cristina Yang',1,'456-7890','PS-056','Missing Persons'),('POL-005','Alex Karev',0,'567-8901','PS-432','SWAT'),('POL-006','Miranda Bailey',1,'678-9012','PS-102','Fraud Investigation'),('POL-007','Richard Webber',0,'789-0123','PS-002','Robbery'),('POL-008','April Kepner',1,'890-1234','PS-089','Homicide Investigation'),('POL-009','Jackson Avery',0,'901-2345','PS-032','Missing Persons'),('POL-010','Callie Torres',1,'012-3456','PS-209','Domestic Violence');
/*!40000 ALTER TABLE `policeman` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suspect`
--

DROP TABLE IF EXISTS `suspect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suspect` (
  `suspect_id` varchar(10) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `address_street` varchar(15) DEFAULT NULL,
  `address_number` int DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `Lawyer_lawyer_id` varchar(10) NOT NULL,
  `status` enum('free','arrested','imprisoned','dead') DEFAULT NULL,
  PRIMARY KEY (`suspect_id`),
  KEY `fk_Suspect_Lawyer1_idx` (`Lawyer_lawyer_id`),
  CONSTRAINT `fk_Suspect_Lawyer1` FOREIGN KEY (`Lawyer_lawyer_id`) REFERENCES `lawyer` (`lawyer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suspect`
--

LOCK TABLES `suspect` WRITE;
/*!40000 ALTER TABLE `suspect` DISABLE KEYS */;
INSERT INTO `suspect` VALUES ('SUS-001','Mark Sloan',' 123-4567`',0,'Main',123,'1988-05-10','LAW-089','imprisoned'),('SUS-004','Jo Wilson',' 567-8901',1,'Cedar',303,'1985-06-20','LAW-008','free'),('SUS-022','Maggie Pierce',' 789-0123',1,'Oak',505,'1989-04-12','LAW-389','arrested'),('SUS-030','Amelia Shepherd',' 890-1234',1,'Birch',404,'1993-09-07','LAW-349','arrested'),('SUS-031','Owen Hunt',' 345-6789',0,'Pine',789,'1982-03-15','LAW-008','dead'),('SUS-049','Arizona Robbins',' 234-5678',1,'Oak',456,'1995-07-03','LAW-012','free'),('SUS-192','Lexie Grey',' 456-7890',1,'Elm',101,'1990-11-02','LAW-349','arrested'),('SUS-245','George O\'Malley',' 678-9012',0,'Maple',202,'1977-02-08','LAW-389','free'),('SUS-532','Nathan Riggs',' 901-2345',0,'Pine',606,'1980-08-25','LAW-389','arrested');
/*!40000 ALTER TABLE `suspect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `suspect_full_record`
--

DROP TABLE IF EXISTS `suspect_full_record`;
/*!50001 DROP VIEW IF EXISTS `suspect_full_record`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `suspect_full_record` AS SELECT 
 1 AS `suspect_id`,
 1 AS `suspect_name`,
 1 AS `suspect_gender`,
 1 AS `criminal_record`,
 1 AS `sentence`,
 1 AS `date`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `victim`
--

DROP TABLE IF EXISTS `victim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `victim` (
  `victim_id` varchar(10) NOT NULL,
  `first_name` varchar(15) DEFAULT NULL,
  `last_name` varchar(15) DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `death_date` date DEFAULT NULL,
  `description_of_death` varchar(45) DEFAULT NULL,
  `nationality` varchar(45) DEFAULT NULL,
  `Case_case_id` varchar(10) NOT NULL,
  `Medical_Examiner_medical_examiner_id` varchar(10) NOT NULL,
  `Lawyer_lawyer_id` varchar(10) NOT NULL,
  PRIMARY KEY (`victim_id`),
  KEY `fk_Victim_Case1_idx` (`Case_case_id`),
  KEY `fk_Victim_Medical Examiner1_idx` (`Medical_Examiner_medical_examiner_id`),
  KEY `fk_Victim_Lawyer1_idx` (`Lawyer_lawyer_id`),
  CONSTRAINT `fk_Victim_Case1` FOREIGN KEY (`Case_case_id`) REFERENCES `case` (`case_id`),
  CONSTRAINT `fk_Victim_Lawyer1` FOREIGN KEY (`Lawyer_lawyer_id`) REFERENCES `lawyer` (`lawyer_id`),
  CONSTRAINT `fk_Victim_Medical Examiner1` FOREIGN KEY (`Medical_Examiner_medical_examiner_id`) REFERENCES `medical_examiner` (`medical_examiner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `victim`
--

LOCK TABLES `victim` WRITE;
/*!40000 ALTER TABLE `victim` DISABLE KEYS */;
INSERT INTO `victim` VALUES ('VIC-001','Emily','Thompson',1,'1985-07-12','2010-03-04','Strangulation','American','C-412','ME-247','LAW-043'),('VIC-002','James','Harris',0,'1978-01-22','2005-09-17','Stabbing','British','C-647','ME-512','LAW-905'),('VIC-003','Sophia','Rodriguez',1,'1992-03-08','2013-06-02','Heart Attack','Mexican','C-293','ME-689','LAW-002'),('VIC-004','Ethan','Miller',0,'1980-11-05','2008-12-12','Shooting','Canadian','C-826','ME-135','LAW-002'),('VIC-005','Isabella','Clarke',1,'1994-04-30','2012-10-07','Poisoning','Australian','C-085','ME-874','LAW-109'),('VIC-006','Daniel','Kim',0,'1983-06-14','2011-02-15','Blunt Force Trauma','South Korean','C-625','ME-356','LAW-002'),('VIC-007','Mia','Anderson',1,'1989-09-03','2014-05-10','Asphyxiation','Swedish','C-491','ME-721','LAW-056'),('VIC-008','Noah','Williams',0,'1975-12-18','2007-08-02','Shooting','Brazilian','C-405','ME-498','LAW-109'),('VIC-009','Grace','Smith',1,'1990-07-07','2008-12-12','Stabbing','Irish','C-826','ME-603','LAW-056'),('VIC-010','Lucas','Martinez',0,'1988-03-25','2014-05-10','Asphyxiation','Spanish','C-491','ME-925','LAW-109');
/*!40000 ALTER TABLE `victim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `witness`
--

DROP TABLE IF EXISTS `witness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `witness` (
  `witness_id` varchar(10) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`witness_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `witness`
--

LOCK TABLES `witness` WRITE;
/*!40000 ALTER TABLE `witness` DISABLE KEYS */;
INSERT INTO `witness` VALUES ('WIT-005','Mia Wright','1982-05-20',1,' 567-8901'),('WIT-096','Sebastian Cooper','1995-01-05',0,' 456-7890'),('WIT-111','Amelia Lewis','1975-07-14',1,' 901-2345'),('WIT-235','Jackson Scott','1992-08-25',0,' 890-1234'),('WIT-276','Chloe Turner','1988-12-10',1,' 789-0123'),('WIT-321','Benjamin Jackson','1983-11-28',0,' 012-3456'),('WIT-356','Elijah Taylor','1970-09-03',0,' 678-9012'),('WIT-436','Ava Turner','1990-04-05',1,' 123-4567'),('WIT-467','Liam Davis','1985-06-12',0,' 234-5678'),('WIT-765','Olivia Mitchell','1978-03-08',1,' 345-6789');
/*!40000 ALTER TABLE `witness` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `clients`
--

/*!50001 DROP VIEW IF EXISTS `clients`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`nantina`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `clients` AS select `lawyer`.`lawyer_id` AS `lawyer_id`,`lawyer`.`name` AS `lawyer_name`,`victim`.`victim_id` AS `client_id`,`victim`.`last_name` AS `client_name` from (`lawyer` join `victim` on((`lawyer`.`lawyer_id` = `victim`.`Lawyer_lawyer_id`))) union select `lawyer`.`lawyer_id` AS `lawyer_id`,`lawyer`.`name` AS `lawyer_name`,`suspect`.`suspect_id` AS `client_id`,`suspect`.`name` AS `client_name` from (`lawyer` join `suspect` on((`lawyer`.`lawyer_id` = `suspect`.`Lawyer_lawyer_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `suspect_full_record`
--

/*!50001 DROP VIEW IF EXISTS `suspect_full_record`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`nantina`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `suspect_full_record` AS select `suspect`.`suspect_id` AS `suspect_id`,`suspect`.`name` AS `suspect_name`,`suspect`.`gender` AS `suspect_gender`,`criminal_record`.`criminal_record` AS `criminal_record`,`criminal_record`.`type_of_sentence` AS `sentence`,`criminal_record`.`date` AS `date` from (`suspect` left join `criminal_record` on((`criminal_record`.`Suspect_suspect_id` = `suspect`.`suspect_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-20 12:32:53
