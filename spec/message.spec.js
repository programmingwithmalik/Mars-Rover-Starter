const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
  
it("constructor sets name", function() {
    let message = new Message('received');
    expect(message.name).toEqual('received');
  });

  it("contains a commands array passed into the constructor as 2nd argument", function() {
    let commands = 
      [   
        new Command("MODE_CHANGE", "LOW_POWER"),
        new Command("STATUS_CHECK"),
      ];

    //expect(commands.value).toEqual(Message.value);

    let message = new Message("Test Message with two Commands", commands);

    expect (message.commands[0].commandType).toEqual("MODE_CHANGE");
    expect (message.commands [0].value).toEqual ("LOW_POWER");
    expect (message.commands[1].commandType).toEqual ("STATUS_CHECK");
  });
});
