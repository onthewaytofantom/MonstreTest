var ftmonabi;
var userAccount;
console.log(ftmonabi);
const getWeb3 = async () => {
return new Promise(async (resolve, reject) => {
    //have an instance of web3.js.
    const web3 = new Web3(Web3.givenProvider) //web3() is from web3.js
    //i have included at header, the abi file. exported from SContract compiler.
    var mycontractaddress = '0xa3F3BeE8382d1A801770492144A6494Ee5258A30';
    FTMON = new web3.eth.Contract(ftmonabi, mycontractaddress);
    //userAccount = web3.eth.accounts[0]; // declare an account
    userAccount = await web3.eth.getAccounts();
    console.log(userAccount[0]);
    $("#walletaddr").text("Connected Wallet: ").append(userAccount[0]);
    //try to catch a block
    try{
            //direct talk to metamask window.ethereum is metamask function
    await window.ethereum.request({method: "eth_requestAccounts"})
    resolve(web3) //if all is well, resolve all the promise with web3.js instance
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    } catch (error) {
    reject(error) //otherwise reject it with error.
    }
    })
}
      
getWeb3();

async function showWallet(){
    $("#walletaddr").text("Wallet:").append(userAccount[0]);
    console.log(userAccount[0]);
    console.log(userAccount[0]);
}
showWallet();
// ------------ GEneral FunCtion ----------
function convertSeconds(seconds) {
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
  if (result.d > 0) {
      output += result.d + "d ";
  }
  if (result.h > 0) {
      output += result.h + "h ";
  }
  if (result.m > 0) {
      output += result.m + "m ";
  }
 
  if (output === "") {
      output = "-";
  }
  return output;
}
console.log(formatTime(-100000));
// -----------------------------------------
var checkalive = 0;
function displayMonstre(ids) {
    $("#Monstredisplay").empty();
      for (idd of ids) {
        let chosen = document.getElementById("chosen1").value;
        let count = idd;    

        viewNFT(idd).then(function(Monstre) {
        console.log("here d");
        if (new Date().valueOf()/1000 > Monstre.time.deadtime || 
            new Date().valueOf()/1000 > Monstre.time.endurance ){
         var status = "DEAD - An Egg now - Hatch it";
        } else {
          status ="ALIVE";
        }
        
        if (checkalive == 1 && status == "ALIVE" || checkalive == 0 || checkalive ==2 && count == chosen) {
        let deadtime = (Monstre.time.deadtime - new Date().valueOf()/1000);
        var endurance = (Monstre.time.endurance - new Date().valueOf()/1000);
        var stamina = (new Date().valueOf()/1000 -Monstre.time.stamina);
        var evolutiontime = (Monstre.time.evolution - new Date().valueOf()/1000);
        if (deadtime <0) {deadtime = 0;} else {deadtime = deadtime.toFixed(1);}
        if (endurance <0) {endurance = 0;} else {endurance = endurance.toFixed(1);}
        if (stamina <0) {stamina = 0;} else {if (stamina > 48*3600){stamina = 48*3600;} else {stamina = stamina.toFixed(1);}}

          $("#Monstredisplay").append(`<div class="Monstredisplay">
            <ul>
              <n><b style="color:gray;">${status} </b></n>
              <dt> <b style="color:#12256A;">  id: </b> ${Monstre.attribute.id}<b style="color:#12256A;">  Species:</b> ${Monstre.species}<b style="color:#12256A;">   Gene: </b>${Monstre.gene}</dt>
              <dt><b style="color:#12256A;" style="color:blue;">Exp:</b> ${Monstre.exp}  <b style="color:#12256A;">  Status:</b> ${Monstre.status}</dt>
              <dt><b style="color:#092793;">Discipline:</b> ${Monstre.attribute.discipline}  <b style="color:#092793;"> Happiness: </b>${Monstre.attribute.happiness}</dt>
              <dt><b style="color:#102675;">Stage:</b> ${Monstre.attribute.stage} <b style="color:#102675;">  Weight (g): </b>${Monstre.attribute.weight}</dt>
              <dt><b style="color:#2F1AA9;">Strength: </b>${Monstre.power.strength} <b style="color:#2F1AA9;">  Agility: </b>${Monstre.power.agility}  <b style="color:#2F1AA9;">  Intellegence:</b> ${Monstre.power.intellegence}</dt>
              <dt><b style="color:#2F1AA9;">Hitpoints:</b> ${Monstre.power.hitpoints}  <b style="color:#102F9A;"> Skills:</b> ${Monstre.skill} <b style="color:#102F9A;">  Traits:</b> ${Monstre.trait}</dt>
              <dt><b style="color:#7F0606;">Deadtime:</b> ${formatTime(deadtime)}  <b style="color:#7F0606;"> Endurance:</b> ${formatTime(endurance)}</dt>
              <dt><b style="color:#0D890F;">EvolutiontimeIn:</b> ${formatTime(evolutiontime)}  <b style="color:#029705;"> Stamina:</b> ${formatTime(stamina)}</dt>
              <dt><b style="color:#4B5988;">Variant: </b>${Monstre.variant} <b style="color:#4B5988;">Frozentime:</b> ${Monstre.time.frozentime}</dt>
            </ul>
          </div>`);
        }
        });
    }
  }

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

  document.getElementById('btn-displayall').addEventListener("click", function(event) {
    checkalive = 0;
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("111");
  }, {once: false});

  document.getElementById('btn-displayalive').addEventListener("click", function(event) {
    checkalive = 1;
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("111");
  }, {once: false});

  document.getElementById('btn-displaychosen').addEventListener("click", function(event) {
    checkalive = 2;
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("111");
  }, {once: false});

  //always run
  var intervalId = setInterval(function() {
       getMonstresByOwner(userAccount[0]).then(displayMonstre);
        console.log("interval");
  }, 300000); //300s


  function HatchEgg(uint256_tokenId) {
    $("#Report").append("<li>Hatching Egg...</li>");
    return FTMON.methods.HatchEgg(uint256_tokenId)
    .send({ from: userAccount[0] })
    .on("receipt", function(receipt) {$("#Report").append("<li>Successfully Hatched Egg</li>");})
    .on("error", function(error) {$("#Report").append(error).append("<li>Hatching Failed</li>");});
  }

  document.getElementById('btn-hatchegg').addEventListener("click",async function(event) {
    await HatchEgg(document.getElementById("chosen1").value);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("hatchingegg");
  }, {once: false});


  function mint() {
    $("#Report").append("<li>Minting Egg...</li>");
    return FTMON.methods.mint(userAccount[0], 1)
    .send({ from: userAccount[0] , value: 100000000000000000})
    .on("receipt", function(receipt) {$("#Report").append("<li>Successfully Minted an Egg</li>");})
    .on("error", function(error) {$("#Report").append(error).append("<li>Mint Failed</li>");});
  }

  document.getElementById('btn-mint').addEventListener("click", async function(event) {
    await mint();
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("mintegg");
  }, {once: false});


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
        case 3:
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
    await feedsMonstre(document.getElementById("chosen1").value,0);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("feed 0");
  }, {once: false});
  document.getElementById('btn-giantmeat').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosen1").value,1);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("feed 1");
  }, {once: false});
  document.getElementById('btn-wagyumeat').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosen1").value,2);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("feed 2");
  }, {once: false});
  document.getElementById('btn-grass').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosen1").value,3);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("feed 3");
  }, {once: false});
  document.getElementById('btn-vegetable').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosen1").value,4);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("feed 4");
  }, {once: false});
  document.getElementById('btn-fantomroots').addEventListener("click", async function(event) {
    await feedsMonstre(document.getElementById("chosen1").value,5);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("feed 5");
  }, {once: false});











  async function trainMonstre(uint256_tokenId,uint8_traintype) {
    $("#Report").append("<li>start training...</li>");
    let susstext = "";
    return viewNFT(uint256_tokenId).then(function(Monstre){
        let staminaleft = (new Date().valueOf()/1000 -Monstre.time.stamina)/3600;
        let enduranceleft = (Monstre.time.endurance - new Date().valueOf()/1000)/3600;
    console.log(staminaleft);
    switch(uint8_traintype) {
        case 0:
          susstext = "<p>Successfully trained.</p>Stamina-4hrs, Weight-350, Happy-2, Discipline+5,<p>HP+800, STR+1, INT+1.</p>";
          break;
        case 1:
          susstext = "<p>Successfully trained.</p>Stamina-4hrs, Weight-150, Happy-1, Discipline+5,<p>STR+8, AGI+1, INT+1.</p>";
          break;
        case 2:
          susstext = "<p>Successfully trained.</p>Stamina-4hrs, Weight-400, Happy-1, Discipline+4,<p>STR+2, AGI+8.</p>";
        case 3:
          susstext = "<p>Successfully trained.</p>Stamina-4hrs, Weight-50, Happy-1, Discipline+7,<p>HP+250, INT+9.</p>";
          break;
        case 4:
          susstext = "<p>Successfully trained.</p>Stamina-11hrs, Weight-1000, Happy-5, Discipline+15,<p>HP+2350, STR+3, INT+2.</p>";
          break;
        case 5:
          susstext = "<p>Successfully trained.</p>Stamina-11hrs, Weight-400, Happy-1, Discipline+15,<p>STR+24, AGI+3, INT+3.</p>";
        case 6:
          susstext = "<p>Successfully trained.</p>Stamina-11hrs, Weight-1200, Happy-1, Discipline+10,<p>STR+4, AGI+23.</p>";
          break;
        case 7:
          susstext = "<p>Successfully trained.</p>Stamina-11hrs, Weight-100, Happy-1, Discipline+20,<p>HP+700, INT+23.</p>";
          break;      
        default:
          susstext = "Successfully trained.";
      }
      if (staminaleft <4) { susstext = "Your Monstre has not enough stamina!"
      return;};
      if (enduranceleft <= 0) { 
        susstext = "Your Monstre is dead!"; 
        return;};
      console.log(susstext);
    return FTMON.methods.trainsMonstre(uint256_tokenId,uint8_traintype)
    .send({ from: userAccount[0] })
    .on("receipt", function(receipt) {$("#Report").append(susstext);})
    .on("error", function(error) {$("#Report").append(error).append("<li>Training Failed</li>");});
    });
  }

  document.getElementById('btn-trainint').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosen1").value,3);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 3");
  }, {once: false});
  document.getElementById('btn-trainagi').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosen1").value,2);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 2");
  }, {once: false});
  document.getElementById('btn-trainstr').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosen1").value,1);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 1");
  }, {once: false});
  document.getElementById('btn-trainhp').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosen1").value,0);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 0");
  }, {once: false});
  document.getElementById('btn-trainint+').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosen1").value,7);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 7");
  }, {once: false});
  document.getElementById('btn-trainagi+').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosen1").value,6);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 6");
  }, {once: false});
  document.getElementById('btn-trainstr+').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosen1").value,5);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 5");
  }, {once: false});
  document.getElementById('btn-trainhp+').addEventListener("click", async function(event) {
    await trainMonstre(document.getElementById("chosen1").value,4);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 4");
  }, {once: false});






  function BattleSimulation(uint256_tokenId,uint8_wrong) {
    $("#Report").append("<li>start simulation...</li>");
    return FTMON.methods.BattleSimulation(uint256_tokenId,uint8_wrong)
    .send({ from: userAccount[0] })
    .on("receipt", function(receipt) {$("#Report").append("successfully TX");
    
        $('<tr>').append(
            $('<td>').text(receipt.events.SimulationResult.returnValues[1].id),
            $('<td>').text(receipt.events.SimulationResult.returnValues[2].won),
            $('<td>').text(receipt.events.SimulationResult.returnValues[3].hash)
        ).appendTo('#Report');
    $("#Report").append(receipt.events.SimulationResult.returnValues.toString());
        console.log(receipt.events.SimulationResult.returnValues);})
    .on("error", function(error) {$("#Report").append(error).append("<li>Simulation Failed</li>");});
  }

  document.getElementById('btn-battleSim').addEventListener("click", async function(event) {
    await BattleSimulation(document.getElementById("chosen1").value,document.getElementById("battlesimopp").value);
    getMonstresByOwner(userAccount[0]).then(displayMonstre);
    console.log("train 4");
  }, {once: false});
