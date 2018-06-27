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
