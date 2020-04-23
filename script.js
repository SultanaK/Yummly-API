'use strict';


 
function getRecipe(searchTerm) {
    const url = `https://yummly2.p.rapidapi.com/feeds/search?maxTotalTimeInSeconds=7200&q=${searchTerm}%20soup&start=0&maxResult=8`;
    console.log(url);
    fetch(url, 
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "yummly2.p.rapidapi.com",
            "x-rapidapi-key": "LgHxMTYKPpmshwhb6BYsVrPRtpvXp1pbPh5jsnDRyaXptvxh43"
        }
    })
        
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayRecipe(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}
function displayRecipe(responseJson){
    //console.log(responseJson);
    const feeds= responseJson.feed;
    $('#results-list').empty();
   $('#results').removeClass('hidden');
   
   
   console.log(feeds[0].display.displayName);
    const contentFeed = responseJson.feed.content;
    console.log(feed[0].content.videos.originalVideoUrl)
    /* if(!(results.totalResults == 0))
    { */
        
         /* for(let i =0; i<feeds.length; i++)
        {
       // console.log(feeds[i].images[0]);
        console.log(feeds[i].display.displayName);
        console.log(feeds[i].content.videos.originalVideoUrl);
        
        const entry= `<li>
               <h3> ${feeds[i].display.displayName}</h3>
               
        </li> `
        $('#results-list').append(entry); */
   /*   } */ 
     
    } 
    /* else $('#results-list').html("Recipe not found");  */

 /* } */ 

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchTerm = $('#js-search-term').val();
        getRecipe(searchTerm);
    });
}

$(watchForm);