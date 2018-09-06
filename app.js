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


const print = () => {
  for (let i = 0; i < employeeList.length; i++) {
    render(`${employeeList[i].name},
    ${employeeList[i].officeNum},
    ${employeeList[i].phoneNum}`);
  }
};

const verify = name => {
  const index = employeeList.findIndex(
    employee => employee.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (index >= 0) {
    render(`True`);
  } else {
    render(`False`);
  }
};

const lookup = name => {
  const result = employeeList.find(
    employee => employee.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (result === undefined) {
    render(`no match found...`);
  } else render(`${result.name} ${result.officeNum} ${result.phoneNum}`);
};

const contains = search => {
  const listContains = employeeList.filter(content =>
    content.name.toLowerCase().includes(search.toLowerCase())
  );
  if (listContains.length === 0) {
    render('No Match Found');
  } else {
    for (let i in listContains) {
      render(
        `${listContains[i].name} ${listContains[i].officeNum} ${
          listContains[i].phoneNum
        }`
      );
    }
  }
};

// Command Zone

const inputCommand = prompt('Enter Command');
const commandList = ['print', 'verify', 'lookup', 'contains', 'update', 'add', 'delete'];
let msg = '';
let output = '';

// for (let i = 0; i < commandList.length; i++) {
//   render(commandList[i]);
// }

render(msg);
render(output);
render('------------ OUTPUT --------------')

for (let i = 0; i < commandList.length; i++) {

  if (inputCommand === commandList[0]) {
    msg = 'I will Print';
    print();
    }
  
  else if (inputCommand === commandList[1]) {
    msg = 'I will Verify';
    const inputVerify = prompt('Enter Name');
    verify(inputVerify);
    event.preventDefault();
  }

  else if (inputCommand === commandList[2]) {
    msg = 'I will Lookup';
    const inputLookup = prompt('Lookup Name');
    lookup(inputLookup);
    event.preventDefault();
  }

  else if (inputCommand === commandList[3]) {
    msg = 'I will Contains?';
    const inputContains = prompt('Contain Name');
    contains(inputContains);
    event.preventDefault();
  }

  else if (inputCommand === commandList[4]) {
    msg = 'I will Update';
    
  }

  else if (inputCommand === commandList[5]) {
    msg = 'I will Add';
  }

  else if (inputCommand === commandList[6]) {
    msg = 'I will Delete';
  }

}




