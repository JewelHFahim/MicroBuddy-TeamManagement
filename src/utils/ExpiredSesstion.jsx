// import { useDispatch } from "react-redux";
// import { addLogout } from "../redux/features/user/userSlice";
// import { useEffect } from "react";

// Create the LogoutFun function.
// const LogoutFun = () => {
//   const dispatch = useDispatch();
//   dispatch(addLogout());
// }

// Set up the setInterval to call LogoutFun every 10 seconds (10000 milliseconds).
// setInterval(LogoutFun, 10000);

// To clear the interval when it's no longer needed (e.g., when the component unmounts), you can use useEffect.
// Make sure you import useEffect from 'react' if you haven't already.

// Example of clearing the interval when the component unmounts:
// useEffect(() => {
//   return () => {
//     clearInterval(intervalId);
//   };
// }, []);

// Don't forget to return the intervalId from the setInterval call to clear it later if needed.






// =======================>> 2nd Approach <<==========================//

// // Function to set an item in local storage with an expiration time
// function setItemWithExpiration(key, value, expirationInMinutes) {

//     const now = new Date();
//     const item = { value, expiration: now.getTime() + expirationInMinutes * 60 * 1000};


//     localStorage.setItem(key, JSON.stringify(item));
//   }
  
//   // Function to get an item from local storage and check if it's expired
//   function getItemWithExpiration(key) {
//     const item = localStorage.getItem(key);
//     if (!item) return null;
  
//     const parsedItem = JSON.parse(item);
//     const now = new Date();
  
//     // Check if the item has expired
//     if (now.getTime() > parsedItem.expiration) {
//       localStorage.removeItem(key); // Remove the item if it's expired
//       return null;
//     }
  
//     return parsedItem.value;
//   }
  
//   // Set an item in local storage with an expiration time of 30 minutes
//   setItemWithExpiration('myItem', 'myValue', 30);
  
//   // Retrieve the item from local storage
//   const retrievedValue = getItemWithExpiration('myItem');
  
//   if (retrievedValue !== null) {
//     // Item is still valid
//     console.log('Retrieved Value:', retrievedValue);
//   } else {
//     // Item has expired or doesn't exist
//     console.log('Item has expired or does not exist');
//   }
  