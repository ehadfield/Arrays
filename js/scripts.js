$(function() {
  $("#userinput").submit(function(event){
   var favoritething1 = $("#favoritething1").val();
   var favoritething2 = $("#favoritething2").val();
   var favoritething3 = $("#favoritething3").val();
   console.log(favoritething1);
   console.log(favoritething2);
   console.log(favoritething3);
   var favorites = [favoritething1, favoritething2, favoritething3];
   //favorites.fill(favoritething1, favoritething2, favoritething3);
   console.log(favorites);
   event.preventDefault();
  });
});
