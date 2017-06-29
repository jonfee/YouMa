/*
*   初始化商品信息
*/
const products=[
    {
        "Id": 1001,              //商品ID
        "Name": "我是商品名称1",    //名称
        "CategoryId": "1",       //所属分类ID
        "Picture": "/static/imgs/products/p1.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": '<p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/1629358780/TB2z0_rzrlmpuFjSZFlXXbdQXXa_!!1629358780.jpg" class="img-ks-lazyload"></p> <p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/1629358780/TB2siwygR0kpuFjy1zdXXXuUVXa_!!1629358780.jpg" class="img-ks-lazyload"></p> <p>&nbsp;</p> <p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/1629358780/TB2w4_AghtmpuFjSZFqXXbHFpXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/1629358780/TB25InEgbBnpuFjSZFGXXX51pXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/1629358780/TB2a227gbxmpuFjSZJiXXXauVXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB27xLTgd0opuFjSZFxXXaDNVXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB2JqD0gblmpuFjSZFlXXbdQXXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/1629358780/TB2OKY1ghhmpuFjSZFyXXcLdFXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB21GD6gmFmpuFjSZFrXXayOXXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/1629358780/TB2A5yKa_cCL1FjSZFPXXXZgpXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB2HaCufgNlpuFjy0FfXXX3CpXa_!!1629358780.jpg" class="img-ks-lazyload"></p> <p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB2Tr1.pCtkpuFjy0FhXXXQzFXa_!!1629358780.jpg" class="img-ks-lazyload"></p>',        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 1002,              //商品ID
        "Name": "我是商品名称2",    //名称
        "CategoryId": "1",       //所属分类ID
        "Picture": "/static/imgs/products/p2.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 1003,              //商品ID
        "Name": "我是商品名称3",    //名称
        "CategoryId": "1",       //所属分类ID
        "Picture": "/static/imgs/products/p3.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": false         //是否推荐
    },
    {
        "Id": 1004,              //商品ID
        "Name": "我是商品名称4",    //名称
        "CategoryId": "1",       //所属分类ID
        "Picture": "/static/imgs/products/p4.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 1005,              //商品ID
        "Name": "我是商品名称5",    //名称
        "CategoryId": "1",       //所属分类ID
        "Picture": "/static/imgs/products/p5.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 1006,              //商品ID
        "Name": "我是商品名称6",    //名称
        "CategoryId": 1,       //所属分类ID
        "Picture": "/static/imgs/products/p6.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 1007,              //商品ID
        "Name": "我是商品名称7",    //名称
        "CategoryId": 1,       //所属分类ID
        "Picture": "/static/imgs/products/p7.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": false         //是否推荐
    },
    {
        "Id": 1008,              //商品ID
        "Name": "我是商品名称8",    //名称
        "CategoryId": 2,       //所属分类ID
        "Picture": "/static/imgs/products/p8.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 1009,              //商品ID
        "Name": "我是商品名称9",    //名称
        "CategoryId": 2,       //所属分类ID
        "Picture": "/static/imgs/products/p9.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": false         //是否推荐
    },
    {
        "Id": 10010,              //商品ID
        "Name": "我是商品名称10",    //名称
        "CategoryId": 2,       //所属分类ID
        "Picture": "/static/imgs/products/p10.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 10011,              //商品ID
        "Name": "我是商品名称11",    //名称
        "CategoryId": 2,       //所属分类ID
        "Picture": "/static/imgs/products/p11.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": false         //是否推荐
    },
    {
        "Id": 10012,              //商品ID
        "Name": "我是商品名称12",    //名称
        "CategoryId": 2,       //所属分类ID
        "Picture": "/static/imgs/products/p12.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 10013,              //商品ID
        "Name": "我是商品名称13",    //名称
        "CategoryId": 3,       //所属分类ID
        "Picture": "/static/imgs/products/p13.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": false         //是否推荐
    },
    {
        "Id": 10014,              //商品ID
        "Name": "我是商品名称14",    //名称
        "CategoryId": 3,       //所属分类ID
        "Picture": "/static/imgs/products/p14.jpg",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    },
    {
        "Id": 10015,              //商品ID
        "Name": "我是商品名称15",    //名称
        "CategoryId": 3,       //所属分类ID
        "Picture": "/static/imgs/products/p15.png",           //商品展示图
        "Price": 99.8,           //销售价
        "OriginalPrice": 110,    //原价
        "Inventory": 99,         //库存
        "SalesVolume": 21,       //销量
        "Description": "",        //商品详情/描述
        "IsRecommand": true         //是否推荐
    }
]

export default products;
