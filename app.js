angular
.module("superheroApp", [])
.controller("superheroesCtrl", [ superheroController ]);

function superheroesController () {
  this.superheroes = superheroData;

}
