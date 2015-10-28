process.env.NODE_ENV = 'test';

var request = require('supertest');
require = require('really-need');

describe('method update', function() {
  var server;

  beforeEach(function() {
    server = require('../../bin/www', {
      bustCache: true
    });
  });

  afterEach(function(done) {
    server.close(done);
  });

  it('updates a valid method', function testMethodUpdate(done) {
    request(server)
      .post('/register')
      .set('Content-Type', 'application/json')
      .send('{"username": "myusername", "password": "MyPassword"}')
      .end(function() {
        // create a new method
        request(server)
          .post('/method')
          .auth('myusername', 'MyPassword')
          .set('Content-Type', 'application/json')
          .send('{"name": "Oral",' +
            '"icon": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="' +
            '}')
          .end(function() {
            // edit that method
            request(server)
              .put('/method')
              .auth('myusername', 'MyPassword')
              .set('Content-Type', 'application/json')
              .send('{"id": 1, "name": "Mouth"}')
              .end(function() {
                // request and check that it was updated
                request(server)
                  .get('/method')
                  .auth('myusername', 'MyPassword')
                  .set('Content-Type', 'application/json')
                  .send('{"id": 1}')
                  .expect(200, {
                    "id": 1,
                    "name": "Oral",
                    "icon": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=",
                    "owner": 1
                  }, done);
              });
          });
      });
  });

  it('denies method update with an invalid field', function testMethodUpdateInvalid(done) {
    request(server)
      .post('/register')
      .set('Content-Type', 'application/json')
      .send('{"username": "myusername", "password": "MyPassword"}')
      .end(function() {
        // create a new method
        request(server)
          .post('/method')
          .auth('myusername', 'MyPassword')
          .set('Content-Type', 'application/json')
          .send('{"name": "Oral",' +
            '"icon": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=",' +
            '}')
          .end(function() {
            // edit that method
            request(server)
              .put('/method')
              .auth('myusername', 'MyPassword')
              .set('Content-Type', 'application/json')
              .send('{"id": 1, "notafield": "value"}')
              .expect(400, {
                "method": "custom field requested that is not permitted"
              }, done);
          });
      });
  });
});