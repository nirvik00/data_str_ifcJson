//
//
//
//
function drawTree() {
    let nodesOnCanvas = [];

    var arrIndex = parseInt(document.getElementById("selArr").value);
    HT = Math.round(document.getElementById("treeHt").value);
    SC = Math.round(document.getElementById('treeHt').value / 100);
    Radius = (document.getElementById('radius').value / 100);

    let nodeArr = NodeArr;
    let numLevels = nodeArr[nodeArr.length - 1].level;

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
            e.drawNodes(CTX, nodeArr);
        });
        currentLevel++;
    }   // end while loop
}   // end function
//
//
//
function drawPath(searchResultNodes) {
    searchResultNodes.forEach(node => {
        getParentsRecursively(node);
        getChildrenRecursively(node);
    });
}

function getParentsRecursively(node) {
    let parents = node.getParentNodes();
    parents.forEach(p => {
        c = "rgba(255,0,0,0.1)";
        t = 10;
        node.connect(p, c, t);
        getParentsRecursively(p);
    });
}

function getChildrenRecursively(node) {
    let childNodes = node.getChildNodes();
    childNodes.forEach(r => {
        c = "rgba(0,0,255,0.1)";
        t = 10;
        node.connect(r, c, t);
        getChildrenRecursively(r);
    });
}