
let Movie = function (mname, mrating) {
    this.name = mname;
    this.rate = mrating;
  }

  function validate(inputmovie) {
    console.log(inputmovie.name, inputmovie.rate);
    if (inputmovie.name  === "" || inputmovie.name === null) {
    return false; 
    }
    else if (inputmovie.rate >5){
         return false;
    }
    else if (inputmovie.rate <1){
        return false;
    }
    else {
       console.log("i am here on movie.js")
       return true;
    }
  }
  function getAll(inputmovie){
    return inputmovie.name + " has a rating of " + inputmovie.rate;
  }


