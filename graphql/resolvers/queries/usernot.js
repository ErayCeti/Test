const User = {
    Not: async (parent, args, { Not }) => {
        return await Not.find({ userId: parent.id });
    }
};
module.exports = User;
