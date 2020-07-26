module.exports = {
    Message: {
        subscribe: (parent, args, { pubsub }) => {
            //Burada asyncIterator() ile hangi odayı dinlediğimizi belirtiyoruz;
            return pubsub.asyncIterator('Chat');
        }
    }
}