function init3d() {
    scene3d = new THREE.Scene();

    camera3d = new THREE.PerspectiveCamera(45, 1, 0.01, 10000);
    camera3d.up = new THREE.Vector3(0, 0, 1);
    camera3d.lookAt(0,0,0);
    camera3d.position.set(200, 0, 200);

    renderer3d = new THREE.WebGLRenderer({ antialias: true });
    renderer3d.setSize(500, 500);

    //let div=document.getElementById("div3d");
    document.body.appendChild(renderer3d.domElement);

    controls3d = new THREE.OrbitControls(camera3d, renderer3d.domElement);
    controls3d.addEventListener('change', render3d);

    var axes = new THREE.AxesHelper(50);
    scene3d.add(axes);

    var l = new THREE.PointLight(0xffffff, 1, 100);
    l.position.set(0, 0, 50);
    var l2 = new THREE.PointLight(0xffffff, 1, 100);
    l2.position.set(0, 0, -50);
    var l3 = new THREE.AmbientLight(0xff552a);
    scene3d.add(l3);
    scene3d.add(l);
    scene3d.add(l2);

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
