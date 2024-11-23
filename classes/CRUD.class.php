<?php
#nome do arquivo CRUD.class.php

abstract class CRUD
{
    protected $table;
    abstract public function add();
    abstract public function get($id);
    abstract public function getAll();
    abstract public function update($campo, $valor, $id);
    abstract public function delete($id);

}