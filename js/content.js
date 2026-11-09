/* =====================================================================
   HISTOSENTIENCE — ALL EDITABLE CONTENT LIVES IN THIS FILE
   ---------------------------------------------------------------------
   POSITIONS
   - "desktop" positions are in pixels on your 1920 x 1080 Photoshop
     canvas: x = distance from left, y = distance from top, w = width.
     You can read them straight off Photoshop (Info panel / guides).
     Height follows the image's own proportions.
   - "mobile" positions are in pixels on a 390 x 960 phone canvas
     (mobile: false = not shown on phones).
   - "extra" (performance pages): more faded photos, fixed in place while the text scrolls.
   - pretextured: true = paper texture already baked into the file
     (originals are kept in images/src).
   - Everything scales to the visitor's screen automatically.

   IMAGES
   - Put image files in the /images folder and write the file name here.
   - To swap an image: replace the file (same name), or change "src".
   - "front" = visible on top of the paper, "back" = seen through the paper.
   - Performance pages: "faded" images with alreadyFaded: true are shown as-is
     (the *-tex.jpg files are baked: greyscale + grain, on white at ~62–75%,
     paper texture Pin Light 40%). "full" = the original shown when clicked.
   - pretextured: true = the image file already has its texture baked in
     (no filter is added in the browser). The *-tex.jpg files are made from
     your Photoshop recipe: image on white at its opacity + paper texture in
     Pin Light 40%.

   LANGUAGES
   - Any text can be written once (same in all languages):
         artists: "Chloe Chignell"
     or per language:
         location: { en: "au JUS, St Gilles", fr: "au JUS, Saint-Gilles", ... }
   - If a language is missing for a text, the English one is shown.
   - The order of the switch on the homepage is set in "languages".

   TEXT
   - Text fields accept simple HTML: <em>italic</em>, <br>, <a href="">.
   - Paragraphs are lists of strings: one string = one paragraph.
   ===================================================================== */

window.SITE = {

  /* Language menu: bottom-left corner of the homepage (top-right on phones),
     and a small fold-out menu next to the X on the other pages. */
  languages: ["hr", "en", "fr", "nl"],
  languageNames: { hr: "hrvatski", en: "english", fr: "français", nl: "nederlands" },
  defaultLanguage: "en",

  title: "HISTOSENTIENCE",
  titlePosition: { desktop: { x: 333, y: 818 }, mobile: { x: 12, y: 12 } },

  /* Page-turn sound when the About / performance pages open and close.
     Replace sound/page-turn.mp3 with your own recording if you like. */
  sound: false,
  soundFile: "sound/page-turn.mp3",
  soundVolume: 0.3,

  /* Opening of the homepage: images start under a sheet of paper that then
     slowly fades. opacity = how covered at the start, hold = seconds before it
     starts, duration = seconds it takes. enabled: false turns it off. */
  intro: { enabled: true, opacity: 0.86, hold: 1, duration: 8 },

  /* How strongly things float on the homepage (1 = default, 0 = still) */
  floatStrength: 1,

  /* Overall sizing on computers (1 = as in the Photoshop layout).
     homeImages: size of the homepage images (they shrink around their centre)
     text: size of all type */
  scale: { homeImages: 1, text: 0.86 },

  /* Small interface words */
  ui: {
    about:     { en: "ABOUT", fr: "À PROPOS DE", nl: "OVER", hr: "O" },   // shown before the title on hover
    program:   { en: "Program", fr: "Programme", nl: "Programma", hr: "Program" },
    locations: { en: "Locations", fr: "Lieux", nl: "Locaties", hr: "Lokacije" },
    credits:   { en: "Credits", fr: "Crédits", nl: "Credits", hr: "Autorski tim" },
    bio:       { en: "Artist Bio", fr: "Biographie", nl: "Biografie", hr: "Biografija" },
    duration:  { en: "Duration", fr: "Durée", nl: "Duur", hr: "Trajanje" },
    back:      { en: "Back to homepage", fr: "Retour à l'accueil", nl: "Terug naar home", hr: "Natrag na početnu" },
    enlarge:   { en: "View image larger", fr: "Agrandir l'image", nl: "Afbeelding vergroten", hr: "Povećaj sliku" }
  },

  /* ------------------------------------------------------------------ */
  about: {
    quote: {
      en: "“The trees, the rocks, the animals, they are not [histosentient]. But your laugh, that is a histosentient sound. The word means historically sentient; and that means knowing where you've been, where you are, and where you're going. It also means appreciating it.”",
      fr: "« Les arbres, les rochers, les animaux ne sont pas [histosentients]. Mais ton rire, c'est un son histosentient. Le mot signifie historiquement sensible ; et cela veut dire savoir d'où l'on vient, où l'on est et où l'on va. Cela veut aussi dire l'apprécier. »",
      nl: "“De bomen, de rotsen, de dieren, die zijn niet [histosentiënt]. Maar jouw lach, dat is een histosentiënt geluid. Het woord betekent historisch bewust; en dat betekent weten waar je geweest bent, waar je bent en waar je heen gaat. Het betekent ook dat je het waardeert.”",
      hr: "„Drveće, stijene, životinje – one nisu [histosentientne]. Ali tvoj smijeh, to je histosentientan zvuk. Riječ znači povijesno osjetilan; a to znači znati gdje si bio, gdje jesi i kamo ideš. Znači i cijeniti to.”"
    },
    quoteSource: {
      en: "<em>Out of the Dead City</em> by Samuel R. Delany",
      fr: "<em>Out of the Dead City</em> de Samuel R. Delany",
      nl: "<em>Out of the Dead City</em> van Samuel R. Delany",
      hr: "<em>Out of the Dead City</em>, Samuel R. Delany"
    },

    /* The first word(s) of the description shown large */
    introLead: "Histosentience",
    intro: {
      en: "is a three-day artist-run programme of performance, bringing together three artistic works presented over three consecutive evenings, each followed by a conversation with the artist. Taking as its starting point the concept of histosentience from Samuel R. Delany’s novel Out of the Dead City, which describes a particular form of intelligence that is conscious of its own historicity, the programme proposes a framework in which the works become contexts for one another, allowing their forms, questions and methods to be read relationally, while the artists themselves directly shape the discourse surrounding their work.",
      fr: "est un programme de performance de trois jours, porté par des artistes, qui réunit trois œuvres présentées sur trois soirées consécutives, chacune suivie d'une conversation avec l'artiste. Prenant pour point de départ le concept d'histosentience issu du roman de Samuel R. Delany Out of the Dead City, qui décrit une forme particulière d'intelligence consciente de sa propre historicité, le programme propose un cadre dans lequel les œuvres deviennent des contextes les unes pour les autres, permettant de lire leurs formes, leurs questions et leurs méthodes de manière relationnelle, tandis que les artistes façonnent directement le discours autour de leur travail.",
      nl: "is een driedaags, door kunstenaars gerund performanceprogramma dat drie artistieke werken samenbrengt op drie opeenvolgende avonden, telkens gevolgd door een gesprek met de kunstenaar. Met als vertrekpunt het begrip histosentience uit Samuel R. Delany's roman Out of the Dead City, dat een bijzondere vorm van intelligentie beschrijft die zich bewust is van haar eigen historiciteit, stelt het programma een kader voor waarin de werken context worden voor elkaar, zodat hun vormen, vragen en methoden relationeel gelezen kunnen worden, terwijl de kunstenaars zelf het discours rond hun werk rechtstreeks vormgeven.",
      hr: "je trodnevni program izvedbi koji vode umjetnici, a okuplja tri umjetnička rada predstavljena tijekom tri uzastopne večeri, nakon kojih slijedi razgovor s umjetnicima. Polazeći od pojma histosentience iz romana Samuela R. Delanyja Out of the Dead City, koji opisuje osobit oblik inteligencije svjestan vlastite povijesnosti, program predlaže okvir u kojem radovi postaju konteksti jedni drugima, omogućujući da se njihove forme, pitanja i metode čitaju relacijski, dok umjetnici sami izravno oblikuju diskurs o svom radu."
    },

    locations: [
      { name: "au JUS",   url: "https://aujus.be/" },
      { name: "Metarage", url: "https://www.garage29-offestival.be/" }
    ],

    /* Small notes under the programme (uppercase, like the seating note) */
    notes: [
      {
        en: "Tickets are free upon reservation (suggested donation 10 EUR per performance or 25 EUR for all three).",
        fr: "Entrée gratuite sur réservation (don suggéré : 10 EUR par performance ou 25 EUR pour les trois).",
        nl: "Gratis toegang na reservatie (voorgestelde bijdrage: 10 EUR per voorstelling of 25 EUR voor alle drie).",
        hr: "Ulaz je slobodan uz rezervaciju (preporučena donacija: 10 EUR po izvedbi ili 25 EUR za sve tri)."
      },
      {
        en: "Each performance is followed by a reflection session — an after talk amongst the showing artists.",
        fr: "Chaque performance est suivie d'une session de réflexion — un échange entre les artistes du programme.",
        nl: "Elke voorstelling wordt gevolgd door een reflectiemoment — een nagesprek tussen de kunstenaars van het programma.",
        hr: "Nakon svake izvedbe slijedi refleksija — razgovor među umjetnicima programa."
      }
    ],

    /* Small blocks in the right column: add, remove or reorder freely */
    blocks: [
      { label: { en: "Organised by", fr: "Organisé par", nl: "Georganiseerd door", hr: "Organizacija" },
        text: "au JUS, Ana Letunić, Marko Gutić Mižimakov, Zrinka Užbinec, Stefa Govaart, Chloe Chignell" },
      { label: { en: "Thanks to", fr: "Remerciements", nl: "Met dank aan", hr: "Zahvale" },
        text: "<a href=\"https://www.garage29-offestival.be/a-propos/\">Sabina Scarlat</a> - Metarage" },
      { label: { en: "Funding", fr: "Soutien", nl: "Financiering", hr: "Financijska potpora" },
        text: {
          en: "<a href=\"https://zagreb.hr/javni-poziv-za-predlaganje-programa-u-kulturi-grad/210547\">City of Zagreb</a><br>St Gilles Commune",
          fr: "<a href=\"https://zagreb.hr/javni-poziv-za-predlaganje-programa-u-kulturi-grad/210547\">Ville de Zagreb</a><br>Commune de Saint-Gilles",
          nl: "<a href=\"https://zagreb.hr/javni-poziv-za-predlaganje-programa-u-kulturi-grad/210547\">Stad Zagreb</a><br>Gemeente Sint-Gillis",
          hr: "<a href=\"https://zagreb.hr/javni-poziv-za-predlaganje-programa-u-kulturi-grad/210547\">Grad Zagreb</a><br>Općina Saint-Gilles"
        } },
      { label: { en: "Website and design", fr: "Site web et design", nl: "Website en ontwerp", hr: "Web stranica i dizajn" },
        text: "Marko Gutić Mižimakov" }
    ]
  },

  /* Shown on every performance page, under the date (leave "" to hide) */
  afterTalkNote: {
    en: "Followed by a reflection session — an after talk amongst the showing artists.",
    fr: "Suivie d'une session de réflexion — un échange entre les artistes du programme.",
    nl: "Gevolgd door een reflectiemoment — een nagesprek tussen de kunstenaars van het programma.",
    hr: "Nakon izvedbe slijedi refleksija — razgovor među umjetnicima programa."
  },

  /* Links used wherever a venue name appears on performance pages */
  venueLinks: {
    "au JUS": "https://aujus.be/",
    "METARAGE": "https://www.garage29-offestival.be/"
  },

  /* ------------------------------------------------------------------
     PERFORMANCES — one entry each, in programme order.
     "id" is used in the web address: yoursite.com/#2009
     Titles are never translated.
     ------------------------------------------------------------------ */
  performances: [

    /* ============================ 2009 ============================ */
    {
      id: "2009",
      title: "2009",
      titleDisplay: "2 0 0 9",            // how the title is written on homepage + programme
      artists: "Stefa Govaart & Marko Gutić Mižimakov",
      date: "08-12-26",
      times: {
        en: ["18h first performance", "20h second performance"],
        fr: ["18h première représentation", "20h deuxième représentation"],
        nl: ["18u eerste voorstelling", "20u tweede voorstelling"],
        hr: ["18h prva izvedba", "20h druga izvedba"]
      },
      timesPage: {
        en: ["18h 1st performance", "20h 2nd performance"],
        fr: ["18h 1re représentation", "20h 2e représentation"],
        nl: ["18u 1e voorstelling", "20u 2e voorstelling"],
        hr: ["18h 1. izvedba", "20h 2. izvedba"]
      },
      location: { en: "au JUS, St Gilles", fr: "au JUS, Saint-Gilles", nl: "au JUS, Sint-Gillis", hr: "au JUS, Saint-Gilles" },
      registration: {
        en: "Due to limited seating, please register by emailing <a href=\"mailto:mizimakov@gmail.com\"><em>mizimakov@gmail.com</em></a> specifying which slot you would like to attend.",
        fr: "Le nombre de places étant limité, merci de réserver par e-mail à <a href=\"mailto:mizimakov@gmail.com\"><em>mizimakov@gmail.com</em></a> en précisant la représentation souhaitée.",
        nl: "Omdat het aantal plaatsen beperkt is, reserveer je via <a href=\"mailto:mizimakov@gmail.com\"><em>mizimakov@gmail.com</em></a> met vermelding van de voorstelling die je wilt bijwonen.",
        hr: "Zbog ograničenog broja mjesta, molimo rezervirajte e-mailom na <a href=\"mailto:mizimakov@gmail.com\"><em>mizimakov@gmail.com</em></a> uz naznaku izvedbe koju želite posjetiti."
      },
      duration: { en: "45 minutes", fr: "45 minutes", nl: "45 minuten", hr: "45 minuta" },

      home: {
        back:  { src: "2009-back-tex.jpg", pretextured: true, desktop: { x: 156, y: 103, w: 430 }, mobile: { x: 12,  y: 92,  w: 168 } },
        front: { src: "2009-front-tex.jpg", pretextured: true, desktop: { x: 514, y: 84,  w: 286 }, mobile: { x: 150, y: 66,  w: 116 } },
        titleBlock: { layout: "inline", desktop: { x: 108, y: 616 }, mobile: { x: 12,  y: 316 } },
        dateBlock:  {                   desktop: { x: 525, y: 610 }, mobile: { x: 196, y: 238 } }
      },

      page: {
        colour: { src: "2009-colour-tex.jpg", full: "src/2009-colour.jpg", pretextured: true, desktop: { x: 86,   y: 78,  w: 805 } },
        faded:  { src: "2009-page-faded-tex.jpg", desktop: { x: 1450, y: 380, w: 400 }, alreadyFaded: true, full: "2009-faded-full.jpg" },   // full: image shown when clicked
        extra:  [{ src: "2009-extra-tex.jpg", full: "src/2009-extra.jpg", desktop: { x: 1050, y: 540, w: 300 } }],   // more faded photos, fixed in place like the faded one
        infoPosition: { x: 925, y: 100 },
        textLeft: 86,         // where the text column starts (px from left)
        textTop: 660,          // where the description starts (px from top)
        textWidth: 880,       // width of the reading column
        descriptionStartsWithTitle: true,   // "2009 is a performance…" (title shown large at the start)
        description: {
          en: [
            "is a performance that, through objects, sound, video and choreography, reflects on depiction, technology and historicity, and uses argument — the practice of persuasion — as a performative device.",
            "The performance is organized around the encounter of two performers with oddly grouped items. Clustered portraits of public figures, reconstructed from memory, stand alongside a still life composed of objects refracted through a mirrored sphere. Over the course of the performance, we observe the gathered objects in a material time caught up in social relations of power and reproduction that evade us.",
            "A rendering of a nameless cityscape in aeropittura style further choreographs the space. Speed and altitude break down into dream-like forms of “the future”. Fetishizing bird’s-eye view, seeking to represent representation as such, for the Italian futurists, aeropittura was to impress its viewers: look what technology can do! 2009 borrows this disputed backdrop for a final call to action.",
            "We treat the long first decade of the twenty-first century as a memorable epoch, a coming-of-age story of sorts, today distant enough to return as a problem and demand interpretation. Looking back, we ask how we became available to the popular forms that now organize us."
          ],
          fr: [
            "est une performance qui, à travers des objets, du son, de la vidéo et de la chorégraphie, réfléchit à la représentation, à la technologie et à l'historicité, et utilise l'argumentation — l'art de la persuasion — comme dispositif performatif.",
            "La performance s'organise autour de la rencontre de deux performeur·euses avec des objets étrangement regroupés. Des portraits de personnalités publiques, reconstitués de mémoire et réunis en grappes, côtoient une nature morte composée d'objets réfractés par une sphère miroir. Au fil de la performance, nous observons les objets rassemblés dans un temps matériel pris dans des rapports sociaux de pouvoir et de reproduction qui nous échappent.",
            "Le rendu d'un paysage urbain anonyme dans le style de l'aeropittura chorégraphie lui aussi l'espace. La vitesse et l'altitude se décomposent en formes oniriques du « futur ». Fétichisant la vue à vol d'oiseau, cherchant à représenter la représentation en tant que telle, l'aeropittura devait, pour les futuristes italiens, impressionner ses spectateurs : regardez ce que la technologie peut faire ! 2009 emprunte cette toile de fond controversée pour un ultime appel à l'action.",
            "Nous traitons la longue première décennie du XXIe siècle comme une époque mémorable, une sorte de récit d'apprentissage, aujourd'hui assez lointaine pour revenir comme un problème et exiger une interprétation. En regardant en arrière, nous nous demandons comment nous sommes devenu·es disponibles aux formes populaires qui nous organisent aujourd'hui."
          ],
          nl: [
            "is een performance die via objecten, geluid, video en choreografie reflecteert over verbeelding, technologie en historiciteit, en argumentatie — de praktijk van het overtuigen — inzet als performatief middel.",
            "De performance draait rond de ontmoeting van twee performers met vreemd gegroepeerde voorwerpen. Gebundelde portretten van publieke figuren, uit het geheugen gereconstrueerd, staan naast een stilleven van objecten die gebroken worden door een spiegelende bol. In de loop van de performance zien we de verzamelde objecten in een materiële tijd die verstrikt is in sociale verhoudingen van macht en reproductie die ons ontglippen.",
            "Een weergave van een naamloos stadsgezicht in aeropittura-stijl choreografeert de ruimte verder. Snelheid en hoogte vallen uiteen in droomachtige vormen van ‘de toekomst’. Voor de Italiaanse futuristen, die het vogelperspectief fetisjiseerden en de representatie als zodanig wilden verbeelden, moest de aeropittura de toeschouwer imponeren: kijk wat technologie kan! 2009 leent dit omstreden decor voor een laatste oproep tot actie.",
            "We behandelen het lange eerste decennium van de eenentwintigste eeuw als een gedenkwaardig tijdperk, een soort coming-of-ageverhaal, dat nu ver genoeg achter ons ligt om terug te keren als een probleem dat om interpretatie vraagt. Terugblikkend vragen we ons af hoe we beschikbaar werden voor de populaire vormen die ons vandaag organiseren."
          ],
          hr: [
            "je izvedba koja kroz predmete, zvuk, video i koreografiju promišlja prikazivanje, tehnologiju i povijesnost, a argumentaciju — praksu uvjeravanja — koristi kao izvedbeno sredstvo.",
            "Izvedba je organizirana oko susreta dvoje izvođača s neobično grupiranim predmetima. Skupine portreta javnih osoba, rekonstruiranih po sjećanju, stoje uz mrtvu prirodu sastavljenu od predmeta prelomljenih kroz zrcalnu kuglu. Tijekom izvedbe promatramo okupljene predmete u materijalnom vremenu zahvaćenom društvenim odnosima moći i reprodukcije koji nam izmiču.",
            "Prikaz bezimenog gradskog krajolika u stilu aeropitture dodatno koreografira prostor. Brzina i visina raspadaju se u snolike oblike „budućnosti”. Fetišizirajući ptičju perspektivu i nastojeći prikazati samo prikazivanje, aeropittura je za talijanske futuriste trebala impresionirati gledatelje: pogledajte što tehnologija može! 2009 posuđuje tu spornu pozadinu za završni poziv na djelovanje.",
            "Dugo prvo desetljeće dvadeset i prvog stoljeća tretiramo kao pamtljivu epohu, svojevrsnu priču o odrastanju, danas dovoljno daleku da se vrati kao problem i zatraži tumačenje. Gledajući unatrag, pitamo se kako smo postali dostupni popularnim formama koje nas danas organiziraju."
          ]
        },
        credits: [],
        bios: [
          { name: "Marko Gutić Mižimakov", text: {
            en: "is a visual, performance and text-based artist living between Brussels and Zagreb. They are interested in shaping sensory materials through intimate, collaborative and social processes. Alongside their artistic practice, they are an external associate at the Academy of Fine Arts in Zagreb. They are part of the curatorial and organisational team of the AfterWorld festival in Zagreb.",
            fr: "est un·e artiste visuel·le, de performance et de texte, qui vit entre Bruxelles et Zagreb. Iel s'intéresse à la mise en forme de matériaux sensoriels à travers des processus intimes, collaboratifs et sociaux. Parallèlement à sa pratique artistique, iel est collaborateur·rice externe à l'Académie des beaux-arts de Zagreb. Iel fait partie de l'équipe curatoriale et organisationnelle du festival AfterWorld à Zagreb.",
            nl: "is een beeldend, performance- en tekstkunstenaar die leeft tussen Brussel en Zagreb. Hen is geïnteresseerd in het vormgeven van zintuiglijke materialen via intieme, collaboratieve en sociale processen. Naast de artistieke praktijk is hen externe medewerker aan de Academie voor Schone Kunsten in Zagreb. Hen maakt deel uit van het curatoriële en organisatorische team van het AfterWorld-festival in Zagreb.",
            hr: "bavi se vizualnom, izvedbenom i tekstualnom umjetnošću te živi između Bruxellesa i Zagreba. Zanima ih oblikovanje osjetilnih materijala kroz intimne, suradničke i društvene procese. Uz umjetničku praksu, vanjski su suradnik Akademije likovnih umjetnosti u Zagrebu. Dio su kustoskog i organizacijskog tima festivala AfterWorld u Zagrebu."
          } },
          { name: "Stefa Govaart", text: {
            en: "is a Brussels-based performance artist. Collaborative in nature, their work probes the stakes of critique today, and considers the performer as “function” caught up in distinct forms of institutionality. They are currently collaborating with Marko Gutić Mižimakov on two film projects and the performance titled 2009. Govaart performed in works by Oscar Murillo/Lydia McGlinchey, Eszter Salamon, Claudia Pagès Rabal, among others. BEGIN/The Mirror (2024) is a dance performance for the theater made in collaboration with Bryana Fritz and Chloe Chignell (Beursschouwburg, Brussels, October 30-31). They teach writing and coordinate the theory programme at P.A.R.T.S. in Brussels.",
            fr: "est un·e artiste de performance basé·e à Bruxelles. De nature collaborative, son travail interroge les enjeux de la critique aujourd'hui et envisage le·la performeur·euse comme une « fonction » prise dans des formes distinctes d'institutionnalité. Iel collabore actuellement avec Marko Gutić Mižimakov sur deux projets de films et sur la performance 2009. Govaart a performé dans des œuvres d'Oscar Murillo/Lydia McGlinchey, Eszter Salamon, Claudia Pagès Rabal, entre autres. BEGIN/The Mirror (2024) est une performance de danse pour le théâtre créée en collaboration avec Bryana Fritz et Chloe Chignell (Beursschouwburg, Bruxelles, 30-31 octobre). Iel enseigne l'écriture et coordonne le programme théorique de P.A.R.T.S. à Bruxelles.",
            nl: "is een in Brussel gevestigde performancekunstenaar. Hun werk is collaboratief van aard, onderzoekt wat er vandaag op het spel staat voor kritiek en beschouwt de performer als een ‘functie’ die verstrikt zit in verschillende vormen van institutionaliteit. Hen werkt momenteel met Marko Gutić Mižimakov samen aan twee filmprojecten en de performance 2009. Govaart speelde in werk van Oscar Murillo/Lydia McGlinchey, Eszter Salamon, Claudia Pagès Rabal en anderen. BEGIN/The Mirror (2024) is een dansvoorstelling voor het theater, gemaakt in samenwerking met Bryana Fritz en Chloe Chignell (Beursschouwburg, Brussel, 30-31 oktober). Hen geeft les in schrijven en coördineert het theorieprogramma van P.A.R.T.S. in Brussel.",
            hr: "bavi se izvedbenom umjetnošću i živi u Bruxellesu. Njihov rad, suradnički po prirodi, propituje ulog kritike danas i promatra izvođača kao „funkciju” zahvaćenu različitim oblicima institucionalnosti. Trenutačno surađuju s Markom Gutićem Mižimakovim na dva filmska projekta i izvedbi 2009. Govaart je nastupao u radovima Oscara Murilla/Lydije McGlinchey, Eszter Salamon, Claudije Pagès Rabal i drugih. BEGIN/The Mirror (2024) plesna je izvedba za kazalište nastala u suradnji s Bryanom Fritz i Chloe Chignell (Beursschouwburg, Bruxelles, 30.–31. listopada). Predaju pisanje i koordiniraju teorijski program na P.A.R.T.S.-u u Bruxellesu."
          } }
        ]
      }
    },

    /* ======================= SUN CUT ======================= */
    {
      id: "sun-cut",
      title: "Sun Cut: a lover’s dictionary",
      titleDisplay: "Sun Cut: a lover’s dictionary",
      artists: "Chloe Chignell",
      date: "09-12-26",
      times:     { en: ["18h"], fr: ["18h"], nl: ["18u"], hr: ["18h"] },
      timesPage: { en: ["18h"], fr: ["18h"], nl: ["18u"], hr: ["18h"] },
      location: { en: "METARAGE, St Gilles", fr: "METARAGE, Saint-Gilles", nl: "METARAGE, Sint-Gillis", hr: "METARAGE, Saint-Gilles" },
      registration: "",
      duration: "",

      home: {
        back:  { src: "sun-cut-back-tex.jpg", pretextured: true, desktop: { x: 1186, y: 100, w: 587 }, mobile: { x: 168, y: 374, w: 212 } },
        front: { src: "sun-cut-front-tex.jpg", pretextured: true, desktop: { x: 940,  y: 133, w: 322 }, mobile: { x: 22,  y: 396, w: 132 } },
        titleBlock: { layout: "stack", desktop: { x: 1306, y: 22 }, mobile: { x: 168, y: 526 } },
        dateBlock:  {                  desktop: { x: 1630, y: 378 }, mobile: { x: 168, y: 596 } }
      },

      page: {
        colour: { src: "sun-cut-page-colour-tex.jpg", full: "src/sun-cut-page-colour.jpg", pretextured: true, desktop: { x: 1010, y: 70,  w: 820 } },
        faded:  { src: "sun-cut-page-faded-tex.jpg", full: "sun-cut-page-faded.jpg", desktop: { x: 1500, y: 560, w: 300 }, alreadyFaded: true },
        extra:  [{ src: "sun-cut-extra-tex.jpg", full: "src/sun-cut-extra.jpg", desktop: { x: 1010, y: 600, w: 440 } }],   // more faded photos, fixed in place like the faded one
        jitter: 45,            // images shift randomly by up to this many px on each visit (0 = fixed)
        infoPosition: { x: 86, y: 100 },
        infoWidth: 860,
        textLeft: 86,         // where the text column starts (px from left)
        textTop: 650,
        textWidth: 880,       // width of the reading column
        descriptionStartsWithTitle: true,
        description: {
          en: [
            "is a living lexicon of 366 gestures that embodies the 366 entries in <em>Lesbian Peoples: Material for a Dictionary</em> written by Monique Wittig and Sandie Zeig (1979). In an act of speculative reanimation Sun Cut is an anticipatory document remembering a future yet to arrive. The work unfurls word by word, body by body. Each iteration of the performance progresses through the dictionary: gathering bodies, gestures, dances. It resists linguistic fixity in order to embrace language as a site of transformation, refusal, and reinvention. Inverting the status of printed material in archival practices Sun Cut asks how the body can be both a site and means of preservation.",
            "<em>Lesbian Peoples: Material for a Dictionary</em> is a speculative dictionary that dismantles patriarchal language to posit a world of lesbian relation. Through fragmented definitions and poetic inventions, it reframes language as a site of resistance. Its entries range from definitions of everyday terms to elaborate accounts of mythical events, political movements and cultural practices. The book itself is a queer critique of linguistic authority and its role in enforcing dominant ideologies. Wittig and Zeig subvert the dictionary’s normal function, as a tool of mastery and control, and reshape it into a generative field where language destabilises its own conditions of use. Building on these foundations, Sun Cut approaches Lesbian Peoples not simply as a book but as a practice—a framework for reorganising the body through language."
          ],
          fr: [
            "est un lexique vivant de 366 gestes qui incarne les 366 entrées de <em>Lesbian Peoples: Material for a Dictionary</em> de Monique Wittig et Sandie Zeig (1979). Dans un acte de réanimation spéculative, Sun Cut est un document anticipatoire qui se souvient d'un futur encore à venir. L'œuvre se déploie mot par mot, corps par corps. Chaque itération de la performance avance dans le dictionnaire : elle rassemble des corps, des gestes, des danses. Elle résiste à la fixité linguistique pour embrasser le langage comme lieu de transformation, de refus et de réinvention. En inversant le statut de l'imprimé dans les pratiques d'archive, Sun Cut demande comment le corps peut être à la fois le lieu et le moyen de la préservation.",
            "<em>Lesbian Peoples: Material for a Dictionary</em> est un dictionnaire spéculatif qui démantèle le langage patriarcal pour poser un monde de relations lesbiennes. À travers des définitions fragmentées et des inventions poétiques, il redéfinit le langage comme lieu de résistance. Ses entrées vont de définitions de termes quotidiens à des récits élaborés d'événements mythiques, de mouvements politiques et de pratiques culturelles. Le livre lui-même est une critique queer de l'autorité linguistique et de son rôle dans l'imposition des idéologies dominantes. Wittig et Zeig détournent la fonction habituelle du dictionnaire, outil de maîtrise et de contrôle, pour en faire un champ génératif où le langage déstabilise ses propres conditions d'usage. Sur ces fondations, Sun Cut aborde Lesbian Peoples non pas simplement comme un livre mais comme une pratique — un cadre pour réorganiser le corps à travers le langage."
          ],
          nl: [
            "is een levend lexicon van 366 gebaren dat de 366 lemma's belichaamt van <em>Lesbian Peoples: Material for a Dictionary</em> van Monique Wittig en Sandie Zeig (1979). In een daad van speculatieve reanimatie is Sun Cut een anticiperend document dat zich een toekomst herinnert die nog moet komen. Het werk ontvouwt zich woord voor woord, lichaam voor lichaam. Elke iteratie van de performance vordert door het woordenboek: ze verzamelt lichamen, gebaren, dansen. Het werk verzet zich tegen talige vastheid om taal te omarmen als plek van transformatie, weigering en heruitvinding. Door de status van drukwerk in archiefpraktijken om te keren, vraagt Sun Cut hoe het lichaam zowel plaats als middel van bewaring kan zijn.",
            "<em>Lesbian Peoples: Material for a Dictionary</em> is een speculatief woordenboek dat patriarchale taal ontmantelt om een wereld van lesbische verbondenheid te poneren. Via gefragmenteerde definities en poëtische uitvindingen herdefinieert het taal als plek van verzet. De lemma's gaan van definities van alledaagse woorden tot uitgebreide verslagen van mythische gebeurtenissen, politieke bewegingen en culturele praktijken. Het boek zelf is een queer kritiek op talig gezag en de rol daarvan in het opleggen van dominante ideologieën. Wittig en Zeig ondermijnen de gewone functie van het woordenboek als instrument van beheersing en controle, en hervormen het tot een generatief veld waarin taal haar eigen gebruiksvoorwaarden destabiliseert. Voortbouwend op deze fundamenten benadert Sun Cut Lesbian Peoples niet louter als boek maar als praktijk — een kader om het lichaam via taal te herorganiseren."
          ],
          hr: [
            "živi je leksikon od 366 gesta koji utjelovljuje 366 natuknica knjige <em>Lesbian Peoples: Material for a Dictionary</em> Monique Wittig i Sandie Zeig (1979). Činom spekulativnog oživljavanja, Sun Cut je anticipacijski dokument koji se sjeća budućnosti koja tek treba doći. Rad se razvija riječ po riječ, tijelo po tijelo. Svaka iteracija izvedbe napreduje kroz rječnik: okuplja tijela, geste, plesove. Opire se jezičnoj fiksiranosti kako bi prigrlio jezik kao mjesto preobrazbe, odbijanja i ponovnog izmišljanja. Preokrećući status tiskanog materijala u arhivskim praksama, Sun Cut pita kako tijelo može biti i mjesto i sredstvo očuvanja.",
            "<em>Lesbian Peoples: Material for a Dictionary</em> spekulativni je rječnik koji razgrađuje patrijarhalni jezik kako bi postavio svijet lezbijskih odnosa. Kroz fragmentirane definicije i poetske izume, jezik iznova određuje kao mjesto otpora. Njegove natuknice sežu od definicija svakodnevnih pojmova do razrađenih opisa mitskih događaja, političkih pokreta i kulturnih praksi. Sama knjiga queer je kritika jezičnog autoriteta i njegove uloge u nametanju dominantnih ideologija. Wittig i Zeig podrivaju uobičajenu funkciju rječnika kao alata ovladavanja i kontrole te ga preoblikuju u generativno polje u kojem jezik destabilizira vlastite uvjete uporabe. Gradeći na tim temeljima, Sun Cut pristupa knjizi Lesbian Peoples ne samo kao knjizi nego kao praksi — okviru za reorganizaciju tijela kroz jezik."
          ]
        },
        credits: {
          en: [
            "Concept, Choreography and Performance: Chloe Chignell",
            "Sound and Performance: Steph Holl-Trieu",
            "Sound Collaborations: Steph Holl-Trieu (Essen, Vienna, Paris, Münster), Amina Szecsödy (PAF, St Erme) and Mara Schwerdtfeger (Sydney)",
            "This work is supported by: Critical Path Sydney, Artspace Sydney, Dancehouse Melbourne, GC De Maalbeek, n22 Brussels, Kunstendecreet, Cité des arts, Paris.",
            "This work has been presented by: Treize Gallerie Paris, StadthausGalerie, Kunsthalle Münster, Rakete Festival, Tanzquartier Wien, PACT Zollverein, Essen, Pride Museum, MIMA, Brussels and Summer University, Performing Arts Forum, St Erme, France."
          ],
          fr: [
            "Concept, chorégraphie et performance : Chloe Chignell",
            "Son et performance : Steph Holl-Trieu",
            "Collaborations sonores : Steph Holl-Trieu (Essen, Vienne, Paris, Münster), Amina Szecsödy (PAF, St Erme) et Mara Schwerdtfeger (Sydney)",
            "Avec le soutien de : Critical Path Sydney, Artspace Sydney, Dancehouse Melbourne, GC De Maalbeek, n22 Brussels, Kunstendecreet, Cité des arts, Paris.",
            "L'œuvre a été présentée par : Treize Gallerie Paris, StadthausGalerie, Kunsthalle Münster, Rakete Festival, Tanzquartier Wien, PACT Zollverein, Essen, Pride Museum, MIMA, Bruxelles et Summer University, Performing Arts Forum, St Erme, France."
          ],
          nl: [
            "Concept, choreografie en performance: Chloe Chignell",
            "Geluid en performance: Steph Holl-Trieu",
            "Geluidssamenwerkingen: Steph Holl-Trieu (Essen, Wenen, Parijs, Münster), Amina Szecsödy (PAF, St Erme) en Mara Schwerdtfeger (Sydney)",
            "Met de steun van: Critical Path Sydney, Artspace Sydney, Dancehouse Melbourne, GC De Maalbeek, n22 Brussels, Kunstendecreet, Cité des arts, Parijs.",
            "Eerder gepresenteerd door: Treize Gallerie Paris, StadthausGalerie, Kunsthalle Münster, Rakete Festival, Tanzquartier Wien, PACT Zollverein, Essen, Pride Museum, MIMA, Brussel en Summer University, Performing Arts Forum, St Erme, Frankrijk."
          ],
          hr: [
            "Koncept, koreografija i izvedba: Chloe Chignell",
            "Zvuk i izvedba: Steph Holl-Trieu",
            "Zvučne suradnje: Steph Holl-Trieu (Essen, Beč, Pariz, Münster), Amina Szecsödy (PAF, St Erme) i Mara Schwerdtfeger (Sydney)",
            "Rad su podržali: Critical Path Sydney, Artspace Sydney, Dancehouse Melbourne, GC De Maalbeek, n22 Brussels, Kunstendecreet, Cité des arts, Pariz.",
            "Rad je predstavljen u: Treize Gallerie Paris, StadthausGalerie, Kunsthalle Münster, Rakete Festival, Tanzquartier Wien, PACT Zollverein, Essen, Pride Museum, MIMA, Bruxelles te Summer University, Performing Arts Forum, St Erme, Francuska."
          ]
        },
        bios: [
          { name: "Chloe Chignell (AU)", text: {
            en: "is an artist working across text, choreography and publishing. Her work focuses on language within a choreographic frame. She invests in writing as a body building practice and in practices of experimental translation. In 2019, Chloe co-founded rile* a bookshop and project space for publication and performance with Sven Dehens. Her work has been presented across Europe and Australia including Beursschouwburg Brussels, Dancehouse Melbourne, NEXT Festival, Pavillon ADC Geneva, Batard Festival, Saal Biennale, Moving Words Norway, KAAP Bruges, Littérature etc. Paris, and Venice Biennale of Dance.",
            fr: "est une artiste qui travaille entre le texte, la chorégraphie et l'édition. Son travail porte sur le langage dans un cadre chorégraphique. Elle s'investit dans l'écriture comme pratique de construction du corps et dans des pratiques de traduction expérimentale. En 2019, Chloe a cofondé avec Sven Dehens rile*, une librairie et un espace de projet pour la publication et la performance. Son travail a été présenté en Europe et en Australie, notamment au Beursschouwburg à Bruxelles, Dancehouse Melbourne, NEXT Festival, Pavillon ADC Genève, Batard Festival, Saal Biennale, Moving Words Norway, KAAP Bruges, Littérature etc. Paris et à la Biennale de la danse de Venise.",
            nl: "is een kunstenaar die werkt met tekst, choreografie en uitgeven. Haar werk focust op taal binnen een choreografisch kader. Ze investeert in schrijven als lichaamsvormende praktijk en in praktijken van experimentele vertaling. In 2019 richtte Chloe samen met Sven Dehens rile* op, een boekhandel en projectruimte voor publicatie en performance. Haar werk werd getoond in Europa en Australië, onder meer in Beursschouwburg Brussel, Dancehouse Melbourne, NEXT Festival, Pavillon ADC Genève, Batard Festival, Saal Biennale, Moving Words Norway, KAAP Brugge, Littérature etc. Parijs en de Dansbiënnale van Venetië.",
            hr: "umjetnica je koja radi na presjeku teksta, koreografije i izdavaštva. Njezin rad usmjeren je na jezik unutar koreografskog okvira. Pisanju pristupa kao praksi izgradnje tijela, a bavi se i praksama eksperimentalnog prevođenja. Chloe je 2019. sa Svenom Dehensom suosnovala rile*, knjižaru i projektni prostor za izdavaštvo i izvedbu. Njezini radovi predstavljeni su diljem Europe i Australije, među ostalim u Beursschouwburgu u Bruxellesu, Dancehouseu u Melbourneu, na NEXT Festivalu, u Pavillonu ADC u Ženevi, na Batard Festivalu, Saal Biennalu, Moving Words Norway, u KAAP-u u Bruggeu, na Littérature etc. u Parizu te na Plesnom bijenalu u Veneciji."
          } },
          { name: "Steph Holl-Trieu (DE)", text: {
            en: "is an artist and writer. Her work explores social relationships that shape modes of perception, the production of meaning and experience – both abstract and concrete. Through text, installation, sound, performative readings and role-play, she develops structures that deconstruct and reconfigure existing forms of meaning-making. She regards aesthetic experience as indeterminate and unruly; her works emerge through a process-oriented approach and frequently within collaborative or collective contexts. Her works have been presented at venues including the Shedhalle, Zurich, CH; HAU Berlin, DE; Kunstraum Niederösterreich, Vienna, AT; and Le Commun, Geneva, CH. Her art-critical texts have appeared in publications such as Texte zur Kunst and PW-Magazine.",
            fr: "est artiste et autrice. Son travail explore les relations sociales qui façonnent les modes de perception, la production de sens et l'expérience — abstraites comme concrètes. À travers le texte, l'installation, le son, les lectures performatives et le jeu de rôle, elle développe des structures qui déconstruisent et reconfigurent les formes existantes de production de sens. Elle considère l'expérience esthétique comme indéterminée et indisciplinée ; ses œuvres naissent d'une approche processuelle, souvent dans des contextes collaboratifs ou collectifs. Son travail a été présenté notamment à la Shedhalle, Zurich, CH ; HAU Berlin, DE ; Kunstraum Niederösterreich, Vienne, AT ; et Le Commun, Genève, CH. Ses textes de critique d'art ont paru dans des publications telles que Texte zur Kunst et PW-Magazine.",
            nl: "is kunstenaar en schrijver. Haar werk onderzoekt de sociale relaties die vorm geven aan manieren van waarnemen, aan betekenisproductie en ervaring — zowel abstract als concreet. Via tekst, installatie, geluid, performatieve lezingen en rollenspel ontwikkelt ze structuren die bestaande vormen van betekenisgeving deconstrueren en herschikken. Ze beschouwt esthetische ervaring als onbepaald en weerbarstig; haar werken ontstaan vanuit een procesmatige aanpak en vaak in collaboratieve of collectieve contexten. Haar werk werd getoond in onder meer Shedhalle, Zürich, CH; HAU Berlin, DE; Kunstraum Niederösterreich, Wenen, AT; en Le Commun, Genève, CH. Haar kunstkritische teksten verschenen in publicaties als Texte zur Kunst en PW-Magazine.",
            hr: "umjetnica je i spisateljica. Njezin rad istražuje društvene odnose koji oblikuju načine percepcije, proizvodnju značenja i iskustvo — apstraktno i konkretno. Kroz tekst, instalaciju, zvuk, performativna čitanja i igranje uloga razvija strukture koje dekonstruiraju i rekonfiguriraju postojeće oblike stvaranja značenja. Estetsko iskustvo smatra neodređenim i neposlušnim; njezini radovi nastaju kroz procesni pristup, često u suradničkim ili kolektivnim kontekstima. Radovi su joj predstavljeni, među ostalim, u Shedhalle, Zürich, CH; HAU Berlin, DE; Kunstraum Niederösterreich, Beč, AT; i Le Commun, Ženeva, CH. Njezini likovno-kritički tekstovi objavljeni su u publikacijama poput Texte zur Kunst i PW-Magazine."
          } }
        ]
      }
    },

    /* ======================= DOLLS & GOATS ======================= */
    {
      id: "dolls-and-goats",
      title: "Dolls & Goats",
      titleDisplay: "Dolls & Goats",
      artists: "Zrinka Užbinec",
      date: "10-12-26",
      times:     { en: ["18h doors open", "19h performance"], fr: ["18h ouverture des portes", "19h performance"], nl: ["18u deuren open", "19u voorstelling"], hr: ["18h otvaranje vrata", "19h izvedba"] },
      timesPage: { en: ["18h doors open", "19h performance"], fr: ["18h ouverture des portes", "19h performance"], nl: ["18u deuren open", "19u voorstelling"], hr: ["18h otvaranje vrata", "19h izvedba"] },
      note: {
        en: "Doors open at 18:00 with a reading session, individual or shared, with books in the space. The performance begins at 19:00.",
        fr: "Ouverture des portes à 18h avec une session de lecture, individuelle ou partagée, avec des livres dans l’espace. La performance commence à 19h.",
        nl: "Deuren open om 18u met een leessessie, individueel of gedeeld, met boeken in de ruimte. De voorstelling begint om 19u.",
        hr: "Vrata se otvaraju u 18h sesijom čitanja, individualnog ili zajedničkog, s knjigama u prostoru. Izvedba počinje u 19h."
      },
      location: { en: "au JUS, St Gilles", fr: "au JUS, Saint-Gilles", nl: "au JUS, Sint-Gillis", hr: "au JUS, Saint-Gilles" },
      registration: {
        en: "Due to limited seating, please register by emailing <a href=\"mailto:mizimakov@gmail.com\"><em>mizimakov@gmail.com</em></a>.",
        fr: "Le nombre de places étant limité, merci de réserver par e-mail à <a href=\"mailto:mizimakov@gmail.com\"><em>mizimakov@gmail.com</em></a>.",
        nl: "Omdat het aantal plaatsen beperkt is, reserveer je via <a href=\"mailto:mizimakov@gmail.com\"><em>mizimakov@gmail.com</em></a>.",
        hr: "Zbog ograničenog broja mjesta, molimo rezervirajte e-mailom na <a href=\"mailto:mizimakov@gmail.com\"><em>mizimakov@gmail.com</em></a>."
      },
      duration: "",

      home: {
        back:  { src: "dolls-back-tex.jpg", pretextured: true, desktop: { x: 1054, y: 631, w: 494 }, mobile: { x: 12,  y: 652, w: 214 } },
        front: { src: "dolls-front-tex.jpg", pretextured: true, desktop: { x: 1464, y: 540, w: 334 }, mobile: { x: 226, y: 664, w: 140 } },
        titleBlock: { layout: "inline", desktop: { x: 1427, y: 1010 }, mobile: { x: 12, y: 806 } },
        dateBlock:  {                   desktop: { x: 925,  y: 883 },  mobile: { x: 226, y: 848 } }
      },

      page: {
        colour: { src: "dolls-page-colour-tex.jpg", full: "src/dolls-page-colour.jpg", pretextured: true, desktop: { x: 560,  y: 64,  w: 860 } },
        faded:  { src: "dolls-page-faded-tex.jpg", full: "dolls-page-faded.jpg", desktop: { x: 1460, y: 560, w: 400 }, alreadyFaded: true },
        extra:  [{ src: "dolls-extra-tex.jpg", full: "src/dolls-extra.jpg", desktop: { x: 1010, y: 760, w: 400 } }],   // more faded photos, fixed in place like the faded one
        jitter: 30,
        infoPosition: { x: 60, y: 100 },
        infoWidth: 450,
        textLeft: 86,         // where the text column starts (px from left)
        textTop: 720,
        textWidth: 880,       // width of the reading column
        descriptionStartsWithTitle: false,   // title shown large on its own line above
        description: {
          en: [
            "It could start with a doll-like body. A doll-like body could lie naked on the lawn, float in the river, stare from the car. She could be frozen in the fridge, covered in plastic on the riverbank, lying in bed as if nothing had happened. A doll-like body could be missing; a day, missing for two, for a week, 96 hours with a hope to reappear, placed perfectly, washed neatly, always in the same pose, waiting to be found, seen on screen, avenged. It will probably start with a doll-unlike body sitting still.",
            "The performance comes into the discussions with the libretto of ballet Coppélia. It is a choreographic manifesto about the relationship between cuteness and violence.",
            "This performance parallels the research “Where do we go when the glass shatters”. With this it re-imagines the choreography through the perspective of its own skin."
          ],
          fr: [
            "Cela pourrait commencer par un corps de poupée. Un corps de poupée pourrait gésir nu sur la pelouse, flotter dans la rivière, fixer depuis la voiture. Elle pourrait être congelée dans le frigo, recouverte de plastique sur la berge, allongée dans un lit comme si de rien n'était. Un corps de poupée pourrait disparaître ; un jour, disparue depuis deux, depuis une semaine, 96 heures avec l'espoir de réapparaître, placée parfaitement, lavée proprement, toujours dans la même pose, attendant d'être trouvée, vue à l'écran, vengée. Cela commencera probablement par un corps qui n'a rien d'une poupée, assis immobile.",
            "La performance entre en dialogue avec le livret du ballet Coppélia. C'est un manifeste chorégraphique sur la relation entre la mignonnerie et la violence.",
            "Cette performance accompagne la recherche « Where do we go when the glass shatters ». Elle réimagine ainsi la chorégraphie depuis la perspective de sa propre peau."
          ],
          nl: [
            "Het zou kunnen beginnen met een poppenlichaam. Een poppenlichaam zou naakt op het gazon kunnen liggen, in de rivier drijven, vanuit de auto staren. Ze zou bevroren in de koelkast kunnen liggen, in plastic gewikkeld op de rivieroever, in bed alsof er niets gebeurd is. Een poppenlichaam zou vermist kunnen zijn; een dag, twee dagen vermist, een week, 96 uur met de hoop weer op te duiken, perfect neergelegd, netjes gewassen, altijd in dezelfde pose, wachtend om gevonden te worden, op het scherm gezien, gewroken. Het zal waarschijnlijk beginnen met een lichaam dat niets van een pop heeft en stil zit.",
            "De performance gaat in gesprek met het libretto van het ballet Coppélia. Het is een choreografisch manifest over de relatie tussen schattigheid en geweld.",
            "Deze performance loopt parallel met het onderzoek ‘Where do we go when the glass shatters’. Daarmee herdenkt ze de choreografie vanuit het perspectief van haar eigen huid."
          ],
          hr: [
            "Moglo bi početi s tijelom nalik lutki. Tijelo nalik lutki moglo bi ležati golo na travnjaku, plutati rijekom, zuriti iz automobila. Mogla bi biti zamrznuta u hladnjaku, prekrivena plastikom na obali rijeke, ležati u krevetu kao da se ništa nije dogodilo. Tijelo nalik lutki moglo bi nestati; dan, dva dana nestala, tjedan, 96 sati s nadom da će se ponovno pojaviti, savršeno položena, uredno oprana, uvijek u istoj pozi, čekajući da bude pronađena, viđena na ekranu, osvećena. Vjerojatno će početi s tijelom koje nije nalik lutki, a koje mirno sjedi.",
            "Izvedba ulazi u razgovor s libretom baleta Coppélia. Ona je koreografski manifest o odnosu između slatkoće i nasilja.",
            "Ova izvedba paralelna je s istraživanjem „Where do we go when the glass shatters”. Time koreografiju ponovno zamišlja iz perspektive vlastite kože."
          ]
        },
        credits: [],
        bios: [
          { name: "Zrinka Užbinec", text: {
            en: "(they/she) dances and works with choreography, shaping it through different media and materials. They often choose collaborative projects and explore the emancipatory potentials of the dancing body. In their work, they approach choreography as a way of thinking, researching, and creating relations through dance, text, video, drawing, objects, and other materials. They hold an MA in Choreography and Performance from JLU Giessen and a practice research PhD from C-DaRE (Centre for Dance Research), Coventry University. Their doctoral research, Moving Between Cuteness and Violence: A Choreographic Investigation, explores the relationship between cuteness and violence and the metastability of choreography. Zrinka enjoys facilitating workshops that question dance and choreography as discipline-specific skill sets. They hold the title of Docent (equivalent to Assistant Professor) at the Dance Department of the Academy of Dramatic Art, University of Zagreb, where they occasionally teach as a guest lecturer.",
            fr: "(iel/elle) danse et travaille la chorégraphie, qu'iel façonne à travers différents médiums et matériaux. Iel choisit souvent des projets collaboratifs et explore les potentiels émancipateurs du corps dansant. Dans son travail, iel aborde la chorégraphie comme une manière de penser, de chercher et de créer des relations à travers la danse, le texte, la vidéo, le dessin, les objets et d'autres matériaux. Iel est titulaire d'un master en chorégraphie et performance de la JLU Giessen et d'un doctorat en recherche par la pratique du C-DaRE (Centre for Dance Research), Coventry University. Sa recherche doctorale, Moving Between Cuteness and Violence: A Choreographic Investigation, explore la relation entre la mignonnerie et la violence ainsi que la métastabilité de la chorégraphie. Zrinka aime animer des ateliers qui questionnent la danse et la chorégraphie en tant que savoir-faire propres à une discipline. Iel porte le titre de Docent (équivalent de professeur·e assistant·e) au département de danse de l'Académie d'art dramatique de l'Université de Zagreb, où iel enseigne occasionnellement comme intervenant·e invité·e.",
            nl: "(hen/zij) danst en werkt met choreografie, die ze vormgeeft via verschillende media en materialen. Ze kiest vaak voor collaboratieve projecten en onderzoekt het emancipatorische potentieel van het dansende lichaam. In haar werk benadert ze choreografie als een manier van denken, onderzoeken en relaties creëren via dans, tekst, video, tekening, objecten en andere materialen. Ze behaalde een MA in Choreografie en Performance aan de JLU Giessen en een praktijkgericht doctoraat aan C-DaRE (Centre for Dance Research), Coventry University. Haar doctoraatsonderzoek, Moving Between Cuteness and Violence: A Choreographic Investigation, onderzoekt de relatie tussen schattigheid en geweld en de metastabiliteit van choreografie. Zrinka begeleidt graag workshops die dans en choreografie als disciplinegebonden vaardigheden bevragen. Ze draagt de titel Docent (gelijkwaardig aan assistent-professor) aan de dansafdeling van de Academie voor Dramatische Kunst van de Universiteit van Zagreb, waar ze af en toe als gastdocent lesgeeft.",
            hr: "(oni/ona) pleše i radi s koreografijom, oblikujući je kroz različite medije i materijale. Često bira suradničke projekte i istražuje emancipacijske potencijale plešućeg tijela. U svom radu koreografiji pristupa kao načinu mišljenja, istraživanja i stvaranja odnosa kroz ples, tekst, video, crtež, predmete i druge materijale. Magistrirala je koreografiju i izvedbu na JLU Giessen, a doktorirala istraživanjem kroz praksu na C-DaRE (Centre for Dance Research), Sveučilište u Coventryju. Njezino doktorsko istraživanje, Moving Between Cuteness and Violence: A Choreographic Investigation, istražuje odnos između slatkoće i nasilja te metastabilnost koreografije. Zrinka rado vodi radionice koje propituju ples i koreografiju kao skupove vještina vezanih uz disciplinu. Nositeljica je naslova docentice na Odsjeku za ples Akademije dramske umjetnosti Sveučilišta u Zagrebu, gdje povremeno predaje kao gostujuća predavačica."
          } }
        ]
      }
    }
  ]
};
