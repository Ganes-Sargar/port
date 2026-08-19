const body = document.body;
const loader = document.getElementById('loader') as HTMLDivElement;
window.addEventListener('load', () => setTimeout(() => { loader.style.opacity='0'; loader.style.transition='opacity .45s ease'; setTimeout(() => loader.remove(), 500); }, 650));
const themeBtn = document.getElementById('themeBtn') as HTMLButtonElement;
const savedTheme = localStorage.getItem('ganesh-theme');
if (savedTheme === 'light') { body.classList.add('light'); themeBtn.textContent='☀'; }
themeBtn.addEventListener('click', () => { body.classList.toggle('light'); const light=body.classList.contains('light'); localStorage.setItem('ganesh-theme', light?'light':'dark'); themeBtn.textContent=light?'☀':'☾'; });
const menuBtn=document.getElementById('menuBtn') as HTMLButtonElement, mobileMenu=document.getElementById('mobileMenu') as HTMLDivElement;
menuBtn.addEventListener('click',()=>mobileMenu.classList.toggle('open'));
document.querySelectorAll<HTMLAnchorElement>('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));
const reveals=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveals.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll<HTMLElement>('.reveal').forEach(el=>reveals.observe(el));
const stats=document.querySelectorAll<HTMLElement>('[data-count]');
const statsObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target as HTMLElement;const target=Number(el.dataset.count);const decimal=String(target).includes('.');const duration=900;const t0=performance.now();function tick(now:number){const p=Math.min((now-t0)/duration,1);const eased=1-Math.pow(1-p,3);const value=target*eased;el.textContent=decimal?value.toFixed(2):Math.round(value)+'+';if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);statsObserver.unobserve(el)}),{threshold:.7});
stats.forEach(s=>statsObserver.observe(s));
const dot=document.getElementById('cursorDot') as HTMLElement, ring=document.getElementById('cursorRing') as HTMLElement;let mx=-100,my=-100,rx=-100,ry=-100;window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});function cursorLoop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(cursorLoop)}cursorLoop();
document.querySelectorAll<HTMLElement>('a,button,.project-card').forEach(el=>{el.addEventListener('mouseenter',()=>{ring.style.width='44px';ring.style.height='44px'});el.addEventListener('mouseleave',()=>{ring.style.width='30px';ring.style.height='30px'})});
const lightbox=document.getElementById('lightbox') as HTMLDivElement,lightboxImg=document.getElementById('lightboxImg') as HTMLImageElement,lightboxCaption=document.getElementById('lightboxCaption') as HTMLParagraphElement;
document.querySelectorAll<HTMLButtonElement>('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImg.src=item.dataset.img||'';lightboxCaption.textContent=item.dataset.caption||'';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')}
document.getElementById('lightboxClose')?.addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
