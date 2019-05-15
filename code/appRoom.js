var app = {
	init: function () {
		console.log("init");
		$.getJSON("floorList.json")
			.done(app.onSuccess)
			.fail(app.onError);
	},
	onSuccess: function (jsonData) {
		
        var list = jsonData.floorList[0].rooms;
        console.log(list);
		list.forEach(element => {
			var names = `<div class="room">
				 <!--name of the room-->
				 <input type="text" maxlength="15" class="roomname" placeholder="Room" disabled value="${element.roomName}">
				 <!--on click of this button with the icon, the user can rename the room-->
				 <button type="button" class="renameroom">
        <span><img src="../images/icons/icon_edit.svg"></span>
      </button>
      <!--on click of this button with the icon, the user can save the room's name-->
      <button type="button" class="saveroom" style="pointer-events: none">
        <span><img src="../images/icons/icon_save.svg"></span>
      </button>
			 </div>`;
			$("#rooms").append(names);

			var plans = 
			`	<div class="card mx-auto prevroom" style="width:80%;">
					<div class="card-header">
                        <div class="dropdown" style="float: left;">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Devices
                            <img src="../images/icons/icon_devices.svg">
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> `;
            element.devices.forEach(elements => {
                plans += `<a class="dropdown-item" href="#">${elements}</a>`;
            } );
                        plans +=   ` </div>
                        </div>
						<div class="box" style="float: right;">	
							<label for="fileplan">
							<img src="../images/icons/icon_cloud_upload.svg">
							<input type="file" id="fileplan" class="inputfile"  >
							</label>	
                        </div>
                        <div class="card-title" style="justify-content: center;">${element.roomName}</div>
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