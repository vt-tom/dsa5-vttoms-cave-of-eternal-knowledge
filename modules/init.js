import SteinDerWeisen from "./builder.js"

Hooks.once("init", async function() {
    console.log("Initializing VTToms cave of eternal knowledge module")
})

Hooks.once("ready", function() {
    game[game.system.id].cave = {
        SteinDerWeisen: SteinDerWeisen
    }

    game.dsa5.apps.journalBrowser.books.push({
        id: "VTToms Höhle des ewigen Wissens",
        path: "modules/dsa5-vttoms-cave-of-eternal-knowledge/bookde.json",
        visible: true
    })
})