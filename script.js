let body = document.body;


// here about container and div
const container = document.createElement("div");
container.className ="container";
const rowdiv = document.createElement("div");
rowdiv.className = "row";
container.appendChild(rowdiv);

// about navbar

let navdiv = document.createElement('div');
navdiv.setAttribute('class','navdiv col-12 align-items-center')
navdiv.innerHTML =`
<span><i class="fa-solid fa-lock-open"></i></span>
<span><i class="fa-solid fa-glass-water"></i></span>
<span><i class="fa-solid fa-database"></i></span>
<h1>Free and open source brewery data</h1>`;
rowdiv.appendChild(navdiv)





let coldiv = document.createElement("div");
coldiv.setAttribute('class','col-12 align-items-center table-responsive')
rowdiv.appendChild(coldiv);





// about table here
const table = document.createElement("table");
table.className='table';
coldiv.append(table);
const thead = document.createElement("thead");
table.appendChild(thead);
const theadtr = document.createElement("tr")
thead.appendChild(theadtr);

const thno = document.createElement('th')
thno.innerText = "#"
const th1 = document.createElement('th');
th1.innerText = "breweries name"
const th2 = document.createElement('th');
th2.innerText = "breweries type."
const th3 = document.createElement('th');
th3.innerText = "brewery's address.";
const th4 = document.createElement('th');
th4.innerText = "website url."
const th5 = document.createElement('th')
th5.innerText = " phone no of the brewery."

theadtr.append(thno,th1,th2,th3,th4,th5);


body.appendChild(container)

// here we are developing tbody
const tbody = document.createElement("tbody");
table.appendChild(tbody);








// here main logic code

async function webcone(){
    

    
    

        const responce = await fetch(`https://api.openbrewerydb.org/breweries/search?query=dog&per_page=100
        `);
        const outputjson =  await responce.json();
        
        outputjson.forEach((element,counter)=>{
            
             // object destructure
            const{name,brewery_type,address_3,website_url,phone}=element;
    
            const tr_fortbody = document.createElement('tr');
            
    
            const th_fortr = document.createElement("th")
            th_fortr.innerText = counter+1;
    
            const td1_fortr =document.createElement("td");
            td1_fortr.innerText =name;
           
            td1_fortr.style.color ="blue";
            const td2_fortr =document.createElement("td");
            td2_fortr.innerText = brewery_type;
            td2_fortr.style.color= "rgb(111, 131, 232)"
            const td3_fortr =document.createElement("td");
            td3_fortr.innerText=address_3;
            const td4_fortr =document.createElement("td");
            td4_fortr.innerText =website_url;
            td4_fortr.style.color ="red"
            const td5_fortr =document.createElement("td");
            td5_fortr.innerText= phone;
            td5_fortr.style.color="green"
            tr_fortbody.append(th_fortr,td1_fortr,td2_fortr,td3_fortr,td4_fortr,td5_fortr);
    
            tbody.appendChild(tr_fortbody)
            
        })   
}
webcone()
