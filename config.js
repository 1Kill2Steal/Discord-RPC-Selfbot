// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // spotify/game/twitch
    "mode": "twitch", 
    // dnd/online/idle
    "status": "streaming",

    "game": {
        "applicationID": "1185943187404111902",

        "name": "with Hu Tao", // title
        "details": "Competitive", // first row below title
        "state": "Harcore", // row below first row

        "largeImageKey": "largeimage", // Large Image
        "largeImageText": "HU TAO NUMBER 1", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "smallimage", // Small Image
        "smallImageText": "HU TAO NUMBER 1",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "1185943187404111902",
        "url": "https://www.youtube.com/channel/UC_MrwWC4QatHk9MfshnvFWg", // twitch channel link

        "details": "✧⁺₊⋆ W/ Hu Tao『♛』⋆⁺₊✧", // title
        "state": "♡ «Hu Tao»『🎴』", // first row below title (playing ...)

        "largeImageKey": "largeimage", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "⊰≍✿≍⌞〝HU TAO〞⌝≍✿≍⊱", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)
        
        "smallImageKey": "smallimage",
        "smallImageText": "HU TAO NUMBER 1",

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
