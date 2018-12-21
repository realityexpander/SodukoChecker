function sudokuCheck (boardStr) {
  let arr = [];

  arr = convertStrToArr(boardStr);

  for(let n=0; n<arr[0].length; n++) {
    if(checkRow(arr[n]) !== 9)
      return false;
  }
  for(let n=0; n<arr[0].length; n++) {
    if(checkCol(arr, n) !== 9)
      return false;
  }
  for(let y=1; y<arr[0].length-2; y++)
    for(let x=1; x<arr[0].length-2; x++) {
      
    }

  function convertStrToArr(boardStr) {
    let arr = [];
    let x = boardStr.split('\n');
    let n=0;
    for(let i=0; i<x.length-1; i++) {
      arr[i] = x[i].split('');
      n++;
    }
    return arr;
  }
  
  function checkRow(arr) {
    let res={}
    for(let n=0; n<arr.length; n++) {
      res[arr[n]]=arr[n];
    }
    return Object.keys(res).length;
  }
  
  function checkCol(arr, x) {
    let res={}
    for(let n=0; n<arr[0].length; n++) {
      res[arr[n][x]]=arr[n][x];
    }
    return Object.keys(res).length;
  }
  
  function check3x3(arr) {
    
  }
  
}

console.log(sudokuCheck('795836421\n\
462195387\n\
381247956\n\
279458613\n\
654371892\n\
813629745\n\
147583269\n\
538962174\n\
926714538\n'));

// 524698731
// 967531824
// 381742596
// 719325648
// 436871952
// 258416379
// 893154267
// 672983415
// 145267983

// 895631472
// 327984516
// 461257398
// 942813765
// 183765924
// 756429183
// 578142639
// 214398657
// 639578241

// 215873649
// 734965812
// 698412537
// 387241965
// 146597283
// 471659328
// 952386471
// 563128794
// 829734156

// 895631472
// 327984516
// 461257398
// 942813765
// 183765924
// 756429183
// 578142639
// 214396857
// 639578241

// 111111111
// 222222222
// 333333333
// 444444444
// 555555555
// 666666666
// 777777777
// 888888888
// 999999999

// 123123123
// 456456456
// 789789789
// 123123123
// 456456456
// 789789789
// 123123123
// 456456456
// 789789789

// 735814296
// 896275314
// 214963857
// 589427163
// 362189745
// 471356982
// 923541678
// 648792531
// 157638429
