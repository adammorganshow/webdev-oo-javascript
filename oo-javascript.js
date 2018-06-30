function Trainer(name, tasks = []) {
  this.name = name;
  this.tasks = tasks;
  this.identify = function() {
    console.log(`The trainer is ${this.name}`);
  };
  this.addTask = function(task) {
    this.tasks.push(task);
  };
  this.printTasks = function() {
    if (this.tasks.length === 1) {
      console.log('Nearly finished!');
    }
    console.log(`Remaining tasks: ${this.tasks}`);
  };
  this.removeTask = function(task) {
    if (this.tasks.indexOf(task) === -1) {
      console.log('That task does not exist!');
    } else {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }
  };
}

let ash = new Trainer('Ash', ['Get a Pokemon', 'Leave Pallet Town']);
ash.removeTask('Get a Pokemon'); // Get this to work
ash.printTasks();
// Nearly finished!
// Remaining tasks: Leave Pallet Town