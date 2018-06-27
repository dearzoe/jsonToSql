# jsonToSql
解决navicat导入json数据时遇到中文中带“/”出现“�?”乱码问题

修改utf8,GBK都没能解决问题。

最后解决方案，使用node把json转成sql,然后再导入到表。

```javascript
var fs = require('fs')
// var format = require('string-format')
// create write stream
var ofs = fs.createWriteStream('Shop.sql')
// read file
var ShopJson = JSON.parse(fs.readFileSync('./a.json'))
ShopJson.forEach(function (iFeature) {
  ofs.write(`INSERT INTO t_industry_shop(campaign_type, industry_shop_name, industry_shop_id, create_time) VALUES("${iFeature.campaign_type}","${iFeature.industry_shop_name}", "${iFeature.industry_shop_id}", "${iFeature.create_time}");\n`)
}, this)
console.log('Done!')
```

问题解决
