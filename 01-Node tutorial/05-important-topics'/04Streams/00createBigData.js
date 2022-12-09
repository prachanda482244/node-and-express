const {writeFile,appendFile} = require('fs').promises;

     for( i=0;i<=2500;i++){
        writeFile('../../0content/big-data.txt',`Hello world  ${i}\n `,{flag:'a'});
    }