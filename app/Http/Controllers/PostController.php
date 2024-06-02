<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
      return view('lecciones');
    }

     public function piano(){
      return view('piano');
    }

    public function piano_nivel2(){
    return view('piano-nivel2');
    }

     public function piano_juego() {
        return view('piano-juego');
    }

     public function editor() {
        return view('editor');
    }


    public function practica1(){
    return view('practica1');
    }

}

