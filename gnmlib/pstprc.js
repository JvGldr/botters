//-------------------------------------------------------------------------------------
//-- File. . . :  pstprc.js
//-- Bevat . . :  js file die postprocessor fucnties bevat  
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//-- Globale variabelen ---------------------------------------------------------------
var maanden = ["januari","februari","maart","april","mei","juni","juli",
               "augustus","september","oktober","november","december"];


//-------------------------------------------------------------------------------------
//-- Hoofdroutine respecPost 
//-- Aangeroepen via respecConfig.postProcess:[respecPost]
//-------------------------------------------------------------------------------------

function respecPost(respecConfig)  
{
  console.log("Start PostProcessor");

  changeDocTitle();
  changeURLs();
  changeSOTD();
  changeCopyRight();
  removeGhPages();
  changePV();

  console.log("Einde PostProcessor");
}




//-------------------------------------------------------------------------------------
//-- vervang de tekst 'W3S' door respecParams.organisation in het betreffende <h2> element 
//-------------------------------------------------------------------------------------
function changeDocTitle()
{
  console.log("\tStart changeDocTitle");
  var i,p;
  var srch = "W3C";
  //-- respecConfig.publishDate bevat datum van vandaag als niet is opgegeven in cfgfile
  var tdate = new Date(respecConfig.publishDate);
  pdate = formatDate(tdate, '-');

  document.body.style.backgroundImage = "url('./media/" + respecParams.abbreviation + "-" + respecConfig.specStatus + ".svg')"; 
  console.log(document.body.style.backgroundImage);

  //-- extra datumvaribelen voor op titelblad
  var mmm   = maanden[tdate.getMonth()];
  var yy    = tdate.getFullYear();
  var dd    = ("0" + tdate.getDate());

  var tags = document.getElementsByTagName("h2");
  for (i = 0; i < tags.length; i++) 
  {
    p = tags[i].innerHTML.indexOf(srch);
    if(p > -1)
    {
      console.log("\t\tinnerHTML [" + srch + "] is gevonden");
      //console.log("\t\tinnerHTML is [" + tags[i].innerHTML + "]");
      tags[i].innerHTML =  respecParams.organisation + " " + longSpecType() + "<br>" + longSpecStat() + " ";
      tags[i].innerHTML += '<time class="dt-published" datetime="' + pdate + '">' + dd.slice(-2) + " " + mmm + " " + yy + '</time>';
      console.log("\t\tinnerHTML [" + tags[i].innerHTML + "] is aangepast");
      break;
    }
  }

  console.log("\tEinde changeDocTitle");
}


//-------------------------------------------------------------------------------------
//-- vervang de standaard W3C URL's in de betreffende <a> element 
//-------------------------------------------------------------------------------------
function changeURLs()
{
  console.log("\tStart changeURLs");

  let odate = new Date();   //-- default previous publicatie datum is vandaag
  let sstat = "";
  let pstat = "";

  tdate = new Date(respecConfig.publishDate);
  pdate = formatDate( tdate, "" );

  if(respecConfig.previousPublishDate != null)
  {
    tdate = new Date(respecConfig.previousPublishDate); 
    odate = formatDate( tdate, "" );
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
          tags[i].innerHTML = respecParams.urlPub + sstat + "-" + respecConfig.pubDomain + "-" + respecConfig.shortName + "-" + pdate;
          break;
        case 1:   //-- Laatst gepubliceerde versie
          tags[i].innerHTML = respecParams.urlPub + respecConfig.shortName;
          break;
        case 2:   //-- Vorige versie
          if(odate == "19000101")   //-- Vorige versie is er niet
          {
            tags[i].innerHTML = "";
          }
          else
          {
            tags[i].innerHTML = respecParams.urlPub + pstat + "-" + respecConfig.pubDomain + "-" + respecConfig.shortName + "-"  + odate;
          }
          break;
      }
      tags[i].href = tags[i].innerHTML;
      console.log("\t\tinnerHTML [" + respecParams.urlPub + "] is aangepast en href ook");

      t++;
      if(t > 2) break;
    }
  }

  console.log("\tEinde changeURLs");
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
            image =  respecParams.urlTools + respecParams.dirBanners + "CC-Licentie.svg";
            break;

          case "cc-by":
            name  = "Creative Commons Attribution 4.0 International Public License";
            short = "CC-BY";
            url   = "https://creativecommons.org/licenses/by/4.0/legalcode";
            image =  respecParams.urlTools + respecParams.dirBanners + "cc-by.svg";
            break;

          case "cc-by-nd":
            name  = "Creative Commons Attribution-NoDerivatives 4.0 International Public License";
            short = "CC-BY-ND";
            url   = "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl";
            image =  respecParams.urlTools + respecParams.dirBanners + "cc-by-nd.svg";
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
//-- vervang de tekst 'Previous Version' door 'Vorige Versie' in het betreffende <tb> element
//-- Wordt (nog) niet automatisch vertaald in W3C versie 
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
//-- vervang of verwijder het <section> element met id = 'sotd'
//-------------------------------------------------------------------------------------
function changeSOTD()
{
  console.log("\tStart changeSOTD");

  let sstat = "";
  if(respecConfig.specStatus != null) sstat = respecConfig.specStatus;

  var srch = "sotd";
  var tag = document.getElementById(srch);
  console.log("\t\tsection is [" + tag.innerHTML + "] is gevonden");

  if(respecParams.noSOTD || sstat == "")   //-- SOTD helemaal weghalen
  {
    tag.parentNode.removeChild(tag);
    console.log("\t\tsection is [" + srch + "] is verwijderd");
  }
  else                                  //-- SOTD Aanpassen
  {

    tag.innerHTML = "<h2>Status van dit document</h2>";
    tag.innerHTML += "<p>";
    
    switch(respecConfig.specStatus)
    {
      case "WV":
        tag.innerHTML +=  "Dit is de werk versie van het document '" + document.title + "'. " + 
                          "Wijzigingen naar aanleiding van consultaties zijn doorgevoerd."; 
        break;
      case "CV":
        tag.innerHTML +=  "Dit is een door de werkgroep goedgekeurde consultatieversie van het document '" + document.title + "'. " + 
                          "Commentaar over dit document kan gestuurd worden naar <a href='" + respecConfig.emailComments + "'></a>" + ".";
        break;
      case "VV":
        tag.innerHTML +=  "Dit is een definitief concept van de nieuwe versie van het document '" + document.title + "'. " + 
                          "Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.";
        break;
      case "DF":
        tag.innerHTML +=  "Dit is de definitieve versie van het document '" + document.title + "'. " + 
                          "Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.";
          break;
    }

    if(respecConfig.specType == "ST" && respecConfig.specStatus == "DF")
    {
      tag.innerHTML += respecParams.committee + " heeft deze standaard goedgekeurd.";
    }

    if(respecConfig.specType == "ST" && respecConfig.specStatus == "VV")
    {
      tag.innerHTML +=  respecParams.committee + " beoordeelt dit definitief concept." +
                        "Keurt zij het goed, dan is er een nieuwe standaard.";
    }

    if(respecConfig.specType == "PR" )
    {
      tag.innerHTML += "Dit is de definitieve versie van de praktijkrichtlijn. " + 
                       "Een praktijkrichtlijn is een product dat informatie geeft, " +
                       "vaak met een technisch karakter, dat nodig is voor het toepassen van een standaard. " +
                       "Een praktijkrichtlijn hoort altijd bij een standaard/norm.";
    }
    //Dit is een document zonder officiële status.

    tag.innerHTML += "<p>";
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


//-------------------------------------------------------------------------------------
//-- vertaal de specStatus naar een volledige tekst 
//-------------------------------------------------------------------------------------
function longSpecStat( )
{
  var sstat = "Onbekend";

  if(respecConfig.specStatus != null)      
  {
    var sstat = respecParams.validSpecStats[respecConfig.specStatus].txt;
  }
  console.log("\t\tlongSpecStat is [" + sstat + "]");
  return( sstat );
}

//-------------------------------------------------------------------------------------
//-- vertaal het specType naar een volledige tekst 
//-------------------------------------------------------------------------------------
function longSpecType( )
{
  var stype = "Onbekend";

  if(respecConfig.specType != null)      
  {
    var stype = respecParams.validSpecTypes[respecConfig.specType].txt;
  }
  console.log("\t\tLong SpecType is [" + stype + "]");
  return( stype );
}

//-------------------------------------------------------------------------------------
//-- Retourneer geformatteerde datum
//-- In: dt = DateType variable
//--     dl = Delimiter
//-- Rt: string met geformatteerde datum
//-------------------------------------------------------------------------------------
function formatDate(dt, dl)
{
  var dd = ("0" + dt.getDate());
  var mm = ("0" + (dt.getMonth() + 1));
  var yy = dt.getFullYear();

  var fdate = yy + dl + mm.slice(-2) + dl + dd.slice(-2);
  //console.log("\t\tdd is [" + dd + "] mm is [" + mm + "] yy = [" + yy + "] dl = [" + dl + "] -> fdate is [" + fdate + "]");
  return(fdate);
}  
