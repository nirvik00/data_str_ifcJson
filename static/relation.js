
function generateRelation(data) {
    // console.log(data);
    var NodeArr = [];
    let k=0;
    for (let i = 0; i < data.length; i++) {
        var level = 0
        var parent = new Node('arrayIndex-'+i, data[i], 0, k);
        NodeArr.push(parent);
        getChildrenJSON(parent, data[i], level, NodeArr);
        k++;
    }
    NodeArr.sort((a, b) => (a.level < b.level) ? -1 : 1);
    NodeArr.sort((a, b) => (a.arrayIndex < b.arrayIndex) ? -1 : 1);

    return NodeArr;
}

function getChildrenJSON(parent, data, level, nodeArr) {
    level++;
    if (typeof (data) == 'object') {
        for (var keys in data) {
            var node = new Node(keys, data[keys], level, parent.arrayIndex);
            node.addParent(parent);
            nodeArr.push(node);
            getChildrenJSON(node, data[keys], level, nodeArr);
        }
    } else {
        var node = new Node(data, data, level, parent.arrayIndex);
        node.addParent(parent);
        nodeArr.push(node);
    }
}
