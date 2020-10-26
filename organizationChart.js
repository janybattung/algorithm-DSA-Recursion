const organizeEmployees = function(employees, boss) {
    let orgChart = {} //Set up empty object to put data in
    employees
      .filter(employee => employee.boss === boss) //Find employees who are bossed by current employee
      .forEach(employee => {
        orgChart[employee.id] = organizeEmployees(employees, employee.id) 
  
    })
    return orgChart
  }
  
  let employeesChart = JSON.stringify(organizeEmployees(employees, null))
  
  console.log(employeesChart)