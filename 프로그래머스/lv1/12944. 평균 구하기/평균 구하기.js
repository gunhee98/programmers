function solution(arr) {
    let answer = 0;
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    answer=sum/arr.length;
    return answer;
}