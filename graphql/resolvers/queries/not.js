const Not = {
    Lesson: async (parent, args, { Lesson }) => {
        return await Lesson.findById(parent.lessonId);
    }
 }
module.exports = Not;
