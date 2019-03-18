describe("Calculator", function() {
    // it('$inputLine should be none at beginning', function(){
    //     expect($inputLine.html()).toEqual('');
    // });
    it("test reset", function(){
        expect(reset().length).toEqual(0);
        // I guess test the $var from another html file is not going to work
        // Take a break here, and go found some Jasmine tutorial later
    });
    it("test overFlow", function(){
        // overFlow();
        expect(overFlow().html().length).toEqual(14);
    });
    it("test abc = abc", function(){
        expect(abc).toEqual('abc');
    });
   // it("should Return Hello world",function() {
   //    expect(helloword()).toEqual('Hello World');
   // });
});
