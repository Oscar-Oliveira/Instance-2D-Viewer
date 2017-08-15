"use strict"

var JSONTODRAW = "";

var drop_zone_text_ok = "Drop File Here";
var drop_zone_text_error = "Drop JSON file";
 
handleFileSelectMSG(true, drop_zone_text_ok);
document.getElementById('drop-zone').addEventListener('dragover', handleDragOver, false);
document.getElementById('drop-zone').addEventListener('drop', handleFileSelect, false);


function compare(a,b) {
  if (a.Height < b.Height) return -1;
  if (a.Length > b.Length) return 1;
  return 0;
}

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; 
    if (files.length == 1) {
        var file = files[0]; 
        var ext = (/[.]/.exec(file.name)) ? /[^.]+$/.exec(file.name) : undefined;
        if (ext == "json" ) {        
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onloadend = function(e) {  
                JSONTODRAW = reader.result;
				maxWidth = 0; scale = 0; maxHeight = 0;
                InitNewProblem();                
                handleFileSelectMSG(true, file.name);  
            };
        } else { handleFileSelectMSG(false, drop_zone_text_error); }
    }
    else { handleFileSelectMSG(false, drop_zone_text_error); }
}
 
function handleFileSelectMSG(flag, text) { 
    document.getElementById('drop-zone-file').className = flag ? "drop-zone-ok" : "drop-zone-error";
    document.getElementById('drop-zone-file').textContent = text;   
}
 
function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; 
    handleFileSelectMSG(true, drop_zone_text_ok);
}

function InitNewProblem() {
	Instance = JSON.parse(JSONTODRAW);
	
	Instance.Objects.sort(compare);
	Instance.Items.sort(compare);
	
	CreateMenu();
    DrawScene();
}