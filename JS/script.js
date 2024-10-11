 const sectionHeroEL =  document.querySelector('.section-hero')
 const  obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false){
    document.body.classList.add('sticky')
  }else{
    document.body.classList.remove('sticky')
  }
 }, 
 {
  root:null,
  threshold:0,
  rootMargin:'-80px',
 })
 obs.observe(sectionHeroEL);
