let str="madam";
let x=str.length-1
let bag=""

for(let i=x;i>=0;i--)
{
bag+=str[i]
}
if(bag==str)
{
    console.log("this is palindrom")
}
else
{
console.log("this is not palindrom")
}