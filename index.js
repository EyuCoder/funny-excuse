const funnyExcuse = {
    getExcuse(activity, place) {
        try {
            const excuses = require('./excuses.json');
            const excuse = excuses[Math.floor(Math.random() * excuses.length)];
            return `I can't ${activity} at ${place} because ${excuse}`;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = funnyExcuse;
