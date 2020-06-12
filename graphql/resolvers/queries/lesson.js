const Lesson = {
    Not: async (parent, args, { Not }) => {
        return await Not.find({ lessonId: parent.id });
    }
};
module.exports = Lesson;
