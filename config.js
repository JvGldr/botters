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
var respecConfig = 
{
  addSectionLinks: false,         // verwijdert de paragraaftekens
  subtitle:       "Ons Varend Erfgoed",
  format:         "markdown",  
  github:         "https://github.com/JvGldr/botters",
  issueBase:      "https://github.com/JvGldr/Rapport/issues",
  edDraftURI:     "https://github.com/JvGldr/botters",
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
  licence:        "cc-by-nd",
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
  //height: 100,    // wordt overschreven in css
  //width: 300,     // wordt overschreven in css
    url:            "https://www.botterselburg.nl/",
  }],
  postProcess:[respecPost],
};

//-------------------------------------------------------------------------------------
var serverConfig =
{
  urlTools:         "https://tools.geostandaarden.nl/",
  dirBanners:       "respec/style/logos/",  
}

