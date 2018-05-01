var img; 
var y= 100;



function setup(){
	img = loadImage('assets/pic.jpg')
	createCanvas(windowWidth, windowHeight)
	background(0,0,0)
	stroke(300);
	frameRate(600);
	
}

function draw(){
image(img,400,100,500, 500)
rect(465,372,200,60)
textAlign(CENTER);
textSize(40);
text("iCensored", 566, 418);
textSize(12);
text("FILMS BANNED: Pas vdekjes (After Death), Wonder Woman, FILMS BANNED: I'll Never Heil Again, The Silence, FILMS BANNED: Last Tango in Paris, La Patagonia rebelde (Rebel Patagonia), Looking for Mr. Goodbar, FILMS BANNED: The House on Garibaldi Street,Pretty Baby, FILMS BANNED:Pink Flamingos, A Serbian Film", 700, 70);
text("STOP CENSORING ME.     STOP CENSORING ME.         STOP CENSORING ME.      STOP CENSORING ME.      STOP CENSORING ME.          STOP CENSORING ME.       STOP CENSORING ME.      STOP CENSORING ME.        STOP CENSORING ME.      STOP CENSORING ME.     STOP CENSORING ME.", 400, 50);
text("WORD BAN AT CDC INCLUDES 'VULNERABLE, 'FETUS,' TRANSGENDER'WORD BAN AT CDC INCLUDES 'VULNERABLE, 'FETUS,' TRANSGENDER'WORD BAN AT CDC INCLUDES 'VULNERABLE, 'FETUS,' TRANSGENDER'WORD BAN AT CDC INCLUDES 'VULNERABLE, 'FETUS,' TRANSGENDER'", 400, 30);
text("CENSORING WHAT FROM WHOM.     WHY.      CENSORING WHAT FROM WHOM.     WHY.     CENSORING WHAT FROM WHOM.          WHY.       CENSORING WHAT FROM WHOM.     WHY.        CENSORING WHAT FROM WHOM.      WHY.  CENSORING WHAT FROM WHOM.      WHY.   CENSORING WHAT FROM WHOM.      WHY.     ", 400, 92);
text("FILMS BANNED: Pas vdekjes (After Death), Wonder Woman, FILMS BANNED: I'll Never Heil Again, The Silence, FILMS BANNED: Last Tango in Paris, La Patagonia rebelde (Rebel Patagonia), Looking for Mr. Goodbar, FILMS BANNED: The House on Garibaldi Street,Pretty Baby, FILMS BANNED:Pink Flamingos, A Serbian Film", 700, 630);
text("STOP CENSORING ME.     STOP CENSORING ME.         STOP CENSORING ME.      STOP CENSORING ME.      STOP CENSORING ME.          STOP CENSORING ME.       STOP CENSORING ME.      STOP CENSORING ME.        STOP CENSORING ME.      STOP CENSORING ME.     STOP CENSORING ME.", 400, 670);
text("WORD BAN AT CDC INCLUDES 'VULNERABLE, 'FETUS,' TRANSGENDER'WORD BAN AT CDC INCLUDES 'VULNERABLE, 'FETUS,' TRANSGENDER'WORD BAN AT CDC INCLUDES 'VULNERABLE, 'FETUS,' TRANSGENDER'WORD BAN AT CDC INCLUDES 'VULNERABLE, 'FETUS,' TRANSGENDER'", 400, 690);
text("CENSORING WHAT FROM WHOM.     WHY.      CENSORING WHAT FROM WHOM.     WHY.     CENSORING WHAT FROM WHOM.          WHY.       CENSORING WHAT FROM WHOM.     WHY.        CENSORING WHAT FROM WHOM.      WHY.  CENSORING WHAT FROM WHOM.      WHY.   CENSORING WHAT FROM WHOM.      WHY.   CENSORING WHAT FROM WHOM.      WHY.    ", 400, 650);


y=y-1;
if (y<0) {
	y=height;

}
//line(0,y,width,y);
  fill(random(0, 255), random(0, 255), random(0, 255));
  rect(mouseX,mouseY,200,60);
  textSize(33);
  text("CENSORED",mouseX,mouseY,211,200);
  
}


