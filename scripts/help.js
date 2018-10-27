var z = function () {
    var iDiv = document.createElement('div');
    iDiv.appendChild( doP("> Author", 'popupTitle') );
    p = doP("Name: ", 'popupText');
    var element = document.createElement('a');
    element.href = "https://www.linkedin.com/in/oscaroliveira";
    element.textContent = "Óscar Oliveira";
    element.target = "_blank";
    p.appendChild(element, '');
    iDiv.appendChild( p );
    iDiv.appendChild( doP("Email: oscar.m.oliveira@gmail.com", 'popupText') );
    iDiv.appendChild( doP("> Help", 'popupTitle') );
    iDiv.appendChild( doP("Drop Instance file (JSON format) to the left corner drop zone to visualize the instance.", 'popupText') );
    document.getElementById("popup").appendChild(iDiv);
};

document.getElementById("show").onclick = (function() {
    if (document.getElementById("opacity-provider").style.display == "block") {
        document.getElementById("opacity-provider").style.display = "none";
    } else { document.getElementById("opacity-provider").style.display = "block"; }
});

function doP(text, className) {
    var element = document.createElement('p');
    element.textContent = text;
    element.className = className;
    return element;
}

function doPre(text, className) {
    var element = document.createElement('pre');
    element.textContent = text;
    element.className = className;
    return element;
}

function doA(text, className) {
    var element = document.createElement('a');
    element.textContent = text;
    element.href = text;
    element.className = className;
    return element;
}

z();