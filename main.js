// new TypeIT(".type1",{  
//     speed:120,
//     loop:true,
//     waituntilvisible:true,
// })
// .type("Web Devloper",{delay:400})
// .pause(500)
// .delete(9)
// .type('Creator',{delay:400})
// .pause(500)
// .delete(9)
// // .type('Coder',{delay:400})
// // .pause(500)
// // .delete(9)
// .go();

// const canvas= document.getElementById("canvas1");
// const ctx = canvas.getcontext('2d');
// canvas.width = window.innerWidth;
// canvas.hight = window.innerHeight;
// let practiclesArray;
// let mouse ={
//     x=null,
//     y=null,
//     radius:(canvas.hight/80)*(canvas.width/80);
// }
// window.addEventListener('mousemove',function(event){
//     mouse.x=event.x;
//     mouse.y=event.y;
// }
// );
// class Particle{
//     constructor(x,y,directionX,directiony,size,color){
//         this.x=x;
//         this.y=y;
//         this.directionX=directionX;
//         this.directionY=this.directionY;
//         this.size=size;
//         this.color=color;
//     }
//     draw(){
//         ctx.beingPath();
//         ctx.arc(this.x, this.y, this.size, 0,Math.PI*2,false);
//         ctx.fillStyle="#8C5523";
//         ctx.fill();
//     }
//     update(){
//         if(this.x>canvas.width || this.x<0){
//             this.directionX = -this.directionX;
//         }
//         if(this.y>canvas.width || this.y<0){
//             this.directionY = -this.directionY;
//         }
//         let dx =mouse.x-this.x;
//         let dy =mouse.y-this.y;
//         let distance =Math.sqrt(dx*dx + dy*dy);
//         if(distance<mouse.radius+this.size){
//             if(mouse.x<this.x && this.x <canvas.width - this.size*10){
//                 this.x +=10;
//             }
//             if(mouse.x>this.x&&this.x>this.size*10){
//                 this.x-=10 
//             }
//         }
//     }
// }





// particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 380,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "grab"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 140,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });
  
  
//   /* ---- stats.js config ---- */
  
//   var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector('.js-count-particles');
//   update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
//   };
//   requestAnimationFrame(update);