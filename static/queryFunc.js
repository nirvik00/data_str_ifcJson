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
        let divxs = document.getElementById('dynamicTableId');
        if(divxs){
            divxs.remove();
        }

    CANVAS.style.display = 'block';
    var arrIndex = parseInt(document.getElementById("selArr").value);
    var queryOption = parseInt(document.getElementById("queryOption").value);
    var searchNode = document.getElementById("searchNode").value;
    NodeArr.forEach(node => {
        node.highlightNode = false;
    });
    let searchResultNodes = [];
    let arraySearchResults = queryArrayIndex();
    let userInputSearch= queryInputNodes(arraySearchResults);
    searchResultNodes = userInputSearch;
    searchResultNodes.forEach(node => {
        node.highlightNode = true;
    });
    if (queryOption == 0) {
        drawTree(); // file: drawfunc.js
    } else if (queryOption == 1) {
        drawTree(); // file: drawfunc.js
        drawPath(searchResultNodes); // file: drawfunc.js
    }
    else if (queryOption == 2) {
        tabularNodeDetails(searchResultNodes); // file: drawfunc.js
    }
}

//
//
// first search based on array index
function queryArrayIndex() {
    // which array
    var arrIndex = parseInt(document.getElementById("selArr").value);
    let searchNodes = [];
    // nodes searched from all arrays
    if (arrIndex < 0) {
        return NodeArr;
    }
    // nodes searched from given arrays
    NodeArr.forEach(node => {
        if (parseInt(node.arrayIndex) === arrIndex) {
            searchNodes.push(node);
        }
    });

    return searchNodes;
}
//
//
// after search by array index, search by user input, input of result from array
function queryInputNodes(reqNodesFromArray) {
    // which nodes to target
    var searchNodes = document.getElementById("searchNode").value;
    let searchNodeArr = [];
    let arr = searchNodes.split(',');
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i].toString().trim().toLowerCase();
        searchNodeArr.push(s);
    }
    let reqNodes = [];
    for (let i = 0; i < reqNodesFromArray.length; i++) {
        let node = reqNodesFromArray[i];
        for (let j = 0; j < searchNodeArr.length; j++) {
            let node2 = searchNodeArr[j];
            if (node.keyName === node2) {
                reqNodes.push(node);
                break;
            }
        }
    }
    return reqNodes;
}
