const bcrypt= require("bcryptjs")
const nodemailer= require("nodemailer")
const employed = require("../model/employee");
const asyncHandler = require("express-async-handler");
const employeelogger= require("../utils/employeelogger")
const jwt= require("jsonwebtoken");
const { DateTime } = require("luxon");
const { error } = require("winston");


const currentDateTimeWAT = DateTime.now().setZone("Africa/Lagos");


//home page

const home = asyncHandler(async (req, res) => {

  res.json({
    message:'here we go'
  })

});

//@route GET/usersllogin
//desc login users
//access public
const login = asyncHandler(async (req, res) => {
  
  const { id } = req.body;

  try {
     const clientIp = req.clientIp;
    // Step 1: Find the user by their userName in the EMPLOYEE collection
    const user = await employed.findOne({ id:id});
  
    // Step 2: If the user is not found, throw an error
    if (!user) {
      throw new Error("User not found");
    }
  
    // Step 3: Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    // Step 4: If the password does not match, throw an error
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }
  
    // // Step 5: Update the user's session data (sessionStorage) with the new session ID
    // req.session.userid = req.session.id;
    // req.session.role = user.role;

    // Step 6: Update the EMPLOYEE document with the new sessionStorage value
    const change = await employed.findByIdAndUpdate(
      user._id,
      { new: true }
    );
  
    // Step 7: If the update fails, throw an error
    if (!change) {
      throw new Error("Error updating session storage");
    }
  const token = generateToken(user._id)
    // Step 8: Respond with a successful login status and the required data
    res.status(202).header('Authorization', `Bearer ${token}`).json({
      message:"successful",
      data:user
    });
    const location = await getLocation(clientIp);
    const loc2 = await getLocation(req.ip)
    console.log(req.ip,req.clientIp)
    // Step 9: Log the successful login event
    employeelogger.info(
      `user with id ${
        user._id
      } logged in at ${currentDateTimeWAT.toString()} - ${res.statusCode} - ${
        res.statusMessage
      } - ${req.originalUrl} - ${req.method} - ${req.ip}  - with IP: ${req.clientIp} from ${location} alt location ${loc2}`
    )
  } catch (error) {
    // Step 10: Handle the errors if any of the steps above throw an error
    console.error(error);
  
    // Step 11: Respond with an appropriate error status code and message
    res.status(500).json({ error: error.message || "Internal server error" });
  }
  
});





//@route POST/users/register
//desc register users
//access public
const register = asyncHandler(async (req, res) => {
  // console.log(req.body)
  const { firstName,lastName,property_id,phoneNumber, group,email,level,posLogging,pmscLogging,isDeleted, password,role, userName,id, alternate_id ,payroll_id, checkName} = req.body;
  // const {} = req.body1
  const check = await employed.findOne({userName:userName})

  if(check){
    throw new Error("user exist")
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  // console.log(firstName)
  // branch_id:req.body.branch_id,
  try{
   
  const employee = await employed.create({
    firstName,
    lastName,
    email,
    checkName,
    password: hashedpassword,
    phoneNumber,
    role,
    userName,
    level,
    group,
    id,
    posLogging,
    pmscLogging,
    isDeleted,
    alternate_id,
    payroll_id,
  
  });
  const token= generateToken(employee._id)
  // const change = await employed.findByIdAndUpdate(
  //   employee._id,
  //   { sessionStorage: token },
  //   { new: true }
  // );

  if(employee){
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
    });
  
    const html = `
    <!DOCTYPE html>
<html>
<head>
  <style>
    /* Set the body background to the image */
    body {
      background-image:url('https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?w=740&t=st=1672839251~exp=1672839851~hmac=250a8619cf050e204e19f685163952c48a928f250756df0e7e70c93e889369da') ;
      background-size: cover;
      background-repeat: no-repeat;
      font-family: sans-serif;
      color: white;
      text-align: center;
      padding: 50px;
    }

    /* Style the header */
    h1 {
        color:red;
      font-size: 48px;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Style the message */
    .class{
      font-size: 28px;
      font-family:comic-sans;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .class1{
      font-size: 20px;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .center{
      justify-content:center;
      align-self: flex-start;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-size: 17px;
      color: rgba(17, 17, 17, 0.87);
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
    }

    /* Style the button */
    .button {
      display: inline-block;
      background-color: #3498db;
      color: white;
      padding: 15px 30px;
      border-radius: 5px;
      text-decoration: none;
      font-size: 18px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  </style>
</head>

<body><h1>Welcome to RMS</h1>
  <p class="class">Dear ${firstName} with id: ${id}.</p>,

 <div class="center"> <p class="class1">Welcome to RMS</p><br>
 
 I hope this email finds you well. On behalf of the entire team, I would like to extend a warm welcome to our restaurant platform. We are thrilled to have you as a new member of our team and are excited to embark on this journey together.<br>

Your registration on the platform marks the beginning of an exciting chapter, and we are confident that your skills and expertise will make a valuable contribution to our restaurant's success. We believe that your presence will help us continue to provide exceptional service and unforgettable dining experiences to our valued customers.<br>

As you settle into your role, you can expect a supportive and friendly work environment. Our team is dedicated to ensuring that every member feels included, valued, and empowered to thrive. Should you have any questions or need assistance, please don't hesitate to reach out to your manager or any of your colleagues.<br>

In the coming days, you will receive further information about your specific duties, training sessions, and schedules. We encourage you to familiarize yourself with our platform and our restaurant's mission, values, and service standards.<br>

<p>We want to emphasize the importance of maintaining the security of your login details. Your account credentials are vital for accessing our platform and performing your duties effectively. Ensuring the confidentiality of these details helps protect sensitive information and maintains the overall security of our system.</p>
<h1>Security Guidelines for Login Details</h1>
<h2>To keep your login details safe, we kindly request that you adhere to the following guidelines:</h2>
<ul>
<li><strong>Never Share Your Login Information:</strong> 
Your login credentials are unique to you, and they should never be shared with anyone, including colleagues or friends. Our system is designed to grant appropriate access based on individual accounts, and sharing credentials poses a significant security risk.</li>
<li><strong>Beware of Phishing Attempts:</strong> Be cautious of any emails or messages requesting your login credentials. Legitimate organizations, including ours, will never ask you to share sensitive information through email or other messaging platforms.</li>
<li><strong>Log Out When Not in Use:</strong> Always log out of the platform when you are not actively using it, especially if you are using a shared or public computer.</li>
<li><strong>Inform Management of Any Suspicious Activity:</strong> If you notice any unusual activity related to your account or suspect a security breach, please report it immediately to your manager or our IT department.</li>
</ul>

<p>We take the security and privacy of our employees seriously, and these measures are in place to protect both you and our organization from potential security risks.</p>
Once again, welcome aboard! We are truly delighted to have you as part of our team and are looking forward to achieving great success together.<br>

If you have any questions before your first day, please feel free to contact Emmanuel Asoba at asomba505@gmail.com or +2348164975474.<br>
Thank you for joining RMS. We look forward to your contributions to our platform!<br>
<p class="center">Best regards,<br></p> 
<p class="center">The RMS team<br></p>
<p class="center">Oluwatobi Ayoola jolaosho<br></p> 
<p class="center">Backend developer<br></p> 
<p class="center">Contact Information: fury25423@gmail.com and 09038745017<br></p> 
  


  
</body>
</html>
  `;
  
    const mailOptions = {
      from: process.env.email,
      to: email,
      subject: `welcome to  RMS, ${lastName} `,
      html: html,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        throw new Error("email not sent");
      } else {
        console.log("Email sent: " + info.response);

      res.set('Authorization', `Bearer ${token}`)
      res.status(202).json({
       status:"employee created",
       token:token,
       data:employee
      })
      employeelogger.info(
        `Email sent to ${email}::250 -  - ${req.Url} - ${req.method} - ${req.ip}-${info.response}`
      )
      }

      employeelogger.info(
        `${email} account created ${res.statusCode} - ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip} `
      );
    });
  

  }else{
    console.log(error)
  }
  }catch(error){
    if(error){
      res.status(422)
      console.log(error.message)
      throw new Error(error.message)
    }
  }



});


//@route GET/users/logout
//desc logout users
//access public
const logout = asyncHandler(async (req, res) => {
  req.session.destroy();
});


//desc for getting ip location
const getLocation = asyncHandler(async (ip) => {
  try {
    // Set endpoint and your access key
    const accessKey = process.env.ip_secret_key;
    const url =
      "http://apiip.net/api/check?ip=" + ip + "&accessKey=" + accessKey;

    // Make a request and store the response
    const response = await fetch(url);

    // Decode JSON response:
    const result = await response.json();

    // Output the "code" value inside "currency" object
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
});
const generateToken = (id) => {
  return jwt.sign(
    {
      id
    },
    process.env.JWT_SECRET,
    { expiresIn: "12h" }
  );
};

module.exports = { register, login, home };
