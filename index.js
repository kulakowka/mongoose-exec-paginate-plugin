module.exports = function execPaginatePlugin (schema, options) {
  schema.query.execPaginate = function (params = {}) {
    const skip = parseInt(params.skip) || 0
    const limit = parseInt(params.limit || options.limit) || 10
    const loadmore = !!params.loadmore

    return this
      .limit(limit)
      .skip(skip)
      .exec()
      .then(data => ({
        data,
        loadmore,
        skip: skip + limit
      }))
  }
}
