const fs = require('fs');

// File path
const filePath = 'C:/Users/kakul/OneDrive/Desktop/AWT531/example.txt';

// Write to a new file
fs.writeFile(filePath, 'Hello, this is a new file!', (err) => 
{
    if (err) throw err;
    console.log('File created and written to successfully.');
    // Read from the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
        console.log('File content:', data);

        // Append to the file
        fs.appendFile(filePath, '\nThis is appended content.', (err) => {
            if (err) throw err;
            console.log('Content appended successfully.');

            // Read the updated file
            fs.readFile(filePath, 'utf8', (err, newData) => {
                if (err) throw err;
                console.log('Updated file content:', newData);
            });
        });
    });
});
