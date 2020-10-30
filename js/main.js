var app = new Vue({
    el: '#app',
    data:{
        num1:0,
        num2:0,
        rta:0
},
methods: {
    add:function(){ 
        this.rta= parseInt(this.num1)+ parseInt(this.num2);
    // alert("metodo sumar"+this.rta);   
    },     
     substract:function(){
        this.rta= parseInt(this.num1)- parseInt(this.num2);  

     },
     multiply:function(){
        this.rta= parseInt(this.num1)* parseInt(this.num2);   

     }

    
}
});

     
         
        