
# Question 1 
Remove Duplicate Elements From An Array
        
    let arr=[1,2,1,3,5,2,3,6]
    let newarr=[...new Set(arr)];
    console.log(newarr);
# Question 2 
Sum of All Array Element

    let arr=[1,2,5,8,6,1,]
    let newarr=arr.reduce((a,b)=>{
    return a+b;});
    document.write(newarr);

# Question 3 
Average of All Array Element

    let arr=[1,2,5,8,6,1,]
    let newarr=arr.reduce((a,b)=>{
    return a+b/arr.length;})
    document.write(newarr);

**Question 4**
what will be the output?
        
        function main(){
    console.log('A');
    setTimeout(
        function print(){ console.log('B'); }
        ,0);
    console.log('C');
        }
        main(); 
    Output: A,C and B
