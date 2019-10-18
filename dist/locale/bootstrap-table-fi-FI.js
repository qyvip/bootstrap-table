(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Finnish translations
   * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
   */

  $.fn.bootstrapTable.locales['fi-FI'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Ladataan, ole hyvä ja odota';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rivi\xE4 sivulla";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "N\xE4ytet\xE4\xE4n rivit " + pageFrom + " - " + pageTo + " / " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "N\xE4ytet\xE4\xE4n rivit " + pageFrom + " - " + pageTo + " / " + totalRows;
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
      return 'Poista suodattimet';
    },
    formatSearch: function formatSearch() {
      return 'Hae';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Näytä/Piilota sivutus';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Päivitä';
    },
    formatToggle: function formatToggle() {
      return 'Valitse';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Sarakkeet';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Kaikki';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Vie tiedot';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI']);

}));
