import React, { useEffect, useState } from "react";
import { ethers} from 'ethers';
import { parseUnits } from "ethers";




import Navbar from "../components/Navbar";
import Form from "../components/Form";
import "../index.css";
import Logout from "../Logout";
import ReduxUser from "../redux/reduxUser";
import { useSelector } from "react-redux";
import axios from "axios";

const Marketplace = () => {
  const [status, setStatus] = useState(false);
  const [order , setOrder] = useState([]);

  const { user } = useSelector((state) => state.users); // Extracting user from the Redux state
  const { walletAdd } = useSelector((state) => state.wallet); // Extracting wallet address



   const orders = async ()=>{
     
      try {
        
        const allorders  = await axios.get("http://localhost:9000/api/auth/marketord")

        setOrder(allorders.data)
 
      } catch (error) {
        
      }
   }

    useEffect(()=>{
      orders()
    })


    const handleBuyClick = async (data, amount) => {
      console.log('Handling "Buy" click:', data, amount);
    
      try {
        // Check if MetaMask is installed
        if (window.ethereum) {
          console.log('MetaMask is installed');
          // Request access to the user's Ethereum accounts
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          console.log('Accounts:', accounts);
    
          // Set sender and receiver addresses
          const senderAddress = walletAdd;
          const receiverAddress = data;
    
          // Convert amount to Wei (assuming amount is in Ether)
          const amountInWei = ethers.parseUnits(amount.toString(), 'ether');
          console.log('Amount in Wei:', amountInWei);
    
          // Convert amountInWei to string
          const amountInWeiString = amountInWei.toString();
    
          // Open MetaMask with a transaction request
          await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [
              {
                from: senderAddress,
                to: receiverAddress,
                value: "50" // Use the string representation
              },
            ],
          });
    
          console.log('Transaction request sent to MetaMask');
        } else {
          console.error('MetaMask is not installed');
        }
      } catch (error) {
        console.error('Error handling "Buy" click:', error);
      }
    };
    
    
    



  return (
    <>
      <div className="bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 flex flex-col gap-10 items-center bottom-0 leading-5 h-[100vh] w-full overflow-hidden">
        {/* <!-- component --> */}

        <Logout />

        <div className="bg-gray-200 p-4 absolute right-0 top-20 rounded-lg shadow-md h-18px">
          <p>{user}</p>
        </div>

        <div className="bg-gray-200 p-4  right-0  rounded-lg shadow-md h-18px">
          <p>{walletAdd}</p>
        </div>

        <div className="text-white text-4xl mt-[10rem] font-bold">
          Market Place
        </div>
        <div className="w-[50%]">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />

              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <a
          class="group relative inline-flex items-center overflow-hidden rounded bg-purple-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
          onClick={() => setStatus(true)}
        >
          <span class="absolute -end-full transition-all group-hover:end-4">
            <svg
              class="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span class="text-sm font-medium transition-all group-hover:me-4">
            Add Orders
          </span>
        </a>
        {status ? <Form /> : null}
        <div className="md:px-32 py-8 w-full">
          <div className="shadow overflow-hidden  rounded-2xl border-b border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Wallet Address
                  </th>
                  <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Pincode
                  </th>
                  <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Max Unit (kwh){" "}
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Price(₹)
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Buy
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">

                {order.map((data,index)=>(
                    
               

                <tr key={index}>
                  <td className="w-1/4 text-left py-3 px-4">{data.walletaddre}</td>
                  <td className="w-1/4 text-left py-3 px-4">{data.pincode}</td>
                  <td className="w-1/4 text-left py-3 px-4">{data.maxunit}</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      {data.price}
                    </a>
                  </td>
                  <td>
                    <a
                      className="inline-block rounded border border-current px-6 py-2 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 hover:bg-green-500 hover:text-white"
                      onClick={() => handleBuyClick(data.walletaddre,data.price)}
                    >
                      Buy
                    </a>
                  </td>
                </tr>

               ))} 

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
