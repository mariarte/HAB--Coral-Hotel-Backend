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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-29 18:19:27
