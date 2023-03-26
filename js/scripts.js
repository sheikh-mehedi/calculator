

  var result=document.getElementById("box");


   var calculate=(number)=>{
    result.value+=number;

   }

var Result=()=>{
    try{

        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid Input");
    }
}

function clr(){
    result.value=" ";
}


   


