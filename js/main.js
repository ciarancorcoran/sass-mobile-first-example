$(document).ready(function() {


	/*-------------------------
		Load main content images and titles from JSON
	--------------------------*/
	function loadItems(url, container) {
	//get the JSON object
		$.getJSON(url, function (data) {
			if (typeof data === 'object') {
				$.each(data['items'], function (key, item) {
					var mylist = '<div class="col-xs-6 col-sm-4"><a href="" class="main-content-item text-center display-block"><img src="' + item['url'] + '" alt="' + item['title'] + '" /><h3>' + item['title'] + '</h3></a></div>';
					$(container).append(mylist);
				});
			}
		});
	};

	loadItems('main-content.JSON', '#main-content-item-list');
});
