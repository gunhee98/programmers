function solution(numbers) {
    var answer = [];
   for(let i=0;i<numbers.length-1;i++){
       for(let j=i+1;j<numbers.length;j++){
           let sum=numbers[i]+numbers[j];
           if(!answer.includes(sum)){
               answer.push(sum);
           }
       }
   }
    
    return answer.sort((a,b)=>a-b);
}