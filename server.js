const express = require('express');
const app = express();
const port = 3000;

// Set the static folder for serving files
app.use(express.static('publix'));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/publix/index.html');
});

app.get('/joe_biden', (req, res) => {
    res.sendFile(__dirname + '/publix/joe_biden.html');
  });

  app.get('/real_info', (req, res) => {
    res.sendFile(__dirname + '/publix/real_info.html');
  });

  app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + '/publix/contacts.html');
  });

  app.get('/send_mail', (req, res) => {
    res.sendFile(__dirname + '/publix/send_mail.php');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

