//Importação estilo Common JS

const fs = require('fs');
const path = require('path');


function createDirectory(dirPath){
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) =>{
            if(err){
                reject(err); // Rejeita a Promise em caso de erro
            } else{
                resolve(`Directory '${dirPath}' created successfully`); // Resolve a Promise indicando sucesso
            }
        })
    })
}

function createFile(filePath, content = ''){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) =>{
            if(err){
                reject(err); // Rejeita a Promise em caso de erro
            } else{
                resolve(`File '${filePath}' created successfully`); // Resolve a Promise indicando sucesso
            }
        })
    })
}

function listFiles(dirPath){
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) =>{
            if(err){
                reject(err); // Rejeita a Promise em caso de erro
            } else{
                resolve(files); // Resolve a Promise indicando sucesso
            }
        })
    })
}

function readFile(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) =>{
            if(err){
                reject(err); // Rejeita a Promise em caso de erro
            } else{
                resolve(data); // Resolve a Promise indicando sucesso
            }
        })
    })
}

function writeFile(filePath, content){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) =>{
            if(err){
                reject(err); // Rejeita a Promise em caso de erro
            } else{
                resolve(`File written successfully`); // Resolve a Promise indicando sucesso
            }
        })
    })
}

function deleteFile(filePath){
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) =>{
            if(err){
                reject(err); // Rejeita a Promise em caso de erro
            } else{
                resolve(`File deleted successfully`); // Resolve a Promise indicando sucesso
            }
        })
    })
}


module.exports = {createDirectory, createFile, listFiles, readFile, writeFile, deleteFile}