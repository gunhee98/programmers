function solution(num_list, n) {
    var answer = [];
    answer=num_list.filter((item,index)=>
        index>=(n-1)
    )
    return answer;
}