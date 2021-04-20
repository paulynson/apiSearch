let inputText = document.querySelector(".inputValue");
let search = document.querySelector(".btn-search");
let result = document.querySelector(".message-box");
let numText = document.querySelector(".num");
let msg = document.querySelector(".message-box");

inputText.addEventListener("input", function(){
  let number = inputText.value;

  fetch('http://numbersapi.com/'+number)
    .then(response => response.text())
    .then(data => {
      if(data.status = 200 && number !== ''){
        msg.style.display = "block";
        numText.innerText = data;
      }        
     })
      .catch(err => console.log(err.message));
})

  


    

  