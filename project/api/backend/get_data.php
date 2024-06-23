<?php
// Подключение к базе данных
$servername = "notepad";
$username = "root";
$password = "";
$dbname = "notebookdb";

$connect = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
}

// Выборка данных из таблицы
$sql = "SELECT * FROM notes";
$result = $connect->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Отправка данных в формате JSON
header('Content-Type: application/json');
echo json_encode($data);

$connect->close();
?>