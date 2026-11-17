let show = document.getElementById('display')

for(let i=99;i>0 ; i--){
    let result;
    if(i-1 === 0){
        result='no more bottles'
    }
    else{
        result= i-1 +' ' +'bottles'
    }

    show.innerHTML += ` <p>${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around , ${result} bottles of beer on the wall. `

     
   
    if(i==1){
     show.innerHTML += ` <p>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more. 99 bottles of beer on the wall `
   }
}