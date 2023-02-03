var ftmonabi;
var userAccount;
// Retrieve selected option for display from local storage on page load
document.getElementById("display-list").value = localStorage.getItem("selectedOption");
document.getElementById("chosenno").value = localStorage.getItem("chosenNO");
document.getElementById("chosenid").value = localStorage.getItem("chosenID");
document.getElementById("oppoid").value = localStorage.getItem("oppoID");


//https://github.com/Web3Modal/web3modal/releases

/*
Instead, the library is distributed as an npm package and you can install it in your project by running the following command in your project directory:

Copy code
npm install web3modal
Then, you can import it in your javascript file

Copy code
import Web3Modal from 'web3modal';
You can also find the library source code and documentation on the GitHub repository: 

import Web3Modal from 'web3modal'; or
<script src="path/to/web3modal.min.js"></script>

const web3Modal = new Web3Modal({
  network: 'mainnet', // The Ethereum network you want to connect to  'fantom', // or 'https://rpc.fantom.network' rpcUrl 
  cacheProvider: true, // Caches the provider for faster connection
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // WalletConnect provider
    },
    metamask: {
      package: Web3Modal.Providers.MetaMask // MetaMask provider
    },
    trustwallet: {
      package: Web3Modal.Providers.TrustWallet // Trust Wallet provider
    },
    coinbase: {
      package: Web3Modal.Providers.Coinbase // Coinbase Wallet provider
    }
  }
});

await web3Modal.connect();

const web3 = new Web3(web3Modal.provider);
const accounts = await web3.eth.getAccounts();
console.log(accounts[0]);

*/


const getWeb3 = async () => {
  return new Promise(async (resolve, reject) => {
    //have an instance of web3.js.
    const web3 = new Web3(Web3.givenProvider) //web3() is from web3.js
    //i have included at header, the abi file. exported from SContract compiler.
    var mycontractaddress = '0x7B5FbD826a9a8910E137aB4502315f016AfEc90F';
    FTMON = new web3.eth.Contract(ftmonabi, mycontractaddress);
    //userAccount = web3.eth.accounts[0]; // declare an account
    //prompt user to connect metamask
    try {
       await window.ethereum.enable();
    } catch (error) {
        // Check if the error is a "User denied account authorization" error
        if (error.code === 4001) {
            // Open the MetaMask wallet app using deep linking
            window.location.href = 'ethereum:';
        } else {
            console.log(error);
        }
    }
    userAccount = await web3.eth.getAccounts();
    console.log(userAccount[0]);
    $("#walletaddr").text("").append(userAccount[0]);
    //try to catch a block
    try{
    resolve(web3) //if all is well, resolve all the promise with web3.js instance
    displayMonstreAll(userAccount[0]);
    $("#Report").append("<li>Ready.</li>");
    } catch (error) {
    reject(error); //otherwise reject it with error.
    
    }
    web3.eth.net.getId().then(function(chainid) {
      if (chainid != 4002) {
        $("#boxwarn").text("Warning! this is wrong RPC network!"+'\r\n'+"Your current chain ID:"+chainid+
        '\n'+"expected chainID: 4002" +'\n'+"RPC URL (suggest):https://rpc.ankr.com/fantom_testnet"+'\n'+
        "Network name & Symbol doesn't matter. It just for display purpose."+'\n'+
        "HOW? -> https://metaschool.so/articles/how-to-change-add-new-network-metamask-wallet/");
      } else{
        $("#boxwarn").text("");
      }
    });
    
    
  });
}


//getWeb3();

async function showWallet(){
    $("#walletaddr").text(userAccount[0]);
    console.log(userAccount[0]);
}

getWeb3().then(() => {
  showWallet();
});

// ------------ GEneral FunCtion ----------
function convertSeconds(sss) {
  let seconds = Math.abs(sss);
  let days = Math.floor(seconds / (3600*24));
  seconds  -= days*3600*24;
  let hrs   = Math.floor(seconds / 3600);
  seconds  -= hrs*3600;
  let mins = Math.floor(seconds / 60);
  seconds  -= mins*60;
  return {
    d: days,
    h: hrs,
    m: mins,
    s: seconds
  };
}
function formatTime(seconds) {
  let result = convertSeconds(seconds);
  let output = "";
  if (seconds < 0) {
    output += "-";
  }
  if (result.d > 0) {
    output += result.d + "d ";
  }
  if (result.h > 0) {
    output += result.h + "h ";
  }
  if (result.m > 0) {
    output += result.m + "m ";
  }
 
  if (output === "" || output === "-") {
    output = "-";
  }
  return output;
}
const speciesList = {
    0: "Biped Egg", 1: "Quaped Egg", 2: "Volant Egg", 3: "Mech Egg", 4: "Morp Egg",
    5: "Bipee", 6: "Quapee", 7: "Wingee", 8: "Mechee", 9: "Jiggle", 10: "Wiggle",
    11: "Chipper", 12: "Tairan", 13: "Fluffy", 14: "Salamandra", 15: "Dove",
    16: "Wingoid", 17: "IO-der", 18: "IIO-der", 19: "IIO-der", 20: "Liquid Jiggle",
    21: "Fire Jiggle", 22: "Nature Jiggle", 23: "Steelhead", 24: "Monja",
    25: "Flashsaurus", 26: "Glacieo", 27: "Dr. Liquid", 28: "Crabtron", 29: "Gagobat",
    30: "Birdori", 31: "Petalizard", 32: "Bonefang", 33: "Bloomtail", 34: "Clockabit",
    35: "Baba", 36: "Wastemon", 37: "Ointank", 38: "Frog Go", 39: "Samuraikid",
    40: "Herdmaster", 41: "Archangel", 42: "Fallen Angel", 43: "Goliachimp",
    44: "Solanake", 45: "Zomplant", 46: "Cocc-1001", 47: "Kingsaurus",
    48: "Beezoka", 49: "Elemental", 50: "Farie Guardian", 51: "Ascendant",
    52: "Lady Naga", 53: "Chukita Hound", 54: "Mechindragon", 55: "Ashmon",
    56: "Fantom King", 57: "Feroth", 58: "Shadowpaw", 59: "Serene Uman",
    60: "Drake", 61: "Dreamoth", 62: "Kandan", 63: "Ancient Dragon"
}
const stageList = {
  0: "Egg",
  1: "Youth",
  2: "Rookie",
  3: "Mature",
  4: "Perfect"
}
const familyList = {
  0: "Distinction",
  1: "Celestial",
  2: "Verdant",
  3: "Fantasy",
  4: "Abyss"
}
const skillList = {
  0: "__",
  10: "Acid Bullet",
  11: "Force Palm",
  12: "Rock Throw",
  13: "Fur Sting",
  14: "Fire Ball",
  15: "Gust",
  16: "Magic Dust",
  17: "Light Beam",
  18: "Metal Scale",
  19: "Blade Energy",
  20: "Fire Tornado",
  21: "Shadowball",
  22: "Leaf Blade",
  23: "Force Blow",
  24: "Wicked Slash",
  25: "Discharge",
  26: "Frost Blast",
  27: "Buble Wrap",
  28: "Spinning Slash",
  29: "Echo scream",
  30: "Thunder Strike",
  31: "Petal Blade",
  32: "Crunch",
  33: "Surprise",
  34: "Pressure Smash",
  35: "Take Down",
  36: "Sparkly Swirl",
  37: "Energy Missle",
  38: "Sing a Song",
  39: "Spirit Slash",
  40: "Aimshot",
  41: "Rainbow Force",
  42: "Dark Swipes",
  43: "Ump Up",
  44: "Solar Beam",
  45: "Toxic Bite",
  46: "Sonicboom",
  47: "Ancient Power",
  48: "Bee Missle",
  49: "Disaster",
  50: "Line Wind",
  51: "Crystal Lance",
  52: "Hydro Pressure",
  53: "Searing Blade",
  54: "Star Laser",
  55: "Explosive Smoke",
  56: "Air Strike",
  57: "Grave Shadow",
  58: "Shadow Cut",
  59: "Starfall",
  60: "Earth Shake",
  61: "Psycodamage",
  62: "Sunraze Slash",
  63: "Giga Blast"
}
const traitList = {
  0: "__",
  1: "Tough",
  2: "Brawler",
  3: "Nimble",
  4: "Smart",
  5: "Pride",
  6: "Resilient",
  7: "Hardworking",
  8: "Serious",
  9: "Creative",
  10: "Ambitious",
  11: "Multitasking",
  12: "Lonely",
  13: "Bashful",
  14: "Adamant",
  15: "Naughty",
  16: "Brave",
  17: "Timid",
  18: "Hasty",
  19: "Jolly",
  20: "Naive",
  21: "Quirky",
  22: "Mild",
  23: "Quiet",
  24: "Rash",
  25: "Modest",
  26: "Docile",
  27: "Relaxed",
  28: "Bold",
  29: "Impish",
  30: "Lax",
  31: "Careful"
  }
function SkillsState(mon, SkillNumber) {
  let HP = mon.power.hitpoints;
  let STR = mon.power.strength;
  let AGI = mon.power.agility;
  let INT = mon.power.intellegence;
  let HAPPINESS = mon.attribute.happiness;
  let DISCIPLINE = mon.attribute.discipline;
  let damage = 0;
  if (SkillNumber == 0) {damage = STR * 50;} //normal attack
  else if (SkillNumber == 10) {damage = 50 * STR + 35 * AGI;} //Acid Bullet |R|
  else if (SkillNumber == 11) {damage = 85 * STR + 15 * INT;} //Force Palm |M|
  else if (SkillNumber == 12) {damage = 115 * STR;} //Rock Throw |R|
  else if (SkillNumber == 13) {damage = 30 * STR + 30 * AGI + 30 * INT;} //Fur Sting |R|
  else if (SkillNumber == 14) {damage = 105 * STR;} //Fire Ball |R|
  else if (SkillNumber == 15) {damage = 40 * STR + 63 * AGI;} //Gust |R|
  else if (SkillNumber == 16) {damage = 40 * STR + 60 * AGI;} //Magic Dust |R|
  else if (SkillNumber == 17) {damage = 80 * STR + 35 * INT;} //Light Beam |R|
  else if (SkillNumber == 18) {damage = 90 * STR + 40 * INT;} //Metal Scale |R|
  else if (SkillNumber == 19) {damage = 50 * STR + 100 * INT;} //Blade Energy |R|
  else if (SkillNumber == 20) {damage = 150 * STR;} //Fire Tornado |R|AOE
  else if (SkillNumber == 21) {damage = 50 * STR + 100 * AGI;} //Shadowball |R|
  else if (SkillNumber == 22) {damage = 50 * STR + 50 * AGI + 50 * INT;} //Leaf Blade |R|
  else if (SkillNumber == 23) {damage = 75 * STR + 125 * AGI;} //Force Blow |M|
  else if (SkillNumber == 24) {damage = 135 * STR + 75 * AGI;} //Wicked Slash |M|
  else if (SkillNumber == 25) {damage = 200 * AGI;} //Discharge |R|AOE
  else if (SkillNumber == 26) {damage = uint32((14 * HP) / 100) + 125 * STR;} //Frost Blast |R|
  else if (SkillNumber == 27) {damage = 90 * STR + 90 * AGI + 90 * INT;} //Buble Wrap |R|
  else if (SkillNumber == 28) {damage = 225 * STR;} //Spinning Slash |M|
  else if (SkillNumber == 29) {damage = 50 * STR + 125 * AGI;} //Echo scream |R|AOE
  else if (SkillNumber == 30) {damage = 90 * STR + 110 * AGI;} //Thunder Strike |R|
  else if (SkillNumber == 31) {damage = 150 * STR + 50 * AGI;} //Petal Blade |R|
  else if (SkillNumber == 32) {damage = 165 * STR + 175 * DISCIPLINE;} //Crunch |M|
  else if (SkillNumber == 33) {damage = 185 * INT;} //Surprise |R|
  else if (SkillNumber == 34) {damage = 55 * STR + 140 * INT;} //Pressure Smash |M|
  else if (SkillNumber == 35) {damage = 250 * STR;} //Take Down |M|
  else if (SkillNumber == 36) {damage = 210 * STR;} //Sparkly Swirl |R|
  else if (SkillNumber == 37) {damage= uint32((15*HP)/100) + 125*STR;} //Energy Missle |R|
  else if (SkillNumber == 38) {damage= 125*STR + 40*AGI + 40*INT;} //Sing a Song |R|AOE
  else if (SkillNumber == 39) {damage= 185*STR + 50*AGI;} //Spirit Slash |M|
  else if (SkillNumber == 40) {damage= 158*STR + 50*AGI + 25*INT;} //Aimshot |R|
  else if (SkillNumber == 41) {damage= 160*STR + 50*INT + 175*HAPPINESS;} //Rainbow Force |R|
  else if (SkillNumber == 42) {damage= 160*STR +50*INT + 175*DISCIPLINE;} //Dark Swipes |M|
  else if (SkillNumber == 43) {damage= 185*STR + 100*AGI;} //ump Up |M|
  else if (SkillNumber == 44) {damage= 170*STR + 170*INT;} //Solar Beam |R|
  else if (SkillNumber == 45) {damage= uint32((25*HP)/100) + 100*STR;} //Toxic Bite |M|
  else if (SkillNumber == 46) {damage= 150*STR + 150*INT;} //Sonicboom |R|
  else if (SkillNumber == 47) {damage= 325*STR;} //Ancient Power |R|AOE
  else if (SkillNumber == 48) {damage= 150*STR + 125*AGI + 50*INT;} //Bee Missle |R|
  else if (SkillNumber == 49) {damage= 125*STR + 125*AGI + 125*INT;} //Disaster |R|AOE
  else if (SkillNumber == 50) {damage= 175*AGI + 100*INT + 200*HAPPINESS;} //Line Wind |R|
  else if (SkillNumber == 51) {damage= 75*STR + 200*INT + 250*DISCIPLINE;} //Crystal Lance |R|
  else if (SkillNumber == 52) {damage= 150*STR + 125*AGI + 175*HAPPINESS;} //Hydro Pressure |M|
  else if (SkillNumber == 53) {damage= 175*STR + 700*DISCIPLINE;} //Searing Blade |M|
  else if (SkillNumber == 54) {damage= 200*STR + 150*INT;} //Star Laser |R|position1/2 2/3
  else if (SkillNumber == 55) {damage= 115*STR + 115*AGI + 115*INT;} //Explosive Smoke |R|AOE
  else if (SkillNumber == 56) {damage= 150*STR + 150*INT;} //Air Strike |R|AOE
  else if (SkillNumber == 57) {damage= 125*STR + 100*STR + 100*INT;} //Grave Shadow |R|
  else if (SkillNumber == 58) {damage= 60*STR + 75*INT + 750*HAPPINESS;} //Shadow Cut |R|
  else if (SkillNumber == 59) {damage= 345*INT;} //Starfall |R|
  else if (SkillNumber == 60) {damage= 225*STR + 85*AGI;}
  else if (SkillNumber == 61) {damage= 160*STR + 160*INT ; } //Psycodamage |R|AOE
  else if (SkillNumber == 62) {damage= 125*STR + 200*INT ; } //Sunraze Slash |M|
  else if (SkillNumber == 63) {damage= 125*STR + 125*AGI + 125*INT ; } //Giga Blast |R|position1/2 2/3
  return damage;
}
//--------------------------------------------

function decodeRythm(won, Rythm, bitset, mon1, mon2) {

  const numBits = 3; // number of bits per set
  let loop = bitset/3; // bitset number of sets in the uint256 number
  console.log(loop);
  console.log(Rythm);
  let mon1hp = mon1.power.hitpoints;
  let mon2hp = mon2.power.hitpoints;
  let mon1hpmax = mon1.power.hitpoints;
  let mon2hpmax = mon2.power.hitpoints;
  console.log("Monstre1.HP:" + mon1hp + " Monstre2.HP:"+mon2hp);
  // Extract the bits for each set
  $("#Report").append("<i>Battle Result</i>"); //---- start battle report
  var battleresult = "";
   for (let i = 0; i < loop; i++) {
      let skill = "Normal Attack";
      //let setBits  = Rythm >> (i * numBits) & ((1 << numBits) - 1);
      let setBits  = bigInt(Rythm).shiftRight(i * numBits).and((1 << numBits) - 1).toJSNumber();
  //    console.log(setBits);
      let monstreId = setBits & 1; // LSB 1 bit
      //console.log(monstreId);
      let skillId = setBits >> 1; // next 2 bits
      //console.log(skillId);
      let damage = 0;
      let weakness = 0; //0 = nothing, 1 = more damage on MOnstre1, 2= more daamge on Monstre2
      let weakpoint = "";
      //weakness
      if ( (mon1.family == 3 && mon2.family == 1) //Fantasy weaks against Celestial
           ||(mon1.family == 1 && mon2.family == 4) //Celestial weaks against Abyss
           ||(mon1.family == 2 && mon2.family == 0) //Verdant weaks against Desolation
           ||(mon1.family == 4 && mon2.family == 2) //Abyss weaks against Verdant
           ||(mon1.family == 0 && mon2.family == 3) //Desolation weaks against Fantasy
        ) 
        {weakness = 1;}
        //---
        if ( (mon2.family == 3 && mon1.family == 1) //Fantasy weaks against Celestial
           ||(mon2.family == 1 && mon1.family == 4) //Celestial weaks against Abyss
           ||(mon2.family == 2 && mon1.family == 0) //Verdant weaks against Desolation
           ||(mon2.family == 4 && mon1.family == 2) //Abyss weaks against Verdant
           ||(mon2.family == 0 && mon1.family == 3) //Desolation weaks against Fantasy
        ) 
        {weakness = 2;}
      //------
      let mons = monstreId === 0 ? speciesList[mon1.species] : speciesList[mon2.species];
      
      if (monstreId ==0) {
        if (skillId == 3){
          //already normal attack
          damage = SkillsState(mon1, 0);
        } else {
          skill = skillList[mon1.skill[skillId]];
          //console.log(mon1.power + "xxx" + mon1.skill[skillId]);
          damage = SkillsState(mon1, mon1.skill[skillId]);
        }
        if (weakness == 2){damage = damage*1.2; weakpoint = "(weakness)" ;}
        mon2hp = mon2hp - damage;
        let mon1hppercent = Math.round((mon1hp/mon1hpmax)*1000)/10;
        let mon2hppercent = Math.round((mon2hp/mon2hpmax)*1000)/10;
        console.log(mons +".HP:"+mon1hp + " uses " + skill + " and deal "+damage+weakpoint+" damage on Monstre2.HP:"+mon2hp );
        var texttemp = "<p style=\"font-size:13px;\"><b style=\"color:rgb\(45,210,210\);\">"+speciesList[mon1.species] +"</b><sup>HP:"+mon1hp + "\("+mon1hppercent+"%\)</sup> uses <i>" + skill + "</i> and deal "+damage+
        "<sub>"+weakpoint+"</sub> damage on <b style=\"color:rgb\(240,100,100\);\">"+ speciesList[mon2.species]+"</b><sup>HP:"+mon2hp+ "\("+mon2hppercent+"%\)</sup></p>";
       // $("#Report").append(Environment.NewLine);
       // $("#Report").append(texttemp);
      } else {
        if (skillId == 3){
          //already normal attack
          damage = SkillsState(mon2, 0);
        } else {
          skill = skillList[mon2.skill[skillId]];
         damage = SkillsState(mon2, mon2.skill[skillId]);
        }
        if (weakness == 1){damage = damage*1.2; weakpoint = "(weakness)" ;}
        mon1hp = mon1hp - damage;
        let mon1hppercent = Math.round((mon1hp/mon1hpmax)*1000)/10;
        let mon2hppercent = Math.round((mon2hp/mon2hpmax)*1000)/10;
        console.log(mons +".HP:"+mon2hp + " uses " + skill + " and deal "+damage+weakpoint+" damage on Monstre1.HP:"+mon1hp );
        var texttemp = "<n style=\"font-size:13px;\"><b style=\"color:rgb\(240,100,100\);\">"+speciesList[mon2.species] +"</b><sup>HP:"+mon2hp + "\("+mon2hppercent+"%\)</sup> uses <i>" + skill + "</i> and deal "+damage+
        "<sub>"+weakpoint+"</sub> damage on <b style=\"color:rgb\(45,210,210\);\">"+ speciesList[mon1.species]+"</b><sup>HP:"+mon1hp+ "\("+mon1hppercent+"%\)</sup></p>";
        //$("#Report").append(texttemp);
      }
      battleresult = battleresult+texttemp;
    }
    if (won ==1) {battleresult = battleresult+"<li>My "+speciesList[mon1.species]+" WIN!</li>";}
    else {{battleresult = battleresult+"<li>Opponent's "+speciesList[mon2.species]+" WIN!</li>";}}
    
    $("#Report").append(battleresult);
}

// -----------------------------------------

  function displayMonstreAll(walletaddress) {
    $("#Monstredisplay").empty();
    var checkdisplay = 0;
    if (document.getElementById("display-list").value == "displayall") { checkdisplay = 0;}
    else if (document.getElementById("display-list").value == "displayalive") { checkdisplay = 1;}
    else if (document.getElementById("display-list").value == "displaychosen") { checkdisplay = 2;}
    else if (document.getElementById("display-list").value == "displayrankyouth") { checkdisplay = 3;}
    else if (document.getElementById("display-list").value == "displayrankrookie") { checkdisplay = 4;}
    else if (document.getElementById("display-list").value == "displayrankmature") { checkdisplay = 5;}
    else if (document.getElementById("display-list").value == "displayrankperfect") { checkdisplay = 6;}
    var chosen = document.getElementById("chosenno").value;
    if (checkdisplay <3) {
      getMonstreVar(walletaddress).then(function(allMonstress) {
        for (let ii =0; ii<allMonstress.length; ii++) {
          //console.log("here 2d");
          if (new Date().valueOf()/1000 > allMonstress[ii].time.deadtime || 
              new Date().valueOf()/1000 > allMonstress[ii].time.endurance ){
          var status = "DEAD - An Egg now - Hatch it";
          } else {
            status ="ALIVE";
          }
          //console.log(allMonstress);
          if (checkdisplay == 1 && status == "ALIVE" || checkdisplay == 0 || checkdisplay ==2 && ii == chosen) {
          let deadtime = (allMonstress[ii].time.deadtime - new Date().valueOf()/1000);
          var endurance = (allMonstress[ii].time.endurance - new Date().valueOf()/1000);
          var stamina = new Date().valueOf()/1000 -allMonstress[ii].time.stamina  ;
          var evolutiontime = (allMonstress[ii].time.evolutiontime - new Date().valueOf()/1000);
          if (deadtime <0) {deadtime = 0;} else {deadtime = deadtime.toFixed(1);}
          if (endurance <0) {endurance = 0;} else {endurance = endurance.toFixed(1);}
          if (stamina <0) {stamina = stamina.toFixed(1);} else {if (stamina > 48*3600){stamina = 48*3600;} else {stamina = stamina.toFixed(1);}}
          if (allMonstress[ii].status == 0) {var stat = "Normal";} else {var stat = "Frozen";}

            $("#Monstredisplay").append(`<div class="Monstredisplay">
              <ul style="background-color:#101010;">
                <n><b style="color:gray;">${status} </b></n>
                <dt> <b style="color:#AA9910;">  No.: </b> ${ii} <b style="color:#AA9910;">  id: </b> ${allMonstress[ii].attribute.id} <b style="color:#AA9910;">  Species:</b> ${speciesList[allMonstress[ii].species]}</dt>
                <dt><b style="color:#F5AF32;" ">Exp:</b> ${allMonstress[ii].exp} <b style="color:#AA9910;">Stage:</b> ${stageList[allMonstress[ii].attribute.stage]} <b style="color:#AA9910;">  Status:</b> ${stat}</dt>
                <dt><b style="color:#F5AF32;">  Weight (g): </b>${allMonstress[ii].attribute.weight}</dt>
                <dt><b style="color:#2882D2;">Discipline:</b> ${allMonstress[ii].attribute.discipline}  <b style="color:#DC5A96;"> Happiness: </b>${allMonstress[ii].attribute.happiness}</dt>
                <dt><b style="color:#B432FF;">Hitpoints:</b> ${allMonstress[ii].power.hitpoints}   </dt>
                <dt><b style="color:#B432FF;">Strength: </b>${allMonstress[ii].power.strength} <b style="color:#B432FF;">  Agility: </b>${allMonstress[ii].power.agility}  <b style="color:#B432FF;">  Intellegence:</b> ${allMonstress[ii].power.intellegence}</dt>
                <dt><b style="color:#811BCD;">Skills:</b> ${skillList[allMonstress[ii].skill[0]]+", "+skillList[allMonstress[ii].skill[1]]+", "+skillList[allMonstress[ii].skill[2]]} </dt>
                <dt><b style="color:#711BA0;">Traits:</b> ${traitList[allMonstress[ii].trait[0]]+", "+traitList[allMonstress[ii].trait[1]]+", "+traitList[allMonstress[ii].trait[2]]}</dt>
                <dt><b style="color:#7F0606;">Deadtime:</b> ${formatTime(deadtime)}  <b style="color:#7F0606;"> Endurance:</b> ${formatTime(endurance)}</dt>
                <dt><b style="color:#0D890F;">EvolutiontimeIn:</b> ${formatTime(evolutiontime)}  <b style="color:#029705;"> Stamina:</b> ${(stamina/3600).toFixed(2)} h</dt>
                <dt><b style="color:#4B5988;">Family: </b>${familyList[allMonstress[ii].family]} <b style="color:#4B5988;">Frozentime:</b> ${allMonstress[ii].time.frozentime}</dt>
                <dt><b style="color:#4B5988;font-size:11px"><u>Gene: </b><i style="font-size:11px">${allMonstress[ii].gene}</i></u></dt>
              </ul>
            </div>`);
          }
        } 
      });
    } else { //means showing opponenets per rank
      console.log("getting battling");
      getBattlingMonstresByBatch().then(function(allMonstress) {
        for (let ii =((checkdisplay-3)*10); ii< ((checkdisplay-3)*10+10); ii++) {
          console.log("here 2d");
     
            $("#Monstredisplay").append(`<div class="Monstredisplay">
              <ul>
                
                <dt> id: </b> ${allMonstress[ii].attribute.id} <b style="color:#12256A;">  Species:</b> ${speciesList[allMonstress[ii].species]}</dt>
                <dt><b style="color:#12256A;" style="color:blue;">Exp:</b> ${allMonstress[ii].exp}  <b style="color:#12256A;">  Status:</b> ${allMonstress[ii].status}</dt>
                <dt><b style="color:#092793;">Discipline:</b> ${allMonstress[ii].attribute.discipline}  <b style="color:#092793;"> Happiness: </b>${allMonstress[ii].attribute.happiness}</dt>
                <dt><b style="color:#102675;">Stage:</b> ${stageList[allMonstress[ii].attribute.stage]} <b style="color:#102675;">  Weight (g): </b>${allMonstress[ii].attribute.weight}</dt>
                <dt><b style="color:#2F1AA9;">Strength: </b>${allMonstress[ii].power.strength} <b style="color:#2F1AA9;">  Agility: </b>${allMonstress[ii].power.agility}  <b style="color:#2F1AA9;">  Intellegence:</b> ${allMonstress[ii].power.intellegence}</dt>
                <dt><b style="color:#2F1AA9;">Hitpoints:</b> ${allMonstress[ii].power.hitpoints}  <b style="color:#102F9A;"> Skills:</b> ${allMonstress[ii].skill+skillList[allMonstress[ii].skill[0]]+skillList[allMonstress[ii].skill[1]]+skillList[allMonstress[ii].skill[2]]} <b style="color:#102F9A;">  Traits:</b> ${allMonstress[ii].trait}</dt>
                <dt><b style="color:#4B5988;">family: </b>${familyList[allMonstress[ii].family]} </dt>
                
              </ul>
            </div>`);
          }
        
      });


    }
  }


  document.getElementById("display-list").addEventListener("change", function() {
    var selectedOption = this.value;
    displayMonstreAll(userAccount[0]);
    // Save selected option to local storage
    localStorage.setItem("selectedOption", selectedOption);
  });
  document.getElementById("chosenno").addEventListener("change", function() {
    var selectedOption = this.value;
    displayMonstreAll(userAccount[0]);
    // Save selected option to local storage
    localStorage.setItem("chosenNO", selectedOption);
  });
  document.getElementById("chosenid").addEventListener("change", function() {
    var selectedOption = this.value;
    // Save selected option to local storage
    localStorage.setItem("chosenID", selectedOption);
  });
  document.getElementById("oppoid").addEventListener("change", function() {
    var selectedOption = this.value;
    // Save selected option to local storage
    localStorage.setItem("oppoID", selectedOption);
  });


     

  async function getMonstresByOwner(address_owner) {
    let idarray= await FTMON.methods.getMonstresByOwner(address_owner).call();
    console.log(idarray);
    idarray = idarray.slice().sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    return idarray;
  }
  function Monstre(uint256_tokenid) {
    return FTMON.methods.Monstre(uint256_tokenid).call();
  }
  function viewNFT(uint256_tokenId) {
    return FTMON.methods.viewNFT(uint256_tokenId).call();
  }
  function getMonstreVar(useraddress) {
    return FTMON.methods.getMonstresByOwnerByBatch(useraddress).call();
  }
  function getBattlingMonstresByBatch() {
    return FTMON.methods.getBattlingMonstresByBatch().call();
  }

 /* document.getElementById('btn-displayall').addEventListener("click", function(event) {
    checkalive = 0;
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("111");
  }, {once: false}); */
  
  document.getElementById("btn-refresh").addEventListener("click", function(event) {
    displayMonstreAll(userAccount[0]);
  }, {once: false});

  document.getElementById('btn-connectwallet').addEventListener("click", function(event) {
    getWeb3();
    console.log("try connect wallet again");
  }, {once: false});

  
  //always run
  var intervalId = setInterval(function() {
       displayMonstreAll(userAccount[0]);
        console.log("interval");
  }, 300000); //300s
/// ---------------actions --------------------
  function HatchEgg(uint256_tokenId) {
    $("#Report").append("<li>Hatching Egg...</li>");
    return FTMON.methods.HatchEgg(uint256_tokenId)
    .send({ from: userAccount[0] })
    .on("receipt", function(receipt) {$("#Report").append("<li>Successfully Hatched Egg</li>");})
    .on("error", function(error) {$("#Report").append(error).append("<li>Hatching Failed</li>");});
  }
  document.getElementById('btn-hatchegg').addEventListener("click",async function(event) {
    await HatchEgg(document.getElementById("chosenid").value);
    displayMonstreAll(userAccount[0]);
    console.log("hatchingegg");
  }, {once: false});
//--------------
  function mint() {
    $("#Report").append("<li>Minting 1 Egg...</li>");
    FTMON.methods.mint(userAccount[0], 1).estimateGas({ from: userAccount[0], value: 100000000000000000 }, function(error, estimateGas) {
      if (error) {
        console.log(error);
        $("#Report").append(error + "\n");
      }
      else {
        FTMON.methods.mint(userAccount[0], 1)
        .send({ from: userAccount[0], value: 100000000000000000, gas: Math.round(estimateGas*1.5)})
        .on("receipt", function(receipt) {$("#Report").append("<li>Successfully Minted an Egg</li>");})
        .on("error", function(error) {$("#Report").append(error + "\n"); $("#Report").append("<li>Mint Failed</li>"); console.log(error);});
      }
    });
  }
  function feedSalmon(uint256_tokenId,uint8_foodtype) {
    $("#Report").append("<li>Feeding Salmon, yummy</li>");
    FTMON.methods.feedsMonstre(uint256_tokenId, uint8_foodtype).estimateGas({ from: userAccount[0], value: 100000000000000000 }, function(error, estimateGas) {
      if (error) {
        console.log(error);
        $("#Report").append(error + "\n");
      }
      else {
        var mon1;
        viewNFT(uint256_tokenId).then((result)=>{
          mon1 = result;
          FTMON.methods.feedsMonstre(uint256_tokenId, uint8_foodtype)
          .send({ from: userAccount[0], value: 100000000000000000, gas: Math.round(estimateGas*1.2)})
          .on("receipt", function(receipt) {$("#Report").append("<li>Successfully fed a salmon</li>");
          showDiffMon(mon1,receipt.events.StatChangedResult.returnValues.AfterMon);
          })
          .on("error", function(error) {$("#Report").append(error + "\n"); $("#Report").append("<li>feed Failed</li>"); console.log(error);});
        });
      }
    });
  }
  document.getElementById('btn-mintegg1pc').addEventListener("click", async function(event) {
    await mint();
    displayMonstreAll(userAccount[0]);
    console.log("mintegg");
  }, {once: false});
//-----------
function mint5() {
  $("#Report").append("<li>Minting 5 Egg...</li>");
  FTMON.methods.mint(userAccount[0], 5).estimateGas({ from: userAccount[0], value: 500000000000000000 }, function(error, estimateGas) {
    if (error) {
      console.log(error);
      $("#Report").append(error + "\n");
    }
    else {
      FTMON.methods.mint(userAccount[0], 5)
      .send({ from: userAccount[0], value: 500000000000000000, gas: Math.round(estimateGas*1.5)})
      .on("receipt", function(receipt) {$("#Report").append("<li>Successfully Minted 5 Eggs</li>");})
      .on("error", function(error) {$("#Report").append(error + "\n"); $("#Report").append("<li>Mint Failed</li>"); console.log(error);});
    }
  });
}
document.getElementById('btn-mintegg5pc').addEventListener("click", async function(event) {
  await mint5();
  displayMonstreAll(userAccount[0]);
  console.log("mint5egg");
}, {once: false});
//-------------------------

function feedsMonstre(uint256_tokenId,uint8_foodtype) {
    $("#Report").append("<li>start feeding...</li>");
    let susstext = "";
    return viewNFT(uint256_tokenId).then(function(Monstre){
        let enduranceleft = (Monstre.time.endurance - new Date().valueOf()/1000)/3600;
    console.log(enduranceleft);
    switch(uint8_foodtype) {
        case 0:
          susstext = "<br>Successfully fed.</br>Endurance +4hrs; Weight+300g; Mood has changed.";
          break;
        case 1:
          susstext = "<br>Successfully fed.</br>Endurance +8hrs; Weight+700g; Mood has changed.";
          break;
        case 2:
          susstext = "<br>Successfully fed.</br>Endurance +13hrs; Weight+2kg; Mood has changed.";
          break;
        case 3:getMonstreVar
          susstext = "<br>Successfully fed.</br>Endurance +3hrs; Weight+30g; Mood has changed.";
          break;
        case 4:
          susstext = "<br>Successfully fed.</br>Endurance +6hrs; Weight+100g; Mood has changed.";
          break;
        case 5:
          susstext = "<br>Successfully fed.</br>Endurance +11hrs; Weight+200g; Mood has changed.";
          break;        
        default:
          susstext = "Successfully fed.";
      }
      if (enduranceleft > 24) { susstext = "Your Monstre is too full!"};
      if (enduranceleft <= 0) { 
        susstext = "Your Monstre is dead!"; 
        return;};
      console.log(susstext);
    return FTMON.methods.feedsMonstre(uint256_tokenId,uint8_foodtype)
    .send({ from: userAccount[0] })
    .on("receipt", function(receipt) {$("#Report").append(susstext);})
    .on("error", function(error) {$("#Report").append(error).append("<li>Feeding Failed</li>");});
    });
    
  }
  document.getElementById('btn-meat').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosenid").value,0);
    displayMonstreAll(userAccount[0]);
    console.log("feed 0");
  }, {once: false});
  document.getElementById('btn-giantmeat').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosenid").value,1);
    displayMonstreAll(userAccount[0]);
    console.log("feed 1");
  }, {once: false});
  document.getElementById('btn-wagyumeat').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosenid").value,2);
    displayMonstreAll(userAccount[0]);
    console.log("feed 2");
  }, {once: false});
  document.getElementById('btn-grass').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosenid").value,3);
    displayMonstreAll(userAccount[0]);
    console.log("feed 3");
  }, {once: false});
  document.getElementById('btn-vegetable').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosenid").value,4);
    displayMonstreAll(userAccount[0]);
    console.log("feed 4");
  }, {once: false});
  document.getElementById('btn-fantomroots').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosenid").value,5);
    displayMonstreAll(userAccount[0]);
    console.log("feed 5");
  }, {once: false});
  document.getElementById('btn-salmon').addEventListener("click", async function(event) {
    await feedSalmon(document.getElementById("chosenid").value,6);
    displayMonstreAll(userAccount[0]);
    console.log("feed salmon 6");
  }, {once: false});
  /*document.getElementById('btn-temp').addEventListener("click", async function(event) {
    await getMonstreVar();
    console.log("temp");
  }, {once: false});*/

  function showDiffMon(mon1,mon2){
    
    var STA = mon2.time.stamina - mon1.time.stamina;
    var EXP = mon2.exp - mon1.exp;
    var STG = mon2.attribute.stage - mon1.attribute.stage;
    var WEI = mon2.attribute.weight - mon1.attribute.weight;
    var DIS = mon2.attribute.discipline - mon1.attribute.discipline;
    var HAP = mon2.attribute.happiness - mon1.attribute.happiness;
    var HP = mon2.power.hitpoints - mon1.power.hitpoints;
    var STR = mon2.power.strength - mon1.power.strength;
    var AGI = mon2.power.agility - mon1.power.agility;
    var INT = mon2.power.intellegence - mon1.power.intellegence;
    var END = mon2.time.endurance - mon1.time.endurance;
    var DEA = mon2.time.deadtime - mon1.time.deadtime;
    var SHI = mon2.shinning - mon1.shinning;
    let sus = "";
    $("#Report").append("<ul>");
    if (STA != 0) { 
      if (STA > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>Stamina ${sus}${STA/3600}hr </dt> `);
    }
    if (STG != 0) { $("#Report").append(`<dt>Evolved!</dt> `);}
    
    if (EXP != 0) { 
      if (EXP > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>EXP ${sus}${EXP} </dt> `);
    }

    sus = "";
    if (WEI != 0) { 
      if (WEI > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>Weight ${sus}${WEI}g </dt> `);
    }

    sus = "";
    if (DIS != 0) { 
      if (DIS > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>Discipline ${sus}${DIS} </dt> `);
    }

    sus = "";
    if (HAP != 0) { 
      if (HAP > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>Happiness ${sus}${HAP} </dt> `);
    }

    sus = "";
    if (HP != 0) { 
      if (HP > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>HP ${sus}${HP} </dt> `);
    }

    sus = "";
    if (STR != 0) { 
      if (STR > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>STR ${sus}${STR} </dt> `);
    }

    sus = "";
    if (AGI != 0) { 
      if (AGI > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>AGI ${sus}${AGI} </dt> `);
    }

    sus = "";
    if (INT != 0) { 
      if (INT > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>INT ${sus}${INT} </dt> `);
    }

    sus = "";
    if (END != 0) { 
      if (END > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>Endurance ${sus}${Math.round((END/3600)*100)/100}hr</dt> `);
    }

    sus = "";
    if (DEA != 0) { 
      if (DEA > 0) {
        sus = "+";
      } 
      $("#Report").append(`<dt>Deadtime ${sus}${Math.round((DEA/3600)*100)/100}hr</dt> `);
    }
    if (SHI != 0) { $("#Report").append(`<dt>It Shine! </dt> `);}
    $("#Report").append("</ul>");
  }







  async function trainMonstre(uint256_tokenId,uint8_traintype) {
    $("#Report").append("<li>start training...</li>");
    
    return viewNFT(uint256_tokenId).then(function(Monstre){
        let enduranceleft = (Monstre.time.endurance - new Date().valueOf()/1000);
     if (enduranceleft <= 0) { 
      $("#Report").append("The Monstre is dead.");
        return;};
      
    return FTMON.methods.trainsMonstre(uint256_tokenId,uint8_traintype)
    .send({ from: userAccount[0] })
    .on("receipt", function(receipt) {$("#Report").append("Successfully Trained.");
    showDiffMon(Monstre,receipt.events.StatChangedResult.returnValues.AfterMon);})
    .on("error", function(error) {$("#Report").append(error).append("<li>Training Failed</li>");});
    });
  }
//-------------buttons
  document.getElementById('btn-trainint').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,3);
    displayMonstreAll(userAccount[0]);
    console.log("train 3");
  }, {once: false});
  document.getElementById('btn-trainagi').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,2);
    displayMonstreAll(userAccount[0]);
    console.log("train 2");
  }, {once: false});
  document.getElementById('btn-trainstr').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,1);
    displayMonstreAll(userAccount[0]);
    console.log("train 1");
  }, {once: false});
  document.getElementById('btn-trainhp').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,0);
    displayMonstreAll(userAccount[0]);
    console.log("train 0");
  }, {once: false});
  document.getElementById('btn-trainint+').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,7);
    displayMonstreAll(userAccount[0]);
    console.log("train 7");
  }, {once: false});
  document.getElementById('btn-trainagi+').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,6);
    displayMonstreAll(userAccount[0]);
    console.log("train 6");
  }, {once: false});
  document.getElementById('btn-trainstr+').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,5);
    displayMonstreAll(userAccount[0]);
    console.log("train 5");
  }, {once: false});
  document.getElementById('btn-trainhp+').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,4);
    displayMonstreAll(userAccount[0]);
    console.log("train 4");
  }, {once: false});
  document.getElementById('btn-praise').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,8);
    displayMonstreAll(userAccount[0]);
    console.log("train 8");
  }, {once: false});
  document.getElementById('btn-scold').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosenid").value,9);
    displayMonstreAll(userAccount[0]);
    console.log("train 9");
  }, {once: false});

  document.getElementById('btn-battleyouth').addEventListener("click", async function(event) {
    await BattleMonstre(document.getElementById("chosenid").value,0);
   //await BattleMonstre(document.getElementById("chosenid").value ,document.getElementById("rank").value);
   //await BattleMonstre(2 ,3);
    displayMonstreAll(userAccount[0]);
    console.log("battle");
  }, {once: false});
  document.getElementById('btn-battlerookie').addEventListener("click", async function(event) {
    await BattleMonstre(document.getElementById("chosenid").value,1);
   //await BattleMonstre(document.getElementById("chosenid").value ,document.getElementById("rank").value);
   //await BattleMonstre(2 ,3);
    displayMonstreAll(userAccount[0]);
    console.log("battle");
  }, {once: false});
  document.getElementById('btn-battlemature').addEventListener("click", async function(event) {
    await BattleMonstre(document.getElementById("chosenid").value,2);
   //await BattleMonstre(document.getElementById("chosenid").value ,document.getElementById("rank").value);
   //await BattleMonstre(2 ,3);
    displayMonstreAll(userAccount[0]);
    console.log("battle");
  }, {once: false});
  document.getElementById('btn-battleperfect').addEventListener("click", async function(event) {
    await BattleMonstre(document.getElementById("chosenid").value,3);
   //await BattleMonstre(document.getElementById("chosenid").value ,document.getElementById("rank").value);
   //await BattleMonstre(2 ,3);
    displayMonstreAll(userAccount[0]);
    console.log("battle");
  }, {once: false});

  document.getElementById('btn-battlesimulation').addEventListener("click", async function(event) {
    await BattleSimulation(document.getElementById("chosenid").value,document.getElementById("oppoid").value);
    displayMonstreAll(userAccount[0]);
    console.log("Battlesim");
  }, {once: false});



  /*function BattleSimulation(uint256_tokenId,opponentID) {
    $("#Report").append("<li>start simulation...</li>");
    return FTMON.methods.BattleSimulation(uint256_tokenId,opponentID)
    .send({ from: userAccount[0]})
    .on("receipt", function(receipt) {$("#Report").append("successfully TX");
    
        $('<tr>').append(
            $('<td>').text(receipt.events.Result.returnValues[1].id),
            $('<td>').text(receipt.events.Result.returnValues[2].won),
            $('<td>').text(receipt.events.Result.returnValues[3].hash)
        ).appendTo('#Report');
    $("#Report").append(receipt.events.Result.returnValues.toString());
        console.log(receipt.events.Result.returnValues);})
    .on("error", function(error) {$("#Report").append(error).append("<li>Simulation Failed</li>");});
  }*/

  function BattleSimulation(uint256_tokenId,OpponentID) {
    $("#Report").append("<li>start battleSIM...</li>");
    var actmon = FTMON.methods.viewNFT(uint256_tokenId).call();
    console.log("actmontry");
    console.log(actmon);
    FTMON.methods.BattleSimulation(uint256_tokenId,OpponentID).estimateGas({from: userAccount[0]}, function(error, estimateGas) {
    if (error) {
      console.log(error);
      $("#Report").append(error + "\n");
    }
    else {
      FTMON.methods.BattleSimulation(uint256_tokenId,OpponentID)
      .send({ from: userAccount[0], gas: Math.round(estimateGas*2)})
      .on("receipt", function(receipt) {$("#Report").append("<li>successfully TX</li>");
      /*
        
            $('<td>').text(";" + receipt.events.Result.returnValues.id),
            $('<td>').text(";" + receipt.events.Result.returnValues.won),
            $('<td>').text(";" + receipt.events.Result.returnValues.hash),
            $('<td>').text(";" + receipt.events.Result.returnValues.selfOrBefore),
            $('<td>').text(";" + receipt.events.Result.returnValues.opponOrAfter),
            $('<td>').text(";" + receipt.events.Result.returnValues.timeOrArray),
            $('<td>').text(";" + receipt.events.Result.returnValues.bit)
        ).appendTo('#Report');
    $("#Report").append(receipt.events.Result.returnValues.toString());*/
        console.log(receipt.events.Result.returnValues);
        //const bigInt = require("big-integer");
        console.log("rythmbigint" + bigInt(receipt.events.Result.returnValues.hash));
        decodeRythm(receipt.events.Result.returnValues.won, receipt.events.Result.returnValues.hash, receipt.events.Result.returnValues.bit, receipt.events.Result.returnValues.selfOrBefore, receipt.events.Result.returnValues.opponOrAfter);
      })
      .on("error", function(error) {$("#Report").append(error + "\n"); $("#Report").append("<li>Simulation Failed</li>");});
    
    }
  });
}

  
  function BattleMonstre(uint256_tokenId,rank) {
    $("#Report").append("<li>start battle...</li>");
    viewNFT(uint256_tokenId).then((Monstre)=>{
      FTMON.methods.BattleMonstre(uint256_tokenId,rank).estimateGas({from: userAccount[0]}, function(error, estimateGas) {
      if (error) {
        console.log(error);
        $("#Report").append(error + "\n");
      }
      else {
        FTMON.methods.BattleMonstre(uint256_tokenId,rank)
        .send({ from: userAccount[0], gas: Math.round(estimateGas*2)})
        .on("receipt", function(receipt) {$("#Report").append("<li>successfully TX</li>");
        /*
          
              $('<td>').text(";" + receipt.events.Result.returnValues.id),
              $('<td>').text(";" + receipt.events.Result.returnValues.won),
              $('<td>').text(";" + receipt.events.Result.returnValues.hash),
              $('<td>').text(";" + receipt.events.Result.returnValues.selfOrBefore),
              $('<td>').text(";" + receipt.events.Result.returnValues.opponOrAfter),
              $('<td>').text(";" + receipt.events.Result.returnValues.timeOrArray),
              $('<td>').text(";" + receipt.events.Result.returnValues.bit)
          ).appendTo('#Report');
      $("#Report").append(receipt.events.Result.returnValues.toString());*/
          console.log(receipt.events.Result.returnValues);
          //const bigInt = require("big-integer");
          console.log("rythmbigint" + bigInt(receipt.events.Result.returnValues.hash));
          decodeRythm(receipt.events.Result.returnValues.won, receipt.events.Result.returnValues.hash, receipt.events.Result.returnValues.bit, receipt.events.Result.returnValues.selfOrBefore, receipt.events.Result.returnValues.opponOrAfter);
          showDiffMon(Monstre,receipt.events.StatChangedResult.returnValues.AfterMon);
        })
        .on("error", function(error) {$("#Report").append(error + "\n"); $("#Report").append("<li>Simulation Failed</li>");});
      
      }
    });
  });  
}


  
