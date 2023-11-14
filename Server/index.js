const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose");
const cors = require("cors");
// const Userroute = require("./Routes/auth");
const User = require("./models/registration");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Order = require("./models/order");
const Auctionord = require("./models/auction")

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

/// USER ROUTES

app.post("/api/auth/signup", async (req, res) => {
  try {
    const {
      name,
      email,
      Aadhar,
      phone,
      walletAddress,
      maxquantity,
      pincode,
      password,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hashSync(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      Aadhar: Aadhar,
      phone: phone,
      walletaddress: walletAddress,
      maxquantity: maxquantity,
      pincode: pincode,
      password: hashpass,
    });
   
    const save = await newUser.save();
    res.status(200).json(save);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    //   const {email,password}= req.body;

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json("user not found");
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json("wrong credentials");
    }

    //  res.status(200).json(user);

    const token = jwt.sign(
      {
        _id: user._id,
        username: user.name,
        email: user.email,
        walletAddress: user.walletaddress,
      },
      "jwt-secret-key",
      { expiresIn: "3d" }
    );
    const { password, ...info } = user._doc;
    res.cookie("token", token).status(200).json(info);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.get("api/auth/logout", (req, res) => {
  try {
    res
      .clearCookie("token", { sameSite: "none", secure: true })
      .status(200)
      .send("User logged out successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/api/auth/refetch", (req, res) => {
  

  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(404).json({ error: "jwt must be provided" });
    }
    jwt.verify(token, "jwt-secret-key", {}, async (err, data) => {
      if (err) {
        return res.status(404).json(err);
      }

     

      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

///ORDER ROUTES



app.post("/api/auth/market", async (req, res) => {
  try {
    const { walletAddress, pincode, maxunit, Price } = req.body;

    const order = await new Order({
      walletaddre: walletAddress,
      pincode: pincode,
      maxunit: maxunit,
      price: Price,
    });

    const User = await order.save();

    res.status(201).json({ message: "order is placed" });
  } catch (error) {
    res.status(404).json(error);
  }
});


app.get("/api/auth/marketord",async (req,res)=>{
   
   try {

    const allOrders = await Order.find();

    if(allOrders.length===0){
      res.status(404).json({message:"no order placed"})
    }


    return res.status(201).json(allOrders)
    
   } catch (error) {
       res.status(404).json(error)
   }

})

app.post("/api/auth/auctionord", async (req, res) => {
  try {
    const { walletAddress ,pincode , minPrice ,maxunit } = req.body;

    const order = await new Auctionord({
      walletaddre: walletAddress,
      pincode: pincode,
      maxunit: maxunit,
      minprice: minPrice,
    });

    const User = await order.save();

    res.status(201).json({ message: "auction order is placed" });
  } catch (error) {
    res.status(404).json(error);
  }
});


app.get("/api/auth/auction",async (req,res)=>{
   
   try {

    const allOrders = await Auctionord.find();

    if(allOrders.length===0){
      res.status(404).json({message:"no order placed"})
    }


    return res.status(201).json(allOrders)
    
   } catch (error) {
       res.status(404).json(error)
   }

})



mongoose
  .connect("mongodb://127.0.0.1:27017/energy-dapp", {})
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("server is running on port" + " " + port);
});
