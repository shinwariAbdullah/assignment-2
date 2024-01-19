const createError = require('http-errors');
require("dotenv").config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require("./config/database.js");
const userRoutes = require("./routes/userRoute.js");


const app = express();

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/user", userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});