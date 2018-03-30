const fs = require('fs');
const path = require('path');

const srcFolder = './images';
const newFolder = './test/';

fs.readdirSync(srcFolder).forEach( file => {
    
    console.log(file);
    oldFile = file;
    
    file = file.replace(/(\s+)/g,'');
    file = file.toLocaleLowerCase();
    console.log(file);
    console.log('=======');
    
    fs.renameSync(srcFolder + '\\' + oldFile, srcFolder + '\\' + file );
    
});





