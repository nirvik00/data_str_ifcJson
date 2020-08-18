
function clearCanvas() {
    var canvas = document.getElementById('nodeCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawOnCanvas() {
    let nodeArr = copyNodeArr;
    clearCanvas();
    var arrIndex = parseInt(document.getElementById("selArr").value);
    HT = Math.round(document.getElementById("treeHt").value);
    SC = Math.round(document.getElementById('treeHt').value / 100);
    Radius = (document.getElementById('radius').value / 100);
    document.getElementById("treeHt_p").innerHTML = "Height of tree levels (%): " + HT;

    let numLevels = nodeArr[nodeArr.length - 1].level;

    ctx.canvas.width = window.innerWidth * 9 / 10;
    ctx.canvas.height = HT * SC * (numLevels + 1);

    let currentLevel = 0;
    while (currentLevel < numLevels + 1) {
        let nodes = [];
        let posY = 20 + (currentLevel * canvas.height * SC / (numLevels));
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
            nodes[0].pos = {
                x: canvas.width / 2,
                y: posY
            };
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
            let color = 'rgba(0,0,0,0.25)';
            let tk = 1;
            e.drawNodes(ctx, nodeArr, color, tk);
        });
        currentLevel++;
    }   // end while loop

    console.log('canvas rendered...');
}   // end function

