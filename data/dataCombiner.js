const fs = require('fs');

// Set the file paths of the JSON files to combine
const filePaths = ['data/data2018.json', 'data/data2019.json', 'data/data2020.json','data/data2021.json','data/data2022.json','data/data2023.json'];
// Create an empty array to hold the combined data
let combinedData = [];

// Read the contents of each JSON file and parse them into objects
filePaths.forEach((filePath) => {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const parsedData = JSON.parse(fileContents);
  combinedData = combinedData.concat(parsedData);
});

// Convert the combined data to a JSON string
const jsonString = JSON.stringify(combinedData);

// Write the JSON string to a new file
fs.writeFileSync('./combined.json', jsonString);
console.log('JSON files combined successfully!');