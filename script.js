$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let myAP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    // Add event handling for the 'arcane-sceptre' button
    $('.attack-btn.arcane-sceptre').on('click', arcaneReduceHpAp);

    // Add event handling for the 'entangle' button
    $('.attack-btn.entangle').on('click', entangleReduceHpAp);

    $('.attack-btn.dragon-blade').on('click', dbReduceHpAp);

    $('.attack-btn.star-fire').on('click', sfReduceHpAp);
}

function arcaneReduceHpAp() {
    console.log('Inside arcane button');
    fungusHP-=14;
    myAP-=12;
    console.log('Current fungus HP:', fungusHP);
    console.log('Current myAP:', myAP);
    if (fungusHP <= 0) {
        fungusHP = 0;
    }
    if (myAP <= 0) {
        myAP = 0;
    }
    render()
}

function entangleReduceHpAp() {
    console.log('Inside entangle button');
    fungusHP-=9;
    myAP-=23;
    console.log('Current fungus HP:', fungusHP);
    console.log('Current myAP:', myAP);
    if (fungusHP <= 0) {
        fungusHP = 0;
    }
    if (myAP <= 0) {
        myAP = 0;
    }
    render()
}

function dbReduceHpAp() {
    console.log('Inside dbReduceHpAp button');
    fungusHP-=47;
    myAP-=38;
    console.log('Current fungus HP:', fungusHP);
    console.log('Current myAP:', myAP);
    if (fungusHP <= 0) {
        fungusHP = 0;
    }
    if (myAP <= 0) {
        myAP = 0;
    }
    render()
}

function sfReduceHpAp() {
    console.log('Inside sfReduceHpAp button');
    fungusHP-=25;
    myAP-=33;
    console.log('Current fungus HP:', fungusHP);
    console.log('Current myAP:', myAP);
    if (fungusHP <= 0) {
        fungusHP = 0;
    }
    if (myAP <= 0) {
        myAP = 0;
    }
    render()
}

function render() {
    $('.hp-text').html(`
        <div class="hp-text">${fungusHP} HP</div>
     `);
    $('.ap-text').html(`
        <div class="ap-text">${myAP} AP</div>
     `);
    if (fungusHP === 0) {
        $('.freaky-fungus.walk').replaceWith('<div class="freaky-fungus dead"></div>')
    }
    else if (myAP === 0) {
        $('.freaky-fungus.walk').replaceWith('<div class="freaky-fungus jump"></div>')
    }
    if (myAP === 0) {
        $('.attack-btn').replaceWith()
    }
}