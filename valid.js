var removeElement = function(nums, val) {
    let rmv = 0
    for(let i=0;i<nums.length;i++){
        //console.log(nums[i],val) 
        
        console.log(nums.length)
        if(nums[i]==val){
            
            nums.splice(i,1)
            nums.push("_")
            i--
        }
    else if(nums[i] !== "_"){
        rmv++
    }
    }
    console.log(nums)
    return rmv
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))