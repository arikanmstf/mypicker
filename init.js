function init () {
	 $('.picker').mypicker({
	    changed:function(){
	      alert($(this).attr('data-current'));
	    }
	  });
}