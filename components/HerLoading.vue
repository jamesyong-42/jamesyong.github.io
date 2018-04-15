<template>
  <div id="HerLoading">


  </div>
</template>
<script type="text/ecmascript-6">
  import * as THREE from 'three'
  THREE.Cache.enabled = true
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: {
      progress: Number,
      width: Number,
      height: Number,
      loadingAnimationSpeedUp: Boolean
    },
    data () {
      return {

        cameraTravelledStep: 1,
        cameraRotationStep: 0.0,


        geom: null,

        splineLength: 0,
        textPlane: null,
        canvas: null,
        radius: 20,

        scene:null,
        webGLRenderer: null,
        wormhole: null,
        camera: null,
        spline: null,

      }
    },
    computed: {
      ...mapGetters({
        wormholeCache: 'wormholeCache'
      })
    },
    mounted () {
      this.init()
    },
    watch: {
      progress (val) {
        if (val > this.cueIn && val < this.cueOut) {
          const progress = (val - this.cueIn) / (this.cueOut - this.cueIn)

          this.scroll(progress)
        }
      }
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.resizeHandler)
    },
    methods: {
      ...mapActions({
        setWormholeCache: 'setWormholeCache'
      }),



      init () {

        this.container = document.getElementById('HerLoading')

        this.containerW = window.innerWidth
        this.containerH = window.innerHeight

        this.canvassize = this.containerW * 0.618


        this.length = 30
        this.radius = 5.6

        this.rotatevalue = 0.035
        this.acceleration = 0
        this.animatestep = 0
        this.bgColor = 0x1abc9c
        this.bgColorStr = "#1ABC9C"

        this.pi2 = Math.PI * 2

        this.group = new THREE.Group()



        this.camera = new THREE.PerspectiveCamera(65, 1, 1, 10000)
        this.camera.position.z = 150

        this.scene = new THREE.Scene()
        // scene.add(new THREE.AxisHelper(30));
        this.scene.add(group)

        this.mesh = new THREE.Mesh(
          new THREE.TubeGeometry(
            new (THREE.Curve.create(() => {},
            (percent) => {

              let x = this.length * Math.sin(this.pi2 * percent)
              let y = this.radius * Math.cos(this.pi2 * 3 * percent)

              let t = percent % 0.25 / 0.25
              t = percent % 0.25 - (2 * (1 - t) * t * - 0.0185 + t * t * 0.25)
              if (Math.floor(percent / 0.25) === 0 || Math.floor(percent / 0.25) === 2) {
                t *= -1
              }
              let z = this.radius * Math.sin(this.pi2 * 2 * (percent - t))

              return new THREE.Vector3(x, y, z)

            }
          ))(), 200, 1.1, 2, true),
          new THREE.MeshBasicMaterial({
            color: 0xffffff
            // , wireframe: true
          })
        )
        this.group.add(this.mesh)

        this.ringcover = new THREE.Mesh(new THREE.PlaneGeometry(50, 15, 1), new THREE.MeshBasicMaterial({color: this.bgColor, opacity: 0, transparent: true}))
        this.ringcover.position.x = this.length + 1
        this.ringcover.rotation.y = Math.PI / 2
        this.group.add(this.ringcover)

        this.ring = new THREE.Mesh(new THREE.RingGeometry(4.3, 5.55, 32), new THREE.MeshBasicMaterial({color: 0xffffff, opacity: 0, transparent: true}))
        this.ring.position.x = this.length + 1.1
        this.ring.rotation.y = Math.PI / 2
        this.group.add(this.ring)

        // fake shadow
        (() => {
          let plain, i
          for (i = 0; i < 10; i++) {
            plain = new THREE.Mesh(new THREE.PlaneGeometry(this.length * 2 + 1, this.radius * 3, 1), new THREE.MeshBasicMaterial({color: this.bgColor, transparent: true, opacity: 0.13}))
            plain.position.z = -2.5 + i * 0.5
            this.group.add(plain)
          }
        })()

        this.renderer = new THREE.WebGLRenderer({
          antialias: true
        })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(this.width, this.height)

        this.renderer.setClearColor(this.bgColorStr)

        this.wrap.appendChild(this.renderer.domElement)

        this.animate()

















//        if (this.wormholeCache) {
//          this.webGLRenderer = this.wormholeCache.webGLRenderer
//          this.wormhole = this.wormholeCache.wormhole
//          this.camera = this.wormholeCache.camera
//          this.spline = this.wormholeCache.spline
//          this.timeLine = this.wormholeCache.timeLine
//          this.scene = this.wormholeCache.scene
//
//        } else {
//          this.webGLRenderer = new THREE.WebGLRenderer( { antialias: true, alpha: true })
//          // console.log(this.$el.clientWidth, this.$el.clientHeight)
//          this.webGLRenderer.setSize(this.$el.clientWidth, this.$el.clientHeight)
//
//
//          // Creating the scene
//          this.scene = new THREE.Scene()
//          // Setting up the camera
//          this.camera = new THREE.PerspectiveCamera(60, this.$el.clientWidth / this.$el.clientHeight, 10, 1000)
//
//          this.geom = this.createWormholeGeo(100, this.radius, 70)
//
//          this.canvas = document.getElementById('timeLine')
//
//          this.canvas.width = this.spline.getLength()
//
//          this.canvas.height = this.radius * Math.PI * 15
//
//          const ctx = this.canvas.getContext('2d')
//
//          this.drawTimeLineTexL(ctx)
//
//          this.wormhole = this.createWormholeMesh(this.geom)
//
//          this.createTextPlane()
//
//          this.scene.add(this.wormhole)
//
//          this.setWormholeCache({
//            webGLRenderer: this.webGLRenderer,
//            wormhole: this.wormhole,
//            camera: this.camera,
//            spline: this.spline,
//            timeLine: this.timeLine,
//            scene: this.scene
//          })
//        }
//
//        document.getElementById('Wormhole').append(this.webGLRenderer.domElement)
//
//        window.addEventListener('resize', this.resizeHandler)
//
//        this.render(0)
//        this.scroll(0)

      },
      tilt(percent) {
        this.group.rotation.y = percent * 0.5
      },
      render(progress) {

        this.animatestep = Math.max(0, Math.min(240, this.loadingAnimationSpeedUp ? this.animatestep + 1 : this.animatestep - 4))
        this.acceleration = this.easing(this.animatestep, 0, 1, 240)

        if (this.acceleration > 0.35) {
          progress = (this.acceleration-0.35) / 0.65
          this.group.rotation.y = -Math.PI / 2 * progress
          this.group.position.z = 50 * progress
          progress = Math.max(0, (this.acceleration - 0.97) / 0.03)
          this.mesh.material.opacity = 1 - progress
          this.ringcover.material.opacity = this.ring.material.opacity = progress
          this.ring.scale.x = this.ring.scale.y = 0.9 + 0.1 * progress
          if(progress >= 1){
            loadingAnimationComplete = true
          }
        }

        this.renderer.render(this.scene, this.camera)

      },
      animate() {
        this.mesh.rotation.x += (rotatevalue + acceleration + (loadingProgress/0.8*0.103))
        render()
        requestAnimationFrame(animate)
      },
      easing(t,b,c,d) {if((t/=d/2)<1)return c/2*t*t+b;return c/2*((t-=2)*t*t+2)+b;},
//      render (progress) {
//        const pos1 = this.spline.getPointAt(progress)
//        const pos2 = this.spline.getPointAt(progress + 0.0002)
//        this.camera.position.set(pos1.x, pos1.y, pos1.z)
//        this.camera.lookAt(pos2)
//
//        this.webGLRenderer.render(this.scene, this.camera)
//      },

      resizeHandler () {
        this.webGLRenderer.setSize(this.$el.clientWidth, this.$el.clientHeight)
        this.camera.aspect = this.$el.clientWidth / this.$el.clientHeight
        this.camera.updateProjectionMatrix()
        this.webGLRenderer.render(this.scene, this.camera)
      }
    }
  }
</script>

<style lang="scss">
  #Wormhole {
    width: 100vw;
    height: calc(100vh + 150px);
    position: fixed;
    top:0;
    left:-50%;
    @media (max-width: 768px) {
      left:0;
    }
    z-index: 999;
  }

</style>
