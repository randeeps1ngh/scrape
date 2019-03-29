//dependencies
const request = require('request');
const cheerio = require('cheerio');

//searching pages 1 to 5
for (let i=1; i<=5; i++){

   const URL = `https://workinstartups.com/job-board/jobs/interns/?p=${i}`

    //querying URL
   request(URL, (error, response, html) => {
    if (error){
       
        //error messages
        console.log('It did not work');
        console.log(response.statusCode);
        console.log(error);
        
    }
   
    //tracking the pages as they are scraped
    //still puzzled how they are not scraped in order; might be the 'Asynchronous' thing
    console.log('Page '+i);

        //loading the html 
        const $ = cheerio.load(html);

        //scraping using the selector and outputting content
        const first = $('a.job-link');
        console.log(first.text());
      
    });

}
