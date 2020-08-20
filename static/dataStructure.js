//
//
//
function Node(keyname, val, lvl, arrIndex) {
    this.keyName = keyname.toString().trim().toLowerCase();
    this.value = val;
    this.arrayIndex = parseInt(arrIndex);
    this.level = lvl;
    this.pos = { x: -1, y: -1 };

    ////
    this.parentNodes = [];
    this.addParent = (p) => { this.parentNodes.push(p) }
    this.getParentNodes = () => { return this.parentNodes; }
    this.getParentNodesKeynames = () => {
        let parentKeyNames = [];
        this.parentNodes.forEach(e => {
            parentKeyNames.push(e.keyName);
        })
        return parentKeyNames;
    }
    this.hasParent = () => {
        if (this.getParentNodes().length > 0) {
            return true;
        }
        return false;
    }

    ////
    this.childNodes = [];
    this.addChild = (c) => { this.childNodes.push(c) }
    this.getChildNodes = () => { return this.childNodes; }
    this.getChildNodeKeyNames = () => {
        let childKeyNames = [];
        this.childNodes.forEach(r => {
            childKeyNames.push(r.keyName);
        });
        return childKeyNames;
    }

    ////
    this.hasChild = () => {
        if (this.getChildNodes().length > 0) {
            return true;
        }
        return false;
    }

    ////
    this.print = () => {
        let s = '--> ' + this.keyName + "\n";
        s += '\tparent keys-> ' + this.getParentNodesKeynames() + "\n";
        s += '\tchild keys-> ' + this.getChildNodeKeyNames() + "\n";
        s += '\tvalue->' + this.value + "\n";
        s += '\tarray-index->' + this.arrayIndex + "\n";
        s += '\ttree-depth->' + this.level + "\n";
        s += '\n';
        console.log(s);
        return s;
    }

    ////
    this.highlightNode = false;

    ////
    this.drawNodes = (CTX, nodeArr) => {
        let HT = (document.getElementById('treeHt').value / 100);
        let Radius = (document.getElementById('radius').value / 100);

        let nodeColor = 'rgba(120,120,120,0.75)';
        let connectColor = 'rgba(150,150,150,0.75)'
        let tk = 1;
        if (this.highlightNode == true) {
            nodeColor = 'rgb(255,0,0)';
        }

        // connect parent-child nodes
        CTX.strokeStyle = connectColor;
        let parents = this.getParentNodes();
        parents.forEach(e => {
            if (e.pos.x > -1 && e.pos.y > -1) {
                CTX.beginPath();
                CTX.moveTo(e.pos.x, e.pos.y);
                CTX.lineTo(this.pos.x, this.pos.y);
                CTX.stroke();
            }
        });

        // draw the node
        CTX.fillStyle = nodeColor;// 'rgba(0,0,0,0.25)';
        var R = CTX.canvas.width * HT / 50;
        var F = CTX.canvas.width * HT / 60;
        CTX.lineWidth = tk;
        CTX.beginPath();
        CTX.arc(this.pos.x, this.pos.y, R * Radius/2, 0, 2 * Math.PI);
        CTX.fill();

        // write keyname
        let name=this.keyName;
        if(this.keyName>10){
            let name=this.keyName.slice(0,5);
        }
        var W = Math.round(CTX.measureText(name).width);
        CTX.fillStyle = 'rgb(255,255,0)';
        CTX.beginPath();
        CTX.rect(this.pos.x - 10, this.pos.y + ((R * Radius/2)+5), W, Radius * 20);
        CTX.fill();
        CTX.font = Radius * 20 + "px Arial";
        let x = this.pos.x;
        let y = this.pos.y;
        CTX.fillStyle = 'rgba(0,0,0,1)';
        CTX.fillText(name, this.pos.x - 10, this.pos.y + ((R * Radius/2) + 20));
    }

    ////
    this.connect = (node, connectColor, tk) => {
        CTX.strokeStyle = connectColor;
        CTX.lineWidth = tk;
        CTX.beginPath();
        if(node.pos.x>0 || node.pos.y>0 || this.pos.x>0 || this.pos.y>0){
            if(node.pos.x<500 || node.pos.y<500 || this.pos.x<500 || this.pos.y<500){
                CTX.moveTo(node.pos.x, node.pos.y);
                CTX.lineTo(this.pos.x, this.pos.y);
                CTX.stroke();
            }
        }
    }
}




