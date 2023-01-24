
let story=document.getElementById("story");
let ach=document.getElementById("ach");
let rank=document.getElementById("rank");
let inv=document.getElementById("inv");
let firstClick=false;
let musicOff=true;


//Achievements variables 
let killCount=0;
let goblinCount=0;
let clickCount=0;
let firstArtFound=false;
let lastArtFound=false;

// inventory 
let inventory =[];

//Quest variables
let gainGold;

let newEnemyNum;
let newNpc;
let newNpcDesc;
let newEnvir;
let newEnemyDesc;
let newEnemy; 

let newQuestItem;
let newQuestAction;
let newQuestDesc;
let quest;

let gainXp;
let accumXp=0;
let levelBreak=120;
let rare;


let equipment;
let equipChoice;
let foundItem=false;
let foundArt=false; 
let chanceOfArt;
let printInventory=" ";
let rankTitle;
let endGame=false;

// seperated from explore  so that you can increase item stats forever. 
let lowLowNum=0;
let lowMidNum=3;
let lowHighNum=10;
let midLowNum=15;
let midMidNum= 30;
let midHighNum=50;
let highLowNum=75;
let highMidNum=100;
let highHighNum=125;
let epicNum=300;

let enviroment=[" Woods of the Topsy Turvy King", "Forest of the Humourless Harlequins","Forgotten Graveyard of Ermm..","Castle of the Blackest Knight","Farm of Old McYondor","Bouncy Castle of Borgon",
"Swamp of the Slimy Hobbits", "Lightest Dungeons", "Ruins of the Fallen Turnip God","Fun House of Eternal Damnation", "Wardrobes of Lady L Moore"]

let enemyDescription=["deranged","tiny","drunk","sadistic","nihilistic","hungry","psychopathic","malnourished","zealous","hot-headed","mad","bitter","hateful","racist"]

let enemy= ["hobbits","ponies ","farmers","kobolds","gnomes","jesters","harlequins","elves","druids","man size giants","goblins","dwarves","werefishe","cowmen","imps","fairies","bandit","bards",
                "hermits","rangers","thieves","knights","rogues","orcs"];

let npc= ["hobbit","pony ","farmer","kobold","gnome","jester","harlequin","elf","druid","giant","goblin","dwarf","werefish","cowman","imp","fairy","bandit","bard",
    "hermit","ranger","thief","knight","rogue","orc"];

let npcDescription=["heart broken","tiny"," skinny","peaceful","silly","young", "shy","talkative", "nihilistic","hungry","lovestruck","sarcastic","forelorn",
"happy","friendly","optimistic","mysterious","beautiful","malnourished","drunk"]

let questDescription=["mysterious","cursed","valuable","holy","damaged","precious","talking","blood soaked","corrupted","beautiful"]
let questItem=["Sword","Jewel","Artifact","Earring","Book","Statue","Figurine","Pendant","Dress","Puzzle Box","Love Locket","Bone Flute","Rag Doll","Voodoo Doll"]

let questAction=["deliver", "guard","fetch","steal","find","destroy","collect"]

let Art=["Bone Flute of Lim Dul the Hateful","Gargut's Final Death Mask","Necro's Orb of Absolute Chaos","Morgan's Cursed Will","Modo Evil Eye","Bone of Turgot","Skull of Bobo",
"Drums of Hodo","Scroll of Dungath","Mirror of Kalandra"]

let lowLowWeapons=["Pointy Feather","Sharp Twig ","Blind Faith","Fist of Hay"];
let lowLowArmours=["Old Man Pajamas"," Spaghetti Hoop Mail ","Wrapping Paper","Sun Lotion"];
let lowLowRings=[" Gummy Ring", "Daisy Ring ","Rusty Nut","Ring of Absolute Uselessness"];
let lowLowTrinkets=["Old Sock", "Goblin Tooth","Gem of Equal Blessing/Curse","Pog"];

let lowMidWeapons=["Feather Duster"," Butter Knife ","Rolling Pin","Toliet Plunger"];
let lowMidArmours=["Tin Foil Plate Mail","Christmas Jumper","Mud Armour","Card Board Box"];
let lowMidRings=["Onion Ring", "Doughnut","Shiny Nut","Promise Ring"];
let lowMidTrinkets=["Lucky Coin", "KeyRing","Amulet of Nothingness","Orc Skull"];

let lowHighWeapons=["Bag of Marbles","Dangerous Looking Rock","Letter Opener Knife","A Ball and Sock"];
let lowHighArmours=["Bear Rug "," Lumberjacks Vest ","Rags from the Ragman","Wooden Target Sign"];
let lowHighRings=[" Stone Ring", "Wood Ring ","Ring of 1% Additional Power","Ring of 1% Additional Luck "];
let lowHighTrinkets=["Rabbit's Paw", "Ugly RagDoll","Music Box","Bone Flute"];


let midLowWeapons=["Fish Bone Spear","Big Bone","SlingShot","Frying Pan"];
let midLowArmours=["Fur Coat","Leather Jacket","Extra Thick Jumper","Wizard Robe"];
let midLowRings=["Rusty Ring", "The One Ring (Replica) ","Ring of 1% Additional Health","Ring of 2% Additional Luck"];
let midLowTrinkets=["Voodoo Doll", "Mildly Cursed Gem","Goblin Puppet","Love Locket"];

let midMidWeapons=["Hunting Knife","Wood Axe","Rusty Sword","Wood Club"];
let midMidArmours=["Tin Plate Armour","Fur Armour","Leather Armour","Robe of Lesser Protection"];
let midMidRings=["Silver Ring", "Copper Ring ","Gold Ring","Luck Ring"];
let midMidTrinkets=["Silver Amulet", "Bronze Amulet","Earring of Luck ","Grieving Stone"];

let midHighWeapons=["Mithral Dagger","Bastard Sword","Crossbow","Orc Mace"];
let midHighArmours=["Chain Mail","Rat Skin Tunic ","Studded Leather Armour","Coat of Protection"];
let midHighRings=["Ring of Strength", "Ring of Charm ","Ring of Magic","Ring of Dexterity  "];
let midHighTrinkets=["Gold Amulet", "Amulet of Power","Earring of Fear","Bracelet of Quick Thinking"];


let highLowWeapons=["Blunderbuss","Battle Axe","War Hammer","Demon Bone Shiv"];
let highLowArmours=["Mithral Chain Mail","Full Plated Armour","Troll Hide Armour","Spiked Armour"];
let highLowRings=[" Ring of Ice", "Ring of Fire ","Ring of Strength ","Ring of Chaos"];
let highLowTrinkets=["Ice Amulet", "Fire Amulet"," Amulet of Power","Amulet Of Protection"];

let highMidWeapons=["Holy Sword","FaceBreaker Gauntlet","Ratling Death Claws","Demon Axe"];
let highMidArmours=["Dragon Scale Armour","Holy Plated Armour","Grand Wizard Robe","Shadow Armour"];
let highMidRings=[" Ring of The Ice Troll ", "Ring of The Fire Snake ","Ring of The Chaos Giant ","Ring of Want"];
let highMidTrinkets=[" Greater Ice Amulet", "Greater Fire Amulet"," Greater Amulet of Power","Greater Gem of Doom"];

let highHighWeapons=["Power Sword","Doom Hammer","Tovek Hand Cannon","Death Lance of Belia"];
let highHighArmours=["Armour of Greater Protection","Dragon Prince Armour ","Brimstone Full Plated Armour","Berserker Armour"];
let highHighRings=[" Ring of Complete Destruction", "Ring of Unlimited Power ","The One Ring","Demon Ring"];
let highHighTrinkets=["Genie in a Lamp", "Mechanical Beast"," Crimson Beheri","Lament Configuration Box"];


let epicWeapons=["Heavy Bolter","Power Sword","Assault Cannon","Force Sword"];
let epicArmours=["Power Armour","Terminator Armour","Centurion Armour","Runic Power Armour"];
let epicRings=["Inquisitor Signet Ring", "Teleport Transponder Ring ","Adeptus Astartes Signet Ring "," Teleport Transponder Ring"];
let epicTrinkets=["Krak Grenades", "Eye Implant"," Servo-Skull","Healer's Aegis"];



class Player {
    constructor(xp,gold,level,armour,weapon,ring,trinket,strength,magic,dexterity,charisma,build){
        this.xp=xp;
        this.gold=gold;
        this.level=level;
        this.armour=armour;
        this.weapon=weapon;
        this.ring=ring;
        this.trinket=trinket;
        this.strength=strength;
        this.magic=magic
        this.dexterity=dexterity;
        this.charisma=charisma; 
        this.build=build;
    }
}

let player=new Player(0,0,1,"empty","empty","empty","empty",5,5,5,5,"Rogue")


function saveGame(){
    let gameSave={
        player:player,
        killCount:killCount,
        goblinCount:goblinCount,
        clickCount:clickCount,
        firstArtFound:firstArtFound,
        lastArtFound:lastArtFound,
        inventory:inventory,
        printInventory:printInventory

    };

    localStorage.setItem("gameSave", JSON.stringify(gameSave));

}

function loadGame(){
    let savedGame=JSON.parse(localStorage.getItem("gameSave"));

    if (typeof savedGame.player !=="undefined") player= savedGame.player;
    if (typeof savedGame.killCount !=="undefined") killCount= savedGame.killCount;
    if (typeof savedGame.clickCount !=="undefined") clickCount= savedGame.clickCount;
    if (typeof savedGame.firstArtFound !=="undefined") firstArtFound= savedGame.firstArtFound;
    if (typeof savedGame.lastArtFound !=="undefined") lastArtFound= savedGame.lastArtFound;
    if (typeof savedGame.inventory !=="undefined") inventory= savedGame.inventory;
    if (typeof savedGame.printInventory !=="undefined") printInventory= savedGame.printInventory;
    
};

function resetGame(){


    if (confirm("Are you sure you want to reset the game?"))
    {
    
        let  gameSave={};
        localStorage.setItem("gameSave",JSON.stringify(gameSave));
        location.reload();
    }
}

document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.which==82){

        resetGame();
    }

})

window.onload = function(){
    loadGame();
    firstClick=true;
    explore();
};

function Dice(side){
    let result=Math.floor(Math.random()*side)+1;
        return result;
    }

function rarity(){

    if (player.level<=10){

        rare=80;
    }

    else if  (player.level >=11 && player.level <=15 ){
        rare=100;
    }

    else if  (player.level >=16 && player.level <=20 ){
        rare=140;
    }

    else if  (player.level >=21 && player.level <=27){
        rare=160;
    }

    else{
        rare=300;
    }
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}


function explore(){
    
    document.querySelector("#theme").play();    // because onload is played first hence why let bkMusic wont' work. 

    if (firstClick==true){       // Prevents first 'explore()' call on window.onload to increase any stats as we just need it to load data 

    }


    else{

        clickCount+=1;
        gainGold=Dice(6)+Math.ceil(player.charisma/3)
        player.gold+=gainGold
        gainXp=Dice(5)+Math.ceil(player.level/2);
        player.xp+=gainXp;
        accumXp+=gainXp;

        newEnemyNum=Dice(5)+Math.ceil(player.strength/3)
        newNpc =randomChoice(npc); 
        newNpcDesc=randomChoice(npcDescription);
        newEnvir=randomChoice(enviroment); 
        newEnemyDesc=randomChoice(enemyDescription);
        newEnemy =randomChoice(enemy); 
        newQuestItem=randomChoice(questItem);
        newQuestAction=randomChoice(questAction) ;
        newQuestDesc=randomChoice(questDescription);
        killCount+=newEnemyNum;
        
        if (newEnemy=="goblins"){
    
            goblinCount+=newEnemyNum;
    
        }

    }

        if (accumXp>levelBreak){

            player.level+=1
            accumXp=0;
            levelBreak+=50+(player.level*10);
    
            player.strength+=Dice(4)-1;
            player.magic+=Dice(4)-1;
            player.dexterity+=Dice(4)-1;
            player.charisma+=Dice(4)-1;

            let strDecide=player.strength+2;
            let magDecide=player.magic+2;
            let dexDecide=player.dexterity+2;
            let chrDecide=player.charisma+2;

            if ((player.strength>magDecide) &&(player.strength>dexDecide) &&(player.strength>chrDecide)){

                player.build="Warrior"
            }

            else if ((player.magic>strDecide) &&(player.magic>dexDecide) &&(player.magic>chrDecide)){

                player.build="Mage"
            }

            else if ((player.dexterity>strDecide) &&(player.dexterity>magDecide) &&(player.dexterity>chrDecide)){

                player.build="Thief"
            }

            else if ((player.charisma>strDecide) &&(player.charisma>magDecide) &&(player.charisma>dexDecide)){

                player.build="Bard"
            }

            if (player.build=="Warrior"){

                player.strength+=2
            }

            if (player.build=="Mage"){

                player.magic+=2
            }

            if (player.build=="Thief"){

                player.dexterity+=2
            }

            if (player.build=="Bard"){

                player.charisma+=2
            }

        }

    rarity()

    equipment=Dice(rare);

    if (firstClick) {

        equipment=100;    // Prevents first 'explore()' call on window.onload to increase any stats as we just need it to load data 
    } 

    if (equipment==1){
        foundItem=true;
        equipChoice=Dice(4)-1;

            if (player.level<=3){
                equipNew=lowLowWeapons[equipChoice];
                lowLowNum +=Dice(2);
                finalUpgrade=equipNew+(" + "+lowLowNum)
            }

            else if  (player.level >=4 && player.level <=6 ){
                equipNew=lowMidWeapons[equipChoice]; 
                lowMidNum +=Dice(3)-1;
                finalUpgrade=equipNew+(" + "+lowMidNum) 
            }

            else if  (player.level >=7 && player.level <=9 ){
                equipNew=lowHighWeapons[equipChoice]; 
                lowHighNum+=Dice(10)-2;
                finalUpgrade=equipNew+(" + "+lowHighNum) 
            }

            else if  (player.level >=10 && player.level <=12 ){
                equipNew=midLowWeapons[equipChoice]; 
                midLowNum +=Dice(15)-2;
                finalUpgrade=equipNew+(" + "+midLowNum) 
            }

            else if  (player.level >=13 && player.level <=15 ){
                equipNew=midMidWeapons[equipChoice]; 
                midMidNum += Dice(20)-4;
                finalUpgrade=equipNew+(" + "+midMidNum) 
            }

            else if  (player.level >=16 && player.level <=18 ){
                equipNew=midHighWeapons[equipChoice]; 
                midHighNum+=Dice(25)-4;
                finalUpgrade=equipNew+(" + "+midHighNum) 
            }

            else if  (player.level >=19 && player.level <=21 ){
                equipNew=highLowWeapons[equipChoice]; 
                highLowNum +=Dice(30)-6;
                finalUpgrade=equipNew+(" + "+highLowNum) 
            }

            else if  (player.level >=22 && player.level <=24 ){
                equipNew=highMidWeapons[equipChoice]; 
                highMidNum += Dice(35)-6;
                finalUpgrade=equipNew+(" + "+highMidNum) 
            }

            else if  (player.level >=25 && player.level <=27){
                equipNew=highHighWeapons[equipChoice]; 
                highHighNum+=Dice(40)-8;
                finalUpgrade=equipNew+(" + "+highHighNum) 
            }

            else{
                equipNew=epicWeapons[equipChoice];
                epicNum+=Dice(50)-15;
                finalUpgrade=equipNew+(" + "+epicNum)  
            }
            
            player.weapon=finalUpgrade;
        
    }

    else if (equipment==2){
        foundItem=true;
        equipChoice=Dice(4)-1;

        if (player.level<=3){

            equipNew=lowLowArmours[equipChoice];  
            lowLowNum +=Dice(2);
            finalUpgrade=equipNew+(" + "+lowLowNum)
        }

        else if  (player.level >=4 && player.level <=6 ){
            equipNew=lowMidArmours[equipChoice]; 
            lowMidNum +=Dice(3)-1;
            finalUpgrade=equipNew+(" + "+lowMidNum) 
        }

        else if  (player.level >=7 && player.level <=9 ){
            equipNew=LowHighArmours[equipChoice]; 
            lowHighNum+=Dice(10)-2;
            finalUpgrade=equipNew+(" + "+lowHighNum) 
        }

        else if  (player.level >=10 && player.level <=12 ){
            equipNew=midLowArmours[equipChoice]; 
           midLowNum +=Dice(15)-2;
            finalUpgrade=equipNew+(" + "+midLowNum) 
        }

        else if  (player.level >=13 && player.level <=15 ){
            equipNew=midMidArmours[equipChoice];
            midMidNum += Dice(20)-4;
            finalUpgrade=equipNew+(" + "+midMidNum) 
        }

        else if  (player.level >=16 && player.level <=18 ){
            equipNew=midHighArmours[equipChoice]; 
            midHighNum+=Dice(25)-4;
            finalUpgrade=equipNew+(" + "+midHighNum) 
        }

        else if  (player.level >=19 && player.level <=21 ){
            equipNew=highLowArmours[equipChoice]; 
            highLowNum +=Dice(30)-6;
            finalUpgrade=equipNew+(" + "+highLowNum) 
        }

        else if  (player.level >=22 && player.level <=24 ){
            equipNew=highMidArmours[equipChoice]; 
            highMidNum += Dice(35)-6;
            finalUpgrade=equipNew+(" + "+highMidNum) 
        }

        else if  (player.level >=25 && player.level <=27){
            equipNew=highHighArmours[equipChoice]; 
            highHighNum+=Dice(40)-8;
            finalUpgrade=equipNew+(" + "+highHighNum) 
        }

        else{
            equipNew=epicArmours[equipChoice];
            epicNum+=Dice(50)-15;
            finalUpgrade=equipNew+(" + "+epicNum)  
        }
        
        player.armour=finalUpgrade;
        
    }

    else if (equipment==3){
        foundItem=true;
        equipChoice=Dice(4)-1;

        if (player.level<=3){

            equipNew=lowLowRings[equipChoice];  
            lowLowNum +=Dice(2);
            finalUpgrade=equipNew+(" + "+lowLowNum)
        }

        else if  (player.level >=4 && player.level <=6 ){
            equipNew=lowMidRings[equipChoice]; 
            lowMidNum +=Dice(3)-1;
            finalUpgrade=equipNew+(" + "+lowMidNum) 
        }

        else if  (player.level >=7 && player.level <=9 ){
            equipNew=LowHighRings[equipChoice]; 
            lowHighNum+=Dice(10)-2;
            finalUpgrade=equipNew+(" + "+lowHighNum) 
        }

        else if  (player.level >=10 && player.level <=12 ){
            equipNew=midLowRings[equipChoice];
            midLowNum +=Dice(15)-2;
            finalUpgrade=equipNew+(" + "+midLowNum) 
        }

        else if  (player.level >=13 && player.level <=15 ){
            equipNew=midMidRings[equipChoice]; 
            midMidNum += Dice(20)-4
            finalUpgrade=equipNew+(" + "+midMidNum) 
        }

        else if  (player.level >=16 && player.level <=18 ){
            equipNew=midHighRings[equipChoice]; 
            midHighNum+=Dice(25)-4;
            finalUpgrade=equipNew+(" + "+midHighNum) 
        }

        else if  (player.level >=19 && player.level <=21 ){
            equipNew=highLowRings[equipChoice]; 
            highLowNum +=Dice(30)-6;
            finalUpgrade=equipNew+(" + "+highLowNum) 
        }

        else if  (player.level >=22 && player.level <=24 ){
            equipNew=highMidRings[equipChoice]; 
            highMidNum += Dice(35)-6;
            finalUpgrade=equipNew+(" + "+highMidNum) 
        }

        else if  (player.level >=25 && player.level <=27){
            equipNew=highHighRings[equipChoice]; 
            highHighNum+=Dice(40)-8;
            finalUpgrade=equipNew+(" + "+highHighNum) 
        }

        else{
            equipNew=epicRings[equipChoice];
            epicNum+=Dice(50)-15;
            finalUpgrade=equipNew+(" + "+epicNum)  
        }
        
        player.ring=finalUpgrade;
        
    }

    else if (equipment==4){
        foundItem=true;
        equipChoice=Dice(4)-1;

        if (player.level<=3){

            equipNew=lowLowTrinkets[equipChoice];  
            lowLowNum +=Dice(2);
            finalUpgrade=equipNew+(" + "+lowLowNum)
        }

        else if  (player.level >=4 && player.level <=6 ){
            equipNew=lowMidTrinkets[equipChoice]; 
            lowMidNum +=Dice(3)-1;
            finalUpgrade=equipNew+(" + "+lowMidNum) 
        }

        else if  (player.level >=7 && player.level <=9 ){
            equipNew=LowHighTrinkets[equipChoice]; 
            lowHighNum+=Dice(10)-2;
            finalUpgrade=equipNew+(" + "+lowHighNum) 
        }

        else if  (player.level >=10 && player.level <=12 ){
            equipNew=midLowTrinkets[equipChoice]; 
            midLowNum +=Dice(15)-2;
            finalUpgrade=equipNew+(" + "+midLowNum) 
        }

        else if  (player.level >=13 && player.level <=15 ){
            equipNew=midMidTrinkets[equipChoice]; 
            midMidNum += Dice(20)-4;
            finalUpgrade=equipNew+(" + "+midMidNum) 
        }

        else if  (player.level >=16 && player.level <=18 ){
            equipNew=midHighTrinkets[equipChoice]; 
            midHighNum+=Dice(25)-4;
            finalUpgrade=equipNew+(" + "+midHighNum) 
        }

        else if  (player.level >=19 && player.level <=21 ){
            equipNew=highLowTrinkets[equipChoice]; 
            highLowNum +=Dice(30)-6;
            finalUpgrade=equipNew+(" + "+highLowNum) 
        }

        else if  (player.level >=22 && player.level <=24 ){
            equipNew=highMidTrinkets[equipChoice]; 
            highMidNum += Dice(35)-6;
            finalUpgrade=equipNew+(" + "+highMidNum) 
        }

        else if  (player.level >=25 && player.level <=27){
            equipNew=highHighTrinkets[equipChoice]; 
            highHighNum+=Dice(40)-8;
            finalUpgrade=equipNew+(" + "+highHighNum) 
        }

        else{
            equipNew=epicTrinkets[equipChoice];
            epicNum+=Dice(50)-15;
            finalUpgrade=equipNew+(" + "+epicNum)  
        }
        
        player.trinket=finalUpgrade;
        
    }

    else{

        foundItem=false;
    }

    if (firstClick){                          // Prevents first 'explore()' call on window.onload to increase any stats as we just need it to load data  

        quest=" Adventure awaits !! ";
    }

    else{

        quest="You explore the "+newEnvir+". You come across a "+newNpcDesc+" "+newNpc+". The "+newNpc+" request you to " +newQuestAction+" a "+newQuestDesc+" "+newQuestItem+
        ". You encounter "+newEnemyNum+" "+newEnemyDesc+" "+newEnemy+" which you defeated to "+newQuestAction+" the item. "+"You gain "+gainGold+" gold and "+gainXp+" experience points.";
    
        if (foundItem==true){
    
           quest +=" You acquire some better loot( "+finalUpgrade+" )";
           foundItem=false;
        }
    
        else{
    
        }
    
        chanceOfArt=Dice(200);
    
            if (chanceOfArt==1){
    
                randomArt=Dice(10)-1
                pickedArt=Art[randomArt];
    
                let exists=inventory.includes(pickedArt);
    
                    if (exists==false){
                        firstArtFound=true;   // achievement 
                        inventory.push(pickedArt)
                        quest += "You find the "+pickedArt;
                    }
    
                    else{
    
                    }
                    printInventory="";   //refresh the Screen so it print fresh ( it will duplicate if not)
                    for (let i = 0; i < inventory. length; i++) {
                    printInventory+= " *"+(i+1)+")" + inventory[i]+"<br>";
                    
                    }
            }
    
            else{
    
            }
        
        if (endGame==false){
    
            if (inventory.length==10){
    
                lastArtFound=true;  // achievement 
                alert("you have collected all 10 Artifacts !! You have saved the world and now can retire!")
                alert("Or.. You can continue playing for better loot and power !!  ")
                endGame=true;
    
            }
        
        }


    }

    let achTag="Achievement:"

    if (clickCount>1){

         achTag+=" [Hero's First Step] ";
    }

    if (clickCount>99){
        achTag+=" [100 Quests warm up] "
    }

    if (firstArtFound){

        achTag+="[First one found ]"
    }

    if (goblinCount>100){

        achTag+=" [Goblin Slayer] ";
    }

    if (killCount>10000){

        achTag+=" [Master Killer] ";
    }

    if (clickCount>10000){

        achTag+=" [After 10,000 quests..] ";
    }

    if (lastArtFound){

        achTag+="[Main Quest completed]"
    }


    
    if (player.level >=1 && player.level <=3){

        rankTitle= "Ranking: The Village Punch Bag" 
    }

    else if  (player.level >=4 && player.level <=5 ){

        rankTitle= "Ranking: The Village Weakling ( Making Progress  ) "
    }

    else if  (player.level >=6 && player.level <=7 ){

        rankTitle= "Ranking: The Average Joe (No one cares) "
    }

    else if  (player.level >=8 && player.level <=9 ){

        rankTitle= "Ranking: The Beta Adventurer (Some nerds respect you)"
    }

    else if  (player.level >=10 && player.level <=11 ){

        rankTitle= "Ranking: The Mighty Beta Adventurer (Goblins fear you )"
    }

    else if  (player.level >=12 && player.level <=13 ){

        rankTitle= "Ranking: The Try-Hard Hero (Sometimes..You win)"
    }

    else if  (player.level >=14 && player.level <=16 ){

        rankTitle= "Ranking: Professional Hero ( No more free work for you)"
    }

    else if  (player.level >=14 && player.level <=16 ){

        rankTitle= "Ranking: 1st Class Hero ( They come to you first)"
    }

    else if  (player.level >=17 && player.level <=19 ){

        rankTitle= "Ranking The Champion of Man (The best a man can be )"
    }

    else if  (player.level >=17 && player.level <=19 ){

        rankTitle= "Ranking: Legendary Hero (Books are written about you)"
    }

    else {

        rankTitle= "Ranking: The Chosen one !!" 
    }

    firstClick=false;    // after the first explore call (window.Onload) then progression can be made 
    inv.innerHTML=printInventory;
    rank.innerHTML=rankTitle; 
    ach.innerHTML=achTag;
    story.innerHTML=quest;

    document.getElementById("goldCount").innerHTML=player.gold;
    document.getElementById("xpCount").innerHTML=player.xp;
    document.getElementById("levelCount").innerHTML=player.level;
    document.getElementById("playerArmour").innerHTML=player.armour;
    document.getElementById("playerWeapon").innerHTML=player.weapon;
    document.getElementById("playerRing").innerHTML=player.ring;
    document.getElementById("playerTrinket").innerHTML=player.trinket;
    document.getElementById("playerStr").innerHTML=player.strength;
    document.getElementById("playerMag").innerHTML=player.magic;
    document.getElementById("playerDex").innerHTML=player.dexterity;
    document.getElementById("playerChr").innerHTML=player.charisma;
    document.getElementById("playerClass").innerHTML=player.build;

    saveGame()
}
