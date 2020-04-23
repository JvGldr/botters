//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-- Log . . . :  20191022 - GRK - Handreiking Archiveren ruimtelijke plannen v2.0      
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
//-- Document Specifiek
//-------------------------------------------------------------------------------------
var respecConfig = 
{
  addSectionLinks: false,                                     // verwijdert de paragraaftekens
  subtitle:       "Ons Varend Erfgoed",
  format:         "markdown",                                   
  github:         "https://github.com/JvGldr/botters",
  issueBase:      "https://github.com/JvGldr/Rapport/issues",
  edDraftURI:     "https://github.com/JvGldr/botters",
  licence:        "cc-by-nd",

  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "WV",                 // Werk Versie
  //specStatus: "CV",               // Consultatie Versie
  //specStatus: "VV",               // Vaststellings Versie
  //specStatus: "DF",               // Definitece (Vastgestelde) Versie

  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                   // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijk Richtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "US",                   // Uitwisselings standaard
  //specType: "PS",                   // Presentatie sstandaard

  //publishDate: "2020-02-25",  	    // Format is "YYYY-MM-DD"
  shortName: "vlt", 	              // Wordt gebruikt in de document URL
  pubDomain: "opl", 	                // Metamodel Informatie Modellering
  //pubDomain: "bor", 	              // Beheer Openbare Ruimte
  //pubDomain: "bro", 	              // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	            // IMGeo / BGT
  //pubDomain: "kl", 	                // Kabels en Leidingen
  //pubDomain: "liv", 	              // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	                // Metadata
  //pubDomain: "nen3610", 	          // Basismodel NEN3610
  //pubDomain: "oov", 	              // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	                // Ruimtelijke Ordening
  //pubDomain: "serv", 	              // Services
  //pubDomain: "visu", 	              // Visualisatie
  //pubDomain: "wp", 	                // White Paper
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit!
  previousPublishDate: "2020-01-01",    	    // Format is "YYY-MM-DD"
  previousMaturity: "DF",                 // kies 1 van deze 3 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  maxTocLevel: 4,                             // Aantal niveau's ToC, default is 0

  editors: 
  [
    {
      name:       "Jan van Gelder",
      company:    "Botterstichting Elburg",
      companyURL: "https://www.botterselburg.nl",
    }, 
  ],

  authors: 
  [
    {
      name:       "Werkgroep Communicatie",
      company:    "Botterstichting Elburg",
      companyURL: "https://www.botterselburg.nl",
    }, 
  ],
  localBiblio: 
  {
    "PUB-1":
      {
        title:      "Titel van Publicatie-1",
        href:       "https://www.link-naar-publicatie-1.nl",
        status:     "V1.0.1",
        publisher:  "Publisher-1",
        company:    "Companynaam",
    },
    "PUB-2":
      {
        title:      "Titel van Publicatie-2",
        href:       "https://www.link-naar-publicatie-2.nl",
        status:     "V1.0.1",
        publisher:  "Publisher-2",
        company:    "Companynaam",
    },
    "PUB-3":
      {
        title:      "Titel van Publicatie-3",
        href:       "https://www.link-naar-publicatie-3.nl",
        status:     "V1.0.1",
        publisher:  "Publisher-3",
        company:    "Companynaam",
    },
    "PUB-4":
      {
        title:      "Titel van Publicatie-4",
        href:       "https://www.link-naar-publicatie-4.nl",
        status:     "V1.0.1",
        publisher:  "Publisher-4",
        company:    "Companynaam",
    },
  },
  logos: [{
    src:            "https://www.botterselburg.nl/images/botterstichting_logo.jpg",
    alt:            "Botterstichting Elburg",
    id:             "TopLogo",
    url:            "https://www.botterselburg.nl/",
  }],
  postProcess:[respecPost],
};

//-------------------------------------------------------------------------------------
//-- Organisatie Specifieke Parameters
//-------------------------------------------------------------------------------------
var orgConfig =
{
  orgName:          "Botterstichting Elburg",
  urlTls:           "https://tools.geostandaarden.nl/",
  dirBanners:       "respec/style/logos/",
  urlPub:           "https://www.botterselburg.nl/vrijwilligers/",

}

