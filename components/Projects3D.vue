<template>
  <div class="Projects3D" id="webGL-container">

  </div>
</template>

<script type="text/ecmascript-6">
  import * as THREE from 'three';
  export default {
    props: {
      color: String,
      bgColor: String,
      progress: Number
    },
    mounted () {
//      const scene = new THREE.Scene()
//      const renderer = new THREE.WebGLRenderer()
//      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 800)
//
//      var loader = new THREE.JSONLoader()

// load a resource
//      loader.load(
//        // resource URL
//        '/project3d.json',
//
//        // onLoad callback
//        function ( geometry, materials ) {
//          var material = materials[0]
//          var object = new THREE.Mesh( geometry, material)
//          scene.add( object )
//        },
//
//        // onProgress callback
//        function ( xhr ) {
//          console.log( (xhr.loaded / xhr.total * 100) + '% loaded' )
//        },
//
//        // onError callback
//        function( err ) {
//          console.log( 'An error happened' )
//        }
//      );
//
//      var light = new THREE.PointLight()
//      light.position.set(200, 200, 400)
//      scene.add(light)
//
//      renderer.setSize(800,800)
//
//      // 将渲染器的输出（此处是 canvas 元素）插入到 body 中
//      document.getElementById('webGL-container').appendChild(renderer.domElement)
//      // 渲染，即摄像机拍下此刻的场景
//      renderer.render(scene, camera)



      var blue = new THREE.Color(0x7658ef)
      var pink = new THREE.Color(0xfca4c5)

      var scene = new THREE.Scene()
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

      var renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setSize( 800, 800 )
      document.getElementById('webGL-container').appendChild( renderer.domElement )

      //THREEx.WindowResize(renderer, camera);
      var shape = []
      const geometry = new THREE.IcosahedronGeometry(2.5,0);
      const material = new THREE.MeshNormalMaterial({ color: 0x0000ff });
      shape[0] = new THREE.Mesh( geometry, material );
      shape[1] = new THREE.Mesh( geometry, material );
      shape[2] = new THREE.Mesh( geometry, material );
      shape[0].position.set(0,5,0);
      shape[1].position.set(0,5,0);
      shape[2].position.set(0,5,0);
      scene.add(shape[0],shape[1],shape[2]);

      var light = new THREE.PointLight(0xfca4c5);
      light.position.set(0,250,0);
      scene.add(light);

      camera.position.set(3,4,10); // x y z

      function render() {
        requestAnimationFrame( render );

        shape[0].rotation.x += 0.035;
        shape[0].rotation.y -= 0.005;
        shape[1].rotation.y += 0.015;
        shape[1].rotation.z -= 0.005;
        shape[2].rotation.z -= 0.025;
        shape[2].rotation.x += 0.005;
        renderer.render(scene, camera);
      }
      render();

    },
    computed: {
    }
  }
</script>

<style lang="scss">
  .Projects3D {
    position: absolute;
    width: 80vw;
    height: 80vh;
  }


</style>
