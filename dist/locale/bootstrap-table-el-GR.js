(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Greek translation
   * Author: giannisdallas
   */

  $.fn.bootstrapTable.locales['el-GR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Φορτώνει, παρακαλώ περιμένετε';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B1\u03BD\u03AC \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD " + pageFrom + " \u03C9\u03C2 \u03C4\u03B7\u03BD " + pageTo + " \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF " + totalRows + " \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD " + pageFrom + " \u03C9\u03C2 \u03C4\u03B7\u03BD " + pageTo + " \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF " + totalRows + " \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD";
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
      return 'Αναζητήστε';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Δεν βρέθηκαν αποτελέσματα';
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
      return 'Refresh';
    },
    formatToggle: function formatToggle() {
      return 'Toggle';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR']);

}));
