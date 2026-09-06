function mediaCalc(gpa){
  if (gpa < 5){
    console.log('REP')
    return
  }

  if (gpa < 7){
    console.log('REC')
    return
  }
  console.log('APR')
}

mediaCalc();