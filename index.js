let txt = document.querySelector('#txt')
let btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    axios.get('https://xlit.quillpad.in/quillpad_backend2/processWordJSON?lang=hindi&inString='+txt.value, {
//         mode: 'no-cors',
        headers:{
            'Access-Control-Allow-Origin' : '*'
        } 
    })
    .then((result)=>{
        console.log(result)
    })
    
})

// async function language(){
//     let result = await fetch('xlit.quillpad.in/quillpad_backend2/processWordJSON?lang=hindi&inString='+txt.value)
//     .then((result)=>{
//         console.log(result)
//     })
// }
// headers:{
//     "Access-Control-Request-Headers" : "*",
// "Access-Control-Request-Method" : "*"
// }
