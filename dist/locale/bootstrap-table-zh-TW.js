(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Chinese translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.bootstrapTable.locales['zh-TW'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return '正在努力地載入資料，請稍候';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\u6BCF\u9801\u986F\u793A " + pageNumber + " \u9805\u8A18\u9304";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u986F\u793A\u7B2C " + pageFrom + " \u5230\u7B2C " + pageTo + " \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 " + totalRows + " \u9805\u8A18\u9304\uFF08\u5F9E " + totalNotFiltered + " \u7E3D\u8A18\u9304\u4E2D\u904E\u6FFE\uFF09";
      }

      return "\u986F\u793A\u7B2C " + pageFrom + " \u5230\u7B2C " + pageTo + " \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 " + totalRows + " \u9805\u8A18\u9304";
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return '上一頁';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u7B2C" + page + "\u9801";
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return '下一頁';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u7E3D\u5171 " + totalRows + " \u9805\u8A18\u9304";
    },
    formatClearSearch: function formatClearSearch() {
      return '清空過濾';
    },
    formatSearch: function formatSearch() {
      return '搜尋';
    },
    formatNoMatches: function formatNoMatches() {
      return '沒有找到符合的結果';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return '隱藏/顯示分頁';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return '顯示分頁';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return '隱藏分頁';
    },
    formatRefresh: function formatRefresh() {
      return '重新整理';
    },
    formatToggle: function formatToggle() {
      return '切換';
    },
    formatToggleOn: function formatToggleOn() {
      return '顯示卡片視圖';
    },
    formatToggleOff: function formatToggleOff() {
      return '隱藏卡片視圖';
    },
    formatColumns: function formatColumns() {
      return '列';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return '切換所有';
    },
    formatFullscreen: function formatFullscreen() {
      return '全屏';
    },
    formatAllRows: function formatAllRows() {
      return '所有';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return '自動刷新';
    },
    formatExport: function formatExport() {
      return '導出數據';
    },
    formatJumpTo: function formatJumpTo() {
      return '跳轉';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return '高級搜尋';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return '關閉';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW']);

}));
