const bwipjs = require('bwip-js');

const barcodeData = '142130'
const barcodeOptions = {
    bcid: 'code128',
    text: barcodeData,
    scale: 3,
    height: 10,
    includetext: true,
    backgroundcolor: '#ffffff'
}

const timestamp = new Date().getTime();
const randomFileName = `barcode_${timestamp}.png`;

bwipjs.toBuffer(barcodeOptions, (err, png) => {
    if (err) {
        console.error(err)
    } else {
        const fs = require('fs')
        fs.writeFileSync(`./image/${randomFileName}`, png)
        console.log(`Barcode disimpan ke ${randomFileName}`);
    }
})