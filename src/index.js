module.exports = function zeros(expression) {
  // your solution
  let count=0;
  let factorial1=[];
  let factorial2=[];
  let factorial3=[];
  let even=0;
  let odd=0;
  let count2=0;
  let count5=0;
  if(expression.indexOf('!!')!=-1){
    factorial2=expression.split('!!').join('');
    console.log(factorial2);
    //если в факториале все двойные
      if(factorial2.indexOf('!')==-1){
        factorial2=factorial2.split('*');
        for (let i=0;i<factorial2.length;i++){
          factorial2[i]=+factorial2[i];
          if(factorial2[i]%2==0){
            even++;
          }
          else{
            odd++;
          }
        }
        for(let i=0;i<factorial2.length;i++){
          //если все четные
          if(odd==0){
            let k=10;
            count+=Math.floor(factorial2[i]/k);
            count+=Math.floor(factorial2[i]/50);
          }
          console.log(factorial2);
          //если все нечетные
          if(even==0){
            count+=0;
          }
          //если и четные, и не четные
          if(even>0 && odd>0){
            if(factorial2[i]%2==0){
              let m=2;
              while(factorial2[i]>m){
                count2+=Math.floor(factorial2[i]/m);
                m*=2;
              }
            }
            if(factorial2[i]%2==0){
              count5+=Math.floor(factorial2[i]/10);
              count5+=Math.floor(factorial2[i]/50);
            }  
          
            if(factorial2[i]%2!=0){
              let l=5;
              while(factorial2[i]>=l){
                count5+=Math.floor(factorial2[i]/l);
                l*=5;
              }
              count5-=Math.floor(factorial2[i]/10);
              count5-=Math.floor(factorial2[i]/50);
            }  
            
            } 
          }
            if(count2>count5){
              count+=count5;
            } 
            
            if(count2<=count5 && count2==0){
            count+=count5;
            }     
           
        }
       

    //если есть и двойные и одичные
      if(factorial2.indexOf('!')!=-1){
        factorial1=factorial2.match(/\d+!/g);
        factorial2=factorial2.replace(/\d+!/g,'*').split('*');

      //если одиночный
      for(let j=0; j<factorial1.length; j++){
        factorial1[j]=parseInt(factorial1[j]);       
        let k=5;
        while(factorial1[j]>=k){
          count+=Math.floor(factorial1[j]/k);
          k*=5;  
        }
      }

      console.log(factorial1);
      console.log(count);     
      // если двойной
        //двойной четный
        //двойной нечетный
        //и четные, и нечетный
      for (let i=0;i<factorial2.length;i++){
        if(+factorial2[i]>0){
          factorial3.push(+factorial2[i]);
        }
      }
      console.log(factorial3);
      
      for(let i=0;i<factorial3.length;i++){
                   
            if(factorial3[i]%2==0){
              let m=2;
              while(factorial3[i]>m){
                count2+=Math.floor(factorial3[i]/m);
                m*=2;
              }
            }
            if(factorial3[i]%2==0 ){
              
              count5+=Math.floor(factorial3[i]/10);
              count5+=Math.floor(factorial3[i]/50);
            }  
            
            if(factorial3[i]%2!=0){
              let l=5;
              while(factorial3[i]>=l){
                count5+=Math.floor(factorial3[i]/l);
                l*=5;
              }
              count5-=Math.floor(factorial3[i]/10);
              count5-=Math.floor(factorial3[i]/50);
            }  
            
            } 
            console.log(count2);
            console.log(count5);
            if(count2>count5){
              count+=count5;
            } 
            
            if(count2<=count5 && count2==0){
            count+=count5;
            }              
    }
     
  }
  else{
    factorial1=expression.match(/\d+!/g);
    console.log(factorial1);
        for(let j=0; j<factorial1.length; j++){
          factorial1[j]=parseInt(factorial1[j]);       
          let k=5;
          while(factorial1[j]>=k){
            count+=Math.floor(factorial1[j]/k);
            k*=5;  
          }
        }
    console.log(count);    
  }
  console.log(count);
return count;
}
