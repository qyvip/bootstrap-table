(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Japanese translation
   * Author: Azamshul Azizy <azamshul@gmail.com>
   */

  $.fn.bootstrapTable.locales['ja-JP'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return '読み込み中です。少々お待ちください。';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\u30DA\u30FC\u30B8\u5F53\u305F\u308A\u6700\u5927" + pageNumber + "\u4EF6";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u5168" + totalRows + "\u4EF6\u304B\u3089\u3001" + pageFrom + "\u304B\u3089" + pageTo + "\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059 (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u5168" + totalRows + "\u4EF6\u304B\u3089\u3001" + pageFrom + "\u304B\u3089" + pageTo + "\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059";
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
      return '検索';
    },
    formatNoMatches: function formatNoMatches() {
      return '該当するレコードが見つかりません';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'ページ数を表示・非表示';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return '更新';
    },
    formatToggle: function formatToggle() {
      return 'トグル';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return '列';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'すべて';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ja-JP']);

}));
