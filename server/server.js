const express = require('express'); // imports express

const app = express(); // creates server app
const PORT = 5001; // specifies port for server to listen - Heroku provides a port. Local is usually 3000-8000 range. <65000

app.use(express.static("server/public")); // limits server access to specified folder

// Start listening to port specified
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  })