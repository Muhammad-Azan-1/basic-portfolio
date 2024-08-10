let tab_links =  document.querySelectorAll('.tab-links');
let tab_contents = document.querySelectorAll('.tab-content');
let fa_bars = document.querySelector('.fa-bars');
let fa_xmarks = document.querySelector('.fa-xmark');
let slideMenu = document.querySelector('#slideMenu');

// working for about us page , so that  on click we get the  desire data

function openTab(tabname,event) {
 
for(let tab_link of tab_links) {
         tab_link.classList.remove('active-link')  // we have all tab links here so now we remove the active-link 
}

for(let tab_content of tab_contents) {
         tab_content.classList.remove('active-content')  // we have all tab contents here so now we remove the active-content
}



//  console.log(tabname,event)
// Add active-link  to the clicked tab link , 
event.currentTarget.classList.add('active-link')

// what ever we clicked we get it's value inside our  tabname, now we are searching for if some thing have the same id name that resembalance with the value we get in our tabname if then we display it(if we get skills in our tabname then we are searching for some thing which have id skills then we goona display that thing)
document.getElementById(tabname).classList.add('active-content')
    

}



// from here we pass (skill , education) to openTab
tab_links.forEach((tab_link)=>{
    tab_link.addEventListener('click', (event)=>{
        let value = tab_link.innerHTML.toLowerCase()  // passing inner value of the tag on which we click
         openTab(value , event)
       
    })
})



// workign for menu bar for responsive website

fa_bars.addEventListener('click', ()=>{
   
    slideMenu.style.right = '0'
})

fa_xmarks.addEventListener('click', ()=>{
   
    slideMenu.style.right = '-200px'
})


// working for contact us page , so that  on click we get the  desire data




// .project{
//     margin-top: 50px;
//   }
  
//   h2.sub-title.projectTitle {
//    font-size: 45px;
//    margin-left:-80px;
//    text-align: center;
//   }
  
//   .i1{
//     font-size:35px;
//     margin-left:-60px;
//   }
  
  
//   #projectH2{
//     font-size: 30px;
//     margin-left:-60px;
//   }
  
//   .imgForMedia{
  
//   }