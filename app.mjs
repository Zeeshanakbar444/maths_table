function mathTabel(){

    let inputNum1 = document.getElementById('inputNum1').value;
let inputNum2 = document.getElementById('inputNum2').value;
document.querySelector('#zeeshan').innerHTML = ''

for(let i = 1 ; i <= inputNum2 ; i++){
console.log(`${inputNum1} x ${i} = ${inputNum1 * i}`)

document.querySelector('#zeeshan').innerHTML +=`${inputNum1} x ${i} = ${inputNum1 * i}<tr></tr> `

}
}