let inputname = document.getElementById("2moviename").value;
 
let inputrating = document.getElementById("2rating").value;

const inputmovie = new movieobj(inputname, inputrating);

let movieinfo = new Array();


function formSubmitEvent(){
  console.log(inputmovie); 
  vaiLdate(inputmovie)
    if (vaiLdate(inputmovie) == false){
  alert("Movie name must be filled out and the rating must be between 1 - 5.")
    }
    else{
      movieinfo.push(inputmovie)
    }
}
   

function showMovieEvent(){
  let xs;
  let displaymovie = [];
  let ps = getAll();
  for (i = 0; i<movieinfo.length; i++){
    displaymovie.push(ps)
  xs = xs+ displaymovie[i]+"<br>";
  }
  document.getElementById('renderList').innerHTML = xs;
  
}