-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 03-09-2022 a las 21:08:40
-- Versión del servidor: 5.00.15
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `transporte`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(22) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `fecha` varchar(255) NOT NULL,
  `cuerpo` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `fecha`, `cuerpo`, `imagen`) VALUES
(3, 'Lucas Tarres', '2022-08-26', 'este es el Body 02', 'enoa2vg5edl2kr3b6g2q'),
(7, 'valor 04', '2022-08-26', 'cuerpo 04', ''),
(9, 'hola', '2022-09-03', '321321', ''),
(10, 'lucas prubas 02', '2022-09-16', 'asdadsasdadasdad', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `rating` varchar(4) NOT NULL DEFAULT '0',
  `cantidad` varchar(10) NOT NULL DEFAULT '0',
  `articulo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `description`, `category`, `imagen`, `rating`, `cantidad`, `articulo`) VALUES
(10, 'Disco WD 1 Tera', '10000', 'Disco sata clase 3 con velocidades de 7200rpm garantia de 6 meses', 'ELECTRONICA', 'fa1cxnux3yzklmaqjdoo', '4', '', '010221'),
(12, ' Camel Campera ', '25000', 'Campera parka con piel sintétitica. La Fargo Jacket es la ideal para vos ¿Por qué? Porque además de ser linda y con onda, tiene toda la tecnología necesaria para que puedas salir con la comodidad necesaria', 'HOMBRE', 'g3hbuqx70e7xjokbec96', '4', '', '2132100'),
(13, 'Mochila Azul', '1500', 'Mochila Juvenil ', 'VARIOS', 'brlcacz964nymm27vzc0', '1', '', 'UTN '),
(15, ' Campera Violeta ', '50000', 'Campera parka con piel sintétitica. La Fargo Jacket es la ideal para vos', 'MUJERES', 'flrz5o9jtyz7ayuccgle', '', '', 'adad1542a'),
(16, 'Remera Basica ', '1500', 'Remera cuello en V', 'HOMBRE', 'ylpzkg2drhloyud3o4by', '', '1000', '13212541');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '0',
  `telefono` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `localidad` varchar(255) NOT NULL,
  `provincia` varchar(255) NOT NULL,
  `nota` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario` (`usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `usuario`, `password`, `activo`, `telefono`, `mail`, `direccion`, `localidad`, `provincia`, `nota`) VALUES
(1, 'admin', '81dc9bdb52d04dc20036dbd8313ed055', 1, '', 'lucastarres@gmail.com', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `IMAGEN` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `IMAGEN`, `activo`) VALUES
(1, 'ltarres', '81dc9bdb52d04dc20036dbd8313ed055', 'enoa2vg5edl2kr3b6g2q', 1),
(2, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055', NULL, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
