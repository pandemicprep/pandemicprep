const productArray = [
    
        // {
        //     name: "Desk Lamp",
        //     price: 39.99,
        //     description: "Light up your study room with this 22-1/2-inch Realspace Gooseneck LED lamp. The clamp effortlessly attaches to various surfaces, while the flexible neck lets you focus the light to enhance visibility.",
        //     image: "images/school/desklamp.jpeg",
        //     category: "school"
        // },
        // {
        //     name: "Ballpoint Pens",
        //     price: 5.99,
        //     description: "Ideal for a wide variety of writing activities and offering reliable performance.",
        //     image: "images/school/ballpoint.jpeg",
        //     category: "school"
        // },
        // {
        //     name: "Black Notebook",
        //     price: 3.99,
        //     description: "1 subject notebook contains 100 wide ruled sheets that are ink bleed resistant.** 10 1/2 x 8 page size.",
        //     image: "images/school/blacknotebook.jpeg",
        //     category: "school"
        // },
        // {
        //     name: "Notebook Pack",
        //     price: 10.99,
        //     description: "6 Multi colored covers Included Hot Pink, Blue, Purple, Lime Green, Yellow, Orange, 1 Subject Notebook; 70 sheets of double-sided Narrow colleged rules paper.",
        //     image: "images/school/notebookpack.jpeg",
        //     category: "school"
        // },
        // {
        //     name: "Colored Pen Pack",
        //     price: 14.99,
        //     description: "Express yourself creatively and fearlessly with FriXion Clicker.",
        //     image: "images/school/coloredpens.jpeg",
        //     category: "school"
        // },
        // {
        //     name: "Blue Light Glasses",
        //     price: 69.99,
        //     description: "Anti-Blue Light Glasses for kids that are designed to block harmful digital blue light.",
        //     image: "images/school/bluelightkids.png",
        //     category: "school"
        // },
        // {
        //     name: "Kids Desk",
        //     price: 329.99,
        //     description: "Kids desk suitable for children aged 3-15 years old, adjustable height seat back and cushion hollow design, breathable, accelerating air circulation helps to adjust the child's sitting posture, increase comfort, and perfect accompany them grow up.",
        //     image: "images/school/desk.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Studio in a Box",
        //     price: 49.99,
        //     description: "Our Studio In A Box is for the budding artist building a foundation of art and craft supplies. The high-quality tools and supplies let you focus on creating.",
        //     image: "images/school/studio.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Organizational Tubs",
        //     price: 34.99,
        //     description: "This storage tub set is made of soft flexible material. Perfect for all types of manipulatives and learning supplies.",
        //     image: "images/school/tubs.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Organizer",
        //     price: 34.99,
        //     description: "This storage tub set is made of soft flexible material. Perfect for all types of manipulatives and learning supplies.",
        //     image: "images/school/tubs.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Math Blocks",
        //     price: 42.99,
        //     description: "Set includes: 100 individual bright and colorful units, 30 rods, 10 flats, 1 cube, and 107 page Base Ten Book. Help students understand abstract base ten concepts; including place value, estimation, operations and fractions.",
        //     image: "images/school/mathblocks.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Glue Sticks",
        //     price: 10.99,
        //     description: "Set of 30. Dries quickly and colorlessly perfect for arts, crafts, and school projects",
        //     image: "images/school/gluesticks.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Scissors",
        //     price: 9.99,
        //     description: "Safety Blunt Tip Blades with Protective Cover: These kids scissors made of extra strong, durable, anti-rust and wear-resistant stainless steel flat-ground blades. Smooth blades offer good performance for cutting paper.",
        //     image: "images/school/scissors.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Scissors",
        //     price: 9.99,
        //     description: "Safety Blunt Tip Blades with Protective Cover: These kids scissors made of extra strong, durable, anti-rust and wear-resistant stainless steel flat-ground blades. Smooth blades offer good performance for cutting paper.",
        //     image: "images/school/scissors.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Fraction Calculator",
        //     price: 17.99,
        //     description: "Elementary/Middle School Fraction Calculator.",
        //     image: "images/school/calculator.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Calculator",
        //     price: 17.99,
        //     description: "Elementary/Middle School Fraction Calculator.",
        //     image: "images/school/calculator.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Cat Calculator",
        //     price: 25.99,
        //     description: "Solar and battery dual power drive. Automatic shut-down, energy saving and environmental protection.",
        //     image: "images/school/catcalculator.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Colored Markers",
        //     price: 6.99,
        //     description: "Features 10 Ultra Clean Markers in classic colors that are perfect for the classroom.",
        //     image: "images/school/coloredmarkers.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Unicorn Tape Dispenser",
        //     price: 16.99,
        //     description: "A MAGICAL DESK ACESSORY: Unicorn-shaped tape dispenser with 2 rolls of rainbow tape.",
        //     image: "images/school/unicorn.jpg",
        //     category: "school"
        // },
        // {
        //     name: "College-Rule Paper",
        //     price: 7.99,
        //     description: "This mega-pack of Oxford loose leaf filler paper has 500 college-ruled sheets for note taking, list making, and showing your work through all of your academic endeavors.",
        //     image: "images/school/paper.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Pocket Folders",
        //     price: 3.99,
        //     description: "0.5mm thick two-pocket plastic folders are made of Super durable poly material to ensure that the product will not be damaged after high-frequency use.",
        //     image: "images/school/folders.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Pencil Sharpener",
        //     price: 1.99,
        //     description: "The perfect sharpener for daily use, whether you are a business professional, teacher, student, or simply love to use graphite and colored pencils!",
        //     image: "images/school/sharpener.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Mechanical Pencils",
        //     price: 8.99,
        //     description: "Convenient value pack offers an assortment of 0.5 millimeter 0.7 millimeter and 0.9 millimeter mechanical pencils.",
        //     image: "images/school/mechpencils.jpg",
        //     category: "school"
        // },
        // {
        //     name: "No.2 Pencils",
        //     price: 5.99,
        //     description: "150 wood case #2 HB pencils made from high-quality wood come presharpened.",
        //     image: "images/school/pencils.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Construction Paper",
        //     price: 15.99,
        //     description: "This multipack of construction paper gives you more of the colors that you'll use the most - a classroom essential.",
        //     image: "images/school/construction.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Index Cards",
        //     price: 3.99,
        //     description: "300-count pack of neon index cards; includes 4 assorted neon colors.",
        //     image: "images/school/index.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Highlighters",
        //     price: 9.99,
        //     description: "Features Smear Guard ink specially formulated to resist smearing when highlighting over many pen and maker inks (includes written notes, faxes, copies, newspapers and more let ink dry before highlighting).",
        //     image: "images/school/highlighters.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Elmers Glue",
        //     price: 2.99,
        //     description: "School glue, Safe and non-toxic, Washable, no-run, Bonds paper, wood, cloth and pottery, White.",
        //     image: "images/school/elmers.jpg",
        //     category: "school"
        // },
        // {
        //     name: "10 inch iPad",
        //     price: 299.99,
        //     description: "10.2-Inch Retina Display, 8MP back camera, 1.2MP FaceTime HD Front camera, up to 10 hours of battery life.",
        //     image: "images/school/ipad.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Merriam-Webster 3 Pack",
        //     price: 18.99,
        //     description: "Newest Edition, Merriam-Webster's Everyday Language Reference Set is a perfect reference tool to help with home schooling and remote learning.",
        //     image: "images/school/dictionary.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Erasers",
        //     price: 1.99,
        //     description: "100% latex-free and smudge-resistant eraser to keep your pages fresh.",
        //     image: "images/school/erasers.jpg",
        //     category: "school"
        // },
        // {
        //     name: "White Board",
        //     price: 29.99,
        //     description: "Dry erase board provides a smooth writing surface and doubles as a magnetic bulletin board.",
        //     image: "images/school/whiteboard.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Dry Erase Markers",
        //     price: 8.99,
        //     description: "Bright, vivid, non toxic ink is quick drying, smear proof, easy to see from a distance, and provides consistent color quality.",
        //     image: "images/school/dryerase.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Ruler Pack",
        //     price: 2.99,
        //     description: "Each pack of 12 inch color rulers come with four (4) different colors: blue, green, orange, and purple.",
        //     image: "images/school/ruler.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Crayons",
        //     price: 16.99,
        //     description: "The variety of bright colors in this pack invites imaginative expression.",
        //     image: "images/school/crayons.jpg",
        //     category: "school"
        // },
        // {
        //     name: "Headphones with Mic",
        //     price: 24.99,
        //     description: "SAFER TO USE WITH VOLUME LIMITING: With a maxed out volume of 85dB - a generally accepted safe listening level, parents can rest assured their kids’ hearing won’t be negatively impacted.",
        //     image: "images/school/headphones.jpg",
        //     category: "school"
        // },
        {
            name: "Keyboard",
            price: 49.99,
            description: "The layout and key selection are the same as adult models, which makes for easy touch-typing.Practice and success will help your child develop good sentence structure, build memory skills and gain confidence.",
            image: "images/school/keyboard.jpg",
            category: "school"
        },
        {
            name: "Wireless Mouse",
            price: 8.99,
            description: "2.4GHz Wireless - A more secure and precise experience than the traditional FM radio system with an increased working distance of up to 10m.",
            image: "images/school/mouse.jpg",
            category: "school"
        },
    
        {
            name: "Sticky Memo Ball",
            price: 12.99,
            description: "Its 12 sticky sides each feature tear-off sticky memos in different colors so you can get creative with group brainstorming at work or keeping the whole family organized at home.",
            image: "images/work/stickymemoball.jpg",
            category: "work"
        },
        {
            name: "Drafting Table",
            price: 129.99,
            description: "Table with Storage, Adjustable Drawing Desk Rolling Art Craft Station Writing Work Table with Drawers & Wheels.",
            image: "images/work/table.jpg",
            category: "work"
        },
        {
            name: "Ergonomic Office Chair",
            price: 136.99,
            description: "Featuring reliable ergonomic support, Articulate comes with a breathable mesh back, passive lumbar support, and generously padded and contoured.",
            image: "images/work/chair.jpg",
            category: "work"
        },
        {
            name: "LED Desk Light",
            price: 39.99,
            description: "Wonderfully Gentle on the Eyes: Shines a flicker-free light that brightens your space without harming your eyes; ideal for reading, working or studying.",
            image: "images/work/light.jpg",
            category: "work"
        },
        {
            name: "Espresso Maker",
            price: 149.99,
            description: "Nespresso Inissia by De'Longhi offers an impeccable single serve Coffee or Espresso cup every time, thanks to its automatic operation and patented extraction system which delivers up to 19 bars of pressure.",
            image: "images/work/nespresso.jpg",
            category: "work"
        },
        {
            name: "Air Pods",
            price: 199.99,
            description: "Active noise cancellation for immersive sound.",
            image: "images/work/airpods.jpg",
            category: "work supplies kitchen outdoors camping cooking"
        },
        {
            name: "Retro Handset",
            price: 9.99,
            description: "Using a Pop reduces up to 99% of the radiation absorbed compared to a direct use of your mobile phone. Native 3.5mm jack to plug directly in your iPhone, Blackberry and latest MacBook's.",
            image: "images/work/retro.jpg",
            category: "work"
        },
        {
            name: "Portable Speaker",
            price: 149.99,
            description: "This Logitech wireless speaker delivers deep bass and full-bodied audio for an immersive listening experience.",
            image: "images/work/ueboom.jpg",
            category: "work"
        },
        {
            name: "Apple Magic Keyboard",
            price: 94.99,
            description: "Magic Keyboard combines a sleek design with a built-in rechargeable battery and enhanced key features.",
            image: "images/work/applekey.jpg",
            category: "work"
        },
        {
            name: "21.5 inch Monitor",
            price: 109.99,
            description: "21.5 inches Full HD (1920 x 1080) widescreen IPS display.",
            image: "images/work/monitor.jpg",
            category: "work"
        },
        {
            name: "24 inch Curved Monitor",
            price: 129.99,
            description: "1800R curve monitor the curved display delivers a revolutionary visual experience with a leading 1800R screen curvature as the images appear to wrap around you for an in depth, immersive experience.",
            image: "images/work/curved.jpg",
            category: "work"
        },
        {
            name: "Laptop Stand",
            price: 24.99,
            description: "The MOFT Laptop Stand weighs a mere 3 oz. and is only 1/10 inch thick - it’s compactness born of innovation. Since MOFT is literally light as paper and slim as a coin, it’s a laptop stand perfect for mobile working.",
            image: "images/work/stand.jpg",
            category: "work"
        },
        {
            name: "Laptop Table",
            price: 64.99,
            description: "This multifunctional table will be a perfect addition to your office, home or home office.",
            image: "images/work/stand.jpg",
            category: "work"
        },
        {
            name: "Power Strip",
            price: 21.99,
            description: "Power for All - 1875W/15A heavy duty design with 12 outlets/sockets in one powerstrip which allow you charge multi devices at the same time, suitable for most phones, tablets and other appliance.",
            image: "images/work/files.jpg",
            category: "work"
        },
        {
            name: "Folders for Files",
            price: 10.99,
            description: "25 letter-size hanging file folders to keep your files organized and crisp.",
            image: "images/work/surge.jpg",
            category: "work"
        },
        {
            name: "Filing Cabinet",
            price: 119.99,
            description: "Filing cabinet with modern finish is a very attractive addition to your home office and provides excellent storage.",
            image: "images/work/cab.jpg",
            category: "work"
        },
        {
            name: "Sleek Filing Cabinet",
            price: 149.99,
            description: "The interlock system secures 3 drawers and comes with 2 keys to protect your files and valuables. As a safety mechanism to avoid tipping, only 1 drawer can be opened at a time.",
            image: "images/work/cab2.jpg",
            category: "work"
        },
        {
            name: "Echo Dot",
            price: 49.99,
            description: "Meet Echo Dot - smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small spaces.",
            image: "images/work/dot.jpg",
            category: "work"
        },
        {
            name: "Paper Shredder",
            price: 39.99,
            description: "Cross-cut shred size: turns paper into small confetti-like pieces measuring 3/16 by 1-27/32 inches (5 by 47 mm); meets security level P-3 standards.",
            image: "images/work/shredder.jpg",
            category: "work"
        },
        {
            name: "Recycled Sticky Notes",
            price: 17.99,
            description: "Post-it Super Sticky Notes stick and re-stick so your thoughts get noticed.",
            image: "images/work/posits.jpg",
            category: "work"
        },
        {
            name: "File Holder",
            price: 34.99,
            description: "Organizer with 8 sections for holding important files and binders vertically.",
            image: "images/work/fileholder.jpg",
            category: "work"
        },
        {
            name: "Paper Clips",
            price: 2.99,
            description: "Assort sizes, 400pcs big paper clips, included 250pcs of 1.3 inch paper clip, 150pcs of 2.0 inch paper clips, large size paperclips are perfect for holding more and thicker papers.",
            image: "images/work/paperclips.jpg",
            category: "work"
        },
        {
            name: "Stapler",
            price: 13.99,
            description: "Use one finger to staple up to 20 sheets.",
            image: "images/work/stapler.jpg",
            category: "work"
        },
        {
            name: "Printer",
            price: 189.99,
            description: "Upgrade your office – Replacing the HP OfficeJet Pro 6978, this home office printer offers faster printing at 20 pages per minute, includes fax and scan-to-USB capabilities, and is 14% smaller.",
            image: "images/work/printer.jpg",
            category: "work office"
        },
        {
            name: "Tea Pot",
            price: 49.99,
            description: "Brew a delicious cup of tea in this glass tea press that utilizes the same brewing system as the French press; perfect for loose teas and tea bags.",
            image: "images/work/teapos.jpg",
            category: "work kitchen"
        },
        {
            name: "Sticky Memo Ball",
            price: 12.99,
            description: "Its 12 sticky sides each feature tear-off sticky memos in different colors so you can get creative with group brainstorming at work or keeping the whole family organized at home.",
            image: "images/school/stickymemoball.jpg",
            category: "supplies"
        },
        {
            name: "Sticky Memo Ball",
            price: 12.99,
            description: "Its 12 sticky sides each feature tear-off sticky memos in different colors so you can get creative with group brainstorming at work or keeping the whole family organized at home.",
            image: "images/school/stickymemoball.jpg",
            category: "entertainment"
        }
    
]

module.exports = productArray;