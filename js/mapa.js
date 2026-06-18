(function(){
  const C    = window.CONTINENT;
  const DATA = C.data;
  const ALIAS= C.alias;
  const I18N = C.i18n;

  let LANG = "ca";
  function nameOf(k){ return LANG==="ca" ? DATA[k][0] : DATA[k][1]; }
  function capOf(k){  return LANG==="ca" ? DATA[k][2] : DATA[k][3]; }
  function resolve(n){ return DATA[n] ? n : (ALIAS[n] || null); }

  const NS = "http://www.w3.org/2000/svg";
  const XL = "http://www.w3.org/1999/xlink";
  const svg = d3.select("#map");
  const loadmsg = document.getElementById("loadmsg");
  let card, tName, tCap, fimg, path, feats, gPaths;
  const CW=240, CH=122, PAD=12;

  d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(topo => {
    const all = topojson.feature(topo, topo.objects.countries).features;
    feats = all.filter(f => resolve(f.properties.name));
    const proj = d3.geoMercator().fitSize([1000,700], {type:"FeatureCollection",features:feats});
    path = d3.geoPath(proj);
    loadmsg.style.display = "none";

    gPaths = svg.append("g");

    card = svg.append("g").style("display","none").style("pointer-events","none");
    const cbg = document.createElementNS(NS,"rect");
    cbg.setAttribute("width",CW); cbg.setAttribute("height",CH);
    cbg.setAttribute("rx","6"); cbg.setAttribute("fill","#fff");
    cbg.setAttribute("stroke","#E8830C"); cbg.setAttribute("stroke-width","2.5");
    tName = document.createElementNS(NS,"text");
    tName.setAttribute("x",PAD); tName.setAttribute("y",30);
    tName.setAttribute("font-size","20"); tName.setAttribute("font-weight","600");
    tName.setAttribute("fill","#2C2C2A");
    tCap = document.createElementNS(NS,"text");
    tCap.setAttribute("x",PAD); tCap.setAttribute("y",50);
    tCap.setAttribute("font-size","13"); tCap.setAttribute("fill","#5F5E5A");
    fimg = document.createElementNS(NS,"image");
    const FW = CW-PAD*2, FH = 54;
    fimg.setAttribute("x",PAD); fimg.setAttribute("y",CH-FH-PAD);
    fimg.setAttribute("width",FW); fimg.setAttribute("height",FH);
    fimg.setAttribute("preserveAspectRatio","xMidYMid meet");
    card.node().appendChild(cbg);
    card.node().appendChild(tName);
    card.node().appendChild(tCap);
    card.node().appendChild(fimg);

    gPaths.selectAll("path").data(feats).enter().append("path")
      .attr("d",path)
      .attr("fill","#FCD9A8").attr("stroke","#E8830C").attr("stroke-width",0.6)
      .style("cursor","pointer")
      .each(function(f){ f._key = resolve(f.properties.name); })
      .on("mouseenter",function(e,f){ d3.select(this).attr("fill","#E8830C"); showCard(f); })
      .on("mouseleave",function(){ d3.select(this).attr("fill","#FCD9A8"); card.style("display","none"); })
      .on("click",function(e,f){ openModal(f._key); });

    applyLang();
  }).catch(() => {
    loadmsg.textContent = LANG==="ca"
      ? "No s'ha pogut carregar el mapa. Comprova la connexió i torna-ho a provar."
      : "No se ha podido cargar el mapa. Comprueba la conexión e inténtalo de nuevo.";
  });

  function showCard(f){
    const k = f._key;
    tName.textContent = nameOf(k);
    tCap.textContent  = I18N[LANG].cap+": "+capOf(k);
    fimg.setAttributeNS(XL,"href","https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/"+DATA[k][4]+".svg");
    const c = path.centroid(f);
    let x = c[0]+10, y = c[1]-CH-10;
    if(x+CW>1000) x=1000-CW-4;
    if(x<4) x=4;
    if(y<4) y=c[1]+14;
    if(y+CH>700) y=700-CH-4;
    card.attr("transform","translate("+x+","+y+")").style("display",null);
    card.raise();
  }

  function applyLang(){
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if(I18N[LANG][key]) el.textContent = I18N[LANG][key];
    });
    document.getElementById("search").placeholder = I18N[LANG].search;
    document.documentElement.lang = LANG;
  }

  document.getElementById("search").addEventListener("input",function(){
    const q = this.value.trim().toLowerCase();
    if(!gPaths) return;
    gPaths.selectAll("path").attr("fill", f =>
      (q.length>1 && nameOf(f._key).toLowerCase().includes(q)) ? "#E8830C" : "#FCD9A8"
    );
    if(q.length>1){
      const m = feats.find(f => nameOf(f._key).toLowerCase().includes(q));
      if(m) showCard(m); else card.style("display","none");
    } else {
      card.style("display","none");
    }
  });

  document.getElementById("reset-btn").addEventListener("click",function(){
    document.getElementById("search").value = "";
    if(gPaths) gPaths.selectAll("path").attr("fill","#FCD9A8");
    if(card) card.style("display","none");
  });

  function setLang(l){
    LANG = l;
    document.getElementById("lang-ca").classList.toggle("active",l==="ca");
    document.getElementById("lang-es").classList.toggle("active",l==="es");
    applyLang();
    if(card) card.style("display","none");
    document.getElementById("search").value = "";
    if(gPaths) gPaths.selectAll("path").attr("fill","#FCD9A8");
  }
  document.getElementById("lang-ca").addEventListener("click",()=>setLang("ca"));
  document.getElementById("lang-es").addEventListener("click",()=>setLang("es"));

  const overlay  = document.getElementById("overlay");
  const mName    = document.getElementById("modal-name");
  const mCap     = document.getElementById("modal-cap");
  const mFlag    = document.getElementById("modal-flag");
  const mHint    = document.getElementById("modal-hint");

  function openModal(k){
    mName.textContent = nameOf(k);
    mCap.textContent  = I18N[LANG].cap+": "+capOf(k);
    mFlag.src         = "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/"+DATA[k][4]+".svg";
    mFlag.alt         = nameOf(k);
    mHint.textContent = LANG==="ca" ? "Clica fora o prem Esc per tancar" : "Haz clic fuera o pulsa Esc para cerrar";
    overlay.classList.add("open");
  }
  function closeModal(){ overlay.classList.remove("open"); }
  document.getElementById("modal-close").addEventListener("click",closeModal);
  overlay.addEventListener("click",function(e){ if(e.target===overlay) closeModal(); });
  document.addEventListener("keydown",function(e){ if(e.key==="Escape") closeModal(); });
})();
