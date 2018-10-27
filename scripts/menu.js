"use strict"

function CreateMenu() {
    if (Instance == -1) { return; }
    var b = document.getElementById('box-list');
    var i=0;
    while (true) {
        var x = document.getElementById(i++);
        if (x) { b.removeChild(x); }
        else { break; }
    }
    var myNode = document.getElementById("box-items");
    while (myNode.firstChild) { myNode.removeChild(myNode.firstChild); }
    for (i=0; i < Instance.Objects.length; ++i) {
        document.getElementById('box-list').appendChild( CreateBoxMenu(i, Instance.Objects[i]) );
    }
    for (i=0; i < Instance.Items.length; ++i) {
        document.getElementById('box-items').appendChild( CreateItem(i, Instance.Items[i]) );
    }
    scale = 200 / maxWidth;
}

function objectSelected(index, flag) {
   var svg = document.getElementById(index);
   svg.setAttributeNS(null, "fill", flag ? "#8b0000" : "gray");
}

function itemSelected(index, flag) {
   var svg = document.getElementById(index);
   svg.setAttributeNS(null, "fill", flag ? "#8b0000" : "lightgray");
}

function CreateBoxMenu(index, object) {
    maxWidth = object.Length > maxWidth ? object.Length : maxWidth;
    var iDiv = document.createElement('div');
    iDiv.id = index;
    iDiv.onmouseover = function() { objectSelected("SObject" + index, true); }
    iDiv.onmouseout = function() { objectSelected("SObject" + index, false); }
    iDiv.className = 'box box0';
    var iDiv2 = document.createElement('div');
    iDiv2.className = 'boxInfo itemInfo';
    var text = "Object " + index;
    iDiv2.appendChild( doP(text, 'boxTitle') );
    text =  'Size: ' + object.Length + "x" + object.Height;
    iDiv2.appendChild( doP( text, 'boxText') );
    text = 'Cost: ' + object.Cost;
    iDiv2.appendChild( doP(text, 'boxText') );
    text = 'Stock: ' + object.Stock;
    iDiv2.appendChild( doP(text, 'boxText') );
    iDiv.appendChild(iDiv2);
    return iDiv;
}

function CreateItem(index, item) {
    var iDiv = document.createElement('div');
    iDiv.id = "Item" + index;
    iDiv.onmouseover = function() { itemSelected("SItem" + index, true); }
    iDiv.onmouseout = function() { itemSelected("SItem" + index, false); }
    iDiv.className = 'box box1';
    var iDiv2 = document.createElement('div');
    iDiv2.className = 'boxInfo itemInfo';
    var text = "Item " + index;
    iDiv2.appendChild( doP(text, 'boxTitle') );
    text = 'Size: ' + item.Length + "x" + item.Height;
    iDiv2.appendChild( doP( text, 'boxText') );
    text = 'Demand: ' + item.Demand;
    iDiv2.appendChild( doP(text, 'boxText') );
    text = 'Demand max.: ' + item.DemandMax;
    iDiv2.appendChild( doP(text, 'boxText') );
    text = 'Value: ' + item.Value;
    iDiv2.appendChild( doP(text, 'boxText') );
    iDiv.appendChild(iDiv2);
    return iDiv;
}
