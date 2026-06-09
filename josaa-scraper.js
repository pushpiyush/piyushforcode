/*
scrape or-cr data from josaa site
@2026
*/

function scraper() {
  // <tbody> tag that contains each row of data inside <tr> tags
  const body = document.querySelector('tbody');

  // node list of <tr> nodes. i.e, each row of data
  const bodyChild = body.childNodes;

  // empty array in which data is stored
  const data = [];

  // iterate through each row 
  bodyChild.forEach(element => {
    // to store data of each row
    const trArray = [];

    // node list of <td> nodes. i.e, each column of data in the row
    const tr = element.childNodes;

    // iterate through each column or data in the row
    tr.forEach(td => {
      trArray.push(td.innerText);
    });

    // finally push that row in the data
    data.push(trArray);
  });

  // download the data
  download_json(data, "josaa-nit-round1-2025");

}

function download_json(jsonData, filename="json-data", replacer=null, space=4) {
  // convert the jsonData into json string
  const jsonString = JSON.stringify(jsonData, replacer, space);
  
  // create blob with the json string
  const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
  
  // temporary internal url
  const url = URL.createObjectURL(blob);
  
  // hidden virtual element 
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith(".json") ? filename : `${filename}.json`;
  
  // triggering download
  a.click();
  
  // cleans up memory
  URL.revokeObjectURL(url);
}
  

  
  

  
