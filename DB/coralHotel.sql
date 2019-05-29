-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: coralHotel
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
-- Table structure for table `experiences`
--

DROP TABLE IF EXISTS `experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experiences` (
  `idExperience` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idExperience`),
  FULLTEXT KEY `experience_title_desc` (`title`,`description`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiences`
--

LOCK TABLES `experiences` WRITE;
/*!40000 ALTER TABLE `experiences` DISABLE KEYS */;
INSERT INTO `experiences` VALUES (1,'EMPEZAR EL DÍA CON UN BUEN DESAYUNO?','DESAYUNO CASERO','Desayuno elaborado con productos caseros: cafés, zumos, bollería, cereales, embutidos, frutas. Precio por persona',9.00,'https://res.cloudinary.com/cloudmaria/image/upload/v1558182427/desayuno_o2c6tv.jpg','https://res.cloudinary.com/cloudmaria/image/upload/v1558182428/desayuno2_ulmg4n.jpg','https://res.cloudinary.com/cloudmaria/image/upload/v1558186159/desayuno6_dnzbk6.jpg','https://res.cloudinary.com/cloudmaria/image/upload/v1558186160/desayuno4_zxxthb.jpg'),(2,'BODEGA! CATA! QUE MÁS SE PUEDE PEDIR...','VISITA A BODEGA','Visita a bodega tradicional que incluye cata de 3 vinos: joven maceración carbónica, crianza y de autor',12.50,'https://res.cloudinary.com/cloudmaria/image/upload/v1558186160/bodega1_xzwgiw.jpg','https://res.cloudinary.com/cloudmaria/image/upload/v1558186159/bodega3_usul7t.jpg','https://res.cloudinary.com/cloudmaria/image/upload/v1558186159/bodega2_cz7plo.jpg',NULL),(4,'QUIERES SENTIRTE COMO UN BEBÉ?','BAÑO REJUVENECEDOR','Baño rejuvenecedor en nuestro spa, disfruta de las propiedades de los polifenoles y siente tu piel como la de un bebé',22.00,'https://res.cloudinary.com/cloudmaria/image/upload/v1558186159/familia1_kn9sbd.jpg',NULL,NULL,NULL),(5,'VIVE LA PINTURA!','TALLER DE PINTURA','Disfruta de un taller de pintura personalizado...aprenderás de grandes profesionales. Precio por persona',75.00,'https://res.cloudinary.com/cloudmaria/image/upload/v1558199388/pintura_woxmjl.jpg',NULL,NULL,NULL),(6,'RELAX...PASEO POR LA RÍA','PASEO EN VELERO','Vive la experiencia de un paseo en velero por la Ría, relax, mar...maravilloso. Precio por persona',60.00,'https://res.cloudinary.com/cloudmaria/image/upload/v1558199388/barco_ourqrq.jpg',NULL,NULL,NULL),(7,'UVAS...NATURALEZA!','VISITA A BODEGA','Visita a bodega moderna...arquitectura y tradición! Incluye degustación de tipos de uva. Precio por persona',12.50,'https://res.cloudinary.com/cloudmaria/image/upload/v1558186159/bodega3_usul7t.jpg',NULL,NULL,NULL),(8,'BODEGAS...ARQUITECTURA...VINO!','VISITA A BODEGA','Visita a bodega moderna...arquitectura y tradición! Incluye cata de vino. Precio por persona',13.50,'https://res.cloudinary.com/cloudmaria/image/upload/v1558871518/home_ciudad_del_vino_i8xks4.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `experiences` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `users` VALUES (28,'JOSE ','jose@mailinator.com','$2b$10$5Min1dUHPuN/GBqsW30.r.MeVVJvrdfKEAefNB4EqcQwAwHhtHpLu','2019-05-15 16:01:38'),(31,'ANDRES MODIFICADO ','andres@yopmail.com','$2b$10$yY/c2dfWLBkWj4aAfrCVwumq4Pvf1gDnk68yeUuxG4Gz7sllH/0pi','2019-05-15 16:11:13'),(32,'LUIS','luis@mailinator.com','$2b$10$6mFhdq5PtytnJmrOB8xMJeWHBW2q8yassF00b2ihTveZocCr8XnTW','2019-05-15 16:17:55'),(33,'JUAN','juan@mailinator.com','$2b$10$9.24wivQnSnGcFSvUHnm5usIitHUaq2Iv2C0uEocOfHpF0.R52ft.','2019-05-18 00:58:31'),(34,'LUZ','luz@mailinator.com','$2b$10$ghn9kW/A6XowNDr.4F2m3.RY8uF10hIxo8yASVE1kO2JI8RCooOzi','2019-05-18 17:52:42'),(37,'BELEN','belen@mailinator.com','$2b$10$z2XNuysom9eCCPk9jYPoXu8PbkhRjlsBW6WZuEETf4HQ4.A81EQjm','2019-05-20 12:50:35'),(39,'JAVIER','javier@mailinator.com','$2b$10$GgoNIhFWTxNy3NjIviQQLe3Zc3VFCJCjMsJ7YZFHfOrS2Ezntey7O','2019-05-20 12:51:58'),(40,'PRUEBA','prueba@mailinator.com','$2b$10$zrCT3Om/5GNLAWITGT3kveO/hU0CisjQwZBxuVE/g3SuzKCCkBphy','2019-05-20 12:55:17'),(43,'SOFIA SANCHEZ','sofia@mailinator.com','$2b$10$.UE5n/gT2uNCEt2KYQjczO0XjgrjVCTjlUptzbOPBbXthDd3UveW2','2019-05-20 21:14:23'),(44,'HENAR FERNANDEZ','henar@mailinator.com','$2b$10$HNCauUj7I0Kd9c4eNyAny.eUxtTXPKedSQwCsk4UCZZwJORTpH1yW','2019-05-20 22:16:56'),(45,'ANA ROMO','ana@mailinator.com','$2b$10$E960l3/6eAIISt/w8ORT8OyTTdBvVTGGcZrROpT/DzdOPKVQie4hu','2019-05-21 10:54:30'),(46,'GERMAN','german@mailinator.com','$2b$10$EQcwMHsDnwSzrzJymQaqNumSENmmECFBkqX2d62LTR0aW.SzDTMOa','2019-05-21 11:10:20'),(61,'maria','mari@mailinator.com','$2b$10$Aa1NwDuPuUYlAbke9vfCcuuXhC3onDEltXFLVkL77nj0fvdwTuMAy','2019-05-22 23:20:46'),(67,'maria','vanesa@mailinator.com','$2b$10$gPSTzRsdhQwW37kr9sG0euMdd9.miUWTqWBtSXiysHwNfxC2DoW92','2019-05-22 23:33:26'),(74,'maria','maria@mailinator.com','$2b$10$uuGyK4D2RGnmm2KPgTP0T.BKvofyUnUHI4cbgGD9A0jbBiEkElhAO','2019-05-25 11:55:03'),(75,'PEPE NUÑEZ','pepe@mailinator.com','$2b$10$AQ2icFPMLgpHrXZ9tgCPcOdNpmkSiTlp1gKrZvm6tqE8mOS38c.9O','2019-05-27 14:06:31');
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

-- Dump completed on 2019-05-29 18:52:47

