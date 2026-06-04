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
 * @returns
 */
export default function textToHTML(motdString: string) {
  const colorCodeReg = baseColorCodeRegex;
  const codeREGEX = new RegExp(colorCodeReg.source);
  const codeSplit = motdString.split(codeREGEX).filter(item => item !== "");

  // track active font styles in a Set to avoid duplicates (e.g. repeated §l)
  const fontStyleSet = new Set<string>();
  let colorHex = "";
  let resultHTML = "";

  codeSplit.forEach((item) => {
    const motdStringToLowerCase = item.toLowerCase();
    // console.log('motdStringToLowerCase', motdStringToLowerCase);

    // detect hex
    if (Object.hasOwn(colorCodeToHex, motdStringToLowerCase)) {
      colorHex = colorCodeToHex[motdStringToLowerCase];

      // §f reset
      if(motdStringToLowerCase === "§f") {
        fontStyleSet.clear();
      }

    // detect style
    } else if (Object.hasOwn(extras, motdStringToLowerCase)) {
      if(motdStringToLowerCase === "§r") {
        colorHex = "";
        fontStyleSet.clear();
      } else {
        // font style code convert (Set dedupes repeated codes)
        // console.log(`detect style ${ extras[motdStringToLowerCase] }`);
        fontStyleSet.add(extras[motdStringToLowerCase]);
      }
      // console.log('motdStringToLowerCase', motdStringToLowerCase);
      // console.log('fontStyleSet: ', fontStyleSet);

    // detect normal text
    } else {
      let resultColor = "";
      let textContent = item;
      const fontStyle = [...fontStyleSet].join("");
      //console.log(fontStyle)

      // check Hex color
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
