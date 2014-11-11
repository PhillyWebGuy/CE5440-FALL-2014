var theObject = { 
    "colors" : [{
            "hover": "cornflowerblue",
            "background": "deepskyblue",
            "text": "dodgerblue"
        },{   
            "hover": "seagreen",
            "background": "springgreen",
            "text": "lawngreen"
        }],
        
    "links" : [{
            "name" : "mondayCat",
            "url" : "https://i.chzbgr.com/maxW500/8374152704/hE564CD42/" 
        },{
            "name" : "donutCat", 
            "url" : "https://i.chzbgr.com/maxW500/8373768960/hF85A3E62/"
        },{
            "name": "kittenCat",
            "url": "https://i.chzbgr.com/maxW500/8374465280/hAF5EFCBB/"
        },{
            "name": "angryCat", 
            "url" : "https://i.chzbgr.com/maxW500/8373826048/h605EC019/"
        },{
            "name" : "chickenCat", 
            "url": "https://i.chzbgr.com/maxW500/8373570560/hEC788157/"
        }]
}

console.dir(theObject);
document.write(JSON.stringify(theObject));