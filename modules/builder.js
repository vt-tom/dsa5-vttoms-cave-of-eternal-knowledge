export default class SteinDerWeisen {
    static async buildVideos() {
        const moduleName = "dsa5-vttoms-cave-of-eternal-knowledge"
        const videos = (await (await fetch(`modules/${moduleName}/data/videos.json`)).json())

        const journalPack = `${moduleName}.tutorials`
        const pack = game.packs.get(journalPack)
        const docs = await pack.getDocuments()
        for(let d of docs) await d.delete()
        for(let d of pack.folders) await d.delete()     
                
        for (let entry of videos.chapters) {
            const chapter = await Folder.create({ name: entry.name, type: "JournalEntry", sorting: "m"}, { pack: journalPack})
            let sort = 1000
            for(let video of entry.videos) {
                sort += 1
                let description ={
                    "name": "Beschreibung",
                    "type": "text",
                    "title": {
                        "show": false,
                        "level": 1
                    },
                    "image": {},
                    "text": {
                        "format": 1,
                        "content": `<p>${video.beschreibung}</p>`,
                        "markdown": ""
                    },                    
                    "src": null,
                    "system": {},                    
                    "ownership": {
                        "default": -1
                    }
                }
                let videoPage ={
                    "name": "Video",
                    "type": "video",
                    "title": {
                      "show": false,
                      "level": 1
                    },
                    "image": {},
                    "text": {
                      "format": 1
                    },
                    "video": {
                      "controls": true,
                      "volume": 0.5,
                      "loop": false,
                      "autoplay": false,
                      "timestamp": 0,
                      "width": null,
                      "height": null
                    },
                    "src": `${video.link}`,
                    "system": {},
                    "ownership": {
                      "default": -1
                    },
                    "flags": {}
                }
                const pages = []

                if(video.link) pages.push(videoPage)

                pages.push(description)

                await JournalEntry.create({
                    name: video.name,
                    folder: chapter.id,
                    pages,
                    sort,
                    flags: {
                        core: {viewMode: 2}
                    }
                }, { pack: journalPack})
            }
        }
    }
    
}