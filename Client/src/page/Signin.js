import { useEffect, useState } from "react";
import "../index.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom"


const Signin = () => {

  const navigate  = useNavigate();

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [Aadhar, setaadhar] = useState();
  const [phone, setphone] = useState();
  const [maxquantity, setquantity] = useState();
  const [pincode, setpincode] = useState();
  const [password, setpassword] = useState();


  const saveuser = async (e) => {
     e.preventDefault();
   
    const data = {
      name,
      email,
      Aadhar,
      phone,
      walletAddress,
      maxquantity,
      pincode,
      password,
    }


    try {
      const res = await axios.post("http://localhost:9000/api/auth/signup",data)  
      console.log(res.data);
      navigate('/login')

      
    } catch (error) {
       console.log(error);
    } 

  }

  //------------------------------------------------------------------------------------------------------------------------------------------

  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  //-----------------------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      {/* <!-- component --> */}

      <div className="bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">
        <div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
          <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
            <div className="self-start hidden lg:flex flex-col  text-gray-300">
              <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
              <p className="pr-3 text-sm opacity-75">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign In{" "}
                </h3>
                <p className="text-gray-400">
                  Don'thave an account?{" "}
                  <a
                    href="#"
                    className="text-sm text-purple-700 hover:text-purple-700"
                  >
                    Sign Up
                  </a>
                </p>
              </div>

              <div className="space-y-6">
                <input
                  onChange={(e) => setname(e.target.value)}
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type=""
                  placeholder="Name"
                />

                <input
                  onChange={(e) => setemail(e.target.value)}
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type=""
                  placeholder="Email"
                />

                <input
                  onChange={(e) => setaadhar(e.target.value)}
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type=""
                  placeholder="Aadhar No"
                />

                <input
                  onChange={(e) => setphone(e.target.value)}
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type=""
                  placeholder="Phone No"
                />

                <input
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="text"
                  value={walletAddress ? walletAddress : ""}
                  placeholder="wallet address"
                />

                <input
                  onChange={(e) => setquantity(e.target.value)}
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type=""
                  placeholder="Quantity(KWh)"
                />

                <input
                  onChange={(e) => setpincode(e.target.value)}
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type=""
                  placeholder="Pincode"
                />

                <input
                  onChange={(e) => setpassword(e.target.value)}
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-purple-700 hover:text-purple-600">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  onClick={connectWallet}
                  type="submit"
                  className="w-full flex justify-center bg-purple-800 mt-4 hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                >
                  <span className="is-link has-text-weight-bold">
                    {walletAddress && walletAddress.length > 0
                      ? `Connected: ${walletAddress.substring(
                          0,
                          6
                        )}...${walletAddress.substring(38)}`
                      : "Connect Wallet"}
                  </span>
                </button>
                <button
                  onClick={saveuser}
                  type="submit"
                  className="w-full flex justify-center bg-purple-800 mt-4 hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </button>
              </div>

              <div className="flex justify-center gap-5 w-full "></div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Signin;
