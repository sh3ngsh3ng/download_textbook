const axios = require('axios')
const fs = require('fs')
const path = require('path')


let pathObj = path.parse(__filename)
console.log("localFilePath => ", pathObj.dir)

async function downloadPage(pageNum) {

    try {
        let response = await axios({
            method: 'GET',
            url: 'https://lms-ebook.mceapps.com/' + pageNum + '.png', // dummy url
            responseType: 'stream'
        })
        let writeStream = fs.createWriteStream(__dirname + "/pages/page" + pageNum + ".png")
        const w = response.data.pipe(writeStream)
        w.on('finish', () => {
            console.log("page " + pageNum + " downloaded")
        })
    } catch (err) {
        console.log(err)
    }


}

for (let i = 0; i <= 112; i++) {
    downloadPage(i)
}
// downloadPage(2);
