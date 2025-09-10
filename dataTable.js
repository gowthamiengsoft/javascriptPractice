const data1 = [{
    name: 'Gowthami',
    status: 'pass',
    rollNo: 16,
},
{
    name: 'Rithvik',
    status: 'fail',
}
]
const data2 = [{
    name: 'Raksan',
    status: 'pass',
    rollNo: 17,
},
{
    name: 'Rithvik',
    status: 'fail',
    
}
]

const mergedData = [...data1, ...data2];
console.log(mergedData);

// const detaiData = mergedData.map((x)=> {

//     console.log(x.name);
// })



//Create Table
const table = document.createElement('table');
const headerRow = table.insertRow();


//Table Headers
const headers = ['Name', 'Status', 'RollNo'];
headers.forEach(headerText => {
    const th = document.createElement ('th');
    th.innerText = headerText;
    headerRow.appendChild(th);

    // console.log('headers1', headers);

});
// populate table rows with conditional coloring

mergedData.forEach(item => {

    const row = table.insertRow();
    row.insertCell().innerText = item.name ? item.name : '';    
    row.insertCell().innerText = item.rollNo ? item.rollNo : '';
    // row.insertCell().innerText = item.status;

    const statusCell = row.insertCell();
    statusCell.innerText = item.status ? item.status : '';

//Apply color based on status

    if(item.status.toLocaleLowerCase() === 'pass') {
        statusCell.classList.add('active');
    }else if (item.status.toLocaleLowerCase() === 'fail') {
        statusCell.classList.add('inactive');
    }


});
//Append table to container
document.getElementById('table-container').appendChild(table);

