// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
            let currIndex = nums.indexOf(nums[i],i+1)

            console.log("curr index: ",currIndex)
            if(nums[i]=="_"){
                continue
            }
            
            else if(currIndex !== -1){
                nums[currIndex] = "_"
            }

    }

    console.log(nums)
};

console.log(removeDuplicates([1,1,2])) //ex.1
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) //ex.2