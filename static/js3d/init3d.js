function init3d() {
    scene3d = new THREE.Scene();
    scene3d.background = new THREE.Color(0xfffff0);

    camera3d = new THREE.PerspectiveCamera(45, 1, 0.01, 10000);
    camera3d.up = new THREE.Vector3(0, 0, 1);
    camera3d.lookAt(250, 0, 0);
    camera3d.position.set(-200, -200, 50);

    renderer3d = new THREE.WebGLRenderer({ antialias: true });
    renderer3d.setSize(500, 500);

    let div = document.getElementById("div3d");
    div.appendChild(renderer3d.domElement);

    controls3d = new THREE.OrbitControls(camera3d, renderer3d.domElement);
    controls3d.addEventListener('change', render3d);

    var axes = new THREE.AxesHelper(50);
    scene3d.add(axes);

    var l = new THREE.PointLight(0xffffff, 1, 100);
    l.position.set(0, 50, 150);
    var l2 = new THREE.PointLight(0xffffff, 1, 100);
    l2.position.set(0, 50, 250);
    var l3 = new THREE.AmbientLight(0xffffff);
    scene3d.add(l3);
    scene3d.add(l);
    scene3d.add(l2);

    var g = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    var m = new THREE.MeshPhongMaterial({
        color: 0xffeeee,
        side: THREE.DoubleSide
    });
    let me = new THREE.Mesh(g, m);
    scene3d.add(me);

    addData();
    render3d();
}

function onWindowResize() {
    camera3d.aspect = 1;
    camera3d.updateProjectionMatrix();
}

function render3d() {
    renderer3d.render(scene3d, camera3d);
}


function addData() {
    NodeArr.forEach(node => {
        if (node.keyName === "items") {

            let val = node.value[0];
            let loader = new THREE.OBJLoader();
            let objdata = loader.parse(val);
            objdata.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                    obj.material = f2();
                }
            });
            scene3d.add(objdata);
        }
    });
}

function f2() {
    let r = Math.round(Math.random() * 250);
    let g = Math.round(Math.random() * 250);
    let b = Math.round(Math.random() * 250);
    let m = new THREE.MeshPhongMaterial({
        color: new THREE.Color('rgb(' + r + ', '+ g +',' + b + ')')
    });
    return m;
}