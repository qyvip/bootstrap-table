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

  $.fn.bootstrapTable.locales['zh-CN'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return '正在努力地加载数据中，请稍候';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\u6BCF\u9875\u663E\u793A " + pageNumber + " \u6761\u8BB0\u5F55";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u663E\u793A\u7B2C " + pageFrom + " \u5230\u7B2C " + pageTo + " \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 " + totalRows + " \u6761\u8BB0\u5F55\uFF08\u4ECE " + totalNotFiltered + " \u603B\u8BB0\u5F55\u4E2D\u8FC7\u6EE4\uFF09";
      }

      return "\u663E\u793A\u7B2C " + pageFrom + " \u5230\u7B2C " + pageTo + " \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 " + totalRows + " \u6761\u8BB0\u5F55";
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return '上一页';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u7B2C" + page + "\u9875";
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return '下一页';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u603B\u5171 " + totalRows + " \u6761\u8BB0\u5F55";
    },
    formatClearSearch: function formatClearSearch() {
      return '清空过滤';
    },
    formatSearch: function formatSearch() {
      return '搜索';
    },
    formatNoMatches: function formatNoMatches() {
      return '没有找到匹配的记录';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return '隐藏/显示分页';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return '显示分页';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return '隐藏分页';
    },
    formatRefresh: function formatRefresh() {
      return '刷新';
    },
    formatToggle: function formatToggle() {
      return '切换';
    },
    formatToggleOn: function formatToggleOn() {
      return '显示卡片视图';
    },
    formatToggleOff: function formatToggleOff() {
      return '隐藏卡片视图';
    },
    formatColumns: function formatColumns() {
      return '列';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return '切换所有';
    },
    formatFullscreen: function formatFullscreen() {
      return '全屏';
    },
    formatAllRows: function formatAllRows() {
      return '所有';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return '自动刷新';
    },
    formatExport: function formatExport() {
      return '导出数据';
    },
    formatJumpTo: function formatJumpTo() {
      return '跳转';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return '高级搜索';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return '关闭';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

}));
