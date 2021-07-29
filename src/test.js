let demo = document.querySelector("#demo");
let demo2 = document.querySelector("#demo2");
let string = `
.skin {
  position: relative;
  height: 100vh;
  background-color: #ffe600;
}
header {
  position: relative;
  top: -90px;
}
/* 鼻子设计 */
.nose {
  position: absolute;
  top: 140px;
  left: 50%;
  margin-left: -14px;
  border: 14px solid red;
  border-color: #000 transparent red transparent;
  border-bottom: none;
  width: 0;
  height: 0;
  border-radius: 50%;
  z-index: 6;
}
/* 鼻子鼠标移入动画 */
@keyframes nosewave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  animation: nosewave 300ms linear infinite;
  transform-origin: center bottom;
}
/* 眼睛 */
.eye {
  width: 56px;
  height: 56px;
  background-color: #2e2e2e;
  position: absolute;
  top: 100px;
  left: 50%;
  margin-left: -28px;
  border-radius: 50%;
  border: 3px solid #000;
}
.eye.right {
  transform: translate(110px);
}
.eye.left {
  transform: translate(-110px);
}
.eye::before {
  content: "";
  display: block;
  width: 22px;
  height: 22px;
  background-color: #fff;
  border: 3px solid #fff;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 8px;
  animation: eyeMove 3s infinite;
}
@keyframes eyeMove {
  0%,
  100% {
    top: 1px;
    left: 8px;
  }
  30%,
  70% {
    top: 5px;
    left: 17px;
  }
  40% {
    top: 8px;
    left: 21px;
  }
  50% {
    top: 12px;
    left: 13px;
  }
  80%,
  90% {
    top: 17px;
    left: 17px;
  }
}
/* 划定嘴部大小 */
.mouth {
  position: relative;
  width: 180px;
  height: 220px;
  left: 50%;
  top: 180px;
  margin-left: -90px;
  /* border: 1px solid red; */
}
/* 设计上方两边的胡子 */
.mouth:after {
  content: "";
  display: block;
  width: 100px;
  height: 30px;
  background: #ffe600;
  border-bottom: 3px solid rgb(2, 0, 1);
  border-left: 3px solid rgb(2, 0, 1);
  position: absolute;
  top: -15px;
  left: -10px;
  border-bottom-left-radius: 340px 180px;
  transform: rotate(-24deg);
  z-index: 3;
}
.mouth:before {
  content: "";
  display: block;
  width: 100px;
  height: 30px;
  background: #ffe600;
  border-bottom: 3px solid rgb(2, 0, 1);
  border-right: 3px solid rgb(2, 0, 1);
  position: absolute;
  top: -15px;
  right: -10px;
  border-bottom-right-radius: 340px 180px;
  transform: rotate(24deg);
  z-index: 3;
}
/* 嘴部设计 */
.mouth_main {
  position: absolute;
  top: -10px;
  left: 50%;
  width: 100px;
  height: 160px;
  border: 3px solid rgb(2, 0, 1);
  margin-left: -50px;
  border-radius: 0 0 50px 50px / 0 0 160px 160px;
  background-color: rgb(167, 16, 7);
  overflow: hidden;
  animation: mouthMove 3s infinite;
}
@keyframes mouthMove {
  0%,
  46%,
  54%,
  100% {
    height: 160px;
  }
  50% {
    height: 20px;
  }
}
/* 设计舌头 */
.mouth_main .tongue {
  width: 100px;
  height: 160px;
  position: absolute;
  top: 30px;
  left: 50%;
  margin-left: -50px;
  border-radius: 100px;
  background-color: rgb(255, 91, 93);
}
/* 脸部设计 */
.face {
  border: 2px solid #000;
  background-color: rgb(254, 24, 0);
  width: 80px;
  height: 80px;
  position: absolute;
  top: 210px;
  left: 50%;
  margin-left: -40px;
  border-radius: 50%;
}
.face.left {
  transform: translateX(-150px);
}
.face.right {
  transform: translateX(150px);
}
/* 鼠标移入时的闪电特效 */
.face img {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
.facex:hover img {
  display: block;
}
/* 精灵球 */
body .box {
  width: 82px;
  height: 82px;
  border: 3px solid #fff;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.9);
  left: 50%;
  top: 220px;
  margin-left: -41px;
  animation: box-rotate 4s ease-in-out infinite alternate;
}

.box .box_main {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgb(236, 2, 3);
  border: 1px solid #333;
  position: absolute;
  top: -2px;
  left: -2px;
  overflow: hidden;
}
.box .box_main:before {
  content: "";
  display: block;
  width: 80px;
  height: 40px;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
}
.box .box_main:after {
  content: "";
  display: block;
  width: 80px;
  height: 12px;
  background: rgb(59, 53, 67);
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -6px;
}

.box .box_main .box_circle {
  width: 24px;
  height: 24px;
  border: 8px solid rgb(59, 53, 67);
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -13px;
  margin-top: -12px;
  z-index: 5;
}
.box .box_main .box_circle:after {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border: 1px solid rgb(59, 53, 67);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -4px;
  margin-top: -4px;
  animation: bg_change 3s infinite;
  z-index: 6;
}
@keyframes bg_change {
  0%,
  40%,
  60%,
  90%,
  100% {
    background: none;
  }
  50% {
    background: rgb(236, 2, 3);
  }
}
@keyframes box-rotate {
  0%,
  90%,
  100% {
    transform: rotate(0deg);
  }
  40%,
  50% {
    transform: rotate(360deg);
    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.9);
  }
}
.arm_left,
.arm_right {
  width: 100px;
  height: 160px;
  background-color: #ffe600;
  position: absolute;
  top: 350px;
  left: 50%;
  margin-left: -50px;
  border: 4px solid #000;
  border-bottom-left-radius: 40% 90%;
  border-bottom-right-radius: 40% 90%;
  border-top-color: #ffe600;
}
.arm_left {
  transform: translate(-120px) rotate(-45deg);
}
.arm_right {
  transform: translate(120px) rotate(45deg);
}

  
`
// 中文最好加注释，否则会影响css
let string2 = ''
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string[n] === '\n') {
      //如果这个字符为回车
      string2 = string2 + '<br>';
    } else if (string[n] === ' ') {
      string2 += "&nbsp;";
    } else {
      //如果这个字符不是回车
      string2 = string2 + string[n];
    }
    demo.innerHTML = string2;
    demo2.innerHTML = string.substring(0, n);
    // 这句不要用string2，因为里面有html样式，不能出现在css中
    window.scrollTo(0, 9999);
    demo.scrollTo(0, 99999);
    // scrollTo(x,y)
    //写一句代码就滚动一下滚动条
    if (n < string.length - 1) {
      n = n + 1
      step()
    } else { }
  }, 0);
  //   let id = setTimeout(() => {
  //     x()
  //   }, 0)

  //   const x = () => {
  //     if (string[n] === '\n') {
  //       //如果这个字符为回车
  //       string2 = string2 + '<br>';
  //     } else if (string[n] === ' ') {
  //       string2 += "&nbsp;";
  //     } else {
  //       //如果这个字符不是回车
  //       string2 = string2 + string[n];
  //     }
  //     demo.innerHTML = string2;
  //     demo2.innerHTML = string.substring(0, n);
  //     // 这句不要用string2，因为里面有html样式，不能出现在css中
  //     window.scrollTo(0, 9999);
  //     demo.scrollTo(0, 99999);
  //     // scrollTo(x,y)
  //     //写一句代码就滚动一下滚动条
  //     if (n < string.length - 1) {
  //       n = n + 1
  //       step()
  //     } else { }
  //   }


  //   var btnPause = document.querySelector('#btnPause');
  //   btnPause.addEventListener('click', function () {
  //     window.clearTimeout(id)
  //   })

  //   var btnPause = document.querySelector('#btnPlay');
  //   btnPlay.addEventListener('click', function () {

  //     let id = setTimeout(() => {
  //       x()
  //     }, 0)
  //   })
  // }
}
step()

