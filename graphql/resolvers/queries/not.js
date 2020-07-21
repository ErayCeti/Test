const Not = {
    Lesson: async (parent, args, { Lesson }) => {
        return await Lesson.findById(parent.lessonId);
    },
    User: async (parent, args, { User }) => {
        return await User.findById(parent.userId)
    }
 }
module.exports = Not;
