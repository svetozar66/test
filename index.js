import { process } from "./env.mjs" 
const text1 = document.getElementById('input1')
const dugme = document.getElementById('Rezultat1')
const url = "https://api.openai.com/v1/completions"
const apikey = process.env.OPEN_API_KEY

//const { Configuration, OpenAIApi } = require("openai")




document.getElementById('Rezultat1').addEventListener("click",()=>{
   
   getAnswer()

})



function getAnswer(){
    const query = document.getElementById('input1').value

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apikey}`
        },
    
        body: JSON.stringify({
            'model': 'text-davinci-003',
            'prompt': `${query}`,
            'max_tokens': 300
        })
    }).then(response => response.json()).then(data => 
     
        document.getElementById('par').innerHTML=data.choices[0].text
        )
}
