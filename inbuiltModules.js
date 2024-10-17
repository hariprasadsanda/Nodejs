const fs= require('fs')
const newData= 'helloo Hyderabad this my node.js file' 

fs.writeFile('example.html','utf8',(err)=>{
    if(err) console.log('Error writing file',err)
    else console.log('File created successfully')

})
fs.rename('example.html','changed.html',(err)=>{
    if(err) console.log('Error renaming file',err)
    else console.log('File renamed successfully')
})
fs.readFile('changed.html','utf8',(err,data)=>{
    if(err) console.log('Error reading file',err)
    else console.log('File content:',data)
})
fs.writeFile('changed.html',newData,(err)=>{
    if(err) console.log('Error writing file',err)
    else console.log('File updated successfully')
})
fs.unlink('changed.html',(err)=>{
    if(err) console.log('Error deleting file',err)
    else console.log('File deleted successfully')
})