-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-03-2022 a las 15:06:38
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `xperson`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avatars`
--

CREATE TABLE `avatars` (
  `id` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `url_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `avatars`
--

INSERT INTO `avatars` (`id`, `users_id`, `url_name`, `createdAt`, `updatedAt`) VALUES
(2, 2, 'admin-user.png', '2022-03-02 14:36:06', '2022-03-02 14:36:06'),
(3, 1, 'admin-user.png', '2022-03-02 14:36:06', '2022-03-02 14:36:06'),
(4, 3, 'admin-user.png', '2022-03-02 14:36:06', '2022-03-02 14:36:06'),
(5, 4, 'admin-user.png', '2022-03-02 14:36:06', '2022-03-02 14:36:06'),
(6, 5, 'chimuelo-user.jpg', '2022-03-02 14:36:06', '2022-03-02 14:36:06'),
(16, 18, 'default-user.png', '2022-03-02 13:35:19', '2022-03-02 13:35:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'remeras', '2022-02-26 23:51:43', '2022-02-26 23:51:43'),
(2, 'pantalones', '2022-02-26 23:51:43', '2022-02-26 23:51:43'),
(3, 'abrigos', '2022-02-26 23:51:43', '2022-02-26 23:51:43'),
(4, 'accesorios', '2022-02-26 23:51:43', '2022-02-26 23:51:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'negro', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(2, 'blanco', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(3, 'gris', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(4, 'azul', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(5, 'celeste', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(6, 'rojo', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(7, 'rosa', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(8, 'amarillo', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(9, 'naranja', '2022-02-28 03:21:57', '2022-02-28 03:21:57'),
(10, 'verde', '2022-02-28 03:21:57', '2022-02-28 03:21:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `discounts`
--

CREATE TABLE `discounts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `discounts`
--

INSERT INTO `discounts` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, '0', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(2, '5', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(3, '10', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(4, '15', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(5, '20', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(6, '25', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(7, '30', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(8, '35', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(9, '40', '2022-02-28 03:19:36', '2022-02-28 03:19:36'),
(10, '45', '2022-02-28 03:19:36', '2022-02-28 03:19:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `products_id` int(11) DEFAULT NULL,
  `url_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `products_id`, `url_name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'remera1.1.jpg', '2022-03-02 14:46:50', '2022-03-02 14:46:50'),
(2, 2, 'bermuda-flex-gris.jpg', '2022-03-02 14:46:50', '2022-03-02 14:46:50'),
(3, 3, 'tapaboca-liso-arena.jpg', '2022-03-02 14:46:50', '2022-03-02 14:46:50'),
(4, 4, 'boxer-bamboo-menta.JPG', '2022-03-02 14:46:50', '2022-03-02 14:46:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `payments_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `date`, `total`, `users_id`, `payments_id`, `createdAt`, `updatedAt`) VALUES
(1, '0000-00-00', '3450', 5, 3, '2022-03-02 14:53:35', '2022-03-02 14:53:35'),
(2, '0000-00-00', '3990', 18, 1, '2022-03-02 14:53:35', '2022-03-02 14:53:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `payments`
--

INSERT INTO `payments` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'efectivo', '2022-02-28 03:20:56', '2022-02-28 03:20:56'),
(2, 'transferencia', '2022-02-28 03:20:56', '2022-02-28 03:20:56'),
(3, 'debito', '2022-02-28 03:20:56', '2022-02-28 03:20:56'),
(4, 'credito', '2022-02-28 03:20:56', '2022-02-28 03:20:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productorders`
--

CREATE TABLE `productorders` (
  `id` int(11) NOT NULL,
  `products_id` int(11) DEFAULT NULL,
  `orders_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `productorders`
--

INSERT INTO `productorders` (`id`, `products_id`, `orders_id`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, '2022-03-02 14:54:25', '2022-03-02 14:54:25'),
(2, 4, 2, '2022-03-02 14:54:25', '2022-03-02 14:54:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `stock_min` int(11) DEFAULT NULL,
  `stock_max` int(11) DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `categories_id` int(11) DEFAULT NULL,
  `sizes_id` int(11) DEFAULT NULL,
  `colors_id` int(11) DEFAULT NULL,
  `visibility` int(11) DEFAULT NULL,
  `recommended` int(11) DEFAULT NULL,
  `discounts_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `stock`, `stock_min`, `stock_max`, `description`, `price`, `categories_id`, `sizes_id`, `colors_id`, `visibility`, `recommended`, `discounts_id`, `createdAt`, `updatedAt`) VALUES
(1, 'MOORE PIMA', 10, 5, 20, 'Esta prenda posee tencnología HIDROWICK, Disipa la transpiración evitando el reingreso de humedad en la piel y en la prenda, Regula la temperatura corporal y facilita la transpiracion de la piel, Costuras planas.', '2500', 1, 3, 9, 1, 1, 8, '2022-03-02 14:39:53', '2022-03-02 14:39:53'),
(2, 'BERMUDA FLEX', 7, 5, 10, 'Muy cómodos en tus horas de caminar o correr y obtienes una libre movilidad.', '3450', 2, 3, 3, 1, 1, 4, '2022-03-02 14:39:53', '2022-03-02 14:39:53'),
(3, 'TAPABOCA LISO', 5, 5, 20, 'Tapaboca confeccionados en jersey de algodón 30/1. Doble capa de jersey (prueba aerosol ok). Elásticos redondos. Respirable. Doble capa reversible. Lavable.', '400', 4, 1, 8, 1, 1, 9, '2022-03-02 14:39:53', '2022-03-02 14:39:53'),
(4, 'BOXER WONKA', 6, 5, 20, 'Esta prenda posee tencnología HIDROWICK. Disipa la transpiración evitando el reingreso de humedad en la piel y en la prenda. Regula la temperatura corporal y facilita la transpiracion de la piel. Costuras planas', '3990', 2, 4, 10, 1, 1, 2, '2022-03-02 14:39:53', '2022-03-02 14:39:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2022-02-26 23:52:43', '2022-02-26 23:52:43'),
(2, 'cliente', '2022-02-26 23:52:43', '2022-02-26 23:52:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220225123328-create-discount.js'),
('20220225123329-create-category.js'),
('20220225123330-create-color.js'),
('20220225123330-create-size.js'),
('20220225123331-create-payment.js'),
('20220225123332-create-roles.js'),
('20220225123333-create-user.js'),
('20220225123334-create-avatar.js'),
('20220225123335-create-order.js'),
('20220225123336-create-product.js'),
('20220225123337-create-product-order.js'),
('20220225123340-create-image.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'unico', '2022-02-28 03:18:51', '2022-02-28 03:18:51'),
(2, 'small', '2022-02-28 03:18:51', '2022-02-28 03:18:51'),
(3, 'medium', '2022-02-28 03:18:51', '2022-02-28 03:18:51'),
(4, 'large', '2022-02-28 03:18:51', '2022-02-28 03:18:51'),
(5, 'extra large', '2022-02-28 03:18:51', '2022-02-28 03:18:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `date` date DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `roles_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `users_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `date`, `password`, `roles_id`, `createdAt`, `updatedAt`, `users_id`) VALUES
(1, 'camila ledezma', 'camilaledezma@indefined.com', '1997-04-06', '$2a$10$tMuvKBnnNQZwbGoknkY7L.hVPxdDaA5wLYkNBg0rhInIiCO34k.46', 1, '2022-02-26 23:57:35', '2022-02-26 23:57:35', NULL),
(2, 'Alexander Lamas', 'alexanderlamas@indefined.com', '2022-03-01', '$2a$10$tMuvKBnnNQZwbGoknkY7L.hVPxdDaA5wLYkNBg0rhInIiCO34k.46', 1, '2022-03-02 14:15:14', '2022-03-02 14:15:14', NULL),
(3, 'Gabriel Gomez', 'gabrielgomez@indefined.com', '2022-02-06', '$2a$10$tMuvKBnnNQZwbGoknkY7L.hVPxdDaA5wLYkNBg0rhInIiCO34k.46', 1, '2022-03-02 14:16:37', '2022-03-02 14:16:37', NULL),
(4, 'Mariela Calcina', 'marielacalcina@indefined.com', '2022-03-01', '$2a$10$tMuvKBnnNQZwbGoknkY7L.hVPxdDaA5wLYkNBg0rhInIiCO34k.46', 1, '2022-03-02 14:16:37', '2022-03-02 14:16:37', NULL),
(5, 'Chimuelo ', 'chimuelo@gmail.com', '2022-03-07', '$2a$10$th1t8N2OmAInqix.cW3Hz.nXdNg01KW8FZnEpxT4PuYzFX7q0PaMu', 2, '2022-03-02 14:16:37', '2022-03-02 14:16:37', NULL),
(18, 'chiruza', 'chiruza@gmail.com', NULL, '$2a$10$fRj64EmSyvEY.Exy/Nqat.GoFUWrKbHOxjWJWvYgtpQ537m5tnoFq', 2, '2022-03-02 13:35:19', '2022-03-02 13:35:19', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `avatars`
--
ALTER TABLE `avatars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_id` (`products_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `payments_id` (`payments_id`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productorders`
--
ALTER TABLE `productorders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_id` (`products_id`),
  ADD KEY `orders_id` (`orders_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_id` (`categories_id`),
  ADD KEY `sizes_id` (`sizes_id`),
  ADD KEY `colors_id` (`colors_id`),
  ADD KEY `discounts_id` (`discounts_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roles_id` (`roles_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `avatars`
--
ALTER TABLE `avatars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productorders`
--
ALTER TABLE `productorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `avatars`
--
ALTER TABLE `avatars`
  ADD CONSTRAINT `avatars_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`payments_id`) REFERENCES `payments` (`id`);

--
-- Filtros para la tabla `productorders`
--
ALTER TABLE `productorders`
  ADD CONSTRAINT `productorders_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productorders_ibfk_2` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`sizes_id`) REFERENCES `sizes` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`colors_id`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `products_ibfk_4` FOREIGN KEY (`discounts_id`) REFERENCES `discounts` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
