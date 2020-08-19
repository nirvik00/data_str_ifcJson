

function addData() {
    NodeArr.forEach(node => {
        if (node.keyName === "items") {
            let val = node.value[0];
            let loader = new THREE.OBJLoader();
            let objdata = loader.parse(val);
            scene3d.add(objdata);

            /* var loader = new THREE.OBJLoader();
            var obj3D = loader.parse(DATA[0]);
            scene.add(obj3D); */

        }
    })
}