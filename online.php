<?php
// Arquivo online.php

// Define o fuso horário do servidor
date_default_timezone_set('America/Sao_Paulo');

// Inicia a sessão
session_start();

// Define o tempo limite em segundos
$timeout = 300;

// Obtém o número de usuários online
$users = count(glob('sessions/sess_*'));

// Percorre os arquivos de sessão
foreach (glob('sessions/sess_*') as $file) {
  // Obtém o tempo de modificação do arquivo
  $mtime = filemtime($file);

  // Verifica se a sessão expirou
  if (time() - $mtime > $timeout) {
    // Remove o arquivo de sessão
    unlink($file);
  }
}

// Exibe o número de usuários online
echo "Usuários online: " . $users;
?>
