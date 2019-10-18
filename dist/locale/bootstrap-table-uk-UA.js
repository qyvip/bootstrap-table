(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Ukrainian translation
   * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
   */

  $.fn.bootstrapTable.locales['uk-UA'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Завантаження, будь ласка, зачекайте';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 " + pageFrom + " \u043F\u043E " + pageTo + ". \u0412\u0441\u044C\u043E\u0433\u043E: " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 " + pageFrom + " \u043F\u043E " + pageTo + ". \u0412\u0441\u044C\u043E\u0433\u043E: " + totalRows;
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'previous page';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "to page " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'next page';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Showing " + totalRows + " rows";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Очистити фільтри';
    },
    formatSearch: function formatSearch() {
      return 'Пошук';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Не знайдено жодного запису';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Оновити';
    },
    formatToggle: function formatToggle() {
      return 'Змінити';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Стовпці';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'All';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Export data';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GO';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Advanced search';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Close';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA']);

}));
