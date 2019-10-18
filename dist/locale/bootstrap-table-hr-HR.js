(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
  * Bootstrap Table Croatian translation
  * Author: Petra Štrbenac (petra.strbenac@gmail.com)
  * Author: Petra Štrbenac (petra.strbenac@gmail.com)
  */

  $.fn.bootstrapTable.locales['hr-HR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Molimo pričekajte';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " broj zapisa po stranici";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Prikazujem " + pageFrom + ". - " + pageTo + ". od ukupnog broja zapisa " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Prikazujem " + pageFrom + ". - " + pageTo + ". od ukupnog broja zapisa " + totalRows;
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
      return 'Pretraži';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nije pronađen niti jedan zapis';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Prikaži/sakrij stranice';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Osvježi';
    },
    formatToggle: function formatToggle() {
      return 'Promijeni prikaz';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Kolone';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Sve';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR']);

}));
