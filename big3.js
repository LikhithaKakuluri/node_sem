const express=require('express');
const app=express();
const port=3152;
app.use(express.json());
const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nelda.lang@ethereal.email',
        pass: 'ugWtFEkHe15dx5z6yj'},

});
app.post('/send-mail',async(req,res)=>
{
    const {mailTo,subject,text}=req.body;
    try
    {
    let mailDetails=
    {
        from:'nelda.lang@ethereal.email',
        to:mailTo,
        subject:subject,
        text:text
    };
    transporter.sendMail(mailDetails, function(err,data)
    {
        if(err)
        {
            console.log("error occurs");
        }
        else{
            console.log("Email sent successfully");
            res.status(201).json({message:"Mail sent successfully"});
        }
    });
}
catch(err)
{
    res.status(500).json({message:err.message});
}
});
app.listen(port,()=>
{
    console.log(`Server running on port ${port}`);
});