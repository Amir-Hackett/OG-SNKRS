// set up the resolver that will serve the response for the query defined in 'typeDefs.js' file

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

//import file from models folder

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
          return userData;
        }

        throw new AuthenticationError('Not logged in');
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return { token, user };
      },
      saveShoe: async (parent, { shoeBody }, context) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { savedShoes: shoeBody } },
              { new: true }
          );

          return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
      },
      removeShoe: async (parent, { bookId }, context) => {
        if (context.user) {      
          const updatedUser = await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $pull: { savedShoes: {shoeId} } },
              { new: true }
          );
      
          return updatedUser;
        }
    
        throw new AuthenticationError('You need to be logged in!');
      }
    }
};
  
  module.exports = resolvers;