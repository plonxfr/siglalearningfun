// dungeon-generator.js

function generateDungeon(width, height) {
    // Create a grid
    const grid = Array.from({ length: height }, () => Array(width).fill(0));

    // Generate rooms
    function addRoom(x, y, w, h) {
        for (let i = y; i < y + h; i++) {
            for (let j = x; j < x + w; j++) {
                grid[i][j] = 1; // Mark as a room
            }
        }
    }

    // Random room sizes and positions
    const roomCount = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < roomCount; i++) {
        const w = Math.floor(Math.random() * 5) + 3;
        const h = Math.floor(Math.random() * 5) + 3;
        const x = Math.floor(Math.random() * (width - w));
        const y = Math.floor(Math.random() * (height - h));
        addRoom(x, y, w, h);
    }

    return grid;
}

// Export the dungeon generator function
module.exports = { generateDungeon };