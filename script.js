var ind = document.getElementById('India')

function w(){
    setTimeout(()=>ind.innerHTML="<h3>Happy Independce day</h3>",6000)
    
}
function n1(){
    setTimeout(()=>ind.innerHTML="<h3>1</h3>",5000)
    w();
}
function n2(){
    setTimeout(()=>ind.innerHTML="<h3>2</h3>",4000)
    n1()
}
function n3(){
    setTimeout(()=>ind.innerHTML="<h3>3</h3>",3000)
    n2()
}
function n4(){
    setTimeout(()=>ind.innerHTML="<h3>4</h3>",2000)
    n3()
}
function n5(){
    setTimeout(()=>ind.innerHTML="<h3>5</h3>",1000)
    n4()
}

n5()