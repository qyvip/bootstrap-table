(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Thai translation
   * Author: Monchai S.<monchais@gmail.com>
   */

  $.fn.bootstrapTable.locales['th-TH'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'กำลังโหลดข้อมูล, กรุณารอสักครู่';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 " + pageFrom + " \u0E16\u0E36\u0E07 " + pageTo + " \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 " + totalRows + " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 " + pageFrom + " \u0E16\u0E36\u0E07 " + pageTo + " \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 " + totalRows + " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23";
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
      return 'ค้นหา';
    },
    formatNoMatches: function formatNoMatches() {
      return 'ไม่พบรายการที่ค้นหา !';
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
      return 'รีเฟรส';
    },
    formatToggle: function formatToggle() {
      return 'สลับมุมมอง';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'คอลัมน์';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH']);

}));
