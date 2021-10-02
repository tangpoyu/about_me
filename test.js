// $ > jquery  多瀏覽器可兼容
// document > javascript  須對不同瀏覽器個別建置

$(document).ready(function(){
  

  $(".marquee_control").click(function(){
    var mar=document.getElementsByClassName("news_marquee")[0];
    mar.classList.toggle('play');
    var button_img=document.getElementsByClassName("marquee_control")[0];
    button_img.classList.toggle('paused')
    return false;
  });

  var school=[
    ['university','../pic/雲科.jpg','National Yunlin University of Science and Technology'],
    ['Senior','../pic/北科.jpg','Taoyuan Agricultural & Industrial Senior High School'],
    ['junior','../pic/建國.jpg','Chien-Kuo Junior High School'],
    ['Elementary','../pic/僑愛.jpg','Qiao ai Elementary School']
  ];
  
  
  // $('button').click(function(){
  //   var x=-1;

  //   $("button[id ='"+school[0][0]+"']").click(function(){
  //     x=0;
  //   });
  //   $("button[id ='"+school[1][0]+"']").click(function(){
  //     x=1;
  //   });
  //   $("button[id ='"+school[2][0]+"']").click(function(){
  //     x=2;
  //   });
  //   $("button[id ='"+school[3][0]+"']").click(function(){
  //     x=3;
  //   });

  //   if(x==-1){
  //     x=8;
  //   }

  //   console.log(x);
  //   try{
  //     var img=document.getElementsByClassName("s_img")[0];
  //     img.src=school[x][1];
  //     var btn=document.getElementsByClassName('school_btn_color')[0];
  //     btn.classList.toggle('school_btn_color');
  //     var btn= $("button[id ='"+school[x][0]+"']");
  //     console.log(btn[0]);
  //     btn[0].classList.toggle('school_btn_color');
  //     $('.school_name').text("\""+school[0][2]+"\"");
  //   }
  //   catch{
  //     console.log('非洲')
  //   }

  // });
  
  $(".itemid2").hover(function(){

    if($('.work_menu').css("display")=="none"){
      $('.work_menu').css("display","block");
    }
    else{
      $('.work_menu').css("display","none");
    }
    
  });
 
  // 控制學校圖片和學校文字根據 U,S,J,E 按鈕
  $("button[id ='"+school[0][0]+"']").click(function(){
    var img=document.getElementsByClassName("s_img")[0];
    img.src=school[0][1];
    var btn=document.getElementsByClassName('school_btn_color')[0];
    btn.classList.toggle('school_btn_color');
    var btn= $("button[id ='"+school[0][0]+"']");
    console.log(btn[0]);
    btn[0].classList.toggle('school_btn_color');
    $('.school_name').text("\""+school[0][2]+"\"");
  });
 
  $("button[id ='"+school[1][0]+"']").click(function(){
    var img=document.getElementsByClassName("s_img")[0];
    img.src=school[1][1];
    var btn=document.getElementsByClassName('school_btn_color')[0];
    btn.classList.toggle('school_btn_color');
    var btn= $("button[id ='"+school[1][0]+"']");
    console.log(btn[0]);
    btn[0].classList.toggle('school_btn_color');
    $('.school_name').text("\""+school[1][2]+"\"");
  });

  $("button[id ='"+school[2][0]+"']").click(function(){
    var img=document.getElementsByClassName("s_img")[0];
    img.src=school[2][1];
    var btn=document.getElementsByClassName('school_btn_color')[0];
    btn.classList.toggle('school_btn_color');
    var btn= $("button[id ='"+school[2][0]+"']");
    console.log(btn[0]);
    btn[0].classList.toggle('school_btn_color');
    $('.school_name').text("\""+school[2][2]+"\"");
  });

  $("button[id ='"+school[3][0]+"']").click(function(){
    var img=document.getElementsByClassName("s_img")[0];
    img.src=school[3][1];
    var btn=document.getElementsByClassName('school_btn_color')[0];
    btn.classList.toggle('school_btn_color');
    var btn= $("button[id ='"+school[3][0]+"']");
    console.log(btn[0]);
    btn[0].classList.toggle('school_btn_color');
    $('.school_name').text("\""+school[3][2]+"\"");
  });

});