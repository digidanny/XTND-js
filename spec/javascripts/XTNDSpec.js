describe("XTND", function() {
  describe("extend", function() {
   it("should store a value in an arbitrarily nested object of window", function() {
     XTND.extend("winnie.the.pooh.loves","honey");
     expect(window.winnie.the.pooh.loves).toEqual("honey");
   });
   it("should not overwrite ancestor objects", function() {
     XTND.extend("winnie.the.pooh.loves","honey");
     XTND.extend("winnie.the.pooh.hates","bees");
     XTND.extend("winnie.has","fun");     
     expect(window.winnie.the.pooh.loves).toEqual("honey");     
     expect(window.winnie.the.pooh.hates).toEqual("bees");          
     expect(window.winnie.has).toEqual("fun");               
   });
  });
});