// Use your knowledge of JavaScript Prototypical Inheritance to
// make the tests pass

/* Your Code Goes Here*/

class Hotel {
  constructor(name, starRating) {
    this.starRating = starRating;
    this.getHotelName = function() {
      return name;
    };
  }
}

class RetailHotel extends Hotel {
  constructor(name, startRating, imageUrl) {
    super(name, startRating);
    this.imageUrl = imageUrl;
  }
}

//descr

/* Your Code Ends Here*/

/* Specs*/
describe('Hotel', function() {
  const sofitelHotel = new Hotel('Sofitel Hotel', 5);

  it('should be a constructor function', function() {
    expect(sofitelHotel).toBeDefined();
  });

  it('should have a public starRating field', function() {
    expect(sofitelHotel.starRating).toBe(5);
  });

  it('should have a private hotel field "name" and a getter method called getHotelName', function() {
    expect(sofitelHotel.name).toBeUndefined();
    expect(sofitelHotel.getHotelName()).toBe('Sofitel Hotel');
  });
});

describe('RetailHotel', function() {
  const marriot = new RetailHotel(
    'Marriot Mountain Resort',
    4.5,
    'testUrl.com'
  );

  it('should be defined', function() {
    expect(marriot).toBeDefined();
  });

  it('should inherit from Hotel', function() {
    expect(marriot instanceof Hotel).toBe(true);
  });

  it('should have a name', function() {
    expect(marriot.getHotelName()).toBe('Marriot Mountain Resort');
  });

  it('should have a public starRating variable', function() {
    expect(marriot.starRating).toBe(4.5);
  });

  it('should have an imageUrl', function() {
    expect(marriot.imageUrl).toBe('testUrl.com');
  });
});

// load jasmine htmlReporter
(function() {
  const env = jasmine.getEnv();
  env.addReporter(new jasmine.HtmlReporter());
  env.execute();
})();
