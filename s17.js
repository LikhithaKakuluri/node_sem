const fs=require('fs');
const path=require('path');
sourceFilePath="C:/Users/kakul/OneDrive/Desktop/AWT531/example.txt";
destinationFilePath="C:/Users/kakul/OneDrive/Desktop/AWT531/example3.txt";


fs.rename(sourceFilePath,destinationFilePath,(err)=>
{
    if(err)
    {
        console.log("Error in renaming file");
    }
    else
    {
        console.log("File renamed Successfully");
    }
});

fs.copyFile(sourceFilePath,destinationFilePath,(err)=>
{
    if(err)
    {
        console.log("Error in Copying File");
    }
    else{
        console.log("File Copied Successfully");
    }
});

fs.unlink(destinationFilePath,(err)=>{
    if(err)
    {
        console.log("Error in deleting File");
    }
    else{
        console.log("File deleted Successfully");
    }
}
);