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
  changeURLs();
  changeSOTD();
  changeCopyRight();
  removeGhPages();
  changePV();

  console.log("Einde PostProcessor");
}

//-------------------------------------------------------------------------------------
//-- verwijder of vervang het <p> element met classname = 'copyright' 
//-------------------------------------------------------------------------------------
function changeCopyRight()
{
  console.log("\tStart changeCopyRight");
  var i;

  var name  = "";
  var short = "";
  var url   = "";
  var image = "";

  console.log("\t\tOpgegeven licence in config is [" + respecConfig.licence + "]");
  if( respecConfig.licence != null)
  {
    var srch = "copyright";
    var tags = document.getElementsByTagName("p");
    for (i = 0; i < tags.length; i++) 
    {
      if(tags[i].className = srch)
      {
        console.log("\t\tclassName [" + srch + "] is gevonden");
        //-- Bepaal welke licentie het moet worden
        switch(respecConfig.licence) 
        {
          case "cc0":
            name  = "Creative Commons 0 Public Domain Dedication";
            short = "CC0";
            url   = "https://creativecommons.org/publicdomain/zero/1.0/";
            image =  orgConfig.urlTls + orgConfig.dirBanners + "CC-Licentie.svg";
            break;

          case "cc-by":
            name  = "Creative Commons Attribution 4.0 International Public License";
            short = "CC-BY";
            url   = "https://creativecommons.org/licenses/by/4.0/legalcode";
            image =  orgConfig.urlTls + orgConfig.dirBanners + "cc-by.svg";
            break;

          case "cc-by-nd":
            name  = "Creative Commons Attribution-NoDerivatives 4.0 International Public License";
            short = "CC-BY-ND";
            url   = "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl";
            image =  orgConfig.urlTls + orgConfig.dirBanners + "cc-by-nd.svg";
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
          console.log("\t\tclassName [" + srch + "] is aangepast naar [" + short + "]");
        } 
        break;
      }
    }
  }        
  else
  {
    console.log("\tclassName [" + srch + "] is NIET aangepast");
  }

  console.log("\tEinde changeCopyRight");
}

//-------------------------------------------------------------------------------------
//-- vervang de tekst 'W3S' door 'BSE' in het betreffende <h2> element 
//-------------------------------------------------------------------------------------
function changeOrgName()
{
  console.log("\tStart changeOrgName");

  var i,p;
  var srch = "W3C";
  var tags = document.getElementsByTagName("h2");
  for (i = 0; i < tags.length; i++) 
  {
    p = tags[i].innerHTML.indexOf(srch);
    if(p > -1)
    {
      console.log("\t\tinnerHTML [" + srch + "] is gevonden");
      tags[i].innerHTML = orgConfig.orgName + tags[i].innerHTML.substring(p + srch.length);
      console.log("\t\tinnerHTML [" + orgConfig.orgName + "] is aangepast");
      break;
    }
  }

  console.log("\tEinde changeOrgName");
}


//-------------------------------------------------------------------------------------
//-- vervang de tekst 'Previous Version' door 'Vorige Versie' in het betreffende <tb> element 
//-------------------------------------------------------------------------------------
function changePV()
{
  console.log("\tStart changePV");

  var i,p;
  var srch = "Previous";
  var tags = document.getElementsByTagName("dt");
  for (i = 0; i < tags.length; i++) 
  {
    p = tags[i].innerHTML.indexOf(srch);
    if(p > -1)
    {
      console.log("\t\tinnerHTML [" + srch + "] is gevonden");
      tags[i].innerHTML = "Vorige Versie:";
      console.log("\t\tinnerHTML [" + srch + "] is aangepast");
      break;
    }
  }

  console.log("\tEinde changePV");
}


//-------------------------------------------------------------------------------------
//-- vervang de standaard W3C URL's in de betreffende <a> element 
//-------------------------------------------------------------------------------------
function changeURLs()
{
  console.log("\tStart changeURLs");
  var mm,dd;

  let odate = new Date();   //-- default previous publicatie datum is vandaag
  let tdate = new Date();   //-- default publicatie datum is vandaag

  let sstat = "";
  let pstat = "";

  mm = ("0"+ tdate.getMonth() + 1);
  dd = ("0"+ tdate.getDate());
  pdate = tdate.getFullYear() + "" + mm.slice(-2) + "" + dd.slice(-2);

  if(respecConfig.publishDate != null)      
  {
    tdate = new Date(respecConfig.publishDate);
    mm = ("0"+ tdate.getMonth() + 1);
    dd = ("0"+ tdate.getDate());
    pdate = tdate.getFullYear() + "" + mm.slice(-2) + "" + dd.slice(-2);
  }
  if(respecConfig.previousPublishDate != null)
  {
    tdate = new Date(respecConfig.previousPublishDate); 
    mm = ("0"+ tdate.getMonth() + 1);
    dd = ("0"+ tdate.getDate());
    odate = tdate.getFullYear() + "" + mm.slice(-2) + "" + dd.slice(-2);
  }

  if(respecConfig.specStatus != null)        sstat = respecConfig.specStatus.toLowerCase();
  if(respecConfig.previousMaturity != null)  pstat = respecConfig.previousMaturity.toLowerCase();
  
  console.log("\t\todate is ["+odate+"]");
  console.log("\t\tpdate is ["+pdate+"]");

  var i,p,t=0;
  var srch = "www.w3.org";
  var tags = document.getElementsByTagName("a");
  for (i = 0; i < tags.length; i++) 
  {
    p = tags[i].innerHTML.indexOf(srch);
    if(p > -1)
    {
      console.log("\t\tinnerHTML [" + srch + "] is gevonden");
      switch(t)
      {
        case 0:   //-- deze versie
          tags[i].innerHTML = orgConfig.urlPub + sstat + "-" + respecConfig.pubDomain + "-" + respecConfig.shortName + "-" + pdate;
          break;
        case 1:   //-- Laatst gepubliceerde versie
          tags[i].innerHTML = orgConfig.urlPub + respecConfig.shortName;
          break;
        case 2:   //-- Vorige versie
          if(odate == "19000101")
          {
            tags[i].innerHTML = "";
          }
          else
          {
            tags[i].innerHTML = orgConfig.urlPub + pstat + "-" + respecConfig.pubDomain + "-" + respecConfig.shortName + "-"  + odate;
          }
          break;
      }
      tags[i].href = tags[i].innerHTML;
      console.log("\t\tinnerHTML [" + orgConfig.urlPub + "] is aangepast en href ook");

      t++;
      if(t > 2) break;
    }
  }

  console.log("\tEinde changeOrgName");
}

//-------------------------------------------------------------------------------------
//-- vervang of verwijder het <section> element met id = 'sotd'
//-------------------------------------------------------------------------------------
function changeSOTD()
{
  console.log("\tStart changeSOTD");

  let sstat = "";
  if(respecConfig.specStatus != null) sstat = respecConfig.specStatus;

  var srch = "sotd";
  var tag = document.getElementById(srch);
  console.log("\t\tsection is [" + srch + "] is gevonden");

  if(orgConfig.noSOTD || sstat == "")
  {
    tag.parentNode.removeChild(tag);
    console.log("\t\tsection is [" + srch + "] is verwijderd");
  }
  
  console.log("\tEinde changeSOTD");
}

//-------------------------------------------------------------------------------------
//-- verwijder de tekst 'gh-pages' in de betreffende <a> tag 
//-------------------------------------------------------------------------------------
function removeGhPages()
{
  console.log("\tStart removeGhPages");

  var i;
  var srch = "gh-pages";
  var tags = document.getElementsByTagName("a");
  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log("\t\thref ["+ tags[i].href + "] is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - srch.length);
      console.log("\t\thref ["+ tags[i].href + "] is aangepast");
      break;
    }
  } 

  console.log("\tEinde removeGhPages");
}



