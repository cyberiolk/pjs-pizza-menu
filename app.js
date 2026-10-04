// Builds the three TV screens from menu.js. You normally don't need to edit this file.
const LOGO = "/logo.jpg";
const esc = s => s.replace(/&/g,"&amp;");
const item = ([n,p,d]) => `<div class="item"><div class="row"><span class="name">${esc(n)}</span><span class="dots"></span><span class="price">${esc(p)}</span></div>${d?`<div class="desc">${esc(d)}</div>`:""}</div>`;
const pz = ([n,d,x]) => `<div class="item"><div class="row"><span class="name">${esc(n)}</span></div><div class="desc">${esc(d)}</div>${x?`<div class="extra">M <em>$19.50</em>&nbsp; L <em>$28.50</em>&nbsp; F <em>$38.50</em>&nbsp; J <em>$44.50</em></div>`:""}</div>`;
const col = h => `<div class="col">${h}</div>`;

const SCREENS = {
1: () => `<div class="screen s1">
  <div class="head">
    <div class="title">PIZZAS</div>
    <div class="size"><b>Medium</b><span>$17.50</span></div>
    <div class="size"><b>Large</b><span>$26.50</span></div>
    <div class="size"><b>Family</b><span>$36.50</span></div>
    <div class="size"><b>Jumbo</b><span>$42.50</span></div>
    <div class="note">Extra toppings<br>$2.99 each</div>
  </div>
  <div class="fit">
    <div class="cols c4" style="--fs:37px;--ds:26px;--gap:20px">
      ${col(S.pizzas.slice(0,4).map(pz).join(""))}
      ${col(S.pizzas.slice(4,8).map(pz).join(""))}
      ${col(S.pizzas.slice(8,12).map(pz).join(""))}
      ${col(S.pizzas.slice(12).map(pz).join("") + item(["Garlic Bread","$4.99"]))}
    </div>
    <div class="deals-wrap">
      <div class="title">PIZZA DEALS</div>
      <div class="deals">${S.deals.map(([n,p,d])=>`<div class="deal"><h3>${esc(n)}</h3><div class="big">${p}</div><p>${esc(d)}</p></div>`).join("")}</div>
    </div>
  </div></div>`,
2: () => `<div class="screen s2">
  <div class="half"><div class="title">BURGERS - HOT DOGS</div>
    <div class="fit"><div class="cols c2" style="--fs:33px;--ds:24px;--gap:22px">
      ${col(S.burgers.slice(0,7).map(item).join(""))}
      ${col(S.burgers.slice(7).map(item).join("") + `<div class="group">Hot Dogs</div>` + S.hotdogs.map(item).join(""))}
    </div></div></div>
  <div class="half"><div class="title">YIROS - HOT PACKS</div>
    <div class="fit"><div class="cols c2" style="--fs:33px;--ds:24px;--gap:30px">
      ${col(S.yiros.slice(0,7).map(item).join(""))}
      ${col(S.yiros.slice(7).map(item).join(""))}
    </div></div></div>
  </div>`,
3: () => `<div class="screen s3">
  <div class="menu"><div class="title">FISH &amp; CHIPS - OTHER</div>
    <div class="fit">
      <div class="cols c3" style="--fs:34px;--ds:23px;--gap:16px">
        ${col(S.fish.slice(0,10).map(item).join(""))}
        ${col(S.fish.slice(10).map(item).join(""))}
        ${col(`<div class="group">Chips</div>`+S.chips.map(item).join("")+`<div class="group">Salads &amp; Gravy</div>`+S.sides.map(item).join(""))}
      </div>
      <div class="alsos">
        <div class="also g">🥗 Fresh salads</div>
        <div class="also y">🎂 Tasty ice cream cakes available</div>
      </div>
    </div></div>
  <aside class="brand">
    <img class="logo" alt="PJ's Pizza & Takeaway" src="${LOGO}">
    <div class="tagline">Fresh - Fast - Delicious</div>
    <div class="hours"><h2>OPEN 7 DAYS</h2>
      <dl><dt>Sun – Wed</dt><dd>11am – 8pm</dd><dt>Thu – Sat</dt><dd>11am – 9pm</dd></dl></div>
    <div class="phone"><span class="num">(08) 85824 460</span><span class="num">0419 895 237</span>
      <span class="catering">CATERING AVAILABLE</span></div>
    <div class="delivery">Delivery available after 5pm<br>Minimum delivery $20<br>
      <span class="fees">Berri $7 fee &nbsp;|&nbsp; Outside Berri $14 fee</span>
      <div class="fine">Prices subject to change without notice</div></div>
  </aside></div>`
};

function makeStage(n){ const d=document.createElement("div"); d.className="stage"; d.innerHTML=SCREENS[n](); return d; }

// Shrink menu text on any screen whose content would overflow (depends on the fonts the TV loads)
function autoFit(){
  document.querySelectorAll(".fit").forEach(f=>{
    let k=1; f.style.setProperty("--k",k);
    while(f.scrollHeight > f.clientHeight + 1 && k > 0.6){ k-=0.02; f.style.setProperty("--k",k.toFixed(2)); }
  });
}

const n = window.SCREEN || parseInt(new URLSearchParams(location.search).get("screen"),10);
let layout;
if (SCREENS[n]) {
  document.title = `PJ's Pizza – Screen ${n}`;
  const st = makeStage(n); document.body.appendChild(st);
  document.documentElement.classList.add("tv");
  // ?zoom=0.95 lets you nudge the size if a TV crops the edges (overscan)
  const Z = parseFloat(new URLSearchParams(location.search).get("zoom")) || 1;
  layout = () => {
    const vv = window.visualViewport;
    const W = Math.min(innerWidth, document.documentElement.clientWidth || innerWidth, vv ? vv.width : innerWidth);
    const H = Math.min(innerHeight, document.documentElement.clientHeight || innerHeight, vv ? vv.height : innerHeight);
    const s = Math.min(W/1920, H/1080) * Z;
    st.style.transform=`scale(${s})`; st.style.left=((W-1920*s)/2)+"px"; st.style.top=((H-1080*s)/2)+"px";
    window.scrollTo(0,0);
  };
  if (window.visualViewport) visualViewport.addEventListener("resize", ()=>layout());
  addEventListener("orientationchange", ()=>setTimeout(layout,300));
  setTimeout(()=>layout(),500); setTimeout(()=>layout(),2000);
  addEventListener("click",()=>{ try{ if(!document.fullscreenElement) document.documentElement.requestFullscreen(); }catch(e){} });
  let idle; const hide=()=>document.body.classList.add("hide-cursor");
  addEventListener("mousemove",()=>{ document.body.classList.remove("hide-cursor"); clearTimeout(idle); idle=setTimeout(hide,3000); });
  idle=setTimeout(hide,3000);
  addEventListener("keydown",e=>{ const m={"1":1,"2":2,"3":3}[e.key]; if(m) location.href="/"+m; });
} else {
  // Overview: all three screens side by side, click one to open it full screen
  const ov=document.createElement("div"); ov.className="ov";
  ov.innerHTML=`<div class="wall"></div><p>Click a screen to open it on that TV. Or open these links directly:
    <code>/1</code> (left TV) &nbsp; <code>/2</code> (middle TV) &nbsp; <code>/3</code> (right TV)</p>`;
  document.body.style.overflow="auto"; document.body.appendChild(ov);
  const wall=ov.querySelector(".wall"), tvs=[];
  [1,2,3].forEach(i=>{ const a=document.createElement("a"); a.className="tv"; a.href="/"+i;
    a.setAttribute("aria-label","Open screen "+i); a.appendChild(makeStage(i)); wall.appendChild(a); tvs.push(a); });
  layout = () => { const w=Math.min((innerWidth-80)/3, (innerHeight-160)*16/9); const s=w/1920;
    tvs.forEach(t=>{ t.style.width=w+"px"; t.style.height=(1080*s)+"px"; t.firstChild.style.transform=`scale(${s})`; }); };
}
addEventListener("resize",layout); layout();
autoFit();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(autoFit);
addEventListener("load",autoFit);
