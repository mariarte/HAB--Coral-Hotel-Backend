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
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order` (
  `idOrder` int(11) NOT NULL AUTO_INCREMENT,
  `idUSer` int(11) NOT NULL,
  `idExperience` int(11) NOT NULL,
  `units` int(11) NOT NULL,
  `orderDate` datetime DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `confirmedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idOrder`),
  KEY `fk_order_experiences_idx` (`idExperience`),
  KEY `fk_order_users` (`idUSer`),
  CONSTRAINT `fk_order_experiences` FOREIGN KEY (`idExperience`) REFERENCES `experiences` (`idExperience`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_users` FOREIGN KEY (`idUSer`) REFERENCES `users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,28,1,2,'2011-03-13 02:53:50','Desayuno para celiacos',NULL),(2,28,2,2,'2011-03-13 02:53:50','Por la tarde',NULL),(3,28,5,2,'2019-05-26 14:54:43','Hora aprox. 07:00 h','2019-05-26 14:54:43'),(4,33,5,2,'2019-05-26 15:00:30','Hora aprox. 07:00 h',NULL),(5,33,5,2,'2019-05-26 15:00:35','Hora aprox. 07:00 h',NULL),(6,43,5,1,'2019-05-26 15:02:25','Llegaré a las 9',NULL),(7,28,8,4,'2019-05-26 18:45:40','Horario de tarde',NULL),(8,28,8,1,'2019-05-26 18:48:42','',NULL),(9,28,6,2,'2019-05-26 18:54:50','Alérgico a marisco',NULL),(10,28,4,1,'2019-05-26 18:58:07','',NULL),(11,39,4,4,'2019-05-26 19:19:47','Vamos con 2 niñas',NULL),(12,39,7,4,'2019-05-26 19:20:58','Solo cata para 2 adultos, aunque vamos con nuestras hijas (mayores de 14 años)',NULL),(13,39,1,1,'2019-05-26 19:22:45','Desayuno a las 06.30 h',NULL),(14,39,4,1,'2019-05-26 19:22:58','bl valsdfjasdfl',NULL),(15,45,1,2,'2019-05-26 19:30:06','Hora: 10.00 h',NULL),(16,45,4,1,'2019-05-26 19:52:51','dfgdfgsdfgsd',NULL),(17,45,4,1,'2019-05-26 22:30:36','',NULL),(18,75,1,2,'2019-05-27 14:09:25','Hora: 09.30 h',NULL),(19,75,4,2,'2019-05-27 14:09:55','Preferencia: Por la tarde',NULL),(20,75,7,1,'2019-05-27 15:45:49','',NULL),(21,75,5,3,'2019-05-27 15:45:56','',NULL),(22,75,2,2,'2019-05-27 16:22:29','Movilidad Reducida 1 persona',NULL),(23,75,4,2,'2019-05-27 16:23:01','Baño por la tarde',NULL),(33,75,6,3,'2019-05-27 21:14:27','ria adentro',NULL),(34,75,2,3,'2019-05-27 21:57:37','Hora: por la tarde','2019-05-27 21:58:23'),(35,75,2,3,'2019-05-27 21:58:23','Hora: por la tarde','2019-05-27 21:58:23'),(36,44,4,2,'2019-05-27 22:29:21','Somos una pareja que vamos con nuestro bebé de 6 meses','2019-05-27 22:29:21'),(37,44,1,3,'2019-05-28 08:37:07','jijojijo',NULL),(38,44,1,5,'2019-05-28 08:57:32','Otra bodega',NULL),(39,44,1,2,'2019-05-28 08:58:20','vbvbvb',NULL),(40,44,4,7,'2019-05-28 09:02:49','bebe',NULL),(41,44,1,4,'2019-05-28 09:52:56',NULL,NULL),(42,44,6,3,'2019-05-28 09:54:47',NULL,NULL),(43,44,6,2,'2019-05-28 09:57:33',NULL,NULL),(44,44,7,4,'2019-05-28 09:59:35',NULL,NULL),(45,75,1,3,'2019-05-28 11:35:39','vgvgvg',NULL),(46,75,6,4,'2019-05-28 12:09:16','Llevaremos perro',NULL),(47,75,1,2,'2019-05-28 13:27:00','desayno anora',NULL),(48,75,1,2,'2019-05-28 13:33:25',NULL,NULL),(49,75,2,7,'2019-05-28 13:33:40',NULL,NULL),(50,75,1,3,'2019-05-28 13:39:27',NULL,NULL),(51,75,2,3,'2019-05-28 13:46:37',NULL,NULL),(52,75,2,1,'2019-05-28 13:46:41','',NULL),(53,75,2,3,'2019-05-28 13:46:53','',NULL),(54,75,2,4,'2019-05-28 13:56:31',NULL,NULL),(55,75,2,2,'2019-05-28 13:56:36','',NULL),(56,75,2,2,'2019-05-28 14:01:47',NULL,NULL),(57,75,4,1,'2019-05-28 14:01:51',NULL,NULL),(58,75,4,3,'2019-05-28 14:01:55','',NULL),(59,75,1,7,'2019-05-28 14:07:43',NULL,NULL),(60,75,2,1,'2019-05-28 14:07:48','',NULL),(61,75,4,2,'2019-05-28 14:07:52','',NULL),(62,75,2,4,'2019-05-28 14:07:57','',NULL),(63,75,2,1,'2019-05-28 14:08:00','',NULL),(64,75,2,1,'2019-05-28 14:08:02','',NULL),(65,75,1,3,'2019-05-28 14:08:07','',NULL),(66,75,4,3,'2019-05-28 14:12:04','maria',NULL),(67,75,4,2,'2019-05-28 14:14:29','bañossss',NULL),(68,75,4,3,'2019-05-28 14:42:05',NULL,NULL),(69,75,4,3,'2019-05-28 14:43:10',NULL,NULL),(70,75,7,3,'2019-05-28 14:45:10',NULL,NULL),(71,75,7,1,'2019-05-28 14:46:01',NULL,NULL),(72,75,4,3,'2019-05-28 14:54:30',NULL,NULL),(73,75,4,1,'2019-05-28 14:54:36',NULL,NULL),(74,75,4,6,'2019-05-28 14:54:54',NULL,NULL),(75,43,5,4,'2019-05-28 21:39:03',NULL,NULL),(76,43,2,2,'2019-05-28 21:39:32',NULL,NULL),(77,43,1,6,'2019-05-28 21:43:33',NULL,NULL),(78,43,4,2,'2019-05-28 21:44:39','bebes',NULL),(79,43,4,1,'2019-05-28 22:09:46',NULL,NULL),(80,43,4,1,'2019-05-28 22:33:47',NULL,NULL),(81,43,4,3,'2019-05-29 13:54:47','Vamos con un perro',NULL),(82,75,6,7,'2019-05-29 16:11:31','Seremos un grupo de 7 personas',NULL);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
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
