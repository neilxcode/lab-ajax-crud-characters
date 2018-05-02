const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
   $('#fetch-all').click(function(){
     
        // console.log("button clicked");
        axios({
    method: "GET",
    url: `mongodb://localhost/lab-ajax-crud-characters`
}).then(responseFromApi => {
    console.log(responseFromApi.data);
    $('.pokeinfo').append(`
    <h1> ${responseFromApi.data.name} </h1>
    <h1> ${responseFromApi.data.height} </h1>
    <h1> ${responseFromApi.data.weight} </h1>
    `)

    })
    .catch(err => {
    console.log(err);
})
    })
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
