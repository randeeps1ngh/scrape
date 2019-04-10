# scrape
Learning to scrape - scraped data and saved in 2 databases namely MongoDB and MySQL

The following is a detailed explanation of the use of each file included in the 2 folders

/mongodb/
createdatabase.js - creates a database
dropcollection.js - drops a collection when new data is required
createcollection.js - creates a collection the above database
scrapeurl.js - scrapes job urls and titles from selected pages; stores data in urls.json
load.js - inserts data from urls.json into MongoDB collection
scrapelink.js - scrapes job data from each link; stores data in urlsf.json (company data)
update.js - updates inserted documents to include additional columns; combines urls data to company data
query.js - displays updated data in database

/sql/
createdatabase.js - creates database
createtableurl.js - creates table with columns id, title, url
createtablecompany - creates table with columns id, title, company, companyurl
droptable1.js - drops table to receive new data
droptable2.js - drops table to receive new data
scrapeurl.js - scrapes job urls and titles from selected pages; stores data in urls.json
loadurls.js - loads table 1 with data from urlsdata.json
scrapelink.js - scrapes job data from each link; stores data in urlsf.json (company data)
loadcompanies.js - loads table 2 with data from companydata.json
selecturls.js - displays data in table 1
selectcompanies.js - displays data in table 2
join.js - inner joins data from tables 1 and 2 with title being common column



