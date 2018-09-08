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

//Functions

const inputCommand = prompt('Enter Command');
const commandList = ['print', 'verify', 'lookup', 'contains', 'update', 'add', 'delete'];

render('------------ OUTPUT --------------')

for (let i = 0; i < commandList.length; i++) {

  if (inputCommand === commandList[0]) {
    print();
  }

  else if (inputCommand === commandList[1]) {
    verify();
  }

  else if (inputCommand === commandList[2]) {
    lookup();
  }

  else if (inputCommand === commandList[3]) {
    contains();
  }

  else if (inputCommand === commandList[4]) {
    update();
  }

};

//Print

function print() {
  render(`Total Number of Employees: ${employeeList.length}`);
  render(`-------------------------------------------------------`);
  for (i = 0; i < employeeList.length; i++) {
    render(`Name: ${employeeList[i].name}`);
    render(`Office Number: ${employeeList[i].officeNum}`);
    render(`Phone Number: ${employeeList[i].phoneNum}`);
    render(`-------------------------------------------------------`);
  }
}

//Verify

function verify() {
  const inputName = prompt('Enter Employee Name').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (inputName === employeeList[i].name.toLowerCase()) {
      render(`True`);
    } else {
      render(`False`);
    }
  }
}

//Lookup

function lookup() {
  const inputName = prompt('Enter Employee Name').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (inputName === employeeList[i].name.toLowerCase()) {
      render(`Name: ${employeeList[i].name}`);
      render(`Office Number: ${employeeList[i].officeNum}`);
      render(`Phone Number: ${employeeList[i].phoneNum}`);
    } else {
      render(`Employee Not Found`);
    }
  }
}

//Contains

function contains() {
  const inputName = prompt('Enter Characters').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().includes(inputName)) {
      render(`Name: ${employeeList[i].name}`);
      render(`Office Number: ${employeeList[i].officeNum}`);
      render(`Phone Number: ${employeeList[i].phoneNum}`);
      render(`-------------------------------------------------------`);
    }
  }
}

//Update

function update() {
  const inputName = prompt('Enter Employee Name').toLowerCase();

  for (i = 0; i < employeeList.length; i++) {
    if (inputName === employeeList[i].name.toLowerCase()) {

      const inputItem = prompt('Change Name, Office or Phone?').toLowerCase();

      if (inputItem === 'name');
      const newName = prompt('Enter New Name').toLowerCase();
      
        employeeList[i][inputItem] = newName;
        render(`name: ${employeeList[i].name}`);
        render(`officeNum: ${employeeList[i].officeNum}`);
        render(`phoneNum: ${employeeList[i].phoneNum}`);
      }
    }
  }


