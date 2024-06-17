const connector = new TonConnectSDK.TonConnect({
    manifestUrl: 'https://raw.githubusercontent.com/lilwondermelo/notchamp/main/manifest.json'
});


connector.onStatusChange(wallet => {
    console.log(1);
    console.log(connector);
});


const walletsList = await connector.getWallets();

const walletConnectionSource = {
    universalLink: 'https://app.tonkeeper.com/ton-connect',
    bridgeUrl: 'https://bridge.tonapi.io/bridge'
}


const universalLink = connector.connect(walletConnectionSource);

console.log(universalLink);
console.log(connector.connected);

var target = null;
var data_test = [
    {
        "id": "bafbcb35-1f72-5555-bc2d-35195da344io",
        "name": "Лига А (Сезон 1)",
        "catId": "bafbcb35-1f72-40c1-bc2d-35195da344ty",
        "catName": "Лига",
        "timestamp": null,
        "parent": "bafbcb35-1f72-40c1-bc2d-35195da344io"
    },
    {
        "id": "bafbcb35-1f72-5555-bc2d-35195da344oi",
        "name": "Лига Б (Сезон 1)",
        "catId": "bafbcb35-1f72-40c1-bc2d-35195da344ty",
        "catName": "Лига",
        "timestamp": null,
        "parent": "bafbcb35-1f72-40c1-bc2d-35195da344io"
    },
    {
        "id": "bafbcb35-1f72-5555-bc2d-35195da344io",
        "name": "Лига А (Сезон 1)",
        "catId": "bafbcb35-1f72-40c1-bc2d-35195da344ty",
        "catName": "Лига",
        "timestamp": null,
        "parent": "bafbcb35-1f72-40c1-bc2d-35195da344io"
    },
    {
        "id": "bafbcb35-1f72-5555-bc2d-35195da344oi",
        "name": "Лига Б (Сезон 1)",
        "catId": "bafbcb35-1f72-40c1-bc2d-35195da344ty",
        "catName": "Лига",
        "timestamp": null,
        "parent": "bafbcb35-1f72-40c1-bc2d-35195da344io"
    },
    {
        "id": "bafbcb35-1f72-5555-bc2d-35195da344io",
        "name": "Лига А (Сезон 1)",
        "catId": "bafbcb35-1f72-40c1-bc2d-35195da344ty",
        "catName": "Лига",
        "timestamp": null,
        "parent": "bafbcb35-1f72-40c1-bc2d-35195da344io"
    },
    {
        "id": "bafbcb35-1f72-5555-bc2d-35195da344oi",
        "name": "Лига Б (Сезон 1)",
        "catId": "bafbcb35-1f72-40c1-bc2d-35195da344ty",
        "catName": "Лига",
        "timestamp": null,
        "parent": "bafbcb35-1f72-40c1-bc2d-35195da344io"
    },
    {
        "id": "bafbcb35-1f72-5555-bc2d-35195da344io",
        "name": "Лига А (Сезон 1)",
        "catId": "bafbcb35-1f72-40c1-bc2d-35195da344ty",
        "catName": "Лига",
        "timestamp": null,
        "parent": "bafbcb35-1f72-40c1-bc2d-35195da344io"
    },
    {
        "id": "bafbcb35-1f72-5555-bc2d-35195da344oi",
        "name": "Лига Б (Сезон 1)",
        "catId": "bafbcb35-1f72-40c1-bc2d-35195da344ty",
        "catName": "Лига",
        "timestamp": null,
        "parent": "bafbcb35-1f72-40c1-bc2d-35195da344io"
    }
];
drawLeagues(data_test);
//getLeagues();


function getLeagues() {
    $.ajax({
        type: "POST",
        url: "core/_ajaxListener.class.php",
        data: {classFile: "app.class", class: "App", method: "getLeagues"
        }}).done(function (result) {
        var data = JSON.parse(result);
        if (data.result === "Ok") {
            drawLeagues(data.data);
        }
        else {
        }
    });
}

function drawLeagues(data) {
    console.log(data);
    target = $('.events');
    for (var i = 0; i < data.length; i++) {
        target.append($('<div/>',{ "class": "events_item" }).append([
            $('<div/>',{ "class": "events_item_info row" }).append([
                $('<div/>',{ "class": "events_item_info_main" }).append([
                    $('<div/>',{ "class": "row" }).append([
                        $('<div/>',{ "class": "events_item_info_authorImg img round" })
                            .append($('<img>',{ "src": "./media/images/users/alisher.jpg" })),
                        $('<h2/>',{ "class": 'events_item_info_name', }).html(data[i].name)
                    ]),
                    $('<div/>',{ "class": "row" }).append([
                        $('<h3/>',{ "class": "events_item_info_date" }).html('Ср, 5 июня, 20:00'),
                        $('<h3/>',{ "class": "tab" }).html('|'),
                        $('<h3/>',{ "class": "events_item_info_authorName" }).html('Алишер Михтадов')
                    ])
                ]),
                $('<div/>',{ "class": "events_item_img img round" })
                    .append($('<img>',{ "src": './media/images/leagues/' + data[i].id + '.jpg' }))
            ]),
            $('<div/>',{ "class": "events_item_progress row" }).append([
                $('<div/>',{ "class": "events_item_progress_icon img" })
                    .append($('<img>',{ "src": './media/icons/trophy.svg' })),
                $('<div/>',{ "class": "events_item_progress_pool" }).append([
                    $('<h4/>',{ "class": "events_item_progress_pool_title" }).html('Дары:'),
                    $('<div/>',{ "class": "events_item_progress_pool_prize" }).append([
                        $('<div/>',{ "class": "events_item_progress_pool_icon" }),
                        $('<h2/>',{ "class": "events_item_progress_pool_value value" }).html('100 NOT')
                    ])
                ]),
                $('<div/>',{ "class": "events_item_progress_bar" }).append([
                    $('<div/>',{ "class": "events_item_progress_bar_line" })
                        .append($('<div/>',{ "class": "events_item_progress_bar_line_fill" })),
                    $('<div/>',{ "class": "events_item_progress_bar_members row" }).append([
                        $('<h5/>',{ "class": "events_item_progress_bar_members_value" }).html('5 мест осталось'),
                        $('<h5/>',{ "class": "events_item_progress_bar_members_value" }).html('15 мест всего')
                    ])
                ]),
                $('<div/>',{ "class": "events_item_progress_share" })
            ])
        ]));
    }
}