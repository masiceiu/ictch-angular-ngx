export class AyatSearchModel {
  //[key: string]: any;
  private data = {};
  public getConfig():any {
    return { 
      ayat:{
        aFontSize:30,
        mFontSize:16,
        eFontSize:17,
        aShow:true,
        mShow:true,
        eShow:true,
      },
      tooltip:{
        lang:"",
        translation:"",
        question:"",
        fontSize:"",
        searchResult:"",
        moreSetting:"Search Result View Settings", 
        suraSearch:"", 
        search:"",
      }
    };
  }
  public getLangList():any[] {
     //return [];
     return [
      /*
      { id : 'ar', name : 'Arabic', imageUrl : 'https://www.countryflags.io/sa/flat/64.png', suggestion : true },
      { id : 'en', name : 'English', imageUrl : 'https://www.countryflags.io/be/flat/64.png', suggestion : true },
      { id : 'bn', name : 'Bangla', imageUrl : 'https://www.countryflags.io/bd/flat/64.png', suggestion : true },
      { id : 'fr', name : 'French', imageUrl : 'https://www.countryflags.io/fr/flat/64.png', suggestion : true },*/
      { id : 'am', name : 'Amharic', imageUrl : 'https://www.countryflags.io/am/flat/64.png', suggestion : true },
      { id : 'ar', name : 'Arabic', imageUrl : 'https://www.countryflags.io/ar/flat/64.png', suggestion : true },
      { id : 'az', name : 'Azerbaijani', imageUrl : 'https://www.countryflags.io/az/flat/64.png', suggestion : false },
      { id : 'ber', name : 'Amazigh', imageUrl : 'https://www.countryflags.io/be/flat/64.png', suggestion : false },
      { id : 'bg', name : 'Bulgarian', imageUrl : 'https://www.countryflags.io/bg/flat/64.png', suggestion : true },
      { id : 'bn', name : 'Bengali', imageUrl : 'https://www.countryflags.io/bd/flat/64.png', suggestion : true },
      { id : 'bs', name : 'Bosnian', imageUrl : 'https://www.countryflags.io/bs/flat/64.png', suggestion : false },
      { id : 'cs', name : 'Czech', imageUrl : 'https://www.countryflags.io/cz/flat/64.png', suggestion : false },
      { id : 'de', name : 'German', imageUrl : 'https://www.countryflags.io/de/flat/64.png', suggestion : true },
      { id : 'dv', name : 'Divehi', imageUrl : 'https://www.countryflags.io/mv/flat/64.png', suggestion : false },
      { id : 'en', name : 'English', imageUrl : 'https://www.countryflags.io/gb/flat/64.png', suggestion : true },
      { id : 'es', name : 'Spanish', imageUrl : 'https://www.countryflags.io/es/flat/64.png', suggestion : true },
      { id : 'fa', name : 'Persian', imageUrl : 'https://www.countryflags.io/ir/flat/64.png', suggestion : true },
      { id : 'fr', name : 'French', imageUrl : 'https://www.countryflags.io/fr/flat/64.png', suggestion : true },
      { id : 'ha', name : 'Hausa', imageUrl : 'https://www.countryflags.io/ng/flat/64.png', suggestion : false },
      { id : 'hi', name : 'Hindi', imageUrl : 'https://www.countryflags.io/in/flat/64.png', suggestion : true },
      { id : 'id', name : 'Indonesian', imageUrl : 'https://www.countryflags.io/id/flat/64.png', suggestion : false },
      { id : 'it', name : 'Italian', imageUrl : 'https://www.countryflags.io/it/flat/64.png', suggestion : true },
      { id : 'ja', name : 'Japanese', imageUrl : 'https://www.countryflags.io/jp/flat/64.png', suggestion : true },
      { id : 'ko', name : 'Korean', imageUrl : 'https://www.countryflags.io/kr/flat/64.png', suggestion : false },
      { id : 'ku', name : 'Kurdish', imageUrl : 'https://www.countryflags.io/iq/flat/64.png', suggestion : false },
      { id : 'ml', name : 'Malayalam', imageUrl : 'https://www.countryflags.io/ml/flat/64.png', suggestion : true },
      { id : 'ms', name : 'Malay', imageUrl : 'https://www.countryflags.io/ms/flat/64.png', suggestion : false },
      { id : 'nl', name : 'Dutch', imageUrl : 'https://www.countryflags.io/nl/flat/64.png', suggestion : true },
      { id : 'no', name : 'Norwegian', imageUrl : 'https://www.countryflags.io/no/flat/64.png', suggestion : false },
      { id : 'pl', name : 'Polish', imageUrl : 'https://www.countryflags.io/pl/flat/64.png', suggestion : false },
      { id : 'pt', name : 'Portuguese', imageUrl : 'https://www.countryflags.io/pt/flat/64.png', suggestion : true },
      { id : 'ro', name : 'Romanian', imageUrl : 'https://www.countryflags.io/ro/flat/64.png', suggestion : false },
      { id : 'ru', name : 'Russian', imageUrl : 'https://www.countryflags.io/ru/flat/64.png', suggestion : true },
      { id : 'sd', name : 'Sindhi', imageUrl : 'https://www.countryflags.io/sd/flat/64.png', suggestion : false },
      { id : 'so', name : 'Somali', imageUrl : 'https://www.countryflags.io/so/flat/64.png', suggestion : false },
      { id : 'sq', name : 'Albanian', imageUrl : 'https://www.countryflags.io/al/flat/64.png', suggestion : false },
      { id : 'sv', name : 'Swedish', imageUrl : 'https://www.countryflags.io/sv/flat/64.png', suggestion : false },
      { id : 'sw', name : 'Swahili', imageUrl : 'https://www.countryflags.io/ke/flat/64.png', suggestion : false },
      { id : 'ta', name : 'Tamil', imageUrl : 'https://www.countryflags.io/in/flat/64.png', suggestion : true },
      { id : 'tg', name : 'Tajik', imageUrl : 'https://www.countryflags.io/tg/flat/64.png', suggestion : false },
      { id : 'th', name : 'Thai', imageUrl : 'https://www.countryflags.io/th/flat/64.png', suggestion : true },
      { id : 'tr', name : 'Turkish', imageUrl : 'https://www.countryflags.io/tr/flat/64.png', suggestion : false },
      { id : 'tt', name : 'Tatar', imageUrl : 'https://www.countryflags.io/tt/flat/64.png', suggestion : false },
      { id : 'ug', name : 'Uyghur', imageUrl : 'https://www.countryflags.io/ug/flat/64.png', suggestion : false },
      { id : 'ur', name : 'Urdu', imageUrl : 'https://www.countryflags.io/pk/flat/64.png', suggestion : true },
      { id : 'uz', name : 'Uzbek', imageUrl : 'https://www.countryflags.io/uz/flat/64.png', suggestion : false },
      { id : 'zh', name : 'Chinese', imageUrl : 'https://www.countryflags.io/cn/flat/64.png', suggestion : false },
    ];
  }
  public getTranslateList():any[] {
    return [
      { id : 'sq_nahi', name : 'Albanian(Efendi Nahi)'},
      { id : 'sq_mehdiu', name : 'Albanian(Feti Mehdiu)'},
      { id : 'sq_ahmeti', name : 'Albanian(Sherif Ahmeti)'},
      { id : 'ber_mensur', name : 'Amazigh(At Mensur)'},
      { id : 'ar_jalalayn', name : 'Arabic(تفسير الجلالين)'},
      { id : 'ar_muyassar', name : 'Arabic(تفسير المیسر)'},
      { id : 'am_sadiq', name : 'Amharic(ሳዲቅ &amp; ሳኒ ሐቢብ)'},
      { id : 'az_mammadaliyev', name : 'Azerbaijani(Məmmədəliyev &amp; Bünyadov)'},
      { id : 'az_musayev', name : 'Azerbaijani(Musayev)'},
      { id : 'bn_hoque', name : 'Bengali(জহুরুল হক)'},                        
      { id : 'bn_bengali', name : 'Bengali(মুহিউদ্দীন খান)'},
      { id : 'bs_korkut', name : 'Bosnian(Korkut)'},
      { id : 'bs_mlivo', name : 'Bosnian(Mlivo)'},
      { id : 'bg_theophanov', name : 'Bulgarian(Теофанов)'},
      { id : 'zh_jian', name : 'Chinese(Ma Jian)'},
      { id : 'zh_majian', name : 'Chinese Traditional(Ma Jian)'},
      { id : 'cs_hrbek', name : 'Czech(Hrbek)'},
      { id : 'cs_nykl', name : 'Czech(Nykl)'},
      { id : 'dv_divehi', name : 'Divehi(ދިވެހި)'},
      { id : 'nl_keyzer', name : 'Dutch(Keyzer)'},
      { id : 'nl_leemhuis', name : 'Dutch(Leemhuis)'},
      { id : 'nl_siregar', name : 'Dutch(Siregar)'},
      { id : 'en_ahmedali', name : 'English(Ahmed Ali)'},
      { id : 'en_ahmedraza', name : 'English(Ahmed Raza Khan)'},
      { id : 'en_arberry', name : 'English(Arberry)'},
      { id : 'en_daryabadi', name : 'English(Daryabadi)'},
      { id : 'en_hilali', name : 'English(Hilali &amp; Khan)'},
      { id : 'en_itani', name : 'English(Itani)'},
      { id : 'en_maududi', name : 'English(Maududi)'},
      { id : 'en_pickthall', name : 'English(Pickthall)'},
      { id : 'en_qarai', name : 'English(Qarai)'},                        
      { id : 'en_qaribullah', name : 'English(Qaribullah &amp; Darwish)'},
      { id : 'en_sahih', name : 'English(Saheeh International)'},
      { id : 'en_sarwar', name : 'English(Sarwar)'},
      { id : 'en_shakir', name : 'English(Shakir)'},
      { id : 'en_transliteration', name : 'English(Transliteration)'},
      { id : 'en_wahiduddin', name : 'English(Wahiduddin Khan)'},
      { id : 'en_yusufali', name : 'English(Yousuf Ali)'},
      { id : 'fr_hamidullah', name : 'French(Hamidullah)'},
      { id : 'de_aburida', name : 'German(Abu Rida)'},
      { id : 'de_bubenheim', name : 'German(Bubenheim &amp; Elyas)'},
      { id : 'de_khoury', name : 'German(Khoury)'},
      { id : 'de_zaidan', name : 'German(Zaidan)'},
      { id : 'ha_gumi', name : 'Hausa(Gumi)'},
      { id : 'hi_farooq', name : 'Hindi(फ़ारूक़ ख़ान &amp; अहमद)'},
      { id : 'hi_hindi', name : 'Hindi(फ़ारूक़ ख़ान &amp; नदवी)'},
      { id : 'id_indonesian', name : 'Indonesian(Bahasa Indonesia)'},
      { id : 'id_muntakhab', name : 'Indonesian(Quraish Shihab)'},
      { id : 'id_jalalayn', name : 'Indonesian(Tafsir Jalalayn)'},
      { id : 'it_piccardo', name : 'Italian(Piccardo)'},
      { id : 'ja_japanese', name : 'Japanese(Japanese)'},
      { id : 'ko_korean', name : 'Korean(Korean)'},
      { id : 'ku_asan', name : 'Kurdish(ته&zwnj;فسیری ئاسان)'},
      { id : 'ms_basmeih', name : 'Malay(Basmeih)'},
      { id : 'ml_abdulhameed', name : 'Malayalam(അബ്ദുല്&zwj; ഹമീദ് &amp; പറപ്പൂര്&zwj;)'},
      { id : 'ml_karakunnu', name : 'Malayalam(കാരകുന്ന് &amp; എളയാവൂര്)'},
      { id : 'no_berg', name : 'Norwegian(Einar Berg)'},                        
      { id : 'fa_ghomshei', name : 'Persian(الهی قمشه&zwnj;ای)'},
      { id : 'fa_ansarian', name : 'Persian(انصاریان)'},
      { id : 'fa_ayati', name : 'Persian(آیتی)'},
      { id : 'fa_bahrampour', name : 'Persian(بهرام پور)'},
      { id : 'fa_khorramdel', name : 'Persian(خرمدل)'},
      { id : 'fa_khorramshahi', name : 'Persian(خرمشاهی)'},
      { id : 'fa_sadeqi', name : 'Persian(صادقی تهرانی)'},
      { id : 'fa_fooladvand', name : 'Persian(فولادوند)'},
      { id : 'fa_mojtabavi', name : 'Persian(مجتبوی)'},
      { id : 'fa_moezzi', name : 'Persian(معزی)'},
      { id : 'fa_makarem', name : 'Persian(مکارم شیرازی)'},
      { id : 'pl_bielawskiego', name : 'Polish(Bielawskiego)'},
      { id : 'pt_elhayek', name : 'Portuguese(El-Hayek)'},
      { id : 'ro_grigore', name : 'Romanian(Grigore)'},
      { id : 'ru_abuadel', name : 'Russian(Абу Адель)'},
      { id : 'ru_muntahab', name : 'Russian(Аль-Мунтахаб)'},
      { id : 'ru_krachkovsky', name : 'Russian(Крачковский)'},
      { id : 'ru_kuliev', name : 'Russian(Кулиев)'},
      { id : 'ru_kulieval', name : 'Russian(Кулиев + ас-Саади)'},                        
      { id : 'ru_osmanov', name : 'Russian(Османов)'},
      { id : 'ru_porokhova', name : 'Russian(Порохова)'},
      { id : 'ru_sablukov', name : 'Russian(Саблуков)'},
      { id : 'sd_amroti', name : 'Sindhi(امروٽي)'},
      { id : 'so_abduh', name : 'Somali(Abduh)'},
      { id : 'es_bornez', name : 'Spanish(Bornez)'},
      { id : 'es_cortes', name : 'Spanish(Cortes)'},
      { id : 'es_garcia', name : 'Spanish(Garcia)'},
      { id : 'sw_barwani', name : 'Swahili(Al-Barwani)'},
      { id : 'sv_bernstrom', name : 'Swedish(Bernström)'},
      { id : 'tg_ayati', name : 'Tajik(Оятӣ)'},
      { id : 'ta_tamil', name : 'Tamil(ஜான் டிரஸ்ட்)'},
      { id : 'tt_nugman', name : 'Tatar(Yakub Ibn Nugman)'},
      { id : 'th_thai', name : 'Thai(	ภาษาไทย)'},	
      { id : 'tr_golpinarli', name : 'Turkish(Abdulbakî Gölpınarlı)'},
      { id : 'tr_bulac', name : 'Turkish(Alİ Bulaç)'},
      { id : 'tr_transliteration', name : 'Turkish(Çeviriyazı)'},
      { id : 'tr_diyanet', name : 'Turkish(Diyanet İşleri)'},
      { id : 'tr_vakfi', name : 'Turkish(Diyanet Vakfı)'},
      { id : 'tr_yuksel', name : 'Turkish(Edip Yüksel)'},
      { id : 'tr_yazir', name : 'Turkish(Elmalılı Hamdi Yazır)'},
      { id : 'tr_ozturk', name : 'Turkish(Öztürk)'},
      { id : 'tr_yildirim', name : 'Turkish(Suat Yıldırım)'},                        
      { id : 'tr_ates', name : 'Turkish(Süleyman Ateş)'},
      { id : 'ur_maududi', name : 'Urdu(ابوالاعلی مودودی)'},
      { id : 'ur_kanzuliman', name : 'Urdu(احمد رضا خان)'},
      { id : 'ur_ahmedali', name : 'Urdu(احمد علی)'},
      { id : 'ur_jalandhry', name : 'Urdu(جالندہری)'},
      { id : 'ur_qadri', name : 'Urdu(طاہر القادری)'},
      { id : 'ur_jawadi', name : 'Urdu(علامہ جوادی)'},
      { id : 'ur_junagarhi', name : 'Urdu	(محمد جوناگڑھی)'},
      { id : 'ur_najafi', name : 'Urdu(محمد حسین نجفی)'},
      { id : 'ug_saleh', name : 'Uyghur(محمد صالح)'},
      { id : 'uz_sodik', name : 'Uzbek(Мухаммад Содик)'}
    ];
  }
  public getSuraList(lang:string):any[] {
    switch(lang){
      case"bn": return [
      ];
      default: return [
        { id : 1, name : "Al-Fatihah", ayat : 7 },
        { id : 2, name : "Al-Baqarah", ayat : 286 },
        { id : 3, name : "Al-Imran", ayat : 200 },
        { id : 4, name : "An-Nisa", ayat : 176 },
        { id : 5, name : "Al-Maidah", ayat : 120 },
        { id : 6, name : "Al-AnAm", ayat : 165 },
        { id : 7, name : "Al-A'Raf", ayat : 206 },
        { id : 8, name : "Al-Anfal", ayat : 75 },
        { id : 9, name : "At-Tawbah", ayat : 129 },
        { id : 10, name : "Yunus", ayat : 109 },
        { id : 11, name : "Hud", ayat : 123 },
        { id : 12, name : "Yusuf", ayat : 111 },
        { id : 13, name : "Ar-Ra'd", ayat : 43 },
        { id : 14, name : "Ibrahim", ayat : 52 },
        { id : 15, name : "Al-Hijr", ayat : 99 },
        { id : 16, name : "An-Nahl", ayat : 128 },
        { id : 17, name : "Israel", ayat : 111 },
        { id : 18, name : "Al-Kahf", ayat : 110 },
        { id : 19, name : "Maryam", ayat : 98 },
        { id : 20, name : "Ta-ha", ayat : 135 },
        { id : 21, name : "Al-Anbiyaa", ayat : 112 },
        { id : 22, name : "Al-Haj", ayat : 78 },
        { id : 23, name : "Al-Muminun", ayat : 118 },
        { id : 24, name : "An-Nur", ayat : 64 },
        { id : 25, name : "Al-Furqan", ayat : 77 },
        { id : 26, name : "Ash-Shu'ara", ayat : 227 },
        { id : 27, name : "An-Naml", ayat : 93 },
        { id : 28, name : "Al-Qasas", ayat : 88 },
        { id : 29, name : "Al-Ankabut", ayat : 69 },
        { id : 30, name : "Ar-Rum", ayat : 60 },
        { id : 31, name : "Luqman", ayat : 34 },
        { id : 32, name : "As-Sajdah", ayat : 30 },
        { id : 33, name : "Al-Ahzab", ayat : 73 },
        { id : 34, name : "Saba", ayat : 54 },
        { id : 35, name : "Fatir", ayat : 45 },
        { id : 36, name : "Ya-Sin", ayat : 83 },
        { id : 37, name : "As-Saffat", ayat : 182 },
        { id : 38, name : "Sad", ayat : 88 },
        { id : 39, name : "Az-Zumar", ayat : 75 },
        { id : 40, name : "Al-Mumin", ayat : 85 },
        { id : 41, name : "Ha-Mim", ayat : 5 },
        { id : 42, name : "Ash-Shuraa", ayat : 53 },
        { id : 43, name : "Az-Zukhruf", ayat : 89 },
        { id : 44, name : "Ad-Dukhan", ayat : 59 },
        { id : 45, name : "Al-Jathiyah", ayat : 37 },
        { id : 46, name : "Al-Ahqaf", ayat : 35 },
        { id : 47, name : "Muhammad", ayat : 38 },
        { id : 48, name : "Al-Fath", ayat : 29 },
        { id : 49, name : "Al-Hujurat", ayat : 18 },
        { id : 50, name : "Qaf", ayat : 45 },
        { id : 51, name : "Az-Zariyat", ayat : 60 },
        { id : 52, name : "At-Tur", ayat : 49 },
        { id : 53, name : "An-Najm", ayat : 62 },
        { id : 54, name : "Al-Qamar", ayat : 55 },
        { id : 55, name : "Ar-Rahman", ayat : 78 },
        { id : 56, name : "Al-Waqiah", ayat : 96 },
        { id : 57, name : "Al-Hadid", ayat : 29 },
        { id : 58, name : "Al-Mujadila", ayat : 22 },
        { id : 59, name : "Al-Hashr", ayat : 24 },
        { id : 60, name : "Al-Mumtahanah", ayat : 13 },
        { id : 61, name : "As-Saf", ayat : 14 },
        { id : 62, name : "Al-Jumu'ah", ayat : 11 },
        { id : 63, name : "Al-Munafiqun", ayat : 11 },
        { id : 64, name : "At-Taghabun", ayat : 18 },
        { id : 65, name : "At-Talaq", ayat : 12 },
        { id : 66, name : "At-Tahrim", ayat : 12 },
        { id : 67, name : "Al-Mulk", ayat : 30 },
        { id : 68, name : "Al-Qalam", ayat : 52 },
        { id : 69, name : "Al-Haqqah", ayat : 52 },
        { id : 70, name : "Al-Ma'arij", ayat : 44 },
        { id : 71, name : "Nuh", ayat : 28 },
        { id : 72, name : "Al-Jinn", ayat : 28 },
        { id : 73, name : "Al-Muzzammil", ayat : 20 },
        { id : 74, name : "Al-Muddaththir", ayat : 56 },
        { id : 75, name : "Al-Qiyamah", ayat : 40 },
        { id : 76, name : "Ad-Dahr", ayat : 31 },
        { id : 77, name : "Al-Mursalat", ayat : 50 },
        { id : 78, name : "An-Naba", ayat : 40 },
        { id : 79, name : "An-Nazi'at", ayat : 46 },
        { id : 80, name : "Abasa", ayat : 42 },
        { id : 81, name : "At-Takwir", ayat : 29 },
        { id : 82, name : "Al-Infitar", ayat : 19 },
        { id : 83, name : "Al-Mutaffifin", ayat : 36 },
        { id : 84, name : "Al-Inshiqaq", ayat : 25 },
        { id : 85, name : "Al-Buruj", ayat : 22 },
        { id : 86, name : "At-Tariq", ayat : 17 },
        { id : 87, name : "Al-A'la", ayat : 19 },
        { id : 88, name : "Al-Ghashiyah", ayat : 26 },
        { id : 89, name : "Al-Fajr", ayat : 30 },
        { id : 90, name : "Al-Balad", ayat : 20 },
        { id : 91, name : "Ash-Shams", ayat : 15 },
        { id : 92, name : "Al-Layl", ayat : 21 },
        { id : 93, name : "Ad-Duhaa", ayat : 11 },
        { id : 94, name : "Ash-Sharh", ayat : 8 },
        { id : 95, name : "At-Tin", ayat : 8 },
        { id : 96, name : "Al-Alaq", ayat : 19 },
        { id : 97, name : "Al-Qadr", ayat : 5 },
        { id : 98, name : "Al Bayyinah", ayat : 8 },
        { id : 99, name : "Az-Zalzalah", ayat : 8 },
        { id : 100, name : "Al-Adiyat", ayat : 11 },
        { id : 101, name : "Al-Qari'a", ayat : 11 },
        { id : 102, name : "At-Takathur", ayat : 8 },
        { id : 103, name : "Al-Asr", ayat : 3 },
        { id : 104, name : "Al-Humaza", ayat : 9 },
        { id : 105, name : "Al-Fil", ayat : 5 },
        { id : 106, name : "Quraysh", ayat : 4 },
        { id : 107, name : "Al-Ma'un", ayat : 7 },
        { id : 108, name : "Al-Kauthar", ayat : 3 },
        { id : 109, name : "Al-Kafirun", ayat : 6 },
        { id : 110, name : "An- Nasr", ayat : 3 },
        { id : 111, name : "Lahab", ayat : 5 },
        { id : 112, name : "Al-Ikhlas", ayat : 4 },
        { id : 113, name : "Al-Falaq", ayat : 5 },
        { id : 114, name : "An-Nas", ayat : 6 }
      ];
    }
  }
  public getMarqueeModel():any {
    return { 
      id:1, text:"", 
      index:1, behavior:"alternate", direction:"down", 
      marquees:[
      { 
        id:1, text:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", 
        index:11, behavior:"alternate", direction:"left" 
      },
      { 
        id:2, text:"This text will bounce", 
        index:12, behavior:"alternate", direction:"right" 
      }
    ],
    recents:[]
  };
    /*marquee = { id:1, text:"", index:1, behavior:"alternate", direction:"down", 
    marquees:[
      { id:1, text:"This text will bounce", index:11, behavior:"alternate", direction:"left" },
      { id:2, text:"This text will bounce", index:12, behavior:"alternate", direction:"right" }
    ]
    };*/
  }
}
/*
Split your Model into a separate file called model.ts:

export class Model {
    param1: string;
}
Import it into your component. This will give you the added benefit of being able to use it in other components:

Import { Model } from './model';
Initialize in the component:

export class testWidget {
   public model: Model;
   constructor(){
       this.model = new Model();
       this.model.param1 = "your string value here";
   }
}
Access it appropriately in the html:

@Component({
      selector: "testWidget",
      template: "<div>This is a test and {{model.param1}} is my param.</div>"
})
*/