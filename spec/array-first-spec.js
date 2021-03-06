var arrayfun = require ('../arrayfun'); 



describe("arrayfun", function() {
  
  it("Must have a function named first()", function() {
    
    expect( arrayfun.first ).toBeDefined();
 

 }); 

  it("first() function must return a new array filled with the first n elements of the first argument (array)", function() {

    var test_array = [ 'a', 'b', 'c'];

    var result = arrayfun.first( test_array );

    expect( result ).toBe( 'a' );

});

    it("first() function must return a new array filled with the first n elements of the first argument (array)", function() {

      var test_array = ['a', 'b', 'c' ];

      var result2 = arrayfun.first( test_array, 2 );
      expect( result2 ).toEqual(['a','b']);

  });

});