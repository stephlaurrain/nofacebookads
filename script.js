// ==UserScript==
// @name         NoFacebookAds
// @namespace    https://tampermonkey.net/
// @version      1.666
// @description  Hide sponsored and suggeste darticles on Facebook
// @author       BlackHoleSon
// @match        https://www.facebook.com/*
// @license MIT
// @grant        none
// ==/UserScript==

const HideAds = () => {
  try {
   const maindiv = document.querySelector('div[role="feed"]');
     var feeds = maindiv.querySelectorAll('div[data-pagelet*="FeedUnit_"');
 
   feeds.forEach(feed => {
 
      if(feed.style.display != "none"){
          try {
             var sponsored = feed.querySelector('a[aria-label="Sponsorisé"]');
             if (sponsored!==null) {
                 feed.style.display = "none";
             }
             var suggesteds = feed.querySelectorAll('span[dir="auto"]');
             suggesteds.forEach(suggested =>{
                     if (suggested.textContent.includes("Suggestion")){
                         feed.style.display = "none";
 
                     }
 
                 });
          }
          catch (e) {
          }
     }
   });
  }
  catch (e) {
  }
 }
 
 HideAds()
 setTimeout(HideAds, 1000);
 (function () {
   window.addEventListener('scroll', () => {
     HideAds()
     setTimeout(HideAds, 1000);
   });
 
 
 })();