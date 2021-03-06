var ViewRequestModel = Backbone.Model.extend({

  defaults: function() {
    return {
      username: $.cookie('username'),
      token: $.cookie('token')
    }
  },

  fetchEmails: function(callbacks) {
    var self = this;
    $.ajax({
      url: 'api/viewRequest',
      type: 'POST',
      data: JSON.stringify(this),
      dataType: 'json'
    }).done(function(results) {
      self.set('emails', results);
      callbacks.success();
    }).fail(function() {
      callbacks.error();
    });
  }

});

var DashModel = Backbone.Model.extend({

  defaults: function() {
    return {
      username: $.cookie('username'),
      token: $.cookie('token')
    }
  },

  fetchRequestRows: function (callbacks) {
    var self = this;
    $.ajax({
      url: 'api/requestRows',
      type: 'POST',
      data: JSON.stringify(this),
      dataType: 'json'
    }).done(function(results) {
      self.set('rows', results);
      callbacks.success();
    }).fail(function() {
      callbacks.error();
    });
  }

});
