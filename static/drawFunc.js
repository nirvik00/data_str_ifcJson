//
//
//
function drawTree() {
    let nodesOnCanvas = [];

    var arrIndex = parseInt(document.getElementById("selArr").value);
    HT = Math.round(document.getElementById("treeHt").value);
    Radius = (document.getElementById('radius').value / 100);

    let nodeArr = NodeArr;
    let numLevels = nodeArr[nodeArr.length - 1].level + 1;

    let currentLevel = 0;
    while (currentLevel < numLevels + 1) {
        let nodes = [];
        let posY = 20 + (currentLevel * CANVAS.height / (numLevels + 1));
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
                x: CANVAS.width / 2,
                y: posY
            };
        } else {
            let a = 20;
            let dimX = (CANVAS.width - 2.5*a) / nodes.length;
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
//
//
//
function tabularNodeDetails(searchResultNodes) {
    console.log("tabulate: ", searchResultNodes);

    CANVAS.style.display = 'none';
    let tbl = document.createElement('table');
    tbl.className = "dynamic-table";
    tbl.setAttribute("id", "dynamicTableId")

    let tr = document.createElement('tr');
    let td0 = document.createElement('th');
    td0.innerHTML = 'Array Index';
    let td1 = document.createElement('th');
    td1.innerHTML = "Parent Nodes";
    let td2 = document.createElement('th');
    td2.innerHTML = "Node Keyname";
    let td3 = document.createElement('th');
    td3.innerHTML = "Node Values";
    let td4 = document.createElement('th');
    td4.innerHTML = "Child Nodes";
    let td5 = document.createElement('th');
    td5.innerHTML = 'Tree-Depth';

    td0.setAttribute("id", "dynamic-cell-header");
    td1.setAttribute("id", "dynamic-cell-header");
    td2.setAttribute("id", "dynamic-cell-header");
    td3.setAttribute("id", "dynamic-cell-header");
    td4.setAttribute("id", "dynamic-cell-header");
    td5.setAttribute("id", "dynamic-cell-header");

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbl.appendChild(tr);

    tr.setAttribute("id", "dynamic-row-header");

    var arrIndex = parseInt(document.getElementById('selArr').value);

    if (searchResultNodes.length === 0 && arrIndex === -1) {
        NodeArr.forEach(node => {
            let tr = getRows(node);
            tbl.appendChild(tr);
        });
    } else {
        for (let i = 0; i < searchResultNodes.length; i++) {
            let node = searchResultNodes[i];
            let tr = getRows(node);
            tbl.appendChild(tr);
        }
    }
    document.body.appendChild(tbl);
}
//
//
//
function getRows(node) {
    let parents = node.getParentNodesKeynames().toString().trim();
    if (parents === "") {
        parents = "ROOT";
    }
    let child = node.getChildNodeKeyNames().toString();

    let tr = document.createElement('tr');

    let td0 = document.createElement('td');
    td0.innerHTML = node.arrayIndex;

    let td1 = document.createElement('td');
    td1.innerHTML = parents;

    let td2 = document.createElement('td');
    td2.innerHTML = node.keyName;

    let td3 = document.createElement('td');
    td3.innerHTML = node.value;

    let td4 = document.createElement('td');
    td4.innerHTML = child;

    let td5 = document.createElement('td');
    td5.innerHTML = node.level;

    td0.setAttribute("id", "dynamic-cell");
    td1.setAttribute("id", "dynamic-cell");
    td2.setAttribute("id", "dynamic-cell");
    td3.setAttribute("id", "dynamic-cell");
    td4.setAttribute("id", "dynamic-cell");
    td5.setAttribute("id", "dynamic-cell");

    tr.setAttribute("id", "dynamic-row");

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    return tr;
}


