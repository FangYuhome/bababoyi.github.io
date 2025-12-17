// 全局变量
let currentSection = 'home';
let currentChapter = 0;
let fontSize = 16;
let isDimBackground = false;
let selectedDishes = [];
let annotations = {};
let currentAnnotationParagraph = null;

// 菜品数据
const menuData = {
    daily: [
        { id: 1, name: '番茄牛腩', note: '上次做的超下饭✨', ingredients: ['牛腩', '番茄', '土豆', '洋葱'] },
        { id: 2, name: '糖醋排骨', note: '你的最爱酸甜口味', ingredients: ['排骨', '生抽', '老抽', '料酒', '糖'] },
        { id: 3, name: '麻婆豆腐', note: '下饭神器，每次都抢光', ingredients: ['豆腐', '肉末', '豆瓣酱', '花椒'] },
        { id: 4, name: '清蒸鲈鱼', note: '健康营养，味道鲜美', ingredients: ['鲈鱼', '葱', '姜', '生抽', '蒸鱼豉油'] },
        { id: 5, name: '宫保鸡丁', note: '甜辣口味，开胃下饭', ingredients: ['鸡胸肉', '花生', '干辣椒', '葱', '姜'] },
        { id: 6, name: '红烧肉', note: '肥而不腻，入口即化', ingredients: ['五花肉', '冰糖', '生抽', '老抽', '料酒'] },
        { id: 7, name: '鱼香肉丝', note: '川菜经典，酸甜辣平衡', ingredients: ['猪肉丝', '木耳', '胡萝卜', '青椒', '豆瓣酱'] },
        { id: 8, name: '地三鲜', note: '东北家常菜，营养丰富', ingredients: ['土豆', '茄子', '青椒', '大蒜'] },
        { id: 9, name: '回锅肉', note: '川菜灵魂，香辣下饭', ingredients: ['五花肉', '青椒', '洋葱', '豆瓣酱', '豆豉'] },
        { id: 10, name: '水煮鱼', note: '麻辣鲜香，超级下饭', ingredients: ['草鱼', '豆芽', '白菜', '辣椒', '花椒'] },
        { id: 11, name: '东坡肉', note: '江南名菜，软糯香甜', ingredients: ['五花肉', '黄酒', '冰糖', '生抽', '老抽'] },
        { id: 12, name: '梅菜扣肉', note: '客家经典，肥而不腻', ingredients: ['五花肉', '梅菜', '生抽', '老抽', '糖'] },
        { id: 13, name: '白切鸡', note: '粤菜经典，原汁原味', ingredients: ['三黄鸡', '葱', '姜', '料酒', '生抽'] },
        { id: 14, name: '蒸蛋羹', note: '嫩滑如丝，营养美味', ingredients: ['鸡蛋', '温水', '盐', '香油', '葱花'] },
        { id: 15, name: '青椒肉丝', note: '经典搭配，简单美味', ingredients: ['猪肉丝', '青椒', '胡萝卜', '蒜', '生抽'] },
        { id: 16, name: '可乐鸡翅', note: '甜辣可口，颜色诱人', ingredients: ['鸡翅', '可乐', '生抽', '老抽', '料酒'] },
        { id: 17, name: '蒜蓉粉丝蒸扇贝', note: '海鲜经典，鲜美无比', ingredients: ['扇贝', '粉丝', '大蒜', '生抽', '葱花'] },
        { id: 18, name: '酸辣土豆丝', note: '开胃小菜，酸辣爽脆', ingredients: ['土豆', '辣椒', '蒜', '醋', '盐'] },
        { id: 19, name: '红烧茄子', note: '下饭神器，软糯香甜', ingredients: ['茄子', '肉末', '蒜', '生抽', '糖'] },
        { id: 20, name: '芹菜炒肉', note: '清香爽脆，营养均衡', ingredients: ['猪肉', '芹菜', '胡萝卜', '蒜', '生抽'] },
        { id: 21, name: '糖醋里脊', note: '外酥内嫩，酸甜可口', ingredients: ['猪里脊', '醋', '糖', '生抽', '料酒'] },
        { id: 22, name: '干煸四季豆', note: '四川风味，干香下饭', ingredients: ['四季豆', '肉末', '干辣椒', '蒜', '芽菜'] },
        { id: 23, name: '蚝油生菜', note: '清淡爽口，简单快手', ingredients: ['生菜', '蚝油', '蒜', '生抽', '香油'] },
        { id: 24, name: '香煎豆腐', note: '外焦内嫩，豆香浓郁', ingredients: ['嫩豆腐', '生抽', '蒜', '葱', '油'] },
        { id: 25, name: '土豆炖牛腩', note: '经典搭配，营养丰富', ingredients: ['牛腩', '土豆', '胡萝卜', '洋葱', '生抽'] }
    ],
    creative: [
        { id: 26, name: '芝士焗饭', note: '尝试的新做法，希望你喜欢', ingredients: ['米饭', '芝士', '洋葱', '培根', '奶油'] },
        { id: 27, name: '泰式冬阴功汤', note: '异国风情，酸辣开胃', ingredients: ['虾', '香茅', '柠檬叶', '辣椒', '椰奶'] },
        { id: 28, name: '日式照烧鸡', note: '甜咸平衡，颜值很高', ingredients: ['鸡腿肉', '照烧酱', '白芝麻', '葱花'] },
        { id: 29, name: '韩式石锅拌饭', note: '营养均衡，色彩丰富', ingredients: ['米饭', '韩式辣酱', '菠菜', '豆芽', '牛肉丝'] },
        { id: 30, name: '意大利肉酱面', note: '西式经典，浓郁香甜', ingredients: ['意面', '牛肉末', '番茄', '洋葱', '罗勒'] },
        { id: 31, name: '墨西哥卷饼', note: '异域风情，辛辣开胃', ingredients: ['玉米饼', '牛肉', '生菜', '番茄', '芝士', '莎莎酱'] },
        { id: 32, name: '日式寿司卷', note: '精致美味，营养丰富', ingredients: ['寿司饭', '海苔', '三文鱼', '黄瓜', '牛油果'] },
        { id: 33, name: '法式红酒炖牛肉', note: '浪漫法式，醇香浓郁', ingredients: ['牛肉', '红酒', '洋葱', '胡萝卜', '百里香'] },
        { id: 34, name: '西班牙海鲜饭', note: '色彩缤纷，海鲜盛宴', ingredients: ['大米', '虾', '青口贝', '藏红花', '番茄', '青豆'] },
        { id: 35, name: '印度咖喱鸡', note: '香料丰富，异国风味', ingredients: ['鸡块', '咖喱粉', '椰奶', '洋葱', '土豆'] },
        { id: 36, name: '希腊烤羊排', note: '地中海风味，香草清新', ingredients: ['羊排', '柠檬', '橄榄油', '迷迭香', '大蒜'] },
        { id: 37, name: '越式春卷', note: '清新爽口，越南风味', ingredients: ['米纸', '虾仁', '生菜', '薄荷', '米粉'] },
        { id: 38, name: '德式烤猪肘', note: '巴伐利亚传统，外脆内嫩', ingredients: ['猪肘', '啤酒', '芥末', '酸菜', '土豆泥'] },
        { id: 39, name: '土耳其烤肉卷', note: '中东特色，香料丰富', ingredients: ['牛肉', '饼皮', '生菜', '番茄', '酸奶酱'] },
        { id: 40, name: '摩洛哥塔吉锅', note: '北非风情，慢炖美味', ingredients: ['鸡肉', '橄榄', '柠檬', '洋葱', '肉桂'] }
    ],
    dessert: [
        { id: 41, name: '提拉米苏', note: '意式经典，咖啡香浓', ingredients: ['马斯卡彭', '手指饼干', '咖啡', '可可粉'] },
        { id: 42, name: '芒果千层蛋糕', note: '清新香甜，层次丰富', ingredients: ['芒果', '淡奶油', '班戟皮', '糖'] },
        { id: 43, name: '巧克力熔岩蛋糕', note: '温热甜蜜，巧克力爆浆', ingredients: ['黑巧克力', '黄油', '鸡蛋', '面粉', '香草冰淇淋'] },
        { id: 44, name: '草莓芝士蛋糕', note: '酸甜平衡，口感绵密', ingredients: ['草莓', '奶油芝士', '饼干底', '明胶'] },
        { id: 45, name: '抹茶冰淇淋', note: '日式风味，清香怡人', ingredients: ['抹茶粉', '牛奶', '淡奶油', '蛋黄', '糖'] },
        { id: 46, name: '焦糖布丁', note: '法式经典，焦香甜美', ingredients: ['鸡蛋', '牛奶', '糖', '香草精'] },
        { id: 47, name: '蓝莓马芬', note: '美式经典，果香浓郁', ingredients: ['蓝莓', '面粉', '黄油', '鸡蛋', '泡打粉'] },
        { id: 48, name: '红豆沙汤圆', note: '中式传统，甜糯温暖', ingredients: ['红豆', '糯米粉', '冰糖', '桂花'] },
        { id: 49, name: '榴莲班戟', note: '热带风味，浓香独特', ingredients: ['榴莲', '淡奶油', '班戟皮', '糖'] },
        { id: 50, name: '杨枝甘露', note: '港式甜品，清爽解腻', ingredients: ['芒果', '西米', '椰浆', '柚子'] },
        { id: 51, name: '双皮奶', note: '广式经典，香滑可口', ingredients: ['牛奶', '蛋清', '糖', '香草精'] },
        { id: 52, name: '龟苓膏', note: '清热解毒，微苦回甘', ingredients: ['龟苓膏粉', '蜂蜜', '牛奶', '红豆'] },
        { id: 53, name: '红豆冰', note: '夏日清凉，甜蜜爽口', ingredients: ['红豆', '碎冰', '炼乳', '珍珠'] },
        { id: 54, name: '奶茶', note: '台式经典，香浓丝滑', ingredients: ['红茶', '牛奶', '珍珠', '糖', '冰块'] },
        { id: 55, name: '柠檬蜂蜜茶', note: '清新怡人，维C丰富', ingredients: ['柠檬', '蜂蜜', '温水', '薄荷'] },
        { id: 56, name: '百香果气泡水', note: '热带风情，酸甜清爽', ingredients: ['百香果', '苏打水', '蜂蜜', '薄荷', '柠檬'] },
        { id: 57, name: '抹茶拿铁', note: '日式风味，清香不腻', ingredients: ['抹茶粉', '牛奶', '糖', '浓缩咖啡'] },
        { id: 58, name: '水果沙拉', note: '健康清新，维生素丰富', ingredients: ['草莓', '蓝莓', '猕猴桃', '沙拉酱', '坚果'] },
        { id: 59, name: '巧克力草莓', note: '浪漫甜蜜，颜值很高', ingredients: ['草莓', '巧克力', '奶油', '坚果碎'] },
        { id: 60, name: '椰子西米露', note: '热带风味，清香爽滑', ingredients: ['西米', '椰浆', '芒果', '糖', '椰肉'] }
    ],
    wish: [
        { id: 61, name: '佛跳墙', note: '想为你做一次顶级料理', ingredients: ['鲍鱼', '海参', '鱼翅', '干贝', '花菇'] },
        { id: 62, name: '北京烤鸭', note: '虽然很难，但想让你尝尝', ingredients: ['整鸭', '面酱', '葱', '黄瓜', '薄饼'] },
        { id: 63, name: '分子料理', note: '听说很酷，想尝试一下', ingredients: ['特殊原料', '料理工具', '创意想法'] },
        { id: 64, name: '澳洲龙虾', note: '顶级海鲜，想让你尝鲜', ingredients: ['澳洲龙虾', '黄油', '蒜', '白葡萄酒', '香草'] },
        { id: 65, name: '神户牛排', note: '顶级牛肉，想为你献上', ingredients: ['神户牛肉', '黑胡椒', '黄油', '红酒', '时蔬'] },
        { id: 66, name: '松露意大利面', note: '顶级食材，奢华体验', ingredients: ['黑松露', '意面', '淡奶油', '帕玛森芝士', '黑胡椒'] },
        { id: 67, name: '鱼子酱', note: '奢华美味，想给你最好的', ingredients: ['鱼子酱', '薄饼', '酸奶油', '洋葱'] },
        { id: 68, name: '法式鹅肝', note: '顶级法式，想让你品尝', ingredients: ['鹅肝', '无花果', '面包', '波特酒'] },
        { id: 69, name: '和牛寿司', note: '日本顶级，想带你去尝', ingredients: ['和牛', '寿司米', '海苔', '山葵', '酱油'] },
        { id: 70, name: '黄金鲍鱼', note: '珍贵海鲜，想为你献上', ingredients: ['黄金鲍', '鲍汁', '西兰花', '枸杞'] }
    ]
};

// 故事数据 - 支持10万字以上的内容结构
const stories = [
    {
        id: 1,
        title: '概率论',
        content: `我是一个很“非”的人。
　　游戏永远不会出金，再来一瓶的活动里永远只能抽中“谢谢惠顾”，一个班里有奇数个同学，只有我没有同桌。

　　我好像习惯了这种倒霉，当倒霉的事情发生的时候我比较习惯轻轻叹气然后解决，当然大多数情况也会不解决。

　　“我的运气都去哪了？”我不止一次这样想过。

　　很多人都说过，运气是守恒的，当你经历了很大的好运之后就要小心倒霉的事情。

　　我自然是对这种说法嗤之以鼻，既然运气是守恒的，我积攒了这么久的霉运，也没有幸运的事情发生在我身上。

　　屋外寒风阵阵，清冷的房间与过年时热闹的场景形成了巨大的反差。

　　呆滞地重复着在手机上打开和关闭各种软件的动作，一整个假期因为术后恢复没有怎么熬夜的我却在今天失眠熬夜了。

　　摆弄着身上厚厚的睡衣，我因为暖气的功劳显得有些燥热。

　　有时候相遇真的是很奇妙的一件事，同样在北京时间23：34分，同样在熬夜，同样形单影只的灵魂。

　　我该怎么去形容这次相遇呢，如果是俗套的浪漫主义，我就是被丢进大海里的琴弓，你就是在草原里仰望星空的提琴。

　　不用俗套的句式去发言，通俗又现实主义的来讲，遇见你就是中彩票，是安德雷·柯尔莫哥洛夫（概率论之父）的爱抚。

　　那天晚上我做了一个梦，梦到柯尔莫哥洛夫给我说：“亲爱的孩子，我只能帮你到这里了，去追求你的美好爱情吧！当然，孩子，不要忘记我的贡献，没事给我上柱香吧！”
 
　　柯尔莫哥洛夫这个外国人抢了月老的饭碗，让我不禁深深感慨国内就业形势如此严峻的同时也依靠着外国月老的力量让我找到了身为迪拜公主之后的你（如果你给别人看，她们会觉得你好吊，记得遮住这个括号，也不要问我为什么用这么装杯的文笔，因为我是大作者）。

　　跨越我们之间的射线，找到端点，就是这个寂静的夜晚，我复制粘贴的w（'o'）w表情。

　　我一直信奉着：“人的运气是守恒的。”这句话有效的会让平时运气极差的我聊以慰藉，我觉得平时运气不错的人一定会在重要的事情上变得倒霉，我这种运气极差的人一定会遇到很幸运的事情。

　　当然了，我在嫉妒也好，自嘲也罢，这种运气的不平衡让我一直持有一个盲目的自信，让我觉得我一定会发生一件很幸运的事情。这种自信就像马桶的冲水键，每当我在运气方面感到不平衡，负面的情绪满溢，按一按冲水键，负面情绪就冲进了下水道。

　　直到时至今日，有人偷走了我的马桶冲水键，都怪你。`
    },
    {
        id: 2,
        title: '1,2,3...',
        content: `"1,2,3..."

　　"1...2...山。"

　　“念错啦宝贝，是1...2...3...”

　　“妈妈，1...2...山...是什么意思呀？”

　　“是数字。”

　　“是树枝......”婴儿啃着手指，似懂非懂。

　　......

　　清晨，哦不，番茄火锅的香气砸在我的脸上，我挣扎起身，来不及回想昨天晚上发生的事情，用胳膊支撑我的身体挣扎起身，面前的火锅翻滚沸腾，我的脑海里却蒙上了一层不真实感。

　　打开微信，看到熟悉又陌生的你，我的脑袋瞬间清醒，昨晚发生的一切用一种接近现实，至少在手机屏幕上触手可及的形态让我感到安心。

　　牛肉丸在火锅里翻滚了180°，用更加生冷的一面触摸更加热烈的火锅，忐忑瞬间占领了我脑海中的高地，隐隐的，我感到一丝若有若无的恐惧。

　　害怕变成火锅的恐惧。

　　我想人是不会平白无故变成火锅的。

　　但是人是会热脸贴冷屁股如火锅贴翻滚牛肉丸的......

　　这是第一天。我发了消息，你回了。

　　没有多余的话，就那样。婴儿还在啃手指，地板上有他划的横线，1，2，然后是歪歪的一道，他说那是 3。我看了眼他的横线，又看了眼手机，你又发了一条，我接着回，就是回应着。

　　第二天，醒来先看手机，有你的消息。婴儿醒了，坐在地板上，对着积木数 1，2，3，4。4 念得含糊，像含着东西，没人纠正他，他自己念得认真。

　　我一边看他数，一边回你的消息。消息内容很简单，就这样，一来一回，没断。

　　第三天，下雨了。

　　手机亮了，是你。说雨下得大，路不好走。我看了，回了句小心点。你秒回，说知道了。

　　雨一直下，消息一直有。

　　婴儿在屋里来回走，嘴里数着 1，2，3，5，6。跳过了 4，没人提醒，他自己也没发现，接着往下数。我和你，也是这样。不用刻意找话题，不用琢磨怎么回应才得体。想到什么发什么，看到了就回。很简单。

　　第四天，天放晴了。醒来时，手机屏幕是亮的，你的消息躺在上面。我回了，起身收拾。收拾完，看手机，你又回了。

　　婴儿拿着树枝在院子里划，1，2，3，然后是一串乱线，他说那是好多数字。我没管他，继续回你的消息。

　　第五天，没出太阳，也没下雨。联系没断。

　　第六天，第七天，第八天，都是这样。

　　起床，看手机，有你的消息。

　　睡前，发一条给你，你会回。没有例外。

　　婴儿数数字的样子没变，还是会念错，还是会跳过某些数，还是会把数字说成别的东西。树枝，石头，叶子，或者没意义的音节。

　　我们的联系，和数数字一样，1 之后是 2，2 之后是 3，然后一直往下。没有停过。

　　第九天，我忘了是第九天，不用记天数，只知道一直在联系。不用想为什么联系，不用纠结联系的意义。发消息，收消息，就是日常。

　　婴儿能数到 10 了，数到 10 之后，接着数 11，12，13。13 念成 “山三”，他自己笑了，然后接着数。

　　第十天，第十一天，第十二天，日子接着过。清晨起来，会看手机，有你的消息。中午吃饭，看手机，有你的消息。晚上睡前，发一条，你会回。不用多想，不用刻意。1 是开始，2 接着 1，3 接着 2。之后没有尽头。

　　婴儿数到 20 了，还是会把某些数字念错，念成乱七八糟的东西。但他没停，一直往下数。我和你的联系，也没停。没有轰轰烈烈的内容，就是简单的联系着。

　　今天，明天，后天，大后天。第一天，第二天，第三天，一直到后面的每一天。婴儿还在数数字，从 1 开始，一直往下，错了也没关系。我和你，也从 1，2，3 的开始，一直联系着，没断过。没有多余的东西，没有复杂的情绪。就只是联系着。从第一天到现在，再到以后。

　　无穷无尽。`
    },
    {
        id: 3,
        title: '往返票',
        content: `恍惚又模糊的摇晃着。

　　清晰又焦灼的痛感传入神经，在冰冷的寒风里更显得凌厉。

　　手里紧紧握着杭州到兰州的机票，因为剧烈运动导致有些湿热的手掌顷刻间就被寒凉的空气带走温度，导致机票变得异常湿冷。

　　强忍着身上的痛意，在冰凉的空气刺激下，我清晰的感知到自己身上因剧烈奔跑产生的裂口开始缓慢的滴血。

　　飞机马上就要起飞了，没有时间处理自己的伤口，紧了紧攥着机票的手，我强忍着痛意登机。

　　空气中散落着诡异的光影，粘稠又血腥，我双目无神，穿过一个又一个平移的肉块。

　　庆幸的是，清晰的痛意让我得以在混乱的光影中保持难得的清醒，如同一碗清澈冰凉的山泉，强迫我回到现实，慷慨的接受这份痛苦。

　　沉重的呼吸席卷着冰冷的空气涌入口鼻，进入胸腔，尽管上了飞机，伤口撕裂的痛苦依然伴随着我整整一天，从地铁到飞机，从飞机到火车，从火车到家里。

　　即使到了家里，这份撕裂的伤口也依旧存在着，我不知道它源自于哪里。

　　……
　　……

　　像是沉沉得睡了一觉，我再次来到了这个地方。

　　鲜活的氧气在我的胸膛翻涌，我贪婪的呼吸着弥足珍贵的新鲜空气。

　　和讯的撒落在身上的温暖。

　　光怪陆离的光斑，可能是灰尘扬起，散落成一粒一粒的光点。

　　我深吸一口气，不知道在期待着什么，只是隐隐觉得，这次回去，有一个重要的人在等待着我，在航线的终点，在时间线的未来。

　　上了飞机，安放好行李，看着窗外平移远行的景色，一股倦意涌上心头，我沉沉睡去。

　　至于飞向哪里，我并不在意。`
    },
    {
        id: 4,
        title: '平行之章 第一章 沉尘',
        content: `“黄沙遮天～漫～山～嘞！”

　　“荒坡野岭～黄～透～嘞！”

　　“攥紧怀里小娃～娃～嘞！”

　　“别让沙妖～把娃～勾～嘞！”

　　“铛！铛！铛！”

　　“黄沙遮天～漫～山～嘞！”

　　……

　　粗糙的沙砾打在我脸上，满天的黄沙迷得我睁不开眼。

　　黄天珺，金城。

　　漫天的黄沙时常弥漫在这座城市，勾勒出金色的城池画卷，金城因此得名。

　　背后的金城渐渐远去，迎面而来一阵狂风，席卷着粗糙的沙砾狂风骤雨般击打着我的飞剑，在炮弹一般的沙砾击打下，飞剑一个猛然趔趄，我急忙运转灵力稳固飞剑，心中一阵后怕，如果我没有筑基，以练气期的修为刚才肯定已经埋骨在这无边的荒漠之中。

　　“埋骨渊，埋骨渊，莫走远。”

　　“黄沙远，生死近，尸骨消。”

　　嘶哑的声音牵扯着我的声带，嘴里喃喃着每个金城小孩耳熟能详的儿歌。

　　向后望去，金城的轮廓已渐渐消失在我的视线，心头翻涌着说不上来的滋味，从小便修炼，十余载的光阴中一直追求的就是筑基，筑基再筑基，走出金城，走出埋骨渊的阻塞。如今追求实现，亲眼目睹着金城完全消失在自己的视线之中，心头却也涌上万般滋味。
　　飞剑终于在埋骨渊上空稳住了身形，灵力护罩将沙砾隔绝在外，耳边只剩呼啸的风声。我低头望去，脚下是万丈深渊，黑黢黢的裂缝像大地上一道永不愈合的伤疤，传说那是上古沙妖被诛灭时留下的尸坑。金城人说，埋骨渊会吃人，每年都有些练气期的愣头青不信邪，想驾着破飞剑闯出去，最后连块骨头都找不着。

　　“到了下沙郡，记得先给家里传讯。”


　　临走时阿爹的话还在耳边晃荡，他那张被风沙刻满皱纹的脸，想装得淡定，嘴角却直哆嗦。阿娘没说话，只是默默往我怀里塞了个乾坤袋，里面装着她连夜烙的三张沙葱饼，饼还热乎着，她的眼泪就滴我手背上，烫得我差点没握住飞剑。

　　飞剑又晃了一下，我急忙收敛心神。筑基初期的修为在这埋骨渊上仍显稚嫩，就像我虽年满十八，心却还是半大孩子的形状。下沙郡的珺立书院，是一家普普通通的修仙学府，却也是被我视若珍宝的修行机会。

　　“咱家娃，也能去下沙郡当仙人嘞！”

　　阿爸喝得满脸通红，嗓门大得能穿透沙尘暴。可如今我真要走了，他倒怂了，拉着我的手反反复复就那几句：“别逞强，别惹事，受了委屈就回家。”

　　回家？我苦笑一声，回头望去，金城的方向只剩一片混沌的黄，连轮廓都瞧不见了。从今往后，“家”这个字，就成了传讯符里的一道光，成了乾坤袋里的几张饼，成了午夜梦回时那一嘴的沙土味儿。飞剑载着我越飞越远，金城被埋骨渊吞没，而我被未知的前程吞没。

　　手里紧攥着珺立书院的录取玉简，温润的触感让我稍微安心。玉简上刻着“下沙郡”三个字，笔画流畅得像沙蛇游走的痕迹。听说那里没有漫天的黄沙，有碧绿的湖水，有不会割脸的柔风，有数不尽的修仙资源和机会。可那里也没有阿娘的沙葱饼，没有阿爹的糙话，没有街坊邻里扯着嗓子喊“娃儿回来吃饭嘞”的热闹。

　　埋骨渊的风忽然小了，脚下的黑暗深渊逐渐过渡到灰褐色的荒原，这意味着最凶险的地段已经过去。远处天边泛起一抹奇异的蓝，像洗过一样的干净，那是下沙郡的方向。我的心猛地跳快了几拍，既是逃出生天的庆幸，又是踏入新世界的惶恐。

　　十八岁筑基，离开金城，就像雏鹰被推出巢穴。

　　飞剑载着我，载着我的惶恐向着下沙郡，向着不得不成长为大人的明天，跌跌撞撞地飞去。`
    },
    {
        id: 5,
        title: 'none',
        content: `mermer`
    },
    {
        id: 6,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 7,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 8,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 9,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 10,
        title: 'mermer',
        content: `mermer`
    },
    // 扩展章节占位符 - 可在此处添加更多章节内容
    // 总容量支持100+章节，每章节平均1000-2000字，总计可容纳10万-20万字
    {
        id: 11,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 12,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 13,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 14,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 15,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 16,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 17,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 18,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 19,
        title: 'mermer',
        content: `mermer`
    },
    {
        id: 20,
        title: 'mermer',
        content: `mermer`
    },
    // 章节池已扩展至20章，总字数约1.5万字
    // 可继续扩展至100+章节，达到10万-20万字容量
    // 结构支持无限扩展，只需按相同格式添加新章节即可
];

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMenu();
    initStories();
    initInteractiveCharacters();
    showSection('home');
});



// 导航功能
function initNavigation() {
    // 移动端菜单切换
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // 导航链接点击
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            navigateToSection(targetId);
        });
    });
}

function navigateToSection(sectionId) {
    currentSection = sectionId;
    showSection(sectionId);
    
    // 更新导航状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // 关闭移动端菜单
    document.querySelector('.nav-links').classList.remove('active');
}

function showSection(sectionId) {
    // 隐藏所有section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 100);
    }
}

// 菜单功能
function initMenu() {
    // 初始化标签页
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });
    
    // 加载菜单内容
    loadMenuContent('daily');
    loadMenuContent('creative');
    loadMenuContent('dessert');
    loadMenuContent('wish');
    
    // 默认显示家常菜区
    switchTab('daily');
}

function switchTab(tabId) {
    // 更新标签按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    
    // 显示对应内容
    document.querySelectorAll('.menu-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

function loadMenuContent(category) {
    const container = document.getElementById(category);
    const dishes = menuData[category];
    
    let html = '<div class="menu-items">';
    dishes.forEach(dish => {
        // 处理ingredients，如果是字符串转换为数组
        let ingredients = [];
        if (typeof dish.ingredients === 'string') {
            ingredients = dish.ingredients.split(',').map(ing => ing.trim());
        } else {
            ingredients = dish.ingredients;
        }
        
        html += `
            <div class="menu-item" data-dish-id="${dish.id}">
                <div class="menu-item-header">
                    <div class="menu-item-info">
                        <h4>${dish.name}</h4>
                        <p class="menu-item-note">${dish.note}</p>
                    </div>
                    <button class="wish-btn" onclick="toggleDishSelection(${dish.id}, '${dish.name}')">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="menu-ingredients">
                    ${ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function toggleDishSelection(dishId, dishName) {
    const btn = document.querySelector(`[data-dish-id="${dishId}"] .wish-btn`);
    const index = selectedDishes.findIndex(dish => dish.id === dishId);
    
    if (index > -1) {
        // 移除选择
        selectedDishes.splice(index, 1);
        btn.classList.remove('selected');
        btn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        // 添加选择
        selectedDishes.push({ id: dishId, name: dishName });
        btn.classList.add('selected');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderList = document.getElementById('orderList');
    
    if (selectedDishes.length === 0) {
        orderList.innerHTML = '<p class="empty-message">还没选想吃的？快挑一个！</p>';
    } else {
        let html = '';
        selectedDishes.forEach(dish => {
            html += `
                <div class="order-item">
                    <span>${dish.name}</span>
                    <button class="remove-btn" onclick="removeDish(${dish.id})">取消</button>
                </div>
            `;
        });
        orderList.innerHTML = html;
    }
}

function removeDish(dishId) {
    const index = selectedDishes.findIndex(dish => dish.id === dishId);
    if (index > -1) {
        selectedDishes.splice(index, 1);
        
        // 更新按钮状态
        const btn = document.querySelector(`[data-dish-id="${dishId}"] .wish-btn`);
        btn.classList.remove('selected');
        btn.innerHTML = '<i class="far fa-heart"></i>';
        
        updateOrderSummary();
    }
}

// 故事功能
function initStories() {
    loadChapterList();
    loadStoryContent(1);
    updateChapterNavigation();
}

function loadChapterList() {
    const chapterList = document.getElementById('chapterList');
    let html = '';
    
    stories.forEach((story, index) => {
        const isActive = index === 0 ? 'active' : '';
        html += `
            <li class="chapter-item">
                <a href="#" class="chapter-link ${isActive}" onclick="loadStoryContent(${story.id}); return false;">
                    ${index + 1}. ${story.title}
                </a>
            </li>
        `;
    });
    
    chapterList.innerHTML = html;
}

function loadStoryContent(storyId) {
    const story = stories.find(s => s.id === storyId);
    if (!story) return;
    
    currentChapter = storyId;
    
    // 更新章节列表状态
    document.querySelectorAll('.chapter-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`.chapter-link:nth-child(${storyId})`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // 加载故事内容
    const storyText = document.getElementById('storyText');
    let html = '';
    
    // 将内容按段落分割
    const paragraphs = story.content.split('\n\n');
    paragraphs.forEach((paragraph, index) => {
        const paragraphId = `para-${storyId}-${index}`;
        html += `
            <div class="story-paragraph" id="${paragraphId}">
                ${paragraph}
                <button class="annotation-btn" onclick="openAnnotationModal('${paragraphId}')">
                    <i class="fas fa-comment"></i>
                </button>
                ${annotations[paragraphId] ? `<div class="story-annotation">${annotations[paragraphId].text}<button class="annotation-close" onclick="removeAnnotation('${paragraphId}')">×</button></div>` : ''}
            </div>
        `;
    });
    
    storyText.innerHTML = html;
    scrollToTop();
    updateChapterNavigation();
    updateCatMood();
}

// 字体大小控制
function adjustFontSize(delta) {
    fontSize += delta;
    fontSize = Math.max(12, Math.min(20, fontSize));
    
    const storyText = document.getElementById('storyText');
    if (!storyText) return;
    
    storyText.classList.remove('small-font', 'large-font');
    
    if (fontSize < 16) {
        storyText.classList.add('small-font');
        storyText.style.fontSize = fontSize + 'px';
    } else if (fontSize > 16) {
        storyText.classList.add('large-font');
        storyText.style.fontSize = fontSize + 'px';
    } else {
        storyText.style.fontSize = '16px';
    }
    
    // 保存字体大小到localStorage
    localStorage.setItem('storyFontSize', fontSize);
}

// 页面加载时恢复字体大小
document.addEventListener('DOMContentLoaded', function() {
    const savedFontSize = localStorage.getItem('storyFontSize');
    if (savedFontSize) {
        fontSize = parseInt(savedFontSize);
    }
});

// 背景透明度控制
function toggleBackground() {
    const storyText = document.getElementById('storyText');
    isDimBackground = !isDimBackground;
    storyText.classList.toggle('dim-bg');
    
    // 同时切换整个story-content的背景色
    const storyContent = document.querySelector('.story-content');
    if (isDimBackground) {
        storyText.style.background = 'var(--cream-light)';
        storyText.style.color = '#2d2d2d';
    } else {
        storyText.style.background = 'var(--cream-white)';
        storyText.style.color = 'var(--primary-text)';
    }
}

// 章节翻页功能
function loadPreviousChapter() {
    if (currentChapter > 1) {
        loadStoryContent(currentChapter - 1);
        showNotification('切换到上一章 📖');
    }
}

function loadNextChapter() {
    if (currentChapter < stories.length) {
        loadStoryContent(currentChapter + 1);
        showNotification('切换到下一章 📖');
    }
}

function updateChapterNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const chapterNumber = document.getElementById('chapterNumber');
    const totalChapters = document.getElementById('totalChapters');
    
    chapterNumber.textContent = currentChapter;
    totalChapters.textContent = stories.length;
    
    prevBtn.disabled = currentChapter === 1;
    nextBtn.disabled = currentChapter === stories.length;
}

// 小鸡推荐功能
function chickenRecommend(event) {
    // 阻止事件冒泡，防止触发点击攻击
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    const allDishes = [...menuData.daily, ...menuData.creative, ...menuData.dessert];
    const randomDish = allDishes[Math.floor(Math.random() * allDishes.length)];
    
    // 自动添加到点餐清单
    if (!selectedDishes.find(dish => dish.id === randomDish.id)) {
        selectedDishes.push({ id: randomDish.id, name: randomDish.name });
        
        // 更新按钮状态
        const btn = document.querySelector(`[data-dish-id="${randomDish.id}"] .wish-btn`);
        if (btn) {
            btn.classList.add('selected');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        }
        
        updateOrderSummary();
        updateChickenSpeech(`咕咕咕～推荐${randomDish.name}！🌽`);
    } else {
        updateChickenSpeech(`你已经选择了${randomDish.name}啦！😊`);
    }
    
    // 小鸡跳跃动画
    const chicken = document.querySelector('.chicken-body');
    chicken.style.animation = 'chickenJump 0.6s ease';
    setTimeout(() => {
        chicken.style.animation = '';
    }, 600);
}

function updateChickenSpeech(message) {
    const speech = document.getElementById('chickenSpeech');
    speech.textContent = message;
    speech.style.opacity = '1';
    
    setTimeout(() => {
        speech.style.opacity = '0';
    }, 3000);
}

function updateCatSpeech(message) {
    const speech = document.getElementById('catSpeech');
    if (speech) {
        speech.textContent = message;
        speech.style.opacity = '1';
        
        setTimeout(() => {
            speech.style.opacity = '0';
        }, 3000);
    }
}

// 胖猫咪互动
function updateCatMood() {
    const cat = document.getElementById('fatCat');
    const speech = document.getElementById('catSpeech');
    const moods = [
        '好棒的故事呀～ 🐾',
        '看得好入迷！😊',
        '这个很甜呢～ 🍯',
        '继续读下去吧！💕',
        '好浪漫的故事～ ✨'
    ];
    
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    speech.textContent = randomMood;
    
    // 猫咪打滚动画
    cat.style.animation = 'catRoll 1s ease';
    setTimeout(() => {
        cat.style.animation = '';
    }, 1000);
}

// 添加CSS动画
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes chickenJump {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
    
    @keyframes catRoll {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(10deg); }
        75% { transform: rotate(-10deg); }
        100% { transform: rotate(0deg); }
    }
    
    .page-nav-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
`;
document.head.appendChild(additionalStyles);

// 回到顶部
function scrollToTop() {
    const storyText = document.getElementById('storyText');
    storyText.scrollTop = 0;
}

// 收藏功能
function toggleBookmark() {
    // 这里可以添加收藏逻辑
    showNotification('章节已收藏 📖');
}

// 批注功能
function openAnnotationModal(paragraphId) {
    currentAnnotationParagraph = paragraphId;
    const modal = document.getElementById('annotationModal');
    const input = document.getElementById('annotationInput');
    
    // 如果已有批注，先填入
    if (annotations[paragraphId]) {
        input.value = annotations[paragraphId].text;
    } else {
        input.value = '';
    }
    
    modal.classList.add('show');
    input.focus();
}

function closeAnnotationModal() {
    const modal = document.getElementById('annotationModal');
    modal.classList.remove('show');
    currentAnnotationParagraph = null;
}

function saveAnnotation() {
    if (!currentAnnotationParagraph) return;
    
    const input = document.getElementById('annotationInput');
    const text = input.value.trim();
    
    if (text) {
        // 保存批注
        annotations[currentAnnotationParagraph] = {
            text: text,
            timestamp: new Date().toISOString()
        };
        
        // 保存到localStorage
        localStorage.setItem('storyAnnotations', JSON.stringify(annotations));
        
        // 重新加载故事内容以显示批注
        loadStoryContent(currentChapter);
        
        showNotification('批注已保存 💭');
    }
    
    closeAnnotationModal();
}

function removeAnnotation(paragraphId) {
    delete annotations[paragraphId];
    
    // 保存到localStorage
    localStorage.setItem('storyAnnotations', JSON.stringify(annotations));
    
    loadStoryContent(currentChapter);
    showNotification('批注已删除');
}

// 页面加载时恢复批注
document.addEventListener('DOMContentLoaded', function() {
    // 恢复字体大小
    const savedFontSize = localStorage.getItem('storyFontSize');
    if (savedFontSize) {
        fontSize = parseInt(savedFontSize);
    }
    
    // 恢复批注
    const savedAnnotations = localStorage.getItem('storyAnnotations');
    if (savedAnnotations) {
        try {
            annotations = JSON.parse(savedAnnotations);
        } catch (e) {
            console.log('恢复批注失败:', e);
            annotations = {};
        }
    }
});

// 通知功能
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 179, 186, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 20px;
        font-size: 14px;
        z-index: 3000;
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后移除
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
    
    .nav-links.active {
        display: flex !important;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(26, 26, 26, 0.98);
        flex-direction: column;
        padding: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    .nav-links.active .nav-link {
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
`;
document.head.appendChild(style);

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // ESC键关闭模态框
    if (e.key === 'Escape') {
        closeAnnotationModal();
        return;
    }
    
    // 在故事页面支持键盘翻页
    if (currentSection === 'stories') {
        if (e.key === 'ArrowLeft') {
            loadPreviousChapter();
        } else if (e.key === 'ArrowRight') {
            loadNextChapter();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            scrollToTop();
        } else if (e.key === '+' || e.key === '=') {
            adjustFontSize(1);
        } else if (e.key === '-' || e.key === '_') {
            adjustFontSize(-1);
        }
    }
    
    // 在菜单页面支持快捷键
    if (currentSection === 'menu') {
        if (e.key === 'r' || e.key === 'R') {
            chickenRecommend();
        }
    }
});

// 添加触摸滑动支持 - 仅导航，禁用缩放
let touchStartX = 0;
let touchEndX = 0;
let initialTouchDistance = 0;
let lastTouchEnd = 0;

// 禁用双击缩放
document.addEventListener('touchend', function(e) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// 禁用手势缩放
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});

// 禁用缩放相关事件
document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault(); // 禁止多点触控缩放
    }
}, { passive: false });

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    
    // 记录初始双指距离（用于检测缩放意图）
    if (e.touches.length === 2) {
        initialTouchDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
        );
    }
});

document.addEventListener('touchend', function(e) {
    if (e.touches.length === 0) {
        touchEndX = e.changedTouches[e.changedTouches.length - 1].screenX;
        handleSwipe();
        initialTouchDistance = 0;
    }
});

function handleSwipe() {
    const swipeThreshold = 80;
    const diff = touchStartX - touchEndX;
    
    // 只处理单指滑动，忽略可能的双指操作
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentSection !== 'about') {
            // 向左滑动，下一个section
            const sections = ['home', 'menu', 'stories', 'about'];
            const currentIndex = sections.indexOf(currentSection);
            if (currentIndex < sections.length - 1) {
                navigateToSection(sections[currentIndex + 1]);
                showNotification(`切换到${sections[currentIndex + 1] === 'menu' ? '菜单' : sections[currentIndex + 1] === 'stories' ? '故事' : '关于'} 📱`);
            }
        } else if (diff < 0 && currentSection !== 'home') {
            // 向右滑动，上一个section
            const sections = ['home', 'menu', 'stories', 'about'];
            const currentIndex = sections.indexOf(currentSection);
            if (currentIndex > 0) {
                navigateToSection(sections[currentIndex - 1]);
                showNotification(`切换到${sections[currentIndex - 1] === 'menu' ? '菜单' : sections[currentIndex - 1] === 'stories' ? '故事' : '首页'} 📱`);
            }
        }
    }
}

// 页面可见性变化时的处理
document.addEventListener('visibilitychange', function() {
    // 页面隐藏时可以暂停某些操作
});

// 窗口大小变化时的处理
window.addEventListener('resize', function() {
    // 响应式处理
    if (window.innerWidth > 768) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});

// 互动角色初始化
function initInteractiveCharacters() {
    // 检测移动设备
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // 移动端：简化交互，减少动画复杂度
        initMobileInteraction('chickenHelper', 'chicken');
        initMobileInteraction('fatCat', 'cat');
    } else {
        // 桌面端：完整交互
        initClickInteraction('chickenHelper', 'chicken');
        initClickInteraction('fatCat', 'cat');
    }
}

// 简化的点击交互
function initClickInteraction(elementId, characterType) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.addEventListener('click', function(e) {
        // 阻止事件冒泡，防止按钮点击触发攻击
        if (e.target.closest('button')) {
            return;
        }
        handleClick(element, characterType, e);
    });
}

// 移动端优化交互
function initMobileInteraction(elementId, characterType) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.addEventListener('touchstart', function(e) {
        // 阻止默认行为和事件冒泡
        if (e.target.closest('button')) {
            return;
        }
        e.preventDefault();
    }, { passive: false });
    
    element.addEventListener('touchend', function(e) {
        if (e.target.closest('button')) {
            return;
        }
        
        // 创建触摸反馈
        element.style.transform = 'scale(0.9)';
        setTimeout(() => {
            element.style.transform = '';
            handleClick(element, characterType, e);
        }, 150);
    });
}

// 拖动功能
function initDraggableElement(elementId, characterType) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let initialLeft = 0;
    let initialTop = 0;
    let dragStarted = false;
    let clickTimer = null;
    
    // 获取元素的初始位置
    function getInitialPosition() {
        const rect = element.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(element);
        const matrix = new DOMMatrix(computedStyle.transform);
        
        initialLeft = matrix.m41;
        initialTop = matrix.m42;
        
        // 如果没有transform，使用实际位置
        if (initialLeft === 0 && initialTop === 0) {
            initialLeft = rect.left;
            initialTop = rect.top;
        }
        
        currentX = initialLeft;
        currentY = initialTop;
    }
    
    // 开始拖动
    function startDrag(e) {
        e.preventDefault();
        
        // 清除之前的点击定时器
        if (clickTimer) {
            clearTimeout(clickTimer);
            clickTimer = null;
        }
        
        // 获取初始位置
        if (!dragStarted) {
            getInitialPosition();
            dragStarted = true;
        }
        
        // 记录起始位置
        if (e.type === "touchstart") {
            startX = e.touches[0].clientX - currentX;
            startY = e.touches[0].clientY - currentY;
        } else {
            startX = e.clientX - currentX;
            startY = e.clientY - currentY;
        }
        
        isDragging = false;
        
        // 设置点击检测定时器
        clickTimer = setTimeout(() => {
            if (!isDragging) {
                handleClick(element, characterType, e);
                endDrag();
            }
        }, 300);
        
        // 添加事件监听器
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchmove', handleDrag);
        document.addEventListener('touchend', endDrag);
    }
    
    // 处理拖动
    function handleDrag(e) {
        let clientX, clientY;
        
        if (e.type === "touchmove") {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        
        // 计算新位置
        const newX = clientX - startX;
        const newY = clientY - startY;
        
        // 检查移动距离
        const distance = Math.sqrt(
            Math.pow(newX - currentX, 2) + Math.pow(newY - currentY, 2)
        );
        
        if (distance > 5) {
            isDragging = true;
            
            // 清除点击定时器
            if (clickTimer) {
                clearTimeout(clickTimer);
                clickTimer = null;
            }
            
            currentX = newX;
            currentY = newY;
            
            // 更新元素位置
            updateElementPosition();
            
            element.classList.add('dragging');
        }
    }
    
    // 结束拖动
    function endDrag(e) {
        // 移除事件监听器
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchmove', handleDrag);
        document.removeEventListener('touchend', endDrag);
        
        // 清除点击定时器
        if (clickTimer) {
            clearTimeout(clickTimer);
            clickTimer = null;
        }
        
        // 检查边界
        keepInBounds();
        
        // 移除拖动样式
        element.classList.remove('dragging');
        
        // 如果没有真正拖动，触发点击
        if (!isDragging && dragStarted) {
            handleClick(element, characterType, e);
        }
        
        isDragging = false;
        dragStarted = false;
        
        // 碰撞检测
        checkCollision();
    }
    
    // 更新元素位置
    function updateElementPosition() {
        element.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
    
    // 边界检测
    function keepInBounds() {
        const rect = element.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;
        const minX = 0;
        const minY = 0;
        
        let adjustedX = currentX;
        let adjustedY = currentY;
        
        if (currentX < minX) adjustedX = minX;
        if (currentX > maxX) adjustedX = maxX;
        if (currentY < minY) adjustedY = minY;
        if (currentY > maxY) adjustedY = maxY;
        
        currentX = adjustedX;
        currentY = adjustedY;
        
        updateElementPosition();
    }
    
    // 绑定事件
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('touchstart', startDrag);
    
    // 初始化位置
    getInitialPosition();
}

// 点击互动
function handleClick(element, characterType, e) {
    // 显示拳头效果
    showFistEffect(e.clientX, e.clientY);
    
    // 触发哭泣动画
    element.classList.add('hit');
    
    // 显示眼泪
    showTears(element, characterType);
    
    // 显示哭泣对话
    showCryingSpeech(element, characterType);
    
    // 移除动画类
    setTimeout(() => {
        element.classList.remove('hit');
    }, 1000);
}

// 拳头效果
function showFistEffect(x, y) {
    // 确保坐标是有效的
    if (typeof x !== 'number' || typeof y !== 'number') {
        return;
    }
    
    const fist = document.createElement('div');
    fist.className = 'fist-effect';
    fist.textContent = '👊';
    fist.style.left = x + 'px';
    fist.style.top = y + 'px';
    fist.style.zIndex = '3000'; // 确保在最上层
    
    document.body.appendChild(fist);
    
    setTimeout(() => {
        try {
            if (fist && fist.parentNode) {
                fist.parentNode.removeChild(fist);
            }
        } catch (e) {
            console.log('拳头效果移除失败:', e);
        }
    }, 800); // 延长显示时间
}

// 眼泪效果
function showTears(element, characterType) {
    const tearCount = characterType === 'chicken' ? 2 : 3;
    
    for (let i = 0; i < tearCount; i++) {
        setTimeout(() => {
            const tear = document.createElement('div');
            tear.className = 'tear';
            
            // 根据角色类型设置眼泪位置
            if (characterType === 'chicken') {
                tear.style.left = (20 + i * 10) + 'px';
                tear.style.top = '15px';
            } else {
                tear.style.left = (25 + i * 10) + 'px';
                tear.style.top = '20px';
            }
            
            element.appendChild(tear);
            
            setTimeout(() => {
                if (tear.parentNode) {
                    tear.parentNode.removeChild(tear);
                }
            }, 1000);
        }, i * 200);
    }
}

// 哭泣对话
function showCryingSpeech(element, characterType) {
    const speechId = characterType === 'chicken' ? 'chickenSpeech' : 'catSpeech';
    const speech = document.getElementById(speechId);
    
    const chickenCries = [
        '咕咕呜～好痛呀！😭',
        '不要打我嘛～呜呜呜🐣',
        '我做错了什么吗？😿',
        '小鸡也会疼的呀～💔'
    ];
    
    const catCries = [
        '喵呜～好痛！😿',
        '为什么打猫咪呀？😭',
        '我做错了什么吗喵？💔',
        '好委屈呀～呜呜呜🐾'
    ];
    
    const cries = characterType === 'chicken' ? chickenCries : catCries;
    const randomCry = cries[Math.floor(Math.random() * cries.length)];
    
    speech.textContent = randomCry;
    speech.style.opacity = '1';
    
    setTimeout(() => {
        speech.style.opacity = '0';
    }, 3000);
}

// 碰撞检测
function checkCollision() {
    const chicken = document.getElementById('chickenHelper');
    const cat = document.getElementById('fatCat');
    
    if (!chicken || !cat) return;
    
    const chickenRect = chicken.getBoundingClientRect();
    const catRect = cat.getBoundingClientRect();
    
    const collision = !(chickenRect.right < catRect.left || 
                     chickenRect.left > catRect.right || 
                     chickenRect.bottom < catRect.top || 
                     chickenRect.top > catRect.bottom);
    
    if (collision) {
        // 碰撞时的互动
        chicken.style.animation = 'chickenJump 0.6s ease';
        cat.style.animation = 'catRoll 0.8s ease';
        
        setTimeout(() => {
            chicken.style.animation = '';
            cat.style.animation = '';
        }, 800);
        
        // 显示互动对话
        updateChickenSpeech('喵喵～碰到你了！🐔');
        updateCatSpeech('咕咕～小心点呀！🐱');
    }
}

// 页面加载完成提示
window.addEventListener('load', function() {
    // 移动端优化
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile-device');
        optimizeForMobile();
    }
    
    setTimeout(() => {
        showNotification('欢迎来到只属于你的小窝 ✨');
        
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                showNotification('左右滑动可以切换页面哦 📱');
            }, 2500);
        }
    }, 1000);
});

// 移动端优化函数
function optimizeForMobile() {
    // 禁用一些不必要的动画效果以提升性能
    const storyText = document.getElementById('storyText');
    if (storyText) {
        storyText.style.willChange = 'transform';
    }
    
    // 优化触摸反馈
    document.addEventListener('touchstart', function(e) {
        if (e.target.closest('.feature-card, .menu-item, .chapter-link, .tab-btn')) {
            e.target.style.opacity = '0.7';
        }
    });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.closest('.feature-card, .menu-item, .chapter-link, .tab-btn')) {
            setTimeout(() => {
                e.target.style.opacity = '';
            }, 200);
        }
    });
}

// 相册功能
function openPhotoAlbum() {
    const modal = document.getElementById('photoAlbumModal');
    modal.classList.add('show');
    loadAlbumContent('memories');
}

function closePhotoAlbum() {
    const modal = document.getElementById('photoAlbumModal');
    modal.classList.remove('show');
}

function switchAlbumTab(category) {
    // 更新标签状态
    document.querySelectorAll('.album-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadAlbumContent(category);
}

function loadAlbumContent(category) {
    const albumGrid = document.getElementById('albumGrid');
    const photos = getAlbumPhotos(category);
    
    let html = '';
    photos.forEach(photo => {
        html += `
            <div class="photo-item" onclick="viewPhoto('${photo.url}')">
                <div class="photo-placeholder">
                    <i class="fas ${photo.icon}"></i>
                </div>
                <div class="photo-info">
                    <h4>${photo.title}</h4>
                    <p>${photo.description}</p>
                    <span class="photo-date">${photo.date}</span>
                </div>
            </div>
        `;
    });
    
    albumGrid.innerHTML = html;
}

function getAlbumPhotos(category) {
    const photoData = {
        memories: [
            { icon: 'fa-heart', title: '第一次见面', description: '还记得那个阳光明媚的下午吗？', date: '2024.01.15', url: '' },
            { icon: 'fa-coffee', title: '第一次约会', description: '咖啡店的香氛和你的笑容', date: '2024.02.14', url: '' },
            { icon: 'fa-star', title: '确定了关系', description: '从此开始我们的甜蜜故事', date: '2024.03.20', url: '' },
            { icon: 'fa-gift', title: '生日惊喜', description: '你最喜欢的礼物和蛋糕', date: '2024.05.25', url: '' }
        ],
        daily: [
            { icon: 'fa-sun', title: '早晨的阳光', description: '每天醒来看到你的幸福', date: '昨天', url: '' },
            { icon: 'fa-home', title: '温馨的晚餐', description: '一起做饭的温馨时光', date: '今天', url: '' },
            { icon: 'fa-walking', title: '傍晚散步', description: '牵手走在回家的路上', date: '今天', url: '' },
            { icon: 'fa-moon', title: '晚安时光', description: '睡前说的每一句晚安', date: '今天', url: '' }
        ],
        special: [
            { icon: 'fa-award', title: '纪念日', description: '每一个值得纪念的日子', date: '2024.06.01', url: '' },
            { icon: 'fa-plane', title: '第一次旅行', description: '说走就走的美好回忆', date: '2024.07.15', url: '' },
            { icon: 'fa-ring', title: '重要承诺', description: '许下永恒的诺言', date: '2024.08.20', url: '' },
            { icon: 'fa-infinity', title: '永恒瞬间', description: '永远定格的美好', date: '2024.09.10', url: '' }
        ]
    };
    
    return photoData[category] || [];
}

function viewPhoto(url) {
    showNotification('点击了照片功能，可以在这里添加图片查看器 📸');
}

// 小法庭功能
function openLoveCourt() {
    const modal = document.getElementById('loveCourtModal');
    modal.classList.add('show');
    resetCourt();
}

function closeLoveCourt() {
    const modal = document.getElementById('loveCourtModal');
    modal.classList.remove('show');
}

function resetCourt() {
    document.getElementById('caseDescription').value = '';
    document.getElementById('verdictArea').style.display = 'none';
}

function submitBlame() {
    const description = document.getElementById('caseDescription').value.trim();
    if (!description) {
        showNotification('请先描述一下发生了什么 📝');
        return;
    }
    
    const verdicts = [
        {
            text: '判决：经过公正审判，对方确实需要反思一下自己的行为！',
            penalty: '惩罚方案：今晚给对方按摩10分钟，并说出3个对方的优点！'
        },
        {
            text: '判决：爱情法官认定，你的感受很重要！',
            penalty: '惩罚方案：对方需要给你买喜欢的小零食，并主动拥抱1分钟！'
        },
        {
            text: '判决：在爱情的世界里，沟通和理解最重要！',
            penalty: '惩罚方案：一起看一部喜欢的电影，不许玩手机！'
        }
    ];
    
    const verdict = verdicts[Math.floor(Math.random() * verdicts.length)];
    showVerdict(verdict);
}

function submitSelfBlame() {
    const description = document.getElementById('caseDescription').value.trim();
    if (!description) {
        showNotification('请先描述一下发生了什么 📝');
        return;
    }
    
    const verdicts = [
        {
            text: '判决：勇于承认错误是爱情中最高贵的品质！',
            penalty: '补偿方案：为对方做一件贴心的小事，并说声"我爱你"！'
        },
        {
            text: '判决：自我反省让爱情更加珍贵！',
            penalty: '补偿方案：主动牵手散步，聊聊开心的话题！'
        },
        {
            text: '判决：诚实的心最打动人！',
            penalty: '补偿方案：给对方一个深情的拥抱，计划下一次约会！'
        }
    ];
    
    const verdict = verdicts[Math.floor(Math.random() * verdicts.length)];
    showVerdict(verdict);
}

function proposePeace() {
    const verdicts = [
        {
            text: '和解判决：爱情没有对错，只有相互理解！',
            penalty: '和解方案：一起做晚餐，然后好好拥抱一下！'
        },
        {
            text: '和解判决：相爱的人之间没有过夜的矛盾！',
            penalty: '和解方案：一起去散步，说说心里话！'
        },
        {
            text: '和解判决：包容是爱情最美的样子！',
            penalty: '和解方案：一起回忆美好的时光，然后互相道个晚安！'
        }
    ];
    
    const verdict = verdicts[Math.floor(Math.random() * verdicts.length)];
    showVerdict(verdict);
}

function showVerdict(verdict) {
    const verdictArea = document.getElementById('verdictArea');
    const verdictText = document.getElementById('verdictText');
    const penaltySuggestion = document.getElementById('penaltySuggestion');
    
    verdictText.textContent = verdict.text;
    penaltySuggestion.textContent = verdict.penalty;
    
    verdictArea.style.display = 'block';
    verdictArea.scrollIntoView({ behavior: 'smooth' });
}
