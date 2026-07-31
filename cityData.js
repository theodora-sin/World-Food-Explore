export const cityData=[
  {
    name:"Bangkok",
    country:"Thailand",
    lat:13.806424,
    lng:100.448832,
    cuisines:[{
      type: "Thai",
      dish_name:"Pad Thai",
      course:"main",
      photoURL:"images/pad_thai.jpg",
      description:"Stir-fried rice noodles with egg, fresh mung bean sprouts, chopped scallions or garlic chives, tamarind, cubed firm tofu.",
      recommendations:[
        {
          name:"Thipsamai",
          priceRange:"$$",
          address:"313, 315 Maha Chai Rd, Samran Rat, Phra Nakhon, Bangkok 10200, Thailand",
          link:"https://www.google.com/maps/place/Thipsamai+Padthai+Pratoopee/@13.7554233,100.4028562,11z/data=!4m15!1m8!3m7!1s0x30e2991678561141:0x8549dd651a717306!2s313+Maha+Chai+Rd,+Khwaeng+Samran+Rat,+Khet+Phra+Nakhon,+Krung+Thep+Maha+Nakhon+10200,+Thailand!3b1!8m2!3d13.75275!4d100.5048336!16s%2Fg%2F11snqxdnj_!3m5!1s0x30e2991678584ec5:0x698c069655046fbe!8m2!3d13.7527976!4d100.504823!16s%2Fg%2F1tksf77l?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
        }
      ]
    }]
  },
{
  name:"Da Nang",
  country:"Vietnam",
  lat:16.090693,
  lng:108.409756,
  cuisines:[{
    type:"Vietnamese",
    dish_name:"Bún Chả Cá",
    course:"main",
    photoURL:"images/fishcake.jpg",
    description:"Fish cake soup with seasoned crab mince, round rice noodles and a fragrant broth.",
    recommendations:[{
      name:"Bun Cha Ca Ba Phien",
      priceRange:"$",
      address: "06 Đường Cao Hồng Lãnh, Hội An, Đà Nẵng, Vietnam",
      link:"https://www.google.com/maps/place/B%C3%BAn+Ch%E1%BA%A3+C%C3%A1+B%C3%A0+Phi%E1%BA%BFn/@15.878058,108.312044,13.8z/data=!4m10!1m2!2m1!1sBun+Cha+Ca+Ba+Phien!3m6!1s0x31420e7ce57f5553:0x8dffd5d421e654c!8m2!3d15.8779342!4d108.3228283!15sChNCdW4gQ2hhIENhIEJhIFBoaWVuWhUiE2J1biBjaGEgY2EgYmEgcGhpZW6SARBhc2lhbl9yZXN0YXVyYW50mgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4c1JWWlZWakpXYTNnelQxaG9ibU5yVWtWUFIwNVdZMGhDWVdGSVl4QULgAQD6AQQIABBJ!16s%2Fg%2F11hd1lp12h?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
    }
    ]
  }]
},{
    name:"Hanoi",
    country:"Vietnam",
    lat:21.201840,
    lng:106.376063,
    cuisines:[{
        type:"Vietnamese",
        dish_name:"Bún Chả",
        course:"main",
        photoURL:"images/buncha.jpg",
        description:"Smoky char-grilled pork patties and belly slices served in warm, sweet-savory fish sauce with fresh herbs.",
        recommendations:[{
            name:"Bún chả Hương Liên",
            priceRange:"$$",
            address:"24 P. Lê Văn Hưu, Cửa Nam, Hà Nội, Vietnam",
            link:"https://www.google.com/maps/place/B%C3%BAn+ch%E1%BA%A3+H%C6%B0%C6%A1ng+Li%C3%AAn/@19.9629105,98.9083715,5.67z/data=!4m6!3m5!1s0x3135abf2a4ba685d:0x7e67963f30fa90e7!8m2!3d21.0181373!4d105.8538926!16s%2Fg%2F1hm5x9fjz!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
        }]
    }]
},
{
  name:"Cebu ",
  country:"Phillippines",
  lat:10.296785,
  lng:123.915569,
  cuisines:[{
    type:"Filipino",
    dish_name:"Lechon",
    course:"main",
    photoURL:"images/lechon.jpg",
    description:"A whole pig slowly roasted over charcoal, known for its crunchy skin and soft, juice meat.",
    recommendations:[{
      name:"CNT Lechon",
      priceRange:"$",
      address:"8W59+W36, Jose L Briones Street, Cebu City, 6000 Lalawigan ng Cebu, Philippines",
      link:"https://www.google.com/maps/place/CNT+Lechon+-+SM+Cebu+Across/@10.3097313,123.9176729,13z/data=!4m6!3m5!1s0x33a9996ddc391bfb:0xdbd469bdf299cc16!8m2!3d10.3097778!4d123.9176463!16s%2Fg%2F11hd9r4lnq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
    }]
  }]
},
{
    name:"Manila",
    country:"Phillippines",
    lat:14.582279,
    lng:121.142096,
    cuisines:[{
        type:"Filipino",
        dish_name:"Sinigang",
        course:"main",
        photoURL:"images/sinigang.jpg",
        description:"Tender beef short ribs in a tangy tamarind broth balanced by the sweet, refreshing taste of fresh watermelon chunks.",
        recommendations:[{
            name:"Manam",
            priceRange:"$$",
            address:'SM City Manila, 659 4th St, Ermita, Manila, 1000 Metro Manila, Philippines',
            link:"https://www.google.com/maps/search/Manam/@14.5346084,120.852868,11z/data=!3m1!4b1!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
        }]
    }]
},
{
  name:"Taipei",
  country:"Taiwan",
  lat:25.033968,
  lng:121.568353,
  cuisines:[{
    type:"Taiwanese",
    dish_name:"Lu Rou Fan",
    course:"main",
    photoURL:"images/lurofan.webp",
    description:"Savory braised pork rice with a layer of rich, gelantinous pork belly over steamed rice.",
    recommendations:[{
      name:"Dadaocheng Luroufan",
      priceRange:"$",
      address:"No. 17號, Lane 220, Chang'an W Rd, Jianming Village, Datong District, Taipei City, Taiwan 103",
      link:"https://www.google.com/maps/place/%E5%A4%A7%E7%A8%BB%E5%9F%95%E9%AD%AF%E8%82%89%E9%A3%AF/@25.0503594,121.5140602,18.06z/data=!4m6!3m5!1s0x3442a96d2ecfd72b:0x21c4c5b2853cd189!8m2!3d25.0509665!4d121.5146457!16s%2Fg%2F11dzsx6s59?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
    }]
  }]
},
{
  name:"Hong Kong",
  country:"",
  lat:22.303117,
  lng:114.100703,
  cuisines:[{
    type:"Cantonese",
    dish_name:"Dim Sum",
    course:"brunch",
    photoURL:"images/dimsum.jpg",
    description:"A traditional Chinese style of brunch, featuring small, bite-sized dishes served in bamboo steamer baskets or on small plates alongside with hot tea.",
    recommendations:[{
      name:"Lin Heung Tea House",
      priceRange:"$$",
      address:"Hong Kong, Tsim Sha Tsui, Kimberley Rd, 25號1-2/F",
      link:"https://www.google.com/maps/place/Lin+Heung+Lau.+TST/data=!4m2!3m1!1s0x0:0x8370d6550569649e?sa=X&ved=1t:2428&ictx=111"
    }]
  }]
  },
  {
    name:"Macao",
    country:"",
    lat:22.193716,
    lng:113.538120,
    cuisines:[{
      type:"Portuguese and Macanese",
      dish_name:"Portuguese egg tarts",
      course:"dessert",
      photoURL:"images/portuguese.jpg",
      description:"A pastry featuring a blistered, carmaelized custard filling inside a crisp, flaky pastry shell.",
      recommendations:[{
        name:"Lord Stow's Bakery",
        priceRange:"$",
        address:"1 Rua do Tassara, Coloane Town Square, Macau",
        link:"https://www.google.com/maps/place/Lord+Stow's+Bakery+Main+Store/@22.1256567,113.5440593,15.15z/data=!4m10!1m2!2m1!1slord+stow's+bakery!3m6!1s0x34017035b7ea09d9:0x321981ba17a4b09e!8m2!3d22.1183139!4d113.5511155!15sChJsb3JkIHN0b3cncyBiYWtlcnkiA4gBAVoUIhJsb3JkIHN0b3cncyBiYWtlcnmSAQZiYWtlcnmaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjRhbkJZYWxCM0VBReABAPoBBAgjEEw!16s%2Fg%2F11df0rfff7!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Beijing",
    country:"China",
    lat:40.025568,
    lng:117.236542,
    cuisines:[{
      type:"Chinese",
      dish_name:"Peking Duck:",
      course:"Main",
      photoURL:"images/pekingduck.jpg",
      description:"Duck has been roasted until the skin is crisp and golden, sliced tableside and wrapped in thin pancakes with sweet bean paste and scallions.",
      recommendations:[{
        name:"Siji Minfu",
        priceRange:"$$",
        address:"32 Dengshikou W St, Dongcheng, Beijing, China, 100006",
        link:"https://www.google.com/maps/place/Siji+Minfu/@39.9481549,116.3483809,12z/data=!4m10!1m2!2m1!1ssiji+minfu!3m6!1s0x35f052d0684291c3:0xa8ed700f63aefeaa!8m2!3d39.9182472!4d116.4088821!15sCgpzaWppIG1pbmZ1WgwiCnNpamkgbWluZnWSARJjaGluZXNlX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F1thspk95!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Shanghai",
    country:"China",
    lat:31.227199,
    lng:121.830919,
    cuisines:[{
        type:"Chinese",
        dish_name:"Sheng Jian Bao",
        course:"Breakfast",
        photoURL:"images/dumplings.jpg",
        description:"Shanghai pan-fried pork buns with a crispy golden bottom, a soft fluffy yeast-dough and a juicy meat filling.",
        recommendations:[{
            name:"Yang's Fried-Dumpling",
            priceRange:"$",
            address:"Hongyi Plaza, 1层299 Nanjing Rd (E), 299, Huangpu, Shanghai, China, 200002",
            link:"https://www.google.com/maps/search/Xiao+Yang+Sheng+Jian/@30.7568317,113.3448898,5z/data=!3m1!4b1!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
        }]    
  }]
  },
  {
    name:"Sapporo",
    country:"Japan",
    lat:42.852607,
    lng:141.876321,
    cuisines:[{
      type:"Japanese",
      dish_name:"Soup Curry",
      course:"Main",
      photoURL:"images/soupcurry.jpg",
      description:"A light,spicy soup-like curry filled with tender chicken legs and chunky local vegetables.",
      recommendations:[{
        name:"Suage+ Soup Curry",
        priceRange:"$$",
        address:"Japan, 〒064-0804 Hokkaido, Sapporo, Chuo Ward, Minami 4 Jonishi, 5 Chome−6-1 都志松ビル ２階",
        link:"https://www.google.com/maps/place/Suage%2B+Soup+Curry/@43.0557369,141.3512699,17z/data=!4m6!3m5!1s0x5f0b298454c641bf:0x91c019c2cebc6973!8m2!3d43.0557369!4d141.3512699!16s%2Fg%2F1wn_5xkl!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Tokyo",
    country:"Japan",
    lat:35.866008,
    lng:140.451649,
    cuisines:[{
      type:"Japanese",
      dish_name:"Shoyu Ramen",
      course:"Main",
      photoURL:"images/ramen.jpg",
      description:"Classic Toyko-style noodles served in a savory, clear chicken and soy sause broth.",
      recommendations:[{
        name:'Menson Rage',
        priceRange:"$$",
        address:"3 Chome-37-22 Shoan, Suginami City, Tokyo 167-0054, Japan",
        link:"https://www.google.com/maps/place/Menson+Rage/@35.7016677,139.5977724,17.55z/data=!4m6!3m5!1s0x6018ee10024fd423:0x738e33c91c7be7f4!8m2!3d35.7017815!4d139.5991777!16s%2Fg%2F11b75gpv37!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Fukuoka",
    country:"Japan",
    lat:33.699385,
    lng:130.927454,
    cuisines:[{
      type:"Japanese",
      dish_name:"Hakata Tonkotsu Ramen",
      course:"Main",
      photoURL:"images/tonkotsu.jpg",
      description:"Rich, creamy pork bone broth served with thin, firm noodles",
      recommendations:[{
        name:"Hakata Issou Honten",
        priceRange:"$$",
        address:"3 Chome-1-6 Hakataekihigashi, Hakata Ward, Fukuoka, 812-0013, Japan",
        link:"https://www.google.com/maps/place/Hakata+Issou+Honten/@33.589087,130.3961049,14z/data=!3m1!5s0x354191b6148a5d0d:0x749d0c38834c28a4!4m10!1m2!2m1!1shakata+issou+honten!3m6!1s0x354191b614dd0001:0xd021dc83c19d7221!8m2!3d33.586378!4d130.4250999!15sChNoYWthdGEgaXNzb3UgaG9udGVuWhUiE2hha2F0YSBpc3NvdSBob250ZW6SARByYW1lbl9yZXN0YXVyYW504AEA!16s%2Fg%2F12hkbkzwl!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Seoul",
    country:"South Korea",
    lat:37.636116,
    lng:127.049024,
    cuisines:[{
      type:"Korean",
      dish_name:"Samgyetang",
      course:"Main",
      photoURL:"images/samgyetang.jpg",
      description:" Whole young chicken stuffed with ginseng, garlic, and sticky rice in a rich broth",
      recommendations:[{
        name:"Tosokchon Samgyetang",
        priceRange:"$$",
        address:"5 Jahamun-ro 5-gil, Jongno District, Seoul, South Korea",
        link:"https://www.google.com/maps/place/Tosokchon+Samgyetang/@37.5777952,126.9612912,15z/data=!3m1!4b1!4m6!3m5!1s0x357ca2be188e936f:0xe0687c7b0f486f53!8m2!3d37.5777786!4d126.9715909!16s%2Fg%2F1tg6n1tz!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Busan",
    country:"South Korea",
    lat:34.986650,
    lng:128.843599,
    cuisines:[{
      type:"Korean",
      dish_name:"Dwaeji Gukbap",
      course:"Main",
      photoURL:"images/gukbap.jpg",
      description:"A comforting, milky pork bone broth served with rice, chives, and salted shrimp",
      recommendations:[{
        name:"Ssangdung-i Dwaeji Gukbap",
        priceRange:"$$",
        address:"35-1 UN pyeonghwa-ro, Nam-gu, Busan, South Korea",
        link:"https://www.google.com/maps/place/Ssangdung-i+Dwaeji+Gukbap/@35.1317955,129.0819358,15z/data=!3m1!4b1!4m6!3m5!1s0x3568ecf55215cbc3:0x975d8d6b234d9fd5!8m2!3d35.1317784!4d129.0922355!16s%2Fg%2F1tp0bkb3!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]    
  },
  {
    name:"Ulaanbaatar",
    country:"Mongolia",
    lat:47.935786,
    lng:106.876983,
    cuisines:[{
      type:"Mongolian",
      dish_name:"Buuz",
      course:"Main",
      photoURL:"images/buuz.jpg",
      description:" Large, savory steamed dumplings stuffed with minced mutton or beef, garlic, and onions.",
      recommendations:[{
        name:"Khaan Buuz",
        priceRange:"$",
        address:"Энэбишийн өргөн чөлөө гудамж сентоза үйлчилгээний төв, BGD - 18 khoroo, Ulaanbaatar 16063, Mongolia",
        link:"https://www.google.com/maps/search/Khaan+Buuz+/@47.9068214,106.7161879,10.53z/data=!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Penang",
    country:"Malaysia",
    lat: 5.244646,
    lng: 100.527111,
    cuisines:[{
      type:"Malaysian",
      dish_name:'Penang Asam Laksa',
      course:"Main",
      photoURL:"images/laksa.jpg",
      description:"A sour and spicy fish noodle soup made with tamarind, mint, and ginger flower.",
      recommendations:[{
        name:"Penang Road Famous Laksa",
        priceRange:"$",
        address:"5-7, Lebuh Keng Kwee, George Town, 10100 George Town, Pulau Pinang, Malaysia",
        link:"https://www.google.com/maps/place/Penang+Road+Famous+Laksa/@5.4166823,100.3208561,15z/data=!3m1!4b1!4m6!3m5!1s0x304ac396ec86d23d:0x3d16f979154f0f62!8m2!3d5.416661!4d100.3311558!16s%2Fg%2F11c1r1h_4w!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Jakarta",
    country:"Indoesia",
    lat:-6.007891,
    lng: 105.312179,
    cuisines:[{
      type:"Indonesian",
      dish_name:"Nasi Padang",
      course:"Main",
      photoURL:"images/nasipadang.jpg",
      description:"Steamed rice served with a massive spread of rich, spicy West Sumatran dishes.",
      recommendations:[{
        name:"Rumah Makan SURYA Masakan Padang",
        priceRange:"$$",
        address:"Jl. Bendungan Hilir No.5, RT.10/RW.6, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270, Indonesia",
        link:"https://www.google.com/maps/place/Rumah+Makan+SURYA+Masakan+Padang/@-6.2143829,106.8144475,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f768bbdafa57:0xa9fe29049e174c48!8m2!3d-6.2143829!4d106.8144475!16s%2Fg%2F1th9k306!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D",
      }]
    }]
  },
  {
    name:"Brisbane",
    country:"Australia",
    lat:-27.451943,
    lng:153.046405,
    cuisines:[{
      type:"Cantonese",
      dish_name:"Dim Sum",
      course:"Brunch",
      photoURL:"images/dimsum_2.jpg",
      description:"Famous for five-spice roast duck and authentic yum cha lunch, blending local seafood with traditional Cantonese techniques",
      recommendations:[{
        name:"Stanley Restaurant",
        priceRange:"$$$",
        address:"5 Boundary St, Brisbane City QLD 4000, Australia",
        link:"https://www.google.com/maps/place/Stanley+Restaurant/@-27.4623577,153.0348235,17z/data=!4m6!3m5!1s0x6b9159e72ad7edc1:0x426394f740197845!8m2!3d-27.4624719!4d153.0350917!16s%2Fg%2F11j00y2jsq!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D",

      }]
    }]
  },
  {
    name:"Perth",
    country:"Australia",
    lat:-32.114457,
    lng: 116.652430,
    cuisines:[{
      type:"Italian-Australian",
      dish_name:"The Continental Roll:",
      course:"Main",
      photoURL:"images/continental_roll.jpg",
      description:"Cold-cut sandwich loaded with cured meats, cheese, and pickled vegetables packed into a crusty white roll",
      recommendations:[{
        name:"The Re Store",
        priceRange:"$",
        address:"72 Lake St, Northbridge WA 6003, Australia",
        link:"https://www.google.com/maps/place/The+Re+Store/@-31.9397293,115.8552265,14z/data=!4m10!1m2!2m1!1sThe+Re+Store+in+perth!3m6!1s0x2a32bad21e95c321:0x745aff9750f1889e!8m2!3d-31.946375!4d115.8578806!15sChVUaGUgUmUgU3RvcmUgaW4gcGVydGhaFyIVdGhlIHJlIHN0b3JlIGluIHBlcnRokgEVZ291cm1ldF9ncm9jZXJ5X3N0b3Jl4AEA!16s%2Fg%2F1tl6njcg!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]    
  },
    {
    name:"Auckland",
    country:"New Zealand",
    lat:-36.858813,
    lng:174.75999,
    cuisines:[{
      type:"Western",
      dish_name:"New Zealand Meat Pie",
      course:"All time",
      photoURL:"images/meatpie.png",
      description:"A hand-sized savory pastry filled with minced or diced meat, rich gravy, and sometimes cheese or vegetables, encased in a flaky puff or shortcrust pastry",
      recommendations:[{
        name:"Muzza's Pies",
        priceRange:"$",
        address:"55 Richardson Road, Mount Albert, Owairaka 1025, New Zealand",
        link:"https://www.google.com/maps/place/Muzza's+Pies/@-36.8922703,174.7029366,15z/data=!3m2!4b1!5s0x6d0d46e858eb7647:0x3a9283a72cf017f7!4m6!3m5!1s0x6d0d46e8589076f5:0x7424a600dc404e00!8m2!3d-36.8922879!4d174.7132363!16s%2Fg%2F1tgcs1k8!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Nadi",
    country:"Fiji",
    lat:-17.780370,
    lng:177.430245,
    cuisines:[{
      type:"Pacific Island dish",
      dish_name:"Kokoda",
      course:"Starter",
      photoURL:"images/kokoda.jpg",
      description:"Raw mahi-mahi or other white fish marinated in lime juice, then mixed with thick coconut cream, onions, tomatoes, and chilies.",
      recommendations:[{
        name:"Nadina Authentic Fijian Restaurant",
        priceRange:"$$",
        address:"Building C, Shop R1 & R2, Levu, Denarau Island, Fiji",
        link:"https://www.google.com/maps/place/Nadina+%7C+Authentic+Fijian+Restaurant/@-17.7667939,177.3539279,13.33z/data=!4m6!3m5!1s0x6e1744ca94961bdf:0xdf4ecdfef6cc696e!8m2!3d-17.7712549!4d177.3794917!16s%2Fg%2F11c0qgq619!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
    {
    name:"Dhaka",
    country:"Bangladesh",
    lat:23.808787,
    lng:90.409345,
    cuisines:[{
      type:"South Asian",
      dish_name:"Kacchi Biryani",
      course:"Main",
      photoURL:"images/biryani.jpg",
      description:"Raw marinated meat, aromatic spices, and partially cooked rice are slow-cooked together in a sealed pot.",
      recommendations:[{
        name:"Kolkata Kachchi",
        priceRange:"$$",
        address:"14 Abul Hasnat Rd, Dhaka 1211, Bangladesh",
        link:"https://www.google.com/maps/place/Kolkata+Kacchi+Ghor/@23.7181968,90.3979185,17z/data=!4m6!3m5!1s0x3755b8e2551cc177:0x3e790594a297f9b9!8m2!3d23.7181919!4d90.4004934!16s%2Fg%2F1ptww03p0!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
  {
    name:"Kathmandu",
    country:"Nepal",
    lat:27.713241,
    lng:85.317364,
    cuisines:[{
      types:"Himalayan",
      dish_name:"momo",
      course:"Main",
      photoURL:"images/momo.jpg",
      description:"Spiced meat or vegetable filled dumplings, served steamed, fried, or in a tangy sesame-tomato sauce.",
      recommendations:[{
        name:"Newa Mo:Mo Restaurant",
        price:"$",
        address:"Kwabahal, 38 Thamel Marg, Kathmandu 44600, Nepal",
        link:"https://www.google.com/maps/place/Newa+MoMo+Restaurant/@27.7121934,85.3089661,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb18fdca27fe2d:0x78c12d982ccccabd!8m2!3d27.7121887!4d85.3115357!16s%2Fg%2F1hm2y7g6y!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D",
      }]
    }]
  },
    {
    name:"Kochi",
    country:"India",
    lat:9.929725,
    lng:76.261308,
    cuisines:[{
      type:"Indian",
      dish_name:"Malabar Biryani",
      course:"Main",
      photoURL:"malabar.webp",
      description:"Fragrant, short-grain kaima rice cooked with tender meat or prawns and rich spices.",
      recommendations:[{
        name:"Fort Paragon Restaurant by Calicut Paragon",
        price:"$$",
        address:"Fort Kochi, Kochi, Kerala 682001, India",
        link:"https://www.google.com/maps/place/Fort+Paragon+Restaurant+by+Calicut+Paragon/@9.9655729,76.2400632,17z/data=!3m1!4b1!4m6!3m5!1s0x3b086de6a36d4937:0x60c50abced240e2f!8m2!3d9.9655729!4d76.2400632!16s%2Fg%2F11kr9mg288!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D",
      }]
    }]
  },
  {
    name:"New Delhi",
    country:"India",
    lat:28.614603,
    lng:77.200160,
    cuisines:[{
      type:"Indian",
      dish_name:"Butter Chicken",
      course:"Main",
      photoURL:"images/butter_chicken.webp",
      description:"An iconic curry featuring tender tandoori chicken pieces in a velvety, creamy tomato and butter sauce.",
      recommendations:[{
        name:" Gulati Restaurant",
        price:"$$",
        address:"6, Pandara Road, Market, near India Gate, New Delhi, Delhi 110003, India",
        link:"https://www.google.com/maps/place/Gulati+Restaurant,+Pandara+Road/@28.6080997,77.0652709,11z/data=!4m10!1m2!2m1!1s+Gulati+Restaurant!3m6!1s0x390ce2db5b9c6b59:0x31291ea4d6453412!8m2!3d28.6078373!4d77.2300666!15sChFHdWxhdGkgUmVzdGF1cmFudFoTIhFndWxhdGkgcmVzdGF1cmFudJIBF25vcnRoX2luZGlhbl9yZXN0YXVyYW50mgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxNGRXTnNTVE5aTUZweVkxVjRNRkZYVW5WVU1VNW9VVmhLTVdJeVl4QULgAQD6AQUI6gEQPQ!16s%2Fg%2F11f2b0r_fg!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"

      }]
    }]
  },
  {
    name: "Islamabad",
    country:"Pakistan",
    lat:33.701238,
    lng:73.035287,
    cuisines:[{
      type:"South Asian",
      dish_name:"Chicken Karahi",
      course:"Main",
      photoURL:"images/karahi.webp",
      description:"Spicy, tomato-based chicken curry cooked in an iron wok.",
      recommendations:[{
        name:"Al Qamar Restaurant",
        price:"$",
        address:"5 Peshawar Rd, H-13, Rawalpindi, Pakistan",
        link:"https://www.google.com/maps/place/Al+Qamar+Restaurant/@33.6163395,72.9742784,14.07z/data=!4m10!1m2!2m1!1sAl+Qamar+Restaurant!3m6!1s0x38df96606c8b0971:0x6e6970f42081de89!8m2!3d33.6252034!4d72.9711557!15sChNBbCBRYW1hciBSZXN0YXVyYW50WhUiE2FsIHFhbWFyIHJlc3RhdXJhbnSSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11cn06fxzh!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
      }]
    }]
  },
]
