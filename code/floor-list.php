<?php
$floorObj = new stdClass();
$floorObj->floorlist = array();
$floorObj->floorlist[0] = new stdClass();
$floorObj->floorlist[0]->name = "Bring me a coffee";
$floorObj->floorlist[0]->description = "Prepare a cofee and bring it to the user";
$floorObj->floorlist[1] = new stdClass();
$floorObj->floorlist[1]->name = "Turn on the lights";
$floorObj->floorlist[1]->description = "Turn on the light of the current location";
echo json_encode($floorObj);
?>