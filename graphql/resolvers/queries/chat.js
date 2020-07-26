module.exports = {
    User: async (parent, args, { User }) =>{
        return await User.findById(parent.userId);
    }
}