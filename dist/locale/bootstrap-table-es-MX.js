(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
   * Author: Felix Vera (felix.vera@gmail.com)
   * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
   * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
   */

  $.fn.bootstrapTable.locales['es-MX'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, espere por favor';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registros por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando " + pageFrom + " a " + pageTo + " de " + totalRows + " filas (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Mostrando " + pageFrom + " a " + pageTo + " de " + totalRows + " filas";
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
      return "Mostrando " + totalRows + " filas";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros que coincidan';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Mostrar/ocultar paginación';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Actualizar';
    },
    formatToggle: function formatToggle() {
      return 'Cambiar vista';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Pantalla completa';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX']);

}));
