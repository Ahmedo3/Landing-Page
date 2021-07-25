const sections = document.getElementsByTagName("section");
let ul = document.getElementById("navbar__list");
const freg = document.createDocumentFragment();


// build the Dynamic Page with Navbar & costum sections
function buildDynamicPage (){
    for(let section of sections){
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.addEventListener("click", ()=>{
        section.scrollIntoView({behavior: "smooth"});
                                        }
                           );
        a.setAttribute('data-link',`${section.dataset.nav}`);
        a.className=`menu__link`;
        a.textContent= section.id;
        section.innerHTML+="<a>To Top</a>";
        section.lastChild.addEventListener("click", ()=>{
        window.scrollTo({top: 0,behavior: 'smooth'});
                                        }
                           );
        li.appendChild(a);
        freg.appendChild(li);
        };
    ul.appendChild(freg);
};


//calculate the section position to activate it
function sectionInView(sec){
    let position=sec.getBoundingClientRect();
    return position.y>=-200&&position.y<=550;
};


//activate section and navbar when their in viewport or selected
function toggleAvtiveClass(){
    for(section of sections){
        const li = document.querySelectorAll(`[data-link="${section.dataset.nav}"]`)[0];
        if(sectionInView(section)){
        section.classList.add('your-active-class');
        li.classList.add('link__active');
        }
        else{
        section.classList.remove('your-active-class');
        li.classList.remove('link__active');
            }
    }
};

buildDynamicPage();
document.addEventListener('scroll',toggleAvtiveClass);

