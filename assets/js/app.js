let inputText = document.querySelector(".inputValue");
let search = document.querySelector(".btn-search");
let result = document.querySelector(".message-box");
let numText = document.querySelector(".num");
let msg = document.querySelector(".message-box");

inputText.addEventListener("input", () => {

  const fetchData = async () => {
    let number = inputText.value;
    let url = "http://numbersapi.com/";
  
    fetch(url+number)
      .then(response => response.text())
      .then(data => {
        if(data.status = 200 && number !== ''){
          msg.style.display = "block";
          numText.innerText = data;
        } else {
          msg.style.display = "none";
        }
       })
        .catch(err => console.log(err.message));
  }
  fetchData();
})


  


    

  