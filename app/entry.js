'use strict';
import $ from 'jquery';

const card = $('.card');
const ta = $('#ta');
const ct = $('#ct');
const gacha5 = $('#gacha5');
const gacha6 = $('#gacha6');
const gacha8 = $('#gacha8');
const db = $('#db');

gacha6.click(() => {
  gachaAnimation();
  card.removeClass().addClass('card');
  ta.removeClass();
  const rarity = getRandomInt(1,1000);
  switch (true) {
    case (rarity <= 1):
      gachaM();
      ta.attr('maxlength','484');
      gacha8.html('MYTHIC').css('font-family','Monotype Corsiva');
      break;
    case (rarity <= 10):
      gachaL();
      ta.attr('maxlength','400');
      gacha8.html('LEGEND').css('font-family','Monotype Corsiva');
      break;
    case (rarity <= 100):
      gachaE();
      ta.attr('maxlength','324');
      gacha8.html('EPIC').css('font-family','HG行書体');
      break;
    case (rarity <= 300):
      gachaR();
      ta.attr('maxlength','256');
      gacha8.html('RARE').css('font-family','SimSun');
      break;
    case (rarity <= 600):
      gachaU();
      ta.attr('maxlength','196');
      gacha8.html('UNCOMMON').css('font-family','cursive');
      break;
    case (rarity <= 1000):
      gachaC();
      ta.attr('maxlength','144');
      gacha8.html('COMMON').css('font-family','cursive');
      break;
  };
});

db.click(() => {
  if(confirm('本当に投稿を削除しますか？')){
    return true;
  }else{
    return false;
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gachaAnimation() {
  gacha6.animate({ marginTop: '86px'}, 500),
  gacha5.animate({ marginTop: '65px' },500);
  gacha6.animate({ marginTop: '20px'}, 1000),
  gacha5.animate({ marginTop: '41px' },1000);
}

function addCard(a) {
  card.addClass(a);
  ta.addClass(a);
  ct.attr('value',a);
}

function gachaM() {
  let cr = getRandomInt(1,2);
  switch (cr) {
    case 1:
      addCard('M1');
    break;
    case 2:
      addCard('M2');
    break;
  };
}

function gachaL() {
  let cr = getRandomInt(1,2);
  switch (cr) {
    case 1:
      addCard('L1');
    break;
    case 2:
      addCard('L2');
    break;
  };
}

function gachaE() {
  let cr = getRandomInt(1,2);
  switch (cr) {
    case 1:
      addCard('E1');
    break;
    case 2:
      addCard('E2');
    break;
  };
}

function gachaR() {
  let cr = getRandomInt(1,9);
  switch (cr) {
    case 1:
      addCard('R1');
    break;
    case 2:
      addCard('R2');
    break;
    case 3:
      addCard('R3');
    break;
    case 4:
      addCard('R4');
    break;
    case 5:
      addCard('R5');
    break;
    case 6:
      addCard('R6');
    break;
    case 7:
      addCard('R7');
    break;
    case 8:
      addCard('R8');
    break;
    case 9:
      addCard('R9');
    break;
  };
}

function gachaU() {
  let cr = getRandomInt(1,12);
  switch (cr) {
    case 1:
      addCard('U1');
    break;
    case 2:
      addCard('U2');
    break;
    case 3:
      addCard('U3');
    break;
    case 4:
      addCard('U4');
    break;
    case 5:
      addCard('U5');
    break;
    case 6:
      addCard('U6');
    break;
    case 7:
      addCard('U7');
    break;
    case 8:
      addCard('U8');
    break;
    case 9:
      addCard('U9');
    break;
    case 10:
      addCard('U10');
    break;
    case 11:
      addCard('U11');
    break;
    case 12:
      addCard('U12');
    break;
  };
}

function gachaC() {
  let cr = getRandomInt(1,8);
  switch (cr) {
    case 1:
      addCard('C1');
    break;
    case 2:
      addCard('C2');
    break;
    case 3:
      addCard('C3');
    break;
    case 4:
      addCard('C4');
    break;
    case 6:
      addCard('C5');
    break;
    case 6:
      addCard('C6');
    break;
    case 7:
      addCard('C7');
    break;
    case 8:
      addCard('C8');
    break;
  };
}
