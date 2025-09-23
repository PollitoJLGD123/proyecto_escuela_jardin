DROP DATABASE IF EXISTS `db_jardin`;
CREATE DATABASE `db_jardin` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `db_jardin`;

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text,
  PRIMARY KEY (`id_rol`),
  UNIQUE KEY `idx_nombre_rol` (`nombre`)
) ENGINE=InnoDB;

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `estado` enum('activo','inactivo','bloqueado') NOT NULL DEFAULT 'activo',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `idx_email_usuario` (`email`),
  KEY `fk_usuarios_rol` (`id_rol`),
  CONSTRAINT `fk_usuarios_rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `docentes` (
  `id_docente` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `dni` char(8) NOT NULL,
  `email` varchar(100) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` char(9) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `especialidad` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_docente`),
  UNIQUE KEY `idx_dni_docente` (`dni`),
  UNIQUE KEY `idx_email_docente` (`email`),
  KEY `fk_docentes_usuario` (`id_usuario`),
  CONSTRAINT `fk_docentes_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `niveles` (
  `id_nivel` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `edad_requerida` int(11) NOT NULL,
  PRIMARY KEY (`id_nivel`)
) ENGINE=InnoDB;

CREATE TABLE `aulas` (
  `id_aula` int(11) NOT NULL AUTO_INCREMENT,
  `id_nivel` int(11) NOT NULL,
  `id_docente_tutor` int(11) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `capacidad` int(11) NOT NULL,
  PRIMARY KEY (`id_aula`),
  KEY `fk_aulas_nivel` (`id_nivel`),
  KEY `fk_aulas_docente` (`id_docente_tutor`),
  CONSTRAINT `fk_aulas_docente` FOREIGN KEY (`id_docente_tutor`) REFERENCES `docentes` (`id_docente`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_aulas_nivel` FOREIGN KEY (`id_nivel`) REFERENCES `niveles` (`id_nivel`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `alumnos` (
  `id_alumno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `dni` char(8) DEFAULT NULL,
  `fecha_nacimiento` date NOT NULL,
  `genero` enum('M','F') DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono_emergencia` char(9) DEFAULT NULL,
  `informacion_medica` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_alumno`),
  UNIQUE KEY `idx_dni_alumno` (`dni`)
) ENGINE=InnoDB;

CREATE TABLE `apoderados` (
  `id_apoderado` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `dni` char(8) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` char(9) DEFAULT NULL,
  `ocupacion` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_apoderado`),
  UNIQUE KEY `idx_dni_apoderado` (`dni`),
  UNIQUE KEY `idx_email_apoderado` (`email`),
  KEY `fk_apoderados_usuario` (`id_usuario`),
  CONSTRAINT `fk_apoderados_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `alumno_apoderados` (
  `id_alumno` int(11) NOT NULL,
  `id_apoderado` int(11) NOT NULL,
  `parentesco` varchar(50) NOT NULL,
  PRIMARY KEY (`id_alumno`,`id_apoderado`),
  KEY `fk_alumnoapoderados_apoderado` (`id_apoderado`),
  CONSTRAINT `fk_alumnoapoderados_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id_alumno`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_alumnoapoderados_apoderado` FOREIGN KEY (`id_apoderado`) REFERENCES `apoderados` (`id_apoderado`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `matriculas` (
  `id_matricula` int(11) NOT NULL AUTO_INCREMENT,
  `id_alumno` int(11) NOT NULL,
  `id_aula` int(11) NOT NULL,
  `fecha_matricula` date NOT NULL,
  `estado` enum('activa','retirado','promovido','trasladado') NOT NULL DEFAULT 'activa',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_matricula`),
  UNIQUE KEY `idx_alumno_aula_unica` (`id_alumno`, `id_aula`),
  KEY `fk_matriculas_aula` (`id_aula`),
  CONSTRAINT `fk_matriculas_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id_alumno`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_matriculas_aula` FOREIGN KEY (`id_aula`) REFERENCES `aulas` (`id_aula`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `areas_curriculares` (
  `id_area` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id_area`)
) ENGINE=InnoDB;

CREATE TABLE `calificaciones` (
  `id_calificacion` int(11) NOT NULL AUTO_INCREMENT,
  `id_matricula` int(11) NOT NULL,
  `id_area` int(11) NOT NULL,
  `id_docente` int(11) NOT NULL,
  `valor_cualitativo` varchar(50) DEFAULT NULL,
  `observacion_descriptiva` text,
  `fecha_registro` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_calificacion`),
  UNIQUE KEY `idx_evaluacion_unica` (`id_matricula`, `id_area`),
  KEY `fk_calificaciones_area` (`id_area`),
  KEY `fk_calificaciones_docente` (`id_docente`),
  CONSTRAINT `fk_calificaciones_area` FOREIGN KEY (`id_area`) REFERENCES `areas_curriculares` (`id_area`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_calificaciones_docente` FOREIGN KEY (`id_docente`) REFERENCES `docentes` (`id_docente`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_calificaciones_matricula` FOREIGN KEY (`id_matricula`) REFERENCES `matriculas` (`id_matricula`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `conceptos_pago` (
  `id_concepto_pago` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `monto_sugerido` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id_concepto_pago`)
) ENGINE=InnoDB;

CREATE TABLE `pagos` (
  `id_pago` int(11) NOT NULL AUTO_INCREMENT,
  `id_matricula` int(11) NOT NULL,
  `id_concepto_pago` int(11) NOT NULL,
  `monto_pagado` decimal(10,2) NOT NULL,
  `fecha_pago` date NOT NULL,
  `metodo_pago` enum('Efectivo','Transferencia','Yape/Plin','Tarjeta') NOT NULL,
  `numero_operacion` varchar(50) DEFAULT NULL,
  `observaciones` text,
  `id_usuario_registro` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_pago`),
  KEY `fk_pagos_matricula` (`id_matricula`),
  KEY `fk_pagos_concepto` (`id_concepto_pago`),
  KEY `fk_pagos_usuario` (`id_usuario_registro`),
  CONSTRAINT `fk_pagos_concepto` FOREIGN KEY (`id_concepto_pago`) REFERENCES `conceptos_pago` (`id_concepto_pago`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_pagos_matricula` FOREIGN KEY (`id_matricula`) REFERENCES `matriculas` (`id_matricula`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_pagos_usuario` FOREIGN KEY (`id_usuario_registro`) REFERENCES `usuarios` (`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `comunicados` (
  `id_comunicado` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario_emisor` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `fecha_publicacion` datetime NOT NULL,
  `destinatario_tipo` enum('GLOBAL','AULA','NIVEL') NOT NULL,
  `id_destinatario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_comunicado`),
  KEY `fk_comunicados_usuario` (`id_usuario_emisor`),
  CONSTRAINT `fk_comunicados_usuario` FOREIGN KEY (`id_usuario_emisor`) REFERENCES `usuarios` (`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;
