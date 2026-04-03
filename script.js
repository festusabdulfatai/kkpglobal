// Dynamic UI for KKP Global site
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  });
},{threshold:0.2});
document.querySelectorAll('section, .section-image').forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  const header=document.querySelector('.site-header');
  if(window.scrollY>80) header.classList.add('smaller'); else header.classList.remove('smaller');
});

const navToggle=document.getElementById('navToggle');
if(navToggle){
  navToggle.addEventListener('click',()=>{
    const nav=document.querySelector('.main-nav');
    nav?.classList.toggle('open');
  });
}

const quickActions=[
  {id:'join-prayer',text:'Thursdays 7:30pm–9pm, online + in Dorset'},
  {id:'speak',text:'Email info@kkpglobal.org or WhatsApp +44 7700 900000'},
  {id:'mentor',text:'Begin mentorship with DBS checks, training, commitment'}
];

function showQuickAction(text){
  let modal=document.getElementById('quickActionModal');
  if(!modal){modal=document.createElement('aside');modal.id='quickActionModal';modal.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;z-index:999;';
    modal.innerHTML='<div style="background:#fff;color:#111;padding:1.4rem;border-radius:.8rem;max-width:90vw;width:360px;box-shadow:0 8px 30px rgba(0,0,0,.35);text-align:center;"><h3 style="margin-bottom:.5rem;color:#000">This action is ready</h3><p style="margin-bottom:1rem">'+text+'</p><button id="closeQuickAction" style="border:none;padding:.6rem 1rem;background:#d4af37;color:#000;font-weight:700;border-radius:.3rem;cursor:pointer;">Close</button></div>';
    document.body.appendChild(modal);
    modal.querySelector('#closeQuickAction').addEventListener('click',()=>modal.remove());
  } else {
    modal.querySelector('p').textContent=text;
    modal.style.display='flex';
  }
}

document.addEventListener('click',(event)=>{
  if(event.target.matches('.quick-act')){
    event.preventDefault();
    const act=quickActions.find(a=>a.id===event.target.dataset.act);
    if(act) showQuickAction(act.text);
  }
});