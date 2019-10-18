(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * @author: Jewway
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  $.fn.bootstrapTable.methods.push('changeTitle');
  $.fn.bootstrapTable.methods.push('changeLocale');

  $.BootstrapTable =
  /*#__PURE__*/
  function (_$$BootstrapTable) {
    _inheritsLoose(_class, _$$BootstrapTable);

    function _class() {
      return _$$BootstrapTable.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.changeTitle = function changeTitle(locale) {
      $.each(this.options.columns, function (idx, columnList) {
        $.each(columnList, function (idx, column) {
          if (column.field) {
            column.title = locale[column.field];
          }
        });
      });
      this.initHeader();
      this.initBody();
      this.initToolbar();
    };

    _proto.changeLocale = function changeLocale(localeId) {
      this.options.locale = localeId;
      this.initLocale();
      this.initPagination();
      this.initBody();
      this.initToolbar();
    };

    return _class;
  }($.BootstrapTable);

}));
