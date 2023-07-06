function handleNewPost(post) {
    // Perform some processing on the post (e.g., sanitization, validation)
    savePostToDatabase(post);
    displayNewPost(post);
  }
  
  function savePostToDatabase(post) {
    // Save the post data to the database
  }
  
  function displayNewPost(post) {
    // Display the new post on the user's feed
  }
  
  const newPost = {
    user: "JohnDoe",
    content: "Just had a great day at the beach!",
    timestamp: Date.now()
  };
  
  handleNewPost(newPost);  