const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];



const employeeListMatt = {
     name: 'Matt',
     officeNum: 100,
     phoneNum: '222-222-2222'
}

// Command Zone

const inputCommand = prompt('Enter Command');
const commandList = ['print', 'verify', 'lookup', 'contians', 'update', 'add', 'delete'];
let msg = '';
let output = '';

for (let i = 0; i < commandList.length; i++) {
  render(commandList[i]);
}

render('--------------------------')


for (let i = 0; i < commandList.length; i++) {
  
  if(inputCommand === commandList[0]){
      msg = 'I will Print';
      for (let j = 0; j < employeeList.length; j++) {
        render(employeeList[j].name);
      }
  } 
  
  else if(inputCommand === commandList[1]){
    msg = 'I will Verify';

    const inputVerify = prompt('Enter Name');

    for (let j = 0; j < employeeList.length; j++) {
      render(employeeList[j].name);

      if(inputVerify === employeeList.name){
        render('True');
      }

    }

  }

  else if(inputCommand === commandList[2]){
    msg = 'I will Lookup';
    const lookName = prompt('Lookup Name');
  }

  else if(inputCommand === commandList[3]){
    msg = 'I will Contains?';
  }

  else if(inputCommand === commandList[4]){
    msg = 'I will Update';
  }

  else if(inputCommand === commandList[5]){
    msg = 'I will Add';
  }

  else if(inputCommand === commandList[6]){
    msg = 'I will Delete';
  }
}


render(msg);
render(output);

