import Product from '../Model/ProductModel';

const PRODUCTS = [
  

        new Product(
            'p1',
            'Audemars Piguet',
            'https://bestwatch.com.hk/media/catalog/product/image/A/u/Audemars_Piguet-RoyalOak-15500ST.OO.1220ST.03.jpg',
            'Luxury watch brand is also noted for creating the first steel luxury sports watch.',
            900,
            'Watches',
            4.6,
            false,
            true
        ),
        new Product(
            'p2',
            'Patek Philippe',
            'https://www.davidmrobinson.co.uk/wp-content/uploads/2019/11/5740_1g_001-1200x1200.png',
            'The Swiss brand, Patek Phillipe & Co was founded in 1851',
            700,
            'Watches',
            4.6,
            true,
            true
        ),
        new Product(
            'p3',
            'Blancpain',
            'https://cdn.shopify.com/s/files/1/0146/0732/products/Blancpain5-Solider.jpg?v=1583194768',
            'founded in another era; 1735.',
            1200,
            'Watches',
            4.6,
            false,
            false
        ),
        new Product(
            'p4',
            'Chopard Happy',
            'https://www.prestigetime.com/images/watches/274808-5014-Chopard-Happy-Sport-Medium-Automatic-36mm.jpg',
            'Chopard is not only known for their unique timepieces, but also for their jewelr',
            1500,
            'Watches',
            4.6,
            true,
            false
        )

   ,
        new Product(
            'p5',
            'Sony Headphones',
            'https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sony_wh-1000xm3_over-ear_wireless_noise-canceling_headphones_1_-_tejar.jpg',
            'This headphone is recognized as one of the most popular noise cancelling headphones by Silicon Valley designers',
            1600,
            'Sounds',
            4.6,
            false,
            true
        ),
        new Product(
            'p6',
            'Bose QuietComfort',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HLPE2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1507158270169',
            'Bose QuietComfort 35 II',
            6700,
            'Sounds',
            4.6,
            true,
            true
        ),
        new Product(
            'p7',
            'Apple AirPods',
            'https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_airpods_2_mv7n2_5_1_1.jpg',
            'Apple’s iconic AirPods are one of the most post popular non-noise-cancelling headphones by designers',
            1200,
            'Sounds',
            4.6,
            false,
            false
        ),
        new Product(
            'p8',
            '1MORE EarPhones',
            'https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/1/m/1more_triple_driver_in-ear_headphone11_-_tejar.jpg',
            'The newcomer is rated as the best in-Ear Earphones in 2019 by multiple media',
            1500,
            'Sounds',
            4.6,
            false,
            false
        ),

 
        new Product(
            'p9',
            'Dell XPS 13',
            'https://laptopmart.pk/wp-content/uploads/2020/09/Dell-XPS-13-9300-2020.jpg',
            'CPU: Intel Core i5-1065G7 | GPU: Intel Iris Plus | RAM: 16GB | Storage: 512GB M.2 NVMe SSD | Display: 13.4-inch, 1200 | Size: 11.6 x 7.8 x 0.6 inches | Weight: 2.8 pounds',
            1600,
            'Laptops',
            4.6,
            true,
            true
        ),
        new Product(
            'p10',
            'MacBook Pro (16-inch, 2019)',
            'https://www.tejar.pk/media/catalog/product/cache/3/image/500x/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_16-inch_macbook_pro_2019_1_-_tejar.jpg',
            'CPU: Intel Core i9 | GPU: AMD Radeon Pro 5500M | RAM: 32GB | Storage: 512GB SSD | Display: 16-inch, 1920p | Size: 14.1 x 9.7 x 0.6 inches | Weight: 4.3 pounds',
            6700,
            'Laptops',
            4.6,
            false,
            true
        ),
        new Product(
            'p11',
            'Acer Chromebook',
            'https://laptopmart.pk/wp-content/uploads/2020/09/Lenovo-Yoga-C940-15IRH-2.jpg',
            'CPU: Intel Core i5-10210U | GPU: Intel UHD Graphics | RAM: 8GB | Storage: 128GB SSD | Display: 13.5 inches, 1504p | Size: 11.8 x 9.3 x 0.7 inches | Weight: 3 pounds',
            1200,
            'Laptops',
            4.6,
            true,
            false
        ),
        new Product(
            'p12',
            'Asus ZenBook 13',
            'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ZenBook_13_UX334FL/ASUS_ZenBook_13_UX334FL_L_1.jpg',
            'CPU: Intel Core i7-1165G7 | GPU: Intel Iris Xe Graphics | RAM: 16GB | Storage: 1TB M.2 PCI 3.0 SSD | Display: 13.3-inch, 1080p | Size: 11.9 x 8 x 0.5 inches | Weight: 2.5 pounds',
            1500,
            'Laptops',
            4.6,
            false,
            false
        )
    ,

  
        new Product(
            'p13',
            'Samsung Galaxy S20 Ultra',
            'https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Ultra.jpg',
            'Samsung has packed its most advanced camera ever into this flagship phone',
            1600,
            'Mobiles',
            4.6,
            true,
            false
        ),
        new Product(
            'p14',
            'Huawei P40 Pro',
            'https://www.gizmochina.com/wp-content/uploads/2020/03/Huawei-P40-Pro-Premium-500x500.jpg',
            'The Huawei P40 Pro is looking to deliver a superb mobile photography experience.',
            6700,
            'Mobiles',
            4.6,
            false,
            true
        ),
        new Product(
            'p15',
            'Samsung Galaxy S20 Plus',
            'https://image-us.samsung.com/us/smartphones/galaxy-s20/v1/camera/images/galaxy-s20_camera_key-visual_s.jpg',
            'The 6.7-inch Samsung Galaxy S20 Plus is an Android phone that has almost everything in the top-line',
            1200,
            'Mobiles',
            4.6,
            false,
            false
        ),
        new Product(
            'p16',
            'Oppo Reno 3 Pro',
            'https://www.gizmochina.com/wp-content/uploads/2019/12/Oppo-Reno-3-Pro-5G-500x500.jpg',
            'On the surface, the Oppo Reno 3 looks a lot like your modern flagship phone, with a shiny, eye-catching design',
            1500,
            'Mobiles',
            5,
            true,
            true

        )
  ,
        new Product(
            'p17',
            'Nikon Z6',
            'https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/n/i/nikon_z6_mirrorless_digital_camera_with_nikkor_z_24-70mm_f_4_s_lens.jpg',
            'Type: Mirrorless | Sensor size: Full-frame CMOS | Resolution: 24.5MP | Lens: Nikon Z mount | Viewfinder: EVF | Screen type: 3.2-inch tilting touchscreen, 2,100,000 dots | Maximum continuous shooting speed: 12fps | Movies: 4K | User level: Intermediate/expert',
            1600,
            'Cameras',
            4.6,
            true,
            true
        ),
        new Product(
            'p18',
            'Fujifilm X-T4',
            'https://images-na.ssl-images-amazon.com/images/I/41d3qPMGVHL._AC_.jpg',
            'Sensor size: APS-C | Resolution: 26.1MP | Viewfinder: 3,690K dots | Monitor: 3.0-inch tilt-angle touchscreen, 1,620K dots | Autofocus: 425-point AF | Maximum continuous shooting rate: 15fps (mechanical shutter), 30fps (electronic) | Movies: 4K at 60p | User level: Intermediate',
            6700,
            'Cameras',
            4.6,
            false,
            false
        ),
        new Product(
            'p19',
            'Canon EOS R6',
            'https://static.bhphoto.com/images/images2500x2500/1594281159_1547010.jpg',
            'Sensor size: Full-frame | Resolution: 20.1MP | Viewfinder: 3,690K dots | Monitor: 3.0-inch tilt-angle touchscreen, 1,620K dots | Autofocus: 6,072-point AF | Maximum continuous shooting rate: 12fps (mechanical shutter), 20fps (electronic) | Movies: 4K at 60p | User level: Professional',
            1200,
            'Cameras',
            4.6,
            false,
            false
        ),
        new Product(
            'p20',
            'Sony A7 III',
            'https://static.bhphoto.com/images/images2500x2500/1519677934_1394219.jpg',
            'Sensor size: Full-frame | Resolution: 24.2MP | Viewfinder: 2,359K dots | Monitor: 3.0-inch tilt-angle touchscreen, 921K dots | Autofocus: 693-point AF | Maximum continuous shooting rate: 10fps | Movies: 4K at 30p | User level: Intermediate/expert',
            1500,
            'Cameras',
            4.6,
            false,
            false
        )
    ]





export default PRODUCTS;