Hooks.once("init", async function() {
    console.log("Initializing DSA5 Bestiary 2 module")
})

Hooks.once("setup", async function() {
    mergeObject(game.dsa5.config.vantagesNeedingAdaption, {

    })
})

Hooks.once("ready", function() {
    game.dsa5.apps.journalBrowser.books.push({
        id: "VTToms Tutorials",
        path: "modules/dsa5-tutorial/bookde.json",
        visible: true
    })
})