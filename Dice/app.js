function play(){
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);  
    var img1 = document.getElementById('t1');
    var img2 = document.getElementById('t2');
    var img3 = document.getElementById('t3');
    var img4 = document.getElementById('t4');
    var img5 = document.getElementById('t5');
    var img6 = document.getElementById('t6');

    var imgArr = [img1,img2,img3,img4,img5,img6];
    imgArr[0].style.display = "none";
    imgArr[1].style.display = "none";
    imgArr[2].style.display = "none";
    imgArr[3].style.display = "none";
    imgArr[4].style.display = "none";
    imgArr[5].style.display = "none";

    if(dice ==1 ){
       imgArr[0].style.display = "block";
    
    }

    else if(dice == 2){
  
      imgArr[1].style.display = "block";
      
    }

    else if(dice == 3){
   
      imgArr[2].style.display = "block";
     
    }

    else if(dice == 4){
     
      imgArr[3].style.display = "block";
    
    }

    else if(dice == 5){
 
      imgArr[4].style.display = "block";
     
    }

    else {
    
      imgArr[5].style.display = "block";

    }
    
  }
  

