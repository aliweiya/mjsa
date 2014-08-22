// Generated by CoffeeScript 1.4.0

(function($) {
  return $.fn.cssQueue = function(queue) {
    this.each(function() {
      var $el, copiedQueue, processQueue;
      $el = $(this);
      copiedQueue = queue.slice();
      processQueue = function() {
        var actualStep, updateElement;
        actualStep = copiedQueue.shift();
        if (actualStep != null) {
          updateElement = function() {
            if (actualStep.addClassName != null) {
              $el.addClass(actualStep.addClassName);
            }
            if (actualStep.removeClassName != null) {
              $el.removeClass(actualStep.removeClassName);
            }
            if (copiedQueue.length !== 0) {
              if (actualStep.waitForTransition === true) {
                $el.one("webkitTransitionEnd transitionend oTransitionEnd", function() {
                  return setTimeout(processQueue, 0);
                });
              } else {
                setTimeout(processQueue, 0);
              }
            }
            if (actualStep.callBack != null) {
              return actualStep.callBack();
            }
          };
          if (actualStep.delay > 4) {
            return setTimeout(updateElement, actualStep.delay);
          } else {
            return updateElement();
          }
        }
      };
      processQueue();
      return this;
    });
    return this;
  };
})(jQuery);
