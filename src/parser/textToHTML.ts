import {
  extras,
  colorCodeToHex,
} from "../styleLibrary";
import {
  htmlStringFormatting,
  baseColorCodeRegex,
} from "../utils";



/**
 * Convert motd text to html.
 * @param motdString
 */
export default function textToHTML(motdString: string) {
  const motdText = motdString;

  const colorCodeReg = baseColorCodeRegex;
  const codeREGEX = new RegExp(colorCodeReg.source);
  const codeSplit = motdText.split(codeREGEX).filter(item => item !== "");

  let fontStyle = "";
  let colorHex = "";
  let resultHTML = "";

  codeSplit.forEach((item) => {
    const motdStringToLowerCase = item.toLowerCase();
    // console.log('motdStringToLowerCase', motdStringToLowerCase);

    // 過濾 hex
    if (Object.hasOwn(colorCodeToHex, motdStringToLowerCase)) {
      //console.log(`偵測出 ${ colorCodeToHex[item] }`)
      colorHex = colorCodeToHex[motdStringToLowerCase];

      // §f reset
      if(motdStringToLowerCase === "§f") {
        fontStyle = "";
      }
      // 過濾文字 style
    } else if (Object.hasOwn(extras, motdStringToLowerCase)) {
      if(motdStringToLowerCase === "§r") {
        colorHex = "";
        fontStyle = "";
      } else {
        // font style code 轉換
        // console.log(`偵測出 style ${ extras[motdStringToLowerCase] }`);
        fontStyle += extras[motdStringToLowerCase];
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
          resultHTML += `<span style="${resultColor}${fontStyle}">${textContent}</span>`;
        } else {
          resultHTML += textContent;
        }
      }
    }
  });

  return resultHTML;
}
