CREATE DATABASE bd_mediremind;
USE bd_mediremind;

CREATE TABLE tipos_medicamento (
  id_tipo_medicamento INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE presentaciones_medicamento (
  id_presentacion_medicamento INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE unidades_dosis (
  id_unidad_dosis INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  abreviatura VARCHAR(20) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE frecuencia (
  id_frecuencia INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido_paterno VARCHAR(100) NOT NULL,
  apellido_materno VARCHAR(100) NOT NULL,
  correo VARCHAR(150) NOT NULL,
  password VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  fecha_nacimiento DATE NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medicamentos (
  id_medicamento INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  imagen_url VARCHAR(200),
  id_tipo_medicamento INT,
  id_presentacion_medicamento INT,
  id_unidad_dosis INT,
  dosis_cantidad INT,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_tipo_medicamento) REFERENCES tipos_medicamento(id_tipo_medicamento),
  FOREIGN KEY (id_presentacion_medicamento) REFERENCES presentaciones_medicamento(id_presentacion_medicamento),
  FOREIGN KEY (id_unidad_dosis) REFERENCES unidades_dosis(id_unidad_dosis)
);

CREATE TABLE recordatorios (
  id_recordatorio INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  id_medicamento INT,
  id_frecuencia INT,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  hora TIME NOT NULL,
  notas VARCHAR(200),
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_medicamento) REFERENCES medicamentos(id_medicamento),
  FOREIGN KEY (id_frecuencia) REFERENCES frecuencia(id_frecuencia)
);

CREATE TABLE dias_recordatorio (
  id_dia_recordatorio INT AUTO_INCREMENT PRIMARY KEY,
  id_recordatorio INT,
  dia INT NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_recordatorio) REFERENCES recordatorios(id_recordatorio)
);

CREATE TABLE historial_tomas (
  id_historial_toma INT AUTO_INCREMENT PRIMARY KEY,
  id_recordatorio INT NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  estado CHAR(1) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_recordatorio) REFERENCES recordatorios(id_recordatorio)
);

CREATE TABLE contactos_emergencia (
  id_contacto_emergencia INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  nombre VARCHAR(100) NOT NULL,
  apellido_paterno VARCHAR(100) NOT NULL,
  apellido_materno VARCHAR(100) NOT NULL,
  correo VARCHAR(150),
  telefono VARCHAR(20) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
