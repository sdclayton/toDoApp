export  class Todo {
  public task: string;
  public category: string;
  public priority: string;
  public notes: string;

  constructor(task: string, category: string, priority: string, notes: string) {
    this.task = task;
    this.category = category;
    this.priority = priority;
    this.notes = notes;
  }
}


