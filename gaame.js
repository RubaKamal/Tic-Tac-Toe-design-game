let title = document.querySelector('.title');
let turn ='x';
let squares =[];
function winnner()
{
for(let i = 1; i<10;i++)
{
  squares[i] = document.getElementById('item + i').innerHTML;                                
}
if(squares[1] == squares[2] && squares[2] ==squares[3] && squares[1] !='')
{
else if(squares[4] == squares[5] && squares[5] ==squares[6] && squares[1] !='')
}
if(squares[7] == squares[8] && squares[8] ==squares[9] && squares[8] !='')
}
function game(id)
else if(squares[1] == squares[4] && squares[4] ==squares[7] && squares[5] !='')
{
else if(squares[2] == squares[5] && squares[5] ==squares[8] && squares[5] !='')  
                               
let element = document.getElementById(id)
if(turn ==='x' && element.innerHTML =='')
{
element.innerHTML = 'x';
turn = 'o';
title.innerHTML ='0';
}
else if(turn ==='o' && element.innerHTML ==''){
element.innerHTML = 'o';
turn = 'x';
title.innerHTML = 'x';

}
}
winnner();
