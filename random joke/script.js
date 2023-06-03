
btn.addEventListener('click',(e)=>
{
    let p=fetch("GIVE UR API");
    p.then((value)=>
    {
        return value.json();
    }).then((val)=>
    {
        document.getElementById("text").innerHTML=val.[index];
    })

})
     

   

    
    


