module.exports = function execPaginatePlugin (schema, options) {
  schema.query.execPaginate = function (params = {}) {
    const skip = parseInt(params.skip) || 0
    const limit = parseInt(params.limit || options.limit) || 10
    const loadmore = typeof params.loadmore !== 'undefined' ? params.loadmore : true

    return this
      .limit(limit)
      .skip(skip)
      .exec()
      .then(data => ({
        data,
        loadmore: data.length && loadmore,
        skip: skip + limit
      }))
  }
}
