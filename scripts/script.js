var main=document.getElementsByClassName('main')

var inputhidden=document.getElementById('inputhidden')
var inputclass0=document.getElementsByClassName('inputclass0')
var nameSpan=document.getElementsByClassName('nameSpan')
var dropdownContent=document.getElementsByClassName('dropdown-content')

var bpupper=document.getElementById('bpupper')
var bplower=document.getElementById('bplower')
var sugarfast=document.getElementById('sugarfast')
var sugarafter2=document.getElementById('sugarafter2')
var date=document.getElementById('date')
var weight=document.getElementById('weight')

var status=document.getElementById('status')
var records=document.getElementById('records')
var upbtn=document.getElementById('upbtn')
var cross=document.getElementById('cross')



var historySelect=document.getElementsByClassName('historySelect')
var historyTable=document.getElementsByClassName('historyTable')

var Data;
function dateFormat(dfa,dfb,dfc){
    return dfa.toString().padStart(2, '0')+'-'+dfb.toString().padStart(2, '0')+'-'+dfc.toString().padStart(2,'0')
}
function dmyTOymd(datedmy){
    return datedmy.slice(6)+'-'+datedmy.slice(3,5)+'-'+datedmy.slice(0,2)
}
function ymdTOdmy(dateymd){
    return dateymd.slice(8)+'-'+dateymd.slice(5,7)+'-'+dateymd.slice(0,4)
}
function meanfunc(arr){
    // var sum=0
    // for(i=0;i<arr.length;i++)
    // sum+=arr[i]
    // console.log(sum)
    // if(arr.length)
    // return sum/arr.length
    // return 0
    return arr
}

function Classification(){
    var bpuA=[
        [],[],[],[],[],[],[],[],[],[],[],[]
    ]
    var bplA=[
        [],[],[],[],[],[],[],[],[],[],[],[]
    ]
    var sfA=[
        [],[],[],[],[],[],[],[],[],[],[],[]
    ]
    var saA=[
        [],[],[],[],[],[],[],[],[],[],[],[]
    ]
    var wA=[
        [],[],[],[],[],[],[],[],[],[],[],[]
    ]
    Data.forEach(ele => {
        var vardate=ele["date"].split('-')
        bpuA[Number(vardate[1])-1].push(ele["bpupper"])
        bplA[Number(vardate[1])-1].push(ele["bplower"])
        sfA[Number(vardate[1])-1].push(ele["sugarfast"])
        saA[Number(vardate[1])-1].push(ele["sugarafter2"])
        wA[Number(vardate[1])-1].push(ele["weight"])
    });
    var avgV=[
        [],[],[],[],[]        
    ]
    console.log(bpuA)
    for(i=0;i<12;i++){
        console.log(meanfunc(bpuA[i]))
        // avgV[0].push(meanfunc(bpuA[i]))
    }
}

function Funsort(data){
    data.sort(function(stra,strb){
        var namea=stra["date"];
        var nameb=strb["date"];
        // console.log(namea,nameb)
        if(namea<nameb)
        return -1;
        if(namea>nameb)
        return 1;
        return 0;
    })    
}
function sorting(data,nval){
    var newData=[]
    data.forEach(ele => {
        if(ele["nvalue"]==nval){
            newData.push(ele)
        }
    });
    return newData
}
dropdownContent[0].addEventListener('click',(event)=>{
    event.preventDefault()
    inputclass0[0].innerHTML=event.target.innerHTML
    dropdownContent[0].style.display='none'    
    bpupper.focus()    
})
inputclass0[0].addEventListener('click',(event)=>{    
    dropdownContent[0].style.display='block'
})
inputclass0[0].addEventListener('mouseover',(event)=>{    
    dropdownContent[0].style.display='block'
})
inputclass0[0].addEventListener('mouseout',(event)=>{    
    dropdownContent[0].style.display='none'
})
dropdownContent[0].addEventListener('mouseover',(event)=>{    
    dropdownContent[0].style.display='block'
})
dropdownContent[0].addEventListener('mouseout',(event)=>{    
    dropdownContent[0].style.display='none'
})

upbtn.addEventListener('click',(event)=>{
    records.classList.toggle("displayFlex")
    main[0].classList.toggle("displayFlex")
})
cross.addEventListener('click',(event)=>{
    records.classList.toggle("displayFlex")
    main[0].classList.toggle("displayFlex")
})

fetch('records.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        Data=data        
        Funsort(data)
        // Classification(data)        
        console.log(Data)
        // insertingStock(Data)
})


historySelect[0].addEventListener('click',(event)=>{
    if(event.target.value=='M Bharmal'){
        historyTable[0].children[0].innerHTML=``    
        var newDat=sorting(Data,"mb");                
        var thead=document.createElement('thead')
        thead.innerHTML=`
        <tr>
            <th>Date</th>
            <th>Upper</th>
            <th>Lower</th>
            <th>Fasting</th>
            <th>After 2 hrs</th>
            <th>Weight</th>                            
        </tr>
        `
        var tbody=document.createElement('tbody')
        newDat.forEach(ele => {            
            tbody.innerHTML+=`<tr class="trs">
            <td>${ymdTOdmy(ele["date"])}</td>
            <td>${ele["bpupper"]}</td>
            <td>${ele["bplower"]}</td>
            <td>${ele["sugarfast"]}</td>
            <td>${ele["sugarafter2"]}</td>
            <td>${ele["weight"]}</td>
            </tr>`;
            // if(months[0][Number(vardate[1])-1]){
            //     if(ele["bpupper"])
            //     months[0][Number(vardate[1])-1]=(Number(months[0][Number(vardate[1])-1]) + Number(ele["bpupper"]))/2;
            // }
            // else
            // months[0][Number(vardate[1])-1]=Number(ele["bpupper"])
            // if(months[1][Number(vardate[1])-1]){
            //     if(ele["bplower"]) 
            //     months[1][Number(vardate[1])-1]=(Number(months[1][Number(vardate[1])-1]) + Number(ele["bplower"]))/2;
            // }
            // else
            // months[1][Number(vardate[1])-1]=Number(ele["bplower"]);
            // if(months[2][Number(vardate[1])-1]){
            //         if(ele["sugarfast"])
            //         months[2][Number(vardate[1])-1]=(Number(months[2][Number(vardate[1])-1]) + Number(ele["sugarfast"]))/2;
            // }
            // else
            // months[2][Number(vardate[1])-1]=Number(ele["sugarfast"])
            // if(months[3][Number(vardate[1])-1]){
            //     if(ele["sugarafter2"])   
            //     months[3][Number(vardate[1])-1]=(Number(months[3][Number(vardate[1])-1]) + Number(ele["sugarafter2"]))/2;
            // }
            // else
            // months[3][Number(vardate[1])-1]=Number(ele["sugarafter2"])
            // if(months[4][Number(vardate[1])-1]){
            //     if(ele["weight"])
            //     months[4][Number(vardate[1])-1]=(Number(months[4][Number(vardate[1])-1]) + Number(ele["weight"]))/2;
            // }
            // else
            // months[4][Number(vardate[1])-1]=Number(ele["weight"])
            // console.log(months[0][Number(vardate[1])-1])
        });
        // console.log(months)
        historyTable[0].children[0].append(thead)
        historyTable[0].children[0].append(tbody)
    }
    else if(event.target.value=='F Bharmal'){
        historyTable[0].children[0].innerHTML=``    
        var newDat=sorting(Data,"fb");                
        var thead=document.createElement('thead')
        thead.innerHTML=`
        <tr>
            <th>Date</th>
            <th>Upper</th>
            <th>Lower</th>
            <th>Fasting</th>
            <th>After 2 hrs</th>
            <th>Weight</th>                            
        </tr>
        `
        var tbody=document.createElement('tbody')
        newDat.forEach(ele => {            
            tbody.innerHTML+=`<tr class="trs">
            <td>${ymdTOdmy(ele["date"])}</td>
            <td>${ele["bpupper"]}</td>
            <td>${ele["bplower"]}</td>
            <td>${ele["sugarfast"]}</td>
            <td>${ele["sugarafter2"]}</td>
            <td>${ele["weight"]}</td>
            </tr>`;
        });
        historyTable[0].children[0].append(thead)
        historyTable[0].children[0].append(tbody)
    }
})
