# Minecraft Server MOTD Parser
can convert minecraft server motd data to text, json, html, and clean tags.

support 1.16 custom color parser.

support text, json to html.

support auto check motd data type.

# Example:

### `textToHTML(string)`
convert the motd text to html.
```typescript
let motdText = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
motdParser.textToHTML(motdText);
```

result:
```html
<span style="color: #55FF55;">Hypixel Network <span style="color: #AAAAAA;"><span style="color: #FF5555;">1.8/1.9/1.10/1.11/1.12 <span style="color: #FFFF55;"><span style="font-weight: bold;">NEW PTL GAME:<span style="color: acqua;"><span style="font-weight: bold;"> THE BRIDGE</span></span></span></span></span></span></span>
```
