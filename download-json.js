/**
 * Triggers a browser download of a JSON object as a .json file.
 * @param {any} jsonData - The data to serialize into JSON.
 * @param {string} [filename="json_file"] - The name of the downloaded file.
 * @param {Function|Array} [replacer=null] - A function or array to transform the JSON stringify output.
 * @param {number|string} [space=4] - Indentation spaces for readability.
 */

default export function downloadJson(jsonData, filename = "json_file", replacer=null, space=4) {
  // check if jsonData is provided or not
  if (jsonData === undefined) {
        throw new Error("downloadJson failed: The 'jsonData' argument is required but was not provided.");
    }

    try {
      
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

      // report success
      return true;

      } catch (error) {
        // in case of any error
        throw new Error(`downloadJson failed execution: ${error.message}`);
    }

}
