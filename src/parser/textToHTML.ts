import {
  extras,
  colorCodeToHex,
} from '../styleLibrary';
import {
  htmlStringFormatting,
} from "../utils";






// text to html
/**
 * Convert motd text to html.
 * @param motdString
 */
export default function textToHTML(motdString: string) {
  const motdText = motdString;

  const colorCodeReg = /([§][0-9a-fA-FklmnorFKLMNOR])/g;
  const codeREGEX = new RegExp(colorCodeReg.source);
  const codeSplit = motdText.split(codeREGEX);

  let fontStyle = "";
  let colorHex = "";
  let resultHTML = "";

  codeSplit.forEach((item) => {
    const motdStringToLowerCase = item.toLowerCase();

    // 過濾 hex
    if (Object.hasOwn(colorCodeToHex, motdStringToLowerCase)) {
      //console.log(`偵測出 ${ colorCodeToHex[item] }`)
      colorHex = colorCodeToHex[motdStringToLowerCase];

      // 過濾文字 style
    } else if (Object.hasOwn(extras, motdStringToLowerCase)) {
      if(motdStringToLowerCase === '§r') {
        colorHex = '';
        fontStyle = '';
      } else {
        // font style code 轉換
        //console.log(`偵測出 style ${ extras[item] }`)
        fontStyle = extras[motdStringToLowerCase];
      }
      // console.log('motdStringToLowerCase', motdStringToLowerCase);
      // console.log('textFont: ' + fontStyle);
      // 正常文字
    } else {
      let resultColor = "";
      let textContent = item;
      //console.log(fontStyle)

      // 檢查 Hex color
      if (colorHex !== "") {
        resultColor = `color:${colorHex};`;
      }

      if (textContent !== "") {
        //console.log('font: ' + fontStyle)
        //console.log('color: ' + colorHex)
        //console.log('text: ' + item)
        //console.log('---------------------------------')
        // replace html tags
        textContent = htmlStringFormatting(textContent);

        if (resultColor.length !== 0 || fontStyle.length !== 0) {
          resultHTML += `<span style="${fontStyle}${resultColor}">${textContent}</span>`;
        } else {
          resultHTML += textContent;
        }
      }
    }
  });

  return resultHTML;
}
