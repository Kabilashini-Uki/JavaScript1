let mat=[["Gryffindor",255,211],
         ["Hufflepuff",203,121],
         ["Ravenclaw",272,292],
         ["Slytherin",25,275]];

function findHighest(mat){
   for(let i=0; i<mat.length; i++){
        if(mat[i][1]>mat[i][2]){
            console.log("The best performance in house meet is Girls:"+mat[i][1])
        }
        else{
            console.log("The best performance in house meet is Boys:"+mat[i][2])
        }
    }
    
}
findHighest(mat);


function highestScoreinEachGender(mat) {
  let HighScoreGirls = 0;
  let HighScoreBoys = 0;

  for (let i = 0; i < mat.length; i++) {
    if (HighScoreGirls < mat[i][1]) {
      HighScoreGirls = mat[i][1];
    }
    if (HighScoreBoys < mat[i][2]) {
      HighScoreBoys = mat[i][2];
    }
  }

  console.log("The best performance of the Girls is " + HighScoreGirls);
  console.log("The best performance of the Boys is " + HighScoreBoys);
}

highestScoreinEachGender(mat);