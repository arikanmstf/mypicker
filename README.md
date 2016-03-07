# mypicker
Mypicker allows you to pick an icon from a select box

## how to use


```html
<div class='picker'>
    <select data-current='2'>
      <option data-img-src='./img/hello.png' value='0'>
      <option data-img-src='./img/world.png' value='1'>
      <option data-img-src='./img/how.png' value='2'>
      <option data-img-src='./img/are.png' value='3'>
      <option data-img-src='./img/you.png' value='4'>
    </select>
  </div>
```


```javascript
function init () {
	 $('.picker').mypicker({
	    changed:function(){
	      alert($(this).attr('data-current'));
	    }
	  });
}```
