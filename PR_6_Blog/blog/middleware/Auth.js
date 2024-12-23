
const User = require("../Models/user.schema");
const LocalStrategy = require("passport-local").Strategy;
const initializer = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          let user = await User.findOne({ email: email });
          if (!user) {
            return done(null, false);
          }
          const isMatched = await bcypt.compare(password, user.password);
          if (!isMatched) {
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    let user = await User.findById(id);
    return done(null, user);
  });
};


module.exports = initializer;