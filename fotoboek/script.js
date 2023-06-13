function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
    $('<img/>')[0].src = this;
    });
    }
    
    // Usage:
    
    preload([
    '../img/fotoboek/beeldscherm.png',
    '../img/fotoboek/kassa.jpg',
    '../img/fotoboek/laptops.png',
    'img/foto4.jpg',
    'img/foto5.jpeg',
    'img/foto6.jpg',
    'img/foto7.jpg',
    'img/foto8.jpg',
    'img/foto9.jpg',
    'img/foto10.jpg',
    'img/foto11.jpg',
    'img/foto12.jpg',
    'img/foto13.jpg',
    'img/foto14.jpg',
    'img/foto15.jpg',
    'img/foto16.jpg',
    'img/foto17.jpg',
    'img/foto18.jpg',
    'img/foto19.jpg',
    'img/foto20.jpg',
    'img/foto21.JPG',
    'img/header.jpg',
    'img/logo.png',
    ]);