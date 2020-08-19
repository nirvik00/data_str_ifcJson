//
//
//
function clearCanvas() {
    var canvas = document.getElementById('nodeCanvas');
    var CTX = canvas.getContext('2d');
    CTX.clearRect(0, 0, CTX.canvas.width, CTX.canvas.height);
}


function runQuery() {
    clearCanvas();
    // queryOption
    // selArr
    // searchNode

    try{
        let divxs= document.getElementById('dynamicTableId');
        divxs.remove();
    }catch(e){
        console.log("error\n", e)
    }

    CANVAS.style.display='block';

    var arrIndex = parseInt(document.getElementById("selArr").value);
    var queryOption = parseInt(document.getElementById("queryOption").value);
    var searchNode = document.getElementById("searchNode").value;
    let searchNodeArr = [];
    let arr = searchNode.split(',');
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i].toString().trim().toLowerCase();
        searchNodeArr.push(s);
    }

    NodeArr.forEach(node => {
        node.highlightNode = false;
    });

    let searchResultNodes = [];
    if (searchNode === "" && queryOption < 2) {
        drawTree(); // file: drawfunc.js
    } else {
        for (let i = 0; i < searchNodeArr.length; i++) {
            NodeArr.forEach(node => {
                if (arrIndex > -1) {
                    if (node.arrayIndex === arrIndex && node.keyName === searchNodeArr[i]) {
                        searchResultNodes.push(node);
                    }
                } else {
                    if ((node.keyName).toString() === searchNodeArr[i]) {
                        searchResultNodes.push(node);
                    }
                }
            });
        }
    }


    searchResultNodes.forEach(node => {
        node.highlightNode = true;
    });

    if (queryOption == 0) {
        drawTree(); // file: drawfunc.js
    } else if (queryOption == 1) {
        drawTree(); // file: drawfunc.js
        drawPath(searchResultNodes); // file: drawfunc.js
    }
    else if (queryOption == 2 ){
        displayNodeDetails(searchResultNodes); // file: drawfunc.js
    }
}