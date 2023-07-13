<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<div class="coach_wrpr {{name}}" id="coach_wrpr">


   <div id="profile-pic">

   </div>

   <div class="filter_wrpr">
      <form class="form">
         <div class="form_input col_3">
            <label>Name</label>
            <input id="coach-name" type="text" placeholder="Coach Name" value="" />
         </div>
         <div class="form_input col_3">
            <label>Select sports</label>
            <select id="sports">
               <option value="All">All</option>
               <option value="Aikido">Aikido</option>
               <option value="Alpine Skiing">Alpine Skiing</option>
               <option value="Archery">Archery</option>
               <option value="Arnis">Arnis</option>
               <option value="Artistic Swimming">Artistic Swimming</option>
               <option value="Athletics">Athletics</option>
               <option value="Badminton">Badminton</option>
               <option value="Baseball">Baseball</option>
               <option value="Basketball">Basketball</option>
               <option value="Boccia*">Boccia*</option>
               <option value="Bodybuilding">Bodybuilding</option>
               <option value="Boules">Boules</option>
               <option value="Boxing">Boxing</option>
               <option value="CP Football*">CP Football*</option>
               <option value="Canoe">Canoe</option>
               <option value="Chess">Chess</option>
               <option value="Chinlone">Chinlone</option>
               <option value="Contract Bridge">Contract Bridge</option>
               <option value="Cricket">Cricket</option>
               <option value="Cuesports">Cuesports</option>
               <option value="Curling">Curling</option>
               <option value="Cycling">Cycling</option>
               <option value="DanceSport">DanceSport</option>
               <option value="Darts">Darts</option>
               <option value="Deaf Sports - Athletics*">Deaf Sports - Athletics*</option>
               <option value="Deaf Sports - Futsal*">Deaf Sports – Futsal*</option>
               <option value="Deaf Sports â€“ Badminton*">Deaf Sports – Badminton*</option>
               <option value="Deaf Sports â€“ Bowling*">Deaf Sports – Bowling*</option>
               <option value="Deaf Sports â€“ Swimming*">Deaf Sports – Swimming*</option>
               <option value="Deaf Sports â€“ Table Tennis*">Deaf Sports – Table Tennis*</option>
               <option value="Disability Sports">Disability Sports</option>
               <option value="Diving">Diving</option>
               <option value="Dragon Boat">Dragon Boat</option>
               <option value="ESports">ESports</option>
               <option value="Equestrian">Equestrian</option>
               <option value="Fencing">Fencing</option>
               <option value="Floorball">Floorball</option>
               <option value="Football">Football</option>
               <option value="Frisbee">Frisbee</option>
               <option value="Fundamental Movement Skills">Fundamental Movement Skills</option>
               <option value="Gateball">Gateball</option>
               <option value="Goalball*">Goalball*</option>
               <option value="Golf">Golf</option>
               <option value="Gymnastics">Gymnastics</option>
               <option value="Handball">Handball</option>
               <option value="Hockey">Hockey</option>
               <option value="Ice Hockey">Ice Hockey</option>
               <option value="Ice Skating">Ice Skating</option>
               <option value="Jet Ski">Jet Ski</option>
               <option value="Ju-Jitsu">Ju-Jitsu</option>
               <option value="Judo">Judo</option>
               <option value="Jump Rope / Rope Skipping">Jump Rope / Rope Skipping</option>
               <option value="Kabaddi">Kabaddi</option>
               <option value="Karate">Karate</option>
               <option value="Kendo">Kendo</option>
               <option value="Kickboxing">Kickboxing</option>
               <option value="Kin-ball">Kin-ball</option>
               <option value="Kun Bokator">Kun Bokator</option>
               <option value="Kurash">Kurash</option>
               <option value="Lawn Bowls">Lawn Bowls</option>
               <option value="Lifesaving">Lifesaving</option>
               <option value="Luge">Luge</option>
               <option value="Modern Pentathlon">Modern Pentathlon</option>
               <option value="Motor Sports">Motor Sports</option>
               <option value="Mountaineering">Mountaineering</option>
               <option value="Muay Thai">Muay Thai</option>
               <option value="Netball">Netball</option>
               <option value="Nordic Combined">Nordic Combined</option>
               <option value="Obstacle Sports">Obstacle Sports</option>
               <option value="Open Water Swimming">Open Water Swimming</option>
               <option value="Para Archery*">Para Archery*</option>
               <option value="Para Athletics*">Para Athletics*</option>
               <option value="Para Badminton*">Para Badminton*</option>
               <option value="Para Bowling*">Para Bowling*</option>
               <option value="Para Bowls*">Para Bowls*</option>
               <option value="Para Chess*">Para Chess*</option>
               <option value="Para Cycling*">Para Cycling*</option>
               <option value="Para Equestrian*">Para Equestrian*</option>
               <option value="Para Powerlifting*">Para Powerlifting*</option>
               <option value="Para Sailing*">Para Sailing*</option>
               <option value="Para Shooting*">Para Shooting*</option>
               <option value="Para Swimming*">Para Swimming*</option>
               <option value="Para Table Tennis*">Para Table Tennis*</option>
               <option value="Para Triathlon*">Para Triathlon*</option>
               <option value="Pencak Silat">Pencak Silat</option>
               <option value="Petanque">Petanque</option>
               <option value="Pickleball">Pickleball</option>
               <option value="Powerboat">Powerboat</option>
               <option value="Powerchair Football*">Powerchair Football*</option>
               <option value="Rockwall Climbing">Rockwall Climbing</option>
               <option value="Roller Sports">Roller Sports</option>
               <option value="Rowing">Rowing</option>
               <option value="Rugby">Rugby</option>
               <option value="Sailing">Sailing</option>
               <option value="Sambo">Sambo</option>
               <option value="Sepaktakraw">Sepaktakraw</option>
               <option value="Shooting">Shooting</option>
               <option value="Shorinji Kempo">Shorinji Kempo</option>
               <option value="Sitting Volleyball*">Sitting Volleyball*</option>
               <option value="Skateboarding">Skateboarding</option>
               <option value="Skydiving">Skydiving</option>
               <option value="Snowboarding &amp; Skiing">Snowboarding &amp; Skiing</option>
               <option value="Soft Tennis">Soft Tennis</option>
               <option value="Softball">Softball</option>
               <option value="Special Olympics">Special Olympics</option>
               <option value="Sport Climbing">Sport Climbing</option>
               <option value="Squash">Squash</option>
               <option value="Surfing">Surfing</option>
               <option value="Swimming">Swimming</option>
               <option value="Table Tennis">Table Tennis</option>
               <option value="Taekwondo">Taekwondo</option>
               <option value="Tchoukball">Tchoukball</option>
               <option value="Tennis">Tennis</option>
               <option value="Tenpin Bowling">Tenpin Bowling</option>
               <option value="Touch Football">Touch Football</option>
               <option value="Traditional Taekwon-Do">Traditional Taekwon-Do</option>
               <option value="Triathlon">Triathlon</option>
               <option value="Tug Of War">Tug Of War</option>
               <option value="Underwater Sports">Underwater Sports</option>
               <option value="VI Football*">VI Football*</option>
               <option value="Volleyball">Volleyball</option>
               <option value="Vovinam">Vovinam</option>
               <option value="Wakeboard">Wakeboard</option>
               <option value="Water polo">Water polo</option>
               <option value="Waterski">Waterski</option>
               <option value="Waterski &amp; Wakeboard">Waterski &amp; Wakeboard</option>
               <option value="Weightlifting">Weightlifting</option>
               <option value="Weiqi">Weiqi</option>
               <option value="Wheelchair Basketball*">Wheelchair Basketball*</option>
               <option value="Wheelchair Fencing*">Wheelchair Fencing*</option>
               <option value="Wheelchair Rugby*">Wheelchair Rugby*</option>
               <option value="Wheelchair Tennis*">Wheelchair Tennis*</option>
               <option value="Woodball">Woodball</option>
               <option value="Wrestling">Wrestling</option>
               <option value="Wushu">Wushu</option>
               <option value="Xiangqi">Xiangqi</option>
               <option value="[NREP] Aqua Fitness">[NREP] Aqua Fitness</option>
               <option value="[NREP] Dance">[NREP] Dance</option>
               <option value="[NREP] HIIT Bootcamp Circuit">[NREP] HIIT Bootcamp Circuit</option>
               <option value="[NREP] Martial Arts &amp; Combat">[NREP] Martial Arts &amp; Combat</option>
               <option value="[NREP] Mind &amp; Body">[NREP] Mind &amp; Body</option>
               <option value="[NREP] Personal Trainer (Strength &amp; Conditioning)">[NREP] Personal Trainer (Strength &amp; Conditioning)</option>
               <option value="[NREP] Static Cycling">[NREP] Static Cycling</option>
            </select>
         </div>
         <div id="coach-gender" class="form_input col_3">
            <label>Gender</label>
            <div  class="gender_wrpr radio_input">
               <label>
                  <input id="gender-all" type="radio" name="gender" value="all" checked><span>All</span>
               </label>
            </div>
            <div class="gender_wrpr radio_input">
               <label>
                  <input id="gender-male" type="radio" name="gender" value="male"><span>Male</span>
               </label>
            </div>
            <div class="gender_wrpr radio_input">
               <label>
                  <input id="gender-female" type="radio" name="gender" value="female"><span>Female</span>
               </label>
            </div>
         </div>
         <div class="form_input col_3">
            <label>Coaching location</label>
            <select id="coach-location">
               <option valie="south-west">All</option>
               <option valie="">South West</option>
               <option valie="">South East</option>
               <option valie="">Central</option>
               <option valie="">North West</option>
               <option valie="">North East</option>
               <option valie="">No Preference</option>
            </select>
         </div>
         <div class="form_input col_7">
            <label>Level</label>
            <div class="check_box">
               <label>
                  <input id="coach-level" type="radio" name="level" value="All" checked="checked" >
                  <span class="checkmark">All</span>
               </label>
               <label>
                  <input id="provisional-coach" type="radio" name="level" value="Provisional Coach" >
                  <span class="checkmark">Provisional Coach (PC)</span>
               </label>
               <label>
                  <input type="radio" name="level" value="Coach" id="coach">
                  <span class="checkmark">Coach (C)</span>
               </label>
               <label>
                  <input type="radio" name="level" value="Senior Coach" id="senior-coach" >
                  <span class="checkmark">Senior Coach (SC)</span>
               </label>
               <label>
                  <input type="radio" name="level" value="Master Coach" id="master-coach" >
                  <span class="checkmark">Master Coach (MC)</span>
               </label>
            </div>
            {#<ul class="categories" id="coach-level">  
               <li class="active"><a href="javascript:void(0)" id="coach-level-all">All</a></li>
               <li><a href="javascript:void(0)" id="coach-level-personalpc">Provisional Coach (PC)</a></li>
               <li><a href="javascript:void(0)" id="coach-level-coach">Coach (C)</a></li>
               <li><a href="javascript:void(0)" id="coach-level-sc">Senior Coach (SC)</a></li>
               <li><a href="javascript:void(0)" id="coach-level-mc">Master Coach (MC)</a></li>
            </ul>#}

         </div>
         <div class="form_button col_5">
            <div class="clear_filter" style="opacity:0; pointer-events: none;">
               <a href="https://www-activesgcircle-gov-sg.sandbox.hs-sites.com/coach-test" class="btn">Clear all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg></a>            
            </div>
            <input id="search-button" type="button" value="Search Coches" class="btn">
         </div>
      </form>
   </div>

   <div class="filter_bar">
      <div class="col_left">
         <h3 id="total_coach">Coaches</h3>
      </div>
      <!--       <div class="col_right">
         <span>Show</span>
         <select>
            <option valie="">Recently updated</option>
            <option valie="">Recently updated</option>
            <option valie="">Recently updated</option>
            <option valie="">Recently updated</option>
            <option valie="">Recently updated</option>
         </select>
      </div> -->
   </div>

   <div class="hs_coaches_wrapper">
      <div class="loading" style="display:none;">
         <img src="{{ get_asset_url('../../images/loading-buffering.gif') }}" alt="Loading" style="display:block; margin:20px auto;">                                                        
      </div>
      <div id="coach-card" class="hs_coaches_cards"></div>
      <div id="card_pagination" class="card_pagination" ></div>
   </div>
</div>


let pageNum = 1;
let getDataURL = '/_hcms/api/coaches/get_coaches'
let postDataURL = '/_hcms/api/coaches/search_coaches'
let coach_name= '';
let coach_sports_event= 'All'
var coach_sports = 'All';
let coach_gender = 'All';
let coach_level= 'All';
let coach_location= 'All';
let coach_card = document.getElementById("coach-card");

window.onload = async function WindowLoad(event) {    
   let url;
    let reloadPage = false;
    console.log("START ")
    console.log("prvs-btn ",  localStorage.getItem("prvs-btn"))

   if(localStorage.getItem("prvs-btn") === "true"){
      reloadPage = localStorage.getItem("prvs-btn");
      localStorage.setItem("prvs-btn", false);
      if(localStorage.getItem("pageNum")){
         pageNum = localStorage.getItem("pageNum");
      }


      if(localStorage.getItem("coach_name")){
         coach_name = localStorage.getItem("coach_name");
      }
      if(localStorage.getItem("coach_sports")){
         coach_sports = localStorage.getItem("coach_sports");
      }
      if(localStorage.getItem("coach_gender")){
         coach_gender = localStorage.getItem("coach_gender");
      }
      if(localStorage.getItem("coach_level")){
         coach_level = localStorage.getItem("coach_level");
      }
      if(localStorage.getItem("coach_location")){
         coach_location = localStorage.getItem("coach_location");
      }

      if(localStorage.getItem("query") === "search"){
         url = postDataURL;
      }
   }else{
      pageNum = 1;
      localStorage.setItem("pageNumn", 1);
   }
   console.log("reloadPage ",  reloadPage)
   console.log("url ",  url)
   console.log("pageNum ",  pageNum)
 
   if(reloadPage && url){
      console.log("111")
     await getCoachData(url)
   }else{
       console.log("222")
       await getCoachData(getDataURL)
   }
  
}




async function getCoachData(URL){
   console.log("Page is loaded");
   if(isNaN(pageNum)){
      pageNum = 1;
   }
   const url = `${URL}?pageNum=${pageNum}`;
   console.log(url);
   $('.loading').show();


   coach_card.innerHTML = ""
   var options = "";

   if(URL === getDataURL){
      options = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         //body: {}
      };
   }else{
      options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         data: {
            coach_name,
            coach_sports,
            coach_gender,
            coach_level,
            coach_location,
            pageNum
         }
      };
   }

   let apiResponse = await axios(url, options)
   let coachData = await apiResponse.data.Result.Data
   let pagination = await apiResponse.data.Result
   pageNum = pagination.CurrentPageNo;
   const customPagination = generatePagination(pagination.CurrentPageNo, pagination.TotalPages, 3);
   const paginationElement_1 = document.getElementById('card_pagination').innerHTML;
   const paginationElement_2 = document.getElementById('card_pagination');
   paginationElement_2.innerHTML = customPagination;

   document.getElementById("total_coach").innerHTML = `Coaches (${pagination.Total})`
   let coach_html = ""
   for(let i =0; i < coachData.length; i++){
      let coach = coachData[i];
      let photo = coach.Photo;
      let img = new Image();
      let base64Img=photo.split(',')[1];
      let profile_pic = img.src = "data:image/png;base64," + base64Img;

      coach_html = coach_html + datafill(coach, profile_pic)
   }
   let final_coach = document.createElement('div')
   final_coach.innerHTML = coach_html
   coach_card.appendChild(final_coach)
   $('.loading').hide();

   callPagination(URL)


}

async function callPagination(URL){
   console.log("TOP", URL)
   if(!URL){
      URL = postDataURL
   }
   console.log("BOTTOM", URL)


   let pages = document.querySelectorAll('.card_pagination a')
   pages.forEach( item => {
      item.addEventListener('click', async function(e){
         e.preventDefault();



         let pageNumber = e.target.textContent
         console.log("click", pageNumber)

         $('html, body').animate({
            'scrollTop':$('#coach_wrpr').offset().top - 185
         }, 2000);

         if(!isNaN(pageNumber)){   
            if(parseInt(pageNumber) >= 1){
               pageNum =  parseInt(pageNumber);
            }
         } else if(pageNumber === "Next" ){
            pageNum = parseInt(pageNum) + 1;
         } else if(pageNumber === "Previous" && pageNum > 1 ){
            pageNum = parseInt(pageNum) - 1;
         }
         else{
            pageNum =  1;
         }

         // Set local variables for retrieving data
         localStorage.setItem("prvsUrl", URL);
         localStorage.setItem("coach_sports", coach_sports);
         localStorage.setItem("coach_gender", coach_gender);
         localStorage.setItem("coach_level", coach_level);
         localStorage.setItem("coach_location", coach_location);  
         localStorage.setItem("pageNum", pageNum);  

         await getCoachData(URL)

      })
   })
}


// document.getElementById("next-page").addEventListener('click', async (e) => {
//    e.preventDefault()
//    console.log("Next Result"); 
//    document.getElementById("total_coach").innerHTML = `Coaches`;

//    if(!isNaN(pageNum)){      
//       pageNum = 1 + parseInt(pageNum);
//    }else{
//       pageNum =  1;
//    }
//    await getCoachData()
// })

// document.getElementById("previous-page").addEventListener('click', async (e) => {
//    e.preventDefault()
//    console.log("Previous Result"); 
//    document.getElementById("total_coach").innerHTML = `Coaches`;

//    if(!isNaN(pageNum)){   
//       if(parseInt(pageNum) > 1){
//           pageNum =  parseInt(pageNum) - 1 ;
//       }

//    }else{
//       pageNum =  1;
//    }
//    await getCoachData()
// })

let search_button = document.getElementById("search-button");
search_button.addEventListener('click', async (e) => {
   e.preventDefault();
   $('.loading').show();
   coach_card.innerHTML = ""
   e.target.previousElementSibling.style.opacity = '1'
   e.target.previousElementSibling.style.pointerEvents = 'auto'
   e.target.previousElementSibling.classList.add("show_clear_button"); 

   pageNum = 1;
   document.getElementById("total_coach").innerHTML = `Coaches`

   coach_name= document.getElementById('coach-name').value;
   coach_sports_event= document.getElementById('sports')
   coach_sports = coach_sports_event.options[coach_sports_event.selectedIndex].text;
   coach_gender= document.querySelector('input[name="gender"]:checked').value;
   coach_level= document.querySelector('input[name="level"]:checked').value;
   coach_location= document.getElementById('coach-location').value;

   localStorage.setItem("coach_name", coach_name);
   localStorage.setItem("coach_sports", coach_sports);
   localStorage.setItem("coach_gender", coach_gender);
   localStorage.setItem("coach_level", coach_level);
   localStorage.setItem("coach_location", coach_location);
   localStorage.setItem("pageNum", pageNum);  
   localStorage.setItem("query", "search");  
   console.log("coach_location:", coach_location)
   console.log("coach_sports:", coach_sports)
   console.log("coach_name:", coach_name)
   console.log("coach_gender:", coach_gender)   
   console.log("coach_level:", coach_level)
   const url = "/_hcms/api/coaches/search_coaches";
   console.log(url);


   pageNum = 1;
   var options = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      data: {
         coach_name,
         coach_sports,
         coach_gender,
         coach_level,
         coach_location,
         pageNum
      }
   };
   let apiResponse = await axios(url, options)
   console.log("1 ",apiResponse)

   let coachData = await apiResponse.data.Result.Data
   let pagination = await apiResponse.data.Result


   pageNum = pagination.CurrentPageNo;
   const customPagination = generatePagination(pagination.CurrentPageNo, pagination.TotalPages, 3);
   const paginationElement_1 = document.getElementById('card_pagination').innerHTML;
   const paginationElement_2 = document.getElementById('card_pagination');
   paginationElement_2.innerHTML = customPagination;


   document.getElementById("total_coach").innerHTML = `Coaches (${pagination.Total})`
   console.log("apiResponse.data  ",apiResponse.data)
   console.log("Search ",coachData)

   let coach_html = ""
   for(let i =0; i < coachData.length; i++){
      let coach = coachData[i];
      let photo = coach.Photo;
      let img = new Image();
      let base64Img=photo.split(',')[1];
      // Set the src attribute to the base64 string
      let profile_pic = img.src = "data:image/png;base64," + base64Img;

      coach_html = coach_html + datafill(coach, profile_pic)
   }
   $('.loading').hide();
   let final_coach = document.createElement('div')
   final_coach.innerHTML = coach_html
   coach_card.appendChild(final_coach)
   $('.loading').hide();
   //  console.log(coach_html)

   callPagination()
}
                              )
function datafill(coach, profile_pic){
   let location = (coach?.CoachingProfiles[0]?.PreferredZones) ? coach?.CoachingProfiles[0]?.PreferredZones : "";
   let sports = []

   for(let i = 0; i < coach.NROCMembership.length ; i++){
      sports.push(" ".concat(coach.NROCMembership[i].Sport))
   }
   // console.log("aaa ", sports)

   return `<div class="hs_coaches_card">
<a href="/coach-details?name=${coach.Name}" class="card_link">
<div class="hs_coaches_card_innr">
<div class="hs_coaches_card_img">
<img src=${profile_pic} alt="profile_pic">
</div>
<h6 class="hs_coaches_card_name">${coach.Name}</h6>
<ul class="hs_coaches_card_lists">
<li>
<span class="hs_coaches_card_label">Gender: </span>
<span class="hs_coaches_card_result">${coach.Gender}</span>
</li>
<li>
<span class="hs_coaches_card_label">Nationality: </span>
<span class="hs_coaches_card_result">${coach.Nationality}</span>
</li>
<li>
<span class="hs_coaches_card_label">Category: </span>
<span class="hs_coaches_card_result">${sports.toString()}</span>
</li>
<li>
<span class="hs_coaches_card_label">Location: </span>
<span class="hs_coaches_card_result">${location}</span>
</li>
<li>
<span>Email:</span>
<span>${coach.EmailAddress}</span>
</li>
</ul>
</div>
</a>
</div>`
}

function generatePagination(currentPage, totalPages, pageRange) {
   let startPage;
   let endPage;

   debugger;

   if (currentPage < 3) {
      startPage = 1;
      endPage = Math.min(pageRange, totalPages);
   } else if (currentPage > totalPages) {
      startPage = Math.max(totalPages - pageRange + 1, 1);
      endPage = totalPages;
   } else if(currentPage === totalPages ){
      startPage = currentPage - 2;
      endPage = totalPages;
   } 
   else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
   }

   // Generate the numbered pagination
   let pagination = '';

   // Add "Previous" button if applicable
   if (currentPage > 1) {
      pagination += '<a href="#">Previous</a> ';
   }

   // Add the first page if current page is more than 3
   if (currentPage > 3) {
      pagination += '<a href="#">'+ 1 + '</a>';
      if (currentPage >= 5) {
         pagination += '<span class="dot next"> ... </span>';
      }
   }

   // Generate page numbers within the range
   for (let i = startPage; i <= endPage; i++) {
      if (i === currentPage) {
         pagination += '<a href="#pageNum='+ i +'" class="active">' + i + '</a> ';
      } else {
         pagination += '<a href="#pageNum='+ i +'">' + i + '</a> ';
      }
   }

   // Add the last page if current page is less than total pages - 2
   if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
         pagination += '<span class="dot total">... </span>';
      }
      pagination += '<a href="pageNum">'+ totalPages + '</a>';
   }

   // Add "Next" button if applicable
   if (currentPage < totalPages) {
      pagination += '<a href="#">Next</a>';
   }

   return pagination;
}
