var moveZeroes = function(nums) {
    let rm = 0
    let length = nums.length
    for(let i=0;i<length;i++){
        if(nums[i]==0){
            nums.splice(i,1)
            rm++
            i--
        }
    }
    for(let i=0;i<rm;i++){nums.push(0)}
    //console.log(nums)
    return nums
};

console.log(moveZeroes([0,0,1]))