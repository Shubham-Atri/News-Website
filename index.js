// 1bc7c6cc3de14d1cb51b1a702eceb789

// Initialize the news api parameters
let source = 'bbc-news'
let apiKey = '1bc7c6cc3de14d1cb51b1a702eceb789';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an AJAX GET request
const xhr = new XMLHttpRequest();
 xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

 // What to do when the response is ready
xhr.onload = function(){
    if(this.status==200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = '';
        articles.forEach(function(element, index) {
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="flush-heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                    <b>${index+1}_</b>${element['title']}
                                </button>
                            </h2>
                            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body">${element['content']}. <a href="${element['url']}" target="_blank">Read more here</a></div>
                            </div>
                        </div>`;
                newsHtml += news;
            
        });
        
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log('Some error occurred');
    }
}

xhr.send();


