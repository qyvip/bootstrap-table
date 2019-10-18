(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Urdu translation
   * Author: Malik <me@malikrizwan.com>
   */

  $.fn.bootstrapTable.locales['ur-PK'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'براۓ مہربانی انتظار کیجئے';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 \u0641\u06CC \u0635\u0641\u06C1 ";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u062F\u06CC\u06A9\u06BE\u06CC\u06BA " + pageFrom + " \u0633\u06D2 " + pageTo + " \u06A9\u06D2 " + totalRows + "\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u062F\u06CC\u06A9\u06BE\u06CC\u06BA " + pageFrom + " \u0633\u06D2 " + pageTo + " \u06A9\u06D2 " + totalRows + "\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632";
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
      return 'تلاش';
    },
    formatNoMatches: function formatNoMatches() {
      return 'کوئی ریکارڈ نہیں ملا';
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
      return 'تازہ کریں';
    },
    formatToggle: function formatToggle() {
      return 'تبدیل کریں';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'کالم';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK']);

}));
