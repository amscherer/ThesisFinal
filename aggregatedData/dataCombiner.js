const fs = require('fs');

// Set the file paths of the JSON files to combine
const filePaths = ['aggregatedData/agdata2018.json', 'aggregatedData/agdata2019.json', 'aggregatedData/agdata2020.json','aggregatedData/agdata2021.json','aggregatedData/agdata2022.json','aggregatedData/agdata2023.json'];
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
fs.writeFileSync('aggregatedData/combinedagData.json', jsonString);
console.log('JSON files combined successfully!');