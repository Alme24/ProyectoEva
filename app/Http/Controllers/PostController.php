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

    public function practica1(){
    return view('practica1');
    }

}

