
const string =`.skin *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.skin  *::before,*::after{box-sizing: border-box;} 
.skin{
    position: relative;
   min-height: 50vh; 
   background: #ffdb00;
}
.nose{
    border:10px solid #010007;
    border-color: #010007 transparent transparent;
    position: relative;
    height: 0;
    width: 0;
    left:50%;
    top:145px;
    margin-left: -10px;
    border-bottom: none;
    z-index: 10;
}
@keyframes wave{
    0%{ transform: rotate(0);
    }
    33%{
        transform: rotate(15deg);
    }
    66%{
        transform: rotate(-15deg);
    }
    100%{
        transform: rotate(0);
    }
}

.nose .yuan{
    width: 20px;
    height: 6px;
    position: absolute;
    bottom: 10px;
    left: -10px;
    border-radius: 50% 50% 0 0;
    background-color: #010007;
}.nose:hover{
transform-origin: center bottom;
animation: wave 300ms infinite linear;
}
.eye{
    border:  2px solid #000000;
    width: 64px;
    height: 64px;
    left:50%;
    top:100px;
    margin-left: -32px;
    position: absolute;
    background:#2d2d2d;
    border-radius: 50%;
}
.eye::before{
    content:'';
    display: block;
    border:2px solid #4f4b37;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background:white;
    transform: translateX(6px);
    
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}

.mouth{
   
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    top:165px;
    margin-left: -100px;;

}
.mouth .up{
    position: relative;
    top:-26px;
    right: -10px;
    transform: translateX(-10px);
    z-index: 1;
    
}
.mouth .up .lip.left{
    border: 3px solid black ;
    height: 30px;
    width: 60px;
    border-top: none;
    border-right: none;
    border-radius: 0 0 0 50%;
    transform: rotate(-20deg) translateX(-34px);
    position: absolute;
    left: 50%;
    margin-left: -30px;
    background-color: #ffdb00;
}
.mouth .up .lip.right{
    border: 3px solid black ;
    height: 30px;
    width: 60px;
    border-top: none;
    border-left: none;
    border-radius: 0 0 50% 0;
    transform: rotate(20deg) translateX(34px);
    position: absolute;
    left: 50%;
    margin-left: -30px;
    background-color: #ffdb00;
}
.mouth .down{
    width:200px;
    height:200px;
    position: relative;
    overflow: hidden;
}
.mouth .down .lip{
   
    width: 100px;
    height: 950px;
    position: absolute;
    left: 50%;
    top:-800px;
    margin-left: -50px;
    border-radius: 140px/500px;
    background: #a81008;
    overflow: hidden;
}
.mouth .down .lip .lip2{
    border-radius: 50%;
    display: block;
    width:120px;
    height:130px;
    position: absolute;
    margin-left: -10px;
    bottom: -10px;
    background-color:#ff5b5d;
}
.face{
    border: 3px solid  red;
    width:84px;
    height: 84px;
    position: absolute;
    left: 50%;
    margin-left: -48px;
    margin-top: 165px;
    border-radius: 50%;
    background-color: #ff1800;
}
.face.left{
    transform: translateX(-140px);
}
.face.right{
    transform: translateX(155px);
  
}
.face>img{

   position: absolute;
   left:50%;
   top:50%;
 
}
.face.left>img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
`
export default string;