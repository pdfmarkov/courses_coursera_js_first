module.exports = {
    subscribers: [],
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.subscribers.push({
            name: event,
            subscriber: subscriber,
            handler: handler
        });
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

        let deletable = -1;
        this.subscribers.findIndex(function (el, index) {
            if (el.name == event && el.subscriber === subscriber) {//
                deletable = index;
                return index;
            }
        });
        if (deletable != -1) {
            this.subscribers.splice(deletable, 1);
            return this.off(event, subscriber);
        } else {
            return this;
        }
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (let i = 0; i < this.subscribers.length; i++) {
            let subscriber = this.subscribers[i];
            if (subscriber.name === event
                && subscriber.subscriber != undefined
                && subscriber.handler != undefined) {
                subscriber.handler.call(subscriber.subscriber);
            }
        }
        return this;
    }
};