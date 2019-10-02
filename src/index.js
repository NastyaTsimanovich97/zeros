module.exports = function zeros(expression) {
  // your solution
  let arr=expression.split('!!').join('');
  let arr_num=[];
  let arr_num1=[];
  let arr_num2=[];
  let count=0;

  console.log(arr);
  // arr_num=arr.match(/\d+\*/g);
  // console.log(arr_num);

    if(arr.indexOf('!')!=-1){
      arr_num1=arr.match(/\d+!/g);
        for(let j=0; j<arr_num1.length; j++){
          arr_num1[j]=parseInt(arr_num1[j]);       
          let k=5;
          while(arr_num1[j]>=k){
            count+=Math.floor(arr_num1[j]/k);
            k*=5;  
          }
        }
    }    
    console.log(arr_num1);
    

  if(arr.indexOf('!')==-1){
      arr_num2=arr.split('*');
      for(let i=0; i<arr_num2.length;i++){
        arr_num2[i]=+arr_num2[i];
        let sum=0;
        for(let m=0; m<arr_num2.length;m++){
          sum+=arr_num2[m];
        }
        if(arr_num2[i]%2==0 && arr_num2[i]>10){
          let k=10;
            count+=Math.floor(arr_num2[i]/k);
        }
        if(arr_num2[i]==10){
          let k=5;
            count+=Math.floor(arr_num2[i]/k);  
        }
      }
    }
    console.log(arr_num2);
    console.log(count);





  // arr_num1=(expression.match(/\d+!/g));
  // console.log(arr_num1);

  // for(let i=0; i<arr_num1.length;i++){
  //   arr_num1[i]=arr_num1[i].split('!').join('');
  //   arr_num1[i]=+arr_num1[i];
  // }
  // console.log(arr_num1);

  // arr_num2.push(expression.match(/\d+!!/g));
  // console.log(arr_num2);

  // for(let i=0;i<arr.length;i++){
  //   if(Number.isInteger(+arr[i]) && !Number.isInteger(+arr[i+1]) && !Number.isInteger(+arr[i-1]) /*&& arr[i+2]!='!'*/){
  //     arr_num.push(+arr[i]);
  //     while(+arr[i]>=j){
  //       count+=Math.floor(+arr[i]/5);
  //       j*=5;
  //     }
  //   }
  //     if(Number.isInteger(+arr[i]) && Number.isInteger(+arr[i+1]) && !Number.isInteger(+arr[i+2])){
  //       //if(+arr[i]%2==0 && +arr[i]>=10){
  //         arr[i]=+(arr[i]+arr[i+1]);
  //         arr_num.push(+arr[i]);
  //         // while(+arr[i]>=j){
  //         //   count+=Math.floor(+arr[i]/5);
  //         //   j*=5;
  //         // }
  //      // }
  //     }
    
  //   // if(Number.isInteger(+arr[i]) && !Number.isInteger(+arr[i+1])&& !Number.isInteger(+arr[i-1])){
  //   //   arr_num.push(+arr[i]);
  //   // }
  return count;
}
