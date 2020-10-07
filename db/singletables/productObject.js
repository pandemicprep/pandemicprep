//PRODUCT ARRAY ~
//Array of all products we have created to use
//for the product pages

const productArray = [
  {
    name: "Desk Lamp",
    price: 39.99,
    description:
      "Light up your study room with this 22-1/2-inch Realspace Gooseneck LED lamp. The clamp effortlessly attaches to various surfaces, while the flexible neck lets you focus the light to enhance visibility.",
    image: "images/desklamp.jpeg",
    category: "school",
  },
  {
    name: "Ballpoint Pens",
    price: 5.99,
    description:
      "Ideal for a wide variety of writing activities and offering reliable performance.",
    image: "images/ballpoint.jpeg",
    category: "school work",
  },
  {
    name: "Black Notebook",
    price: 3.99,
    description:
      "1 subject notebook contains 100 wide ruled sheets that are ink bleed resistant.** 10 1/2 x 8 page size.",
    image: "images/blacknotebook.jpeg",
    category: "school",
  },
  {
    name: "Notebook Pack",
    price: 10.99,
    description:
      "6 Multi colored covers Included Hot Pink, Blue, Purple, Lime Green, Yellow, Orange, 1 Subject Notebook; 70 sheets of double-sided Narrow colleged rules paper.",
    image: "images/notebookpack.jpg",
    category: "school",
  },
  {
    name: "Colored Pen Pack",
    price: 14.99,
    description:
      "Express yourself creatively and fearlessly with FriXion Clicker.",
    image: "images/colorpenset.jpg",
    category: "school",
  },
  {
    name: "Blue Light Glasses",
    price: 69.99,
    description:
      "Anti-Blue Light Glasses for kids that are designed to block harmful digital blue light.",
    image: "images/bluelightkids.png",
    category: "school",
  },
  {
    name: "Kids Desk",
    price: 329.99,
    description:
      "Kids desk suitable for children aged 3-15 years old, adjustable height seat back and cushion hollow design, breathable, accelerating air circulation helps to adjust the child's sitting posture, increase comfort, and perfect accompany them grow up.",
    image: "images/desk.jpg",
    category: "school",
  },
  {
    name: "Studio in a Box",
    price: 49.99,
    description:
      "Our Studio In A Box is for the budding artist building a foundation of art and craft supplies. The high-quality tools and supplies let you focus on creating.",
    image: "images/studio.jpg",
    category: "school",
  },
  {
    name: "Organizational Tubs",
    price: 34.99,
    description:
      "This storage tub set is made of soft flexible material. Perfect for all types of manipulatives and learning supplies.",
    image: "images/tubs.jpg",
    category: "school",
  },
  {
    name: "Math Blocks",
    price: 42.99,
    description:
      "Set includes: 100 individual bright and colorful units, 30 rods, 10 flats, 1 cube, and 107 page Base Ten Book. Help students understand abstract base ten concepts; including place value, estimation, operations and fractions.",
    image: "images/mathblocks.jpg",
    category: "school",
  },
  {
    name: "Glue Sticks",
    price: 10.99,
    description:
      "Set of 30. Dries quickly and colorlessly perfect for arts, crafts, and school projects",
    image: "images/gluesticks.jpg",
    category: "school",
  },
  {
    name: "Scissors",
    price: 9.99,
    description:
      "Safety Blunt Tip Blades with Protective Cover: These kids scissors made of extra strong, durable, anti-rust and wear-resistant stainless steel flat-ground blades. Smooth blades offer good performance for cutting paper.",
    image: "images/scissors.jpg",
    category: "school",
  },
  {
    name: "Fraction Calculator",
    price: 17.99,
    description: "Elementary/Middle School Fraction Calculator.",
    image: "images/calculator.jpg",
    category: "school",
  },
  {
    name: "Cat Calculator",
    price: 25.99,
    description:
      "Solar and battery dual power drive. Automatic shut-down, energy saving and environmental protection.",
    image: "images/catcalculator.jpg",
    category: "school",
  },
  {
    name: "Colored Markers",
    price: 6.99,
    description:
      "Features 10 Ultra Clean Markers in classic colors that are perfect for the classroom.",
    image: "images/coloredmarkers.jpg",
    category: "school",
  },
  {
    name: "Unicorn Tape Dispenser",
    price: 16.99,
    description:
      "A MAGICAL DESK ACESSORY: Unicorn-shaped tape dispenser with 2 rolls of rainbow tape.",
    image: "images/unicorn.jpg",
    category: "school",
  },
  {
    name: "College-Rule Paper",
    price: 7.99,
    description:
      "This mega-pack of Oxford loose leaf filler paper has 500 college-ruled sheets for note taking, list making, and showing your work through all of your academic endeavors.",
    image: "images/paper.jpg",
    category: "school",
  },
  {
    name: "Pocket Folders",
    price: 3.99,
    description:
      "0.5mm thick two-pocket plastic folders are made of Super durable poly material to ensure that the product will not be damaged after high-frequency use.",
    image: "images/folders.jpg",
    category: "school",
  },
  {
    name: "Pencil Sharpener",
    price: 1.99,
    description:
      "The perfect sharpener for daily use, whether you are a business professional, teacher, student, or simply love to use graphite and colored pencils!",
    image: "images/sharpener.jpg",
    category: "school",
  },
  {
    name: "Mechanical Pencils",
    price: 8.99,
    description:
      "Convenient value pack offers an assortment of 0.5 millimeter 0.7 millimeter and 0.9 millimeter mechanical pencils.",
    image: "images/mechpencils.jpg",
    category: "school",
  },
  {
    name: "No.2 Pencils",
    price: 5.99,
    description:
      "150 wood case #2 HB pencils made from high-quality wood come presharpened.",
    image: "images/pencils.jpg",
    category: "school",
  },
  {
    name: "Construction Paper",
    price: 15.99,
    description:
      "This multipack of construction paper gives you more of the colors that you'll use the most - a classroom essential.",
    image: "images/constrution.jpg",
    category: "school",
  },
  {
    name: "Index Cards",
    price: 3.99,
    description:
      "300-count pack of neon index cards; includes 4 assorted neon colors.",
    image: "images/index.jpg",
    category: "school",
  },
  {
    name: "Highlighters",
    price: 9.99,
    description:
      "Features Smear Guard ink specially formulated to resist smearing when highlighting over many pen and maker inks (includes written notes, faxes, copies, newspapers and more let ink dry before highlighting).",
    image: "images/highlighters.jpg",
    category: "school work",
  },
  {
    name: "Elmers Glue",
    price: 2.99,
    description:
      "School glue, Safe and non-toxic, Washable, no-run, Bonds paper, wood, cloth and pottery, White.",
    image: "images/elmers.jpg",
    category: "school",
  },
  {
    name: "10 inch iPad",
    price: 299.99,
    description:
      "10.2-Inch Retina Display, 8MP back camera, 1.2MP FaceTime HD Front camera, up to 10 hours of battery life.",
    image: "images/ipad.jpg",
    category: "school work",
  },
  {
    name: "Merriam-Webster 3 Pack",
    price: 18.99,
    description:
      "Newest Edition, Merriam-Webster's Everyday Language Reference Set is a perfect reference tool to help with home schooling and remote learning.",
    image: "images/dictionary.jpg",
    category: "school",
  },
  {
    name: "Erasers",
    price: 1.99,
    description:
      "100% latex-free and smudge-resistant eraser to keep your pages fresh.",
    image: "images/erasers.jpg",
    category: "school",
  },
  {
    name: "White Board",
    price: 29.99,
    description:
      "Dry erase board provides a smooth writing surface and doubles as a magnetic bulletin board.",
    image: "images/whiteboard.jpg",
    category: "school work",
  },
  {
    name: "Dry Erase Markers",
    price: 8.99,
    description:
      "Bright, vivid, non toxic ink is quick drying, smear proof, easy to see from a distance, and provides consistent color quality.",
    image: "images/dryerase.jpg",
    category: "school work",
  },
  {
    name: "Ruler Pack",
    price: 2.99,
    description:
      "Each pack of 12 inch color rulers come with four (4) different colors: blue, green, orange, and purple.",
    image: "images/ruler.jpg",
    category: "school",
  },
  {
    name: "Crayons",
    price: 16.99,
    description:
      "The variety of bright colors in this pack invites imaginative expression.",
    image: "images/crayons.jpg",
    category: "school",
  },
  {
    name: "Kids Headphones with Mic",
    price: 24.99,
    description:
      "SAFER TO USE WITH VOLUME LIMITING: With a maxed out volume of 85dB - a generally accepted safe listening level, parents can rest assured their kids’ hearing won’t be negatively impacted.",
    image: "images/headphones.jpg",
    category: "school",
  },
  {
    name: "Kids Keyboard",
    price: 49.99,
    description:
      "The layout and key selection are the same as adult models, which makes for easy touch-typing.Practice and success will help your child develop good sentence structure, build memory skills and gain confidence.",
    image: "images/keyboard.jpg",
    category: "school",
  },
  {
    name: "Kids Wireless Mouse",
    price: 8.99,
    description:
      "2.4GHz Wireless - A more secure and precise experience than the traditional FM radio system with an increased working distance of up to 10m.",
    image: "images/mouse.jpg",
    category: "school",
  },

  {
    name: "Sticky Memo Ball",
    price: 12.99,
    description:
      "Its 12 sticky sides each feature tear-off sticky memos in different colors so you can get creative with group brainstorming at work or keeping the whole family organized at home.",
    image: "images/stickymemoball.jpg",
    category: "work school",
  },
  {
    name: "Drafting Table",
    price: 129.99,
    description:
      "Table with Storage, Adjustable Drawing Desk Rolling Art Craft Station Writing Work Table with Drawers & Wheels.",
    image: "images/table.jpg",
    category: "work",
  },
  {
    name: "Ergonomic Office Chair",
    price: 136.99,
    description:
      "Featuring reliable ergonomic support, Articulate comes with a breathable mesh back, passive lumbar support, and generously padded and contoured.",
    image: "images/chair.jpg",
    category: "work",
  },
  {
    name: "LED Desk Light",
    price: 39.99,
    description:
      "Wonderfully Gentle on the Eyes: Shines a flicker-free light that brightens your space without harming your eyes; ideal for reading, working or studying.",
    image: "images/light.jpg",
    category: "work school",
  },
  {
    name: "Espresso Maker",
    price: 149.99,
    description:
      "Nespresso Inissia by De'Longhi offers an impeccable single serve Coffee or Espresso cup every time, thanks to its automatic operation and patented extraction system which delivers up to 19 bars of pressure.",
    image: "images/nespresso.jpg",
    category: "work household groceries",
  },
  {
    name: "Air Pods",
    price: 199.99,
    description: "Active noise cancellation for immersive sound.",
    image: "images/airpods.jpg",
    category: "work entertainment school",
  },
  {
    name: "Retro Handset",
    price: 9.99,
    description:
      "Using a Pop reduces up to 99% of the radiation absorbed compared to a direct use of your mobile phone. Native 3.5mm jack to plug directly in your iPhone, Blackberry and latest MacBook's.",
    image: "images/retro.jpg",
    category: "work entertainment",
  },
  {
    name: "Portable Speaker",
    price: 149.99,
    description:
      "This Logitech wireless speaker delivers deep bass and full-bodied audio for an immersive listening experience.",
    image: "images/ueboom.jpg",
    category: "work entertainment",
  },
  {
    name: "Apple Magic Keyboard",
    price: 94.99,
    description:
      "Magic Keyboard combines a sleek design with a built-in rechargeable battery and enhanced key features.",
    image: "images/applekey.jpg",
    category: "work entertainment",
  },
  {
    name: "21.5 inch Monitor",
    price: 109.99,
    description: "21.5 inches Full HD (1920 x 1080) widescreen IPS display.",
    image: "images/monitor.jpg",
    category: "work school entertainment",
  },
  {
    name: "24 inch Curved Monitor",
    price: 129.99,
    description:
      "1800R curve monitor the curved display delivers a revolutionary visual experience with a leading 1800R screen curvature as the images appear to wrap around you for an in depth, immersive experience.",
    image: "images/curved.jpg",
    category: "work school entertainment",
  },
  {
    name: "Laptop Stand",
    price: 24.99,
    description:
      "The MOFT Laptop Stand weighs a mere 3 oz. and is only 1/10 inch thick - it’s compactness born of innovation. Since MOFT is literally light as paper and slim as a coin, it’s a laptop stand perfect for mobile working.",
    image: "images/stand.jpg",
    category: "work school",
  },
  {
    name: "Laptop Table",
    price: 64.99,
    description:
      "This multifunctional table will be a perfect addition to your office, home or home office.",
    image: "images/stand.jpg",
    category: "work",
  },
  {
    name: "Power Strip",
    price: 21.99,
    description:
      "Power for All - 1875W/15A heavy duty design with 12 outlets/sockets in one powerstrip which allow you charge multi devices at the same time, suitable for most phones, tablets and other appliance.",
    image: "images/files.jpg",
    category: "work",
  },
  {
    name: "Folders for Files",
    price: 10.99,
    description:
      "25 letter-size hanging file folders to keep your files organized and crisp.",
    image: "images/surge.jpg",
    category: "work school",
  },
  {
    name: "Filing Cabinet",
    price: 119.99,
    description:
      "Filing cabinet with modern finish is a very attractive addition to your home office and provides excellent storage.",
    image: "images/cab.jpg",
    category: "work",
  },
  {
    name: "Sleek Filing Cabinet",
    price: 149.99,
    description:
      "The interlock system secures 3 drawers and comes with 2 keys to protect your files and valuables. As a safety mechanism to avoid tipping, only 1 drawer can be opened at a time.",
    image: "images/cab2.jpg",
    category: "work",
  },
  {
    name: "Echo Dot",
    price: 49.99,
    description:
      "Meet Echo Dot - smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small spaces.",
    image: "images/dot.jpg",
    category: "work entertainment",
  },
  {
    name: "Paper Shredder",
    price: 39.99,
    description:
      "Cross-cut shred size: turns paper into small confetti-like pieces measuring 3/16 by 1-27/32 inches (5 by 47 mm); meets security level P-3 standards.",
    image: "images/shredder.jpg",
    category: "work",
  },
  {
    name: "Recycled Sticky Notes",
    price: 17.99,
    description:
      "Post-it Super Sticky Notes stick and re-stick so your thoughts get noticed.",
    image: "images/posits.jpg",
    category: "work school",
  },
  {
    name: "File Holder",
    price: 34.99,
    description:
      "Organizer with 8 sections for holding important files and binders vertically.",
    image: "images/fileholder.jpg",
    category: "work school",
  },
  {
    name: "Paper Clips",
    price: 2.99,
    description:
      "Assort sizes, 400pcs big paper clips, included 250pcs of 1.3 inch paper clip, 150pcs of 2.0 inch paper clips, large size paperclips are perfect for holding more and thicker papers.",
    image: "images/paperclips.jpg",
    category: "work school",
  },
  {
    name: "Stapler",
    price: 13.99,
    description: "Use one finger to staple up to 20 sheets.",
    image: "images/stapler.jpg",
    category: "work school",
  },
  {
    name: "Printer",
    price: 189.99,
    description:
      "Upgrade your office – Replacing the HP OfficeJet Pro 6978, this home office printer offers faster printing at 20 pages per minute, includes fax and scan-to-USB capabilities, and is 14% smaller.",
    image: "images/printer.jpg",
    category: "work school",
  },
  {
    name: "Tea Pot",
    price: 49.99,
    description:
      "Brew a delicious cup of tea in this glass tea press that utilizes the same brewing system as the French press; perfect for loose teas and tea bags.",
    image: "images/teapos.jpg",
    category: "work household groceries health",
  },
  {
    name: "Dual Sided Leather Desk Mat",
    price: 17.99,
    description:
      "Made of durable PU leather material, which protects your glass/wooden desktop from scratches, stains, spills, heat and scuffs.",
    image: "images/stickymemoball.jpg",
    category: "work school",
  },
  {
    name: "Color Journal Pens",
    price: 7.99,
    description:
      "SMOOTH WRITING Colorful Fine tip marker pen set with superfine, metal-clad fine tipped and outstanding performance in all areas of writing, drawing, coloring, easy and comfortable to write.",
    image: "images/colorpenset.jpg",
    category: "work school",
  },
  {
    name: "Gel Seat Cushion",
    price: 29.99,
    description:
      "BEST gel & memory foam seat cushion made of premium quality durable memory foam with thick gel layer for superior comfort and lower back pain relief, comes with NON-SLIP rubber bottom, BUILT-IN HANDLE for easy transport , EASY CLEANING machine-wash cover.",
    image: "images/gelseat.jpg",
    category: "work school",
  },
  {
    name: "Paperclip Block",
    price: 6.99,
    description:
      "Set Of 50 Colorful Paper Clips, 50 Silver Paper Clips And 1 Super Powerful Magnet Base.",
    image: "images/paperclipmagnet.jpg",
    category: "work school",
  },
  {
    name: "Rose Gold Pens",
    price: 8.99,
    description:
      "A big sparkling diamond is attached on top of the colorful metal ballpoint pen, and this unique design looks high, pure and charm.",
    image: "images/diamondpens.jpg",
    category: "work",
  },
  {
    name: "Paper Clip Pack",
    price: 4.99,
    description:
      "Shine Looking Paper Clips Bookmarks of Elephant Cat Bird Dachshund Shapes Assorted.",
    image: "images/funclips.jpg",
    category: "school",
  },
  {
    name: "Cute Gel Ink Pens",
    price: 10.99,
    description:
      "15 Types: as images shown, the pens are in unicorn, racket, cactus, doughnut, carrot and other shapes, adorable pens bring users more fun, let you enjoy the period of writing.",
    image: "images/funpens.jpg",
    category: "school",
  },
  {
    name: "Gold & Turquoise Paper Clips",
    price: 8.99,
    description:
      "Golden and light blue paperclips in a stylish cyan magnetic holder, a perfect addition of attractive color on your desk, unique workspace styling accessories.",
    image: "images/bluepaperclips.jpg",
    category: "work",
  },
  {
    name: "Mouse Pad - Brain",
    price: 7.99,
    description:
      "Soft materials comfortable for wrists and hands, smooth surface, non-slip rubber undersurface firmly grips the desktop.",
    image: "images/mousepad.jpg",
    category: "work school entertainment",
  },
  {
    name: "Rainbow Tape Dispenser",
    price: 7.99,
    description:
      "Colorful rainbow tone blade and metal core with clear acrylic body desktop office tape dispenser.",
    image: "images/tapedis.jpg",
    category: "work",
  },
  {
    name: "Colorful Blank Notebook",
    price: 9.99,
    description:
      "Pretty design, made with high quality paper and covers for easy writing and durability.",
    image: "images/colornotebook.jpg",
    category: "work school entertainment",
  },
  {
    name: "Sticky Organizer",
    price: 7.99,
    description:
      "Complete Set: Package includes Planner dividers of all kind. Ruled Lined, blank, Dotted and index bookmarks tab in various colors. 402 sheets in total, meeting your all kinds of needs.",
    image: "images/stickyorg.jpg",
    category: "work school",
  },
  {
    name: "Wooden Desk Calendar",
    price: 16.99,
    description:
      "Nature wood desk perpetual calendar features 100% premium wooden blocks on a wood golden stand. It is so fun to change the blocks every day.",
    image: "images/calend.jpg",
    category: "work",
  },
  {
    name: "Stress Relief Cards",
    price: 12.99,
    description:
      "50 EASY EXERCISES FOR EVERYONE: This unique Stress Less Cards deck contains 50 extremely effective exercises to help you relieve stress and deal with anxiety whenever you need it the most. Easy for everyone to use, these powerful techniques can be quickly memorized and used in any situation; on the bus, at work, at your desk, while queuing at the supermarket or before going to bed at night. ",
    image: "images/stress.jpg",
    category: "work entertainment health",
  },
  {
    name: "T-Rex Sticky Notes",
    price: 9.99,
    description:
      "Escape the office monotony with these fun T-Rex Sticky Notes.",
    image: "images/trex.jpg",
    category: "work",
  },
  {
    name: "Acrylic Scissors",
    price: 13.99,
    description:
      "Elegant aurora scissors is great gift for your family, friends, teammate, boss.",
    image: "images/worksc.jpg",
    category: "work",
  },
  {
    name: "Avocado Pins",
    price: 10.99,
    description:
      "Our decorative thumbtack is designed with a fruit avocado shape,exquisite workmanship,small and cute,it is the best supplies for office and study.",
    image: "images/avo.jpg",
    category: "work school",
  },
  {
    name: "Acrylic Clipboard",
    price: 21.99,
    description:
      "Clear acrylic with gold modern design style will make a unique and stylish addition to your workplace.",
    image: "images/clipboard.jpg",
    category: "work school",
  },
  {
    name: "Prisma Picture Frame",
    price: 14.99,
    description: "Unique 4x6 photo frame perfect for your home office.",
    image: "images/frame.jpg",
    category: "work",
  },
  {
    name: "Buddha Board",
    price: 34.99,
    description:
      "Easy to Use: Simply fill the stand with water. Then dip in the bamboo brush (included) & start drawing, painting & writing. You'll create soft, beautiful images with a rich, inky Japanese look. Appreciate your creation in the moment, and then as the water evaporates and your masterpiece slowly fades away, practice the art of letting go.",
    image: "images/buddha.jpg",
    category: "work school health entertainment",
  },
  {
    name: "Leather Desk Organizer",
    price: 24.99,
    description:
      "Foldable stylish design with elegant faux leather with delicate white stitching to keep your home or office decor looking stylish and chic.",
    image: "images/leatherorg.jpg",
    category: "work",
  },
  {
    name: "Cute Animal Erasers",
    price: 5.99,
    description:
      "Roll the eraser cleaner across paper, a desk, counter or table to pick up the annoying eraser fragments!",
    image: "images/anierasers.jpg",
    category: "school",
  },
  {
    name: "Geometric Marble Mousepad",
    price: 6.99,
    description:
      "Soft materials comfortable for hands, smooth surface, non-slip rubber undersurface firmly grips the desktop. Easy cleaning and maintenance.",
    image: "images/shapemousepad.jpg",
    category: "school work entertainment",
  },
  {
    name: "Fox Mousepad",
    price: 7.99,
    description:
      "Natual Rubber Base With Silky Cloth Surface. Easy Cleaning and Maintenance.",
    image: "images/foxmousepad.jpg",
    category: "school work entertainment",
  },
  {
    name: "Wood Calculator",
    price: 11.99,
    description: "Extra Large 10-digit Angled LCD Display.",
    image: "images/woodcalc.jpg",
    category: "work",
  },
  {
    name: "Groot Pen Holder",
    price: 8.99,
    description:
      "Used as a pen holder- Groot action figures perfect design, can be placed on your desk, organized your pen or small items, very cute collectibles.",
    image: "images/groot.jpg",
    category: "work school",
  },
  {
    name: "Wooden Desk Organizer",
    price: 16.99,
    description:
      "Set of 12 compartments with a drawer, large capacity ,The desktop organiser shelf is fixed with the screws, which can tightly connect the separate parts.",
    image: "images/woodorg.jpg",
    category: "work school",
  },
  {
    name: "Decorative File Folders",
    price: 16.99,
    description:
      "This 12 pack of pretty designer top tab file folders offer a modern spin to a simple organization necessity. Elevate your desk décor by storing documents, receipts, and notes in style and keep yourself organized at work or school.",
    image: "images/pinkfolders.jpg",
    category: "work school",
  },
  {
    name: "Pink Office Organizer Set",
    price: 35.99,
    description:
      "You can store all your supplies with this 5 piece set that includes a hanging file folder organizer, a magazine file holder, a pen cup, a sticky not holder, and a small file organizer - letter sorter.",
    image: "images/pinkmesh.jpg",
    category: "work",
  },
  {
    name: "Prism Writing Pads",
    price: 9.99,
    description:
      "Prism+ Writing Pads add a little pop of color to your daily tasks; enjoy pretty colors perfect for general daily use, or color code by subject or project to boost your efficiency.",
    image: "images/prismnote.jpg",
    category: "work school",
  },
  {
    name: "Wooden Desk Organizer",
    price: 34.99,
    description:
      "The perfect all-round table-top organizer, this decorative 4-drawer wooden storage organizer keeps paperclips, staples, pens, mini scissors and post-it notes in their place.",
    image: "images/woodorganizer.jpg",
    category: "work",
  },
  {
    name: "Watercolor Paint Set",
    price: 23.99,
    description:
      "High Quality Pigment — All paints are thick and creamy do not shift or become muddy, can be diluted with plenty of water do not cracking or crumbling when the paint dries.",
    image: "images/watercolors.jpg",
    category: "school entertainment",
  },
  {
    name: "Cat Pens",
    price: 6.99,
    description:
      "Material: plastic pen shell, lightweight and easy to carry, do not distort, convenient to put in handbag and you can use this pen for emergency, can replace the pen refills and good for your long-term use.",
    image: "images/catpens.jpg",
    category: "school",
  },
  {
    name: "Treat Pens",
    price: 12.99,
    description:
      "We all love stationery so wait until you feel these cool novelty pens in your hand, the smile on your face & the look on your desk. ",
    image: "images/treatpens.jpg",
    category: "school work entertainment",
  },
  {
    name: "Label Printer",
    price: 34.99,
    description: "Prints up to 2-lines on labels up to 12 millimeter wide. ",
    image: "images/labelprint.jpg",
    category: "household work",
  },
  {
    name: "Ring Doorbell",
    price: 59.99,
    description:
      "720p HD video doorbell that lets you see, hear and speak to people from your phone, tablet, or select Echo device.",
    image: "images/ring.jpg",
    category: "protection",
  },
  {
    name: "Daily Planner",
    price: 10.99,
    description:
      "50 high-quality sheets. Undated to help you organize your week.",
    image: "images/dailyplan.jpg",
    category: "work school",
  },
  {
    name: "Succulents",
    price: 19.99,
    description:
      "HAND SELECTED: Every pack of succulents we send is hand-picked. You will receive a unique collection of species that are FULLY ROOTED IN 2 INCH POTS.",
    image: "images/succ.jpg",
    category: "work health",
  },
  {
    name: "Funny Notepad",
    price: 12.99,
    description:
      "Each pad has 50 sheets of printed paper, size 4.25 x 5.5 inches.",
    image: "images/funnynote.jpg",
    category: "work",
  },
  {
    name: "Floppy Disc Coasters",
    price: 8.99,
    description:
      "Novelty set silicone drink coasters eco-friendly and dishwasher Safe. Unique shape fit for most of family needs.",
    image: "images/floppy.jpg",
    category: "work",
  },
  {
    name: "Rose Desk Kit",
    price: 19.99,
    description:
      "1* rosegold acrylic stapler, 1* rosegold acrylic tape dispenser,1* rosegold acrylic staple remover, 1000 pcs rosegold Standard staples.",
    image: "images/roseacry.jpg",
    category: "work",
  },
  {
    name: "Hemingway Pencil Cup",
    price: 19.99,
    description: "Typewriter themed design, faux stone.",
    image: "images/typehold.jpg",
    category: "work",
  },
  {
    name: "Bounty Paper Towels",
    price: 4.99,
    description: "Good for cleaning as well as wounds!",
    image: "images/bounty-papertowels.jpg",
    category: "groceries household",
  },
  {
    name: "Dixie Plates",
    price: 6.99,
    description: "Paper plates.",
    image: "images/dixie-plates.jpeg",
    category: "groceries household",
  },
  {
    name: "Bushs Baked Beans",
    price: 3.99,
    description: "Canned baked beans.",
    image: "images/bushs-baked-beans-orig.jpg",
    category: "groceries",
  },
  {
    name: "Plastic Cuttlery",
    price: 9.99,
    description: "Disposable plastic cuttlery.",
    image: "images/clear-dixie-cutlery.jpg",
    category: "groceries household",
  },
  {
    name: "Nacho Doritos",
    price: 5.99,
    description: "Cheese flavored chips.",
    image: "images/doritos-nacho.jpg",
    category: "groceries",
  },
  {
    name: "Local Honey",
    price: 0.99,
    description:
      "Get some local honey, it will have local pollin and will help build immunity.",
    image: "images/jar-of-honey.jpg",
    category: "groceries health",
  },
  {
    name: "Water purification tablets",
    price: 19.99,
    description: "Helps disinfect and make drinking water clean.",
    image: "images/water-purification-tabs.jpg",
    category: "groceries",
  },
  {
    name: "Life Straw",
    price: 19.99,
    description: "Makes any water clean and safe to drink.",
    image: "images/lifestraw-high-res.png",
    category: "groceries household",
  },
  {
    name: "Hostess Twinkies",
    price: 5.99,
    description: "The infamous twinkie (Must have).",
    image: "images/hostess_twinkies.jpg",
    category: "groceries",
  },
  {
    name: "Beef Jerky",
    price: 8.99,
    description: "Stores for a long time, high in protein.",
    image: "images/BEEF-JERKY.jpg",
    category: "groceries",
  },
  {
    name: "Canned Corn",
    price: 3.99,
    description: "Canned Sweet Corn.",
    image: "images/canned_sweet_corn.jpg",
    category: "groceries",
  },
  {
    name: "Canned Tuna",
    price: 4.99,
    description: "Canned tuna, long shelf life.",
    image: "images/canned-tuna.jpg",
    category: "groceries",
  },
  {
    name: "Kidney Beans",
    price: 5.99,
    description: "Dried kidney beans, must be soaked before cooking.",
    image: "images/kidney-beans.jpg",
    category: "groceries",
  },
  {
    name: "Pasta",
    price: 7.99,
    description: "Box of assorted pasta.",
    image: "images/Pasta.jpg",
    category: "groceries",
  },
  {
    name: "Peanut Butter",
    price: 3.99,
    description: "Long shelf life, high in protein, good tasting.",
    image: "images/peanutbutter.jpg",
    category: "groceries",
  },
  {
    name: "Pinto Beans",
    price: 5.99,
    description: "Dried kidney beans, must be soaked before cooking.",
    image: "images/pinto-beans-dry.jpg",
    category: "groceries",
  },
  {
    name: "Powdered Milk",
    price: 7.99,
    description: "Dry, powdered milk. Mix with water.",
    image: "images/powdered-milk.jpg",
    category: "groceries",
  },
  {
    name: "Kellogs Frosted Flakes",
    price: 5.99,
    description: "Dry cereal.",
    image: "images/frosted-flakes.jpg",
    category: "groceries",
  },
  {
    name: "Pasta Sauce",
    price: 3.99,
    description: "Pasta sauce. Goes good with cooked pasta.",
    image: "images/pinto-beans-dry.jpg",
    category: "groceries",
  },
  {
    name: "Spam",
    price: 1.99,
    description: "Staple of any prepper. Good shelf life.",
    image: "images/pinto-beans-dry.jpg",
    category: "groceries",
  },
  {
    name: "Worcestershire Sauce",
    price: 6.99,
    description: "Sauce good for merinade.",
    image: "images/Worcestershire.jpg",
    category: "groceries",
  },
  {
    name: "Zephyrhills Bottled Water",
    price: 9.99,
    description: "Bottled water.",
    image: "images/zephyrhills.png",
    category: "groceries",
  },
  {
    name: "Gatorade Powder",
    price: 6.99,
    description: "High in electrolytes.",
    image: "images/gatorade.jpg",
    category: "groceries",
  },
  {
    name: "Kraft Mac and Cheese",
    price: 3.99,
    description: "Good carb source.",
    image: "images/kraft-mac-and-cheese.jpg",
    category: "groceries",
  },
  {
    name: "Snickers",
    price: 2.99,
    description: "Snack on the go.",
    image: "images/snickers.jpg",
    category: "groceries",
  },
  {
    name: "Reeses",
    price: 3.99,
    description: "Sugary snack.",
    image: "images/reeses.png",
    category: "groceries",
  },
  {
    name: "Oreo",
    price: 5.99,
    description: "Sugary snack.",
    image: "images/oreo.jpg",
    category: "groceries",
  },
  {
    name: "White Rice",
    price: 2.99,
    description: "Good source of carbs. Long lasting storage if kept dry.",
    image: "images/white-rice.jpeg",
    category: "groceries",
  },
  {
    name: "Honey Nut Cheerios",
    price: 5.99,
    description: "Dry cereal.",
    image: "images/honey-nut-cheerios.jpg",
    category: "groceries",
  },
  {
    name: "Espresso Powder",
    price: 11.99,
    description: "Espresso powder. Good for a caffine boost.",
    image: "images/medalgia-doro-espresso-powder.jpg",
    category: "groceries",
  },
  {
    name: "Instant Coffee",
    price: 7.99,
    description: "Coffee powder. Good for a caffine boost.",
    image: "images/instant-coffee.jpeg",
    category: "groceries",
  },
  {
    name: "Wise Food Bucket",
    price: 29.99,
    description: "Bucket of freeze dried meals. Just add water!",
    image: "images/food-bucket-wise.jpg",
    category: "groceries",
  },
  {
    name: "Space Icecream",
    price: 6.99,
    description: "Freeze dried icecream bar.",
    image: "images/space-icecream.jpg",
    category: "groceries",
  },
  {
    name: "Mountain House",
    price: 15.99,
    description: "Freeze dried food. Just add water.",
    image: "images/freeze-dried-chicken-rice.jpg",
    category: "groceries",
  },
  {
    name: "Z-Ration",
    price: 19.99,
    description: "Packaged food with included heater.",
    image: "images/z-ration.jpg",
    category: "groceries",
  },
  {
    name: "MRE",
    price: 10.99,
    description: "Military style packaged food with included heater.",
    image: "images/MRE.jpg",
    category: "groceries",
  },
  {
    name: "Ready Hour Food Ammo Box",
    price: 29.99,
    description: "Ammo crate full of ready made food.",
    image: "images/RH.jpg",
    category: "groceries",
  },
  {
    name: "Wise Food Pallet",
    price: 149.99,
    description: "Pallet full of Wise Food packaged food.",
    image: "images/wise-food-pallet.jpg",
    category: "groceries",
  },
  {
    name: "Canned Chicken",
    price: 1.99,
    description: "Long lasting can of chicken.",
    image: "images/Canned_Chicken_Breast.jpg",
    category: "groceries",
  },
  {
    name: "Canned Boiled Peanuts",
    price: 8.99,
    description: "Can of boiled peanuts.",
    image: "images/boiled-peanuts.jpg",
    category: "groceries",
  },
  {
    name: "Natalies' Bananas",
    price: 999999.99,
    description:
      "Grants one the power to code without any bugs....also tastes good.",
    image: "images/banana.png",
    category: "groceries school work protection",
  },
  {
    name: "223 Ammo",
    price: 0.69,
    description: "Ammo. Price is per round.",
    image: "images/223.jpg",
    category: "protection",
  },
  {
    name: "9mm Ammo",
    price: 0.89,
    description: "Ammo. Price is per round.",
    image: "images/9mm.jpg",
    category: "protection",
  },
  {
    name: "556 Ammo",
    price: 0.78,
    description: "Ammo. Price is per round.",
    image: "images/556.jpg",
    category: "protection",
  },
  {
    name: "22lr Ammo",
    price: 0.09,
    description: "Ammo. Price is per round.",
    image: "images/22lr.jpg",
    category: "protection",
  },
  {
    name: "22 Sub Sonic Ammo",
    price: 0.14,
    description: "Ammo. Price is per round.",
    image: "images/22sub.jpg",
    category: "protection",
  },
  {
    name: "50BMG Ammo",
    price: 2.85,
    description: "Ammo. Price is per round.",
    image: "images/50.jpg",
    category: "protection",
  },
  {
    name: "357 Magnum Ammo",
    price: 0.84,
    description: "Ammo. Price is per round.",
    image: "images/357.jpg",
    category: "protection",
  },
  {
    name: "38 Special Ammo",
    price: 0.79,
    description: "Ammo. Price is per round.",
    image: "images/38.jpg",
    category: "protection",
  },
  {
    name: "12 Gauge Slug Ammo",
    price: 1.0,
    description: "Ammo. Price is per round.",
    image: "images/12slug.jpg",
    category: "protection",
  },
  {
    name: "12 Gauge Buckshot Ammo",
    price: 0.98,
    description: "Ammo. Price is per round.",
    image: "images/12buck.jpg",
    category: "protection",
  },
  {
    name: "410 Ammo",
    price: 0.57,
    description: "Ammo. Price is per round.",
    image: "images/410.jpg",
    category: "protection",
  },
  {
    name: "Switch Blade",
    price: 9.99,
    description: "Concealable knife.",
    image: "images/switchblade.JPG",
    category: "protection",
  },
  {
    name: "Pocket Knife with Seatbelt Cutter",
    price: 11.99,
    description: "Sturdy knife with a built in seat belt cutter.",
    image: "images/knifeseatbelt.jpg",
    category: "protection",
  },
  {
    name: "THE ULTIMATE Swiss Army Knife",
    price: 1499.99,
    description:
      "The ultimate Swiss Army knife. If it does not have it, you do not need it!",
    image: "images/ultimateswissarmy.jpg",
    category: "protection",
  },
  {
    name: "Swiss Army Knife",
    price: 24.99,
    description: "Standard Swiss Army knife.",
    image: "images/Swiss-army-knife-vsa.jpg",
    category: "protection",
  },
  {
    name: "223/556 Drum Mag",
    price: 149.99,
    description: "100 Round Magazine for 223 or 556 ammo.",
    image: "images/223drum.jpg",
    category: "protection",
  },
  {
    name: "AR-15 30 round Mag",
    price: 9.99,
    description: "Magazine for 223 or 556 ammo for an AR-15.",
    image: "images/ar1530.jpg",
    category: "protection",
  },
  {
    name: "AK Mag",
    price: 10.99,
    description: "Banana magazine for an AK.",
    image: "images/akmag.jpg",
    category: "protection",
  },
  {
    name: "Pepper Spray",
    price: 9.99,
    description: "Keep an attacker at bay with Pepper Spray!",
    image: "images/pepperspray.jpg",
    category: "protection",
  },
  {
    name: "Glock 9mm Drum Clip",
    price: 99.99,
    description: "50 round capacity.",
    image: "images/glock9mmdrummag.jpg",
    category: "protection",
  },
  {
    name: "Glock Clip",
    price: 11.99,
    description: "Standard Glock clip.",
    image: "images/glockclip.jpg",
    category: "protection",
  },
  {
    name: "Revolver Speed Loader",
    price: 24.99,
    description: "Fits most 8 shot revolvers.",
    image: "images/speedloader.jpg",
    category: "protection",
  },
  {
    name: "Wakizashi Katana",
    price: 174.99,
    description: "Forged steel, battle tested, Matthew Forgette approved.",
    image: "images/katana-wakizashi.jpg",
    category: "protection",
  },
  {
    name: "Black Steel Katana",
    price: 199.99,
    description:
      "Forged by the Great Nicolas Olivares, this trusty steel will last many generations.",
    image: "images/Katana-black.jpg",
    category: "protection",
  },
  {
    name: "Louisville Slugger",
    price: 29.99,
    description: "Standard solid core Louisville Slugger.",
    image: "images/louisvilleslugger.jpg",
    category: "protection entertainment",
  },
  {
    name: "Barb Wire Wrapped Louisville Slugger",
    price: 99.99,
    description:
      "Upgraded Louisville Slugger with a steel core and wrapped with barb wire. Crush your attacker as well as Falon Landers crushes code and CSS.",
    image: "images/watwire.jpg",
    category: "protection",
  },
  {
    name: "Crossbow",
    price: 149.99,
    description: "Silently and efficiently hunt your next meal, but sideways.",
    image: "images/crossbow.jpg",
    category: "protection",
  },
  {
    name: "Crossbow Arrows",
    price: 5.99,
    description: "Price is per arrow. Tipped with tri-blades.",
    image: "images/crossarrow.jpg",
    category: "protection",
  },
  {
    name: "Recurve Bow",
    price: 299.99,
    description: "Handmade by a shamin from the High Alps.",
    image: "images/recurve.jpg",
    category: "protection",
  },
  {
    name: "Compound Bow",
    price: 99.99,
    description: "Silently and efficiently hunt your next meal, but upright.",
    image: "images/compound-bow.jpg",
    category: "protection",
  },
  {
    name: "Set of arrows with quiver",
    price: 49.99,
    description: "Comes with 50 arrows and 1 quiver.",
    image: "images/crossbow.jpg",
    category: "protection",
  },
  {
    name: "Taser",
    price: 174.99,
    description: "Stun your attacker.",
    image: "images/taser.jpg",
    category: "protection",
  },
  {
    name: "Bullet proof tactical vest",
    price: 249.99,
    description: "Stay protected while carrying standard equipment.",
    image: "images/bulletproof-vest.jpg",
    category: "protection",
  },
  {
    name: "Creality Ender 3 Pro",
    price: 279.99,
    description: "Print anything and everything you could want or need.",
    image: "images/ender3pro.jpg",
    category: "school work entertainment health",
  },
  {
    name: "braidedline",
    price: 14.99,
    description: "Strong fishing line.",
    image: "images/braidedline.jpg",
    category: "entertainment household",
  },
  {
    name: "Collapsable fishing rod with reel",
    price: 74.99,
    description: "Catch dinner or a mid afternoon snack wherever you go!.",
    image: "images/collapsrodreel.jpg",
    category: "entertainment household",
  },
  {
    name: "Box of assorted hooks",
    price: 39.99,
    description: "Any size hook for any size fish.",
    image: "images/hooksbox.jpg",
    category: "entertainment household",
  },
  {
    name: "Box of assorted lures",
    price: 34.99,
    description: "Most lures for most fish.",
    image: "images/lureskit.jpg",
    category: "entertainment household",
  },
  {
    name: "13 inch MacBook Pro",
    price: 1299.99,
    description: "Good for most coding (especially at Fullstack Academy).",
    image: "images/macpro.jpg",
    category: "entertainment household school work",
  },
  {
    name: "16 inch ASUS ROG Gaming Laptop",
    price: 1799.99,
    description: "Good entry point for portable gaming.",
    image: "images/asusroglaptop.jpg",
    category: "entertainment household school work",
  },
  {
    name: "Custom Built High End Gaming Dekstop",
    price: 3499.99,
    description: "Can handle any game and workload thrown at it. Upgradeable.",
    image: "images/cleardesktop.jpg",
    category: "entertainment household school work",
  },
  {
    name: "1DJI Mavic Mini",
    price: 799.99,
    description: "Good fun and able to check surroundings safely.",
    image: "images/dji-mavic-mini.png",
    category: "entertainment household protection",
  },
  {
    name: "Snow Ghillie Suit",
    price: 1099.99,
    description: "Be invisible in the snow.",
    image: "images/helikon_ghillie_snow_camo.jpg",
    category: "protection",
  },
  {
    name: "Forest Ghillie Suit",
    price: 1099.99,
    description: "Be invisible in the swamp or forest.",
    image: "images/camosystems_ghillie_suit_jackal_wood_1.jpg",
    category: "protection",
  },
];

module.exports = productArray;

//school work - FALON
//entertainment (BOARD GAMES ETC)
//household (LYSOL TP ETC ETC WHATEVER)
//protection (KNIFES, MACE, SECURITY, AMMO ETC)
//health (vitamins, masks, etc etc)
//groceries (NON PERISH)
