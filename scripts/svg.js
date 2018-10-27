function DrawScene(){
    var myNode = document.getElementById("svg-container");
    while (myNode.firstChild) { myNode.removeChild(myNode.firstChild); }

    o = document.createElement('div');
    o.className = 'clearfix';

    for (i=0; i < Instance.Objects.length; ++i) {
        var element = document.createElement('div');
        element.className = 'column';
        var element2 = doSvg( Instance.Objects[i].Length + 2, Instance.Objects[i].Height + 2, 0, 0);
        element2.appendChild ( doRect(Instance.Objects[i].Length, Instance.Objects[i].Height, "gray", i, "SObject" + i) );
        element.appendChild ( element2 );
        o.appendChild(element);
    }
    myNode.appendChild(o);

    o = document.createElement('div');
    o.className = 'clearfix';
    for (i=0; i < Instance.Items.length; ++i) {
        var element = document.createElement('div');
        element.className = 'column';
        var element2 = doSvg( Instance.Items[i].Length + 2, Instance.Items[i].Height + 2, 0, 0);
        element2.appendChild ( doRect(Instance.Items[i].Length, Instance.Items[i].Height, "lightgray", i, "SItem" + i) );
        element.appendChild ( element2 );
        o.appendChild(element);
    }
    myNode.appendChild(o);
}

function doSvgOuter(w, h, x, y) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    element.setAttribute('id','PATTERN');
    element.setAttribute('width', w * scale);
    element.setAttribute('height', h * scale);
    element.setAttribute('x', x);
    element.setAttribute('y', y);
    element.setAttribute('viewBox',"0 0 " + w + " " + h);
    document.getElementById("svg-container").appendChild( element );
    return element;
}

function doSvg(w,h, x, y) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    element.setAttribute('width', w * scale);
    element.setAttribute('height', h * scale);
    element.setAttribute('x', x);
    element.setAttribute('y', y);
    document.getElementById("svg-container").appendChild( element );
    return element;
}

function doRect(w, h, color, txt, index) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    element.id = index;
    element.setAttribute('x', 1);
    element.setAttribute('y', 1);
    element.setAttribute('width', w * scale);
    element.setAttribute('height', h * scale);
    element.setAttribute('stroke', "black");
    element.setAttribute('stroke-width',"1px");
    element.setAttribute('fill', color);
    var tit = document.createElementNS("http://www.w3.org/2000/svg", "title");
    tit.innerHTML = txt + '-' + w + 'x' + h;
    element.appendChild(tit);
    return element;
}
