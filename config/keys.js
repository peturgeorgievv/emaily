if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev set of keys
  module.exports = require('./dev');
}

// 4BLdAdtxTqNztLYu  myuser

// mongodb+srv://myuser:4BLdAdtxTqNztLYu@cluster0-mtwnv.mongodb.net/test?retryWrites=true&w=majority
//Client id            666312841601-b566ko5ccjtg6iusnfrg6pjkf0fqe2at.apps.googleusercontent.com

// Client secret                Y_SPXbzeaYF-6AYUCpD9Zgx0
