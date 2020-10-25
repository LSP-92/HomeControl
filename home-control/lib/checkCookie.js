
module.exports = function(options) {
    return function(req, res, next) {
      if (!req.session.authUser) {
        res.redirect('login')
        return
      }  
      next()  
    }
  }