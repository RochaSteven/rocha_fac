 var mul=1;
var nu=1;
var primos=[]
var final=600851475143;

var suse=function(nu){
    if(mul === final){
        console.log("La suma de los numeros primos es "+mul);
        var maximo=primos[primos.length-1];
        console.log (" El mayor factor primo del número " + final + " es " + maximo + " . " );
    }else{
        if(final%nu===0){
              div1=(nu/2);
            if(div1%2===0 || div1%3===0 ){
                return("error")
            }else{
             console.log (nu);
             primos.push(nu);
             mul*=nu;
                }
        }
    
       nu++
       suse(nu)
    }

}
