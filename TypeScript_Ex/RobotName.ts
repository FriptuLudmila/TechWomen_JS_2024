/*                           Manage robot factory settings.

  When a robot comes off the factory floor, it has no name. The first time you turn on a robot,
a random name is generated in the format of two uppercase letters followed by three digits, such as RX837 or BC811.
  Every once in a while we need to reset a robot to its factory settings, which means that its name gets wiped.
  The next time you ask, that robot will respond with a new random name.
  The names must be random: they should not follow a predictable sequence. 
  Using random names means a risk of collisions. Your solution must ensure that every existing robot has a unique name. */

  export class Robot {
    private static usedNames: Set<string> = new Set();
    private _name: string | null = null;
  
    constructor() {
      this.resetName();
    }
  
    // Getter for the robot's name
    public get name(): string {
      if (!this._name) {
        this._name = this.generateUniqueName();
      }
      return this._name;
    }
  
    // Method to reset the robot's name
    public resetName(): void {
      this._name = this.generateUniqueName();
    }
  
    // Static method to release all names
    public static releaseNames(): void {
      Robot.usedNames.clear();
    }
  
    // Private method to generate a unique name
    private generateUniqueName(): string {
      let newName: string;
      do {
        newName = this.generateRandomName();
      } while (Robot.usedNames.has(newName));
      Robot.usedNames.add(newName);
      return newName;
    }
  
    // Private method to generate a random name
    private generateRandomName(): string {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const letterPart = letters.charAt(Math.floor(Math.random() * 26)) + letters.charAt(Math.floor(Math.random() * 26));
      const digitPart = ('000' + Math.floor(Math.random() * 1000)).slice(-3);
      return letterPart + digitPart;
    }
  }
  
 
  const robot = new Robot();
  console.log(robot.name); 
  robot.resetName();
  console.log(robot.name); 
  Robot.releaseNames();
  