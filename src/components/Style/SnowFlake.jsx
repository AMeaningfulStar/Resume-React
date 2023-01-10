const SnowFlake = () => {
  const c = document.getElementById('canv'), 
        $ = c.getContext("2d");
  const w = c.width = window.innerWidth, 
        h = c.height = window.innerHeight;

  const makeSnowFlake = () => {
    let snow, arr = [];
    const num = 600, tsc = 1, sp = 0.5;  //num:눈송이 개수 , tsc:눈송이 가로 변화율, sp:내리는 속도
    const sc = 0.8, t = 10, mv = 20, min = 1;  //sc:눈송이 크기
    for (let i = 0; i < num; ++i) {
      snow = new Flake();
      snow.y = Math.random() * (h + 50);
      snow.x = Math.random() * w;
      snow.t = Math.random() * (Math.PI * 2);
      snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
      snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
      snow.sp = snow.sp < min ? min : snow.sp;
      arr.push(snow);
    }

    go();

    const go = () => {
      window.requestAnimationFrame(go);
      $.clearRect(0, 0, w, h);
      $.fillStyle = 'hsla(242, 95%, 3%, 1)';
      $.fillRect(0, 0, w, h);
      $.fill();
      for (var i = 0; i < arr.length; ++i) {
        f = arr[i];
        f.t += .05;
        f.t = f.t >= Math.PI * 2 ? 0 : f.t;
        f.y += f.sp;
        f.x += Math.sin(f.t * tsc) * (f.sz * .3);
        if (f.y > h + 50) f.y = -10 - Math.random() * mv;
        if (f.x > w + mv) f.x = - mv;
        if (f.x < - mv) f.x = w + mv;
        f.draw();
      }
    }
  }
  
  makeSnowFlake();
  for(let index=0; index<50; index++){
    makeSnowFlake();
  }
}

export default SnowFlake
