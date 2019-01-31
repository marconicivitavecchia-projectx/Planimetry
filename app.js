init = function(){
    document.getElementById('edit').onclick = function(){
        window.location = "edit_floor.html";
    }
     document.getElementById('addfloor').onclick = function(){
         var $original = document.getElementById('defaultfloor');
         var clone = $original.cloneNode(true);
         var par =  clone.querySelector('p');
         par.parentNode.removeChild(par);
         $(clone).find("button").css("visibility","visible");
         clone.removeAttribute('id'); 
         $original.after(clone); 
     // TO-DO createElement e poi appendChild al div Preview
<<<<<<< HEAD

     } 

=======
     
     } 
     
>>>>>>> 7aea9c2c75276c52cbd7f8ca841db9ef86b42660
     //onclick of the pen icon the user can rename the floor
    $(document).delegate(".renamefloor", 'click', function() {
         $(this).parents('div.floor').find(".floorname").removeAttr("disabled");
         $(this).parents('div.floor').find(".floorname").css("-webkit-appearance", "textfield");
         $(this).css("pointer-events", "none");
         $(this).css("color","grey");
         $(this).parents('div.floor').find(".savefloor").css("pointer-events", "auto");
         $(this).parents('div.floor').find(".savefloor").css("color","");
     });
<<<<<<< HEAD

=======
     
>>>>>>> 7aea9c2c75276c52cbd7f8ca841db9ef86b42660
     //onclick of the pen save the user can save the name of the floor
     $(document).delegate(".savefloor", 'click', function() {
         $(this).parents('div.floor').find(".floorname").attr("disabled", "true");
         $(this).parents('div.floor').find(".floorname").css("-webkit-appearance", "none");
         $(this).css("pointer-events", "none");
         $(this).css("color","grey");
         $(this).parents('div.floor').find(".renamefloor").css("pointer-events", "auto");
         $(this).parents('div.floor').find(".renamefloor").css("color","");
         $(this).css("color","");
     });
<<<<<<< HEAD

=======
     
>>>>>>> 7aea9c2c75276c52cbd7f8ca841db9ef86b42660
     // onclick REMOVE the user can select the floor to remove
     $(document).delegate(".floor",'click',function(){
            if($(this).hasClass('selected')){
                $(this).removeClass('selected');
            }else{
                $(this).parents('div.section').find("div.selected").removeClass('selected');
                $(this).addClass('selected');
            }
        });
      document.getElementById('removefloor').onclick = function(){
          $(this).parents('div.section').find("div.selected").remove();
      }
<<<<<<< HEAD

=======
 
>>>>>>> 7aea9c2c75276c52cbd7f8ca841db9ef86b42660
}
$(document).ready(init);