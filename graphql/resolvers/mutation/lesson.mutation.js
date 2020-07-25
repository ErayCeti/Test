module.exports = {
    createLesson: async (parent, {data: { Name } }, { Lesson }) => {
        const lesson = await Lesson.findOne({ Name });
        if (!lesson) {
          return await new Lesson({
            Name
          }).save()
        }
    }
}
