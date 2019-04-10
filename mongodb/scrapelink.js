//dependencies
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

//import urls.json
const urls = require('./urls.json');

//storage array
var urlarray=[];

const tagtitle = 'h1';
const tagcompany = 'p#subtitle.a.strong';
//const taglocation = 'p#subtitle.strong';

//const URL = 'https://workinstartups.com/job-board/job/32229/tutoring-jobs-for-tutors-at-select-my-tutor/';
for (var i = 0; i<20; i++){

    //querying URL
   request(urls[i].url, (error, response, html) => {
    if (error){
       
        //error messages
        console.log('It did not work');
        console.log(response.statusCode);
        console.log(error);
        
    }

        //loading the html 
        const $ = cheerio.load(html);

        var title = $('h1').text();
        var company = $('p#subtitle a strong').text();
        //var location = $('p#subtitle strong').text();
        var companyUrl = $('p#subtitle a').attr('href');

             
            
           urlarray.push({
            title: title,
            company: company,
            //location: location,
            companyUrl: companyUrl  
            });
           //console.log(metadata);

           console.log(urlarray);

           fs.writeFile('urlsf.json', JSON.stringify(urlarray), function (err) {
            if (err) throw err;
            console.log(urlarray.length +' items saved!');
          });
    });

    
   

};

    //console.log(urlarray); 

        

