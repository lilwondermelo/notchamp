const connector = new TonConnectSDK.TonConnect({
    manifestUrl: 'https://raw.githubusercontent.com/lilwondermelo/notchamp/main/manifest.json'
});

const version = 4;
console.log('version: ' + version);

connector.onStatusChange(async wallet => {
    console.log(wallet);
    const rawAddress = wallet.account.address;  
    const userFriendlyAddress = TonConnectSDK.toUserFriendlyAddress(rawAddress, true);
    console.log(userFriendlyAddress);
    localStorage.setItem('wallet', JSON.stringify(wallet));

    // Запрос баланса через TonAPI
    const apiUrl = `https://testnet.tonapi.io/v2/blockchain/accounts/${rawAddress}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data) {
            console.log(`Баланс кошелька ${userFriendlyAddress}: ${data.balance}`);
        } else {
            console.error('Ошибка при запросе баланса:', data);
        }
    } catch (error) {
        console.error('Ошибка при запросе баланса:', error);
    }


});
const savedWallet = localStorage.getItem('wallet');
if (savedWallet) {
    const wallet = JSON.parse(savedWallet);
    console.log('Сохраненные данные кошелька:', wallet);
} else {
    connectWallet();
}

async function connectWallet() {
    const walletsList = await connector.getWallets();
    const walletConnectionSource = {
        universalLink: 'https://app.tonkeeper.com/ton-connect',
        bridgeUrl: 'https://bridge.tonapi.io/bridge'
    }
    const universalLink = connector.connect(walletConnectionSource);
    console.log(universalLink);
}

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