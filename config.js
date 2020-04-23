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
//-- Postprocessor voor ResPec

//-- JvG 2019-11-12
function respecPost(respecConfig)  
{
  var i;
  var p;

  //-- vervang de tekst 'W3S' door 'BSE' in het betreffende <h2> element 
  var srch = "W3C";
  var tags = document.getElementsByTagName("h2");
  for (i = 0; i < tags.length; i++) 
  {
    p = tags[i].innerHTML.indexOf(srch);
    if(p > -1)
    {
      console.log("Tekst [" + tags[i].innerHTML + "] is gevonden");
      tags[i].innerHTML = "BSE" + tags[i].innerHTML.substring(p + srch.length);
      console.log("Tekst [" + tags[i].innerHTML + "] is aangepast");
      break;
    }
  }

  //-- verwijder de tekst 'gh-pages' in de betreffende <a> tag 
  var srch = "gh-pages";
  var tags = document.getElementsByTagName("a");
  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log("Tekst ["+ tags[i].href + "] is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - srch.length);
      console.log("Tekst ["+ tags[i].href + "] is aangepast");
      break;
    }
  } 

  //-- verwijder het <p> elemment met classname = 'copyright' 
  var srch = "copyright";
  var tags = document.getElementsByTagName("p");
  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].className = srch)
    {
      console.log("Class [" + srch + "] is gevonden");
      tags[i].parentNode.removeChild(tags[i]);
      console.log("Class [" + srch + "] is verwijderd");
      break;
    }
  }

  //-- verwijder het <section> element met id = 'sotd'
  var srch = "sotd";
  var tag = document.getElementById(srch);
  console.log("Section is [" + srch + "] is gevonden");
  tag.parentNode.removeChild(tag);
  console.log("Section is [" + srch + "] is verwijderd");
}

//-------------------------------------------------------------------------------------
var respecConfig = 
{
  addSectionLinks: false,         // verwijdert de paragraaftekens
  subtitle: "Ons Varend Erfgoed",
  format: "markdown",  
  github: "https://github.com/JvGldr/botters",
  issueBase: "https://github.com/JvGldr/Rapport/issues",
  edDraftURI: "https://github.com/JvGldr/botters",
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
  licence: "cc-by",
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
    src: "https://www.botterselburg.nl/images/botterstichting_logo.jpg",
    alt: "Botterstichting Elburg",
    id: "TopLogo",
    //height: 100,    // wordt overschreven in css
    //width: 300,     // wordt overschreven in css
    url: "https://www.botterselburg.nl/",
  }],
  postProcess:[respecPost],
};