const input = document.querySelector(".inputValue");
const search = document.querySelector(".btn-search");
const result = document.querySelector(".message-box");

search.addEventListener("click", function(){
    // const getMap = async () =>{
    //     const response = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyBT0k8at-27YAAkSjQ8TxGO1rsb3okjweA&cx=017576662512468239146:omuauf_lfve&q=lectures');
    //     if (response.status !== 200){
    //         throw new Error("data cannot be fetched")
    //     }
    
    //     const data = await response.json();
    //       console.log(data)

    // }
    // getMap()
    // .then(data => { 
    //     var namePair = data["queries"];
    //     result.innerHTML = namePair;
    //     console.log(data)
    // })
    // .catch(err => console.log("reject", err.message))

   
    fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyBT0k8at-27YAAkSjQ8TxGO1rsb3okjweA&cx=017576662512468239146:omuauf_lfve&q='+input.value+'lectures'")
    .then(function(text) {
        return text()
        .then(function(text) {
       var namePair = text['queries'];
        result.innerHTML = namePair;
          console.log("resolve", text)
      
        })
        .catch(err => console.log("reject", err.message))
      });








//    fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyBT0k8at-27YAAkSjQ8TxGO1rsb3okjweA&cx=017576662512468239146:omuauf_lfve&q='+input.value+'lectures')

   
// .then(response => response.json())
// .then(data => {
// var namePair = data['queries'];

//  result.innerHTML = namePair;

//   console.log(data)

// })


// .catch(err => console.log("reject", err.message))
})



// })
