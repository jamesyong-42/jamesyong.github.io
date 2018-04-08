<template>
  <div id="Wormhole">
    <canvas id="timeLineL"></canvas>
    <!--<canvas id="timeLineText"></canvas>-->

  </div>
</template>
<script type="text/ecmascript-6">
  import * as THREE from 'three'
  THREE.Cache.enabled = true

//  CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight) {
//    if (typeof text !== 'string' || typeof x !== 'number' || typeof y !== 'number') {
//      return
//    }
//    const context = this
//    const canvas = context.canvas
//
//    if (typeof maxWidth === 'undefined') {
//      maxWidth = (canvas && canvas.width) || 300
//    }
//    if (typeof lineHeight === 'undefined') {
//      lineHeight = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight)
//    }
//
//    // 字符分隔为数组
//    let arrText = text.split('')
//    let line = ''
//
//    for (let n = 0; n < arrText.length; n++) {
//      let testLine = line + arrText[n]
//      let metrics = context.measureText(testLine)
//      let testWidth = metrics.width
//      if (testWidth > maxWidth && n > 0) {
//        context.fillText(line, x, y)
//        line = arrText[n]
//        y += lineHeight
//      } else {
//        line = testLine
//      }
//    }
//    context.fillText(line, x, y)
//  }

  export default {
    props: {
      scrollOffset: Number,
      cueIn: Number,
      cueOut: Number
    },
    data () {
      return {

        cameraTravelledStep: 1,
        cameraRotationStep: 0.0,

        webGLRenderer: null,
        camera: null,
        geom: null,
        spline: null,
        splineLength: 0,
        wormhole: null,

        textPlane: null,

        cameraTravelIncrement: 0.0002,
        cameraRotationIncrement: 0.0025,

        canvasL: null,
        canvasR: null,
        radius: 20,

        timeLine: [
          {
            time: '2016.2-2016.10',
            title: 'keypoint',
            content: '受App Beats Music 的设计启发制作的灵感记录APP，使用Swift开发，整个开发侧重交互效果的设计与实现，如在UI编写中运用官方UIDynamic库中的场效应与碰撞效应实现主界面元素的交互等',
            contentPos: null,
            width: 30,
            height: 15,
            tags: ['Swift'],
            inheritTag: [],
            inheritTagPos: [],
            inheritTagLineA1Offset: 0,
            inheritTagLineLength: [],
            inheritNodePos: {},
            mesh: null
          },
          {
            time: '2016.7-2016.8',
            title: '书香',
            content: '加入了一位大学老师的项目组，对一个公益捐书网站项目进行了项目需求分析，原型设计，数据模型抽象及接口定义。期间用Axure设计了原型，并为开发小组搭建了开发环境，普及了git知识，并用Tower管理和书写项目文档',
            contentPos: null,
            width: 30,
            height: 20,
            tags: ['Axure'],
            inheritTag: [],
            inheritTagPos: [],
            inheritTagLineA1Offset: 0,
            inheritTagLineLength: [],
            inheritNodePos: {},
            mesh: null
          },
          {
            time: '2016.8-2016.10',
            title: '君酒',
            content: '项目组的实际开发项目，一个后台管理网站，技术选用Java，边学边推进项目，由于其他成员忙于专业课，独自承担前后端所有开发任务，开发过程中用工厂模式对后台进行了一次重构，压缩了60%的代码。前端代码后期转型Vue',
            contentPos: null,
            width: 30,
            height: 20,
            tags: ['JavaSE', 'JavaWEB', 'MySQL', 'Mybatis', 'jQuery', 'html/css/js', 'Bootstrap'],
            inheritTag: [4, 5],
            inheritTagPos: [],
            inheritTagLineA1Offset: 0,
            inheritTagLineLength: [],
            inheritNodePos: {},
            mesh: null
          },
          {
            time: '2016.11-2016.12',
            title: 'mathlab',
            content: '作为课程《数值计算方法》的课程设计，对书中每章的重要算法共计32种用C++编程实现，包括数值微分、积分，曲线拟合，矩阵运算，微分方程求解等。并将运算结果用web进行展示，使用了Chart.js和Plotly.js',
            contentPos: null,
            width: 30,
            height: 20,
            tags: ['   ', 'C++', 'SCSS', 'ES6', 'Vue', 'Webpack'],
            inheritTag: [0, 2, 3, 4, 5],
            inheritTagPos: [],
            inheritTagLineA1Offset: 0,
            inheritTagLineLength: [],
            inheritNodePos: {},
            mesh: null
          },
          {
            time: '2017.1-2017.6',
            title: '艾瑞云',
            content: '项目组的实际开发项目，负责开发一个后台管理前端，与老师写的C++后台通信，为了更好地协调，采用前后端分离策略，搭建Node.js服务端做中间件与C++后台用Socket通信，同时给前端提供RESTful API，前端用Vue开发',
            contentPos: null,
            width: 30,
            height: 10,
            tags: ['   ', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket', 'JSON', 'RestfulAPI'],
            inheritTag: [0, 1, 2, 3, 4, 7],
            inheritTagPos: [],
            inheritTagLineA1Offset: 0,
            inheritTagLineLength: [],
            inheritNodePos: {},
            mesh: null
          },
          {
            time: '2017.1-2018.3',
            title: 'vue trinity',
            content: '在之前项目开发过程中不断积累起来的前后端分离系统，可作为简单商城网站。由三部分组成，前端、后台管理前端以及负责API的后端。',
            contentPos: null,
            width: 30,
            height: 10,
            tags: ['   ', 'JavaSE', 'JavaWEB', 'MySQL'],
            inheritTag: [0],
            inheritTagPos: [],
            inheritTagLineA1Offset: 0,
            inheritTagLineLength: [],
            inheritNodePos: {},
            mesh: null
          },
          {
            time: '2018.1-2018.3',
            title: 'matrix',
            content: '苦于没有好看的本地影视管理软件，于是用Electron.js自行开发，开发侧重设计，在UI效果上实现了类似Netflix Logo动画的加载动效，由于精力有限，数据接口还未开发，敬请期待',
            contentPos: null,
            width: 30,
            height: 10,
            tags: ['   ', 'JavaSE', 'JavaWEB', 'MySQL'],
            inheritTag: [0],
            inheritTagPos: [],
            inheritTagLineA1Offset: 0,
            inheritTagLineLength: [],
            inheritNodePos: {},
            mesh: null
          },
          {
            time: '2018.3-',
            title: '个人网站与博客',
            content: '曾受大神WenliZhang的启发，用jekyll开发了个人博客并用github托管，后来为了开发更复杂的页面放弃jekyll，转用Nuxt.js结合github GraphQL API搭建新博客，详情见github' +
            '个人网站项目，侧重设计，实现了大量不同类型的视差滚动效果，并用贝塞尔函数重新映射速度曲线使视觉效果更加自然。实现了SVG路径填充动效，路径跟随动效以及基于贝塞尔曲线操作的路径变换动效。',
            contentPos: null,
            width: 30,
            height: 10,
            tags: ['   ', 'JavaSE', 'JavaWEB', 'MySQL'],
            inheritTag: [],
            inheritTagPos: [],
            inheritTagLineA1Offset: 0,
            inheritTagLineLength: [],
            inheritNodePos: {},
            mesh: null
          }
        ]
      }
    },
    mounted () {
      this.init()
    },
    watch: {
      scrollOffset (val) {
        if (val > this.cueIn && val < this.cueOut) {
          const progress = (val - this.cueIn) / (this.cueOut - this.cueIn)
          // console.log(progress)
          this.scroll(progress)
        }
      }
    },
    methods: {
      init () {
        this.cameraTravelledStep = 1

        // Camera rotation around its z-axis (moving through the tunnel)
        this.cameraRotationStep = 0.0

        // Creating the renderer
        this.webGLRenderer = new THREE.WebGLRenderer( { antialias: true, alpha: true })
        console.log(this.$el.clientWidth, this.$el.clientHeight)
        this.webGLRenderer.setSize(this.$el.clientWidth, this.$el.clientHeight)
        document.getElementById('Wormhole').append(this.webGLRenderer.domElement)

        window.addEventListener('resize', this.resizeHandler)


        // Creating the scene
        this.scene = new THREE.Scene()
        // Setting up the camera
        this.camera = new THREE.PerspectiveCamera(60, this.$el.clientWidth / this.$el.clientHeight, 10, 1000)
        // this.camera.position.z = 0
        // this.camera.rotation.y = 0
        // this.camera.rotation.x = 0
        // Creating the tunnel and adding it to the scene
        this.geom = this.createWormholeGeo(this.timeLine.length, 100, this.radius, 70)

        this.canvasL = document.getElementById('timeLineL')

        this.canvasL.width = this.spline.getLength()

        this.canvasL.height = this.radius * Math.PI * 15

        const ctxL = this.canvasL.getContext('2d')

        this.drawTimeLineTexL(ctxL)

        this.wormhole = this.createWormholeMesh(this.geom)

        this.createTextPlane()

        this.scene.add(this.wormhole)


        // this.webGLRenderer.render(this.scene, this.camera)
        this.render(0)

      },
      drawTimeLineTexL (ctx) {
        ctx.font = `38px Arial`
        ctx.fillStyle = '#1c34ff'

        let gradient = ctx.createLinearGradient(0, 0, this.canvasL.width, 0)
        gradient.addColorStop(0, 'rgba(255, 102, 102, 1)')
        gradient.addColorStop(0.2, '#ffc1a4')
        gradient.addColorStop(0.4, '#ff235f')
        gradient.addColorStop(0.6, '#ff37f7')
        gradient.addColorStop(0.8, '#8657ff')
        gradient.addColorStop(1, '#5af8ff')
        ctx.fillStyle = gradient



        const startOffset = 1100

        ctx.fillRect(startOffset, 0 , this.canvasL.width - startOffset, this.canvasL.height)
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#000000'



        const triOffset = startOffset + 50

        this.drawTri(ctx, triOffset, 160, this.canvasL.height, 3)

//        const triOffset = startOffset + 50
//        const triDiv = this.canvasL.height / 6
//        const dist = 180
//        const dotA = 3 * triDiv
//        const dotB = triDiv
//        const dotC = 5 * triDiv
//        const dota1 = 0
//        const dota2 = this.canvasL.height
//        const dotb = 2 * triDiv
//        const dotc = 4 * triDiv
//        const hozBezCtrl = 0.5 * triDiv
//        const verBezCtrl = hozBezCtrl * 0.1
//        const frontX = triOffset
//        const backX = triOffset + dist
//        ctx.beginPath()
//        ctx.moveTo(triOffset + dist, dota1)
//        ctx.bezierCurveTo(backX, dota1 + hozBezCtrl, frontX + verBezCtrl, dotB, frontX, dotB)
//        ctx.bezierCurveTo(frontX + verBezCtrl, dotB, backX, dotb - hozBezCtrl, backX, dotb)
//        ctx.bezierCurveTo(backX, dotb + hozBezCtrl, frontX + verBezCtrl, dotA, frontX, dotA)
//        ctx.bezierCurveTo(frontX + verBezCtrl, dotA, backX, dotc - hozBezCtrl, backX, dotc)
//        ctx.bezierCurveTo(backX, dotc + hozBezCtrl, frontX + verBezCtrl, dotC, frontX, dotC)
//        ctx.bezierCurveTo(frontX + verBezCtrl, dotC, backX, dota2 - hozBezCtrl, backX, dota2)
//        ctx.stroke()


        const step = (this.canvasL.width - startOffset) / (this.timeLine.length + 1)
        const leftPos = this.canvasL.height * 0.5
        const bottomPos = this.canvasL.height * 0.75
        const rightPos = this.canvasL.height * 0.01
        const self = this
        this.timeLine.map((t, i) => {
          const timeOffset = startOffset + step * (i + 1)
          const gradOffset = timeOffset - 10
          const titleOffset = timeOffset + 250
          const contentOffset = titleOffset + 110
          const tagOffset = titleOffset + 150

          ctx.save()

          let gradient1 = ctx.createLinearGradient(gradOffset, 0, gradOffset + 100, 0)
          gradient1.addColorStop(0, 'rgba(28, 250, 255, 1)')
          gradient1.addColorStop(1, 'rgba(28, 250, 255, 0)')
          ctx.fillStyle = gradient1
          ctx.fillRect(gradOffset, 0, 100, self.canvasL.height)
          ctx.fillStyle = '#000000'
          ctx.textAlign = 'left'
          ctx.fillText(t.time, timeOffset, leftPos)
          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'center'

          ctx.translate( titleOffset, bottomPos)
          ctx.rotate(Math.PI / 2)
          ctx.font = `80px Arial`
          ctx.fillText(t.title, 0, 0)
          ctx.restore()

          self.drawTag (ctx, tagOffset, rightPos, 10, 30, t)

          t.contentPos = contentOffset

          t.inheritNodePos = {x: tagOffset, y: rightPos + 15}

          t.inheritTagLineA1Offset = tagOffset + 350
        })

        // this.drawTagInheritLine(ctx, 15)

//        ctx.fillText('111', this.canvasL.width * 0.2, 10)
//        ctx.save()
//        ctx.translate(this.canvasL.width * 0.3, this.canvasL.height * 0.75)
//        ctx.rotate(Math.PI / 2)
//        ctx.fillText('keypoint', 0, 0)
//        ctx.restore()
//        ctx.fillText('333', this.canvasL.width * 0.4, this.canvasL.height * 0.8)
//        ctx.fillText('444', this.canvasL.width * 0.5, this.canvasL.height * 0.8)
//        ctx.fillText('555', this.canvasL.width * 0.6, this.canvasL.height * 0.8)
//        ctx.fillText('666', this.canvasL.width * 0.7, this.canvasL.height * 0.8)
//        ctx.fillText('777', this.canvasL.width * 0.8, this.canvasL.height * 0.8)
//        console.log('JJJJJJJJJJJJJJJJJJJJJJJ')
      },
      drawTag (ctx, startX, startY, gap, height, timeLine) {


        let x0 = startX
        let y0 = startY
        let r = height / 2
        timeLine.tags.map((t, i) => {

          // const width = ctx.measureText(t)
          const width = ctx.measureText(t).width

          if (timeLine.inheritTag.indexOf(i) !== -1) {
            timeLine.inheritTagPos.push({x: x0 + width, y: y0 + height / 2})
          }

          ctx.fillStyle = '#3effc8'
          ctx.beginPath()
          ctx.moveTo(x0 + r, y0)
          ctx.arcTo(x0 + width, y0, x0 + width, y0 + height, r)
          ctx.arcTo(x0 + width, y0 + height, x0, y0 + height, r)
          ctx.arcTo(x0, y0 + height, x0, y0, r)
          ctx.arcTo(x0, y0, x0 + width, y0, r)
          ctx.fill()

          ctx.save()
          let gradient = ctx.createLinearGradient(-(x0 + width / 2), 0, this.canvasL.width-(x0 + width / 2), 0)
          gradient.addColorStop(0, 'rgba(255, 102, 102, 1)')
          gradient.addColorStop(0.2, '#ffc1a4')
          gradient.addColorStop(0.4, '#ff235f')
          gradient.addColorStop(0.6, '#ff37f7')
          gradient.addColorStop(0.8, '#8657ff')
          gradient.addColorStop(1, '#5af8ff')
          ctx.translate(x0 + width / 2, y0 + height / 2)
          ctx.rotate(Math.PI)
          ctx.font = `24px Arial`
          console.log('!!!!!!!!!!!!!!!!', ctx.measureText(t), width)

          ctx.fillStyle = gradient
          ctx.fillText(t, 0, 0)
          ctx.restore()
          y0 += (height + gap)
        })

      },
      drawTagInheritLine (ctx, gap, offset) {
        ctx.save()
        ctx.strokeStyle = '#3effc8'
        ctx.lineWidth = 1
        this.timeLine.map((t, i) => {
          if (t.inheritTagPos.length > 0) {
            const endNode = this.timeLine[i + 1].inheritNodePos
            t.inheritTagPos.map((p, j) => {
              if (offset > p.x && offset < endNode.x) {
                const index = t.inheritTag[j]
                const R = gap * index
                const r = gap
                const a1x = t.inheritTagLineA1Offset
                const a1y = p.y
                const startLine = a1x - p.x
                const midLine = (a1y - endNode.y) - R - r

                // console.log('GGGGGGGGGGGGGGG-' + i + '-' + t.title + '-' + j, midLine, a1x, a1y, startLine)

                if (midLine < 0) {
                  const totalLength = endNode.x - p.x
                  t.inheritTagLineLength.push(totalLength)

                  ctx.setLineDash([totalLength, totalLength * 10])
                  ctx.lineDashOffset = totalLength * (1 - Math.abs(offset - p.x) / (endNode.x - p.x))
                  ctx.beginPath()
                  ctx.moveTo(p.x, p.y)
                  ctx.lineTo(endNode.x, endNode.y)
                  ctx.stroke()

                } else {
                  const a2x = a1x + R
                  const a2y = p.y - R
                  const a3x = a2x

                  const a3y = a2y - midLine
                  const a4x = a3x + r
                  const a4y = endNode.y
                  const a5x = endNode.x
                  const endLine = a5x - a4x
                  const a5y = a4y
                  const totalLength = startLine + midLine + endLine + Math.PI * (R + r) * 0.5
                  t.inheritTagLineLength.push(totalLength)

                  // console.log('GGGGGGGGGGGGGGG-' + i + '-' + t.title, midLine, a1x, a1y, 'a2', a2x, a2y, R, 'a3', a3x, a3y, 'a4', a4x, a4y, r, a5x, a5y)
                  ctx.setLineDash([totalLength, totalLength * 10])
                  ctx.lineDashOffset = totalLength * (1 - Math.abs(offset - p.x) / (endNode.x - p.x))

                  ctx.beginPath()
                  ctx.moveTo(p.x, p.y)
                  ctx.lineTo(a1x, a1y)
                  ctx.arcTo(a2x, a1y, a2x, a2y, R)
                  ctx.lineTo(a3x, a3y)
                  ctx.arcTo(a3x, a4y, a4x, a4y, r)
                  ctx.lineTo(a5x, a5y)
                  ctx.stroke()
                }
              }

            })
          }

        })
        ctx.restore()

      },
      clearTagInheritLine (ctx, gap) {
        let gradient = ctx.createLinearGradient(0, 0, this.canvasL.width, 0)
        gradient.addColorStop(0, 'rgba(255, 102, 102, 1)')
        gradient.addColorStop(0.2, '#ffc1a4')
        gradient.addColorStop(0.4, '#ff235f')
        gradient.addColorStop(0.6, '#ff37f7')
        gradient.addColorStop(0.8, '#8657ff')
        gradient.addColorStop(1, '#5af8ff')
        ctx.save()

        ctx.lineWidth = 1
        this.timeLine.map((t, i) => {

          if (t.inheritTagPos.length > 0) {
            const endNode = this.timeLine[i + 1].inheritNodePos
            const gradOffset = this.timeLine[i + 1].inheritTagLineA1Offset - 760
            let gradient1 = ctx.createLinearGradient(gradOffset, 0, gradOffset + 100, 0)
            gradient1.addColorStop(0, 'rgba(28, 250, 255, 1.0)')
            gradient1.addColorStop(1, 'rgba(28, 250, 255, 0)')

            t.inheritTagPos.map((p, j) => {

              const index = t.inheritTag[j]
              const R = gap * index
              const r = gap
              const a1x = t.inheritTagLineA1Offset
              const a1y = p.y
              const startLine = a1x - p.x
              const midLine = (a1y - endNode.y) - R - r



                // console.log('GGGGGGGGGGGGGGG-' + i + '-' + t.title + '-' + j, midLine, a1x, a1y, startLine)

                if (midLine < 0) {
                  const totalLength = endNode.x - p.x
                  t.inheritTagLineLength.push(totalLength)
                  ctx.strokeStyle = gradient
                  ctx.beginPath()
                  ctx.moveTo(p.x, p.y)
                  ctx.lineTo(endNode.x, endNode.y)
                  ctx.stroke()

                  ctx.strokeStyle = gradient1
                  ctx.beginPath()
                  ctx.moveTo(gradOffset, p.y)
                  ctx.lineTo(gradOffset + 100, p.y)
                  ctx.stroke()


                } else {
                  const a2x = a1x + R
                  const a2y = p.y - R
                  const a3x = a2x

                  const a3y = a2y - midLine
                  const a4x = a3x + r
                  const a4y = endNode.y
                  const a5x = endNode.x
                  const endLine = a5x - a4x
                  const a5y = a4y
                  const totalLength = startLine + midLine + endLine + Math.PI * (R + r) * 0.5
                  t.inheritTagLineLength.push(totalLength)

                  // console.log('GGGGGGGGGGGGGGG-' + i + '-' + t.title, midLine, a1x, a1y, 'a2', a2x, a2y, R, 'a3', a3x, a3y, 'a4', a4x, a4y, r, a5x, a5y)
                  ctx.strokeStyle = gradient
                  ctx.beginPath()
                  ctx.moveTo(p.x, p.y)
                  ctx.lineTo(a1x, a1y)
                  ctx.arcTo(a2x, a1y, a2x, a2y, R)
                  ctx.lineTo(a3x, a3y)
                  ctx.arcTo(a3x, a4y, a4x, a4y, r)
                  ctx.lineTo(a5x, a5y)
                  ctx.stroke()


//                  ctx.strokeStyle = gradient
//                  ctx.beginPath()
//                  ctx.moveTo(gradOffset, p.y)
//                  ctx.lineTo(gradOffset + 100, p.y)
//                  ctx.stroke()
//
//                  ctx.strokeStyle = gradient1
//                  ctx.beginPath()
//                  ctx.moveTo(gradOffset, p.y)
//                  ctx.lineTo(gradOffset + 100, p.y)
//                  ctx.stroke()
//
//                  ctx.fillStyle = gradient
//                  ctx.fillRect(gradOffset - 150, p.y, 400, 20)
//                  ctx.fillStyle = gradient1
//                  ctx.fillRect(gradOffset - 150, p.y, 400, 20)

                }


              ctx.fillStyle = gradient
              ctx.fillRect(gradOffset, 0, 100, this.canvasL.height)
              ctx.fillStyle = gradient1
              ctx.fillRect(gradOffset, 0, 100, this.canvasL.height)
            })
          }

        })
        ctx.restore()

      },
      drawTri (ctx, start, gap, height, num) {
        ctx.strokeStyle = '#3effc8'
        ctx.lineWidth = 10

        const triDiv = height / 6
        // 周期=2triDiv
        const T = triDiv * 2
        const diff = T / num
        const dist = 180
        const hozBezCtrl = 0.5 * triDiv
        const verBezCtrl = hozBezCtrl * 0.1

        for (let i = 0; i < num; i++) {
          const triOffset = start + i * gap

          const frontX = triOffset
          const backX = triOffset + dist

          let dota = -triDiv * 2 + diff * i
          ctx.beginPath()
          ctx.moveTo(backX, dota)
          for (let n = 0; n < 4; n++) {

            ctx.bezierCurveTo(backX, dota + hozBezCtrl, frontX + verBezCtrl, dota + triDiv, frontX, dota + triDiv)
            ctx.bezierCurveTo(frontX + verBezCtrl, dota + triDiv, backX, dota + triDiv * 2 - hozBezCtrl, backX, dota + triDiv * 2)
            dota += triDiv * 2
          }
          ctx.stroke()

        }
      },
      wrapText (ctx, text, x, y, maxWidth, lineHeight) {

        const context = ctx
        const canvas = context.canvas

        // 字符分隔为数组
        let arrText = text.split('')
        let line = ''

        for (let n = 0; n < arrText.length; n++) {
          let testLine = line + arrText[n]
          let metrics = context.measureText(testLine)
          let testWidth = metrics.width
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y)
            line = arrText[n]
            y += lineHeight
          } else {
            line = testLine
          }
        }
        context.fillText(line, x, y)
      },
      createTextPlane () {
        const self = this

        this.timeLine.map(t => {
          const textGeometry = new THREE.PlaneGeometry( t.width, t.height, 32, 15 )
          const textCanvas = document.createElement('canvas')
          textCanvas.width = t.width * 30
          textCanvas.height = t.height * 30
          const ctx = textCanvas.getContext('2d')

          // ctx.textAlign = 'center'
          // ctx.baseline = 'middle'
          ctx.font = `40px Arial`

          // ctx.fillStyle = 'black'
          // ctx.fillRect(0, 0, t.width * 10, t.height * 10)
          ctx.fillStyle = 'white'
          ctx.translate(textCanvas.width, textCanvas.height)
          ctx.rotate(Math.PI)
          this.wrapText(ctx, t.content, 0, 40, textCanvas.width, 45)


          const textTex = new THREE.CanvasTexture(textCanvas)
          textTex.minFilter = THREE.LinearFilter
          textTex.maxFilter = THREE.NearestMipMapLinearFilter
          textTex.wrapS = THREE.ClampToEdgeWrapping
          textTex.wrapT = THREE.ClampToEdgeWrapping
          textTex.repeat.set(1, 1)
          textTex.flipY = false

          const textMaterial = new THREE.MeshBasicMaterial({
            map: textTex,
            side: THREE.DoubleSide,
            transparent: true,
            // premultipliedAlpha: false,
            // blending: THREE.CustomBlending,
            // blendSrc: THREE.SrcAlphaFactor,
            // blendDst: THREE.SrcColorFactor,
            opacity: 1,
            needsUpdate: true,
            alphaTest: 0.6  // !!! it shows background rather than the tunnel behind if this value is not set
          })

          const textMesh = new THREE.Mesh( textGeometry, textMaterial)

          const pos = self.spline.getPointAt(t.contentPos / self.spline.getLength())
          textMesh.position.set(pos.x, pos.y, pos.z)
          textMesh.lookAt(pos.x - 1, pos.y, pos.z)
          textMesh.rotation.z = Math.PI
          console.log(t.contentPos, pos)
          t.mesh = textMesh

          self.scene.add(textMesh)
          textCanvas.style.position = 'absolute'
          textCanvas.style.top = '200px'
          textCanvas.style.left = '100px'
          textCanvas.style.width = '200px'
          textCanvas.style.height = '200px'
          textCanvas.style.zIndex = '999'
          document.getElementById('Wormhole').appendChild(textCanvas)
        })

//        const options = {
//          size: 50,
//          height: 50
//        }
//
//        const textGeometry = new THREE.TextGeometry('XXXXXXXXXXXX', options)
//
//        const textMaterial = new THREE.MeshBasicMaterial({
//          color: 'white'
//        })
      },
      createWormholeGeo (nbPoints, segments, radius, radiusSegments) {
        // Creating an array of points that we'll use for the spline creation
        let points = []
//        let preX = 0
//        const xD = 200
//        const yD = 50
//         let dir = 1
        points.push(new THREE.Vector3(0, 0, 0))
        points.push(new THREE.Vector3(500, 0, 0))
        points.push(new THREE.Vector3(550, -200, 0))
        points.push(new THREE.Vector3(4500, -4500, 0))

//
//        for (let i = 0; i < nbPoints; i++)
//        {
//          const y0 = 0
//          const y45 = yD * 0.707
//          const y90 = yD
//          const xstep = xD / 8
//
//          preX += xstep
//          points.push(new THREE.Vector3(preX, y45, 0))
//          preX += xstep
//          points.push(new THREE.Vector3(preX, y90, 0))
//          preX += xstep
//          points.push(new THREE.Vector3(preX, y45, 0))
//          preX += xstep
//          points.push(new THREE.Vector3(preX, y0, 0))
//          preX += xstep
//          points.push(new THREE.Vector3(preX, -y45, 0))
//          preX += xstep
//          points.push(new THREE.Vector3(preX, -y90, 0))
//          preX += xstep
//          points.push(new THREE.Vector3(preX, -y45, 0))
//          preX += xstep
//          points.push(new THREE.Vector3(preX, y0, 0))
//
//        }

        // var points = []

        // Define points along Z axis to create a curve
//        for (let i = 0; i < 5; i += 1) {
//          points.push(new THREE.Vector3(0, 0, 2.5 * (i / 4)))
//        }

        // Set custom Y position for the last point
        // points[4].y = -0.06
        // points[4].x = 0.2
        // points[1].x = 1

        // Creating a smooth 3d spline curve from our serie of points
        this.spline = new THREE.CatmullRomCurve3(points)
        // this.splineLength = this.spline.getLength() - this.cameraTravelIncrement
        // console.log('LLLLLLLLLLLLL', this.splineLength)
        // Generating geometry for the tube using our spline
        return new THREE.TubeGeometry(this.spline, segments, radius, radiusSegments, false)
      },
      createWormholeMesh (geom) {

        const texL = new THREE.CanvasTexture(this.canvasL)
        // const texL = new THREE.TextureLoader().load( '/avatar.png' )
        console.log(texL)

        // const texture = new THREE.TextureLoader().load( '/avatar.png' );

        texL.minFilter = THREE.LinearFilter
        texL.maxFilter = THREE.NearestMipMapLinearFilter

        // texL.anisotropy = this.anisotropy
        texL.wrapS = THREE.ClampToEdgeWrapping
        texL.wrapT = THREE.ClampToEdgeWrapping
        texL.repeat.set(1, 1)
        texL.flipY = false


        // const texR = new THREE.CanvasTexture(this.canvasR)

        var material = new THREE.MeshBasicMaterial({
          map: texL,
//          shading: THREE.FlatShading,
          side: THREE.BackSide,
          transparent: true,
          premultipliedAlpha: false,
          // side:THREE.DoubleSide,
          // wireframe: true,
          blending: THREE.CustomBlending,
          blendSrc: THREE.SrcAlphaFactor,
          blendDst: THREE.SrcColorFactor,
          needsUpdate: true
        })

        // MULTICOLOR TUNNEL : decomment above and comment the upper comment
        //var material = new THREE.MeshNormalMaterial({transparent: false, opacity: 1, side:THREE.DoubleSide, wireframe: true});

        return new THREE.Mesh(geom, material)
      },
      render (progress) {
        // const curLen = progress * this.splineLength
        const pos1 = this.spline.getPointAt(progress)
        const pos2 = this.spline.getPointAt(progress + this.cameraTravelIncrement)
        this.camera.position.set(pos1.x, pos1.y, pos1.z)
        this.camera.lookAt(pos2)

//         this.textPlane.position.set(pos1.x + 500, pos1.y, pos1.z)
//         this.textPlane.lookAt(pos2)
        // console.log(this.wormhole.material)
        // this.wormhole.material.map.offset.x = -progress *  this.spline.getLength()
        // this.camera.rotation.z = -Math.PI/2 + (Math.sin(progress) * Math.PI)

        this.webGLRenderer.render(this.scene, this.camera)
      },
      scroll (progress) {

//        this.camera.position.set(pos1.x, pos1.y, pos1.z)
//        this.camera.lookAt(pos2)
        // console.log(this.wormhole.material.map.offset.y)
        this.wormhole.material.map.offset.x = progress
        // this.camera.rotation.z = -Math.PI/2 + (Math.sin(progress) * Math.PI)

//         if (progress <= 0.3) {
//           const p = (0.3 - progress) / 0.3
//           const pos1 = this.spline.getPointAt(p)
//           console.log(this.textPlane.position, this.wormhole.position)
//           this.textPlane.position.set(pos1.x, pos1.y, pos1.z)
//           this.textPlane.lookAt(pos1.x - 1, pos1.y, pos1.z)
//         }
        const self = this
        this.timeLine.map(t => {

          const offset = t.contentPos / self.spline.getLength() - progress

          const alphaFactor = Math.max(1 - Math.abs(offset - 0.01) / 0.05, 0)
          // console.log(alphaFactor)

          if (offset >= 0) {
            const pos = self.spline.getPointAt(offset)
            const posl = self.spline.getPointAt(offset + 0.01)
            t.mesh.position.set(pos.x, pos.y - 10, pos.z)

            t.mesh.material.opacity = alphaFactor
            // t.mesh.lookAt(pos.x + 1, pos.y - 10, pos.z)
            t.mesh.lookAt(posl.x, posl.y - 10, posl.z)
            t.mesh.rotateY(Math.PI / 180 * 30)
            // console.log('RRRRRRRRRRR', t.mesh.rotation.y)
            // t.mesh.rotation.y = Math.PI / 180 * 10
          } else {
            t.mesh.position.set(-1, -1, -1)
          }

        })

        const ofs = this.spline.getLength() * progress + 200
        const ctx = this.canvasL.getContext('2d')


        this.clearTagInheritLine (ctx, 15)
        this.drawTagInheritLine (ctx, 15, ofs)
        this.wormhole.material.map.needsUpdate = true

        // this.textPlane.translateX(this.textPlane.position.x - progress * this.textPlane.position.x)
        // this.textPlane.translateY(this.textPlane.position.y)
        // this.textPlane.translateZ(this.textPlane.position.z)

        this.webGLRenderer.render(this.scene, this.camera)
      },
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
    height: 100vh;
    position: fixed;
    top:0;
    left:-50%;
    @media (max-width: 768px) {
      left:0;
    }
    z-index: 999;
  }
  #timeLineL {
    position: absolute;
    top: 50px;
    width: 50%;
    height: 200px;
    // color: rgba(28, 250, 255, 0.49);
  }

</style>
