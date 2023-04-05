'use strict';

function validaor(request, response, next){
  if(request.query.name){
    next();
  } else {
    next('Error: Give me a NAME!');
  }
  
}

module.exports = validaor;
