const {writeFile,appendFile} = require('fs').promises;
// const arr=['❤️','😚','😘','😍','🥰','💋','💘','🤗','😚','❤️','😚','😘','😍','🥰','💋','💘','🤗','😚','❤️','😚','😘','😍','🥰','💋','💘','🤗','😚','❤️','😚','😘','😍','🥰','💋','💘','🤗','😚'];
     for( i=0;i<=2500;i++){
        writeFile('../../0content/big-data.txt',`i love you  ${i}\n `,{flag:'a'});
    }
