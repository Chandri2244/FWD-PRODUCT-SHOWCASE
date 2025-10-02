const PRODUCTS = {
    'men-tshirts': [
        { id: 1, title: 'Classic Cotton T-Shirt', description: 'Comfortable cotton t-shirt for everyday wear', price: 499, discount: 20, image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5, reviews: 120, category: 'men-tshirts' },
        { id: 2, title: 'V-Neck T-Shirt', description: 'Stylish v-neck t-shirt in premium fabric', price: 599, discount: 15, image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.3, reviews: 85, category: 'men-tshirts' },
        { id: 3, title: 'Graphic Print T-Shirt', description: 'Trendy graphic print t-shirt', price: 699, discount: 25, image: 'https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7, reviews: 200, category: 'men-tshirts' },
        { id: 4, title: 'Polo T-Shirt', description: 'Classic polo t-shirt for casual occasions', price: 899, discount: 10, image: 'https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6, reviews: 150, category: 'men-tshirts' },
        { id: 5, title: 'Round Neck T-Shirt', description: 'Basic round neck t-shirt in multiple colors', price: 449, discount: 30, image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.4, reviews: 95, category: 'men-tshirts' },
        { id: 6, title: 'Striped T-Shirt', description: 'Casual striped t-shirt for men', price: 699, discount: 20, image: 'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5, reviews: 110, category: 'men-tshirts' },
        { id: 7, title: 'Henley T-Shirt', description: 'Trendy henley style t-shirt', price: 799, discount: 15, image: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.2, reviews: 75, category: 'men-tshirts' },
        { id: 8, title: 'Long Sleeve T-Shirt', description: 'Comfortable long sleeve t-shirt', price: 849, discount: 20, image: 'https://images.pexels.com/photos/2897521/pexels-photo-2897521.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6, reviews: 130, category: 'men-tshirts' },
        { id: 9, title: 'Premium Cotton T-Shirt', description: 'High quality premium cotton t-shirt', price: 999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKvR6EUQxqGeY3gD4yw9ns2MBRxKcFszyHQ&s', rating: 4.8, reviews: 180, category: 'men-tshirts' },
        { id: 10, title: 'Printed T-Shirt', description: 'Unique printed design t-shirt', price: 699, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGexqyitRe2sK9UWkjS7hFZcod2APv7lBGHA&s', rating: 4.4, reviews: 100, category: 'men-tshirts' }
    ],
    'men-jeans': [
        { id: 11, title: 'Slim Fit Jeans', description: 'Modern slim fit jeans in dark blue', price: 1499, discount: 25, image: 'https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6, reviews: 210, category: 'men-jeans' },
        { id: 12, title: 'Regular Fit Jeans', description: 'Comfortable regular fit jeans', price: 1299, discount: 20, image: 'https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5, reviews: 180, category: 'men-jeans' },
        { id: 13, title: 'Skinny Jeans', description: 'Trendy skinny fit jeans', price: 1699, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xv1wh-YRku8-nOGSYgyyc7a6NTWtC67MoQ&s', rating: 4.4, reviews: 150, category: 'men-jeans' },
        { id: 14, title: 'Straight Fit Jeans', description: 'Classic straight fit jeans', price: 1399, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtkJBHEqwYUkAP7tS9C-jVKsyll5WMO9D7w&s', rating: 4.7, reviews: 195, category: 'men-jeans' },
        { id: 15, title: 'Relaxed Fit Jeans', description: 'Comfortable relaxed fit jeans', price: 1299, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIwLhdv-mPtHWiXiLSEU_21UzctSfCdLA_w&s', rating: 4.5, reviews: 165, category: 'men-jeans' },
        { id: 16, title: 'Distressed Jeans', description: 'Stylish distressed denim jeans', price: 1899, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBCOU0ovAFgkEkO9QfM-UVU_ZU4eq905LZA&s', rating: 4.6, reviews: 175, category: 'men-jeans' },
        { id: 17, title: 'Black Jeans', description: 'Classic black denim jeans', price: 1599, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtmV2UhR7X-MJu64Dq8zt9LjWHer0p3gtXA&s', rating: 4.8, reviews: 220, category: 'men-jeans' },
        { id: 18, title: 'Light Blue Jeans', description: 'Casual light blue jeans', price: 1399, discount: 20, image: 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.4, reviews: 140, category: 'men-jeans' },
        { id: 19, title: 'Jogger Jeans', description: 'Modern jogger style jeans', price: 1799, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WNOK_X271PGmiS3Cn0fJBWQH6GRrmqKACw&s', rating: 4.5, reviews: 160, category: 'men-jeans' },
        { id: 20, title: 'Stretch Jeans', description: 'Comfortable stretch denim jeans', price: 1699, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHI0iFnl3ClkDytM4pV7ozlkRW7v7rDq8WPg&s', rating: 4.7, reviews: 185, category: 'men-jeans' }
    ],
    'men-formal': [
        { id: 21, title: 'White Formal Shirt', description: 'Classic white formal shirt', price: 1199, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcLPM6IdrQwqcnZo5b5eYDSL1BXqvUKkhZA&s', rating: 4.7, reviews: 190, category: 'men-formal' },
        { id: 22, title: 'Blue Formal Shirt', description: 'Professional blue formal shirt', price: 1299, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSny_a9qxZch6o8uQsvkRgKzax8xcPN7jeWrQ&s', rating: 4.6, reviews: 175, category: 'men-formal' },
        { id: 23, title: 'Black Formal Shirt', description: 'Elegant black formal shirt', price: 1399, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxSlYdLaSXWUAP0akfM5gr7ccea8sYBGSIA&s', rating: 4.5, reviews: 160, category: 'men-formal' },
        { id: 26, title: 'Checked Formal Shirt', description: 'Classic checked formal shirt', price: 1349, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jMVeW43yOjTfLvxnm3yfG3hJSYcuUbTxng&s', rating: 4.6, reviews: 170, category: 'men-formal' },
        { id: 27, title: 'Grey Formal Shirt', description: 'Sophisticated grey formal shirt', price: 1299, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZSIdAmfFeko_pwvP1MgP6JFOPfDxfgRHTg&s', rating: 4.5, reviews: 155, category: 'men-formal' },
        { id: 28, title: 'Slim Fit Formal Shirt', description: 'Modern slim fit formal shirt', price: 1449, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsQ3In5qXW8pkSPLUxTEEy5TEKnBMjgIa4g&s', rating: 4.7, reviews: 180, category: 'men-formal' },
        { id: 29, title: 'Cotton Formal Shirt', description: 'Premium cotton formal shirt', price: 1599, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYydAsyF8vP4vlLEEzSLjBRiTyYW8gUbF0lw&s', rating: 4.8, reviews: 195, category: 'men-formal' },
        { id: 30, title: 'Printed Formal Shirt', description: 'Unique printed formal shirt', price: 1399, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXB4VDlyIonhnU66rmMA8VQEVN3ygl-xGZvQ&s', rating: 4.4, reviews: 150, category: 'men-formal' }
    ],
    'women-ethnic': [
        { id: 31, title: 'Silk Saree', description: 'Traditional silk saree with elegant design', price: 2999, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSvtSSrJRky-9V11CY46i8UsDBrwF5Lnc5Q&s', rating: 4.8, reviews: 250, category: 'women-ethnic' },
        { id: 32, title: 'Cotton Kurti', description: 'Comfortable cotton kurti for daily wear', price: 899, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesEG1kN4RPPZaRNGFVihWzS8pgg7G72Yj4Q&s', rating: 4.6, reviews: 180, category: 'women-ethnic' },
        { id: 33, title: 'Anarkali Suit', description: 'Beautiful anarkali suit with embroidery', price: 2499, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5h1n_o57GJK0DljUy5KpRIVDivbUitns8w&s', rating: 4.7, reviews: 200, category: 'women-ethnic' },
        { id: 34, title: 'Lehenga Choli', description: 'Festive lehenga choli set', price: 3999, discount: 35, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIljHew-Ayw9CdXn6t6LrCyU-cArgQmktufQ&s', rating: 4.9, reviews: 280, category: 'women-ethnic' },
        { id: 35, title: 'Salwar Kameez', description: 'Classic salwar kameez set', price: 1899, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknnFrEVR0h0CVup12ZSPe5M71ViB33bvBHA&s', rating: 4.5, reviews: 165, category: 'women-ethnic' },
        { id: 36, title: 'Palazzo Set', description: 'Trendy palazzo with kurti set', price: 1599, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZbBOtbQxK_NUatqifnMwD-7x3elTldZRZQ&s', rating: 4.6, reviews: 175, category: 'women-ethnic' },
        { id: 37, title: 'Churidar Suit', description: 'Elegant churidar suit', price: 1799, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuavKyBvokApOlM9YSxgnFzg0DIONYiNifJw&s', rating: 4.4, reviews: 150, category: 'women-ethnic' },
        { id: 38, title: 'Printed Kurti', description: 'Stylish printed kurti', price: 999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWkruPIh_wqkfXCfB_SAtzoxr7LInFgo1AA&s', rating: 4.5, reviews: 160, category: 'women-ethnic' },
        { id: 39, title: 'Designer Saree', description: 'Premium designer saree', price: 4999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SBksPJubi7WSJeoAsseZS4tqrdnVXn1oMQ&s', rating: 4.8, reviews: 220, category: 'women-ethnic' },
        { id: 40, title: 'Embroidered Kurti', description: 'Beautiful embroidered kurti', price: 1299, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoOxgFNo3gnnJAWNMLxRDIW__Ye-zcCgZRw&s', rating: 4.7, reviews: 185, category: 'women-ethnic' }
    ],
    'women-western': [
        { id: 41, title: 'Denim Jacket', description: 'Classic denim jacket for women', price: 1999, discount: 25, image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500', rating: 4.6, reviews: 190, category: 'women-western' },
        { id: 42, title: 'Maxi Dress', description: 'Elegant maxi dress for evening wear', price: 1799, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLMduB8pUcGQusFnO9kHBLg_so26enCAo0g&s', rating: 4.7, reviews: 200, category: 'women-western' },
        { id: 43, title: 'Crop Top', description: 'Trendy crop top in various colors', price: 699, discount: 20, image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.4, reviews: 150, category: 'women-western' },
        { id: 44, title: 'Palazzo Pants', description: 'Comfortable palazzo pants', price: 999, discount: 25, image: 'https://m.media-amazon.com/images/I/81xnMa95gsL._UY1100_.jpg', rating: 4.5, reviews: 165, category: 'women-western' },
        { id: 45, title: 'A-Line Dress', description: 'Stylish a-line dress', price: 1499, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkarq5T5jYUI4DPOaArKPNEhUUnmlmPOjxaw&s', rating: 4.6, reviews: 175, category: 'women-western' },
        { id: 46, title: 'Jumpsuit', description: 'Modern jumpsuit for women', price: 2199, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLJf2P0hs5_oljXU9UfyX3TdjXlDZHsDIyQ&s', rating: 4.7, reviews: 185, category: 'women-western' },
        { id: 47, title: 'Blazer', description: 'Professional blazer for women', price: 2499, discount: 25, image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8, reviews: 195, category: 'women-western' },
        { id: 48, title: 'Skinny Jeans', description: 'Stylish skinny jeans for women', price: 1699, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOo8-JESgZz_aqyNrnWv_fDKJ3l4yyW8LP1A&s', rating: 4.5, reviews: 170, category: 'women-western' },
        { id: 49, title: 'T-Shirt Dress', description: 'Casual t-shirt dress', price: 899, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzol9CaaTHIZ3mjOGzf92CHUMGGyZS8vnfzQ&s', rating: 4.4, reviews: 155, category: 'women-western' },
        { id: 50, title: 'Skater Skirt', description: 'Cute skater skirt', price: 799, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCSnuiWNkU7zrv8EbqFZk_paoIeXdUAHxTw&s', rating: 4.6, reviews: 160, category: 'women-western' }
    ],
    'handbags': [
        { id: 51, title: 'Leather Handbag', description: 'Premium leather handbag', price: 2499, discount: 30, image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7, reviews: 210, category: 'handbags' },
        { id: 52, title: 'Shoulder Bag', description: 'Stylish shoulder bag', price: 1799, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreF6R6sx-xNuEn4VmDgLN6yGvG4Q_Dkb1zg&s', rating: 4.6, reviews: 180, category: 'handbags' },
        { id: 53, title: 'Tote Bag', description: 'Spacious tote bag', price: 1499, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XTT-ePodWTy8NEVxdXkgwavXNZ6vbgwbVA&s', rating: 4.5, reviews: 165, category: 'handbags' },
        { id: 54, title: 'Clutch Bag', description: 'Elegant clutch bag', price: 999, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8i4cvXWO1xQRT2SNR3ouNvo6an-EE_9kpQw&s', rating: 4.8, reviews: 195, category: 'handbags' },
        { id: 55, title: 'Crossbody Bag', description: 'Trendy crossbody bag', price: 1299, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynfyIWC1Me05A9aox-5J-QH2u5xvE8nS8_g&s', rating: 4.6, reviews: 175, category: 'handbags' },
        { id: 56, title: 'Satchel Bag', description: 'Classic satchel bag', price: 2199, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMR5axhx8xycWPl7X4lAr80LCmVP7QE2Jomg&s', rating: 4.7, reviews: 185, category: 'handbags' },
        { id: 57, title: 'Hobo Bag', description: 'Casual hobo bag', price: 1699, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qDXkG5uPZZLJVxLxTAwm_mBV2bHF_y2W4A&s', rating: 4.5, reviews: 160, category: 'handbags' },
        { id: 58, title: 'Bucket Bag', description: 'Stylish bucket bag', price: 1599, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmeBsVG-dynXVaC9cKAph7_Gpe64ta3eqfQ&s', rating: 4.6, reviews: 170, category: 'handbags' },
    ],
    'jewellery': [
        { id: 61, title: 'Gold Necklace', description: 'Elegant gold necklace', price: 3999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFYxYq3GpX_LvD2kF19N65ebGVLyvtO4nfA&s', rating: 4.8, reviews: 230, category: 'jewellery' },
        { id: 62, title: 'Diamond Earrings', description: 'Stunning diamond earrings', price: 5999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RdNujT_XDfvL-HY8Sgn4Mx7RcfAafak0CA&s', rating: 4.9, reviews: 250, category: 'jewellery' },
        { id: 64, title: 'Pearl Necklace', description: 'Classic pearl necklace', price: 2999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwg9Zst-T3EhrjNdUFpQUrLTALdnPYqLe1Q&s', rating: 4.7, reviews: 195, category: 'jewellery' },
        { id: 65, title: 'Gold Ring', description: 'Elegant gold ring', price: 2499, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3x-c_lutgPhJTCYjdN4YLb_u-krFWNCbzA&s', rating: 4.8, reviews: 205, category: 'jewellery' },
        { id: 67, title: 'Anklet', description: 'Stylish anklet', price: 999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLz7EfFARHYLoZplsce6UQdCCqzv51BPoqsg&s', rating: 4.4, reviews: 155, category: 'jewellery' },
        { id: 68, title: 'Bangles Set', description: 'Traditional bangles set', price: 1499, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxohMRBb_tJXfhRe_29k54KCYy_HeBssRHQ&s', rating: 4.6, reviews: 175, category: 'jewellery' },
        { id: 69, title: 'Choker Necklace', description: 'Trendy choker necklace', price: 1299, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRg5a93aj6Kf5VDgpvla8VhyzCbVLVVSfHA&s', rating: 4.7, reviews: 185, category: 'jewellery' },
        { id: 70, title: 'Jewellery Set', description: 'Complete jewellery set', price: 6999, discount: 35, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnYc1eGNQ7khbehWoM95RlMk68Aw82k0foA&s', rating: 4.9, reviews: 240, category: 'jewellery' }
    ],
    'wallets': [
        { id: 71, title: 'Leather Wallet', description: 'Premium leather wallet', price: 899, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n4vXCDsdYYYYTG4mqILspg_DRnDe5gxO8g&s', rating: 4.6, reviews: 180, category: 'wallets' },
        { id: 72, title: 'Bifold Wallet', description: 'Classic bifold wallet', price: 799, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSiqI0jrYwWO2FDcRYnWn2Z7guBTLG4UhEyw&s', rating: 4.5, reviews: 165, category: 'wallets' },
        { id: 73, title: 'Card Holder', description: 'Slim card holder', price: 599, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79qUqHLUOmpN6xCikKfZbGUfxntw9oFbVhQ&s', rating: 4.4, reviews: 150, category: 'wallets' },
        { id: 74, title: 'Long Wallet', description: 'Spacious long wallet', price: 999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1pDPwYEZ1sJy7HgGma6m1AA55Ekl1yvmDw&s', rating: 4.7, reviews: 185, category: 'wallets' },
        { id: 75, title: 'Money Clip', description: 'Modern money clip wallet', price: 699, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWOwWepDXKYANOiV0xrug45oQF-z9wPst1Q&s', rating: 4.3, reviews: 140, category: 'wallets' },
        { id: 76, title: 'Travel Wallet', description: 'Multi-purpose travel wallet', price: 1199, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahcNynS0tuT6qOMrkHAnLVAveuxcMlyEiow&s', rating: 4.6, reviews: 170, category: 'wallets' },
        { id: 77, title: 'Zipper Wallet', description: 'Secure zipper wallet', price: 899, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9pPmkTfz6IjPPnTyCAeq0CXrzh_V5GXcIQ&s', rating: 4.5, reviews: 160, category: 'wallets' },
        { id: 80, title: 'Designer Wallet', description: 'Luxury designer wallet', price: 1999, discount: 35, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_9ayuWfdRn7zCaFO1eYYVqHUVok1DiTHbg&s', rating: 4.8, reviews: 190, category: 'wallets' }
    ],
    'vivo': [
        { id: 81, title: 'Vivo V29', description: '8GB RAM, 128GB Storage, 50MP Camera', price: 26999, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNOQ9W56sDKtXE4bKw-I1t3z5m8g_M27Iig&s', rating: 4.5, reviews: 320, category: 'vivo' },
        { id: 82, title: 'Vivo Y100', description: '8GB RAM, 256GB Storage, Fast Charging', price: 23999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwyytYVtrZtEoegCPFlN4qK8hSp6-nqUcmQ&s', rating: 4.4, reviews: 280, category: 'vivo' },
        { id: 83, title: 'Vivo V27 Pro', description: '12GB RAM, 256GB Storage, OIS Camera', price: 37999, discount: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJDxxBDGMJUSaxldT84XL-eueEGvqhotWdw&s', rating: 4.7, reviews: 390, category: 'vivo' },
        { id: 84, title: 'Vivo Y27', description: '6GB RAM, 128GB Storage, 5000mAh Battery', price: 15999, discount: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtKqROt7_S3m_yQWnm_nWTXLy63iTyqRq0MQ&s', rating: 4.3, reviews: 250, category: 'vivo' },
        { id: 86, title: 'Vivo Y56', description: '8GB RAM, 128GB Storage, 5G Ready', price: 19999, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_GaWXev_ShuAX5R2MkslQ0zkF9KlWWQ_jQ&s', rating: 4.4, reviews: 270, category: 'vivo' },
        { id: 87, title: 'Vivo X90', description: '12GB RAM, 256GB Storage, Zeiss Camera', price: 59999, discount: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU90DdDxOx6Ow4GN1gjn_1747cw45mEywI-Q&s', rating: 4.8, reviews: 420, category: 'vivo' },
        { id: 89, title: 'Vivo V25 Pro', description: '8GB RAM, 128GB Storage, Color Changing Back', price: 27999, discount: 22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79Z7LGvrufnx_t5JVQ-jJJZTtzrqOkXQS4Q&s', rating: 4.5, reviews: 310, category: 'vivo' },
        { id: 90, title: 'Vivo T2', description: '8GB RAM, 128GB Storage, 120Hz Display', price: 22999, discount: 16, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqISJIxnKpVSb4WEGne05iZdtbb_tt0fCgMQ&s', rating: 4.6, reviews: 290, category: 'vivo' }
    ],
    'iphone': [
        { id: 91, title: 'iPhone 15 Pro Max', description: '256GB, A17 Pro Chip, Titanium Design', price: 159900, discount: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJ4D1byvFO25UayuT7p6u6ux6JOmh35OByg&s', rating: 4.9, reviews: 850, category: 'iphone' },
        { id: 92, title: 'iPhone 15 Pro', description: '128GB, A17 Pro, Action Button', price: 134900, discount: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YQ-XOZxnZ8uH0qnG9_1iYs61Yxko6AuGWg&s', rating: 4.8, reviews: 720, category: 'iphone' },
        { id: 93, title: 'iPhone 15', description: '128GB, A16 Bionic, Dynamic Island', price: 79900, discount: 8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMNfpfq9f2fD1MJ0OpbALw2USngpbrA6Xkw&s', rating: 4.7, reviews: 680, category: 'iphone' },
        { id: 94, title: 'iPhone 14 Pro', description: '256GB, Always-On Display, 48MP Camera', price: 119900, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISYyfegCOfsK1I8JpkOYJcY7B2hepStqHaQ&s', rating: 4.8, reviews: 790, category: 'iphone' },
        { id: 95, title: 'iPhone 14', description: '128GB, A15 Bionic, Dual Camera', price: 69900, discount: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhK5N-OBTkVZP_ndjVUZgSakTs36GFN_xVtw&s', rating: 4.6, reviews: 620, category: 'iphone' },
        { id: 96, title: 'iPhone 13', description: '128GB, A15 Bionic, 5G', price: 59900, discount: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQK2mql6L13y8bHZplTZCuvaa1rtpQhqrv1A&s', rating: 4.5, reviews: 580, category: 'iphone' },
        { id: 97, title: 'iPhone SE', description: '64GB, A15 Bionic, Compact Design', price: 47900, discount: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRdF8xDM3oV6ADHioOFWzqGUFRQtGNKJ59Q&s', rating: 4.4, reviews: 450, category: 'iphone' },
        { id: 99, title: 'iPhone 14 Plus', description: '128GB, A15 Bionic, Big Battery', price: 79900, discount: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4fRceYaN-fx86whhoXFHLRiziURVVZ_5mw&s', rating: 4.6, reviews: 590, category: 'iphone' },
    ],
    'pixel': [
        { id: 101, title: 'Google Pixel 8 Pro', description: '12GB RAM, 256GB, Tensor G3', price: 106999, discount: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRo1oZLx7NsHegPqs079YjRzFvVkPibRaE4g&s', rating: 4.7, reviews: 480, category: 'pixel' },
        { id: 102, title: 'Google Pixel 8', description: '8GB RAM, 128GB, Magic Eraser', price: 75999, discount: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTLcH9EqpPoYz_2xZSCAwusNnCGipUEiDkw&s', rating: 4.6, reviews: 420, category: 'pixel' },
        { id: 103, title: 'Google Pixel 7 Pro', description: '12GB RAM, 256GB, Pro Camera', price: 84999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR911wzgfeGUvci8qlFAq0jxvG3kHK5FP2PDw&s', rating: 4.6, reviews: 510, category: 'pixel' },
        { id: 104, title: 'Google Pixel 7', description: '8GB RAM, 128GB, Pure Android', price: 59999, discount: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zWvEN2W9pv5entsHPBMZBkCUPx_lc0p_cg&s', rating: 4.5, reviews: 450, category: 'pixel' },
        { id: 105, title: 'Google Pixel 7a', description: '8GB RAM, 128GB, Best Value', price: 43999, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2p9jo5GIUgO-3TQjKipixu2Dys2UvQkno3A&s', rating: 4.7, reviews: 520, category: 'pixel' },
        { id: 106, title: 'Google Pixel Fold', description: 'Foldable, 12GB RAM, 256GB', price: 179999, discount: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffRZJM4zdcs86cwl9rntvckzlhz3U2WcGUQ&s', rating: 4.5, reviews: 280, category: 'pixel' },
        { id: 107, title: 'Google Pixel 6 Pro', description: '12GB RAM, 128GB, Tensor', price: 64999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OuztpZ-VzBLr1hnTOj1wZoGASQDgovtowA&s', rating: 4.4, reviews: 490, category: 'pixel' },
        { id: 109, title: 'Google Pixel 8a', description: '8GB RAM, 128GB, Latest Budget', price: 52999, discount: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqSh3R9WJGCK_z8x233-ARJb_tIBCScCaCQ&s', rating: 4.7, reviews: 380, category: 'pixel' },
    ],
    'laptops': [
        { id: 121, title: 'Dell Inspiron 15', description: 'Intel i5, 8GB RAM, 512GB SSD', price: 54999, discount: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujm_qNoAHGkwPriOB8jnwOsRVURkTz5xi2Q&s', rating: 4.5, reviews: 420, category: 'laptops' },
        { id: 122, title: 'HP Pavilion', description: 'Intel i7, 16GB RAM, 1TB SSD', price: 74999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2fTOX3qHRDV0xqO7tr2KCVFxwTNOVsOOzA&s', rating: 4.6, reviews: 380, category: 'laptops' },
        { id: 123, title: 'Lenovo IdeaPad', description: 'AMD Ryzen 5, 8GB RAM, 512GB SSD', price: 48999, discount: 22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTTwtnDK8izRmD-OvxgGZtyeetlrjgqT8Jw&s', rating: 4.4, reviews: 350, category: 'laptops' },
        { id: 124, title: 'ASUS VivoBook', description: 'Intel i5, 8GB RAM, 512GB SSD', price: 52999, discount: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfelIWKJU-stON8asmbwCRPwFhHPZ9JOm_g&s', rating: 4.5, reviews: 390, category: 'laptops' },
        { id: 126, title: 'MacBook Air M2', description: 'Apple M2, 8GB RAM, 256GB SSD', price: 114900, discount: 8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCxsS1y7kb3n5McJYDSuKyM44igdTyYUKnw&s', rating: 4.9, reviews: 650, category: 'laptops' },
        { id: 128, title: 'Dell XPS 13', description: 'Intel i7, 16GB RAM, 512GB SSD', price: 124999, discount: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qBW_XuCdWdSFpScb_sqJ9YA1iGV0tdfbRQ&s', rating: 4.8, reviews: 450, category: 'laptops' },
        { id: 129, title: 'HP Envy', description: 'Intel i7, 16GB RAM, 1TB SSD', price: 89999, discount: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbFGC2SrbPj_6EziWVJurbArti8unW2Is5g&s', rating: 4.6, reviews: 410, category: 'laptops' },
        { id: 130, title: 'Lenovo ThinkPad', description: 'Intel i5, 8GB RAM, 256GB SSD', price: 59999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4Hky6zAXN2UkSKZTabmY1nMm4mSwU0rHNQ&s', rating: 4.7, reviews: 480, category: 'laptops' }
    ],
    'tv': [
        { id: 131, title: 'Samsung 55" 4K TV', description: 'Crystal UHD, Smart TV, HDR', price: 54999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hFmh5MgbZCe6if_yFqje88ZA9BzAKbrqHQ&s', rating: 4.6, reviews: 520, category: 'tv' },
        { id: 133, title: 'Sony Bravia 65" OLED', description: '4K OLED, Android TV, Dolby Vision', price: 164999, discount: 15, image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9, reviews: 680, category: 'tv' },
        { id: 135, title: 'OnePlus 50" 4K TV', description: 'QLED, Android TV, Dolby Atmos', price: 44999, discount: 22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpxAElK9tT7GYHd2EQNX55Iwmm54J4yHq-Q&s', rating: 4.5, reviews: 490, category: 'tv' },
        { id: 136, title: 'TCL 55" QLED', description: '4K QLED, Google TV, HDR10+', price: 49999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSMqkEMQ8yxGi95NV4nbUJVHi4Y_8Pkt9ZA&s', rating: 4.4, reviews: 420, category: 'tv' },
        { id: 137, title: 'Samsung 75" Neo QLED', description: '8K, Neo QLED, Object Tracking Sound', price: 274999, discount: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTzd-ukuvY2jENHB95iYfMtj22EwOb1FLaw&s', rating: 4.8, reviews: 380, category: 'tv' },
        { id: 138, title: 'LG 55" OLED', description: '4K OLED, α9 AI Processor, Dolby Vision', price: 124999, discount: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfbwwcqY1U1HvjQ0DvhSL_SbHvK9a3Nz9qA&s', rating: 4.8, reviews: 540, category: 'tv' },
        { id: 139, title: 'Hisense 43" 4K TV', description: 'Ultra HD, VIDAA OS, HDR', price: 28999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfWRiE3BZ6czzBp5Z1Zlz6A6eT0AJE-tNdA&s', rating: 4.3, reviews: 390, category: 'tv' },
        { id: 140, title: 'Sony 55" 4K TV', description: 'X1 Processor, Triluminos Display, Android TV', price: 74999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYHQWa8zaepanBinPCLg-FWQJfgLNvG2y-g&s', rating: 4.7, reviews: 510, category: 'tv' }
    ],
    'wallarts': [
        { id: 142, title: 'Nature Landscape Print', description: 'Beautiful nature landscape wall art', price: 1999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0pPSZqAnQKbq9MqEgf7sQ49BaH93ZkQEZA&s', rating: 4.6, reviews: 185, category: 'wallarts' },
        { id: 144, title: 'Floral Wall Painting', description: 'Elegant floral canvas art', price: 2199, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3W6z6OFx8QTPDGu_F16MsECH4i0r7wOzdQ&s', rating: 4.7, reviews: 195, category: 'wallarts' },
        { id: 145, title: 'Geometric Wall Art', description: 'Modern geometric pattern art', price: 1799, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQa_XEbwBILquIi88uZOLx5Z7rLB9JhMTgsw&s', rating: 4.5, reviews: 175, category: 'wallarts' },
        { id: 146, title: 'Vintage Poster Print', description: 'Retro vintage wall poster', price: 1299, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Z8WFKeX1AQcMB11VMBxWc0offUuPF_7OLA&s', rating: 4.3, reviews: 155, category: 'wallarts' },
        { id: 147, title: 'City Skyline Art', description: 'Urban city skyline canvas', price: 2799, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmf2BvBgcTFRhbD4I5DbHoMRwdLsRS5UdbQ&s', rating: 4.6, reviews: 190, category: 'wallarts' },
        { id: 148, title: 'Minimalist Wall Art', description: 'Simple minimalist design', price: 1599, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45n3Um0nfZXfQwFPCpmX1YC7UJgv_nBnq1w&s', rating: 4.5, reviews: 170, category: 'wallarts' },
        { id: 149, title: '3D Wall Sculpture', description: 'Modern 3D metal wall art', price: 3999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L5ViUyxR2oM85hfQAiOYL7gb1v952ZEuqQ&s', rating: 4.8, reviews: 220, category: 'wallarts' },
        { id: 150, title: 'World Map Wall Art', description: 'Detailed world map canvas', price: 2299, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FsyUyK9aHTXnmLut4iEP4C1UbRtxGS83bw&s', rating: 4.6, reviews: 200, category: 'wallarts' }
    ],
    'lamps': [
        { id: 151, title: 'LED Table Lamp', description: 'Modern LED desk lamp with USB charging', price: 1499, discount: 25, image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5, reviews: 280, category: 'lamps' },
        { id: 152, title: 'Floor Standing Lamp', description: 'Elegant floor lamp for living room', price: 3999, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-q3rJclqsHSDfW1Dohv4bZ7SwvaSqEH0KQ&s', rating: 4.6, reviews: 240, category: 'lamps' },
        { id: 153, title: 'Bedside Table Lamp', description: 'Compact bedside reading lamp', price: 1299, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMA59bz0-xvw7Dz8yo4Xn3Nid2oYjz2eu2w&s', rating: 4.4, reviews: 210, category: 'lamps' },
        { id: 154, title: 'Smart LED Bulb', description: 'WiFi controlled color changing bulb', price: 999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrRithR1UY2Up7vHfu5-K_AHJ9WMtia0QnQ&s', rating: 4.7, reviews: 320, category: 'lamps' },
        { id: 156, title: 'Wall Sconce', description: 'Modern wall mounted lamp', price: 1799, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMLqIQBJu6E01rbBWkBM8yoV0P2kBD88m1g&s', rating: 4.5, reviews: 220, category: 'lamps' },
        { id: 157, title: 'Pendant Light', description: 'Hanging pendant lamp', price: 2999, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqWe0qVqElgWs7kluEwD5yf9saUmMyct3Vw&s', rating: 4.6, reviews: 250, category: 'lamps' },
        { id: 158, title: 'Study Lamp', description: 'Adjustable study desk lamp', price: 1199, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UmGmsq2iFpJ9VFAw4G5s_3UZ_PmUspJ7Ig&s', rating: 4.4, reviews: 200, category: 'lamps' },
        { id: 159, title: 'Night Light', description: 'Soft glow night lamp', price: 699, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8yRM0lQyiGcx7nbzsEkQET28byd6HuxePw&s', rating: 4.3, reviews: 260, category: 'lamps' },
    ],
    'sunscreen': [
        { id: 161, title: 'SPF 50 Sunscreen', description: 'Broad spectrum sun protection', price: 799, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hVN35AmOoAf4JZEGW8ej8Uo6vIkprcH5aA&s', rating: 4.6, reviews: 420, category: 'sunscreen' },
        { id: 162, title: 'Matte Finish Sunscreen', description: 'Non-greasy matte sunscreen', price: 899, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQpwVGBROrEc9HO6uczha5Q8Yor_wW_bPtw&s', rating: 4.5, reviews: 380, category: 'sunscreen' },
        { id: 165, title: 'Sport Sunscreen', description: 'Water resistant SPF 50+', price: 1099, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6T0tyy3_K7SCH5fEMEzqCa0yz3qpy2EgsAg&s', rating: 4.6, reviews: 360, category: 'sunscreen' },
        { id: 168, title: 'Body Sunscreen Lotion', description: 'Full body sun protection', price: 849, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58aywWVNggZiml7wT2MTq-mB9Gef_2Ewtbg&s', rating: 4.4, reviews: 340, category: 'sunscreen' },
    ],
    'serums': [
        { id: 171, title: 'Vitamin C Serum', description: 'Brightening vitamin C serum', price: 1299, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmiM48zvs8q2AVtLW7a3FNzQIhL4ocx3gsA&s', rating: 4.8, reviews: 520, category: 'serums' },
        { id: 172, title: 'Hyaluronic Acid Serum', description: 'Deep hydration serum', price: 1499, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5k40W7V6WyklFBgdbOOvOJo1WqA1XiIGuQ&s', rating: 4.7, reviews: 480, category: 'serums' },
        { id: 173, title: 'Retinol Serum', description: 'Anti-aging retinol treatment', price: 1799, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt8OBKRQyih69mDIM7tv5JhC4q6qYd1NRKQ&s', rating: 4.9, reviews: 560, category: 'serums' },
        { id: 177, title: 'Collagen Serum', description: 'Plumping collagen booster', price: 1699, discount: 22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2zCQamkQvpJy7sM7w9CaS-zWrDU07W4gNg&s', rating: 4.7, reviews: 450, category: 'serums' },
    ],
    'facewash': [
        { id: 182, title: 'Salicylic Acid Cleanser', description: 'Acne fighting face wash', price: 599, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGj1_01XQZdFj4MgXKdvcmsNRL18UjNN1JA&s', rating: 4.6, reviews: 620, category: 'facewash' },
        { id: 183, title: 'Charcoal Face Wash', description: 'Deep cleansing charcoal wash', price: 499, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfzyBXnwNPyYU8jxzlDj3nkjFgiPzBCkL3w&s', rating: 4.4, reviews: 590, category: 'facewash' },
        { id: 184, title: 'Foaming Face Wash', description: 'Rich foaming cleanser', price: 449, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDnv-h7i0CfEbQwuqEWk96v9fkCcbmrykFw&s', rating: 4.5, reviews: 650, category: 'facewash' },
        { id: 187, title: 'Cream Face Wash', description: 'Moisturizing cream cleanser', price: 599, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCDMTwCiZOFaBc-96C4cETucKxhbWV0HYDw&s', rating: 4.7, reviews: 640, category: 'facewash' },
    ],
    'bodywash': [
        { id: 192, title: 'Shower Gel', description: 'Refreshing shower gel', price: 449, discount: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBsXwjLVj_99L4RQUiPJSx90ik0SJDTZbog&s', rating: 4.4, reviews: 510, category: 'bodywash' },
        { id: 193, title: 'Exfoliating Body Scrub', description: 'Deep cleansing body scrub', price: 699, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1GqEm2uIkK453txsFtA7whluGI8yYz6CtQ&s', rating: 4.6, reviews: 580, category: 'bodywash' },
        { id: 194, title: 'Coconut Body Wash', description: 'Tropical coconut cleanser', price: 549, discount: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbE4C5uEm2WOPoq3zKECQeTtzzvF2UJnRMMw&s', rating: 4.7, reviews: 560, category: 'bodywash' },
        { id: 196, title: 'Vitamin E Body Wash', description: 'Nourishing vitamin E cleanser', price: 649, discount: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J84i0oshSDidTBeEiu_hk6GbeiV29vQTTA&s', rating: 4.6, reviews: 550, category: 'bodywash' },
    ]
};
function getAllProducts() {
    const allProducts = [];
    for (const category in PRODUCTS) {
        allProducts.push(...PRODUCTS[category]);
    }
    return allProducts;
}
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}
function register(username, email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.username === username)) {
        return false;
    }
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}
function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({ username: user.username, email: user.email }));
        updateNavbar();
        return true;
    }
    return false;
}
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
function updateNavbar() {
    const user = getCurrentUser();
    const usernameDisplay = document.getElementById('usernameDisplay');
    const displayUsername = document.getElementById('displayUsername');
    const authButtons = document.getElementById('authButtons');
    const logoutButton = document.getElementById('logoutButton');
    if (user) {
        if (usernameDisplay && displayUsername) {
            usernameDisplay.style.display = 'block';
            displayUsername.textContent = user.username;
        }
        if (authButtons) authButtons.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'block';
    } else {
        if (usernameDisplay) usernameDisplay.style.display = 'none';
        if (authButtons) authButtons.style.display = 'block';
        if (logoutButton) logoutButton.style.display = 'none';
    }
    updateCounts();
}
function updateCounts() {
    const cart = getCart();
    const wishlist = getWishlist();
    const orders = getOrders();
    const cartCount = document.getElementById('cartCount');
    const wishlistCount = document.getElementById('wishlistCount');
    const ordersCount = document.getElementById('ordersCount');
    if (cartCount) cartCount.textContent = cart.length;
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
    if (ordersCount) ordersCount.textContent = orders.length;
}
function getCart() {
    const user = getCurrentUser();
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`cart_${user.username}`) || '[]');
}
function addToCart(product) {
    const user = getCurrentUser();
    if (!user) {
        alert('Please login to add items to cart');
        window.location.href = 'login.html';
        return;
    }
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem(`cart_${user.username}`, JSON.stringify(cart));
    updateCounts();
    alert('Product added to cart!');
}
function updateCart(productId, quantity) {
    const user = getCurrentUser();
    if (!user) return;
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        localStorage.setItem(`cart_${user.username}`, JSON.stringify(cart));
        updateCounts();
    }
}
function removeFromCart(productId) {
    const user = getCurrentUser();
    if (!user) return;
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem(`cart_${user.username}`, JSON.stringify(cart));

    if (typeof displayCart === 'function') {
        displayCart();
    }
    updateCounts();
}
function clearCart() {
    const user = getCurrentUser();
    if (!user) return;

    localStorage.setItem(`cart_${user.username}`, JSON.stringify([]));
    updateCounts();
}
function getWishlist() {
    const user = getCurrentUser();
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`wishlist_${user.username}`) || '[]');
}
function addToWishlist(product) {
    const user = getCurrentUser();
    if (!user) {
        alert('Please login to add items to wishlist');
        window.location.href = 'login.html';
        return;
    }
    const wishlist = getWishlist();
    if (wishlist.find(item => item.id === product.id)) {
        alert('Product already in wishlist!');
        return;
    }
    wishlist.push(product);
    localStorage.setItem(`wishlist_${user.username}`, JSON.stringify(wishlist));
    updateCounts();
    alert('Product added to wishlist!');
}
function removeFromWishlist(productId) {
    const user = getCurrentUser();
    if (!user) return;
    let wishlist = getWishlist();
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem(`wishlist_${user.username}`, JSON.stringify(wishlist));
    if (typeof displayWishlist === 'function') {
        displayWishlist();
    }
    updateCounts();
}
function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
}
function getOrders() {
    const user = getCurrentUser();
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`orders_${user.username}`) || '[]');
}
function saveOrder(order) {
    const user = getCurrentUser();
    if (!user) return;
    const orders = getOrders();
    orders.unshift(order);
    localStorage.setItem(`orders_${user.username}`, JSON.stringify(orders));
    updateCounts();
}
function getAddresses() {
    const user = getCurrentUser();
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`addresses_${user.username}`) || '[]');
}
function saveAddress(address) {
    const user = getCurrentUser();
    if (!user) return;
    let addresses = getAddresses();
    const existingIndex = addresses.findIndex(a => a.id == address.id);
    if (existingIndex >= 0) {
        addresses[existingIndex] = address;
    } else {
        addresses.push(address);
    }
    localStorage.setItem(`addresses_${user.username}`, JSON.stringify(addresses));
}
function removeAddress(addressId) {
    const user = getCurrentUser();
    if (!user) return;
    let addresses = getAddresses();
    addresses = addresses.filter(a => a.id != addressId);
    localStorage.setItem(`addresses_${user.username}`, JSON.stringify(addresses));
}
function getReviews(productId) {
    const reviewsKey = `reviews_${productId}`;
    return JSON.parse(localStorage.getItem(reviewsKey) || '[]');
}
function saveReview(review) {
    const reviewsKey = `reviews_${review.productId}`;
    const reviews = getReviews(review.productId);
    reviews.push(review);
    localStorage.setItem(reviewsKey, JSON.stringify(reviews));
}
function loadProducts(category) {
    const container = document.getElementById('productsContainer');
    const products = PRODUCTS[category] || [];
    if (products.length === 0) {
        container.innerHTML = '<p class="text-muted">No products available</p>';
        return;
    }
    container.innerHTML = products.map(product => `
        <div class="col-md-3">
            <div class="card product-card h-100">
                <div class="position-relative">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    ${product.discount > 0 ? `<span class="discount-badge">${product.discount}% OFF</span>` : ''}
                    <button class="btn-wishlist ${isInWishlist(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)">
                        <i class="bi ${isInWishlist(product.id) ? 'bi-heart-fill' : 'bi-heart'}"></i>
                    </button>
                </div>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title">${product.title}</h6>
                    <p class="card-text text-muted">${product.description}</p>
                    <div class="mb-2">
                        <span class="text-warning rating-stars">
                            ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                        </span>
                        <small class="text-muted">(${product.reviews})</small>
                    </div>
                    <div class="mb-3">
                        <span class="fw-bold fs-5">₹${product.price}</span>
                        ${product.discount > 0 ? `<span class="text-muted text-decoration-line-through ms-2">₹${Math.round(product.price / (1 - product.discount / 100))}</span>` : ''}
                    </div>
                    <div class="mt-auto">
                        <button class="btn btn-primary btn-sm w-100 mb-2" onclick='buyNow(${JSON.stringify(product)})'>
                            <i class="bi bi-cart-check"></i> Buy Now
                        </button>
                        <button class="btn btn-outline-primary btn-sm w-100" onclick='addToCart(${JSON.stringify(product)})'>
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}
function toggleWishlist(productId, event) {
    event.stopPropagation();
    if (!isLoggedIn()) {
        alert('Please login to use wishlist');
        window.location.href = 'login.html';
        return;
    }
    const allProducts = getAllProducts();
    const product = allProducts.find(p => p.id === productId);
    if (isInWishlist(productId)) {
        removeFromWishlist(productId);
        event.target.closest('.btn-wishlist').classList.remove('active');
        event.target.classList.remove('bi-heart-fill');
        event.target.classList.add('bi-heart');
    } else {
        addToWishlist(product);
        event.target.closest('.btn-wishlist').classList.add('active');
        event.target.classList.remove('bi-heart');
        event.target.classList.add('bi-heart-fill');
    }
}
function buyNow(product) {
    if (!isLoggedIn()) {
        alert('Please login to buy products');
        window.location.href = 'login.html';
        return;
    }
    clearCart();
    addToCart(product);
    window.location.href = 'payments.html';
}
if (document.getElementById('searchForm')) {
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const query = document.getElementById('searchInput').value.toLowerCase();
        if (!query) return;
        const allProducts = getAllProducts();
        const results = allProducts.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
        if (results.length === 0) {
            alert('No products found');
            return;
        }
        localStorage.setItem('searchResults', JSON.stringify(results));
        window.location.href = 'search.html?q=' + encodeURIComponent(query);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    updateNavbar();
});
window.addEventListener('storage', function(e) {
    updateNavbar();
});