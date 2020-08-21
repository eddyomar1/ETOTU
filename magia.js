function init(){

    var ctx = document.getElementById('can').getContext('2d');

   var Tnave = new Image();
   var alien = new Image();
   var marcianito = new Image();

   Tnave.src = 'nave1.png';
   alien.src = 'alien.png';
   marcianito.src = 'marcianito-real-no-fake.gif';
        
var ealien = function(op){
return {
    id: op.id || '',
    x: op.x || '',
    y: op.y || '',
    w: op.w || '',
    h: op.h || '',
    image: op.image || alien
    }
}

var ene = [ 
    new ealien({id:"kk1", x:400, y: 50, w:50, h:50}), 
    new ealien({id:"kk2", x:200, y: 50, w:50, h:50}), 
    new ealien({id:"kk3", x:600, y: 50, w:50, h:50}),
    new ealien({id:"kk3", x:400, y: -150, w:80, h:90}),
    new ealien({id:"kk3", x:400, y: -150, w:80, h:90}),
    new ealien({id:"kk3", x:400, y: -150, w:80, h:90}),
    new ealien({id:"kk3", x:400, y: -150, w:80, h:90}),
    new ealien({id:"kk3", x:400, y: -150, w:80, h:90}),
    new ealien({id:"kk3", x:400, y: -150, w:80, h:90})
    // new ealien({id:"marcianito", x:400, y: -100, w:80, h:90, image: marcianito})
];

var drawene = function(enel){
for(var c=0;c<enel.length;c++){
var ala = enel[c];
ctx.drawImage(ala.image, ala.x, ala.y +=.1, ala.w, ala.h)
    }
}

function Nave(){
this.x = 400,
this.y = 400,
this.w = 50,
this.h = 70,
this.dir,
this.tbala = 'a',
this.balas = [];

this.dibuja = function(){
    ctx.drawImage(Tnave, this.x, this.y, 80, 70)

    if(this.dir==='left' && this.x > 0){ this.x -=3; }
    else if(this.dir==='right' && this.x < 750){ this.x +=3; }
    else if(this.dir==='ariba' && this.y > 50){ this.y -=3; }
    else if(this.dir==='abajo' && this.y < 430){ this.y +=3; }
    
        for(var c = 0;c<this.balas.length;c++){

        var ba = this.balas[c];
        if(this.tbala === 'a'){ctx.fillRect(ba.x, ba.y -= 5, ba.w, ba.h)}
        if(this.tbala === 'b'){ctx.fillRect(ba.x, ba.y -= 5, ba.w, ba.h+100)}
        if(this.tbala === 'c'){ctx.fillRect(ba.x, ba.y -= 5, ba.w+100, ba.h)}
        
        this.killalien(this.balas[c],c);  
        if(ba.y < 0){this.balas.splice(c, 1)}
          
    }




    }  

this.killalien = function(ba, m){
for(var c = 0;c < ene.length;c++){
var e = ene[c];

if(ba.x+ba.w >= e.x && 
    ba.x <= e.x+e.w && 
    ba.y >= e.y && 
    ba.y <= e.y+e.h){ 
    
    this.balas.splice(this.balas[m],1);    
    ene.splice(c, 1);
    // e.splice(c, m)
 }
 
        }

}

}

var nave = new Nave();

function draw(){

    ctx.clearRect(0, 0, 800, 800);
    nave.dibuja();
    drawene(ene);
}

var drawi = setInterval(draw, 1000/30);

document.addEventListener('keydown', function(event){

if(event.keyCode === 38){
    nave.dir = 'ariba';
}

if(event.keyCode === 40){
    nave.dir = 'abajo';
}

if(event.keyCode === 37){
    nave.dir = 'left';
}

if(event.keyCode === 39){
    nave.dir = 'right';
}

if(event.keyCode === 80){
    location.reload();
}

if(event.keyCode === 68){
    nave.tbala = 'b';
    nave.balas.push({x: nave.x + 38, y:nave.y, w:3, h:10})
}

if(event.keyCode === 70){
    nave.tbala = 'c';
    nave.balas.push({x: nave.x + 38, y:nave.y, w:3, h:10})
}

if(event.keyCode === 32){
    if(nave.balas.length < 10){ nave.balas.push({x: nave.x + 38, y:nave.y, w:3, h:10});
}}

});

document.addEventListener('keyup', function(event){

    if(event.keyCode === 38){
        nave.dir = '';
    }
    
    if(event.keyCode === 40){
        nave.dir = '';
    }
    
    if(event.keyCode === 37){
        nave.dir = '';
    }
    
    if(event.keyCode === 39){
        nave.dir = '';
    }

    });


        var bu = document.getElementById('bu');
        var bd = document.getElementById('bd');
        var bl = document.getElementById('bl');
        var br = document.getElementById('br');
        var bs = document.getElementById('bs');

        bu.addEventListener('mousedown', function(event){
            nave.dir = 'ariba';
        });
        bd.addEventListener('mousedown', function(event){
            nave.dir = 'abajo';
        });
        bl.addEventListener('mousedown', function(event){
            nave.dir = 'left';
        });
        br.addEventListener('mousedown', function(event){
            nave.dir = 'right';
        });
        
        bs.addEventListener('mousedown', function(event){
                
                if(nave.balas.length < 10){ nave.balas.push({x: nave.x + 38, y:nave.y, w:3, h:10}); }
            });
    


        document.addEventListener('click', function(event){
            nave.dir = '';
        });
        













}

window.addEventListener('load', function(event){
init();

});



