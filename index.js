const funnyExcuse = {
    getExcuse(activity) {
        try {
            const excuses = require('./excuses.json');
            const excuse = excuses[Math.floor(Math.random() * excuses.length)];
            return `I can't ${activity} because ${excuse}`;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = funnyExcuse;
