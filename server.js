const { oxmysql } = require('@overextended/oxmysql');
RegisterCommand('leaderboard', (source, args, rawCommand) => {
    getLeaderBoard(source);
}, false);
function getLeaderBoard(source) {    
    try{
        const query = `
        SELECT lastname, COUNT(*) as count
        FROM users
        GROUP BY lastname
        ORDER BY count DESC
        LIMIT 5;`
        oxmysql.query(query, (results) => {
            if (!results || results.length === 0) {
                console.log("Geen data gevonden.");
                TriggerClientEvent('showLeaderboard', source, [{
                    label: 'Geen data gevonden',
                    value: 'Geen'
                }]);
                return;
            }
            const leaderboard = results.map((row, count) => ({
                label: `${count + 1} - ${row.lastname}`,
                value: `Familie: ${row.lastname}\nAantal keer: ${row.count}`,
            }));
    
            TriggerClientEvent('showLeaderboard', source, leaderboard);
        })
    }catch(err){
        console.error("Er is iets fout gegaan.", err);
    }
}