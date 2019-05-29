-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: coralHotel
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `user_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (28,'JOSE ','jose@mailinator.com','$2b$10$5Min1dUHPuN/GBqsW30.r.MeVVJvrdfKEAefNB4EqcQwAwHhtHpLu','2019-05-15 16:01:38'),(31,'ANDRES MODIFICADO ','andres@yopmail.com','$2b$10$yY/c2dfWLBkWj4aAfrCVwumq4Pvf1gDnk68yeUuxG4Gz7sllH/0pi','2019-05-15 16:11:13'),(32,'LUIS','luis@mailinator.com','$2b$10$6mFhdq5PtytnJmrOB8xMJeWHBW2q8yassF00b2ihTveZocCr8XnTW','2019-05-15 16:17:55'),(33,'JUAN','juan@mailinator.com','$2b$10$9.24wivQnSnGcFSvUHnm5usIitHUaq2Iv2C0uEocOfHpF0.R52ft.','2019-05-18 00:58:31'),(34,'LUZ','luz@mailinator.com','$2b$10$ghn9kW/A6XowNDr.4F2m3.RY8uF10hIxo8yASVE1kO2JI8RCooOzi','2019-05-18 17:52:42'),(37,'BELEN','belen@mailinator.com','$2b$10$z2XNuysom9eCCPk9jYPoXu8PbkhRjlsBW6WZuEETf4HQ4.A81EQjm','2019-05-20 12:50:35'),(39,'JAVIER','javier@mailinator.com','$2b$10$GgoNIhFWTxNy3NjIviQQLe3Zc3VFCJCjMsJ7YZFHfOrS2Ezntey7O','2019-05-20 12:51:58'),(40,'PRUEBA','prueba@mailinator.com','$2b$10$zrCT3Om/5GNLAWITGT3kveO/hU0CisjQwZBxuVE/g3SuzKCCkBphy','2019-05-20 12:55:17'),(42,'PRUEBA2','prueba2@mailinator.com','$2b$10$60RuQi7IeCKD6HxEo3Q3jOwJ7JPKQrtJa/5/Jtbma4O6icVs.z/gm','2019-05-20 12:57:31'),(43,'SOFIA SANCHEZ','sofia@mailinator.com','$2b$10$.UE5n/gT2uNCEt2KYQjczO0XjgrjVCTjlUptzbOPBbXthDd3UveW2','2019-05-20 21:14:23'),(44,'HENAR FERNANDEZ','henar@mailinator.com','$2b$10$HNCauUj7I0Kd9c4eNyAny.eUxtTXPKedSQwCsk4UCZZwJORTpH1yW','2019-05-20 22:16:56'),(45,'ANA ROMO','ana@mailinator.com','$2b$10$E960l3/6eAIISt/w8ORT8OyTTdBvVTGGcZrROpT/DzdOPKVQie4hu','2019-05-21 10:54:30'),(46,'GERMAN','german@mailinator.com','$2b$10$EQcwMHsDnwSzrzJymQaqNumSENmmECFBkqX2d62LTR0aW.SzDTMOa','2019-05-21 11:10:20'),(61,'maria','mari@mailinator.com','$2b$10$Aa1NwDuPuUYlAbke9vfCcuuXhC3onDEltXFLVkL77nj0fvdwTuMAy','2019-05-22 23:20:46'),(67,'maria','vanesa@mailinator.com','$2b$10$gPSTzRsdhQwW37kr9sG0euMdd9.miUWTqWBtSXiysHwNfxC2DoW92','2019-05-22 23:33:26'),(74,'maria','maria@mailinator.com','$2b$10$uuGyK4D2RGnmm2KPgTP0T.BKvofyUnUHI4cbgGD9A0jbBiEkElhAO','2019-05-25 11:55:03'),(75,'PEPE NUÑEZ','pepe@mailinator.com','$2b$10$AQ2icFPMLgpHrXZ9tgCPcOdNpmkSiTlp1gKrZvm6tqE8mOS38c.9O','2019-05-27 14:06:31');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-29 18:19:27
