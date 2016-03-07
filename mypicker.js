/**
    *** mypicker javascript jquery plugin ***
        Author  : Mustafa Arıkan
        Version : 1.4.0
        Release : 27.08.2014
        Contact : arikan134@gmail.com
        Web     : mustafaarikan.net
        Git     : github.com/arikanmstf

    *** Requirements ***
        jquery   : 1.7 min

    ~check sample.html

**/


// Icon Picker
// by Mustafa Arıkan
//
/* Kullanımı:

HTML : 

//data-current ilk değeri girilmelidir. Örnekte value='2' olan how.png seçili gelecektir.
  <div class='picker'>
    <select data-current='2'>
      <option data-img-src='http://example.com/img/hello.png' value='0'>
      <option data-img-src='http://example.com/img/world.png' value='1'>
      <option data-img-src='http://example.com/img/how.png' value='2'>
      <option data-img-src='http://example.com/img/are.png' value='3'>
      <option data-img-src='http://example.com/img/you.png' value='4'>
    </select>
  </div>

JS :

  $('.picker').mypicker({
    changed:function(){
      alert($(this).attr('data-current'));
    }
  });
  

*/
(function() {

  jQuery.fn.extend({
    mypicker: function(opts) {
      if (opts == null) {
        opts = {};
      }
      return this.each(function() {
        var main,select,current,id = parseInt(Math.random() * 100000);
        main = jQuery(this);
        select = main.find('select');
        current = select.attr("data-current");
      

        var iconList = "" , selectedItem = '<div id="iconPickerSelected_'+id+'" class="iconPickerSelected"></div>';
        select.hide();

        select.find('option').each(function(){

          var option = jQuery(this) , src = option.attr('data-img-src');

          if(typeof src =='undefined'){


          }else{
             iconList += '<div  data-val="'+option.val()+'" class="iconPickerListItem iconPickerListItem_'+id+'" style="background-image:url('+src+')"></div>';


              if(current == option.val()){
                selectedItem = '<div id="iconPickerSelected_'+id+'" class="iconPickerSelected" style="background-image:url('+src+')"></div>'
              }

          }
          
         

        });
        select.after("<div id='iconPickerMain_"+id+"' class='iconPickerMain'>"+selectedItem+"<div id='iconPickerListContainer_"+id+"' class='iconPickerListContainer'>"+iconList+"</div></div>");

        function switchLabel () {
          
        }
        $('#iconPickerSelected_'+id).click(function(){
          $('#iconPickerListContainer_'+id).toggle();
          $(".iconPickerListContainer").each(function(e){
            var _id = $(this).attr('id'),__id = 'iconPickerListContainer_'+id;
            
            if(_id != __id )$(this).hide()
          });
        });

        $('.iconPickerListItem_'+id).click(function () {
          setIcon(this);
        });

        $(document).mouseup(function (e){
            var container = $(".iconPickerListContainer");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
            }
        });

        function setIcon(elem){
          $('#iconPickerSelected_'+id).css('background-image',$(elem).css('background-image'));
          select.attr('data-current',$(elem).attr('data-val'));
           $(".iconPickerListContainer").each(function(){$(this).hide()});

          if (opts.changed != null) {
            return opts.changed.call(select );
          }

        }

      });
    }
  });

  sanitized_options = function(opts) {
    var default_options;
    default_options = {
      changed: void 0
    };
    return jQuery.extend(default_options, opts);
  };


}).call(this);
