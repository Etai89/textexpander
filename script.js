$(document).ready(async () => {


    $('#value').focus()
    const copyToClipboard = () => {
        let copyText = $('#code')[0]
        copyText.select()
        copyText.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(copyText.value)
    }

    $('#value').on('input', () => {
        if ($('#value').val() === 'ca') {
            copyToClipboard()
            $('#code').val(`
        copy the code = ca

        codes:
        jQuery ready = ready
        console.log() = ccc
        jQuery cnd = jqcdn
        ajax request = ajax
        ajax promise = proajax
        for loop = forl
        new Object = obj
        new Array = arr
        new map = map
        new function = func
        new table - table
        new select = select
        manifest.js = manifest
        tts speak function - speakf
        speech recognition - speechr
        full html start = htmlf

        `)
            $('#value').val('')
            window.location.reload()
        }
        $('#value').focus()
        

    })
    const runCommands = () => {
        $('#value').on('input', () => {
            const value = $('#value').val()
            const code = $('#code')
            if (value === 'ccc') {
                code.text('console.log()')
                $('#value').val('')
            }

            if (value === 'ajax') {
                code.text(`
const url = "https://jsonplaceholder.typicode.com/posts"
const settings = {
    url: url,
    method: "GET",
    headers: {
        contentType: "application/json"
        }
    }
$.ajax(settings).done(async(response)=>{
    console.log(response)
})`)
                $('#value').val('')
            }

            if (value === "proajax") {
                code.text(`const url = "https://jsonplaceholder.typicode.com/posts"
const settings = {
    url: url,
    method: "GET",
     headers: {
        contentType: "application/json"
        }
    }
const getData = new Promise(async (resolve, reject) => {
    let info = await $.ajax(settings)
    resolve(info)
    reject('error')
})
const data = await getData
console.log(data)`)
                $('#value').val('')
            }

            if (value === "forl") {
                code.text(`for(let i = 0; i<10 ; i++){
    console.log(i)
    }`)
                $('#value').val('')
            }

            if (value === 'ready') {
                code.text(`$(document).ready(async()=>{
                    
})`)
                $('#value').val('')
            }

            if (value === 'obj') {
                code.text(`const newObject = {

    }`)
                $('#value').val('')
            }

            if (value === 'arr') {
                code.text(`const newArray = [

    ]`)
                $('#value').val('')
            }

            if (value === 'map') {
                code.text(`.map(element=>{
        
    })`)
                $('#value').val('')
            }

            if (value === 'func') {
                code.text(`const newFunction = ()=>{

                    }`)
                $('#value').val('')
            }

            if (value === 'table') {
                code.text(`<table>
            <thead>
                <th></th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>`)
                $('#value').val('')
            }

            if (value === 'select') {
                code.text(`<select id="">
            <option></option>
            <option></option>
            <option></option>
            <option></option>
        </select>`)
                $('#value').val('')
            }

            if (value === 'jqcdn') {
                code.text(`<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>`)
                $('#value').val('')
            }

            if (value === 'manifest') {
                code.text(`{
    "name": "App Name",
    "short_name": "App Name Shortcut",
    "start_url": "./",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#000000",
    "icons": [
      {
        "src": "favicon.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "favicon.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }`)
                $('#value').val('')
            }

            if (value === 'speakf') {
                code.text(`function speakText(text) {
    if ('speechSynthesis' in window && !silentMode) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = languageUser
        utterance.onend = () => stopTTSButton.prop('disabled', true)
        window.speechSynthesis.speak(utterance)
        stopTTSButton.prop('disabled', false)
    }
}`)
                $('#value').val('')
            }
            
            if (value === 'speechr') {
                code.text(`const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
        alert("Speech Recognition API is not supported in your browser.")
        return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = languageUser
    recognition.interimResults = false
    recognition.continuous = true`)
                $('#value').val('')
            }

            if (value === 'htmlf') {
                code.text(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="manifest" href="manifest.json">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</head>
<body>
    
</body>
</html>`)
                $('#value').val('')
            }

            if (value === 'NEW') {
                code.text(`NEW`)
                $('#value').val('')
            }

            if (value === 'NEW') {
                code.text(`NEW`)
                $('#value').val('')
            }

            if (value === 'NEW') {
                code.text(`NEW`)
                $('#value').val('')
            }

            if (value === 'NEW') {
                code.text(`NEW`)
                $('#value').val('')
            }

        })
    }

    runCommands()


})

