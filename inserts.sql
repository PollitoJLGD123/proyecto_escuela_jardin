-- ===================================
-- INSERTS PARA BASE DE DATOS JARDÍN INFANTIL
-- ===================================
USE `db_jardin`;
-- 1. ROLES
INSERT INTO `roles` (`nombre`, `descripcion`) VALUES
('ADMINISTRADOR', 'Usuario con acceso completo al sistema'),
('DOCENTE', 'Profesor a cargo de aulas y evaluaciones'),
('APODERADO', 'Padre, madre o tutor legal del alumno'),

-- 2. USUARIOS (Contraseñas hasheadas para seguridad)
INSERT INTO `usuarios` (`email`, `password_hash`, `id_rol`, `estado`) VALUES
-- Administradores y personal
('admin@jardin.edu.pe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 1, 'activo'), -- password
('director@jardin.edu.pe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 1, 'activo'), -- password
('secretaria@jardin.edu.pe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 1, 'activo'), -- password
-- Docentes
('maria.garcia@jardin.edu.pe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 2, 'activo'), -- password
('carlos.lopez@jardin.edu.pe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 2, 'activo'), -- password
('ana.rodriguez@jardin.edu.pe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 2, 'activo'), --password
('luis.martinez@jardin.edu.pe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 2, 'activo'), -- password
-- Apoderados
('padre1@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, 'activo'), -- password
('madre1@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, 'activo'), -- password
('apoderado2@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, 'activo'), -- password
('tutor1@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, 'activo'), --password
('familiar1@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, 'activo'), -- password
('papa.gomez@email.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, 'activo'); -- password

-- 3. DOCENTES
INSERT INTO `docentes` (`id_usuario`, `nombre`, `apellido`, `dni`, `email`, `direccion`, `telefono`, `fecha_nacimiento`, `fecha_ingreso`, `especialidad`) VALUES
(4, 'María', 'García', '12345678', 'maria.garcia@jardin.edu.pe', 'Av. Principal 123', '987654321', '1985-03-15', '2020-03-01', 'Educación Inicial 3 años'),
(5, 'Carlos', 'López', '87654321', 'carlos.lopez@jardin.edu.pe', 'Jr. Flores 456', '976543210', '1988-07-22', '2019-02-15', 'Educación Inicial 4 años'),
(6, 'Ana', 'Rodríguez', '11223344', 'ana.rodriguez@jardin.edu.pe', 'Calle Luna 789', '965432109', '1990-11-08', '2021-01-10', 'Educación Inicial 5 años'),
(7, 'Luis', 'Martínez', '44332211', 'luis.martinez@jardin.edu.pe', 'Av. Sol 321', '954321098', '1987-05-12', '2018-08-20', 'Educación Inicial'),
(NULL, 'Carmen', 'Silva', '55667788', 'carmen.silva@jardin.edu.pe', 'Jr. Paz 654', '943210987', '1992-09-03', '2022-03-05', 'Educación Inicial'),
(NULL, 'Roberto', 'Torres', '88776655', 'roberto.torres@jardin.edu.pe', 'Calle Norte 987', '932109876', '1986-12-18', '2019-07-12', 'Educación Inicial');

-- 4. AULAS (Múltiples aulas por edad con nombres específicos)
INSERT INTO `aulas` (`id_docente_tutor`, `nombre`, `capacidad`, `nivel_nombre`, `edad_requerida`) VALUES
-- Aulas para 3 años
(1, 'Aula Rosa A', 15, 'Inicial 3 años', 3),
(1, 'Aula Rosa B', 15, 'Inicial 3 años', 3),
-- Aulas para 4 años
(2, 'Aula Púrpura A', 18, 'Inicial 4 años', 4),
(2, 'Aula Púrpura B', 18, 'Inicial 4 años', 4),
(4, 'Aula Púrpura C', 18, 'Inicial 4 años', 4),
-- Aulas para 5 años
(3, 'Aula Azul A', 20, 'Inicial 5 años', 5),
(3, 'Aula Azul B', 20, 'Inicial 5 años', 5),
(5, 'Aula Azul C', 20, 'Inicial 5 años', 5);

-- 5. ALUMNOS
INSERT INTO `alumnos` (`nombre`, `apellido`, `dni`, `fecha_nacimiento`, `genero`, `direccion`, `telefono_emergencia`, `informacion_medica`) VALUES
-- Alumnos de 3 años (nacidos en 2022)
('Sebastián', 'Pérez', '10001001', '2022-04-15', 'M', 'Av. Los Álamos 123', '987123456', 'Sin alergias conocidas'),
('Valentina', 'Morales', '10001002', '2022-06-20', 'F', 'Jr. Las Flores 456', '987234567', 'Alergia a los mariscos'),
('Mateo', 'Vásquez', '10001003', '2022-02-10', 'M', 'Calle Primavera 789', '987345678', 'Asma leve'),
('Isabella', 'Herrera', '10001004', '2022-08-05', 'F', 'Av. Central 321', '987456789', 'Sin condiciones médicas'),
('Diego', 'Castillo', '10001005', '2022-01-30', 'M', 'Jr. Libertad 654', '987567890', 'Diabetes tipo 1'),

-- Alumnos de 4 años (nacidos en 2021)
('Sofía', 'Ramírez', '20002001', '2021-03-12', 'F', 'Av. Universidad 147', '976123456', 'Sin alergias conocidas'),
('Alexander', 'Mendoza', '20002002', '2021-07-18', 'M', 'Calle Los Pinos 258', '976234567', 'Intolerancia a la lactosa'),
('Camila', 'Torres', '20002003', '2021-05-25', 'F', 'Jr. San Martín 369', '976345678', 'Sin condiciones médicas'),
('Joaquín', 'Flores', '20002004', '2021-09-08', 'M', 'Av. Grau 741', '976456789', 'Epilepsia controlada'),
('Luciana', 'Gutiérrez', '20002005', '2021-11-14', 'F', 'Calle Bolívar 852', '976567890', 'Alergia al polen'),
('Emilio', 'Vargas', '20002006', '2021-04-02', 'M', 'Jr. Tacna 963', '976678901', 'Sin alergias conocidas'),
('Antonella', 'Sánchez', '20002007', '2021-12-20', 'F', 'Av. Arequipa 159', '976789012', 'Dermatitis atópica'),

-- Alumnos de 5 años (nacidos en 2020)
('Nicolás', 'López', '30003001', '2020-02-14', 'M', 'Calle Lima 357', '965123456', 'Sin condiciones médicas'),
('Fernanda', 'García', '30003002', '2020-06-30', 'F', 'Av. Cusco 468', '965234567', 'Alergia a los frutos secos'),
('Santiago', 'Martín', '30003003', '2020-08-22', 'M', 'Jr. Huánuco 579', '965345678', 'Sin alergias conocidas'),
('Valeria', 'Cruz', '30003004', '2020-10-05', 'F', 'Calle Piura 680', '965456789', 'Hipotiroidismo'),
('Adrián', 'Rojas', '30003005', '2020-04-17', 'M', 'Av. Trujillo 791', '965567890', 'Sin condiciones médicas'),
('Renata', 'Díaz', '30003006', '2020-12-03', 'F', 'Jr. Ica 802', '965678901', 'Alergia alimentaria múltiple'),
('Bruno', 'Moreno', '30003007', '2020-07-11', 'M', 'Calle Tacna 913', '965789012', 'Sin alergias conocidas'),
('Catalina', 'Jiménez', '30003008', '2020-09-28', 'F', 'Av. Moquegua 024', '965890123', 'Trastorno del espectro autista leve');

-- 6. APODERADOS
INSERT INTO `apoderados` (`id_usuario`, `nombre`, `apellido`, `dni`, `email`, `fecha_nacimiento`, `direccion`, `telefono`, `ocupacion`) VALUES
(8, 'Juan Carlos', 'Pérez', '40001001', 'padre1@email.com', '1985-08-12', 'Av. Los Álamos 123', '987123456', 'Ingeniero'),
(9, 'María Elena', 'Morales', '40001002', 'madre1@email.com', '1988-03-25', 'Jr. Las Flores 456', '987234567', 'Doctora'),
(10, 'Roberto', 'Vásquez', '40001003', 'apoderado2@email.com', '1982-11-07', 'Calle Primavera 789', '987345678', 'Contador'),
(11, 'Carmen', 'Herrera', '40001004', 'tutor1@email.com', '1990-06-18', 'Av. Central 321', '987456789', 'Profesora'),
(12, 'Luis Alberto', 'Castillo', '40001005', 'familiar1@email.com', '1978-12-30', 'Jr. Libertad 654', '987567890', 'Abogado'),
(13, 'Patricia', 'Ramírez', '40001006', 'papa.gomez@email.com', '1986-04-22', 'Av. Universidad 147', '976123456', 'Arquitecta'),
(NULL, 'Fernando', 'Mendoza', '40001007', 'fernando.mendoza@email.com', '1983-09-15', 'Calle Los Pinos 258', '976234567', 'Empresario'),
(NULL, 'Claudia', 'Torres', '40001008', 'claudia.torres@email.com', '1989-01-08', 'Jr. San Martín 369', '976345678', 'Psicóloga'),
(NULL, 'Miguel', 'Flores', '40001009', 'miguel.flores@email.com', '1981-07-26', 'Av. Grau 741', '976456789', 'Chef'),
(NULL, 'Sandra', 'Gutiérrez', '40001010', 'sandra.gutierrez@email.com', '1987-10-12', 'Calle Bolívar 852', '976567890', 'Enfermera');

-- 7. RELACIONES ALUMNO-APODERADOS
INSERT INTO `alumno_apoderados` (`id_alumno`, `id_apoderado`, `parentesco`) VALUES
-- Sebastián Pérez
(1, 1, 'Padre'),
(1, 2, 'Madre'),
-- Valentina Morales
(2, 2, 'Madre'),
(2, 3, 'Padre'),
-- Mateo Vásquez
(3, 3, 'Padre'),
(3, 4, 'Abuela'),
-- Isabella Herrera
(4, 4, 'Tía/Tutora'),
(4, 5, 'Tío'),
-- Diego Castillo
(5, 5, 'Padre'),
(5, 6, 'Madre'),
-- Sofía Ramírez
(6, 6, 'Madre'),
(6, 7, 'Padre'),
-- Alexander Mendoza
(7, 7, 'Padre'),
(7, 8, 'Madre'),
-- Camila Torres
(8, 8, 'Madre'),
(8, 9, 'Padre'),
-- Joaquín Flores
(9, 9, 'Padre'),
(9, 10, 'Madre'),
-- Luciana Gutiérrez
(10, 10, 'Madre'),
-- Emilio Vargas
(11, 1, 'Padre'),
-- Antonella Sánchez
(12, 2, 'Madre'),
-- Nicolás López
(13, 3, 'Padre'),
-- Fernanda García
(14, 4, 'Madre'),
-- Santiago Martín
(15, 5, 'Padre'),
-- Valeria Cruz
(16, 6, 'Madre'),
-- Adrián Rojas
(17, 7, 'Padre'),
-- Renata Díaz
(18, 8, 'Madre'),
-- Bruno Moreno
(19, 9, 'Padre'),
-- Catalina Jiménez
(20, 10, 'Madre');

-- 8. MATRÍCULAS
INSERT INTO `matriculas` (`id_alumno`, `id_aula`, `fecha_matricula`, `estado`) VALUES
-- Matrículas en Aulas Rosa (3 años)
(1, 1, '2025-03-01', 'activa'), -- Sebastián en Aula Rosa A
(2, 1, '2025-03-05', 'activa'), -- Valentina en Aula Rosa A
(3, 2, '2025-03-02', 'activa'), -- Mateo en Aula Rosa B
(4, 2, '2025-03-08', 'activa'), -- Isabella en Aula Rosa B
(5, 1, '2025-03-10', 'activa'), -- Diego en Aula Rosa A

-- Matrículas en Aulas Púrpura (4 años)
(6, 3, '2025-03-01', 'activa'), -- Sofía en Aula Púrpura A
(7, 3, '2025-03-03', 'activa'), -- Alexander en Aula Púrpura A
(8, 4, '2025-03-02', 'activa'), -- Camila en Aula Púrpura B
(9, 4, '2025-03-06', 'activa'), -- Joaquín en Aula Púrpura B
(10, 5, '2025-03-04', 'activa'), -- Luciana en Aula Púrpura C
(11, 5, '2025-03-07', 'activa'), -- Emilio en Aula Púrpura C
(12, 3, '2025-03-09', 'activa'), -- Antonella en Aula Púrpura A

-- Matrículas en Aulas Azul (5 años)
(13, 6, '2025-03-01', 'activa'), -- Nicolás en Aula Azul A
(14, 6, '2025-03-03', 'activa'), -- Fernanda en Aula Azul A
(15, 7, '2025-03-02', 'activa'), -- Santiago en Aula Azul B
(16, 7, '2025-03-05', 'activa'), -- Valeria en Aula Azul B
(17, 8, '2025-03-04', 'activa'), -- Adrián en Aula Azul C
(18, 8, '2025-03-06', 'activa'), -- Renata en Aula Azul C
(19, 6, '2025-03-08', 'activa'), -- Bruno en Aula Azul A
(20, 7, '2025-03-10', 'activa'); -- Catalina en Aula Azul B

-- 9. ÁREAS CURRICULARES
INSERT INTO `areas_curriculares` (`nombre`) VALUES
('Personal Social'),
('Comunicación'),
('Matemática'),
('Ciencia y Tecnología'),
('Psicomotriz'),
('Arte y Cultura'),
('Religión'),
('Inglés');

-- 10. CALIFICACIONES (Ejemplos de evaluaciones cualitativas)
INSERT INTO `calificaciones` (`id_matricula`, `id_area`, `id_docente`, `valor_cualitativo`, `observacion_descriptiva`, `fecha_registro`) VALUES
-- Calificaciones para algunos alumnos de 3 años
(1, 1, 1, 'Logro Esperado', 'Sebastián muestra buena adaptación al entorno escolar y se relaciona bien con sus compañeros.', '2025-06-15 10:30:00'),
(1, 2, 1, 'En Proceso', 'Está desarrollando su vocabulario y expresión oral gradualmente.', '2025-06-15 10:35:00'),
(2, 1, 1, 'Logro Destacado', 'Valentina demuestra excelentes habilidades sociales y liderazgo natural.', '2025-06-15 11:00:00'),
(2, 2, 1, 'Logro Esperado', 'Se expresa con claridad y participa activamente en actividades comunicativas.', '2025-06-15 11:05:00'),

-- Calificaciones para algunos alumnos de 4 años
(6, 3, 2, 'Logro Esperado', 'Sofía comprende conceptos matemáticos básicos y los aplica correctamente.', '2025-06-20 09:15:00'),
(6, 4, 2, 'Logro Destacado', 'Muestra gran curiosidad por los fenómenos naturales y hace preguntas pertinentes.', '2025-06-20 09:20:00'),
(7, 3, 2, 'En Proceso', 'Alexander necesita más práctica en el reconocimiento de números y conteo.', '2025-06-20 09:45:00'),

-- Calificaciones para algunos alumnos de 5 años
(13, 1, 3, 'Logro Esperado', 'Nicolás demuestra autonomía en sus actividades y respeta las normas de convivencia.', '2025-06-25 08:30:00'),
(13, 2, 3, 'Logro Destacado', 'Excelente desarrollo en pre-lectura y pre-escritura, está listo para primer grado.', '2025-06-25 08:35:00'),
(14, 5, 3, 'Logro Esperado', 'Fernanda tiene buen desarrollo de su coordinación motora gruesa y fina.', '2025-06-25 09:00:00');

-- 11. CONCEPTOS DE PAGO
INSERT INTO `conceptos_pago` (`nombre`, `descripcion`, `monto_sugerido`) VALUES
('Matrícula', 'Pago único de matrícula anual', 150.00),
('Pensión Mensual', 'Mensualidad escolar', 250.00),
('Materiales Educativos', 'Kit de materiales y útiles escolares', 80.00),
('Seguro Escolar', 'Seguro de accidentes estudiantil', 30.00),
('Actividades Especiales', 'Paseos, talleres y eventos especiales', 50.00),
('Uniformes', 'Uniformes y accesorios escolares', 120.00);

-- 12. PAGOS (Ejemplos de pagos realizados)
INSERT INTO `pagos` (`id_matricula`, `id_concepto_pago`, `monto_pagado`, `fecha_pago`, `metodo_pago`, `numero_operacion`, `observaciones`, `id_usuario_registro`) VALUES
-- Pagos de matrícula
(1, 1, 150.00, '2025-02-28', 'Transferencia', 'TRF-001234', 'Pago completo de matrícula', 3),
(2, 1, 150.00, '2025-03-01', 'Yape/Plin', 'YPE-567890', 'Pago vía Yape', 3),
(3, 1, 150.00, '2025-03-02', 'Efectivo', NULL, 'Pago en efectivo', 3),

-- Pagos de pensiones marzo
(1, 2, 250.00, '2025-03-05', 'Transferencia', 'TRF-001235', 'Pensión marzo 2025', 3),
(2, 2, 250.00, '2025-03-06', 'Tarjeta', 'TDC-445566', 'Pago con tarjeta de crédito', 3),
(3, 2, 250.00, '2025-03-08', 'Efectivo', NULL, 'Pensión marzo en efectivo', 3),

-- Pagos de materiales educativos
(1, 3, 80.00, '2025-03-10', 'Yape/Plin', 'YPE-789012', 'Kit de materiales 3 años', 3),
(6, 3, 80.00, '2025-03-12', 'Transferencia', 'TRF-001236', 'Materiales 4 años', 3),
(13, 3, 80.00, '2025-03-15', 'Efectivo', NULL, 'Útiles escolares 5 años', 3),

-- Pagos de seguros
(1, 4, 30.00, '2025-03-20', 'Yape/Plin', 'YPE-345678', 'Seguro escolar anual', 3),
(2, 4, 30.00, '2025-03-22', 'Transferencia', 'TRF-001237', 'Seguro de accidentes', 3);

-- 13. COMUNICADOS
INSERT INTO `comunicados` (`id_usuario_emisor`, `titulo`, `contenido`, `fecha_publicacion`, `destinatario_tipo`, `id_destinatario`) VALUES
-- Comunicados globales
(2, 'Bienvenida Año Escolar 2025', 'Estimados padres de familia, les damos la más cordial bienvenida al año escolar 2025. Estamos muy emocionados de iniciar este nuevo período académico junto a sus pequeños...', '2025-02-15 08:00:00', 'GLOBAL', NULL),

(2, 'Protocolo Sanitario Vigente', 'Recordamos a toda la comunidad educativa mantener los protocolos de bioseguridad establecidos. Es importante que los niños vengan con mascarilla y que se respeten los horarios de entrada y salida...', '2025-03-01 07:30:00', 'GLOBAL', NULL),

-- Comunicados por nivel
(4, 'Reunión Padres de Familia - 3 años', 'Estimados padres de los niños de 3 años, los invitamos a la reunión informativa que se realizará el viernes 28 de marzo a las 6:00 PM en el aula de sus hijos...', '2025-03-20 15:00:00', 'NIVEL', 3),

(5, 'Actividad Especial - Aulas de 4 años', 'Los niños de 4 años participarán en la "Feria de Ciencias" el próximo miércoles 2 de abril. Por favor, enviar el delantal o ropa que se pueda ensuciar...', '2025-03-25 14:00:00', 'NIVEL', 4),

-- Comunicados específicos por aula
(3, 'Recordatorio - Aula Azul A', 'Padres del Aula Azul A, recordamos que mañana es el día de compartir. Cada niño debe traer una fruta para la actividad de alimentación saludable...', '2025-09-22 16:30:00', 'AULA', 6),

(1, 'Felicitaciones Aula Púrpura B', 'Queremos felicitar a los niños del Aula Púrpura B por su excelente participación en el concurso de dibujo. ¡Todos son unos artistas!', '2025-09-20 17:00:00', 'AULA', 4);

-- ===================================
-- RESUMEN DE CONTRASEÑAS GENERADAS:
-- ===================================
/*
USUARIOS ADMINISTRATIVOS:
- admin@jardin.edu.pe: admin123
- director@jardin.edu.pe: director123  
- secretaria@jardin.edu.pe: secret123

DOCENTES:
- maria.garcia@jardin.edu.pe: maria123
- carlos.lopez@jardin.edu.pe: carlos123
- ana.rodriguez@jardin.edu.pe: ana123
- luis.martinez@jardin.edu.pe: luis123

APODERADOS:
- padre1@email.com: padre123
- madre1@email.com: madre123
- apoderado2@email.com: apod123
- tutor1@email.com: tutor123
- familiar1@email.com: fam123
- papa.gomez@email.com: papa123

NOTA: Todas las contraseñas están hasheadas usando bcrypt por seguridad.
En un entorno real, se debe implementar un sistema de cambio de contraseña
en el primer inicio de sesión.
*/