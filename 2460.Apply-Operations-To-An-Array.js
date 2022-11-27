/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    console.time("timer")
    let zeroes = 0

    for(let i=0;i<nums.length;i++){ //applying operations to items in arr
        if(nums[i] == nums[i+1]){
            nums[i] *= 2
            nums[i+1] = 0
        }
    }

    for(let i=0;i<nums.length;i++){ //removing zeroes
        //console.log("ran",i,": times", "i = ",nums[i])
        if(nums[i] == 0){
            nums.splice(i,1)
            zeroes++
        }
        if(nums[i]==0){i--}
    }
    
    for(let i=0;i<zeroes;i++){//pushing zeroes after the fact
        nums.push(0)
    }

    console.timeEnd("timer")
    
    return nums
};


console.log(applyOperations([1,2,2,1,1,0]))