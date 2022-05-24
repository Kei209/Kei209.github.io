let ProductArray =
    [
        {
            productName: 'iPadPro',
            baseImg: './pics/ipad-pro-all.jpg',
            basePrice: 24900,
            specArray: [
                {
                    title: '機型',
                    key: 'modal',
                    options: [
                        { data: '11吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                        { data: '12.9吋顯示器', extraPrice: 10000, description: 'Liquid Retina XDR 顯示器', },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: true,
                },
                {
                    title: '顏色',
                    key: 'color',
                    options: [
                        { data: './pics/gray.png', description: '太空灰色', },
                        { data: './pics/silver.png', description: '銀色', }
                    ],
                    choosed: null,
                    changePrice: false,
                    changeImg: true,
                },
                {
                    title: '記憶體',
                    key: 'storage',
                    options: [
                        { data: '128GB', extraPrice: 0, },
                        { data: '256GB', extraPrice: 3100, },
                        { data: '512GB', extraPrice: 9300, },
                        { data: '1TB', extraPrice: 27100, },
                        { data: '2TB', extraPrice: 34100, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
                {
                    title: '網路',
                    key: 'network',
                    options: [
                        { data: 'Wi-Fi', extraPrice: 0, },
                        { data: 'Wi-Fi + 行動網路', extraPrice: 5000, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
            ],
        }
    ]