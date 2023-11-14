
const bcrypt = require('bcrypt');
async function hashPassword(password)
{
    try
    {
        //Generate the salt
        const saltRounds=10;
        const salt=await bcrypt.genSalt(saltRounds);
        //Generate the hashed and salt password
        const hashedPassword=await bcrypt.hash(password,salt);
        return hashedPassword;
    }
    catch(error)
    {
        console.error("Error hashing Password:",error);
        throw error;
    }
}

//Example Password
const userPassword="Likhi"
//Generate the hash and salt for the password 
hashPassword(userPassword)
.then(hashed=>
    {
        console.log("Original password:",userPassword);
        console.log("Hashed and Salt Password:",hashed);
    })
.catch(error=>
{

});
    