//
//
//
//
function generateRelation(data) {
    // console.log(data);
    var nodeArr = [];
    let k = 0;
    for (let i = 0; i < data.length; i++) {
        var level = 0
        var parent = new Node('arrayIndex-' + i, data[i], 0, k);
        nodeArr.push(parent);
        taverseJSON(parent, data[i], level, nodeArr);
        k++;
    }

    nodeArr.sort((a, b) => (a.level < b.level) ? -1 : 1);
    nodeArr.sort((a, b) => (a.arrayIndex < b.arrayIndex) ? -1 : 1);

    return nodeArr;
}

function taverseJSON(parent, data, level, nodeArr) {
    level++;
    if (typeof (data) == 'object') {
        for (var keys in data) {
            var node = new Node(keys, data[keys], level, parent.arrayIndex);
            node.addParent(parent);
            nodeArr.push(node);
            taverseJSON(node, data[keys], level, nodeArr);
        }
    } else {
        var node = new Node(data, data, level, parent.arrayIndex);
        node.addParent(parent);
        nodeArr.push(node);
    }
}


function generateGraphs(data) {

    // DFS -> depth-first-search
    var dfsArr = [];
    traverseDFS("root", data, dfsArr);
    var maxD = 0;
    for (var i = 0; i < dfsArr.length; i++) {
        if (dfsArr[i].split('.').length > maxD) {
            maxD = dfsArr[i].split('.').length;
        }
    }

    // BFS -> breadth-first-search
    var bfsArr = [];
    var k = 0;
    for (var i = 0; i < maxD; i++) {
        arr3 = [];
        for (var j = 0; j < dfsArr.length; j++) {
            var b = dfsArr[j].split('.');
            if (b.length >= k) {
                arr3.push(b[k]);
            }
        }
        bfsArr.push(arr3);
        k++;
    }

    var maxL = 0;
    for (var i = 0; i < bfsArr.length; i++) {
        if (bfsArr[i].length > maxL) {
            maxL = bfsArr[i].length;
        }
    }
    


    return { 'dfsarr': dfsArr, 'bfsarr': bfsArr, 'maxd': maxD, 'maxl': maxL };
}


function traverseDFS(p, o, dfsArr) {
    var type = typeof o;
    if (type == "object") {
        for (var key in o) {
            traverseDFS(p + "." + key, o[key], dfsArr);
        }
    } else {
        dfsArr.push(p + "." + o);
    }
}

function isInArray(e, arr) {
    var t = false; // not in array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            t = true;
            break;
        }
    }
    return t;
}