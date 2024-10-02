const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor="white";
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  cursor.style.top = x;
  cursor.style.left = y;
  
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px"; 
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// IMAGENES Y TEXTOS ALEATORIOS

let images = [];
let textos = [
  "This reading conveys a feeling of uncertainty. You don't know where you're going. Nothing seems stable enough to tip the scales, and you just want to go home. You feel like a child again, facing an unknown world. No one warned you it would be this way. Maybe you should allow yourself to be a little delusional, stretch beyond the realm of logic. You can't control everything, so you might as well enjoy the chaos. In the end, everything will be okay.",
  "Do you feel stuck? You don't want to make the wrong move, so you'd rather not move at all.  You can’t fail and that keeps you in a frozen state of constant worry, always teetering on the edge of the cliff. Maybe you're sabotaging yourself even before starting, because you won’t do it right anyway.Perhaps you need to regulate your nervous system a bit. This card urges you to take risks, make mistakes, and even be reckless. Jump off the cliff (not literally).",
  "This reading talks about broken trust and feeling betrayed. It's a heavy feeling, realizing you were too trusting and were walking blindly towards a cliff, unaware of the deep fall ahead. You took a leap of faith with something, and you may regret it. Maybe you miss the times when everything was easy and happy, wishing you could go back to childhood and escape the complicated adult world. Your inner child is trying to tell you something",
  "There may have been recently missed opportunities due to not utilizing your full potential in the moment. But don’t worry over it; remember that it’s your right to be mediocre too. You must embrace mediocrity to truly heal and enter your mentally stable era. Who are you trying to prove your worthyness to? You may be mediocre, but you’re having fun and looking hot.  Mediocrity and delusion are the answer to every problem.",
  "The feeling of inadequacy. You reject yourself from opportunities and don’t even allow yourself the chance to try them, because you always expect to be rejected. Maybe you are your own biggest bully; don’t be so hard on yourself.This card talks about willpower, desire, being resourceful, skill, ability and concentration, all of those thing you don’t think you have. You are doing great, I promise.",
  "These cards suggest that it’s your time to tap into your full potential without hesitation. Don't let perfectionism stop you from taking action. Remember what are you working so hard for: a minimum wage salary that will barely get you through the month.And remember, there's likely a less qualified white man doing the things you want to do mediocrely, and with double the confidence. Be a white man.",
  "You have a feeling of foreboding about something. You always thought you had a sixth sense. That thing you were dreading would always come to happen, and you always were right. Maybe you are just self sabotaging though, and have a pattern for toxic people. Maybe you keep unconciously repeating the same behaviors. Maybe you should stop dating pisces and scorpio moons.",
  "The best advice that you can hear right now is to stay unpredictable. Don't let them know your next move. And the best way to not let them know what your next move is is to not know what your next move is yourself. The best things don´t stem from predictability. Ask yourself if the anecdote is worth the years of therapy.",
  "There is a strange emptiness that fills you when you look upon your journey, as if you have all the pieces but they are not coming together. What is missing? What alienates you from feeling complete? Maybe you are tired of the everyday routine; never liked the idea of waking up early, go to work at your 9-5 job to barely get by, live in house that you can´t buy, and not be allowed to complain about it. Me neither. You are right, buy a farm with some friends and live in a commune with many cats.",
  "Are you in love with them or are you just neurodivergent and have low dopamine? I don´t want to spoil your fun, but maybe you want to reflect on that a little bit. Do you feel you have become a little more obssesed that is healthy?",
  "Are you healed or are you just isolated with no one to trigger you? Do you actually resolved your traumas or do you stop your brain from having a chance by having constant external inputs that don´t let you think any conscious thoughts? Maybe it’s time to sit with those uncomfortable feelings, otherwise they will snowball and they’ll be harder to stop.",
  "Some say we accept the love we think we deserve; so maybe that´s why you let everyone treat you like s***. Love is not supposed to hurt. You wouldn´t let a friend be treated like you let everyone treat you. You deserve better little human.",
  "Recently things have been messy and confusing. What used to be picked up and summarized in one simple word has evolved into a tree full of tangled branches. Remember that words are supposed to fit you, not the other way around. It´s okay to live in confusion, being a bimbo is fun. Don´t overthink it, if you don´t know something it can´t hurt you.  Just keep scrolling to avoid your feelings and everything will be okay.",
  "How do you feel being one of God’s strongest soldiers one more year? Every time you have opened your heart to someone it has never worked out well for you. Do you feel that you care more than others do? Don´t be ashamed of having feelings, maybe you are not as needy as people have made you think you were, maybe your bar is on the floor and are just asking for the bare minimum.",
  "Maybe you are having a hard time not letting external opinions get to you. You have to let people misunderstand you, under or overestimate you, count you out or in. The most important thing is how you talk to yourself and forgiving yourself for what others would think of you. It is not your responsability to prove anything, only to do the things that make you feel good.",
  "Every one talks about being independent and gaining freedom from not relying on anyone to achieve their goals. This is fine, but maybe its not what you need right now. The mutual care we take of each other is what makes life a little more bearable. It looks like relationships are one more check on the checklist, a task, when they really are where we build community and safe-space. Look into your relationships this year from a life-sharing and common-growth perspective. ",
  "Do you feel constant FOMO, the need to please all of the people at the same time and never want to go home alone the next day? You need to let go of the fear of being alone. I know this stems from an abandonment wound and the underlying terror of being left and counted out is difficult to heal. You will need to learn to talk kindly to yourself and take care of your frightened inner child. ",
  "Every time you feel pressured to be productive and anxious when you think you are supposed to be working, remember that the concept of productivity stems from a believe of self-worth based in achievements and maximizing contribution to the productive system to keep you in your shitty underpayed job.Being un-productive is actually a form of resistance in this over-exploited world, and an act of self-care.",
  "Maybe you are feeling a little bit insecure in yourself lately. Remember that all of your perceived flaws are probably rooted in the unachievable colonialist, occidental, neoliberal, patriarchal concept of beauty, success and normality that make us feel inadequate in our own skin. Redirect the object of your anger and dissapointment from yourself into the system that makes us feel this way, and combat this feeling as an act of rebelion against it.",
];

function mostrarTextoAleatorio() {
  return textos[Math.floor(Math.random() * textos.length)];
}

for (let i = 1716; i <= 1735; i++) {
    images.push("./Imagenes/Cartas/IMG_" + i + ".JPG");
}

let usedImages = [];

function getRandomImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let selectedImage = images.splice(randomIndex, 1)[0];
    usedImages.push(selectedImage);
    return selectedImage;
}

function resetImages() {
    images.push(...usedImages);
    usedImages = [];
}

document.getElementById("changeButton").addEventListener("click", function() {
  if (images.length < 3) {
      resetImages();
  }
  document.getElementById("imageDiv1").innerHTML = '<img  class="imageback" id="frontcard1" src="' + getRandomImage() + '" />';
  document.getElementById("imageDiv2").innerHTML = '<img  class="imageback" id="frontcard2" src="' + getRandomImage() + '" />';
  document.getElementById("imageDiv3").innerHTML = '<img  class="imageback" id="frontcard3" src="' + getRandomImage() + '" />';
  document.getElementById("backDiv1").innerHTML = '';
  document.getElementById("backDiv2").innerHTML = '';
  document.getElementById("backDiv3").innerHTML = '';
  document.getElementById("randomtext").innerHTML = '<p id="textos">' + mostrarTextoAleatorio() + '</p>';
  document.getElementById("containerstars2").style.display ="block";


});



