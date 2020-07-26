module.exports = {
    CreateChat: async (parent, { data: { Message, userId } }, { Chat, pubsub }) => {
      try {
        const chat = await new Chat({
          Message,
          userId
        }).save();
        //Birince yere oda ismini veriyoruz
        //İkinci yere göndermek istediğin data
        pubsub.publish('Chat', {
          Message: chat
        });
        return chat;
      } catch (error) {
        throw new Error(error);
      }
    }
}
