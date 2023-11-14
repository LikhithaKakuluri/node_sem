const fs = require('fs');
const consoleTable = require('console.table');
const filePath = 'C:/Users/kakul/OneDrive/Desktop/AWT531/data.json';
// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) 
    {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        // Parse the JSON content
        const jsonData = JSON.parse(data);

       
        // Display the parsed JSON data in a table
        console.log('Parsed JSON Data:');
        console.table(jsonData);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
