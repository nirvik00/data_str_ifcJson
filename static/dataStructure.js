//
//
//

function Node(keyname, val, lvl, arrIndex) {
    this.keyName = keyname;
    this.value = val;
    this.arrayIndex = parseInt(arrIndex);
    this.parentNodes = [];
    this.childNodes = [];
    this.level = lvl;
    this.pos = { x: -1, y: -1 };
    this.addParent = (p) => { this.parentNodes.push(p) }
    this.addChild = (c) => { this.childNodes.push(c) }
    this.getChildNodes = () => { return this.childNodes; }
    this.getParentNodes = () => {
        return this.parentNodes;
    }
    this.mosDist=Number.MAX_SAFE_INTEGER + 1;
    this.getParentNodesKeynames = () => {
        let parentKeyNames = [];
        this.parentNodes.forEach(e => {
            parentKeyNames.push(e.keyName);
        })
        return parentKeyNames;
    }
    this.hasChild = () => {
        if (this.getChildNodes().length > 0) {
            return true;
        }
        return false;
    }
    this.hasParent = () => {
        if (this.getParentNodes().length > 0) {
            return true;
        }
        return false;
    }
    this.getSiblings = (nodeArr) => {
        let siblingArr = [];
        let parents = this.getParentNodes();
        if (typeof (parents) == 'undefined') { }
        else {
            for (var i = 0; i < parents.length; i++) {
                let p = parents[i];
                for (var j = 0; j < nodeArr.length; j++) {
                    var node = nodeArr[j];
                    var parentArr = node.getParentNodes();
                    for (var k = 0; k < parentArr.length; k++) {
                        if (parentArr[k].keyName === p.keyName) {
                            siblingNode = true;
                            break;
                        }
                    }
                    if (siblingNode === true) {
                        siblingArr.push(node);
                    }
                }
            }
        }
        let sib = [];
        siblingArr.forEach(e => {
            sib.push(e.keyName);
        });
    }
    this.print = () => {
        let s = '--> ' + this.keyName + "\n";
        s += '\tparent key-> ' + this.getParentNodesKeynames() + "\n";
        s += '\tvalue->' + this.value + "\n";
        s += '\tarray-index->' + this.arrayIndex + "\n";
        s += '\ttree-depth->' + this.level + "\n";
        s += '\n';
        console.log(s);
    }
    this.drawNodes = (ctx, nodeArr, color, tk) => {
        SC = (document.getElementById('treeHt').value / 100);
        Radius = (document.getElementById('radius').value / 100);

        ctx.strokeStyle = color;
        let parents = this.getParentNodes();
        parents.forEach(e => {
            if (e.pos.x > -1 && e.pos.y > -1) {
                ctx.beginPath();
                ctx.moveTo(e.pos.x, e.pos.y);
                ctx.lineTo(this.pos.x, this.pos.y);
                ctx.stroke();
            }
        });

        ctx.fillStyle = color;// 'rgba(0,0,0,0.25)';
        var R = ctx.canvas.width * SC / 50;
        var F = ctx.canvas.width * SC / 60;
        ctx.lineWidth = tk;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, R * Radius, 0, 2 * Math.PI);
        ctx.fill();

        var W = Math.round(ctx.measureText(this.keyName).width);
        ctx.fillStyle = 'rgb(255,255,0)';
        ctx.beginPath();
        ctx.rect(this.pos.x - 10, this.pos.y + 27, W, F);
        ctx.fill();

        ctx.font = Radius * 20 + "px Arial";
        let x = this.pos.x;
        let y = this.pos.y;
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fillText(this.keyName, this.pos.x - 10, this.pos.y + 40);
    }
}




