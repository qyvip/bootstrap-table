(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Hebrew translation
   * Author: legshooter
   */

  $.fn.bootstrapTable.locales['he-IL'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'טוען, נא להמתין';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u05DE\u05E6\u05D9\u05D2 " + pageFrom + " \u05E2\u05D3 " + pageTo + " \u05DE-" + totalRows + "\u05E9\u05D5\u05E8\u05D5\u05EA" + totalNotFiltered + " total rows)";
      }

      return "\u05DE\u05E6\u05D9\u05D2 " + pageFrom + " \u05E2\u05D3 " + pageTo + " \u05DE-" + totalRows + " \u05E9\u05D5\u05E8\u05D5\u05EA";
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
      return 'Clear Search';
    },
    formatSearch: function formatSearch() {
      return 'חיפוש';
    },
    formatNoMatches: function formatNoMatches() {
      return 'לא נמצאו רשומות תואמות';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'הסתר/הצג מספור דפים';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'רענן';
    },
    formatToggle: function formatToggle() {
      return 'החלף תצוגה';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'עמודות';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'הכל';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL']);

}));
