var check=false ,products=[];

$(window).scroll(function(){
    $('i').addClass("addedClass")
    
    
    
})

$("#arrow").click(function(){
    
    
    
    if(check==true)
        {
            Clear();
            
    $("#test").animate({left:'0px'},"fast")
    $("#myArrow").css({"-webkit-transform":"rotate(180deg)"})
            check=!check;
        }
    
    else{
        
    $("#test").animate({left:"-"+$(".myForm").css("width")},"fast")
        
    $("#myArrow").css({"-webkit-transform":"rotate(0deg)"})
        check=!check;
        
    }
    
    
})


function Clear()
{
    
    
  let myInput=  $(".form-control");
    for(let i=0;i<myInput.length;i++)
        {
            myInput[i].value="";
            
        }
    
    
}


$("#addBtn").click(function(){
    
    let product=
    {
        name:$("#pName").val(),
        category:$("#cName").val(),
        price:$("#price").val(),
        desc:$("#desc").val()


    }
    products.push(product);
   display();
   Clear();



}
)
function display()
{

    let result="";
    for(let i= 0 ;i<products.length;i++)
    {
    
        result+=`<div class="col-md-4 mt-3 see overflow-hidden ">
        <div class="items text-left pl-1">
        <h1> <span> name : </span>  ${products[i].name}</h1>
        <h3><span> category : </span>${products[i].category}</h3>
        <h2> <span> price : </span>${products[i].price}</h2>
        <p><span> description <br> </span> ${products[i].desc}</p>
            <button class="btn btn-danger" onclick="dele(${i})" >Delete</button>
        </div>
    
    
    </div>
    `

}

  
$("#result").html(result);
    
}


function dele(i){

    products.splice(i,1);
    display();

}

$("#search").keyup(function(){


search($("#search").val())

})

function search (key)
{

    let result="";

    if(key=="")
    {
        result="";

    }
    else
    {

        
        for(let i=0;i<products.length;i++)
        {
    
            if(products[i].name.includes(key)==true)
    
            result+=`<div class="col-md-3  my-5 bg-white">
            <div class="items text-left pl-1 overflow-hidden">
            <h1> <span> name : </span>  ${products[i].name}</h1>
            <h3><span> category : </span>${products[i].category}</h3>
            <h2> <span> price : </span>${products[i].price}</h2>
            <p><span> description <br> </span> ${products[i].desc}</p>  
                
            </div>
        
        
        </div>
        `
          
    
    
        }

    }
  

    $("#searchResult").html(result);


}




















