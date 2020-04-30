//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//--              In index.html wordt de file ge-include in de headersectie 
//-- Door. . . :  Jan van Gelder
//-- Datum . . :  Mei 2020
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
  subtitle:       "Ons Varend Erfgoed",
  format:         "markdown",                                   
  github:         "https://github.com/JvGldr/botters",
  issueBase:      "https://github.com/JvGldr/Rapport/issues",
  edDraftURI:     "https://github.com/JvGldr/botters",
  licence:        "cc-by-nd",
  addSectionLinks: false,                 // verwijdert de paragraaftekens
  maxTocLevel: 3,                         // (Optioneel) Aantal niveau's ToC, default 0
  //
  //-- specStatus is verplicht! (zie voor geldige statussen orgConfg.validSpecStats) --
  specStatus: "WV",                       // (verplicht) Werk Versie 
  previousMaturity: "WV",                 // (verplicht) De vorige specStatus
  //
  //-- Publicatie datums --------------------------------------------------------------
  //publishDate: "2020-01-30",  	        // Format is "YYYY-MM-DD" (default = vandaag)
  previousPublishDate: "1900-01-01",      // Format is "YYYY-MM-DD" ("1900-01-01" als die er niet was)
  //
  //-- specType (zie voor geldige types orgConfg.validSpecTypes) ----------------------
  specType: "NW",                         // (verplicht) specType
  //
  //-- shortName en pubDomain zijn vooralsnog vrij te kiezen --------------------------
  shortName: "vlt", 	                    // Wordt gebruikt in de document URL
  pubDomain: "opl", 	                    // Metamodel Informatie Modellering
  //
  //-- Optionele parameters:
  emailComments: "info@botterselburg.nl", // reactie mailadres, alleen bij CV!
  //
  //-- De editor(s) -------------------------------------------------------------------
  editors: 
  [
    {
      name:       "Jan van Gelder",
      company:    "Botterstichting Elburg",
      companyURL: "https://www.botterselburg.nl",
    }, 
  ],
  //
  //-- De auteur(s) -------------------------------------------------------------------
  authors: 
  [
    {
      name:       "Peter IJben",
      company:    "Botterstichting Elburg",
      companyURL: "https://www.botterselburg.nl",
    }, 
    {
      name:       "Werkgroep Communicatie",
      company:    "Botterstichting Elburg",
      companyURL: "https://www.botterselburg.nl",
    }, 
    {
      name:       "Werkgroep Museum",
      company:    "Botterstichting Elburg",
      companyURL: "https://www.botterselburg.nl",
    }, 
  ],
  //
  //-- De Local biblio voor nette verwijzigen naar bronnen ----------------------------
  localBiblio: 
  {
    "BSE":
      {
        title:      "Website Botters Elburg",
        href:       "https://www.botterselburg.nl",
        status:     "",
        publisher:  "",
        company:    "Stichting tot behoud van de Elburger Botters",
    },
    "RVEN":
      {
        title:      "Website Register Varend Erfgoed Nederland",
        href:       "https://https://rven.info/",
        status:     "",
        publisher:  "",
        company:    "Register Varend Erfgoed Nederland",
    },
    "VBN":
      {
        title:      "Website Vereniging Botterbehoud Nederland",
        href:       "https://www.botterbehoud.nl/",
        status:     "",
        publisher:  "",
        company:    "Vereniging Botterbehoud Nederland",
    },
    "WSP18":
      {
        title:      "Website Stichting Pluut EB18",
        href:       "http://pluuteb18.nl/",
        status:     "",
        publisher:  "",
        company:    "Stichting Pluut EB18",
    },
    "WSB18":
      {
        title:      "Website Botter EB18",
        href:       "https://www.bottereb18.nl/",
        status:     "",
        publisher:  "",
        company:    "Botter EB18",
    },
  },
  //-- Hier het aangepaste logo van je eigen organisatie ------------------------------
  logos: [{
    src:            "https://www.botterselburg.nl/images/botterstichting_logo.jpg",
    alt:            "Botterstichting Elburg",
    id:             "TopLogo",
    url:            "https://www.botterselburg.nl/",
  }],
  postProcess:[respecPost],       //-- Deze roept de postprocessor aan
};

//--===================================================================================
//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Organisatie specifieke Paramters voor respec  
//--              Deze file moet worden neergezet op een centrale plek.
//--              In index.html wordt de file ge-include in de headersectie 
//-- Door. . . :  Jan van Gelder
//-- Datum . . :  Mei 2020
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
var respecParams =
{
  organisation:     "Botterstichting Elburg",
  abbreviation:     "BSE",
  committee:        "Het Bestuur van de Botterstichting Elburg",
  urlTools:         "https://tools.geostandaarden.nl/",
  dirBanners:       "respec/style/logos/",
  urlPub:           "https://www.botterselburg.nl/vrijwilligers/documenten/",
  //noSOTD:           true,
  validSpecStats: 
  {
    "WV":
      {
        txt:        "Werkversie",
      },
    "CV":
      {
        txt:        "Consultatieversie",
      },
    "VV":
      {
        txt:        "Vaststellingsversie",
      },
    "DF":
      {
        txt:        "Definitieve versie",
      },
  },
  validSpecTypes: 
  {
    "NW":
      {
        txt:        "Naslagwerk",
      },
    "NO":
      {
        txt:        "Norm",
      },
    "ST":
      {
        txt:        "Standaard",
      },
    "IM":
      {
        txt:        "Informatiemodel",
      },
    "PR":
      {
        txt:        "Praktijkrichtlijn",
      },
    "HR":
      {
        txt:        "Handreiking",
      },
    "WA":
      {
        txt:        "Werkafspraak",
      },
    "US":
      {
        txt:        "Uitwisselingsstandaard",
      },
    "PS":
      {
        txt:        "Presentatiestandaard",
      },
    "BD":
      {
        txt:        "Beheerdocument",
      },
    "WP":
      {
        txt:        "Whitepaper",
      },
  },

  //pubDomain: "bor", 	                // Beheer Openbare Ruimte
  //pubDomain: "bro", 	                // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	              // IMGeo / BGT
  //pubDomain: "kl", 	                  // Kabels en Leidingen
  //pubDomain: "liv", 	                // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	                  // Metadata
  //pubDomain: "nen3610", 	            // Basismodel NEN3610
  //pubDomain: "oov", 	                // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	                  // Ruimtelijke Ordening
  //pubDomain: "serv", 	                // Services
  //pubDomain: "visu", 	                // Visualisatie
  //pubDomain: "wp", 	                  // White Paper
}
