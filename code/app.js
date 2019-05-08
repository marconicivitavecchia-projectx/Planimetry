var app = {
	init: function() {
		console.log("init");
		$.getJSON("floor_list.json")
		.done(app.onSuccess)
		.fail(app.onError);
	},
	onSuccess:function(jsonData){
		let list = jsonData.firstFloorList;
		   list.forEach(element => {
			   let html = `<div class="card bg-dark text-white">
  <img class="card-img" src="${element.plan}" alt="Card image">
  <div class="card-img-overlay">
    <h5 class="card-title">${element.roomName}</h5>
    <p class="card-text"></p>
  </div>
</div>`;
		   $("#previews").append(html);
		   });
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
