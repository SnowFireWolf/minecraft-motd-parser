// motd parser
// version v1
// 2021 snowfirewolf

import {
    extraLibraryType
} from './types';

const extras: extraLibraryType = {
    '§k': 'obfuscated;',
    '§l': 'font-weight: bold;',
    '§m': 'text-decoration: line-through;',
    '§n': 'text-decoration:underline;',
    '§o': 'font-style: italic;',
    '§r': 'text-decoration: none !important;font-weight:normal!important;font-style: normal!important;',
};

const extraFontStyles: extraLibraryType = {
    "bold": "font-weight: bold;",
    "italic": "font-style: italic;",
    "underlined": "text-decoration:underline;",
    "strikethrough": "text-decoration: line-through;",
    "obfuscated": "mc_obfuscated;"
};

const textToJsonExtras: extraLibraryType = {
    '§k': 'obfuscated',
    '§l': 'bold',
    '§m': 'strikethrough',
    '§n': 'underline',
    '§o': 'italic',
    '§r': '',
    // 大寫
    '§K': 'obfuscated',
    '§L': 'bold',
    '§M': 'strikethrough',
    '§N': 'underline',
    '§O': 'italic',
    '§P': ''
};

const colorCodeToHex: extraLibraryType = {
    '§0': '#000000',
    '§1': '#0000AA',
    '§2': '#00AA00',
    '§3': '#00AAAA',
    '§4': '#AA0000',
    '§5': '#AA00AA',
    '§6': '#FFAA00',
    '§7': '#AAAAAA',
    '§8': '#555555',
    '§9': '#5555FF',
    '§a': '#55FF55',
    '§b': '#55FFFF',
    '§c': '#FF5555',
    '§d': '#FF55FF',
    '§e': '#FFFF55',
    '§f': '#FFFFFF',
};

const extraColorsToHex: extraLibraryType = {
    'black':        '#000000',
    'dark_blue':    '#0000AA',
    'dark_green':   '#00AA00',
    'dark_aqua':    '#00AAAA',
    'dark_red':     '#AA0000',
    'dark_purple':  '#AA00AA',
    'gold':         '#FFAA00',
    'gray':         '#AAAAAA',
    'dark_gray':    '#555555',
    'blue':         '#5555FF',
    'green':        '#55FF55',
    'aqua':         '#55FFFF',
    'red':          '#FF5555',
    'light_purple': '#FF55FF',
    'yellow':       '#FFFF55',
    'white':        '#FFFFFF',
};


// clean tags
function cleanTags(text: string) {
    let REGEX = /(?:§)([0-9a-fA-FklmnorFKLMNOR])/g;
    let textResult = ''

    textResult = text.replace(REGEX, '')

    return textResult
}


function textToHTML(motdString: string) {
    let motdText = motdString
    let colorCodeReg = /([§][0-9a-fA-FklmnorFKLMNOR])/g
    let codeREGEX = new RegExp(colorCodeReg.source)
    let codeSplit = motdText.split(codeREGEX);

    let fontStyle = ''
    let colorHex = ''

    let resultHTML = ''

    codeSplit.forEach((item, index) => {
        let motdStringToLowerCase = item.toLowerCase()
        // 過濾 hex
        if(colorCodeToHex.hasOwnProperty(motdStringToLowerCase)) {

            //console.log(`偵測出 ${ colorCodeToHex[item] }`)
            colorHex = colorCodeToHex[motdStringToLowerCase]

        // 過濾文字 style
        } else if(extras.hasOwnProperty(motdStringToLowerCase)) {
            // font style code 轉換
            //console.log(`偵測出 style ${ extras[item] }`)
            fontStyle = extras[motdStringToLowerCase]
            //console.log('textFont: ' + fontStyle)
            // 正常文字
        } else {
            let resultColor = ''
            let textContent = item
            //console.log(fontStyle)

            // 檢查 Hex color
            if(colorHex !== ''){
                resultColor = `color:${colorHex};`
            }

            if(textContent !== '') {
                //console.log('font: ' + fontStyle)
                //console.log('color: ' + colorHex)
                //console.log('text: ' + item)
                //console.log('---------------------------------')

                if(resultColor.length !== 0 || fontStyle.length !== 0) {
                    resultHTML += `<span style="${resultColor}${fontStyle}">${textContent}</span>`
                } else {
                    resultHTML += textContent
                }
            }
        }
    })

    return resultHTML
}




interface sourceJsonType {
    [key: string]: string
};

// json 轉換 html
function parseJsonToHTML(sourceJson: sourceJsonType) {
    let htmlElement = ""
    let colorHex = ""
    let fontStyle= ""

    //console.log(sourceJson)
    for(let key of Object.keys(sourceJson)) {
        // 文字樣式
        if(extraFontStyles.hasOwnProperty(key)) {
            if(sourceJson[key]) {
                fontStyle = `${extraFontStyles[key]}`
            } else {
                if(key === 'bold') {
                    fontStyle += `font-weight:normal !important;`

                } else if(key === 'italic') {
                    fontStyle += `font-style: normal !important;`

                } else if (key === 'underlined' || key === 'strikethrough') {
                    fontStyle += 'text-decoration: none !important;'

                } else if (key === 'obfuscated') {
                    fontStyle += ``
                } else {
                    fontStyle = ""
                }
            }
            continue;
        }

        // color 處理
        if(key == "color") {
            let colorKey = sourceJson[key]

            // Hex color
            if(extraColorsToHex.hasOwnProperty(colorKey)) {
                colorHex = `color: ${ extraColorsToHex[colorKey] };`;
                continue;
            // color code
            } else if(colorCodeToHex.hasOwnProperty(colorKey)) {
                colorHex = `color: ${ colorCodeToHex[colorKey] };`;
                continue;
            // custom color
            } else {
                // custom hex color code mode
                colorHex = `color: ${ colorKey };`;
                continue;
            }
        }

        //console.log(key)
        // 文字
        if(key == "text") {
            //console.log(textToHtml(sourceJson.text))

            // replace space to &nbsp; code
            htmlElement += textToHTML(sourceJson.text.replace(/ /g, '\u00a0'));
            continue;
        }
        
        /*
        // exrta 處理
        if(key == "extra") {
            for(let sourceJsonExtra of sourceJson.extra) {
                //console.log(sourceJsonExtra)
                htmlElement += parseJsonToHTML(sourceJsonExtra);
            }
        }*/

        //console.log('element: ' + htmlElement)
        //console.log('font: ' + fontStyle)
        //console.log('color: ' + colorHex)
    }

    let retunHTML = ''
    if(fontStyle.length !== 0 || colorHex.length !== 0) {
        retunHTML = `<span style="${colorHex + fontStyle}">${ htmlElement }</span>`
    } else {
        retunHTML = htmlElement
    }

    return retunHTML;
}



// text to json
function textToJson(text: string) {
    let motdText = text

    // color code regex: /([§][0-9a-fklmnor])/g
    // color hex regex: /^#(?:[0-9a-f]{3}){1,2}$/g
    let colorCodeReg = /([§][0-9a-f0-9a-fA-FklmnorFKLMNOR])/g
    let codeREGEX = new RegExp(colorCodeReg.source)
    let codeSplit = motdText.split(codeREGEX);

    let fontStyle = ''
    let colorHex = ''

    /*
    interface innerStyleType {
        [key: string]: Array<object> | string | boolean
    };*/

    interface innerStyleType {
        [key: string]: Array<object> | string | boolean
        text: string
        extra: object[]
    };

    let resultObject:　innerStyleType = {
        text: "",
        extra: []
    }
    
    codeSplit.forEach((item) => {

        let stringToLowerCase = item.toLowerCase()

        // color code 轉換成 hex
        if(colorCodeToHex.hasOwnProperty(stringToLowerCase)) {

            //console.log(`偵測出 ${ colorCodeToHex[item] }`)
            colorHex = colorCodeToHex[stringToLowerCase]
        } else if(textToJsonExtras.hasOwnProperty(stringToLowerCase)) {

            // font style code 轉換
            //console.log(`偵測出 style ${ textToJsonExtras[item] }`)
            fontStyle = textToJsonExtras[stringToLowerCase]
        } else {
            let innerObject: innerStyleType = {
                text: "",
                extra: []
            }

            // 其餘字串
            if(fontStyle !== ''){
                innerObject[fontStyle] = true
            }
            innerObject.text = item

            if(colorHex !== ''){
                innerObject.color = colorHex
            }
            
            resultObject.extra.push(innerObject)
        }
    })

    return resultObject;
}



//var text = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
//var json = '{"text":"","extra":[{"text":"Hypixel Network ","extra":[{"text":"","extra":[{"text":"1.8/1.9/1.10/1.11/1.12 ","extra":[{"text":"","extra":[{"text":"NEW PTL GAME:","extra":[{"text":"","extra":[{"text":" THE BRIDGE","extra":[],"bold":true}],"color":"acqua"}],"bold":true}],"color":"yellow"}],"color":"red"}],"color":"gray"}],"color":"green"}]}';

const _ = {
    cleanTags,
    textToHTML,
    jsonToHtml: parseJsonToHTML,
    textToJson
}

export default _