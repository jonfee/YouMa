/*
 *   初始化商品信息
 */
const products = [{
        "Id": 1001, //商品ID
        "Name": "特宝儿（topbright）趣味滑翔车 小孩益智玩具 男孩轨道车儿童玩具", //名称
        "CategoryId": "1", //所属分类ID
        "Picture": "/static/imgs/products/yizhi/1.png", //商品展示图
        "Price": 59.8, //销售价
        "OriginalPrice": 99.8, //原价
        "Inventory": 99, //库存
        "SalesVolume": 21, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3295/188/5567358529/433160/888d75db/58749371N7998fc03.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3820/254/3064115551/216467/f5655125/58749373N811e798e.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3151/196/5459419605/454522/e680fb94/58749375N77ad406c.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t4060/179/1367124149/447993/df4a78dc/58749376Nbb48f3d2.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3292/198/5459841194/289114/6978aa68/58749377N018ff137.jpg'/>
            </p>
        `, //商品详情/描述
        // "Description": '<p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/1629358780/TB2z0_rzrlmpuFjSZFlXXbdQXXa_!!1629358780.jpg" class="img-ks-lazyload"></p> <p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/1629358780/TB2siwygR0kpuFjy1zdXXXuUVXa_!!1629358780.jpg" class="img-ks-lazyload"></p> <p>&nbsp;</p> <p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/1629358780/TB2w4_AghtmpuFjSZFqXXbHFpXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/1629358780/TB25InEgbBnpuFjSZFGXXX51pXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/1629358780/TB2a227gbxmpuFjSZJiXXXauVXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB27xLTgd0opuFjSZFxXXaDNVXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB2JqD0gblmpuFjSZFlXXbdQXXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/1629358780/TB2OKY1ghhmpuFjSZFyXXcLdFXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB21GD6gmFmpuFjSZFrXXayOXXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/1629358780/TB2A5yKa_cCL1FjSZFPXXXZgpXa_!!1629358780.jpg" class="img-ks-lazyload"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB2HaCufgNlpuFjy0FfXXX3CpXa_!!1629358780.jpg" class="img-ks-lazyload"></p> <p><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/1629358780/TB2Tr1.pCtkpuFjy0FhXXXQzFXa_!!1629358780.jpg" class="img-ks-lazyload"></p>', //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 1002, //商品ID
        "Name": "九连环益智玩具解环解扣智力扣 孔明锁鲁班锁解锁儿童套装礼物收纳箱装礼盒装 九连环18件套", //名称
        "CategoryId": "1", //所属分类ID
        "Picture": "/static/imgs/products/yizhi/2.png", //商品展示图
        "Price": 30.66, //销售价
        "OriginalPrice": 32.6, //原价
        "Inventory": 110, //库存
        "SalesVolume": 11, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/sku/jfs/t3307/101/5900884719/409970/896aef0e/589893f1N050db7aa.jpg'/>
            <img src='https://img30.360buyimg.com/sku/jfs/t4003/25/1793430604/292630/d3fa8ed3/589893f4N4b358576.jpg'/>
            <img src='https://img30.360buyimg.com/sku/jfs/t3274/72/5973775638/429510/c2055377/589893fbNc1db2fab.jpg'/>
            <img src='https://img30.360buyimg.com/sku/jfs/t3250/294/6023909682/659628/35f956f5/58989412N1748bf44.jpg'/>
            <img src='https://img30.360buyimg.com/sku/jfs/t4006/81/1794631008/884301/300e988e/5898940cN3b140a98.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 1003, //商品ID
        "Name": "澳贝（AUBY） 益智玩具 乖乖小鸭 运动爬行婴幼儿童早教启智声光玩具 6-12个月", //名称
        "CategoryId": "1", //所属分类ID
        "Picture": "/static/imgs/products/yizhi/3.png", //商品展示图
        "Price": 69, //销售价
        "OriginalPrice": 79, //原价
        "Inventory": 183, //库存
        "SalesVolume": 21, //销量
        "Description": `
            <p>
            <img src='https://img13.360buyimg.com/cms/jfs/t3751/324/2102635610/98567/c274c060/583e7a2aNb3cc0f73.jpg'/>
            <img src='https://img14.360buyimg.com/cms/jfs/t3496/146/2063798590/88948/98c3871d/583e7a2aN77ba7bd0.jpg'/>
            <img src='https://img14.360buyimg.com/cms/jfs/t3694/199/2080969616/56185/ed2c75d8/583e7a2bN969500ed.jpg'/>
            <img src='https://img12.360buyimg.com/cms/jfs/t3799/220/2014848731/52544/8f723d43/583e7a2bNfba7d825.jpg'/>
            <img src='https://img12.360buyimg.com/cms/jfs/t3634/71/2122640719/69684/4b1555ac/583e7a2bN6ac96e62.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": false //是否推荐
    },
    {
        "Id": 1004, //商品ID
        "Name": "费雪 Fisher-Price 早教益智玩具 欢乐成长之脚踏钢琴健身器W2621", //名称
        "CategoryId": "1", //所属分类ID
        "Picture": "/static/imgs/products/yizhi/4.png", //商品展示图
        "Price": 319.8, //销售价
        "OriginalPrice": 329, //原价
        "Inventory": 999, //库存
        "SalesVolume": 1, //销量
        "Description": `
            <p>
            <img src='https://img12.360buyimg.com/cms/jfs/t3094/362/2547532487/296005/ac98b28c/57e25fd2N006a3b69.jpg'/>
            <img src='https://img13.360buyimg.com/cms/jfs/t3292/107/2484254705/211989/150bb898/57e25fd2Na094c49d.jpg'/>
            <img src='https://img13.360buyimg.com/cms/jfs/t3292/107/2484254705/211989/150bb898/57e25fd2Na094c49d.jpg'/>
            <img src='https://img10.360buyimg.com/cms/jfs/t3115/175/2541350686/266284/e9a058ae/57e25fd3Nb752da47.jpg'/>
            <img src='https://img10.360buyimg.com/cms/jfs/t3058/156/2704850042/188430/84d5aa16/57e4dd25N30e568fa.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 1005, //商品ID
        "Name": "澳贝（AUBY） 益智玩具 动感驾驶室 婴幼儿童早教启智音乐多功能模拟游戏", //名称
        "CategoryId": "1", //所属分类ID
        "Picture": "/static/imgs/products/yizhi/5.png", //商品展示图
        "Price": 99.8, //销售价
        "OriginalPrice": 132.6, //原价
        "Inventory": 999, //库存
        "SalesVolume": 33, //销量
        "Description": `
            <p>
            <img src='https://img11.360buyimg.com/cms/jfs/t3088/291/1950024589/92531/f04fdba0/57d7ab40N94445056.jpg'/>
            <img src='https://img10.360buyimg.com/cms/jfs/t3151/182/1944935762/89259/66ba1ff9/57d7ab41N4392e490.jpg'/>
            <img src='https://img13.360buyimg.com/cms/jfs/t3001/6/2356390395/89098/848ef922/57d7ab41N77724888.jpg'/>
            <img src='https://img14.360buyimg.com/cms/jfs/t3280/202/1982102590/99601/a6d8d7a/57d7ab42N74ce2ca6.jpg'/>
            <img src='https://img12.360buyimg.com/cms/jfs/t3244/221/1960096835/36441/73621137/57d7ab43N4a410db3.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 1006, //商品ID
        "Name": "澳贝（AUBY） 益智玩具 学习遥控器 启智早教婴幼儿童中英双语认字玩具", //名称
        "CategoryId": 1, //所属分类ID
        "Picture": "/static/imgs/products/yizhi/6.png", //商品展示图
        "Price": 35.9, //销售价
        "OriginalPrice": 39.9, //原价
        "Inventory": 86, //库存
        "SalesVolume": 11, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/jgsq-productsoa/g16/M00/0B/0F/rBEbRVN7PFwIAAAAAACqS-PuTpgAACO8wNuotQAAKpj491.jpg'/>
            <img src='https://img30.360buyimg.com/jgsq-productsoa/g16/M00/0B/0F/rBEbRlN7PH8IAAAAAADTQJlHzGAAACO8wO5ZCEAANNY816.jpg'/>
            <img src='https://img30.360buyimg.com/jgsq-productsoa/g16/M00/0B/0F/rBEbRlN7PH8IAAAAAADTQJlHzGAAACO8wO5ZCEAANNY816.jpg'/>
            <img src='https://img30.360buyimg.com/jgsq-productsoa/g16/M00/0B/0F/rBEbRlN7PIgIAAAAAADCfkmH-zIAACO8wPDZlEAAMKW716.jpg'/>
            <img src='https://img30.360buyimg.com/jgsq-productsoa/g16/M00/0B/0F/rBEbRlN7PJIIAAAAAACxrDzd4G4AACO8wPS7ogAALHE472.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 1007, //商品ID
        "Name": "费雪 益智玩具 彩虹套圈 Rock-A-Stack(ClosedBox) N8248", //名称
        "CategoryId": 1, //所属分类ID
        "Picture": "/static/imgs/products/yizhi/7.png", //商品展示图
        "Price": 78, //销售价
        "OriginalPrice": 110, //原价
        "Inventory": 999, //库存
        "SalesVolume": 31, //销量
        "Description": `
            <p>
            <img src='https://img14.360buyimg.com/cms/jfs/t2803/17/4270057873/99580/42958564/57b3d4e9Naf4329a4.jpg'/>
            <img src='https://img10.360buyimg.com/cms/jfs/t2593/178/4321604848/83452/2921bc98/57b3d4e9N5fb950a9.jpg'/>
            <img src='https://img10.360buyimg.com/cms/jfs/t2593/178/4321604848/83452/2921bc98/57b3d4e9N5fb950a9.jpg'/>
            <img src='https://img14.360buyimg.com/cms/jfs/t2971/96/2567220828/107881/89a1aab1/57b3d4eaN03dec4fc.jpg'/>
            <img src='https://img14.360buyimg.com/cms/jfs/t2971/96/2567220828/107881/89a1aab1/57b3d4eaN03dec4fc.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": false //是否推荐
    },
    {
        "Id": 1008, //商品ID
        "Name": "汇乐808 EQ摇摆大黄鸭 婴幼儿童电动卡通音乐万向益智动物玩具", //名称
        "CategoryId": 1, //所属分类ID
        "Picture": "/static/imgs/products/yizhi/8.png", //商品展示图
        "Price": 49.8, //销售价
        "OriginalPrice": 68.9, //原价
        "Inventory": 99, //库存
        "SalesVolume": 22, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3247/50/1021776357/274034/a08b39cc/57c5529aNb9d6b1f6.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3148/260/1064849626/245620/baebcbcd/57c5529bN64ba549c.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3148/274/1080891662/211064/a1c0b112/57c5529bNd377e98c.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3247/50/1021776357/274034/a08b39cc/57c5529aNb9d6b1f6.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3148/260/1064849626/245620/baebcbcd/57c5529bN64ba549c.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 1009, //商品ID
        "Name": "费雪（Fisher Price）益智玩具声光安抚海马DGH82-蓝色", //名称
        "CategoryId": 1, //所属分类ID
        "Picture": "/static/imgs/products/yizhi/9.png", //商品展示图
        "Price": 79.8, //销售价
        "OriginalPrice": 88, //原价
        "Inventory": 130, //库存
        "SalesVolume": 11, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3214/286/9217890519/161446/89f03a43/58d1d8bfN76c18351.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t4243/21/2652581876/101111/e11d65e0/58d476f9N2573d00e.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t4534/180/568850923/263615/8d9bc344/58d1d8beNba733a7c.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t4456/180/562912771/155063/9551d2ef/58d1d8bfN1b3fac33.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t4456/180/562912771/155063/9551d2ef/58d1d8bfN1b3fac33.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": false //是否推荐
    },
    {
        "Id": 10010, //商品ID
        "Name": "京东超市特宝儿海绵宝宝工具台拆装儿童玩具3-6岁小孩玩具益智男孩玩具儿童礼物", //名称
        "CategoryId": 1, //所属分类ID
        "Picture": "/static/imgs/products/yizhi/10.png", //商品展示图
        "Price": 89.8, //销售价
        "OriginalPrice": 98.8, //原价
        "Inventory": 999, //库存
        "SalesVolume": 41, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3016/155/2072111614/404378/3afedcf5/57d250b5N542c3c32.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3178/315/1682706532/263118/26a613cf/57d250b5Nce35fe04.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3067/189/1785137541/246123/b1e964f1/57d250b6N90d70ded.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3250/363/1675683570/266538/250f5b38/57d250b7N6233aa57.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3244/81/1717557752/271460/c8ac0be/57d250b8N0c30e032.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10011, //商品ID
        "Name": "我是商品名称11", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/p11.jpg", //商品展示图
        "Price": 99.8, //销售价
        "OriginalPrice": 110, //原价
        "Inventory": 99, //库存
        "SalesVolume": 21, //销量
        "Description": "", //商品详情/描述
        "IsRecommand": false //是否推荐
    },
    {
        "Id": 10012, //商品ID
        "Name": "我是商品名称12", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/p12.jpg", //商品展示图
        "Price": 99.8, //销售价
        "OriginalPrice": 110, //原价
        "Inventory": 99, //库存
        "SalesVolume": 21, //销量
        "Description": "", //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10013, //商品ID
        "Name": "我是商品名称13", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/p13.jpg", //商品展示图
        "Price": 99.8, //销售价
        "OriginalPrice": 110, //原价
        "Inventory": 99, //库存
        "SalesVolume": 21, //销量
        "Description": "", //商品详情/描述
        "IsRecommand": false //是否推荐
    },
    {
        "Id": 10014, //商品ID
        "Name": "我是商品名称14", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/p14.jpg", //商品展示图
        "Price": 99.8, //销售价
        "OriginalPrice": 110, //原价
        "Inventory": 99, //库存
        "SalesVolume": 21, //销量
        "Description": "", //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10015, //商品ID
        "Name": "我是商品名称15", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/p15.png", //商品展示图
        "Price": 99.8, //销售价
        "OriginalPrice": 110, //原价
        "Inventory": 99, //库存
        "SalesVolume": 21, //销量
        "Description": "", //商品详情/描述
        "IsRecommand": true //是否推荐
    }
]

export default products;