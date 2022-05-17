var blocks=["img/block.png","img/block2.png","img/block3.png","img/block4.png","img/block5.png","img/block6.png"];
var pole_blocks=[];
var pole_barrier = [];
var hearts=5;
var steps=0;
var indBlock_old = 5;
var blockItem = 0;
var rows=1;
var n=1; 
var many=[ ];
var ostatok=30;
for (i = 1; i < 17; i++) {
    many[i] = 0; 
}
for(i=1;i<6;i++){
    indCoin=Math.floor(Math.random()*15+1);
    idImg=document.getElementById('pole2_'+indCoin);
    idImg.src="img/emerald.png";
    many[indCoin]=1;
}


for(i=1;i<6;i++){
    idImg=document.getElementById('heart'+i);
    idImg.src="img/ring.png";
}



pole0_0.src="img/block6.png";
pole0_16.src="img/block6.png";
pole_blocks[0] = 5;
pole_blocks[16] = 5;
for(i=1;i<16;i++){
    indBlock=Math.floor(Math.random()*5)
    while (indBlock == indBlock_old) {
        indBlock = Math.floor(Math.random() * 5)
    }

    idImg=document.getElementById('pole0_'+i);
    idImg.src=blocks[indBlock];
    pole_blocks[i] = indBlock;
    if (indBlock == 0) {
        idImg = document.getElementById('pole1_' + i);
        idImg.src = blocks[indBlock];
        pole_barrier[i]=1;
    }
    indBlock_old = indBlock;
}
pole1_0.src="img/shadow.png";
function shadow_move(event){
    
        if (hearts != 0) {
    
    switch (event.key) {
        case 'ArrowRight':
                if ((pole_barrier[steps + 1] != 1) & (pole_barrier[steps + 1] != 2)) {
                    idImg = document.getElementById('pole' + rows + '_' + steps);
                    idImg.src = "img/spacer.gif";
                    rows = 1;
                    steps++;
                    idImg = document.getElementById('pole' + rows + '_' + steps);
                    idImg.src = "img/shadow.png";
                } else if (pole_barrier[steps + 1] == 2){
                    idImg = document.getElementById('pole'+rows+'_' + steps);
                    idImg.src = "img/spacer.gif";
                    steps++;
                    idImg = document.getElementById('pole2_' + steps);
                    idImg.src = "img/shadow.png";
                }
                break;

        case 'ArrowUp':
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/spacer.gif";
                rows = 2;
                idImg = document.getElementById('pole' + rows + '_' + steps);
                if(many[steps]==1){ 
                 
                                        idImg1=document.getElementById('coin'+n);
                                        idImg1.src="img/emerald.png";
                                        n++;
                                    }
                    
                idImg.src = "img/shadow.png";
                break;
        case 'Shift':
                idImg = document.getElementById('pole' + rows + '_' + steps);
                idImg.src = "img/spacer.gif";
                steps++;
                if (rows==2){
                    rows=1;
                    }else{
                    rows = 2;}
                idImg = document.getElementById('pole' + rows + '_' + steps);
                if(many[steps]==1){ 
                    //èãðîê áåð¸ò ìîíåòêó
                                        idImg1=document.getElementById('coin'+n);
                                        idImg1.src="img/emerald.png";
                                        n++;
                                    }
                    
                idImg.src = "img/shadow.png";
                break;
       case 'ArrowDown':
            if(n>0){
                n--;
                idImg=document.getElementById('coin'+n);
                idImg.src="img/spacer.gif"
                idImg = document.getElementById('pole1_' + (steps + 1));
                idImg.src = "img/most.png";
                pole_barrier[steps + 1] = 2;
                rows=2;
            }else{
                alert('You must collect the Emerald to build it!')
            }
                      
            break;
        
    }
    checkBlock();
} else {
    window.open("htm/lose.htm")
    window.close()
    document.removeEventListener('keydown', mario_move)
}
}
function checkBlock(){
    if(rows!=2){
    blockItem = pole_blocks[steps];
    switch (blockItem) {
        case 5:
            if (steps != 0) {
                window.open("htm/win.htm")
                window.close()
                document.removeEventListener('keydown', mario_move)
            };
            break;
        case 4:
            idImg = document.getElementById('heart' + hearts);
            idImg.src = "img/spacer.gif";
            hearts--;
            break;
        case 2:
            idImg = document.getElementById('pole' + rows + '_' + steps);
            idImg.src = "img/spacer.gif";
            steps = 0;
            idImg = document.getElementById('pole1_' + steps);
            idImg.src = "img/shadow.png";
            break;
        case 1:
            rndBlock = Math.floor(Math.random() * 5)
            idImg = document.getElementById('pole0_' + steps);
            idImg.src = blocks[rndBlock];
            pole_blocks[steps] = rndBlock;
            checkBlock();
    }
    }
}

document.addEventListener('keydown',shadow_move)
function startGame(){
    interval=setInterval(check,1000)
}
function check(){
    ostatok--;
     ost_time.innerHTML="+ostatok+ seconds left..."
     if(ostatok<=0){
        window.open("lose.htm")
        window.close()
        clearInterval(interval)
     }
}
