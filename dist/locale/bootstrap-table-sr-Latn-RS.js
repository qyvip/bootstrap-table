(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
  * Bootstrap Table Serbian Latin RS translation
  * Author: Vladimir Kanazir (vladimir@kanazir.com)
  */

  $.fn.bootstrapTable.locales['sr-Latn-RS'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Molim sačekaj';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " redova po strani";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Prikazano " + pageFrom + ". - " + pageTo + ". od ukupnog broja redova " + totalRows + " (filtrirano od " + totalNotFiltered + ")";
      }

      return "Prikazano " + pageFrom + ". - " + pageTo + ". od ukupnog broja redova " + totalRows;
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'prethodna strana';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "na stranu " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'sledeća strana';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Prikazano " + totalRows + " redova";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Obriši pretragu';
    },
    formatSearch: function formatSearch() {
      return 'Pronađi';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nije pronađen ni jedan podatak';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Prikaži/sakrij paginaciju';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Prikaži paginaciju';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Sakrij paginaciju';
    },
    formatRefresh: function formatRefresh() {
      return 'Osveži';
    },
    formatToggle: function formatToggle() {
      return 'Promeni prikaz';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Prikaži kartice';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Sakrij kartice';
    },
    formatColumns: function formatColumns() {
      return 'Kolone';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Prikaži/sakrij sve';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Ceo ekran';
    },
    formatAllRows: function formatAllRows() {
      return 'Sve';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatsko osvežavanje';
    },
    formatExport: function formatExport() {
      return 'Izvezi podatke';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Idi';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Napredna pretraga';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Zatvori';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Latn-RS']);

}));
