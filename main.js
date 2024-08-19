const lib = exports['ox_lib'];

RegisterNetEvent('showLeaderboard');
onNet('showLeaderboard', (leaderboard) => {
    const names = leaderboard.map(name => ({
        title: name.label,
        description: name.value,
        readOnly: true
    }));
    lib.registerContext({
        id: 'lastnameLeaderboard',
        title: "Leaderboard Achternamen",
        options: names,
    });
        
    lib.showContext('lastnameLeaderboard');

});
