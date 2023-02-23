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
}

function arcaneReduceHpAp() {
    console.log('Inside arcane button');
    fungusHP-=14;
    myAP-=12;
    console.log('Current fungus HP:', fungusHP);
    console.log('Current myAP:', myAP);
    // $('.hp-text').html(`
    //     <div class="hp-text">${fungusHP} HP</div>
    //  `);
    // $('.ap-text').html(`
    //     <div class="ap-text">${myAP} AP</div>
    //  `);
    // if (fungusHP === 2) {
    //     fungusHP = 0;
    // }
    // if (myAP === 4) {
    //     myAP = 0;
    // }
    render()
}

function render() {
    $('.hp-text').html(`
        <div class="hp-text">${fungusHP} HP</div>
     `);
    $('.ap-text').html(`
        <div class="ap-text">${myAP} AP</div>
     `);
    if (fungusHP <= 0) {
        fungusHP = 0;
    }
    if (myAP <= 0) {
        myAP = 0;
    }
}