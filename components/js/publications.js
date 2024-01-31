const fs = require('fs');

// Read data.txt file line by line
const data = fs.readFileSync('data.txt', 'utf8').split('\n');

// Assuming there is at least one line in the file
const content = data[0].trim();

// Format the content in the specified HTML structure
const formattedHTML = `
<div class="row text-center">
    <div class="col-md">
        <div class="card1 bg-light text-dark py-4">
            <div class="card-body-text-center">
                <div class="h5" style="font-weight: bold;">#${content}</div>
            </div>
        </div>
    </div>
</div>
`;

// Display the formatted HTML
console.log(formattedHTML);
