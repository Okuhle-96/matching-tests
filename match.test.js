describe("The Matching Days Functions", function(){

  describe("Should be able to set two dates and het their days with their colors.", function(){
    it("should be able to get the date input of 1996-01-22 from DATE ONE and show it's day by with color BROWN.", function(){
      let dayMatch = matchingDaysFactoryFunction();

      dayMatch.setFirstDay("1996-01-22");

      assert.deepEqual(dayMatch.getFirstDay(), { day: 'Monday', color: '' });
    })

    it("should be able to get the date input of 2017-04-06 from DATE TWO and show it's day by with color BLUE.", function () {
      let dayMatch = matchingDaysFactoryFunction();

      dayMatch.setSecondDay("2017-04-06");

      assert.deepEqual(dayMatch.getSecondDay(), { day: 'Thursday', color: '' });
    })
  })

  describe("Should be able to get the BOTH DAYS with their colors from differnt dates. ", function(){
    it("should be able to get the day set for DATE ONE and show it's day by with color BROWN.", function(){
      let dayMatch = matchingDaysFactoryFunction();

      dayMatch.setFirstDay("1996-01-22");
      dayMatch.setSecondDay("2010-07-01");

      assert.deepEqual(dayMatch.getFirstDay(), { day: 'Monday', color: '' });
    })

    it("should be able to get the day set for DATE TWO and show it's day by with color BLUE.", function () {
      let dayMatch = matchingDaysFactoryFunction();

      dayMatch.setFirstDay("1965-02-24");
      dayMatch.setSecondDay("2001-07-13");
      assert.deepEqual(dayMatch.getSecondDay(), { day: 'Friday', color: '' });
    })

  })

  });

