// prime number code

let num=13;
let count=0
for(let i=0;i<num.length;i++)
{
    if(num%i==0)
    {
        count++
    }
}
(count==2)?console.log("Prime number"):console.log("Not a Prime")
