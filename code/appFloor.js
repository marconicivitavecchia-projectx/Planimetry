var app = {
	init: function () {
		console.log("init");
		$.getJSON("https://projectx-marconi.firebaseio.com/planimetry.json")
			.done(app.onSuccess)
			.fail(app.onError);
			$(document).delegate(".savefloor", 'click', app.rename);
	},
	rename: function () {
		var name = $(this).parents('div.floor').find('input:text.floorname').val();
		var number = $(this).parents('div.floor').index();
		console.log(name);
		console.log(number);
		let changeData = JSON.stringify(name);
		console.log(changeData);
		$.ajax({
			type: "PUT",
			url: `https://projectx-marconi.firebaseio.com/planimetry/floorList/${number}/name.json`,
			data: changeData,
			contentType: "application/json",
		}).done(app.onRenameSuccess)
			.fail(app.onError);
		$(this).parents('div.floor').find('input.floorname').val(name);
		$(this).parents('div.floor').find("input.floorname").attr("disabled", "true");
		$(this).parents('div.floor').find("input.floorname").css("-webkit-appearance", "none");
		$(this).css("pointer-events", "none");
		$(this).css("color","grey");
		$(this).parents('div.floor').find("button.renamefloor").css("pointer-events", "auto");
		$(this).parents('div.floor').find("button.renamefloor").css("color","");
		$(this).css("color","");
	},
	onRenameSuccess: function (name) {
		console.log(`onRenameSuccess: ${name}`)
	},

	onSuccess: function (jsonData) {
		console.log(jsonData);
		let list = jsonData.floorList;
		list.forEach(element => {
			var names = `<div class="floor">
				 <!--name of the floor-->
				 <input type="text" maxlength="15" class="floorname" placeholder="Floor" disabled value="${element.name}">
				 <!--on click of this button with the icon, the user can rename the floor-->
				 <button type="button" class="renamefloor">
        <span><img src="../images/icons/icon_edit.svg"></span>
      </button>
      <!--on click of this button with the icon, the user can save the floor's name-->
      <button type="button" class="savefloor" style="pointer-events: none">
        <span><img src="../images/icons/icon_save.svg"></span>
      </button>
			 </div>`;
			$("#floors").append(names);

			var plans = 
			`	<div class="card mx-auto prevfloor" style="width:80%;">
					<div class="card-header">
						<div class="card-title" style="float: left;">${element.name}</div>
						<div class="box" style="float: right;">	
							<label for="fileplan">
							<img src="../images/icons/icon_cloud_upload.svg">
							<input type="file" id="fileplan" class="inputfile"  >
							</label>	
						</div>
					</div>
					<img src="${element.plan}" class="card-img-top" alt="...">
				</div>`;
				$("#previews").append(plans);
		});


	},
	onError: function (e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);