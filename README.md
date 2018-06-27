# jsonToSql
解决navicat导入json数据时遇到中文中带“/”出现“�?”乱码问题

修改utf8,GBK都没能解决问题。

最后解决方案，使用node把json转成sql,然后再导入到表。

问题解决
