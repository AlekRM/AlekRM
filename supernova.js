document.getElementById("OjoHover").addEventListener( 'click', function()
{
document.getElementById("supernova").style.display = "flex";
document.getElementById("containerstars").style.display ="block";

setTimeout(function() {myFunc()}, 6000);

function myFunc() {
  document.getElementById("supernova").style.display = "none";
  
}

});



