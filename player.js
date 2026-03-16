const player = {
    name: 'PlayerName',
    score: 0,
    level: 1,
    reset: function() {
        this.score = 0;
        this.level = 1;
    },
    levelUp: function() {
        this.level += 1;
    },
    addScore: function(points) {
        this.score += points;
    }
};

export default player;