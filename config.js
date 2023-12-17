// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // spotify/game/twitch
    "mode": "game", 
    // dnd/online/idle
    "status": "online",

    "game": {
        "applicationID": "1185943187404111902",

        "name": "with Hu Tao", // title
        "details": "Competitive", // first row below title
        "state": "Harcore", // row below first row

        "largeImageKey": "largeimage", // Large Image
        "largeImageText": "largeimage", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "smallimage", // Small Image
        "smallImageText": "smallimage",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "1185943187404111902",
        "url": "", // twitch channel link

        "details": "", // title
        "state": "", // first row below title (playing ...)

        "largeImageKey": "largeimage", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "largeimage", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)
        
        "smallImageKey": "smallimage",
        "smallImageText": "smallimage",

        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "1185943187404111902", // for exemple listening to {name} instead of listening to spotify
        "details": "", // title
        "state": "", // row below title

        "largeImageKey": "", // https://github.com/mewzax/Discord-RPC-Selfbot/wiki/Spotify-API
        "largeImageText": "", // will also be second row below title
        
        "smallImageKey": "",
        "smallImageText": "",
        
        "startTimestamp": "",
        "endTimestamp": "",
    }
}
