function Onclick(){
 
    function my_function()
    {
     var a=document.getElementById("text").innerHTML = "content text";
     console.log(a)
   }
   
    return(
       <>
       <p id="text"></p>
       <button Onclick={my_function()}>+</button>
       </>
    )
}
export default Onclick;