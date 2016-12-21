module.exports = function execPaginatePlugin (schema, options) {
  schema.query.execPaginate = function ({ limit, skip }) {
    skip = parseInt(skip) || 0
    limit = parseInt(limit || options.limit) || 10

    return this
      .limit(limit)
      .skip(skip)
      .exec()
      .then(data => ({
        data,
        skip: skip + limit
      }))
  }
}
