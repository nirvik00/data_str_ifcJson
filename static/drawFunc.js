//
function drawOnCanvas(nodeArr) {
    var arrIndex=parseInt(document.getElementById("selArr").value);
    // let arrIndex = 1;

    clearCanvas();
    SC = Math.round(document.getElementById('treeHt').value / 100);
    Radius = (document.getElementById('radius').value / 100);

    let numLevels = nodeArr[nodeArr.length - 1].level;

    var canvas = document.getElementById('nodeCanvas');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth * 9 / 10;
    ctx.canvas.height = 150 * numLevels;

    let currentLevel = 0;
    while (currentLevel < numLevels + 1) {
        let nodes = [];
        let posY = 20 + (currentLevel * canvas.height * SC / (numLevels + 1));
        for (let i = 0; i < nodeArr.length; i++) {
            let node = nodeArr[i];
            if (node.level === currentLevel) {
                if (arrIndex > -1) {
                    if (arrIndex === node.arrayIndex) {
                        nodes.push(node);
                    }
                } else {
                    nodes.push(node);
                }
            }
        }

        if (nodes.length == 1) {
            nodes[0].pos = { x: canvas.width / 2, y: posY };
        } else {
            let a = 20;
            let dimX = (canvas.width - a) / nodes.length;
            let posX = 1.5 * a;
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].pos = { x: posX, y: posY };
                posX += dimX;
            }
        }
        nodes.forEach(e => {
            e.drawNodes(ctx, nodeArr);
        });
        currentLevel++;
    }// end while loop
}// end function