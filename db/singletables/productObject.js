//PRODUCT ARRAY ~
//Array of all products we have created to use 
//for the product pages

const productArray = [

    {
        name: "Desk Lamp",
        price: 39.99,
        description: "Light up your study room with this 22-1/2-inch Realspace Gooseneck LED lamp. The clamp effortlessly attaches to various surfaces, while the flexible neck lets you focus the light to enhance visibility.",
        image: "images/desklamp.jpeg",
        category: "school"
    },
    {
        name: "Ballpoint Pens",
        price: 5.99,
        description: "Ideal for a wide variety of writing activities and offering reliable performance.",
        image: "images/ballpoint.jpeg",
        category: "school work"
    },
    {
        name: "Black Notebook",
        price: 3.99,
        description: "1 subject notebook contains 100 wide ruled sheets that are ink bleed resistant.** 10 1/2 x 8 page size.",
        image: "images/blacknotebook.jpeg",
        category: "school"
    },
    {
        name: "Notebook Pack",
        price: 10.99,
        description: "6 Multi colored covers Included Hot Pink, Blue, Purple, Lime Green, Yellow, Orange, 1 Subject Notebook; 70 sheets of double-sided Narrow colleged rules paper.",
        image: "images/notebookpack.jpg",
        category: "school"
    },
    {
        name: "Colored Pen Pack",
        price: 14.99,
        description: "Express yourself creatively and fearlessly with FriXion Clicker.",
        image: "images/colorpenset.jpg",
        category: "school"
    },
    {
        name: "Blue Light Glasses",
        price: 69.99,
        description: "Anti-Blue Light Glasses for kids that are designed to block harmful digital blue light.",
        image: "images/bluelightkids.png",
        category: "school"
    },
    {
        name: "Kids Desk",
        price: 329.99,
        description: "Kids desk suitable for children aged 3-15 years old, adjustable height seat back and cushion hollow design, breathable, accelerating air circulation helps to adjust the child's sitting posture, increase comfort, and perfect accompany them grow up.",
        image: "images/desk.jpg",
        category: "school"
    },
    {
        name: "Studio in a Box",
        price: 49.99,
        description: "Our Studio In A Box is for the budding artist building a foundation of art and craft supplies. The high-quality tools and supplies let you focus on creating.",
        image: "images/studio.jpg",
        category: "school"
    },
    {
        name: "Organizational Tubs",
        price: 34.99,
        description: "This storage tub set is made of soft flexible material. Perfect for all types of manipulatives and learning supplies.",
        image: "images/tubs.jpg",
        category: "school"
    },
    {
        name: "Math Blocks",
        price: 42.99,
        description: "Set includes: 100 individual bright and colorful units, 30 rods, 10 flats, 1 cube, and 107 page Base Ten Book. Help students understand abstract base ten concepts; including place value, estimation, operations and fractions.",
        image: "images/mathblocks.jpg",
        category: "school"
    },
    {
        name: "Glue Sticks",
        price: 10.99,
        description: "Set of 30. Dries quickly and colorlessly perfect for arts, crafts, and school projects",
        image: "images/gluesticks.jpg",
        category: "school"
    },
    {
        name: "Scissors",
        price: 9.99,
        description: "Safety Blunt Tip Blades with Protective Cover: These kids scissors made of extra strong, durable, anti-rust and wear-resistant stainless steel flat-ground blades. Smooth blades offer good performance for cutting paper.",
        image: "images/scissors.jpg",
        category: "school"
    },
    {
        name: "Fraction Calculator",
        price: 17.99,
        description: "Elementary/Middle School Fraction Calculator.",
        image: "images/calculator.jpg",
        category: "school"
    },
    {
        name: "Cat Calculator",
        price: 25.99,
        description: "Solar and battery dual power drive. Automatic shut-down, energy saving and environmental protection.",
        image: "images/catcalculator.jpg",
        category: "school"
    },
    {
        name: "Colored Markers",
        price: 6.99,
        description: "Features 10 Ultra Clean Markers in classic colors that are perfect for the classroom.",
        image: "images/coloredmarkers.jpg",
        category: "school"
    },
    {
        name: "Unicorn Tape Dispenser",
        price: 16.99,
        description: "A MAGICAL DESK ACESSORY: Unicorn-shaped tape dispenser with 2 rolls of rainbow tape.",
        image: "images/unicorn.jpg",
        category: "school"
    },
    {
        name: "College-Rule Paper",
        price: 7.99,
        description: "This mega-pack of Oxford loose leaf filler paper has 500 college-ruled sheets for note taking, list making, and showing your work through all of your academic endeavors.",
        image: "images/paper.jpg",
        category: "school"
    },
    {
        name: "Pocket Folders",
        price: 3.99,
        description: "0.5mm thick two-pocket plastic folders are made of Super durable poly material to ensure that the product will not be damaged after high-frequency use.",
        image: "images/folders.jpg",
        category: "school"
    },
    {
        name: "Pencil Sharpener",
        price: 1.99,
        description: "The perfect sharpener for daily use, whether you are a business professional, teacher, student, or simply love to use graphite and colored pencils!",
        image: "images/sharpener.jpg",
        category: "school"
    },
    {
        name: "Mechanical Pencils",
        price: 8.99,
        description: "Convenient value pack offers an assortment of 0.5 millimeter 0.7 millimeter and 0.9 millimeter mechanical pencils.",
        image: "images/mechpencils.jpg",
        category: "school"
    },
    {
        name: "No.2 Pencils",
        price: 5.99,
        description: "150 wood case #2 HB pencils made from high-quality wood come presharpened.",
        image: "images/pencils.jpg",
        category: "school"
    },
    {
        name: "Construction Paper",
        price: 15.99,
        description: "This multipack of construction paper gives you more of the colors that you'll use the most - a classroom essential.",
        image: "images/constrution.jpg",
        category: "school"
    },
    {
        name: "Index Cards",
        price: 3.99,
        description: "300-count pack of neon index cards; includes 4 assorted neon colors.",
        image: "images/index.jpg",
        category: "school"
    },
    {
        name: "Highlighters",
        price: 9.99,
        description: "Features Smear Guard ink specially formulated to resist smearing when highlighting over many pen and maker inks (includes written notes, faxes, copies, newspapers and more let ink dry before highlighting).",
        image: "images/highlighters.jpg",
        category: "school work"
    },
    {
        name: "Elmers Glue",
        price: 2.99,
        description: "School glue, Safe and non-toxic, Washable, no-run, Bonds paper, wood, cloth and pottery, White.",
        image: "images/elmers.jpg",
        category: "school"
    },
    {
        name: "10 inch iPad",
        price: 299.99,
        description: "10.2-Inch Retina Display, 8MP back camera, 1.2MP FaceTime HD Front camera, up to 10 hours of battery life.",
        image: "images/ipad.jpg",
        category: "school work"
    },
    {
        name: "Merriam-Webster 3 Pack",
        price: 18.99,
        description: "Newest Edition, Merriam-Webster's Everyday Language Reference Set is a perfect reference tool to help with home schooling and remote learning.",
        image: "images/dictionary.jpg",
        category: "school"
    },
    {
        name: "Erasers",
        price: 1.99,
        description: "100% latex-free and smudge-resistant eraser to keep your pages fresh.",
        image: "images/erasers.jpg",
        category: "school"
    },
    {
        name: "White Board",
        price: 29.99,
        description: "Dry erase board provides a smooth writing surface and doubles as a magnetic bulletin board.",
        image: "images/whiteboard.jpg",
        category: "school work"
    },
    {
        name: "Dry Erase Markers",
        price: 8.99,
        description: "Bright, vivid, non toxic ink is quick drying, smear proof, easy to see from a distance, and provides consistent color quality.",
        image: "images/dryerase.jpg",
        category: "school work"
    },
    {
        name: "Ruler Pack",
        price: 2.99,
        description: "Each pack of 12 inch color rulers come with four (4) different colors: blue, green, orange, and purple.",
        image: "images/ruler.jpg",
        category: "school"
    },
    {
        name: "Crayons",
        price: 16.99,
        description: "The variety of bright colors in this pack invites imaginative expression.",
        image: "images/crayons.jpg",
        category: "school"
    },
    {
        name: "Kids Headphones with Mic",
        price: 24.99,
        description: "SAFER TO USE WITH VOLUME LIMITING: With a maxed out volume of 85dB - a generally accepted safe listening level, parents can rest assured their kids’ hearing won’t be negatively impacted.",
        image: "images/headphones.jpg",
        category: "school"
    },
    {
        name: "Kids Keyboard",
        price: 49.99,
        description: "The layout and key selection are the same as adult models, which makes for easy touch-typing.Practice and success will help your child develop good sentence structure, build memory skills and gain confidence.",
        image: "images/keyboard.jpg",
        category: "school"
    },
    {
        name: "Kids Wireless Mouse",
        price: 8.99,
        description: "2.4GHz Wireless - A more secure and precise experience than the traditional FM radio system with an increased working distance of up to 10m.",
        image: "images/mouse.jpg",
        category: "school"
    },

    {
        name: "Sticky Memo Ball",
        price: 12.99,
        description: "Its 12 sticky sides each feature tear-off sticky memos in different colors so you can get creative with group brainstorming at work or keeping the whole family organized at home.",
        image: "images/stickymemoball.jpg",
        category: "work school"
    },
    {
        name: "Drafting Table",
        price: 129.99,
        description: "Table with Storage, Adjustable Drawing Desk Rolling Art Craft Station Writing Work Table with Drawers & Wheels.",
        image: "images/table.jpg",
        category: "work"
    },
    {
        name: "Ergonomic Office Chair",
        price: 136.99,
        description: "Featuring reliable ergonomic support, Articulate comes with a breathable mesh back, passive lumbar support, and generously padded and contoured.",
        image: "images/chair.jpg",
        category: "work"
    },
    {
        name: "LED Desk Light",
        price: 39.99,
        description: "Wonderfully Gentle on the Eyes: Shines a flicker-free light that brightens your space without harming your eyes; ideal for reading, working or studying.",
        image: "images/light.jpg",
        category: "work school"
    },
    {
        name: "Espresso Maker",
        price: 149.99,
        description: "Nespresso Inissia by De'Longhi offers an impeccable single serve Coffee or Espresso cup every time, thanks to its automatic operation and patented extraction system which delivers up to 19 bars of pressure.",
        image: "images/nespresso.jpg",
        category: "work household groceries"
    },
    {
        name: "Air Pods",
        price: 199.99,
        description: "Active noise cancellation for immersive sound.",
        image: "images/airpods.jpg",
        category: "work entertainment school"
    },
    {
        name: "Retro Handset",
        price: 9.99,
        description: "Using a Pop reduces up to 99% of the radiation absorbed compared to a direct use of your mobile phone. Native 3.5mm jack to plug directly in your iPhone, Blackberry and latest MacBook's.",
        image: "images/retro.jpg",
        category: "work entertainment"
    },
    {
        name: "Portable Speaker",
        price: 149.99,
        description: "This Logitech wireless speaker delivers deep bass and full-bodied audio for an immersive listening experience.",
        image: "images/ueboom.jpg",
        category: "work entertainment"
    },
    {
        name: "Apple Magic Keyboard",
        price: 94.99,
        description: "Magic Keyboard combines a sleek design with a built-in rechargeable battery and enhanced key features.",
        image: "images/applekey.jpg",
        category: "work entertainment"
    },
    {
        name: "21.5 inch Monitor",
        price: 109.99,
        description: "21.5 inches Full HD (1920 x 1080) widescreen IPS display.",
        image: "images/monitor.jpg",
        category: "work school entertainment"
    },
    {
        name: "24 inch Curved Monitor",
        price: 129.99,
        description: "1800R curve monitor the curved display delivers a revolutionary visual experience with a leading 1800R screen curvature as the images appear to wrap around you for an in depth, immersive experience.",
        image: "images/curved.jpg",
        category: "work school entertainment"
    },
    {
        name: "Laptop Stand",
        price: 24.99,
        description: "The MOFT Laptop Stand weighs a mere 3 oz. and is only 1/10 inch thick - it’s compactness born of innovation. Since MOFT is literally light as paper and slim as a coin, it’s a laptop stand perfect for mobile working.",
        image: "images/stand.jpg",
        category: "work school"
    },
    {
        name: "Laptop Table",
        price: 64.99,
        description: "This multifunctional table will be a perfect addition to your office, home or home office.",
        image: "images/stand.jpg",
        category: "work"
    },
    {
        name: "Power Strip",
        price: 21.99,
        description: "Power for All - 1875W/15A heavy duty design with 12 outlets/sockets in one powerstrip which allow you charge multi devices at the same time, suitable for most phones, tablets and other appliance.",
        image: "images/files.jpg",
        category: "work"
    },
    {
        name: "Folders for Files",
        price: 10.99,
        description: "25 letter-size hanging file folders to keep your files organized and crisp.",
        image: "images/surge.jpg",
        category: "work school"
    },
    {
        name: "Filing Cabinet",
        price: 119.99,
        description: "Filing cabinet with modern finish is a very attractive addition to your home office and provides excellent storage.",
        image: "images/cab.jpg",
        category: "work"
    },
    {
        name: "Sleek Filing Cabinet",
        price: 149.99,
        description: "The interlock system secures 3 drawers and comes with 2 keys to protect your files and valuables. As a safety mechanism to avoid tipping, only 1 drawer can be opened at a time.",
        image: "images/cab2.jpg",
        category: "work"
    },
    {
        name: "Echo Dot",
        price: 49.99,
        description: "Meet Echo Dot - smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small spaces.",
        image: "images/dot.jpg",
        category: "work entertainment"
    },
    {
        name: "Paper Shredder",
        price: 39.99,
        description: "Cross-cut shred size: turns paper into small confetti-like pieces measuring 3/16 by 1-27/32 inches (5 by 47 mm); meets security level P-3 standards.",
        image: "images/shredder.jpg",
        category: "work"
    },
    {
        name: "Recycled Sticky Notes",
        price: 17.99,
        description: "Post-it Super Sticky Notes stick and re-stick so your thoughts get noticed.",
        image: "images/posits.jpg",
        category: "work school"
    },
    {
        name: "File Holder",
        price: 34.99,
        description: "Organizer with 8 sections for holding important files and binders vertically.",
        image: "images/fileholder.jpg",
        category: "work school"
    },
    {
        name: "Paper Clips",
        price: 2.99,
        description: "Assort sizes, 400pcs big paper clips, included 250pcs of 1.3 inch paper clip, 150pcs of 2.0 inch paper clips, large size paperclips are perfect for holding more and thicker papers.",
        image: "images/paperclips.jpg",
        category: "work school"
    },
    {
        name: "Stapler",
        price: 13.99,
        description: "Use one finger to staple up to 20 sheets.",
        image: "images/stapler.jpg",
        category: "work school"
    },
    {
        name: "Printer",
        price: 189.99,
        description: "Upgrade your office – Replacing the HP OfficeJet Pro 6978, this home office printer offers faster printing at 20 pages per minute, includes fax and scan-to-USB capabilities, and is 14% smaller.",
        image: "images/printer.jpg",
        category: "work school"
    },
    {
        name: "Tea Pot",
        price: 49.99,
        description: "Brew a delicious cup of tea in this glass tea press that utilizes the same brewing system as the French press; perfect for loose teas and tea bags.",
        image: "images/teapos.jpg",
        category: "work household groceries health"
    },
    {
        name: "Dual Sided Leather Desk Mat",
        price: 17.99,
        description: "Made of durable PU leather material, which protects your glass/wooden desktop from scratches, stains, spills, heat and scuffs.",
        image: "images/stickymemoball.jpg",
        category: "work school"
    },
    {
        name: "Color Journal Pens",
        price: 7.99,
        description: "SMOOTH WRITING Colorful Fine tip marker pen set with superfine, metal-clad fine tipped and outstanding performance in all areas of writing, drawing, coloring, easy and comfortable to write.",
        image: "images/colorpenset.jpg",
        category: "work school"
    },
    {
        name: "Gel Seat Cushion",
        price: 29.99,
        description: "BEST gel & memory foam seat cushion made of premium quality durable memory foam with thick gel layer for superior comfort and lower back pain relief, comes with NON-SLIP rubber bottom, BUILT-IN HANDLE for easy transport , EASY CLEANING machine-wash cover.",
        image: "images/gelseat.jpg",
        category: "work school"
    },
    {
        name: "Paperclip Block",
        price: 6.99,
        description: "Set Of 50 Colorful Paper Clips, 50 Silver Paper Clips And 1 Super Powerful Magnet Base.",
        image: "images/paperclipmagnet.jpg",
        category: "work school"
    },
    {
        name: "Rose Gold Pens",
        price: 8.99,
        description: "A big sparkling diamond is attached on top of the colorful metal ballpoint pen, and this unique design looks high, pure and charm.",
        image: "images/diamondpens.jpg",
        category: "work"
    },
    {
        name: "Paper Clip Pack",
        price: 4.99,
        description: "Shine Looking Paper Clips Bookmarks of Elephant Cat Bird Dachshund Shapes Assorted.",
        image: "images/funclips.jpg",
        category: "school"
    },
    {
        name: "Cute Gel Ink Pens",
        price: 10.99,
        description: "15 Types: as images shown, the pens are in unicorn, racket, cactus, doughnut, carrot and other shapes, adorable pens bring users more fun, let you enjoy the period of writing.",
        image: "images/funpens.jpg",
        category: "school"
    },
    {
        name: "Gold & Turquoise Paper Clips",
        price: 8.99,
        description: "Golden and light blue paperclips in a stylish cyan magnetic holder, a perfect addition of attractive color on your desk, unique workspace styling accessories.",
        image: "images/bluepaperclips.jpg",
        category: "work"
    },
    {
        name: "Mouse Pad - Brain",
        price: 7.99,
        description: "Soft materials comfortable for wrists and hands, smooth surface, non-slip rubber undersurface firmly grips the desktop.",
        image: "images/mousepad.jpg",
        category: "work school entertainment"
    },
    {
        name: "Rainbow Tape Dispenser",
        price: 7.99,
        description: "Colorful rainbow tone blade and metal core with clear acrylic body desktop office tape dispenser.",
        image: "images/tapedis.jpg",
        category: "work"
    },
    {
        name: "Colorful Blank Notebook",
        price: 9.99,
        description: "Pretty design, made with high quality paper and covers for easy writing and durability.",
        image: "images/colornotebook.jpg",
        category: "work school entertainment"
    },
    {
        name: "Sticky Organizer",
        price: 7.99,
        description: "Complete Set: Package includes Planner dividers of all kind. Ruled Lined, blank, Dotted and index bookmarks tab in various colors. 402 sheets in total, meeting your all kinds of needs.",
        image: "images/stickyorg.jpg",
        category: "work school"
    },
    {
        name: "Wooden Desk Calendar",
        price: 16.99,
        description: "Nature wood desk perpetual calendar features 100% premium wooden blocks on a wood golden stand. It is so fun to change the blocks every day.",
        image: "images/calend.jpg",
        category: "work"
    },
    {
        name: "Stress Relief Cards",
        price: 12.99,
        description: "50 EASY EXERCISES FOR EVERYONE: This unique Stress Less Cards deck contains 50 extremely effective exercises to help you relieve stress and deal with anxiety whenever you need it the most. Easy for everyone to use, these powerful techniques can be quickly memorized and used in any situation; on the bus, at work, at your desk, while queuing at the supermarket or before going to bed at night. ",
        image: "images/stress.jpg",
        category: "work entertainment health"
    },
    {
        name: "T-Rex Sticky Notes",
        price: 9.99,
        description: "Escape the office monotony with these fun T-Rex Sticky Notes.",
        image: "images/trex.jpg",
        category: "work"
    },
    {
        name: "Acrylic Scissors",
        price: 13.99,
        description: "Elegant aurora scissors is great gift for your family, friends, teammate, boss.",
        image: "images/worksc.jpg",
        category: "work"
    },
    {
        name: "Avocado Pins",
        price: 10.99,
        description: "Our decorative thumbtack is designed with a fruit avocado shape,exquisite workmanship,small and cute,it is the best supplies for office and study.",
        image: "images/avo.jpg",
        category: "work school"
    },
    {
        name: "Acrylic Clipboard",
        price: 21.99,
        description: "Clear acrylic with gold modern design style will make a unique and stylish addition to your workplace.",
        image: "images/clipboard.jpg",
        category: "work school"
    },
    {
        name: "Prisma Picture Frame",
        price: 14.99,
        description: "Unique 4x6 photo frame perfect for your home office.",
        image: "images/frame.jpg",
        category: "work"
    },
    {
        name: "Buddha Board",
        price: 34.99,
        description: "Easy to Use: Simply fill the stand with water. Then dip in the bamboo brush (included) & start drawing, painting & writing. You'll create soft, beautiful images with a rich, inky Japanese look. Appreciate your creation in the moment, and then as the water evaporates and your masterpiece slowly fades away, practice the art of letting go.",
        image: "images/buddha.jpg",
        category: "work school health entertainment"
    },
    {
        name: "Leather Desk Organizer",
        price: 24.99,
        description: "Foldable stylish design with elegant faux leather with delicate white stitching to keep your home or office decor looking stylish and chic.",
        image: "images/leatherorg.jpg",
        category: "work"
    },
    {
        name: "Cute Animal Erasers",
        price: 5.99,
        description: "Roll the eraser cleaner across paper, a desk, counter or table to pick up the annoying eraser fragments!",
        image: "images/anierasers.jpg",
        category: "school"
    },
    {
        name: "Geometric Marble Mousepad",
        price: 6.99,
        description: "Soft materials comfortable for hands, smooth surface, non-slip rubber undersurface firmly grips the desktop. Easy cleaning and maintenance.",
        image: "images/shapemousepad.jpg",
        category: "school work entertainment"
    },
    {
        name: "Fox Mousepad",
        price: 7.99,
        description: "Natual Rubber Base With Silky Cloth Surface. Easy Cleaning and Maintenance.",
        image: "images/foxmousepad.jpg",
        category: "school work entertainment"
    },
    {
        name: "Wood Calculator",
        price: 11.99,
        description: "Extra Large 10-digit Angled LCD Display.",
        image: "images/woodcalc.jpg",
        category: "work"
    },
    {
        name: "Groot Pen Holder",
        price: 8.99,
        description: "Used as a pen holder- Groot action figures perfect design, can be placed on your desk, organized your pen or small items, very cute collectibles.",
        image: "images/groot.jpg",
        category: "work school"
    },
    {
        name: "Wooden Desk Organizer",
        price: 16.99,
        description: "Set of 12 compartments with a drawer, large capacity ,The desktop organiser shelf is fixed with the screws, which can tightly connect the separate parts.",
        image: "images/woodorg.jpg",
        category: "work school"
    },
    {
        name: "Decorative File Folders",
        price: 16.99,
        description: "This 12 pack of pretty designer top tab file folders offer a modern spin to a simple organization necessity. Elevate your desk décor by storing documents, receipts, and notes in style and keep yourself organized at work or school.",
        image: "images/pinkfolders.jpg",
        category: "work school"
    },
    {
        name: "Pink Office Organizer Set",
        price: 35.99,
        description: "You can store all your supplies with this 5 piece set that includes a hanging file folder organizer, a magazine file holder, a pen cup, a sticky not holder, and a small file organizer - letter sorter.",
        image: "images/pinkmesh.jpg",
        category: "work"
    },
    {
        name: "Prism Writing Pads",
        price: 9.99,
        description: "Prism+ Writing Pads add a little pop of color to your daily tasks; enjoy pretty colors perfect for general daily use, or color code by subject or project to boost your efficiency.",
        image: "images/prismnote.jpg",
        category: "work school"
    },
    {
        name: "Wooden Desk Organizer",
        price: 34.99,
        description: "The perfect all-round table-top organizer, this decorative 4-drawer wooden storage organizer keeps paperclips, staples, pens, mini scissors and post-it notes in their place.",
        image: "images/woodorganizer.jpg",
        category: "work"
    },
    {
        name: "Watercolor Paint Set",
        price: 23.99,
        description: "High Quality Pigment — All paints are thick and creamy do not shift or become muddy, can be diluted with plenty of water do not cracking or crumbling when the paint dries.",
        image: "images/watercolors.jpg",
        category: "school entertainment"
    },
    {
        name: "Cat Pens",
        price: 6.99,
        description: "Material: plastic pen shell, lightweight and easy to carry, do not distort, convenient to put in handbag and you can use this pen for emergency, can replace the pen refills and good for your long-term use.",
        image: "images/catpens.jpg",
        category: "school"
    },
    {
        name: "Treat Pens",
        price: 12.99,
        description: "We all love stationery so wait until you feel these cool novelty pens in your hand, the smile on your face & the look on your desk. ",
        image: "images/treatpens.jpg",
        category: "school work entertainment"
    },
    {
        name: "Label Printer",
        price: 34.99,
        description: "Prints up to 2-lines on labels up to 12 millimeter wide. ",
        image: "images/labelprint.jpg",
        category: "household work"
    },
    {
        name: "Ring Doorbell",
        price: 59.99,
        description: "720p HD video doorbell that lets you see, hear and speak to people from your phone, tablet, or select Echo device.",
        image: "images/ring.jpg",
        category: "protection"
    },
    {
        name: "Daily Planner",
        price: 10.99,
        description: "50 high-quality sheets. Undated to help you organize your week.",
        image: "images/dailyplan.jpg",
        category: "work school"
    },
    {
        name: "Succulents",
        price: 19.99,
        description: "HAND SELECTED: Every pack of succulents we send is hand-picked. You will receive a unique collection of species that are FULLY ROOTED IN 2 INCH POTS.",
        image: "images/succ.jpg",
        category: "work health"
    },
    {
        name: "Funny Notepad",
        price: 12.99,
        description: "Each pad has 50 sheets of printed paper, size 4.25 x 5.5 inches.",
        image: "images/funnynote.jpg",
        category: "work"
    },
    {
        name: "Floppy Disc Coasters",
        price: 8.99,
        description: "Novelty set silicone drink coasters eco-friendly and dishwasher Safe. Unique shape fit for most of family needs.",
        image: "images/floppy.jpg",
        category: "work"
    },
    {
        name: "Rose Desk Kit",
        price: 19.99,
        description: "1* rosegold acrylic stapler, 1* rosegold acrylic tape dispenser,1* rosegold acrylic staple remover, 1000 pcs rosegold Standard staples.",
        image: "images/roseacry.jpg",
        category: "work"
    },
    {
        name: "Hemingway Pencil Cup",
        price: 19.99,
        description: "Typewriter themed design, faux stone.",
        image: "images/typehold.jpg",
        category: "work"
    },
    {
        name: "Bounty Paper Towels",
        price: 4.99,
        description: "Good for cleaning as well as wounds!",
        image: "images/bounty-papertowels.jpg",
        category: "grocery household"
    },
    {
        name: "Dixie Plates",
        price: 6.99,
        description: "Paper plates.",
        image: "images/dixie-plates.jpeg",
        category: "grocery household"
    },
    {
        name: "Bushs Baked Beans",
        price: 3.99,
        description: "Canned baked beans.",
        image: "images/bushs-baked-beans-orig.jpg",
        category: "grocery"
    },
    {
        name: "Plastic Cuttlery",
        price: 9.99,
        description: "Disposable plastic cuttlery.",
        image: "images/clear-dixie-cutlery.jpg",
        category: "grocery household"
    },
    {
        name: "Nacho Doritos",
        price: 5.99,
        description: "Cheese flavored chips.",
        image: "images/doritos-nacho.jpg",
        category: "grocery"
    },
    {
        name: "Local Honey",
        price: 0.99,
        description: "Get some local honey, it will have local pollin and will help build immunity.",
        image: "images/jar-of-honey.jpg",
        category: "grocery health"
    },
    {
        name: "Water purification tablets",
        price: 19.99,
        description: "Helps disinfect and make drinking water clean.",
        image: "images/water-purification-tabs.jpg",
        category: "grocery"
    },
    {
        name: "Life Straw",
        price: 19.99,
        description: "Makes any water clean and safe to drink.",
        image: "images/lifestraw-high-res.png",
        category: "grocery household"
    },
    {
        name: "Hostess Twinkies",
        price: 5.99,
        description: "The infamous twinkie (Must have).",
        image: "images/hostess_twinkies.jpg",
        category: "grocery"
    },
    {
        name: "Beef Jerky",
        price: 8.99,
        description: "Stores for a long time, high in protein.",
        image: "images/BEEF-JERKY.jpg",
        category: "grocery"
    },
    {
        name: "Canned Corn",
        price: 3.99,
        description: "Canned Sweet Corn.",
        image: "images/canned_sweet_corn.jpg",
        category: "grocery"
    },
    {
        name: "Canned Tuna",
        price: 4.99,
        description: "Canned tuna, long shelf life.",
        image: "images/canned-tuna.jpg",
        category: "grocery"
    },
    {
        name: "Kidney Beans",
        price: 5.99,
        description: "Dried kidney beans, must be soaked before cooking.",
        image: "images/kidney-beans.jpg",
        category: "grocery"
    },
    {
        name: "Pasta",
        price: 7.99,
        description: "Box of assorted pasta.",
        image: "images/Pasta.jpg",
        category: "grocery"
    },
    {
        name: "Peanut Butter",
        price: 3.99,
        description: "Long shelf life, high in protein, good tasting.",
        image: "images/peanutbutter.jpg",
        category: "grocery"
    },
    {
        name: "Pinto Beans",
        price: 5.99,
        description: "Dried kidney beans, must be soaked before cooking.",
        image: "images/pinto-beans-dry.jpg",
        category: "grocery"
    },
    {
        name: "Powdered Milk",
        price: 7.99,
        description: "Dry, powdered milk. Mix with water.",
        image: "images/powdered-milk.jpg",
        category: "grocery"
    },
    {
        name: "Kellogs Frosted Flakes",
        price: 5.99,
        description: "Dry cereal.",
        image: "images/frosted-flakes.jpg",
        category: "grocery"
    },
    {
        name: "Pasta Sauce",
        price: 3.99,
        description: "Pasta sauce. Goes good with cooked pasta.",
        image: "images/pinto-beans-dry.jpg",
        category: "grocery"
    },
    {
        name: "Spam",
        price: 1.99,
        description: "Staple of any prepper. Good shelf life.",
        image: "images/pinto-beans-dry.jpg",
        category: "grocery"
    },
    {
        name: "Pandemic",
        price: 34.99,
        description: "As skilled members of a disease fighting team, you and the other players work together to keep the world safe from outbreaks and epidemics.",
        image: "images/pandemic.jpg",
        category: "entertainment"
    },
    {
        name: "I Dissent",
        price: 19.99,
        description: "Cast your opinion. Win votes to rule the court. Stand your ground, and dissent to score even more points!",
        image: "images/dissent.jpg",
        category: "entertainment"
    },
    {
        name: "Throw Burrito",
        price: 24.99,
        description: "Try to collect matching sets of cards faster than your opponents while simultaneously ducking, dodging, and throwing squishy airborne burritos. The cards you collect earn points, but getting hit by flying burritos loses them.",
        image: "images/burrito.jpg",
        category: "entertainment"
    },
    {
        name: "7 Wonders",
        price: 34.99,
        description: "A complete visual revamp of the game all while keeping its famous mechanics.",
        image: "images/wonders.jpg",
        category: "entertainment"
    },
    {
        name: "Pool Table",
        price: 749.99,
        description: "CLASSIC, RUSTIC LOOK: The Kirkwood’s rustic finish and k-shaped leg construction puts a unique twist on a classic design.",
        image: "images/pool.jpg",
        category: "entertainment"
    },
    {
        name: "Poker Chip Set",
        price: 49.99,
        description: "This Poker Chip Set Includes 5 different colors of chips, 2 decks of playing cards, 5 dices, and dealer button, all in a deluxe aluminum case.",
        image: "images/poker.jpg",
        category: "entertainment"
    },
    {
        name: "Mini Ninja Turtles Arcade",
        price: 19.99,
        description: "A fully functional miniature version of your favorite arcade game from the summer boardwalk to the after-school Mall video arcade.",
        image: "images/turtles.jpg",
        category: "entertainment"
    },
    {
        name: "Oculus Quest 2",
        price: 299.99,
        description: "All-In-One Gaming - With backward compatibility, you can explore new titles and old favorites in the expansive Quest content library.",
        image: "images/occu.jpg",
        category: "entertainment"
    },
    {
        name: "Occulus Rift S",
        price: 399.99,
        description: "Top VR gaming library: Blast, slash and soar your way through the top library in VR gaming. Oculus Rift S lets you play hundreds of games and exclusives already available in the Oculus store, with so much more to come.",
        image: "images/occu2.jpg",
        category: "entertainment"
    },
    {
        name: "Sequence",
        price: 34.99,
        description: "Play a card from your hand, and place a chip on a corresponding space on the game board - when you have five in a row, it’s a SEQUENCE.",
        image: "images/sequence.jpg",
        category: "entertainment"
    },
    {
        name: "Haunted Mansion",
        price: 34.99,
        description: "Explore all the classic rooms of the ghost-infested manor, from the festivities-filled Ballroom to the Attic and out to the Graveyard and beyond in search of spirits.",
        image: "images/haunted.jpg",
        category: "entertainment"
    },
    {
        name: "PlayStation 4",
        price: 349.99,
        description: "Includes a new slim 1TB PlayStation  4 system, a matching DualShock 4 Wireless Controller.",
        image: "images/ps4.jpg",
        category: "entertainment"
    },
    {
        name: "PlayStation Portable",
        price: 99.99,
        description: "Piano Black PlayStation Portable includes built-in microphone.",
        image: "images/psp.jpg",
        category: "entertainment"
    },
    {
        name: "Stranger Things Pinball",
        price: 999.99,
        description: "Stranger Things pinball machines will immerse players in a search to unravel the mysteries and secret government experiments taking place at the Hawkins National Laboratory.",
        image: "images/strangerthings.jpg",
        category: "entertainment"
    },
    {
        name: "UNO",
        price: 9.99,
        description: "​UNO is the classic family card game that's easy to learn and so much fun to play!",
        image: "images/uno.jpg",
        category: "entertainment"
    },
    {
        name: "Yahtzee",
        price: 12.99,
        description: "Dice-rollin' battle game!!",
        image: "images/yahtzee.jpg",
        category: "entertainment"
    },
    {
        name: "Candy Land",
        price: 14.99,
        description: "Players encounter all kinds of delicious surprises as they move their cute gingerbread man pawn around the path in a race to the castle!",
        image: "images/candyland.jpg",
        category: "entertainment"
    },
    {
        name: "Clue",
        price: 19.99,
        description: "Ultimate mystery game! Who can solve this murder?",
        image: "images/clue.jpg",
        category: "entertainment"
    },
    {
        name: "Sorry!",
        price: 19.99,
        description: "Nostalgic tabletop gameplay meets interactive digital content for an immersive gaming experience.",
        image: "images/sorry.jpg",
        category: "entertainment"
    },
    {
        name: "Nintendo Switch",
        price: 359.99,
        description: "Nintendo Switch 32GB Console Neon Red/Neon Blue Joy-Con",
        image: "images/switch.jpg",
        category: "entertainment"
    },
    {
        name: "ChargePlay",
        price: 29.99,
        description: "Simultaneously charges four Joy-Con controllers.",
        image: "images/charger.jpg",
        category: "entertainment"
    },
    {
        name: "Nintendo Switch (Gray)",
        price: 329.99,
        description: "Nintendo Switch allows you to get the family together and enjoy gaming on the big screen",
        image: "images/switchb.jpg",
        category: "entertainment"
    },
    {
        name: "Nintendo Switch - Animal Crossing",
        price: 299.99,
        description: "New Horizons Edition!",
        image: "images/switcha.jpg",
        category: "entertainment"
    },
    {
        name: "Star Wars Arcade",
        price: 449.99,
        description: "3 Games In 1 includes Star Wars, Star Wars The Empire Strikes Back, and Star Wars Return of the Jedi.",
        image: "images/starwars.jpg",
        category: "entertainment"
    },
    {
        name: "Battleship",
        price: 19.99,
        description: "CLASSIC BATTLESHIP GAME: Kids ages 7 and up can enjoy playing this classic game of naval combat.",
        image: "images/battleship.jpg",
        category: "entertainment"
    },
    {
        name: "Guess Who?",
        price: 9.99,
        description: "THE ORIGINAL GUESSING GAME: This edition of the Guess Who? game features classic tabletop boards, 24 Mystery cards and 48 Face cards.",
        image: "images/guesswho.jpg",
        category: "entertainment"
    },
    {
        name: "Pun Intended",
        price: 24.99,
        description: "Pun Intended is for pun-loving people everywhere! Just like the vandals who destroyed the road signs, we pulled out all the stops.",
        image: "images/pun.jpg",
        category: "entertainment"
    },
    {
        name: "Speed Charades",
        price: 24.99,
        description: "A fun twist on a family favorite. Players compete head-to-head in a race to act out words for their teams to guess.",
        image: "images/charades.jpg",
        category: "entertainment"
    },
    {
        name: "Foosball",
        price: 99.99,
        description: "Competition-sized foosball table brings fun to any setting, perfect for home game rooms, arcades, and other entertainment areas.",
        image: "images/foosball.jpg",
        category: "entertainment"
    },
    {
        name: "Classic Arcade",
        price: 999.99,
        description: "Equipped with the Highest Quality SANWA Joysticks, Trackball, 26 LCD Monitor, Thick Tempered Glass, and more! We stand behind our products because we are industry leaders in quality craftsmanship and design.",
        image: "images/classicarcade.jpg",
        category: "entertainment"
    },
    {
        name: "Foldable Basketball Game",
        price: 99.99,
        description: "There are 8 game options can be selected by setting the controller at your hand. And you will find the detailed description of endless ways of play in the manual.",
        image: "images/bball.jpg",
        category: "entertainment"
    },
    {
        name: "Life",
        price: 19.99,
        description: "Choose a path for a life of action, adventure, and unexpected surprises.",
        image: "images/life.jpg",
        category: "entertainment"
    },
    {
        name: "Parcheesi",
        price: 16.99,
        description: "Classic game of chase, race and capture.",
        image: "images/parche.jpg",
        category: "entertainment"
    },
    {
        name: "Gamecube",
        price: 99.99,
        description: "Includes Console, Power Cable, AV Cable, and Indigo Controller for Nintendo GameCube",
        image: "images/gamecube.jpg",
        category: "entertainment"
    },
    {
        name: "Pink Gamecube Controller",
        price: 9.99,
        description: "2 Analogue thumb stick,8 Completely analog action buttons,4 Fire action buttons,1 Shoulder buttons , The smooth curved hand lines will make your hands completely at your disposal.",
        image: "images/pinkcon.jpg",
        category: "entertainment"
    },
    {
        name: "Oriflame Classic Console",
        price: 49.99,
        description: "This is a retro TV video game consoles of the 80s of the last century, it collected a lot of last century game. Built-in 821 different games, 821 Classic Games recover your childrenhood memory. You can easily find 30-40 games that belong to your favorite classic game.",
        image: "images/classicnin.jpg",
        category: "entertainment"
    },
    {
        name: "Jumanji",
        price: 18.99,
        description: "Adventurers beware: do not begin unless you intend to finish..",
        image: "images/jumanji.jpg",
        category: "entertainment"
    },
    {
        name: "Risk",
        price: 29.99,
        description: "Improved mission cards speed up the game; features 12 secret missions.",
        image: "images/risk.jpg",
        category: "entertainment"
    },
    {
        name: "Photosynthesis",
        price: 34.99,
        description: "Photosynthesis is one of the best environmental board games referring to the life cycle of trees, for science and biology enthusiasts.",
        image: "images/photosyn.jpg",
        category: "entertainment"
    },
    {
        name: "Monopoly",
        price: 19.99,
        description: "Build houses and hotels on your properties and bankrupt your opponents to win it all.",
        image: "images/monopoly.jpg",
        category: "entertainment"
    },
    {
        name: "Tabletop Bowling",
        price: 49.99,
        description: "MINI BOWLING: All the fun of bowling in a compact table top size.",
        image: "images/bowl.jpg",
        category: "entertainment"
    },
    {
        name: "Xbox One",
        price: 339.99,
        description: "Bundle includes: Xbox One S 1TB Console, 1 Xbox Wireless Controller (with 3.5mm headset jack), HDMI cable (4K Capable), AC Power cable.",
        image: "images/xbox.jpg",
        category: "entertainment"
    },
    {
        name: "Blue Xbox Controller",
        price: 39.99,
        description: "Experience the modernized design of the Xbox Wireless Controller – Shock Blue, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay.",
        image: "images/xboxconb.jpg",
        category: "entertainment"
    },
    {
        name: "White Xbox Controller",
        price: 39.99,
        description: "Experience the modernized design of the Xbox Wireless Controller in Robot White, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay.",
        image: "images/xboxconw.jpg",
        category: "entertainment"
    },
    {
        name: "Handheld Classic Console",
        price: 39.99,
        description: "Retro game consoles have a variety of classic games, you can also download games in related formats.",
        image: "images/handheld.jpg",
        category: "entertainment"
    },
    {
        name: "Operation",
        price: 19.99,
        description: "Players get to be the doctor and make Cavity Sam better or get the buzzer.",
        image: "images/operation.jpg",
        category: "entertainment"
    },
    {
        name: "Pac-Man",
        price: 19.99,
        description: "Arcade classic - rediscover this classic arcade experience with Pac-Man the board game.",
        image: "images/pacman.jpg",
        category: "entertainment"
    },
    {
        name: "Jenga",
        price: 7.99,
        description: "Pull out a block without crashing the stack to win at Jenga.",
        image: "images/Jenga.jpg",
        category: "entertainment"
    },
    {
        name: "Cards Against Humanity",
        price: 24.99,
        description: "Cards Against Humanity is a party game for horrible people..",
        image: "images/cah.jpg",
        category: "entertainment"
    },
    {
        name: "Cards Against Humanity: Absurd",
        price: 19.99,
        description: "The Absurd Box is an expansion to Cards Against Humanity.",
        image: "images/caha.jpg",
        category: "entertainment"
    },
    {
        name: "Cards Against Humanity: Family",
        price: 24.99,
        description: "Family Edition is a new fill-in-the-blank comedy game that’s just like Cards Against Humanity, but it’s made for kids and adults to play together.",
        image: "images/cahf.jpg",
        category: "entertainment"
    },
    {
        name: "Cards Against Humanity: Family",
        price: 19.99,
        description: "Contains six different themed packs you forgot to buy when they came out.",
        image: "images/cahh.jpg",
        category: "entertainment"
    },
    {
        name: "Nintendo 64",
        price: 299.99,
        description: "Classic Nintendo 64 Console in Smoke, includes controller.",
        image: "images/nintendo64.jpg",
        category: "entertainment"
    },
    {
        name: "Nintendo 64",
        price: 299.99,
        description: "Classic Nintendo 64 Console in Smoke, includes controller.",
        image: "images/nintendo64g.jpg",
        category: "entertainment"
    },
    {
        name: "Cocktail Arcade Machine",
        price: 999.99,
        description: "ALL THE CLASSICS: Remember all of those amazing games you played as a kid - this machine has 60 of those amazing classic games.",
        image: "images/pac.jpg",
        category: "entertainment"
    },
    {
        name: "Speedball",
        price: 699.99,
        description: "RUSTIC DESIGN: We recreated the essence and aesthetics of the original ball scoring game. Accented with distressed oak wood with iron metal trimming, legs and net, this table is as much a designer piece as it is high-performing sports equipment.",
        image: "images/roll.jpg",
        category: "entertainment"
    },
    {
        name: "Arcade Claw Machine",
        price: 38.99,
        description: "Bring your favorite arcade game home!",
        image: "images/claw.jpg",
        category: "entertainment"
    },
    {
        name: "Hand Puppets",
        price: 24.99,
        description: "ENTERTAINING HAND PUPPETS FOR KIDS: The Melissa & Doug Safari Buddies Hand Puppets set includes 6 soft and cuddly hand puppets with a safari animal theme.",
        image: "images/puppets.jpg",
        category: "entertainment"
    },
    {
        name: "Puffin Classics",
        price: 49.99,
        description: "The Puffin Classic Story Collection 10 Books Set.",
        image: "images/puffin.jpg",
        category: "entertainment"
    },
    {
        name: "Major Works of C.D.",
        price: 99.99,
        description: "The Major Works of Charles Dickens!",
        image: "images/charles.jpg",
        category: "entertainment"
    },
    {
        name: "The Bronte Sisters Set",
        price: 69.99,
        description: "A beautiful boxed set of four Hardcover Classics by the Brontë sisters, including Wuthering Heights, Villette, Jane Eyre, and The Tenant of Wildfell Hall.",
        image: "images/bronte.jpg",
        category: "entertainment"
    },
    {
        name: "Complete Novels of Jane Austin",
        price: 14.99,
        description: "This new, enhanced leather-bound edition includes all the completed novels of beloved author Jane Austen.",
        image: "images/jane.jpg",
        category: "entertainment"
    },



]

module.exports = productArray;

//school work - FALON
//entertainment (BOARD GAMES ETC)
//health (vitamins, masks, etc etc)
//household (LYSOL TP ETC ETC WHATEVER)
//protection (KNIFES, MACE, SECURITY, AMMO ETC)
//groceries (NON PERISH)