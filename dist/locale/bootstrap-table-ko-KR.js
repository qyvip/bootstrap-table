(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Korean translation
   * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
   */

  $.fn.bootstrapTable.locales['ko-KR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return '데이터를 불러오는 중입니다';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\uD398\uC774\uC9C0 \uB2F9 " + pageNumber + "\uAC1C \uB370\uC774\uD130 \uCD9C\uB825";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\uC804\uCCB4 " + totalRows + "\uAC1C \uC911 " + pageFrom + "~" + pageTo + "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825, (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\uC804\uCCB4 " + totalRows + "\uAC1C \uC911 " + pageFrom + "~" + pageTo + "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825,";
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
      return '검색';
    },
    formatNoMatches: function formatNoMatches() {
      return '조회된 데이터가 없습니다.';
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
      return '새로 고침';
    },
    formatToggle: function formatToggle() {
      return '전환';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return '컬럼 필터링';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);

}));
