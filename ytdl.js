const fs = require('fs');
const ytdl = require('ytdl-core');
// const ffmpeg = require('ffmpeg')

async function download(url) {
    try {
        let info = await ytdl.getBasicInfo(url)
        title = info.videoDetails.title || 'download'
        let audio = await ytdl(url, {
            filter: 'audioonly',
            quality: 'highestaudio'
        })
        // if(fs.existsSync('/mp3')){
        //     console.log('exists')
        // }
        audio.pipe(fs.createWriteStream('./music/' + `${title}.mp4`))

    } catch(err) {
        console.log(err)
    }

}

download('https://www.youtube.com/watch?v=6qTghUgMOeY')

