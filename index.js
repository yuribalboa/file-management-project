const fileManager = require('./fileManager');
const readLineSync = require('readline-sync');
const path = require('path');

async function main(){
    const baseDir = path.join(__dirname, "my_files");

    fileManager.createDirectory(baseDir);

    while(true){
        console.log("\nMenu:");
        console.log("1. Criar arquivo");
        console.log("2. Listar arquivos");
        console.log("3. Ler arquivo");
        console.log("4. Escrever arquivo");
        console.log("5. Deletar arquivo");
        console.log("6. Sair");

        const choice = readLineSync.question("Escolha uma opção: ")
        
        try{
            switch(choice){
                case '1':
                    const fileName = readLineSync.question("Digite o nome do arquivo: ");
                    const fileContent = readLineSync.question("Digite o conteúdo do novo arquivo (ou deixe em branco): ");
                    const createFilePath = path.join(baseDir, fileName);
                    //Users/Yuri/Downloads/...
                    const fileMessage = await fileManager.createFile(createFilePath, fileContent);
                    console.log(fileMessage);
                    break;
    
                case '2':
                    const files = await fileManager.listFiles(baseDir);
                    console.log("Arquivos no diretório: ", files);
                    break;
    
                case '3':
                    const readFileName = readLineSync.question("Digite o nome e extensão do arquivo: ");
                    const readFilePath = path.join(baseDir, readFileName);
                    const content = await fileManager.readFile(readFilePath);
                    console.log("Conteúdo do arquivo: ", content);
                    break;
    
                case '4':
                    const writeFileName = readLineSync.question("Digite o nome e extensão do arquivo: ");
                    const writeFilePath = path.join(baseDir, writeFileName);
                    const newContent = readLineSync.question("Digite o conteúdo a ser escrito: ");
                    await fileManager.writeFile(writeFilePath, newContent);
                    console.log("Arquivo escrito com sucesso.");
                    break;
    
                case '5':
                    const deleteFileName = readLineSync.question("Digite o nome e extensão do arquivo: ");
                    const deleteFilePath = path.join(baseDir, deleteFileName);
                    const messageDelete = await fileManager.deleteFile(deleteFilePath);
                    console.log(messageDelete);
                    break;
    
                case '6':
                    console.log("Saindo...");
                    return;
    
                default:
                    console.log("Opção inválida. Tente novamente.s")
            }
        } catch (err){
            console.log(err);
        }
    }
}

main();