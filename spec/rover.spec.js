const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {


  // 7 tests here!

  //test 7
it("constructor sets position and default values for mode and generatorWatts", function (){

  let roverVariant = new Rover(87382098);
  expect(roverVariant.position).toEqual(87382098);
  expect(roverVariant.generatorWatts).toEqual(110);
  expect(roverVariant.mode).toEqual('Normal');
}
); 
  //test 8

it("response returned by receiveMessage contains name of message" , function (){
  
  let testCommand = [new Command ('STATUS CHECK')];
  let testMessage = new Message ("Name", testCommand);
  let roverVariant = new Rover (123456);
  let testOutput = roverVariant.receiveMessage (testMessage);
  expect(testOutput.message).toEqual("Name");
} );

  //test 9
  
it ("response returned by receiveMessage includes two results if two commands are sent in the message" , function (){

  let testCommand = [new Command ('STATUS CHECK'), new Command ('MODE CHANGE')];
  let testMessage = new Message ("Name", testCommand);
  let roverVariant = new Rover (654321);
  expect (roverVariant.receiveMessage(testMessage).results.length).toEqual(2); 
})

//test 10

it ( )

});
