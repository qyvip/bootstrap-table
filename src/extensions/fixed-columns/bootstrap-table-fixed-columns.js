/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 *
 * @author M.J. <michael@qyvip.com>
 *
 * 修改增加左右定位
 */

$.extend($.fn.bootstrapTable.defaults, {
  leftFixedColumns: false,
  leftFixedNumber: 1,
  rightFixedColumns: false,
  rightFixedNumber: 1
})

$.BootstrapTable = class extends $.BootstrapTable {
  fitHeader(...args) {
    super.fitHeader(...args)

    // console.log('fitHeader')
    if (!this.options.leftFixedColumns && !this.options.rightFixedColumns) {
      return
    }

    if (this.$el.is(':hidden')) {
      return
    }

    this.$leftFixedWidth = 0
    this.$rightFixedWidth = 0

    this.initFixedColumns()

    this.$tableBody.off('scroll.fixed-columns')

    this.initFixedColumnsHeader()

    this.initFixedColumnsBody()
  }

  initBody(...args) {
    super.initBody(...args)

    // console.log('initBody', this.options, !this.options.leftFixedColumns && !this.options.rightFixedColumns)
    if (!this.options.leftFixedColumns && !this.options.rightFixedColumns) {
      return
    }

    if (this.options.showHeader && this.options.height) {
      return
    }
  }

  initFixedColumns() {
    // console.log('initFixedColumns', this)
    this.timeoutHeaderColumns_ = 0
    this.timeoutBodyColumns_ = 0
    this.$container.find('.fixed-table-header-columns').remove()
    this.$container.find('.fixed-table-body-columns').remove()
    if (this.options.leftFixedColumns) {
      // var leftWidth = this.getLeftFixedColumnsWidth()
      this.$leftFixedHeader = $(
        [
          '<div class="fixed-table-header-columns fixed-table-header-columns-left">',
          '<table>',
          '<thead></thead>',
          '</table>',
          '</div>'
        ].join('')
      )
      this.$leftFixedHeader.find('table').attr('class', this.$el.attr('class'))
      this.$leftFixedHeaderColumns = this.$leftFixedHeader.find('thead')

      this.$tableHeader.after(this.$leftFixedHeader)

      this.$leftFixedBody = $(
        [
          '<div class="fixed-table-body-columns fixed-table-body-columns-left">',
          '<table>',
          '<tbody></tbody>',
          '</table>',
          '</div>'
        ].join('')
      )

      this.$leftFixedBody.find('table').attr('class', this.$el.attr('class'))
      this.$leftFixedBodyColumns = this.$leftFixedBody.find('tbody')
      this.$tableBody.after(this.$leftFixedBody)
    }
    if (this.options.rightFixedColumns) {
      // var rightWidth = this.getRightFixedColumnsWidth()
      this.$rightFixedHeader = $(
        [
          '<div class="fixed-table-header-columns fixed-table-header-columns-right" style="z-index:100;background:#fff;">',
          '<table>',
          '<thead></thead>',
          '</table>',
          '</div>'
        ].join('')
      )

      this.$rightFixedHeader.find('table').attr('class', this.$el.attr('class'))
      this.$rightFixedHeaderColumns = this.$rightFixedHeader.find('thead')
      this.$tableHeader.after(this.$rightFixedHeader)

      this.$rightFixedBody = $(
        [
          '<div class="fixed-table-body-columns fixed-table-body-columns-right" style="z-index:100;background:#fff;">',
          '<table>',
          '<tbody></tbody>',
          '</table>',
          '</div>'
        ].join('')
      )

      this.$rightFixedBody.find('table').attr('class', this.$el.attr('class'))
      this.$rightFixedBodyColumns = this.$rightFixedBody.find('tbody')
      this.$tableBody.after(this.$rightFixedBody)
    }
  }

  initFixedColumnsHeader() {
    // console.log('initFixedColumnsHeader', this.$header, this.$tableHeader)
    var $tr = this.$header.find('tr:eq(0)').clone()
    var $ths = $tr.clone().find('th')

    // $tr.html('');
    // 左边列冻结
    if (this.options.leftFixedColumns) {
      var $newtr = $('<tr></tr>')
      $newtr.attr('data-index', $tr.attr('data-index'))
      $newtr.attr('data-uniqueid', $tr.attr('data-uniqueid'))

      for (var i = 0; i < this.options.leftFixedNumber; i++) {
        var $th = $ths.eq(i).clone()
        this.$leftFixedWidth += $th.width()
        $newtr.append($th)
      }
      // this.$leftFixedWidth += 1
      this.$leftFixedHeaderColumns.html('').append($newtr)
    }
    // $tr.html('');
    // 右边列冻结
    if (this.options.rightFixedColumns) {
      var $newtr2 = $('<tr></tr>')
      $newtr2.attr('data-index', $tr.attr('data-index'))
      $newtr2.attr('data-uniqueid', $tr.attr('data-uniqueid'))
      for (var j = 0; j < this.options.rightFixedNumber; j++) {
        var $th2 = $ths.eq($ths.length - this.options.rightFixedNumber + j).clone()
        this.$rightFixedWidth += $th2.width()
        $newtr2.append($th2)
      }
      this.$rightFixedHeaderColumns.html('').append($newtr2)
    }
  }

  initFixedColumnsBody() {
    const that = this
    // console.log('initFixedColumnsBody')

    this.$table = this.$tableBody.find('>table')

    /**
     * 左侧固定列
     */

    if (this.options.leftFixedColumns) {
      // console.log('leftFixedColumnsBody', this.$table.find('tr[data-index]'))
      this.$table.find('tr[data-index]').each(function () {
        var $tr = $(this).clone()
        var $tds = $tr.clone().find('td')

        $tr.html('')
        for (var i = 0; i < that.options.leftFixedNumber; i++) {
          // console.log('leftFixedColumnsBody-tds', i, that.options.leftFixedNumber, $tds, $tds.eq(i))
          $tr.append($tds.eq(i).clone())
        }
        that.$leftFixedBodyColumns.append($tr)
      })
    }

    /**
     * 右侧固定列
     */

    if (this.options.rightFixedColumns) {
      this.$table.find('tr[data-index]').each(function () {
        var $tr = $(this).clone()
        var $tds = $tr.clone().find('td')
        $tr.html('')
        for (var i = 0; i < that.options.rightFixedNumber; i++) {
          var indexTd = $tds.length - that.options.rightFixedNumber + i
          var oldTd = $tds.eq(indexTd)
          var fixTd = oldTd.clone()
          $tr.append(fixTd)
        }
        that.$rightFixedBodyColumns.append($tr)
      })
    }
  }

  resetView(...args) {
    super.resetView(...args)

    if (!this.options.leftFixedColumns && !this.options.rightFixedColumns) {
      return
    }

    clearTimeout(this.timeoutHeaderColumns_)
    this.timeoutHeaderColumns_ = setTimeout(
      $.proxy(this.resetViewHeaderColumns, this),
      this.$el.is(':hidden') ? 100 : 0
    )

    clearTimeout(this.timeoutBodyColumns_)
    this.timeoutBodyColumns_ = setTimeout($.proxy(this.resetViewBodyColumns, this), this.$el.is(':hidden') ? 100 : 0)
  }

  resetViewHeaderColumns() {
    var that = this

    if (that.options.leftFixedColumns) {
      this.$leftFixedHeader
        .css({
          width: this.$leftFixedWidth
        })
        .show()
    }
    if (that.options.rightFixedColumns) {
      this.$rightFixedHeader
        .css({
          width: this.$rightFixedWidth
        })
        .show()
    }
  }

  resetViewBodyColumns() {
    var that = this
    var top = this.$tableHeader.height()
    var height = this.$tableBody.height()

    if (that.options.leftFixedColumns) {
      if (!this.$body.find('> tr[data-index]').length) {
        this.$leftFixedBody.hide()
        return
      }
      if (!this.options.height) {
        top = this.$leftFixedHeader.height()
        height -= top
      }

      this.$leftFixedBody
        .css({
          width: this.$leftFixedWidth,
          height: height - 14,
          top: top
        })
        .show()

      this.$body.find('> tr').each(function (i) {
        that.$leftFixedBody.find('tbody tr:eq(' + i + ')').height($(this).height())
      })

      // // events
      this.$tableBody.on('scroll', function () {
        that.$leftFixedBody.find('table').css('top', -$(this).scrollTop())
      })
      this.$body
        .find('> tr[data-index]')
        .off('hover')
        .hover(
          function () {
            var index = $(this).data('index')
            that.$leftFixedBody.find('tr[data-index="' + index + '"]').addClass('hover')
          },
          function () {
            var index = $(this).data('index')
            that.$leftFixedBody.find('tr[data-index="' + index + '"]').removeClass('hover')
          }
        )
      this.$leftFixedBody
        .find('tr[data-index]')
        .off('hover')
        .hover(
          function () {
            var index = $(this).data('index')
            that.$body.find('tr[data-index="' + index + '"]').addClass('hover')
          },
          function () {
            var index = $(this).data('index')
            that.$body.find('> tr[data-index="' + index + '"]').removeClass('hover')
          }
        )
    }
    if (that.options.rightFixedColumns) {
      if (!this.$body.find('> tr[data-index]').length) {
        this.$rightFixedBody.hide()
        return
      }
      if (!this.options.height) {
        top = this.$rightFixedHeader.height()
        height -= top
      }

      this.$rightFixedBody
        .css({
          top: top,
          width: this.$rightFixedWidth,
          height: height - 14
        })
        .show()

      this.$body.find('> tr').each(function (i) {
        that.$rightFixedBody.find('tbody tr:eq(' + i + ')').height($(this).height())
      })

      // // events
      this.$tableBody.on('scroll', function () {
        that.$rightFixedBody.find('table').css('top', -$(this).scrollTop())
      })
      this.$body
        .find('> tr[data-index]')
        .off('hover')
        .hover(
          function () {
            var index = $(this).data('index')
            that.$rightFixedBody.find('tr[data-index="' + index + '"]').addClass('hover')
          },
          function () {
            var index = $(this).data('index')
            that.$rightFixedBody.find('tr[data-index="' + index + '"]').removeClass('hover')
          }
        )
      this.$rightFixedBody
        .find('tr[data-index]')
        .off('hover')
        .hover(
          function () {
            var index = $(this).data('index')
            that.$body.find('tr[data-index="' + index + '"]').addClass('hover')
          },
          function () {
            var index = $(this).data('index')
            that.$body.find('> tr[data-index="' + index + '"]').removeClass('hover')
          }
        )

      // console.log('this.$tableHeader', that.$tableHeader.find('thead th.bs-checkbox'))
      // console.log('this.$tableBody', this.$tableBody.find('tbody').find('.bs-checkbox'))

      that.$el.off('check-all.bs.table').on('check-all.bs.table', function (e, rowsAfter, rowsBefore) {
        // console.log('check-all.bs.table', e, rowsAfter, rowsBefore)
      })

      that.$leftFixedHeader
        .find('thead')
        .find('.bs-checkbox')
        .off('change', 'input[type="checkbox"]')
        .on('change', 'input[type="checkbox"]', function (e) {
          var thisObj = $(this)
          // console.log('leftFixedHeader', thisObj.prop('checked'), that)
          that.selectAllRow(thisObj.prop('checked'))
          if (thisObj.prop('checked')) {
            that.$el.bootstrapTable('checkAll')
          } else {
            that.$el.bootstrapTable('uncheckAll')
          }
        })

      that.$leftFixedBody
        .find('tbody')
        .find('.bs-checkbox input[type="checkbox"]')
        .off('change')
        .on('change', function (e) {
          var thisObj = $(e.target)
          var index = thisObj.data('index')
          // console.log('leftFixedBody', thisObj.prop('checked'), index)
          that.selectRow(index, thisObj.prop('checked'))
          if (thisObj.prop('checked')) {
            that.$el.bootstrapTable('check', index)
          } else {
            that.$el.bootstrapTable('uncheck', index)
          }
        })
    }
  }

  selectRow(rowIndex, flag) {
    if (flag) {
      this.$leftFixedBody.find('tbody tr[data-index="' + rowIndex + '"]').addClass('selected')
      this.$rightFixedBody.find('tbody tr[data-index="' + rowIndex + '"]').addClass('selected')
    } else {
      this.$leftFixedBody.find('tbody tr[data-index="' + rowIndex + '"]').removeClass('selected')
      this.$rightFixedBody.find('tbody tr[data-index="' + rowIndex + '"]').removeClass('selected')
    }
  }

  selectAllRow(flag) {
    this.$leftFixedBody
      .find('tbody tr')
      .find('.bs-checkbox input[type="checkbox"]')
      .prop('checked', flag)
    if (flag) {
      this.$leftFixedBody.find('tbody tr[data-index]').addClass('selected')
      this.$rightFixedBody.find('tbody tr[data-index]').addClass('selected')
    } else {
      this.$leftFixedBody.find('tbody tr[data-index]').removeClass('selected')
      this.$rightFixedBody.find('tbody tr[data-index]').removeClass('selected')
    }
  }
}
