(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Brazilian Portuguese Translation
   * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
   * Update: João Mello<jmello@hotmail.com.br>
   * Update: Leandro Felizari<lfelizari@gmail.com>
   */

  $.fn.bootstrapTable.locales['pt-BR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Carregando, aguarde';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registros por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Exibindo " + pageFrom + " at\xE9 " + pageTo + " de " + totalRows + " linhas (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Exibindo " + pageFrom + " at\xE9 " + pageTo + " de " + totalRows + " linhas";
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'página anterior';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "Para a p\xE1gina " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'próxima página';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Mostrando " + totalRows + " linhas";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Limpar Pasquisa';
    },
    formatSearch: function formatSearch() {
      return 'Pesquisar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenhum registro encontrado';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ocultar/Exibir paginação';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Mostrar Paginação';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Esconder Paginação';
    },
    formatRefresh: function formatRefresh() {
      return 'Recarregar';
    },
    formatToggle: function formatToggle() {
      return 'Alternar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Colunas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Tela cheia';
    },
    formatAllRows: function formatAllRows() {
      return 'Tudo';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Atualização Automática';
    },
    formatExport: function formatExport() {
      return 'Exportar dados';
    },
    formatJumpTo: function formatJumpTo() {
      return 'IR';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Pesquisa Avançada';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Fechar';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);

}));
