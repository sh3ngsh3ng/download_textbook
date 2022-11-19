const { jsPDF } = require('jspdf');
const fs = require('fs');

const doc = new jsPDF("p", "mm", "a4");

let width = doc.internal.pageSize.getWidth();
let height = doc.internal.pageSize.getHeight();

for (let i =160; i <= 195; i++) {

    try {
        let imageData = fs.readFileSync('./pages/page' + i +'.png', 'base64');
        doc.addImage(imageData, 'PNG', 0, 0, width, height);
        console.log("image " + i + " added");
        doc.addPage();
    } catch (err) {
        console.log(err);
    }
    
}

doc.save("textbook.pdf");