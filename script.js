const portfolio = [
  {no:'01',title:'伺服式水域救援装备',en:'Water Rescue System',type:'Product Design · Rescue Equipment',cover:'assets/works/water-rescue-cover.jpg',images:['assets/works/water-rescue-cover.jpg','assets/works/water-rescue-sketch.jpg','assets/works/water-rescue-structure.jpg','assets/works/water-rescue-details.jpg']},
  {no:'02',title:'灾后废物无害化处理装备',en:'E-WHITEING',type:'System Design · Future Mobility',cover:'assets/works/disaster-cover.png',images:['assets/works/disaster-cover.png','assets/works/disaster-system.png','assets/works/disaster-details.png']},
  {no:'03',title:'智能网联轿跑驾驶舱 HMI',en:'Intelligent Coupe Cockpit',type:'HMI · Product Visualization',cover:'assets/works/cockpit-cover.png',images:['assets/works/cockpit-cover.png','assets/works/cockpit-product.png','assets/works/cockpit-hmi.png','assets/works/cockpit-interior.png','assets/works/cockpit-scene.png']},
  {no:'04',title:'智慧型山林灭火装备',en:'Forest Fire Equipment',type:'User Research · Equipment Design',cover:'assets/works/fire-cover.png',images:['assets/works/fire-cover.png','assets/works/fire-research.png','assets/works/fire-structure.png','assets/works/fire-details.png']}
];
const awards=[
  {no:'A01',title:'城市内涝搜救机器人',award:'2025 DIA 中国设计智造大奖 · 佳作奖',cover:'assets/works/robot-award-cover.png',images:['assets/works/dia-robot.png']},
  {no:'A02',title:'青少年脊柱姿态监测设计',award:'蓝桥杯设计赛 · 省级三等奖',cover:'assets/works/posture-award-cover.png',images:['assets/works/posture-1.png','assets/works/posture-2.jpg','assets/works/posture-3.png']}
];
const portfolioGrid=document.querySelector('#portfolioGrid');
portfolio.forEach(w=>{const b=document.createElement('button');b.className='projectCard scrollReveal';b.innerHTML=`<div class="projectCover"><img src="${w.cover}" alt="${w.title}"><span class="openMark glass">↗</span></div><div class="projectMeta"><span>${w.no}</span><div><h3>${w.title}</h3><p>${w.en} · ${w.type}</p></div></div>`;b.onclick=()=>openWork(w);portfolioGrid.appendChild(b)});
const awardGrid=document.querySelector('#awardGrid');
awards.forEach(w=>{const b=document.createElement('button');b.className='awardCard scrollReveal';b.innerHTML=`<div class="awardVisual"><img src="${w.cover}" alt="${w.title}"></div><div class="awardInfo glass"><span>${w.no}</span><h3>${w.title}</h3><p>${w.award}</p><i>VIEW PROJECT ↗</i></div>`;b.onclick=()=>openWork(w);awardGrid.appendChild(b)});
const lightbox=document.querySelector('#lightbox');
function openWork(w){document.querySelector('#lightboxNo').textContent=w.no;document.querySelector('#lightboxTitle').textContent=w.title;document.querySelector('#lightboxContent').innerHTML=w.images.map((src,i)=>`<img src="${src}" alt="${w.title} 展板 ${i+1}">`).join('');lightbox.hidden=false;document.body.style.overflow='hidden'}
function closeWork(){lightbox.classList.add('isClosing');setTimeout(()=>{lightbox.hidden=true;lightbox.classList.remove('isClosing');document.body.style.overflow=''},400)}
document.querySelectorAll('[data-close]').forEach(el=>el.onclick=closeWork);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lightbox.hidden)closeWork()});
const heroGrid=document.querySelector('#heroGrid'),introButton=document.querySelector('#introButton');
introButton.onclick=()=>{heroGrid.classList.toggle('introOpen');introButton.childNodes[0].nodeValue=heroGrid.classList.contains('introOpen')?'收起介绍 ':'认识我 '};
const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('isVisible')),{threshold:.1});document.querySelectorAll('.scrollReveal').forEach(el=>observer.observe(el));
