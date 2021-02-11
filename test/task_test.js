import assert from 'assert';
import {Task,TaskManager} from '../resources/js/task.js';


describe('TaskManager Class', () => {

    describe('.createTask()', () => {

        it('Creates a new task and adds it to the task list (array)', () => {
            // Setup
            const expectedTask1 = new Task(1);
            const expectedTask2 = new Task(2);
            const expectedArray = [expectedTask1, expectedTask2];
    
            // Exercise
            const tm = new TaskManager();
            const currentTask1 = tm.createTask();
            const currentTask2 = tm.createTask();
            const currentArray = tm._taskList;
    
            // Verify
            assert.deepEqual(currentArray, expectedArray);
        });
    });

    describe('.deleteTask(id)', () => {
        it('Deletes a task from the task list (array)', () => {
            // Setup
            const expectedTask1 = new Task(1);
            const expectedTask2 = new Task(2);
            const expectedArray = [expectedTask1, expectedTask2];
            expectedArray.pop();
    
            // Exercise
            const tm = new TaskManager();
            const currentTask1 = tm.createTask();
            const currentTask2 = tm.createTask();
            tm.deleteTask(2);
            const currentArray = tm._taskList;
    
            // Verify
            assert.deepEqual(currentArray, expectedArray);
        });
    });

    describe('.getTask(id)', () => {
        it('Gets a task by ID', () => {
            // Setup
            const expectedTask1 = new Task(1);
            const expectedTask2 = new Task(2);
            const expectedArray = [expectedTask1, expectedTask2];
            const expectedValue = expectedArray[0];

            // Exercise
            const tm = new TaskManager();
            const currentTask1 = tm.createTask();
            const currentTask2 = tm.createTask();
            const currentValue = tm.getTask(1);
    
            // Verify
            assert.equal(currentValue._id, expectedValue._id);
        });
    });

});
