
let movieinfo = new Array ();

function formSubmitEvent(){
  let inputname = document.getElementById("2moviename").value;
  let inputrating = document.getElementById("2rating").value;
  const inputmovie = new Movie(inputname, inputrating);
  
  console.log(inputmovie); 
    if (validate(inputmovie) == false){
  alert("Enter a movie name and a rating between 1-5.")
    }
    else{
      movieinfo.push(inputmovie)
    }
}
  
function showMovieEvent(){
  let xs = "";
  for (i = 0; i<movieinfo.length; i++){
    let ps = getAll(movieinfo[i]);
    xs += ps + "<br>";
  }
  document.getElementById('renderList').innerHTML = xs;
  
}