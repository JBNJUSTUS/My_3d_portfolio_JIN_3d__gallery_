// Initialize Three.js scene
let scene, camera, renderer, model, controls;

// Model path - update this for each model
const MODEL_PATH = 'path/to/your/model.glb';

init();

function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.7 / (window.innerHeight * 0.7), 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('model-container').appendChild(renderer.domElement);
    
    // Add orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Load model
    const loader = new THREE.GLTFLoader();
    loader.load(
        MODEL_PATH,
        function (gltf) {
            model = gltf.scene;
            scene.add(model);
            
            // Center the model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);
            
            // Auto-rotate for presentation
            // controls.autoRotate = true;
            // controls.autoRotateSpeed = 1.0;
            
            // Adjust camera based on model size
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));
            camera.position.z = cameraZ * 1.5;
            controls.update();
        },
        undefined,
        function (error) {
            console.error('An error happened loading the model:', error);
        }
    );
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    // Back button functionality
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'your-portfolio.html'; // Update with your portfolio page
    });
    
    // Start animation loop
    animate();
}

function onWindowResize() {
    camera.aspect = (window.innerWidth * 0.7) / (window.innerHeight * 0.7);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}