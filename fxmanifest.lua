fx_version 'cerulean'
game 'gta5'

author 'ItsMeJasperr'
description 'Leaderboard for Lastnames'
client_scripts {
    'main.js',
}
server_script {
    '@oxmysql/lib/MySQL.lua',
    'server.js',
}

dependencies {
    'ox_target',
    'ox_lib',
    'es_extended'
}