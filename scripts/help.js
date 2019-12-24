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

    iDiv.appendChild( doP("> Article", 'popupTitle') );
	p = doP("Please refer to:", 'popupText');
	iDiv.appendChild( p );

    p = doP("Oliveira, Ó., Gamboa, D., & Silva, E. : Resources for Two-Dimensional (and Three-Dimensional) Cutting and Packing Solution Methods Research. In Proceedings of the 16th International Conference on Applied Computing 2019. Vol. 53, pp. 131–138. IADIS Press (2019). DOI: 10.33965/ac2019_201912L016", 'popupText');
	iDiv.appendChild( p );

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