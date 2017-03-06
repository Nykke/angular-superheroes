let superheroData = [
  { name: "GhostBusters", number: "555-555-6789", universe: "Independent", image:"http://vignette2.wikia.nocookie.net/ghostbusters/images/1/1e/GhostbustersIssueTwoOngoingCoverA.jpg/revision/latest?cb=20111011051703"},
  { name: "Poison Ivy", number: "444-555-3456", universe: "DC Comics", image:"https://s-media-cache-ak0.pinimg.com/originals/f1/7a/55/f17a55354641a4a98f007994b66071c9.jpg"},
  { name: "Static", number: "555-555-9876", universe: "Independent", image:"http://eggabase.com/wp-content/uploads/Easter_Eggs/TV_Shows/Static_Shock/Static-Shock-Cover.jpg"},
  { name: "Black Panther", number: "888-555-2334", universe: "Marvel Comics", image:"http://static5.comicvine.com/uploads/original/12/128313/3035502-0642843022-tumbl.jpg"},
  { name: "The Flash", number: "444-555-7899", universe: "DC Comics", image:"https://weminoredinfilm.files.wordpress.com/2014/03/flashnew52.jpg"},
  { name: "Captain America", number: "888-555-1234", universe: "Marvel Comics", image: "http://vignette3.wikia.nocookie.net/marveldatabase/images/f/f0/Steven_Rogers_(Earth-1610).png/revision/latest?cb=20100205184014"},
  { name: "Aqualad", number: "444-555-5467", universe: "DC Comics", image: "https://s-media-cache-ak0.pinimg.com/564x/ac/3b/88/ac3b88d0ad2315eb5ebe5744caec6304.jpg"},
  { name: "Luke Cage", number: "888-555-6709", universe: "Marvel Comics", image: "http://static3.comicvine.com/uploads/scale_small/11111/111112802/3448806-9697262678-28873.jpg"},
  { name:"Hardware", number: "555-555-0876", universe: "Independent", image: "http://vignette2.wikia.nocookie.net/marvel_dc/images/a/ae/Hardware_Prime_Earth_001.jpg/revision/latest?cb=20130216204956"}
];


angular
.module("superheroApp", [])
.controller("SuperHeroesCtrl", [ SuperHeroesController ]);

function SuperHeroesController () {
  this.superheroes = superheroData;

}
