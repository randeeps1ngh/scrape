//dependencies
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

//storage array
var urlarray=[];


const tag = 'a.job-link'||'a.job-row.link';

//searching pages 1 to ...
for (let i=1; i<=2; i++){

    const URL = `https://workinstartups.com/job-board/jobs/interns/?p=${i}`;

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

        $(tag).each(function(i, element){
            var a = $(this);
            var title = a.text();
            var url = a.attr('href');
           
            var metadata = {
             
            title: title,
            url: url,
              
            };

           urlarray.push(metadata);
            
          });

          console.log(urlarray);

          fs.writeFile('urls.json', JSON.stringify(urlarray), function (err) {
          if (err) throw err;
          console.log(urlarray.length +' items saved!');
          });
      
    });

}