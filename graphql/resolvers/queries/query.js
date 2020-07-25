const Query = {
    user: async(parent, args, { User }) => {
        try {
          return  await User.findById(args.id);
        } catch (e) {
          throw new Error(e);
        }
    },
    users: async(parent, args, { User }) => {
      try {
        return await User.find({}).sort({'createdAt': 'desc'});

      } catch (e) {
        throw new Error(e);
      }
    },
    activeUser: async (parent, args, { activeUser, User }) => {
      try {
        if (!activeUser) {
    		  return null;
    		}
    		return await User.findOne({ UserName: activeUser.UserName });

      } catch (e) {
          throw new Error(e);
      }
    },
    Not: async(parent, args, { Not }) => {
      try {
        return await Not.findById(args.id);

      } catch (e) {
        throw new Erorr(e);
      }
    },
    Notes: async(parent, args, { Not }) => {
      try {
        return await Not.find({}).sort({ 'Clicked': Not.Clicked });

      } catch (e) {
        throw new Error(e);
      }
    },
    Lesson: async(parent, args, { Lesson }) => {
      try {
        return await Lesson.findById(args.id);
      } catch (e) {
        throw new Error(e);
      }
    },
    Lessons: async (parent, args, { Lesson }) => {
      try {
        return await Lesson.find({}).sort({'createdAt': 'desc'});
      } catch (e) {
        throw new Error(e);
      }
    },
    Class: async(parent, args, { Class }) => {
      try {
        return await Class.findById(args.id);
      } catch (e) {
        throw new Error(e);
      }
    },
    Classes: async (parent, args, { Class }) => {
      try {
        return await Class.find({}).sort({'createdAt': 'desc'});
      } catch (e) {
        throw new Error(e);
      }
    }
}
module.exports = Query;
