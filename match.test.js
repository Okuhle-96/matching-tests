describe("The Matching Days Functions", function(){

  describe("Should be able to set two dates", function(){
    it("should be able to set date 1 and show it's day.", function(){
      let dayMatch = matchingDays();

      dayMatch.setDate1("1996-01-22");

      assert.equal(dayMatch.getDay1(), "Monday");
    })

    it("should be able to set date 2 and show it's day", function () {
      let dayMatch = matchingDays();
      dayMatch.setDate2("2017-04-06");
      assert.equal(dayMatch.getDay2(), "Thursday");
    })
  })

  describe("Should be able to get two dates when ", function(){
    it("should be able to set date 1 and show it's day.", function(){
      let dayMatch = matchingDays();

      dayMatch.setDate1("1996-01-22");
      dayMatch.setDate2("2010-07-01");

      assert.equal(dayMatch.getDay1(), "Monday");
    })

    it("should be able to set date 2 and show it's day", function () {
      let dayMatch = matchingDays();
      dayMatch.setDate1("1965-05-08");
      dayMatch.setDate2("2001-07-13");
      assert.equal(dayMatch.getDay2(), "Friday");
    })
  })
   

  describe("Should be able to get a matching day ", function(){
    it("should be able to set date 1 and show it's day.", function(){
      let dayMatch = matchingDays();

      dayMatch.setDate1("1996-01-22");
      dayMatch.setDate2("2021-05-31");

      assert.equal(dayMatch.sameDayCheck(), true);
    })
  

  })

  });
