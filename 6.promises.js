function fetchUserData(userId) {
    // Simulate an API call to fetch user data
    const res = fetch("http://localhost:3000/user");
    return res;
    
  }
  
  const userId = 123;
  fetchUserData(userId)
    .then(res => {
        res.json().then(user=>{
            console.log("User:", user);      
        })
    })
    .catch(error => {
      console.error("Error:", error);
    });
  