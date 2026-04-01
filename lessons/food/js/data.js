/* ══════════════════════════════════════
   ENGLISHzONE — data.js
   Урок: Їжа та кулінарія
   ══════════════════════════════════════ */

const vocabulary = [
  // Vegetables
  { en:'carrot',    ua:'морква',    tr:'/ˈkærət/',     example:'Peel and chop the carrot finely.',        tag:'vegetables' },
  { en:'onion',     ua:'цибуля',    tr:'/ˈʌnjən/',     example:'Fry the onion until golden.',             tag:'vegetables' },
  { en:'garlic',    ua:'часник',    tr:'/ˈɡɑːrlɪk/',   example:'Add two cloves of garlic.',               tag:'vegetables' },
  { en:'broccoli',  ua:'брокколі',  tr:'/ˈbrɒkəli/',   example:'Steam the broccoli for 5 minutes.',       tag:'vegetables' },
  { en:'spinach',   ua:'шпинат',    tr:'/ˈspɪnɪtʃ/',   example:'Add fresh spinach to the salad.',         tag:'vegetables' },
  { en:'zucchini',  ua:'кабачок',   tr:'/zuːˈkiːni/',  example:'Slice the zucchini thinly.',              tag:'vegetables' },
  { en:'eggplant',  ua:'баклажан',  tr:'/ˈɛɡplænt/',   example:'Grill the eggplant until soft.',          tag:'vegetables' },
  { en:'celery',    ua:'селера',    tr:'/ˈseləri/',     example:'Chop the celery and add to the soup.',    tag:'vegetables' },
  { en:'mushroom',  ua:'гриб',      tr:'/ˈmʌʃruːm/',   example:'Sauté the mushrooms in butter.',          tag:'vegetables' },
  { en:'cucumber',  ua:'огірок',    tr:'/ˈkjuːkʌmbər/',example:'Slice the cucumber for the salad.',       tag:'vegetables' },

  // Fruits
  { en:'strawberry',ua:'полуниця',  tr:'/ˈstrɔːbəri/', example:'Top with fresh strawberries.',            tag:'fruits' },
  { en:'blueberry', ua:'чорниця',   tr:'/ˈbluːbɛri/',  example:'Mix blueberries into the yogurt.',        tag:'fruits' },
  { en:'mango',     ua:'манго',     tr:'/ˈmæŋɡoʊ/',    example:'Dice the mango into small cubes.',        tag:'fruits' },
  { en:'pineapple', ua:'ананас',    tr:'/ˈpaɪnæpəl/',  example:'Add pineapple chunks to the smoothie.',   tag:'fruits' },
  { en:'avocado',   ua:'авокадо',   tr:'/ˌævəˈkɑːdoʊ/',example:'Mash the avocado for guacamole.',        tag:'fruits' },
  { en:'lemon',     ua:'лимон',     tr:'/ˈlɛmən/',     example:'Squeeze lemon juice over the fish.',      tag:'fruits' },
  { en:'peach',     ua:'персик',    tr:'/piːtʃ/',       example:'Slice a ripe peach for the tart.',        tag:'fruits' },
  { en:'raspberry', ua:'малина',    tr:'/ˈræzbɛri/',    example:'Garnish with fresh raspberries.',         tag:'fruits' },

  // Cooking methods
  { en:'boil',   ua:'варити',              tr:'/bɔɪl/',    example:'Boil the pasta for 10 minutes.',            tag:'cooking-methods' },
  { en:'fry',    ua:'смажити',             tr:'/fraɪ/',    example:'Fry the egg in a little oil.',              tag:'cooking-methods' },
  { en:'bake',   ua:'пекти',               tr:'/beɪk/',    example:'Bake the bread at 180°C.',                  tag:'cooking-methods' },
  { en:'steam',  ua:'готувати на парі',    tr:'/stiːm/',   example:'Steam the vegetables to keep nutrients.',   tag:'cooking-methods' },
  { en:'grill',  ua:'смажити на грилі',    tr:'/ɡrɪl/',    example:'Grill the chicken for 6 minutes each side.',tag:'cooking-methods' },
  { en:'roast',  ua:'запікати',            tr:'/roʊst/',   example:'Roast the potatoes with rosemary.',         tag:'cooking-methods' },
  { en:'sauté',  ua:'пасерувати',          tr:'/soʊˈteɪ/',example:'Sauté the onion in olive oil.',             tag:'cooking-methods' },
  { en:'simmer', ua:'тушкувати',           tr:'/ˈsɪmər/',  example:'Let the sauce simmer for 20 minutes.',     tag:'cooking-methods' },
  { en:'mince',  ua:'подрібнювати',        tr:'/mɪns/',    example:'Mince the garlic very finely.',             tag:'cooking-methods' },
  { en:'whisk',  ua:'збивати',             tr:'/wɪsk/',    example:'Whisk the eggs until fluffy.',              tag:'cooking-methods' },
  { en:'knead',  ua:'місити',              tr:'/niːd/',    example:'Knead the dough for 10 minutes.',           tag:'cooking-methods' },
  { en:'peel',   ua:'чистити',             tr:'/piːl/',    example:'Peel the potatoes before boiling.',         tag:'cooking-methods' },

  // Utensils
  { en:'saucepan',     ua:'каструля',   tr:'/ˈsɔːspæn/',    example:'Heat the milk in a saucepan.',              tag:'utensils' },
  { en:'skillet',      ua:'сковорода',  tr:'/ˈskɪlɪt/',     example:'Use a cast-iron skillet for best results.', tag:'utensils' },
  { en:'colander',     ua:'друшляк',    tr:'/ˈkɒləndər/',   example:'Drain the pasta through a colander.',       tag:'utensils' },
  { en:'spatula',      ua:'лопатка',    tr:'/ˈspætʃʊlə/',   example:'Flip the pancake with a spatula.',          tag:'utensils' },
  { en:'ladle',        ua:'ополоник',   tr:'/ˈleɪdəl/',     example:'Use a ladle to serve the soup.',             tag:'utensils' },
  { en:'grater',       ua:'тертка',     tr:'/ˈɡreɪtər/',    example:'Grate the cheese over the pasta.',          tag:'utensils' },
  { en:'rolling pin',  ua:'качалка',    tr:'/ˈroʊlɪŋ pɪn/',example:'Roll out the dough with a rolling pin.',    tag:'utensils' },
  { en:'tongs',        ua:'щипці',      tr:'/tɒŋz/',         example:'Use tongs to turn the meat on the grill.', tag:'utensils' },
  { en:'measuring cup',ua:'мірна чашка',tr:'/ˈmɛʒərɪŋ kʌp/',example:'Use a measuring cup for accuracy.',        tag:'utensils' },

  // Taste & Texture
  { en:'savory',  ua:'пікантний',          tr:'/ˈseɪvəri/', example:'This dish has a rich, savory flavor.',         tag:'taste' },
  { en:'tangy',   ua:'гострий/кислуватий', tr:'/ˈtæŋi/',    example:'The sauce is deliciously tangy.',              tag:'taste' },
  { en:'bland',   ua:'прісний',            tr:'/blænd/',     example:'The soup tastes a bit bland — add some salt.', tag:'taste' },
  { en:'crispy',  ua:'хрусткий',           tr:'/ˈkrɪspi/',  example:'The skin is beautifully crispy.',              tag:'taste' },
  { en:'tender',  ua:'ніжний',             tr:'/ˈtɛndər/',  example:'The meat is so tender it falls apart.',         tag:'taste' },
  { en:'creamy',  ua:'вершковий',          tr:'/ˈkriːmi/',  example:'The sauce is rich and creamy.',                tag:'taste' },
  { en:'bitter',  ua:'гіркий',             tr:'/ˈbɪtər/',   example:'Dark chocolate has a bitter taste.',           tag:'taste' },
  { en:'spicy',   ua:'гострий',            tr:'/ˈspaɪsi/',  example:'This curry is very spicy!',                    tag:'taste' },
  { en:'moist',   ua:'вологий/соковитий',  tr:'/mɔɪst/',    example:'The cake is perfectly moist.',                 tag:'taste' },
  { en:'crunchy', ua:'хрусткий',           tr:'/ˈkrʌntʃi/', example:'I love crunchy vegetables in a salad.',       tag:'taste' },

  // Meals
  { en:'appetizer', ua:'закуска',        tr:'/ˈæpɪˌtaɪzər/',example:'The bruschetta was the perfect appetizer.', tag:'meals' },
  { en:'entrée',    ua:'основна страва', tr:'/ˈɒntreɪ/',     example:'For the entrée, I ordered steak.',           tag:'meals' },
  { en:'dessert',   ua:'десерт',         tr:'/dɪˈzɜːrt/',    example:'We finished with a chocolate dessert.',      tag:'meals' },
  { en:'side dish', ua:'гарнір',         tr:'/saɪd dɪʃ/',    example:'Rice is a common side dish.',                tag:'meals' },
  { en:'brunch',    ua:'бранч',          tr:'/brʌntʃ/',       example:'Let\'s have brunch on Sunday.',              tag:'meals' },
  { en:'leftovers', ua:'залишки їжі',    tr:'/ˈlɛftˌoʊvərz/',example:'We had leftovers for lunch.',               tag:'meals' },
  { en:'recipe',    ua:'рецепт',         tr:'/ˈrɛsɪpi/',     example:'Can you share the recipe for this dish?',    tag:'meals' },
  { en:'ingredient',ua:'інгредієнт',     tr:'/ɪnˈɡriːdiənt/',example:'The key ingredient is fresh basil.',        tag:'meals' },
];

const phrases = [
  { group: 'На кухні 🍳', items: [
    { en: 'Could you pass me the salt, please?',                   ua: 'Чи не могли б ви передати мені сіль?' },
    { en: 'I need to preheat the oven to 180°C.',                  ua: 'Мені потрібно розігріти духовку до 180°C.' },
    { en: 'Can you chop the vegetables while I make the sauce?',   ua: 'Можеш нарізати овочі, поки я роблю соус?' },
    { en: 'Don\'t forget to season the meat before cooking.',      ua: 'Не забудь приправити м\'ясо перед готуванням.' },
    { en: 'The dough needs to rest for at least an hour.',         ua: 'Тісто повинно відпочити щонайменше годину.' },
    { en: 'Let it simmer on low heat for 20 minutes.',             ua: 'Тушкуй на слабкому вогні 20 хвилин.' },
  ]},
  { group: 'Смак і враження 😋', items: [
    { en: 'This is absolutely delicious!',                         ua: 'Це абсолютно смачно!' },
    { en: 'It needs a little more salt.',                          ua: 'Цьому не вистачає трохи солі.' },
    { en: 'Could you pass the pepper, please?',                    ua: 'Передайте, будь ласка, перець.' },
    { en: 'The steak is slightly overcooked.',                     ua: 'Стейк трохи пересмажений.' },
    { en: 'I prefer my eggs scrambled.',                           ua: 'Я надаю перевагу яєчні-болтушці.' },
    { en: 'What\'s the secret ingredient?',                        ua: 'Який секретний інгредієнт?' },
    { en: 'This dish is a bit too spicy for me.',                  ua: 'Ця страва трохи занадто гостра для мене.' },
  ]},
  { group: 'У ресторані 🍽️', items: [
    { en: 'Could I see the menu, please?',                         ua: 'Чи можу я побачити меню?' },
    { en: 'I\'d like to order the pasta, please.',                 ua: 'Я б хотів замовити пасту, будь ласка.' },
    { en: 'What do you recommend?',                                ua: 'Що ви рекомендуєте?' },
    { en: 'Could we get the bill, please?',                        ua: 'Чи можна рахунок, будь ласка?' },
    { en: 'Is this dish gluten-free?',                             ua: 'Ця страва не містить глютену?' },
    { en: 'I\'ll have the same as my friend.',                     ua: 'Я візьму те саме, що й мій друг.' },
  ]},
  { group: 'Мова рецептів 📖', items: [
    { en: 'Bring the water to a boil.',                            ua: 'Доведіть воду до кипіння.' },
    { en: 'Fold in the egg whites gently.',                        ua: 'Обережно вмішайте білки.' },
    { en: 'Drain and rinse with cold water.',                      ua: 'Злийте воду та ополосніть холодною водою.' },
    { en: 'Season to taste with salt and pepper.',                 ua: 'Приправте сіллю та перцем за смаком.' },
    { en: 'Garnish with fresh herbs before serving.',              ua: 'Прикрасьте свіжою зеленню перед подачею.' },
    { en: 'Allow to cool completely before slicing.',              ua: 'Дайте повністю охолонути перед нарізанням.' },
  ]},
];

const recipes = [
  {
    id: 1, name: 'Vegetable Stir-Fry', emoji: '🥘', level: 'easy',
    desc: 'A quick and healthy dish with colorful vegetables.',
    ingredients: ['2 cups broccoli florets','1 red bell pepper','2 carrots','3 tbsp soy sauce','2 cloves garlic','1 tbsp sesame oil'],
    steps: [
      { n:1, text:'<span class="step-word" data-tooltip="Нарізати на однакові шматочки">Dice</span> the carrots and bell pepper into even pieces.' },
      { n:2, text:'<span class="step-word" data-tooltip="Подрібнити">Mince</span> the garlic and set aside.' },
      { n:3, text:'<span class="step-word" data-tooltip="Розігріти на сильному вогні">Heat</span> a wok or large skillet over high heat and add sesame oil.' },
      { n:4, text:'<span class="step-word" data-tooltip="Обсмажити швидко на сильному вогні">Stir-fry</span> the garlic for 30 seconds until fragrant.' },
      { n:5, text:'Add the carrots and broccoli and stir-fry for 3–4 minutes.' },
      { n:6, text:'<span class="step-word" data-tooltip="Полити соусом">Drizzle</span> in the soy sauce and toss everything together. Serve immediately.' },
    ]
  },
  {
    id: 2, name: 'Tomato Soup', emoji: '🍅', level: 'easy',
    desc: 'A comforting classic made from fresh tomatoes.',
    ingredients: ['6 ripe tomatoes','1 onion','3 garlic cloves','2 cups vegetable broth','1 tsp sugar','Fresh basil','Cream to garnish'],
    steps: [
      { n:1, text:'<span class="step-word" data-tooltip="Грубо нарізати">Roughly chop</span> the tomatoes and onion.' },
      { n:2, text:'<span class="step-word" data-tooltip="Пасерувати">Sauté</span> the onion and garlic in olive oil for 5 minutes.' },
      { n:3, text:'Add the tomatoes and broth. <span class="step-word" data-tooltip="Тушкувати">Simmer</span> for 20 minutes.' },
      { n:4, text:'<span class="step-word" data-tooltip="Перебити блендером">Blend</span> until smooth, then season to taste.' },
      { n:5, text:'<span class="step-word" data-tooltip="Прикрасити">Garnish</span> with fresh basil and a swirl of cream.' },
    ]
  },
  {
    id: 3, name: 'Banana Pancakes', emoji: '🥞', level: 'easy',
    desc: 'Fluffy weekend pancakes with a tropical twist.',
    ingredients: ['1 ripe banana','2 eggs','½ cup flour','1 tsp baking powder','Pinch of salt','Butter for frying'],
    steps: [
      { n:1, text:'<span class="step-word" data-tooltip="Розім\'яти виделкою">Mash</span> the banana in a bowl.' },
      { n:2, text:'<span class="step-word" data-tooltip="Збити">Whisk</span> in the eggs until well combined.' },
      { n:3, text:'<span class="step-word" data-tooltip="Просіяти та вмішати">Sift and fold</span> in the flour, baking powder and salt.' },
      { n:4, text:'Melt butter in a skillet over medium heat.' },
      { n:5, text:'<span class="step-word" data-tooltip="Налити">Pour</span> small amounts of batter and cook until bubbles form, then flip.' },
    ]
  },
  {
    id: 4, name: 'Pasta Aglio e Olio', emoji: '🍝', level: 'medium',
    desc: 'A classic Italian pasta with garlic, olive oil and chili.',
    ingredients: ['400g spaghetti','8 garlic cloves','½ cup olive oil','Red chili flakes','Fresh parsley','Parmesan cheese'],
    steps: [
      { n:1, text:'<span class="step-word" data-tooltip="Довести до кипіння">Bring</span> a large pot of salted water to a boil.' },
      { n:2, text:'Cook spaghetti until <span class="step-word" data-tooltip="Злегка al dente — пружна текстура">al dente</span>, reserve 1 cup of pasta water.' },
      { n:3, text:'<span class="step-word" data-tooltip="Тонко нарізати">Thinly slice</span> the garlic and sauté in olive oil until golden.' },
      { n:4, text:'Add chili flakes, then <span class="step-word" data-tooltip="Додати та перемішати">toss in</span> the drained pasta.' },
      { n:5, text:'Add pasta water to <span class="step-word" data-tooltip="Загустити соус">emulsify the sauce</span>. Top with parsley and parmesan.' },
    ]
  },
  {
    id: 5, name: 'Lemon Cheesecake', emoji: '🍰', level: 'hard',
    desc: 'A creamy no-bake cheesecake with zesty lemon flavour.',
    ingredients: ['200g digestive biscuits','100g butter','500g cream cheese','200ml double cream','3 lemons (zest + juice)','150g icing sugar'],
    steps: [
      { n:1, text:'<span class="step-word" data-tooltip="Подрібнити в крихту">Crush</span> the biscuits and mix with melted butter. Press into a tin.' },
      { n:2, text:'<span class="step-word" data-tooltip="Охолодити у холодильнику">Chill</span> the base for 30 minutes.' },
      { n:3, text:'<span class="step-word" data-tooltip="Збити до пишності">Beat</span> the cream cheese until smooth, then fold in the cream.' },
      { n:4, text:'<span class="step-word" data-tooltip="Додати цедру">Zest</span> the lemons and squeeze the juice. Mix both into the filling.' },
      { n:5, text:'<span class="step-word" data-tooltip="Вилити та розрівняти">Pour and spread</span> over the base. Refrigerate overnight before serving.' },
    ]
  },
  {
    id: 6, name: 'Vegetable Curry', emoji: '🍛', level: 'medium',
    desc: 'An aromatic curry packed with hearty vegetables.',
    ingredients: ['2 potatoes','1 cup chickpeas','1 can coconut milk','2 tbsp curry powder','1 onion','Coriander to garnish'],
    steps: [
      { n:1, text:'<span class="step-word" data-tooltip="Нарізати кубиками">Cube</span> the potatoes and sauté the onion until soft.' },
      { n:2, text:'Add curry powder and cook for 1 minute to <span class="step-word" data-tooltip="Розкрити аромат спецій">bloom the spices</span>.' },
      { n:3, text:'Add potatoes, chickpeas and coconut milk. <span class="step-word" data-tooltip="Тушкувати під кришкою">Cover and simmer</span> for 20 minutes.' },
      { n:4, text:'Season to taste and <span class="step-word" data-tooltip="Подавати прикрасивши">garnish</span> with fresh coriander.' },
    ]
  },
];
