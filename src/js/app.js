/* eslint-disable indent */
import $ from 'jquery';
import {makeArray} from './code-analyzer';
import {parseCode} from './code-analyzer';
$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
// eslint-disable-next-line no-unused-vars
        let lines= makeArray(parsedCode);
        insertToTable(lines);


    });

});

function insertToTable(lines) {
   // deleteRows();
    var bodyTable = document.getElementById('bodyTable');
    bodyTable.innerHTML = '';
    for(let i=0;i<lines.length;i++)
    {
        var row=document.createElement('tr');
        row=createRow(i,lines,row);
        bodyTable.appendChild(row);
    }
}

function createRow(i,lines,row){
    let h= document.createElement('td');
    h.textContent=lines[i].Line;
    row.append(h);
    h= document.createElement('td');
    h.textContent=lines[i].Type;
    row.append(h);
    h= document.createElement('td');
    h.textContent=lines[i].Name;
    row.append(h);
    h= document.createElement('td');
    h.textContent=lines[i].Condition;
    row.append(h);
    h= document.createElement('td');
    h.textContent=lines[i].Value;
    row.append(h);
    return row;
}
// function deleteRows(){
//     var bodyTable=document.getElementById('bodyTable')
//     for(let i=0;i<bodyTable.rows.length;i++)
//     {
//         document.getElementById('bodyTable').deleteRow(i);
//     }
// }

//function that describe the table from the array


