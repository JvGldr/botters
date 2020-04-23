//-------------------------------------------------------------------------------------
//-- File. . . :  pstprc.js
//-- Bevat . . :  js file die postprocessor fucnties bevat  
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function respecPost(respecConfig)  
{
  console.log("Start PostProcessor");
  changeOrgName();
  removeGhPages();
  removeSOTD();
  changeCopyRight();
  console.log("Einde PostProcessor");
}






//-------------------------------------------------------------------------------------
//-- verwijder of vervang het <p> element met classname = 'copyright' 
//-------------------------------------------------------------------------------------
function changeCopyRight()
{
  console.log("Start changeCopyRight");
  var i;

  var name  = "";
  var short = "";
  var url   = "";
  var image = "";

  console.log("Opgegeven licence in config is [" + respecConfig.licence + "]");
  if( respecConfig.licence != null)
  {
    var srch = "copyright";
    var tags = document.getElementsByTagName("p");
    for (i = 0; i < tags.length; i++) 
    {
      if(tags[i].className = srch)
      {
        console.log("className [" + srch + "] is gevonden");
        //-- Bepaal welke licentie het moet worden
        switch(respecConfig.licence) 
        {
          case "cc0":
            name  = "Creative Commons 0 Public Domain Dedication";
            short = "CC0";
            url   = "https://creativecommons.org/publicdomain/zero/1.0/";
            // image = "https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg";
            image =  serverConfig.urlTools + serverConfig.dirBanners + "CC-Licentie.svg";
            break;

          case "cc-by":
            name  = "Creative Commons Attribution 4.0 International Public License";
            short = "CC-BY";
            url   = "https://creativecommons.org/licenses/by/4.0/legalcode";
            // image = "https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg";
            image =  serverConfig.urlTools + serverConfig.dirBanners + "cc-by.svg";
            break;

          case "cc-by-nd":
            name  = "Creative Commons Attribution-NoDerivatives 4.0 International Public License";
            short = "CC-BY-ND";
            url   = "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl";
            // image = "https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg";
            image =  serverConfig.urlTools + serverConfig.dirBanners + "cc-by-nd.svg";
            break;

          case "none":
            short = "";
            tags[i].parentNode.removeChild(tags[i]);
            console.log("Class [" + srch + "] is verwijderd");
            break;

          default:
            short = "ERROR";
            name  = "Copyright error, check config.js : license: " + respecConfig.licence;
            break;
          }

        //-- pas innerHTML aan
        if(short != "")
        {
          tags[i].innerHTML = 
          '<dl>' + 
          '<dt>Rechtenbeleid:</dt>' + 
            '<dd>' +
              '<div class="copyright" style="margin: 0.25em 0;">' +
                '<abbr title="' + name +'">' +
                  '<a href="' + url + '">' +
                    '<img src="' + image + '" alt="' + name + '" width="115" height="40">' +
                  '</a>' +
                '</abbr>' +
                '<div style="display:inline-block; vertical-align:top">' +
                  '<p style="font-size: small;">' + name + '<br>(' + short +')</p>' +
                '</div>' +
              '</div>' +
            '</dd>' +
          '</dl>';
          console.log("className [" + srch + "] is aangepast naar [" + short + "]");
        } 
        break;
      }
    }
  }        
  else
  {
    console.log("className [" + srch + "] is NIET aangepast");
  }

  console.log("Einde changeCopyRight");
}

//-------------------------------------------------------------------------------------
//-- vervang de tekst 'W3S' door 'BSE' in het betreffende <h2> element 
//-------------------------------------------------------------------------------------
function changeOrgName()
{
  console.log("Start changeOrgName");

  var i,p;
  var srch = "W3C";
  var tags = document.getElementsByTagName("h2");
  for (i = 0; i < tags.length; i++) 
  {
    p = tags[i].innerHTML.indexOf(srch);
    if(p > -1)
    {
      console.log("innerHTML [" + tags[i].innerHTML + "] is gevonden");
      tags[i].innerHTML = "BSE" + tags[i].innerHTML.substring(p + srch.length);
      console.log("innerHTML [" + tags[i].innerHTML + "] is aangepast");
      break;
    }
  }

  console.log("Einde changeOrgName");
}


//-------------------------------------------------------------------------------------
//-- verwijder de tekst 'gh-pages' in de betreffende <a> tag 
//-------------------------------------------------------------------------------------
function removeGhPages()
{
  console.log("Start removeGhPages");

  var i;
  var srch = "gh-pages";
  var tags = document.getElementsByTagName("a");
  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log("href ["+ tags[i].href + "] is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - srch.length);
      console.log("href ["+ tags[i].href + "] is aangepast");
      break;
    }
  } 

  console.log("Einde removeGhPages");
}

//-------------------------------------------------------------------------------------
//-- verwijder het <section> element met id = 'sotd'
//-------------------------------------------------------------------------------------
function removeSOTD()
{
  console.log("Start removeSOTD");

  var srch = "sotd";
  var tag = document.getElementById(srch);
  console.log("section is [" + srch + "] is gevonden");
  tag.parentNode.removeChild(tag);
  console.log("section is [" + srch + "] is verwijderd");

  console.log("Einde removeSOTD");
}
