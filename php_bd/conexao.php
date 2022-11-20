<?php
define('HOST', '127.0.0.1');
define('USUARIO', 'root');
define('SENHA', 'canaltiyoutube');
define('DB', 'login');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possível conectar');

// servidor: login-teste01
// senha: mah-82772650
// user: admin_maisa