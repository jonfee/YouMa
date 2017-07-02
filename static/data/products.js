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
        `,
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

    // 分类2

    {
        "Id": 10011, //商品ID
        "Name": "NP-FW50 相机充电电池（适用索尼微单/RX10/QX1）", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/1.png", //商品展示图
        "Price": 340, //销售价
        "OriginalPrice": 360, //原价
        "Inventory": 999, //库存
        "SalesVolume": 1, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/jgsq-productsoa/jfs/t349/16/1726605734/19533/8f3007f/5440c3d1Nc406f2d6.jpg'/>
            <img src='https://m.360buyimg.com/n1/jfs/t2290/107/1899897047/187517/9129c893/56e641abNa0ef1ec3.jpg!q70.jpg.webp'/>

            </p>
        `, //商品详情/描述
        "IsRecommand": false //是否推荐
    },
    {
        "Id": 10012, //商品ID
        "Name": "南孚(NANFU)AA-4B+数码型5号充电电池2400mAh镍氢4粒装附充电器/玩具车/血糖仪/挂钟/鼠标键盘电池", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/2.png", //商品展示图
        "Price": 22.8, //销售价
        "OriginalPrice": 36, //原价
        "Inventory": 999, //库存
        "SalesVolume": 31, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t2599/224/2724371987/99707/1353c47d/577093e6N69a51acc.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t2824/137/2661868746/180805/61ebba2b/577093e6N91ab9e3f.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3295/114/3001822313/343139/f18d1b42/57ea3490N81ddd43d.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3295/114/3001822313/343139/f18d1b42/57ea3490N81ddd43d.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t2839/244/2681123802/99007/c189bc08/577093e8Na125eaf1.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10013, //商品ID
        "Name": "公牛（BULL）GN-J710苹果数据线 USB充电器线 抗折断 适用苹果手机/ipad/MFI认证", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/3.png", //商品展示图
        "Price": 69, //销售价
        "OriginalPrice": 110, //原价
        "Inventory": 968, //库存
        "SalesVolume": 121, //销量
        "Description": `
            <p>
            <img src='https://img20.360buyimg.com/vc/jfs/t3832/96/1639524623/1251508/bf334d2f/58367a76N2d8ac0db.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": false //是否推荐
    },
    {
        "Id": 10014, //商品ID
        "Name": "小米（MI）7号电池 彩虹电池碱性 7号（10粒装）", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/4.png", //商品展示图
        "Price": 9.98, //销售价
        "OriginalPrice": 21, //原价
        "Inventory": 9999, //库存
        "SalesVolume": 1003, //销量
        "Description": `
            <p>
            <img src='https://img12.360buyimg.com/cms/jfs/t2590/142/353344331/106281/13f00ba4/570f0b24N1da4b783.jpg'/>
            <img src='https://img10.360buyimg.com/cms/jfs/t2629/144/361754019/138912/2ed8edbf/570f09e9N92b42d01.jpg'/>
            <img src='https://img12.360buyimg.com/cms/jfs/t1912/194/2639610287/106424/b7afb78f/570f99efN349ef16d.jpg'/>
            <img src='https://img13.360buyimg.com/cms/jfs/t2713/339/353194136/107726/607e8f70/570f09eaN08012da5.jpg'/>
            <img src='https://img12.360buyimg.com/cms/jfs/t1954/134/2584854573/160985/c2657c42/570f09eaNd1af94ff.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10015, //商品ID
        "Name": "埃普(UP) UP-1S 可折叠多功能支架（黑色）笔记本手机和iPad Pro支架 苹果小米笔记本散热器", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/5.png", //商品展示图
        "Price": 55.8, //销售价
        "OriginalPrice": 60.5, //原价
        "Inventory": 333, //库存
        "SalesVolume": 51, //销量
        "Description": `
            <p>
            <img src='https://img14.360buyimg.com/cms/jfs/t3085/97/2748807657/46174/b39721fa/57e4f949Nc4e478b9.jpg'/>
            <img src='https://img12.360buyimg.com/cms/jfs/t2137/305/2846114524/70259/4fd5c79a/56f4f3aeNab753b7c.jpg'/>
            <img src='https://img14.360buyimg.com/cms/jfs/t2653/290/524640973/44276/156784f0/571779d3Nd4e2b65f.jpg'/>
            <img src='https://img14.360buyimg.com/cms/jfs/t2587/244/505669860/39063/1f562089/571779deN20bdac98.jpg'/>
            <img src='https://img14.360buyimg.com/cms/jfs/t2620/149/519813786/39198/7d9358bb/57177a3dNbf6de370.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10016, //商品ID
        "Name": "MOYI 苹果手机u盘 iphone6外置存储卡内存扩展器16G/32G/64G/128G 白金-32G(升级版)", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/6.png", //商品展示图
        "Price": 228, //销售价
        "OriginalPrice": 300, //原价
        "Inventory": 333, //库存
        "SalesVolume": 11, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t2674/315/2021679662/97429/d874a790/575392beNcc057217.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t2980/266/290442735/73158/e7633e61/575392c1N4a5a5a1a.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t2962/229/274256449/60894/3cdefa05/575392c5Na5e35b00.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t2935/175/290727855/53017/37bade71/575392ccN7d8b7d08.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t2704/324/2049662218/83188/91b883ae/575392cfN938ceadb.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10017, //商品ID
        "Name": "XIMU 苹果无线鼠标 Mac鼠标笔记本电脑鼠标macbook无线光电鼠标 无线鼠标充电版-天使白", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/7.png", //商品展示图
        "Price": 98, //销售价
        "OriginalPrice": 118, //原价
        "Inventory": 652, //库存
        "SalesVolume": 81, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3790/91/1437700121/86203/96facbda/5824c079Nd65c7ca7.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3796/191/1417777716/62469/83c78a67/5824c079Nf3b5248f.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3433/275/1369198408/44763/605f4467/5824c079Ndd173776.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3580/200/1345729651/70153/5c749e0/5824c07aNd6cb1070.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3832/206/1152988793/54412/b873ebf5/5824c07aNa3281815.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10018, //商品ID
        "Name": "LS 蓝牙无线键盘 鼠标套装 苹果原装笔记本MacBook Air/Pro/iPad 有线 无线蓝牙键盘+鼠标套装", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/8.png", //商品展示图
        "Price": 218, //销售价
        "OriginalPrice": 280, //原价
        "Inventory": 633, //库存
        "SalesVolume": 121, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5341/121/963674618/106439/e1cb1083/5909bf00N2ccec1d7.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5431/148/971043918/161749/f55794d1/5909befdN8dc96589.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5461/244/969548985/192570/77d60d7f/5909bf01N55d8dbdc.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5527/362/902035837/148976/a365b80c/5908a80eN1a30bc7b.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t2677/64/2543478127/116143/b8648388/5768da9bN3ffdfe38.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10019, //商品ID
        "Name": "极米h1支架落地投影仪支架G1sG3P1P2极米Z4Xair微型投影机支架床头通用 硬管可伸缩落地投影仪支架-金属底", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/9.png", //商品展示图
        "Price": 168, //销售价
        "OriginalPrice": 208, //原价
        "Inventory": 560, //库存
        "SalesVolume": 41, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3043/65/1999027862/46842/dff3468b/57cfa79dN46cdfd74.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3043/65/1999027862/46842/dff3468b/57cfa79dN46cdfd74.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3262/75/1584054490/38203/ad298561/57cfa79eN71d4f5c9.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3262/75/1584054490/38203/ad298561/57cfa79eN71d4f5c9.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t3262/75/1584054490/38203/ad298561/57cfa79eN71d4f5c9.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10020, //商品ID
        "Name": "卡姆昂 USB小夜灯 LED电脑护眼灯泡 阅读灯 创意配件随身灯 小台灯 小台灯 白色", //名称
        "CategoryId": 2, //所属分类ID
        "Picture": "/static/imgs/products/smpj/10.png", //商品展示图
        "Price": 2.5, //销售价
        "OriginalPrice": 8.8, //原价
        "Inventory": 9999, //库存
        "SalesVolume": 1021, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/popWareDetail/jfs/t925/323/331198410/112794/4548e857/55224bcaN477b9e6a.jpg'/>
            <img src='https://img30.360buyimg.com/popWareDetail/jfs/t847/278/413142671/123528/dc094f2/55224bcbN0a588ab1.jpg'/>
            <img src='https://img30.360buyimg.com/popWareDetail/jfs/t910/66/415012286/91671/66db03b7/55224bcbNc000b3d5.jpg'/>
            <img src='https://img30.360buyimg.com/popWareDetail/jfs/t769/251/1165306194/449364/8201e4c5/55224bcdN5e673855.jpg'/>
            <img src='https://img30.360buyimg.com/popWareDetail/jfs/t856/243/414331288/188686/4cdbb895/55224bd0N377d0677.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },



    {
        "Id": 10021, //商品ID
        "Name": " 欧莱雅LOREAL女士复颜抗皱晚霜 复颜光学嫩肤抚痕精华乳30ML 3881", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/1.png", //商品展示图
        "Price": 99, //销售价
        "OriginalPrice": 199, //原价
        "Inventory": 383, //库存
        "SalesVolume": 421, //销量
        "Description": `
            <p>
            <img src='https://img20.360buyimg.com/vc/jfs/t2083/92/1502223045/144580/f1cf1f0e/56669337Nbdd5725b.gif'/>
            <img src='https://img20.360buyimg.com/vc/jfs/t2164/286/1681122944/256290/89fee308/5666933aN86d222b4.gif'/>
            <img src='https://img20.360buyimg.com/vc/jfs/t2515/113/795188850/213351/2e745ffa/5666933dN5b0144fc.gif'/>
            <img src='https://img20.360buyimg.com/vc/jfs/t2476/33/1602406262/37401/abe43ab2/5666932bN2ef0f78b.jpg'/>
            <img src='https://img20.360buyimg.com/vc/jfs/t2329/15/1595548162/29377/19e318a5/5666932eNef824ad4.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10022, //商品ID
        "Name": "Lancome兰蔻水分缘舒缓面霜补水保湿系列 兰蔻小黑瓶修复抗老系列 水份缘保湿日霜50ml", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/2.png", //商品展示图
        "Price": 420, //销售价
        "OriginalPrice": 600, //原价
        "Inventory": 333, //库存
        "SalesVolume": 31, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5428/57/1055293255/41518/56150b62/590aff91N37370139.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5299/171/1152112882/32147/2c6ed4f9/590c5644N50791035.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5206/327/1155716321/26615/a794af14/590c5640Nd6676fa2.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5197/302/1177500883/26604/dd503d35/590c5643N7963a59d.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5122/213/1141013019/26277/420a6a7b/590c563eN22c3abbc.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10023, //商品ID
        "Name": "Lancome兰蔻水分缘舒缓面霜补水保湿系列 兰蔻小黑瓶修复抗老系列 小黑瓶精华肌底液30ml", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/3.png", //商品展示图
        "Price": 589, //销售价
        "OriginalPrice": 689, //原价
        "Inventory": 666, //库存
        "SalesVolume": 121, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t5422/348/1161219710/41273/b115f2ba/590c5644N73fc61d3.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t4498/305/4301550252/55471/32ff8c5d/590c5644N92ef6082.jpg'/>
            <img src=''/>
            <img src=''/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10024, //商品ID
        "Name": "Lancome兰蔻套装组合/臻白化妆品套装护肤旅行套装补水女", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/4.png", //商品展示图
        "Price": 218, //销售价
        "OriginalPrice": 320, //原价
        "Inventory": 500, //库存
        "SalesVolume": 68, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t247/253/1117100139/47474/2269f65/53f69fdfN2170931e.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t265/218/1112382090/46185/5ee14bd8/53f69fe1N9c47284a.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t259/337/1131468650/45820/a0fee8e9/53f69fe3Nbf7f6e36.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t259/337/1131468650/45820/a0fee8e9/53f69fe3Nbf7f6e36.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t256/348/1138936246/48179/86a2d56a/53f69fe6N6f4687c7.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10025, //商品ID
        "Name": "香奈儿CHANEL 防晒妆前乳隔离霜SPF40（原SPF35)/PA 30 10#玫瑰色新款", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/5.png", //商品展示图
        "Price": 419, //销售价
        "OriginalPrice": 518, //原价
        "Inventory": 666, //库存
        "SalesVolume": 231, //销量
        "Description": `
            <p>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t559/330/386523997/15818/cc3df52c/5463059cN94a1ebb9.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t658/213/397733575/25841/2dd18ee3/546305a0N9f804182.jpg'/>
            <img src='https://img10.360buyimg.com/popWareDetail/jfs/t526/347/127661819/20964/e98cbb5d/546305b2Nb233ff0c.jpg'/>
            <img src=''/>
            <img src=''/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10026, //商品ID
        "Name": "Chanel/香奈儿清新粉色黄色邂逅女士淡香水持久50ML 绿邂逅100ML", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/6.png", //商品展示图
        "Price": 870, //销售价
        "OriginalPrice": 900, //原价
        "Inventory": 393, //库存
        "SalesVolume": 21, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t1783/228/1760235598/251375/42d1aeb1/560f7d57N2b325986.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t3079/156/6164945750/384370/271e4e6/589e8136N4301a185.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t3079/156/6164945750/384370/271e4e6/589e8136N4301a185.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t3079/156/6164945750/384370/271e4e6/589e8136N4301a185.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t4048/217/1999277766/277222/2db47ab8/589e8139Nec975db2.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10027, //商品ID
        "Name": "Chanel/香奈儿清新粉色黄色邂逅女士淡香水持久50ML 黄邂逅发香雾35ML", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/7.png", //商品展示图
        "Price": 345, //销售价
        "OriginalPrice": 444, //原价
        "Inventory": 689, //库存
        "SalesVolume": 151, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t4057/225/1984575830/374778/7ea96c85/589e813cNe27ac33b.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t4090/223/1971404459/329343/b8856a28/589e813dNe5b5f27d.jpg'/>
            <img src=''/>
            <img src=''/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10028, //商品ID
        "Name": "迈克.高仕Michael Kors新款小号锁头MK单肩斜跨时尚手提女包 亮粉色", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/8.png", //商品展示图
        "Price": 1499, //销售价
        "OriginalPrice": 1899, //原价
        "Inventory": 333, //库存
        "SalesVolume": 43, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t4633/23/2267987195/1069482/f2af2629/58ec9383N1c92bb73.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10029, //商品ID
        "Name": " 迈克.科尔斯Michael Kors纯皮 AVA系列手拎斜挎包 女包 橙色迷你", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/9.png", //商品展示图
        "Price": 1199, //销售价
        "OriginalPrice": 1699, //原价
        "Inventory": 999, //库存
        "SalesVolume": 168, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t3985/89/1653060662/63506/d37e5a29/58880387Nd362e8ed.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t3067/190/5779582421/39704/8897fe7c/58880389N1e145187.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t4036/38/1666426486/49832/7d559f1b/5888038aN8cea0f26.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t3124/32/5874617727/45204/c75a5ab0/5888038cNc8386a82.jpg'/>
            <img src='https://img30.360buyimg.com/popWaterMark/jfs/t4051/83/1661454975/35545/6be55abe/5888038cN970d0d7b.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10030, //商品ID
        "Name": "Issey Miyake 三宅一生女士六格手提包 BAO BAO手袋 米白色 AG053-40 (BB53/BB61)", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/10.png", //商品展示图
        "Price": 3380, //销售价
        "OriginalPrice": 3680, //原价
        "Inventory": 333, //库存
        "SalesVolume": 68, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/imgzone/jfs/t3037/118/781478022/34048/8c3d9ea5/57b29573Naf200121.jpg'/>
            <img src='https://img10.360buyimg.com/imgzone/jfs/t2869/22/4229054519/31425/13af5a56/57b29574N16f7408e.jpg'/>
            <img src='https://img30.360buyimg.com/imgzone/jfs/t2875/11/4293583090/21625/d64b9c08/57b29574Neabb1d54.jpg'/>
            <img src='https://img11.360buyimg.com/imgzone/jfs/t3097/189/354413721/37580/32e09f/57b29577Nffe930d8.jpg'/>
            <img src='https://img20.360buyimg.com/imgzone/jfs/t2770/194/4277900172/33393/4061ad2e/57b29577N30a59fee.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    },
    {
        "Id": 10031, //商品ID
        "Name": "BURBERRY 巴宝莉 女士The Ashby Canvas系列镉红色织物格纹拼皮革艾仕贝手袋 39457281", //名称
        "CategoryId": 3, //所属分类ID
        "Picture": "/static/imgs/products/gjpp/11.png", //商品展示图
        "Price": 4380, //销售价
        "OriginalPrice": 5680, //原价
        "Inventory": 666, //库存
        "SalesVolume": 6, //销量
        "Description": `
            <p>
            <img src='https://img30.360buyimg.com/sku/jfs/t5842/266/2449819379/368041/3fb5ea34/59311d30N244b0aa2.jpg'/>
            <img src='https://img30.360buyimg.com/sku/jfs/t5842/266/2449819379/368041/3fb5ea34/59311d30N244b0aa2.jpg'/>
            <img src='https://img30.360buyimg.com/sku/jfs/t5671/175/2454610490/396578/7e90793f/59311d30N2579a35f.jpg'/>
            <img src='https://img30.360buyimg.com/sku/jfs/t5953/15/1304988013/351028/646f21cc/59311d30Nb76ddf49.jpg'/>
            <img src='https://img30.360buyimg.com/sku/jfs/t5602/132/2439517650/403764/c706d8a0/59311d2bNe5ac97a0.jpg'/>
            </p>
        `, //商品详情/描述
        "IsRecommand": true //是否推荐
    }

]

export default products;