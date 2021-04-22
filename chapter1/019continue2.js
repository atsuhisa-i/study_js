function myFnction(flgA){
  for (let index = 0; index < 10; index++){
    if(flgA === false){
      continue;
    }
    if(index % 2 === 0){
      continue;
    }
    console.log(index);
  }
}

myFnction(0);