print("Esecuzione dello script insertData.js...");

db = db.getSiblingDB("mywcag4all");

print("Database selezionato: " + db.getName());

print("Esecuzione dello script per la collezione tools...");

// Elimina tutti i documenti esistenti nella collezione
db.tools.deleteMany({});

db.tools.insertMany([
  {
    name: "ColorA11y",
    url: "https://color.a11y.com/",
    types: ["Web service"],
    tags: ["color-contrast"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 0,
  },
  {
    name: "Colour Color Contrast Analyser",
    url: "https://www.tpgi.com/color-color-contrast-checker/",
    types: ["Software", "Desktop app"],
    tags: ["color-contrast"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/ThePacielloGroup/CCAe",
    index: 1,
  },
  {
    name: "Contrast Checker",
    url: "https://webaim.org/resources/color-contrast-checker/",
    types: ["Web service", "API"],
    tags: ["color-contrast"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 2,
  },
  {
    name: "Color Contrast Checker",
    url: "https://coolors.co/color-contrast-checker/",
    types: ["Web service"],
    tags: ["color", "font size", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 3,
  },
  {
    name: "Link Color Contrast Checker",
    url: "https://webaim.org/resources/linkcolor-contrastchecker/",
    types: ["Web service", "API"],
    tags: ["color", "level", "link", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 4,
  },
  {
    name: "Color Contrast Checker",
    url: "https://chrome.google.com/webstore/detail/colour-color-contrast-checker/nmmjeclfkgjdomacpcflgdkgpphpmnfe",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["color", "wcag level", "font", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/Pushedskydiver/Colour-Contrast-Checker",
    index: 5,
  },
  {
    name: "Color Contrast Checker",
    url: "https://colourcolor-contrast.cc/",
    types: ["Web service"],
    tags: ["color", "level", "font size", "font", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/Pushedskydiver/Colour-Contrast-Checker",
    index: 6,
  },
  {
    name: "WCAG Contrast Checker",
    url: "https://addons.mozilla.org/it/firefox/addon/wcag-color-contrast-checker/",
    types: ["Browser plugin", "Firefox extension"],
    tags: ["color", "wcag level", "font size", "vision simulator", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 7,
  },
  {
    name: "WCAG Contrast Checker",
    url: "https://chrome.google.com/webstore/detail/wcag-color-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["color", "wcag level", "font size", "vision simulator", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 8,
  },
  {
    name: "WCAG Contrast Checker",
    url: "https://microsoftedge.microsoft.com/addons/detail/wcag-color-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp",
    types: ["Browser plugin", "MS Edge extension"],
    tags: ["color", "wcag level", "font size", "vision simulator", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 9,
  },
  {
    name: "Accessible Color Palette",
    url: "https://pa11y.vercel.app",
    types: ["Web service"],
    tags: ["color", "color-contrast", "wcag level"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/j0lv3r4/pa11y",
    index: 10,
  },
  {
    name: "Readability Test Web FX",
    url: "https://www.webfx.com/tools/read-able/",
    types: ["Web service"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 11,
  },
  {
    name: "Readability Test of a Website",
    url: "https://juicystudio.com/services/readability.php#readweb",
    types: ["Web service"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 12,
  },
  {
    name: "Calcolo Indice Leggibilità",
    url: "https://www.dogmadynamics.com/calcolo-indice-lettura-facile.html",
    types: ["Web service"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 13,
  },
  {
    name: "Readability Score",
    url: "https://chrome.google.com/webstore/detail/readability-score/pfnlengicohogdjcldalmpmdnaecndhf",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 14,
  },
  {
    name: "TRAY Readability Tool",
    url: "https://chrome.google.com/webstore/detail/tray-readability-tool/eccbjfaplogblgjpopbihpgfgmlgjamf/related",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 15,
  },
  {
    name: "Who can use",
    url: "https://whocanuse.com",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/CoreyGinnivan/whocanuse",
    index: 16,
  },
  {
    name: "Web Disability Simulator",
    url: "https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla/related",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc569"), // ISC License
    source_code: "https://github.com/Metamatrix/web-disability-simulator",
    index: 17,
  },
  {
    name: "Funkify – Disability Simulator",
    url: "https://www.funkify.org",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["vision simulator"],
    price: "free, priced",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 18,
  },
  {
    name: "Silktide - WA Simulator",
    url: "https://chrome.google.com/webstore/detail/silktide-website-accessib/okcpiimdfkpkjcbihbmhppldhiebhhaf",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 19,
  },
  {
    name: "Toptal",
    url: "https://www.toptal.com/designers/colorfilter/",
    types: ["Web service"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 20,
  },
  {
    name: "Visolve",
    url: "https://www.ryobi.co.jp/products/visolve/en/",
    types: ["Software", "Desktop app"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 21,
  },
  {
    name: "PEAT",
    url: "https://trace.umd.edu/PEAT/",
    types: ["Software", "Desktop app", "Windows only"],
    tags: ["epilepsy condition evaluation"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 22,
  },
  {
    name: "Color Oracle",
    url: "http://colororacle.org",
    types: ["Software", "Desktop app", "Multiplatform"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/nvkelso/color-oracle-java",
    index: 23,
  },
  {
    name: "HTML Validator",
    url: "https://validator.w3.org/",
    types: ["Web service"],
    tags: ["validator", "html5"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/w3c/markup-validator",
    index: 24,
  },
  {
    name: "CSS Validator",
    url: "https://jigsaw.w3.org/css-validator/",
    types: ["Web service"],
    tags: ["validator", "css3"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/w3c/css-validator",
    index: 25,
  },
  {
    name: "HTML Experimental Validator",
    url: "https://validator.w3.org/nu/",
    types: ["Web service"],
    tags: ["validator", "html"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/validator/validator",
    index: 26,
  },
  {
    name: "i18n-checker",
    url: "https://validator.w3.org/i18n-checker/",
    types: ["Web service"],
    tags: ["internationalisation", "evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/w3c/i18n-checker",
    index: 27,
  },
  {
    name: "CheckLink",
    url: "https://validator.w3.org/checklink",
    types: ["Web service"],
    tags: ["link", "anchors"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/w3c/link-checker",
    index: 28,
  },
  {
    name: "nerdefocus",
    url: "https://chrome.google.com/webstore/detail/nerdefocus/lpfiljldhgjecfepfljnbjnbjfhennpd",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["focus"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/wizzyfx/nerdeFocusPlugIn",
    index: 29,
  },
  {
    name: "tab11t",
    url: "https://chrome.google.com/webstore/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga?hl=en",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["tab order"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 30,
  },
  {
    name: "Table Validator",
    url: "https://wet-boew.github.io/v4.0-ci/demos/tablevalidator/tablevalidator-en.html",
    types: ["Web service"],
    tags: ["table"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/wet-boew/wet-boew",
    index: 31,
  },
  {
    name: "headingsMap",
    url: "https://addons.mozilla.org/es/firefox/addon/headingsmap/",
    types: ["Browser plugin", "Firefox extension"],
    tags: ["headings"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 32,
  },
  {
    name: "Can I Use",
    url: "https://caniuse.com/ciu/index",
    types: ["Web service"],
    tags: ["HTML tag"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc566"), // CC-BY-4.0 License
    source_code: "https://github.com/Fyrd/caniuse",
    index: 33,
  },
  {
    name: "Pa11y Dashboard",
    url: "https://pa11y.org/",
    types: ["Web service"],
    tags: ["monitoring"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/pa11y/pa11y-dashboard",
    index: 34,
  },
  {
    name: "Pa11y Tester",
    url: "https://pa11y.org/",
    types: ["Software", "Desktop app", "Multiplatform", "CLI"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/pa11y/pa11y",
    index: 35,
  },
  {
    name: "Pa11y Webservice",
    url: "https://pa11y.org/",
    types: ["Web service"],
    tags: ["service"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/pa11y/pa11y-webservice",
    index: 36,
  },
  {
    name: "Tanaguru",
    url: "https://www.tanaguru.com/en/open-source-tools-tanaguru/",
    types: ["Web service"],
    tags: ["monitoring"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc563"), // AGPL-3.0 License
    source_code: "https://github.com/Tanaguru/Tanaguru",
    index: 37,
  },
  {
    name: "A11ygato",
    url: "https://opensource.orange.com/en/news/a11ygato-accessbility-dashboard-for-website-monitoring/",
    types: ["Web service"],
    tags: ["monitoring"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/Orange-OpenSource/a11ygato-platform",
    index: 38,
  },
  {
    name: "Web Accessibility",
    url: "https://www.webaccessibility.com",
    types: ["Web service"],
    tags: ["evaluation tool", "monitoring"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 39,
  },
  {
    name: "AInspector Sidebar",
    url: "https://ainspector.github.io/",
    types: ["Browser plugin", "Firefox extension"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc567"), // MPL-2.0 License
    source_code: "https://github.com/ainspector/firefox-ainspector-wcag",
    index: 40,
  },
  {
    name: "Functional Accessibility Evaluator",
    url: "https://fae.disability.illinois.edu/anonymous/?Anonymous%20Report=/",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc568"), // Apache-2.0 License
    source_code: "https://github.com/opena11y/fae2",
    index: 41,
  },
  {
    name: "Web Developer",
    url: "https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["evaluation tool", "dev tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/chrispederick/web-developer/",
    index: 42,
  },
  {
    name: "WAVE Web Accessibility Evaluation Tool",
    url: "https://wave.webaim.org/",
    types: ["Web service", "API", "Browser plugin", "Chrome extension", "Firefox extension", "Edge extension"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 43,
  },
  {
    name: "Total Validator",
    url: "https://www.totalvalidator.com/",
    types: ["Software", "Desktop app", "Browser plugin", "Chrome extension", "Firefox extension", "Edge extension"],
    tags: ["evaluation tool"],
    price: "free, priced",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 44,
  },
  {
    name: "AccessibilityChecker.org",
    url: "https://www.accessibilitychecker.org/",
    types: ["Web service"],
    tags: ["evaluation tool", "legal advising"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 45,
  },
  {
    name: "Sa11y",
    url: "https://ryersondmp.github.io/sa11y/",
    types: ["Software", "Desktop app", "Browser plugin"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/ryersondmp/sa11y",
    index: 46,
  },
  {
    name: "A11y.css",
    url: "https://chrome.google.com/webstore/detail/a11ycss/iolfinldndiiobhednboghogkiopppid",
    types: ["Software", "Desktop app", "Browser plugin", "Chrome extension", "Firefox extension", "API"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/ffoodd/a11y.css",
    index: 47,
  },
  {
    name: "ARC Toolkit",
    url: "https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce/related?hl=en",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 48,
  },
  {
    name: "QualWeb",
    url: "http://qualweb.di.fc.ul.pt/evaluator/",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc569"), // ISC License
    source_code: "https://github.com/qualweb",
    index: 49,
  },
  {
    name: "Mauve++",
    url: "https://mauve.isti.cnr.it/singleValidationResults.jsp",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 50,
  },
  {
    name: "Asqatasun",
    url: "https://doc.asqatasun.org/v5/en/",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc563"), // AGPL-3.0 License
    source_code: "https://gitlab.com/asqatasun/Asqatasun/-/tree/master",
    index: 51,
  },
  {
    name: "TAW",
    url: "https://www.tawdis.net/?lang=en",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 52,
  },
  {
    name: "Visual ARIA",
    url: "http://www.whatsock.com/",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["aria"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/accdc/visual-aria",
    index: 53,
  },
  {
    name: "Accessibility Panel",
    url: "https://developer.chrome.com/docs/devtools/accessibility/reference/#pane",
    types: ["Browser feature", "Chrome"],
    tags: ["aria", "accessibility tree", "order"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc568"), // Apache-2.0 License
    source_code: "https://github.com/GoogleChrome",
    index: 54,
  },
  {
    name: "Lighthouse - Chrome DevTools",
    url: "https://developers.google.com/web/tools/lighthouse",
    types: ["Browser feature", "Chrome"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc568"), // Apache-2.0 License
    source_code: "https://github.com/GoogleChrome/lighthouse",
    index: 55,
  },
  {
    name: "Accessibility Inspector",
    url: "https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector",
    types: ["Browser feature", "Firefox"],
    tags: ["evaluation tool", "vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "https://github.com/mozilla",
    index: 56,
  },
  {
    name: "Atom Accessibility Checker",
    url: "https://atom.io/packages/web-accessibility-checker",
    types: ["Atom package"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/web-weber/web-accessibility-checker",
    index: 57,
  },
  {
    name: "Web Accessibility Extension - Visual Studio Code",
    url: "https://marketplace.visualstudio.com/items?itemName=MaxvanderSchee.web-accessibility",
    types: ["VS Code plugin"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/mvdschee/web-accessibility",
    index: 58,
  },
  {
    name: "Axe Accessibility Linter - Visual Studio Code",
    url: "https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter",
    types: ["Visual Studio Code plugin"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 59,
  },
  {
    name: "Axe Linter GitHub",
    url: "https://github.com/marketplace/axe-linter",
    types: ["GitHub extension"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 60,
  },
  {
    name: "Pa11y CI",
    url: "https://pa11y.org/",
    types: ["CI tool"],
    tags: ["testing"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc564"), // LGPLv3 License
    source_code: "https://github.com/pa11y/pa11y-ci",
    index: 61,
  },
  {
    name: "HTML Code Analyzer",
    url: "https://rules.sonarsource.com/html/tag/accessibility/",
    types: ["Code Quality tool", "SonarQube add-on"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 62,
  },
  {
    name: "Chrome DevTools - Device Toolbar",
    url: "https://developer.chrome.com/docs/devtools/device-mode/#viewport",
    types: ["Browser feature", "Chrome"],
    tags: ["mobile view"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "https://github.com/googlechrome",
    index: 63,
  },
  {
    name: "mobiReady",
    url: "https://ready.mobi/",
    types: ["Web service"],
    tags: ["performance"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 64,
  },
  {
    name: "Responsinator",
    url: "https://www.responsinator.com/",
    types: ["Web service"],
    tags: ["mobile view"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 65,
  },
  {
    name: "PageSpeed Insights",
    url: "https://developers.google.com/speed/pagespeed/insights/?hl=it",
    types: ["Web service", "API"],
    tags: ["performance"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc568"), // Various (Apache License v2.0)
    source_code: "",
    index: 66,
  },
  {
    name: "GTmetrix",
    url: "https://gtmetrix.com/",
    types: ["Web service"],
    tags: ["performance"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 67,
  },
]);

print("Esecuzione dello script per la collezione toolclasses...");

// Elimina tutti i documenti esistenti nella collezione
db.toolclasses.deleteMany({});

db.toolclasses.insertMany([
  { name: "Web service", slug: "web-service" },
  { name: "Software", slug: "software" },
  { name: "API", slug: "api" },
  { name: "Browser plugin", slug: "browser-plugin" },
  { name: "Mobile app", slug: "mobile-app" },
  { name: "Desktop app", slug: "desktop-app" },
  { name: "Chrome extension", slug: "chrome-extension" },
  { name: "Firefox extension", slug: "firefox-extension" },
  { name: "Windows only", slug: "windows-only" },
  { name: "MacOS only", slug: "macos-only" },
  { name: "Linux only", slug: "linux-only" },
  {
    name: "Multiplatform (Windows, Mac, Linux)",
    slug: "multiplatform-windows-mac-linux",
  },
]);

print("Esecuzione dello script per la collezione myths...");

// Elimina tutti i documenti esistenti nella collezione
db.myths.deleteMany({});

db.myths.insertMany([
  {
    index: 0,
    title: "I siti accessibili sono brutti",
    description:
      "Un sito web accessibile non è obbligatoriamente brutto perché l'accessibilità si concentra sulla facilità di utilizzo per tutte le persone, comprese quelle con disabilità. Un sito web ben progettato e accessibile può essere esteticamente gradevole e funzionale allo stesso tempo, offrendo una migliore esperienza utente per tutti.",
  },
  {
    index: 1,
    title: "Il mio sito non verrà mai visitato da...",
    description:
      "Milioni di persone con disabilità utilizzano Internet in tutto il mondo. Questo numero varia a seconda della regione e del tipo di disabilità, ma le tecnologie accessibili e gli strumenti di assistenza hanno reso Internet un mezzo fondamentale per la comunicazione, l'informazione e l'inclusione sociale per molte persone con disabilità.",
  },
  {
    index: 2,
    title: "Basta aggiungere gli alt alle immagini",
    description:
      "Fornire solo alternative testuali alle immagini è un passo importante per rendere un sito web più accessibile, ma non è sufficiente per renderlo pienamente accessibile per tutti.",
  },
  {
    index: 3,
    title: "Alle aziende non interessa l'accessibilità",
    description:
      "Non è vero che alle aziende non interessa l'accessibilità dei servizi e dei prodotti digitali perché l'accessibilità può portare a una più ampia base di clienti, evitare rischi legali, migliorare la reputazione aziendale, dimostrare impegno verso la diversità e l'inclusione, e promuovere l'innovazione e l'efficienza interna.",
  },
  {
    index: 4,
    title: "Un sito dinamico non può essere accessibile",
    description:
      "Un sito dinamico, che prevede frequenti interazioni da parte dell'utente, può essere totalmente accessibile se progettato tenendo conto delle esigenze di tutte le persone, comprese quelle con disabilità. Ciò implica la progettazione di un'interfaccia intuitiva, la possibilità di navigare e interagire con il sito tramite tastiera o altri dispositivi, la piena compatibilità con screen reader e altre tecnologie assistive, garantendo così che tutti gli utenti possano partecipare in modo completo ed efficace senza barriere.",
  },
  {
    index: 5,
    title: "Basta utilizzare colori ad alto contrasto",
    description:
      "Per rendere un sito accessibile non basta utilizzare colori ad alto contrasto perché l'accessibilità coinvolge molteplici aspetti, come la navigazione con la tastiera, il testo alternativo per le immagini, la struttura logica del contenuto, la sua chiarezza e molto altro. Tutti questi aspetti devono essere considerati per soddisfare le esigenze di utenti con disabilità di diverse tipologie e per migliorare l'esperienza utente di tutti.",
  },
  {
    index: 6,
    title: "L'accessibilità riguarda solo persone con difetti alla vista",
    description:
      "L'accessibilità dei siti web è rivolta a tutte le persone, incluse quelle con disabilità visive, uditive, motorie o cognitive. L'obiettivo è garantire che tutti gli utenti, indipendentemente dalle loro capacità, possano accedere, navigare e interagire in modo efficace con il contenuto e le funzionalità dei siti web, promuovendo l'inclusione digitale e l'uguaglianza di accesso alle informazioni per tutti.",
  },
]);

const countTools = db.tools.countDocuments();
print("Numero totale di tools inseriti: " + countTools);

countTools = db.toolclasses.countDocuments();
print("Numero totale di toolclasses inseriti: " + countTools);

countTools = db.myths.countDocuments();
print("Numero totale di myths inseriti: " + countTools);
