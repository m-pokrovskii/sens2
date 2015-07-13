(function(){
  var mySVGsToInject = document.querySelectorAll('img.inject-me');
  SVGInjector(mySVGsToInject);
}());

(function(){
	CoverPop.start({
		expires: 1,
		onPopUpClose: function() {
			$('body').addClass('CoverPop-closed');
		}
	});
}());