// Generated by CoffeeScript 1.7.1
(function() {
  var Backbone, Store, localsync;

  Store = window.Store, Backbone = window.Backbone, localsync = window.localsync;

  describe('localsync', function() {
    describe('standard Backbone.sync methods', function() {
      describe('creating records', function() {
        it('creates records', function() {
          var create, model, ready, _ref;
          _ref = {}, ready = _ref.ready, create = _ref.create, model = _ref.model;
          runs(function() {
            create = spyOn(Store.prototype, 'create');
            model = new Backbone.Model({
              id: 1
            });
            return localsync('create', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              })
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            return expect(create).toHaveBeenCalledWith(model);
          });
        });
        it('does not overwrite existing models with fetch(add: true) unless passed merge: true', function() {
          var create, ready, _ref;
          _ref = {}, ready = _ref.ready, create = _ref.create;
          runs(function() {
            var model;
            ready = false;
            create = spyOn(Store.prototype, 'find').andReturn({
              id: 1
            });
            create = spyOn(Store.prototype, 'create');
            model = new Backbone.Model({
              id: 1
            });
            return localsync('create', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              }),
              add: true
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          runs(function() {
            var model;
            ready = false;
            expect(create).not.toHaveBeenCalled();
            model = new Backbone.Model({
              id: 1
            });
            return localsync('create', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              }),
              add: true,
              merge: true
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            return expect(create).toHaveBeenCalled();
          });
        });
        return it('supports marking a new record dirty', function() {
          var create, dirty, model, ready, _ref;
          _ref = {}, ready = _ref.ready, create = _ref.create, model = _ref.model, dirty = _ref.dirty;
          runs(function() {
            model = new Backbone.Model({
              id: 1
            });
            create = spyOn(Store.prototype, 'create').andReturn(model);
            dirty = spyOn(Store.prototype, 'dirty');
            return localsync('create', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              }),
              dirty: true
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            expect(create).toHaveBeenCalledWith(model);
            return expect(dirty).toHaveBeenCalledWith(model);
          });
        });
      });
      describe('reading records', function() {
        it('reads models', function() {
          var find, model, ready, _ref;
          _ref = {}, ready = _ref.ready, find = _ref.find, model = _ref.model;
          runs(function() {
            find = spyOn(Store.prototype, 'find');
            model = new Backbone.Model({
              id: 1
            });
            return localsync('read', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              })
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            return expect(find).toHaveBeenCalledWith(model);
          });
        });
        return it('reads collections', function() {
          var findAll, ready, _ref;
          _ref = {}, ready = _ref.ready, findAll = _ref.findAll;
          runs(function() {
            findAll = spyOn(Store.prototype, 'findAll');
            return localsync('read', new Backbone.Collection, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              })
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            return expect(findAll).toHaveBeenCalled();
          });
        });
      });
      describe('updating records', function() {
        it('updates records', function() {
          var model, ready, update, _ref;
          _ref = {}, ready = _ref.ready, update = _ref.update, model = _ref.model;
          runs(function() {
            update = spyOn(Store.prototype, 'update');
            model = new Backbone.Model({
              id: 1
            });
            return localsync('update', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              })
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            return expect(update).toHaveBeenCalledWith(model);
          });
        });
        return it('supports marking an updated record dirty', function() {
          var dirty, model, ready, update, _ref;
          _ref = {}, ready = _ref.ready, update = _ref.update, model = _ref.model, dirty = _ref.dirty;
          runs(function() {
            model = new Backbone.Model({
              id: 1
            });
            update = spyOn(Store.prototype, 'update');
            dirty = spyOn(Store.prototype, 'dirty');
            return localsync('update', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              }),
              dirty: true
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            expect(update).toHaveBeenCalledWith(model);
            return expect(dirty).toHaveBeenCalledWith(model);
          });
        });
      });
      return describe('deleting records', function() {
        it('deletes records', function() {
          var destroy, model, ready, _ref;
          _ref = {}, ready = _ref.ready, destroy = _ref.destroy, model = _ref.model;
          runs(function() {
            destroy = spyOn(Store.prototype, 'destroy');
            model = new Backbone.Model({
              id: 1
            });
            return localsync('delete', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              })
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            return expect(destroy).toHaveBeenCalledWith(model);
          });
        });
        it('supports marking a dirty record destroyed', function() {
          var destroy, destroyed, model, ready, _ref;
          _ref = {}, ready = _ref.ready, destroy = _ref.destroy, destroyed = _ref.destroyed, model = _ref.model;
          runs(function() {
            model = new Backbone.Model({
              id: 1
            });
            destroy = spyOn(Store.prototype, 'destroy');
            destroyed = spyOn(Store.prototype, 'destroyed');
            return localsync('delete', model, {
              success: (function() {
                return ready = true;
              }),
              error: (function() {
                return ready = true;
              }),
              dirty: true
            });
          });
          waitsFor((function() {
            return ready;
          }), "A callback should have been called", 100);
          return runs(function() {
            expect(destroy).toHaveBeenCalledWith(model);
            return expect(destroyed).toHaveBeenCalledWith(model);
          });
        });
        return it("doesn't mark a model with a temp id as destroyed", function() {
          var destroy, destroyed, model, success, _ref;
          _ref = {}, destroy = _ref.destroy, destroyed = _ref.destroyed, model = _ref.model, success = _ref.success;
          runs(function() {
            model = new Backbone.Model;
            model.id = Store.prototype.generateId();
            destroy = spyOn(Store.prototype, 'destroy');
            destroyed = spyOn(Store.prototype, 'destroyed');
            success = jasmine.createSpy("success");
            return localsync('delete', model, {
              dirty: true,
              success: success
            });
          });
          return runs(function() {
            expect(destroy).toHaveBeenCalledWith(model);
            expect(destroyed).not.toHaveBeenCalled;
            return expect(success).toHaveBeenCalled();
          });
        });
      });
    });
    describe('extra methods', function() {
      it('clears out all records from the store', function() {
        return runs(function() {
          var clear;
          clear = spyOn(Store.prototype, 'clear');
          return localsync('clear', {}, {
            success: (function() {
              var ready;
              return ready = true;
            }),
            error: (function() {
              var ready;
              return ready = true;
            })
          });
        });
      });
      return it('reports whether or not it hasDirtyOrDestroyed', function() {
        return runs(function() {
          var clear;
          clear = spyOn(Store.prototype, 'hasDirtyOrDestroyed');
          return localsync('hasDirtyOrDestroyed', {}, {
            success: (function() {
              var ready;
              return ready = true;
            }),
            error: (function() {
              var ready;
              return ready = true;
            })
          });
        });
      });
    });
    describe('callbacks', function() {
      it("sends the models's attributes as the callback response", function() {
        var model, response, _ref;
        _ref = {}, model = _ref.model, response = _ref.response;
        runs(function() {
          model = new Backbone.Model({
            id: 1
          });
          return localsync('create', model, {
            success: (function(resp) {
              return response = resp;
            })
          });
        });
        waitsFor((function() {
          return response;
        }), "A callback should have been called with a response", 100);
        return runs(function() {
          return expect(response).toBe(model.attributes);
        });
      });
      return it('ignores callbacks when the ignoreCallbacks option is set', function() {
        var callback, start, _ref;
        _ref = {
          start: new Date().getTime()
        }, start = _ref.start, callback = _ref.callback;
        runs(function() {
          var model;
          callback = jasmine.createSpy('callback');
          model = new Backbone.Model({
            id: 1
          });
          return localsync('create', model, {
            success: callback,
            error: callback,
            ignoreCallbacks: true
          });
        });
        waitsFor((function() {
          return new Date().getTime() - start > 5;
        }), 'Wait 5 ms to give the callback a chance to execute', 100);
        runs(function() {
          var model;
          start = false;
          expect(callback).not.toHaveBeenCalled();
          model = new Backbone.Model({
            id: 1
          });
          return localsync('create', model, {
            success: callback,
            error: callback
          });
        });
        return waitsFor((function() {
          return callback.wasCalled;
        }), 'The callback should have been called', 100);
      });
    });
    return describe('model parameter', function() {
      beforeEach(function() {
        return spyOn(Store.prototype, 'create');
      });
      it('should not accept objects / attributes as model', function() {
        var attributes, call;
        attributes = {};
        call = function() {
          return localsync('create', attributes, {
            ignoreCallbacks: true
          });
        };
        return expect(call).toThrow();
      });
      it('should accept a backbone model as model', function() {
        var call;
        call = function() {
          return localsync('create', new Backbone.Model, {
            ignoreCallbacks: true
          });
        };
        return expect(call).not.toThrow();
      });
      it('should accept a backbone collection as model', function() {
        var call;
        call = function() {
          return localsync('create', new Backbone.Collection, {
            ignoreCallbacks: true
          });
        };
        return expect(call).not.toThrow();
      });
      it('should accept any object as model on extra method "clear"', function() {
        var call;
        call = function() {
          return localsync('clear', {}, {
            ignoreCallbacks: true
          });
        };
        return expect(call).not.toThrow();
      });
      return it('should accept any object as model on extra method "hasDirtyOrDestroyed"', function() {
        var call;
        call = function() {
          return localsync('hasDirtyOrDestroyed', {}, {
            ignoreCallbacks: true
          });
        };
        return expect(call).not.toThrow();
      });
    });
  });

}).call(this);

//# sourceMappingURL=localsync_spec.map