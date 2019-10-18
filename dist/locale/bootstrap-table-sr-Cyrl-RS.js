(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
  * Bootstrap Table Serbian Cyrilic RS translation
  * Author: Vladimir Kanazir (vladimir@kanazir.com)
  */

  $.fn.bootstrapTable.locales['sr-Cyrl-RS'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Молим сачекај';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0440\u0435\u0434\u043E\u0432\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E " + pageFrom + ". - " + pageTo + ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 " + totalRows + " (\u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u043E \u043E\u0434 " + totalNotFiltered + ")";
      }

      return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E " + pageFrom + ". - " + pageTo + ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 " + totalRows;
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'претходна страна';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0443 " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'следећа страна';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E " + totalRows + " \u0440\u0435\u0434\u043E\u0432\u0430";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Обриши претрагу';
    },
    formatSearch: function formatSearch() {
      return 'Пронађи';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Није пронађен ни један податак';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Прикажи/сакриј пагинацију';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Прикажи пагинацију';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Сакриј пагинацију';
    },
    formatRefresh: function formatRefresh() {
      return 'Освежи';
    },
    formatToggle: function formatToggle() {
      return 'Промени приказ';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Прикажи картице';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Сакриј картице';
    },
    formatColumns: function formatColumns() {
      return 'Колоне';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Прикажи/сакриј све';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Цео екран';
    },
    formatAllRows: function formatAllRows() {
      return 'Све';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Аутоматско освежавање';
    },
    formatExport: function formatExport() {
      return 'Извези податке';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Иди';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Напредна претрага';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Затвори';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Cyrl-RS']);

}));
