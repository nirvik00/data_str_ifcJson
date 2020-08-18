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
    var arrIndex = parseInt(document.getElementById("selArr").value);
    var queryOption = parseInt(document.getElementById("queryOption").value);
    var searchNode = document.getElementById("searchNode").value;

    // console.log("query: ", arrIndex, queryOption, searchNode);

    NodeArr.forEach(node => {
        node.highlightNode = false;
    });

    let searchResultNodes = [];
    if (searchNode === "") {
        drawTree(); // file: drawfunc.js
    } else {
        NodeArr.forEach(node => {
            if (arrIndex > -1) {
                if (node.arrayIndex === arrIndex && node.keyName === searchNode) {
                    searchResultNodes.push(node);
                }
            } else {
                if ((node.keyName).toString() === searchNode) {
                    searchResultNodes.push(node);
                }
            }
        });
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
}