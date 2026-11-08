HISTOSENTIENCE — website
========================

Plain HTML / CSS / JavaScript. No build step: upload the whole folder to
any web host (or drag it onto Netlify Drop) and open index.html.

FOLDERS
  index.html        the page (you rarely need to touch it)
  js/content.js     ALL TEXT, DATES, IMAGES AND POSITIONS  <-- edit this
  js/main.js        behaviour (floating, hover, page switching)
  css/style.css     look (fonts, paper opacity, grain strength, sizes)
  images/           performance images
  paper/            paper textures (background, overlay, page sheet)
  fonts/            fallback font (DejaVu Sans Mono, free licence)

ADDRESSES
  yoursite/            homepage
  yoursite/#about      about the programme
  yoursite/#2009       performance pages (#sun-cut, #dolls-and-goats)

CHANGING IMAGES
  1. Put the new file in /images.
  2. In js/content.js, change the "src" of that image.
  3. Positions are pixels on your 1920 x 1080 Photoshop canvas
     (x = from left, y = from top, w = width). Height follows the image.
     Phone layout has its own positions on a 390 x 850 canvas.

  "back" images on the homepage (and "faded" images on performance pages)
  get the print-grain treatment automatically, so you can drop in normal
  photos. If an image is already treated in Photoshop, set
  alreadyFaded: true (as for 2009-faded.jpg).

LANGUAGES (HR / EN / FR / NL)
  Every text in js/content.js can be one text for all languages, or
  { en: "...", fr: "...", nl: "...", hr: "..." }. A missing language
  falls back to English. The menu sits in the bottom-left corner of the homepage. Visitors see the language of their browser if
  it's one of the four (otherwise English); their choice is remembered.
  Order of the switch: "languages" at the top of js/content.js.

TWEAKING THE LOOK (top of css/style.css)
  --back-opacity    how visible the images behind the paper are
  --veil-opacity    how much paper grain sits over them
  --hover-veil      how much everything disappears when hovering the title
  --sheet-opacity   how much the homepage shows through About / performance pages
  --fs-big / --fs-small   font sizes (in Photoshop pixels)
  Grain coarseness: in index.html, <feTurbulence baseFrequency=".85">
  (lower = coarser grain). Contrast: slope / intercept just below it.

  Floating speed/amount: floatStrength at the top of js/content.js.

FONT
  Monaco is used on Macs where it's installed. Everyone else sees DejaVu
  Sans Mono (Monaco's close relative). Monaco itself can't be bundled
  without a licence; if you get a webfont licence, add it in /fonts and
  update the first @font-face in css/style.css.
