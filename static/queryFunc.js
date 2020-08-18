//
//
//
function clearCanvas() {
    var canvas = document.getElementById('nodeCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


function runQuery() {
    clearCanvas();

    // queryOption
    // selArr
    // searchNode
    var arrIndex = parseInt(document.getElementById("selArr").value);
    var queryOption = parseInt(document.getElementById("queryOption").value);
    var searchNode = document.getElementById("searchNode").value;

    NodeArr.forEach(node => {
        node.highlightNode = false;
    });


    let searchResultNodes=[];
    if (searchNode === "") {
        drawTree();
    } else {
        NodeArr.forEach(node => {
            if(arrIndex>-1 ){
                if (node.arrayIndex === arrIndex && node.keyName === searchNode) {
                    console.log('node found ', node.keyName);
                    searchResultNodes.push(node);
                }
            }else{
                if (node.keyName === searchNode) {
                    console.log('node found ', node.keyName);
                    searchResultNodes.push(node);
                }
            }
        });
    }

    searchResultNodes.forEach(node=>{
        node.highlightNode = true;
    });
    if ((queryOption == 1)) {
        drawTree();
        drawPath(searchResultNodes);
    }
}