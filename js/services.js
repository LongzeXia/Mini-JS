var services=angular.module('services', [])
    services.factory('Foods', function () {
        // Might use a resource here that returns a JSON array
        var items = [{index:0,name:"orange",src:"icons/0.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:1,name:"lemon",src:"icons/1.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:2,name:"apple",src:"icons/2.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:3,name:"pear",src:"icons/3.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:4,name:"peach",src:"icons/4.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:5,name:"plums",src:"icons/5.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:6,name:"cherry",src:"icons/6.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:7,name:"banana",src:"icons/7.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:8,name:"grape",src:"icons/8.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:9,name:"pomegrana",src:"icons/9.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:10,name:"starfruit",src:"icons/10.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:11,name:"kiwi",src:"icons/11.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:12,name:"pineapple",src:"icons/12.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:13,name:"watermelon",src:"icons/13.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:14,name:"strawberry",src:"icons/14.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:15,name:"raspberry",src:"icons/15.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:16,name:"blackcurran",src:"icons/16.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:17,name:"blueberry",src:"icons/17.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:18,name:"coconut",src:"icons/18.png",duration:7,startdate:"12/12/2017",have:0,category:"fruit"},
{index:19,name:"walnut",src:"icons/19.png",duration:7,startdate:"12/12/2017",have:0,category:"nuts"},
{index:20,name:"almonds",src:"icons/20.png",duration:7,startdate:"12/12/2017",have:0,category:"nuts"},
{index:21,name:"hazelnut",src:"icons/21.png",duration:7,startdate:"12/12/2017",have:0,category:"nuts"},
{index:22,name:"peanut",src:"icons/22.png",duration:7,startdate:"12/12/2017",have:0,category:"nuts"},
{index:23,name:"gourd",src:"icons/23.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:24,name:"courgette",src:"icons/24.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:25,name:"pumpkin",src:"icons/25.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:26,name:"cucumber",src:"icons/26.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:27,name:"carrot",src:"icons/27.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:28,name:"parsnip",src:"icons/28.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:29,name:"beetroot",src:"icons/29.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:30,name:"whiteradish",src:"icons/30.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:31,name:"potatos",src:"icons/31.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:32,name:"sweetpotato",src:"icons/32.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:33,name:"tomato",src:"icons/33.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:34,name:"cherrytomato",src:"icons/34.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:35,name:"aubergine",src:"icons/35.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:36,name:"chilipepper",src:"icons/36.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:37,name:"bellpepper",src:"icons/37.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:38,name:"broccoli",src:"icons/38.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:39,name:"cauliflower",src:"icons/39.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:40,name:"leek",src:"icons/40.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:41,name:"onion",src:"icons/41.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:42,name:"shallot",src:"icons/42.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:43,name:"garlic",src:"icons/43.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:44,name:"beans",src:"icons/44.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:45,name:"peas",src:"icons/45.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:46,name:"corn",src:"icons/46.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:47,name:"olives",src:"icons/47.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:48,name:"avocado",src:"icons/48.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:49,name:"artichoke",src:"icons/49.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:50,name:"cabbage",src:"icons/50.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:51,name:"roundlettuce",src:"icons/51.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:52,name:"pakchoi",src:"icons/52.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:53,name:"spinach",src:"icons/53.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:54,name:"salad-romane-rocket",src:"icons/54.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:55,name:"arugula",src:"icons/55.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:56,name:"basil",src:"icons/56.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:57,name:"oregano",src:"icons/57.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:58,name:"rosemary",src:"icons/58.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:59,name:"sage",src:"icons/59.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:60,name:"parsley",src:"icons/60.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:61,name:"mint",src:"icons/61.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:62,name:"herbs",src:"icons/62.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:63,name:"ginger",src:"icons/63.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:64,name:"cinnamon",src:"icons/64.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:65,name:"mushroom",src:"icons/65.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:66,name:"white-button-mushroom",src:"icons/66.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:67,name:"oyster-mushroom",src:"icons/67.png",duration:7,startdate:"12/12/2017",have:0,category:"vegetable"},
{index:68,name:"rice",src:"icons/68.png",duration:7,startdate:"12/12/2017",have:0,category:"cereals"},
{index:69,name:"oats",src:"icons/69.png",duration:7,startdate:"12/12/2017",have:0,category:"cereals"},
{index:70,name:"wheat",src:"icons/70.png",duration:7,startdate:"12/12/2017",have:0,category:"cereals"},
{index:71,name:"flour",src:"icons/71.png",duration:7,startdate:"12/12/2017",have:0,category:"cereals"},
{index:72,name:"milk",src:"icons/72.png",duration:7,startdate:"12/12/2017",have:0,category:"dairy"},
{index:73,name:"cheese",src:"icons/73.png",duration:7,startdate:"12/12/2017",have:0,category:"dairy"},
{index:74,name:"eggs",src:"icons/74.png",duration:7,startdate:"12/12/2017",have:0,category:"dairy"},
{index:75,name:"beef",src:"icons/75.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:76,name:"pork",src:"icons/76.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:77,name:"lamb",src:"icons/77.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:78,name:"chicken",src:"icons/78.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:79,name:"rabbit",src:"icons/79.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:80,name:"turkey",src:"icons/80.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:81,name:"duck",src:"icons/81.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:82,name:"fish",src:"icons/82.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:83,name:"crab",src:"icons/83.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:84,name:"lobster",src:"icons/84.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:85,name:"prawn",src:"icons/85.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:86,name:"shrimp",src:"icons/86.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:87,name:"octopus",src:"icons/87.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:88,name:"tentacle",src:"icons/88.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:89,name:"cuttlefish",src:"icons/89.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:90,name:"squid",src:"icons/90.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:91,name:"oyster-mushroom",src:"icons/91.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:92,name:"shelfish",src:"icons/92.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:93,name:"escargot",src:"icons/93.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:94,name:"caviar",src:"icons/94.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:95,name:"fish-piece",src:"icons/95.png",duration:7,startdate:"12/12/2017",have:0,category:"seafood"},
{index:96,name:"meat",src:"icons/96.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:97,name:"ham",src:"icons/97.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:98,name:"drumstick",src:"icons/98.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:99,name:"steak",src:"icons/99.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:100,name:"T-steak",src:"icons/100.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:101,name:"chorizo",src:"icons/101.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:102,name:"sausage",src:"icons/102.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:103,name:"bacon",src:"icons/103.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"},
{index:104,name:"ribs",src:"icons/104.png",duration:7,startdate:"12/12/2017",have:0,category:"meat"}


            ];

        
        //for (var i = 0; i < 4; i++) {
        // for (var j = 0; j < 3; j++) {
        // items[i].lists.push(i + '-' + j);
        // }
        // }
        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            indexOf: function (item) {
                return items.indexOf(item);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].index === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            },
            getcate: function (category) {
                var newitems=[];
                for (var i = 0; i < items.length; i++) {
                    if (items[i].category === category) {
                        newitems.push(items[i]);
                    }
                }
                return newitems;
                // return null;
            }
        };

    })
