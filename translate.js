// script.js

let currentLanguage = 'en';

function changeLanguage(language) {
  currentLanguage = language;
  updateContent();

  // Update text direction based on the selected language
  document.documentElement.dir = getDirection(language);
}

function getDirection(language) {
  // Define the direction for each language
  const directionMap = {
    'en': 'ltr',
    'ku': 'rtl',
    'ar': 'rtl',
  };

  // Return the direction for the given language
  return directionMap[language] || 'ltr'; // Default to LTR if language is not defined
}

function updateContent() {
	
  updateHeaderSectionContent(); // Update header section content
  updateHeroSectionContent(); // Update hero section content
  updateAboutSectionContent(); // Update about section content
  updateFeatureSectionContent(); // Update feature section content
  updateNationalSectionContent(); // Update feature national section content
  updateGallerySectionContent(); // Update gallery section content
  updateContactSectionContent(); // Update contact section content
  updateFooterSectionContent(); // Update footer section content
}

/* ======= Header Section ======= */
function updateHeaderSectionContent() {
	
  const chans = {
    'en': 'EN',
    'ku': 'KR',
    'ar': 'AR',
  };

  const greetings = {
    'en': 'Home',
    'ku': 'ماڵەوە',
    'ar': 'الصفحة الرئيسية',
  };
  
  const abouts1 = {
    'en': 'A Story',
    'ku': 'چیڕۆکێک',
    'ar': 'قصة',
  };
  
  const sendmoneys1 = {
    'en': 'Send the money',
    'ku': 'ناردنی پارەکە',
    'ar': 'إرسال الأموال',
  };
  
  const gallerys1 = {
    'en': 'Gallery',
    'ku': 'وێنە',
    'ar': 'ألبوم',
  };
  
  const contacts1 = {
    'en': 'Contact',
    'ku': 'پەیوەندی بکە',
    'ar': 'اتصل',
  };
  
  const themes1 = {
    'en': 'Theme',
    'ku': 'ڕووکار',
    'ar': 'الموضوع',
  };
  
  const onedollars = {
    'en': 'One Dollar',
    'ku': 'یەک دۆلار',
    'ar': 'دولار واحد',
  };
  
  const gls = {
    'en': 'English',
    'ku': 'ئینگلیزی',
    'ar': 'الإنكليزية',
  };
  
  const dishs = {
    'en': 'Kurdish',
    'ku': 'کوردی',
    'ar': 'كوردي',
  };
  
  const abics = {
    'en': 'Arabic',
    'ku': 'عەرەبی',
    'ar': 'عربي',
  };

  document.getElementById('chan').textContent = chans[currentLanguage];
  document.getElementById('greeting').textContent = greetings[currentLanguage];
  document.getElementById('about1').textContent = abouts1[currentLanguage];
  document.getElementById('sendmoney1').textContent = sendmoneys1[currentLanguage];
  document.getElementById('gallery1').textContent = gallerys1[currentLanguage];
  document.getElementById('contact1').textContent = contacts1[currentLanguage];
  document.getElementById('theme1').textContent = themes1[currentLanguage];
  document.getElementById('onedollar').textContent = onedollars[currentLanguage];
  document.getElementById('gl').textContent = gls[currentLanguage];
  document.getElementById('dish').textContent = dishs[currentLanguage];
  document.getElementById('abic').textContent = abics[currentLanguage];
}

/* ======= Hero Section ======= */
function updateHeroSectionContent() {
  const wels = {
    'en': 'Welcome',
    'ku': 'بەخێربێن',
    'ar': 'أهلًا وسهلًا',
  };
  
  const zars = {
    'en': 'one dollar may be too little or nothing for you، but it\'s too much for me.',
    'ku': 'لەوانەیە یەک دۆلار زۆر کەم بێت یان هیچ نەبێت بۆ تۆ، بەڵام بۆ من بڕێکی زۆرە.',
    'ar': 'قد يكون دولار واحد قليلا جدا أو لا شيء بالنسبة لك ، لكنه كثير جدا بالنسبة لي.',
  };
  
  const keeps = {
    'en': 'keep reading',
    'ku': 'زیاتر بخوێنەوە',
    'ar': 'تابع القراءة',
  };

  document.getElementById('wel').textContent = wels[currentLanguage];
  document.getElementById('zar').textContent = zars[currentLanguage];
  document.getElementById('keep').textContent = keeps[currentLanguage];
}


/* ======= about Section ======= */
function updateAboutSectionContent() {
  const stors = {
    'en': 'A Story',
    'ku': 'چیرۆکێک',
    'ar': 'قصة',
  };
  
  const thanks = {
    'en': 'Helping & Thanking',
    'ku': 'یارمەتیدان و سوپاسکردن',
    'ar': 'المساعدة والشكر',
  };
  
  const hes1 = {
    'en': 'A story about',
    'ku': 'چیڕۆکێک دەربارەی',
    'ar': 'قصة عن',
  };
  
  const someones = {
  'en': `One day, someone saw a man who had a child with his neighbors, and he knew that he had kidnapped him. That's why he took the child from the kidnapper and took him to their neighbor's house,
    and the neighbor said thank you. And then the rescuer came up with an idea, and he said to his neighbors, "Don't thank me. Instead of thanking me, you can help three other people, and tell the three people to help three others,
    so the world will change and it's going to get better." So we have to help each other, and instead of thanking, say to help others.`,
  'ku': `ڕۆژێکیان، کەسێک پیاوێکی بینی کە منداڵی دراوسێکەیانی پێ بوو، زانیبووی کە ڕفاندویەتی. لەبەر ئەوە منداڵەکەی لە ڕفێنەرەکە وەرگرت و بردیەوە بۆ ماڵی دراوسێکەیان، دراوسێکەی وتی سوپاست دەکەم، پاشان ڕزگارکەرەکە بیرۆکەیەکی بۆ هات، بە دراوسێکەیانی گوت: "سوپاسم مەکە، لە جیاتی ئەوەی سوپاسم بکەیت، دەتوانیت یارمەتی سێ کەسی دیکە بدەیت و بەو سێ کەسەش بڵێیت یارمەتی سێ کەسی دیکە بدەن، بەمشێوەیە جیهان دەگۆڕێت و باشتر دەبێت." بۆیە پێویستە یارمەتی یەکتری بدەین، وە لە جیاتی ئەوەی سوپاسی یەکتری بکەین، بڵێین یارمەتی کەسانی دیکە بدەن.`,
  'ar': `في أحد الأيام ، رأى أحدهم رجلا لديه طفل من الجيران ، كان يعرف أنه اختطفه. فأخذ الطفل من الخاطف وأخذه إلى منزل جارهم، فقال جاره: "أشكرك، ثم جاء المنقذ بفكرة، وقال لجارهم: "لا تشكرني، بدلا من أن تشكرني، يمكنك مساعدة ثلاثة أشخاص آخرين وإخبار هؤلاء الثلاثة بمساعدة ثلاثة آخرين، حتى يتغير العالم وسيكون أفضل". لذلك نحن بحاجة إلى مساعدة بعضنا البعض ، وبدلا من شكر بعضنا البعض ، قل ساعد الآخرين.`,
};

  const norths = {
  'en': `So، a dollar for you may be nothing or too little، but that's a lot to me، so I'm just asking you for one dollar،
				and if you give me more، I'll appreciate it، and maybe one day I'll pay you back in a larger amount.
				so If you decide to send me the money، it is explained below how to send it to me.`,
  'ku': `کەواتە، لەوانەیە یەک دۆلار بۆ تۆ هیچ نەبێت یان زۆر کەم بێت، بەڵام ئەمە بۆ من بڕێکی زۆرە، لەبەر ئەوە تەنها داوای یەک دۆلارت لێدەکەم، وە ئەگەر زیاترم بدەیتێ، ئەوە بەرزی دەنرخێنم، وە لەوانەیە ڕۆژێک بێت ئەم پاداشتەت بدەمەوە بە بڕێکی زیاتر. ئەگەر بڕیارت دا پارەکەم بۆ بنێری، لە خوارەوە ڕوون کراوەتەوە کە چۆن بۆم بنێریت.`,
  'ar': `لذا ، قد يكون الدولار بالنسبة لك لا شيء أو قليلا جدا ، لكن هذا كثير بالنسبة لي ، لذلك أنا فقط أطلب منك دولارا واحدا ، وإذا أعطيتني المزيد ، فسأقدر ذلك ، وربما في يوم من الأيام سأدفع لك مبلغا أكبر. إذا قررت أن ترسل لي المال ، شرحه أدناه كيفية إرساله إلي.`,
};

  document.getElementById('stor').textContent = stors[currentLanguage];
  document.getElementById('th').textContent = thanks[currentLanguage];
  document.getElementById('hes').textContent = hes1[currentLanguage];
  document.getElementById('someone').textContent = someones[currentLanguage];
  document.getElementById('north').textContent = norths[currentLanguage];
  
}


/* ======= Features Section ======= */
function updateFeatureSectionContent() {
  const payments = {
    'en': 'payment method',
    'ku': 'شێوازی پارەدان',
    'ar': 'طريقة الدفع',
  };
  
  const youcans = {
    'en': 'you can send',
    'ku': 'دەتوانی پارەکە',
    'ar': 'يمكنك إرسال',
  };
  
  const moneyvias = {
    'en': 'money via',
    'ku': 'بنێری لە ڕێگەی',
    'ar': 'الأموال عبر',
  };
  
  const details = {
    'en': `you can send money through national and international, here is the details:`,
    'ku': `دەتوانیت پارەکە لە ڕێگەی ناوخۆیی و نێودەوڵەتییەوە بنێریت، ئەمەش وردەکارییەکانن:`,
    'ar': `يمكنك إرسال الأموال عبر الوطنية والدولية ، وهنا التفاصيل:`,
  };
  
  const viainters = {
    'en': 'Send via international',
    'ku': 'ناردن لە ڕێگەی نێودەوڵەتی',
    'ar': 'إرسال عبر الدولية',
  };
  
  const nations = {
    'en': 'Send via national',
    'ku': 'ناردن لە ڕێگەی ناوخۆیی',
    'ar': 'إرسال عبر الوطنية',
  };
  
  const infos = {
    'en': 'Bank ACCOUNT INFORMATION:-',
    'ku': 'زانیاری هەژماری بانکی:-',
    'ar': 'معلومات الحساب البنكي:-',
  };
  
  const abduls = {
    'en': 'ACCOUNT NAME:-',
    'ku': 'ناوی هەژمار: -',
    'ar': 'اسم الحساب:-',
  };
  
   const copies = {
    'en': 'Copy',
    'ku': 'کۆپی',
    'ar': 'نسخ',
  };
  
  const diaries = {
    'en': 'Intermediary Bank:-',
    'ku': 'بانکی ناوەند:-',
    'ar': 'البنك الوسيط:-',
  };
  
  const swifts = {
    'en': 'swift:-',
    'ku': 'سویفت:-',
    'ar': 'سويفت:-',
  };
  
  const corbanks = {
    'en': 'Corresponding Bank:-',
    'ku': 'بانکی لایەنی بەرامبەر:-',
    'ar': 'البنك المقابل:-',
  };
  
  const benefbanks = {
    'en': 'Beneficiary Bank:-',
    'ku': 'بانکی سوودمەند:-',
    'ar': 'البنك المستفيد:-',
  };
  
  const allcopies = {
    'en': 'Copy All',
    'ku': 'کۆپیکردنی هەموو',
    'ar': 'نسخ الكل',
  };
  

  document.getElementById('payment').textContent = payments[currentLanguage];
  document.getElementById('youcan').textContent = youcans[currentLanguage];
  document.getElementById('moneyvia').textContent = moneyvias[currentLanguage];
  document.getElementById('detail').textContent = details[currentLanguage];
  document.getElementById('viainter').textContent = viainters[currentLanguage];
  document.getElementById('nation').textContent = nations[currentLanguage];
  document.getElementById('info').textContent = infos[currentLanguage];
  document.getElementById('abdul').textContent = abduls[currentLanguage];
  document.getElementById('diary').textContent = diaries[currentLanguage];
  document.getElementById('corbank').textContent = corbanks[currentLanguage];
  document.getElementById('benefbank').textContent = benefbanks[currentLanguage];
  document.getElementById('allcopy').textContent = allcopies[currentLanguage];
  
  
	// Update text content for elements with class "cop"
  document.querySelectorAll('.cop').forEach(function(button) {
    button.textContent = copies[currentLanguage];
  });
  
  // Update text content for elements with class "sft"
  document.querySelectorAll('.sft').forEach(function(button) {
    button.textContent = swifts[currentLanguage];
  });

}


/* ======= Features National Section ======= */
function updateNationalSectionContent() {
  const krds = {
    'en': 'You can send money via these accounts:-',
    'ku': 'دەتوانیت پارە بنێریت لە ڕێگەی ئەم هەژمارانەوە:-',
    'ar': 'يمكنك إرسال الأموال عبر هذه الحسابات:-',
  };
  
  const afibs = {
    'en': 'FIB Bank Account',
    'ku': 'هەژماری بانکی FIB',
    'ar': 'حساب بنك FIB',
  };
  
  const QIcards = {
    'en': 'QI Card Account',
    'ku': 'هەژماری بانکی QI Card',
    'ar': 'حساب بنك QI Card',
  };
  
  const kts = {
    'en': 'Korek Telecome',
    'ku': 'کۆرەک تیلیکۆم',
    'ar': 'كورك تيليكوم',
  };
  
  const phnos = {
    'en': 'Phone No:-',
    'ku': 'ژمارەی مۆبایل:-',
    'ar': 'رقم الهاتف:-',
  };
  
  const comsoons = {
    'en': 'Coming Soon.',
    'ku': 'بەم زووانە.',
    'ar': 'قريباً.',
  };
  
  const sentences = {
            'en': 'You can send more to this number:<br><span dir="ltr">( +964 750 193 2324 ).</span><br>or You can send just 1000 IQD direct to this number.<br>',
            'ku': 'دەتوانیت زیاتر بنێریت بۆ ئەم ژمارەیە:<br><span dir="ltr">.( +964 750 193 2324 )</span><br>یان دەتوانیت ڕاستەوخۆ تەنها 1000 IQD  بنێریت بۆ ئەم ژمارەیە.<br>',
            'ar': 'يمكنك إرسال المزيد إلى هذا الرقم:<br><span dir="ltr">.( +964 750 193 2324 )</span><br>أو يمكنك إرسال 1000 IQD مباشرة إلى هذا الرقم.<br>'
        };
		
  const cars = {
			'en': 'send 1000',
			'ku': 'ناردنی 1000',
			'ar': 'أرسل 1000',
		};
		
  const flowers = {
			'en': 'Copy Phone No.',
			'ku': 'کۆپیکردنی ژ.مۆبایل',
			'ar': 'نسخ رقم الهاتف',
		};

  document.getElementById('krd').textContent = krds[currentLanguage];
  document.getElementById('afib').textContent = afibs[currentLanguage];
  document.getElementById('QIcard').textContent = QIcards[currentLanguage];
  document.getElementById('kt').textContent = kts[currentLanguage];
  document.getElementById('phno').textContent = phnos[currentLanguage];
  document.getElementById('comsoon').textContent = comsoons[currentLanguage];
  document.getElementById('send-more').innerHTML = sentences[currentLanguage];
  document.getElementById('porsh').textContent = cars[currentLanguage];
  document.getElementById('rose').textContent = flowers[currentLanguage];

}


/* ======= Gallery Section ======= */
function updateGallerySectionContent() {
  const hulks = {
    'en': 'gallery',
    'ku': 'وێنە',
    'ar': 'ألبوم',
  };
  
  const cats = {
    'en': 'Check',
    'ku': 'سەیرێکی',
    'ar': 'ألق نظرة',
  };
  
  const dogs = {
    'en': 'A Gallery',
    'ku': 'وێنەکان بکە',
    'ar': 'على الصور',
  };

  document.getElementById('hulk').textContent = hulks[currentLanguage];
  document.getElementById('pshk').textContent = cats[currentLanguage];
  document.getElementById('dog').textContent = dogs[currentLanguage];
}

/* ======= Contact Section ======= */
function updateContactSectionContent() {
  const lions = {
    'en': 'Contact',
    'ku': 'پەیوەندی',
    'ar': 'الاتصال',
  };
  
  const shers = {
    'en': 'To know more',
    'ku': 'بۆ زانیاری زیاتر',
    'ar': 'لمعرفة المزيد',
  };
  
  const kals = {
    'en': 'Contact Me',
    'ku': 'پەیوەندی بکە',
    'ar': 'اتصل بي',
  };
  
  const myadds = {
    'en': 'Address',
    'ku': 'ناونیشان',
    'ar': 'عنوان',
  };
  
  const plans = {
    'en': 'Erbil - Kurdistan / Iraq',
    'ku': 'هەولێر - کوردستان / عێراق',
    'ar': 'أربيل - كردستان / العراق',
  };
  
  const moons = {
    'en': 'Email',
    'ku': 'ئیمەیڵ',
    'ar': 'البريد الإلكتروني',
  };
  
  const suns = {
    'en': 'a94944915@gmail.com',
    'ku': 'a94944915@gmail.com',
    'ar': 'a94944915@gmail.com',
  };
  
  const hills = {
    'en': 'Call',
    'ku': 'پەیوەندی بکە',
    'ar': 'الاتصال',
  };
  
  const stars = {
    'en': '+964 750 193 2324',
    'ku': '+964 750 193 2324',
    'ar': '+964 750 193 2324',
  };

  document.getElementById('lion').textContent = lions[currentLanguage];
  document.getElementById('sher').textContent = shers[currentLanguage];
  document.getElementById('kal').textContent = kals[currentLanguage];
  document.getElementById('moon').textContent = moons[currentLanguage];
  //document.getElementById('sun').textContent = suns[currentLanguage];
  document.getElementById('hill').textContent = hills[currentLanguage];
  //document.getElementById('star').textContent = stars[currentLanguage];
  
  // Update text content for elements with class "plan"
  document.querySelectorAll('.plan').forEach(function(button) {
    button.textContent = plans[currentLanguage];
  });
  
  // Update text content for elements with class "myadd"
  document.querySelectorAll('.myadd').forEach(function(button) {
    button.textContent = myadds[currentLanguage];
  });
  
  // Update text content for elements with class "sun"
  document.querySelectorAll('.sun').forEach(function(button) {
    button.textContent = suns[currentLanguage];
  });
  
  // Update text content for elements with class "star"
  document.querySelectorAll('.star').forEach(function(button) {
    button.textContent = stars[currentLanguage];
  });
}


/* ======= Footer Section ======= */
function updateFooterSectionContent() {
  const ducks = {
    'en': 'Calling Me Via',
    'ku': 'پەیوەندی بکە لە ڕێگەی',
    'ar': 'الاتصال بي عبر',
  };
  
  const waters = {
    'en': 'Phone No:',
    'ku': 'ژ.تەلەفۆن:',
    'ar': 'رقم الهاتف:',
  };
  
  const fires = {
    'en': 'Email:',
    'ku': 'ئیمەیڵ:',
    'ar': 'البريد الإلكتروني:',
  };
  
  const ohs = {
    'en': 'Time to Contact',
    'ku': 'کاتی پەیوەندیکردن',
    'ar': 'وقت الاتصال',
  };
  
  const avas = {
    'en': 'Everyday:',
    'ku': 'هەموو ڕۆژێک:',
    'ar': 'اليوميه:',
  };
  
  const noons = {
    'en': '24 Hours',
    'ku': '24 کاتژمێر',
    'ar': '24 ساعة',
  };
  
  const follows = {
    'en': 'Sharing the website',
    'ku': 'هاوبەشکردنی ماڵپەڕ',
    'ar': 'مشاركة الموقع',
  };
  
  const rights = {
    'en': 'Copyright',
    'ku': 'مافی لەبەرگرتنەوە',
    'ar': 'حقوق النشر',
  };
  
  const bananas = {
    'en': 'One-Dollar',
    'ku': 'یەک-دۆلار',
    'ar': 'واحد-دولار',
  };
  
  const services = {
    'en': '. All Rights Reserved',
    'ku': '. هەموو مافەکان پارێزراون.',
    'ar': '. جميع الحقوق محفوظة.',
  };
  
  const monkeys = {
    'en': 'Designed by',
    'ku': 'دیزاین کراوە لەلایەن',
    'ar': 'صمم بواسطة',
  };
  
  const jacks = {
    'en': 'Someone',
    'ku': 'کەسێک',
    'ar': 'شخص',
  };

  document.getElementById('duck').textContent = ducks[currentLanguage];
  document.getElementById('water').textContent = waters[currentLanguage];
  document.getElementById('fire').textContent = fires[currentLanguage];
  document.getElementById('oh').textContent = ohs[currentLanguage];
  document.getElementById('ava').textContent = avas[currentLanguage];
  document.getElementById('noon').textContent = noons[currentLanguage];
  document.getElementById('follow').textContent = follows[currentLanguage];
  document.getElementById('right').textContent = rights[currentLanguage];
  document.getElementById('banana').textContent = bananas[currentLanguage];
  document.getElementById('service').textContent = services[currentLanguage];
  document.getElementById('monkey').textContent = monkeys[currentLanguage];
  document.getElementById('jack').textContent = jacks[currentLanguage];
  
  
}


// Initial content update when the script is first loaded
updateContent();
