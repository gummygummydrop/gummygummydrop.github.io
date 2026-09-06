const page=document.body.dataset.page;document.querySelectorAll('.site-header nav a').forEach(a=>{if(a.dataset.page===page)a.classList.add('active')});
