(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table danish translation
   * Author: Your Name Jan Borup Coyle, github@coyle.dk
   */

  $.fn.bootstrapTable.locales['da-DK'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Indlæser, vent venligst';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " poster pr side";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Viser " + pageFrom + " til " + pageTo + " af " + totalRows + " r\xE6kke" + (totalRows > 1 ? 'r' : '') + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Viser " + pageFrom + " til " + pageTo + " af " + totalRows + " r\xE6kke" + (totalRows > 1 ? 'r' : '');
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
      return "Viser " + totalRows + " r\xE6kke" + (totalRows > 1 ? 'r' : '');
    },
    formatClearSearch: function formatClearSearch() {
      return 'Ryd filtre';
    },
    formatSearch: function formatSearch() {
      return 'Søg';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ingen poster fundet';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skjul/vis nummerering';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Opdater';
    },
    formatToggle: function formatToggle() {
      return 'Skift';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Kolonner';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Alle';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Eksporter';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK']);

}));
