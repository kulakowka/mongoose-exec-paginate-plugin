# mongoose-exec-paginate-plugin

Mongoose plugin for pagination with offset.

```javascript
const execPaginate = require('mongoose-exec-paginate-plugin')
const options = {
  limit: 3     // default offset
}
schema.plugin(execPaginate, )

const query = {
  limit: 10,    // override limit only for this query
  offset: 10
}

Item
  .find()
  .select('name')
  .sort('-createdAt')
  .execPaginate(query)
```

```json
{
  "data": [
    {
      "_id": "585ae60d8fa6a4767f36c223",
      "name": "Item 1"
    }
  ],
  "offset": 20
}
```
