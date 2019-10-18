(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Hungarian translation
   * Author: Nagy Gergely <info@nagygergely.eu>
   */

  $.fn.bootstrapTable.locales['hu-HU'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Betöltés, kérem várjon';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rekord per oldal";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Megjelen\xEDtve " + pageFrom + " - " + pageTo + " / " + totalRows + " \xF6sszesen (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Megjelen\xEDtve " + pageFrom + " - " + pageTo + " / " + totalRows + " \xF6sszesen";
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
      return 'Keresés';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nincs találat';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Lapozó elrejtése/megjelenítése';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Frissítés';
    },
    formatToggle: function formatToggle() {
      return 'Összecsuk/Kinyit';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Oszlopok';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Összes';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hu-HU']);

}));
