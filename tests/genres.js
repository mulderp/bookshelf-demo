var expect = require("chai").expect;

var Genre = require('../models/genre');

describe("A genre", function() {
  it("has a name", function() {
    var genre = new Genre({name: 'foo'});
    expect(genre.get('name')).to.equal('foo');
  });
});
