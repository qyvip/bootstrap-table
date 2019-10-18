(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Persian translation
   * Author: MJ Vakili <mjv.1989@Gmail.com>
   */

  $.fn.bootstrapTable.locales['fa-IR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'در حال بارگذاری, لطفا صبر کنید';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0631\u06A9\u0648\u0631\u062F \u062F\u0631 \u0635\u0641\u062D\u0647";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0646\u0645\u0627\u06CC\u0634 " + pageFrom + " \u062A\u0627 " + pageTo + " \u0627\u0632 " + totalRows + " \u0631\u062F\u06CC\u0641 (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u0646\u0645\u0627\u06CC\u0634 " + pageFrom + " \u062A\u0627 " + pageTo + " \u0627\u0632 " + totalRows + " \u0631\u062F\u06CC\u0641";
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
      return 'جستجو';
    },
    formatNoMatches: function formatNoMatches() {
      return 'رکوردی یافت نشد.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'نمایش/مخفی صفحه بندی';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'به روز رسانی';
    },
    formatToggle: function formatToggle() {
      return 'تغییر نمایش';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'سطر ها';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'همه';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR']);

}));
