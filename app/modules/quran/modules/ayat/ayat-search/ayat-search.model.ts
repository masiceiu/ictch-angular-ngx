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
  public getSuraList():any[] {
    return [
      { id : '1', name : '1.Al-Fatiha'},
      { id : '2', name : '2.Al-Baqarah'},
      { id : '3', name : '3.Al-Imran'},
      { id : '4', name : '4.An-Nisa'},
      { id : '5', name : '5.Al-Maidah'},
      { id : '6', name : '6.Al-Anam'},
      { id : '7', name : '7.Al-Araf'},
      { id : '8', name : '8.Al-Anfal'},
      { id : '9', name : '9.At-Tawbah'},
      { id : '10', name : '10.Yunes'},
      { id : '11', name : '11.Hud'},
      { id : '12', name : '12.Youssouf'},
      { id : '13', name : '13.Ar-Rad'},
      { id : '14', name : '14.Ibrahim'},
      { id : '15', name : '15.Al-Hijr'},
      { id : '16', name : '16.An-Nahl'},
      { id : '17', name : '17.Al-Isra'},
      { id : '18', name : '18.Al-Kahf'},
      { id : '19', name : '19.Maryam'},
      { id : '20', name : '20.Ta-Ha'},
      { id : '21', name : '21.Al-Anbiya'},
      { id : '22', name : '22.Al-Hajj'},
      { id : '23', name : '23.Al-Mouminoune'},
      { id : '24', name : '24.An-Nour'},
      { id : '25', name : '25.Al-Furqane'},
      { id : '26', name : '26.Ash-Shuara'},
      { id : '27', name : '27.An-Naml'},
      { id : '28', name : '28.Al-Qasas'},
      { id : '29', name : '29.AL-ANKABUT'},
      { id : '30', name : '30.Ar-Rum'},
      { id : '31', name : '31.Luqman'},
      { id : '32', name : '32.As-Sajda'},
      { id : '33', name : '33.Al-Ahzab'},
      { id : '34', name : '34.Saba'},
      { id : '35', name : '35.Fatir'},
      { id : '36', name : '36.Ya-Sin'},
      { id : '37', name : '37.As-Saffat'},
      { id : '38', name : '38.Sad'},
      { id : '39', name : '39.Az-Zumar'},
      { id : '40', name : '40.Ghafir'},
      { id : '41', name : '41.Fussilat'},
      { id : '42', name : '42.Ash-shoura'},
      { id : '43', name : '43.AZZUKHRUF'},
      { id : '44', name : '44.Ad-Dukhan'},
      { id : '45', name : '45.AL-JATHYA'},
      { id : '46', name : '46.Al-Ahqaf'},
      { id : '47', name : '47.Muhammad'},
      { id : '48', name : '48.Al-Fath'},
      { id : '49', name : '49.Al.Hujurat'},
      { id : '50', name : '50.Qaf'},
      { id : '51', name : '51.Ad-Dariyat'},
      { id : '52', name : '52.At-Tur'},
      { id : '53', name : '53.AN-NAJM '},
      { id : '54', name : '54.Al-Qamar'},
      { id : '55', name : '55.Ar-Rahman'},
      { id : '56', name : '56.AL-WAQI'},
      { id : '57', name : '57.Al-Hadid - le fer'},
      { id : '58', name : '58.Al-Mujadalah'},
      { id : '59', name : '59.Al-Hashr'},
      { id : '60', name : '60.AL-MUMTAHANAH'},
      { id : '61', name : '61.As-Saff'},
      { id : '62', name : '62.Al-Jumua'},
      { id : '63', name : '63.Al-Munafiqun'},
      { id : '64', name : '64.At-Tagabun'},
      { id : '65', name : '65.At-Talaq'},
      { id : '66', name : '66.AT-TAHRIM'},
      { id : '67', name : '67.Al-Mulk'},
      { id : '68', name : '68.Al-Qalam'},
      { id : '69', name : '69.Al-Haqqah'},
      { id : '70', name : '70.Al-Ma arij'},
      { id : '71', name : '71.Nuh'},
      { id : '72', name : '72.Al-Jinn'},
      { id : '73', name : '73.Al-Muzzammil'},
      { id : '74', name : '74.Al-Muddattir'},
      { id : '75', name : '75.Al-Qiyamah'},
      { id : '76', name : '76.Al-Insan'},
      { id : '77', name : '77.Al-Mursalate'},
      { id : '78', name : '78.An-Naba'},
      { id : '79', name : '79.An-Naziate'},
      { id : '80', name : '80.ABASA'},
      { id : '81', name : '81.AT-TAKWIR'},
      { id : '82', name : '82.Al-Infitar'},
      { id : '83', name : '83.Al-Mutaffifine'},
      { id : '84', name : '84.Al-Inshiqaq'},
      { id : '85', name : '85.Al-Buraj'},
      { id : '86', name : '86.AT-TARIQ'},
      { id : '87', name : '87.Al-Ala'},
      { id : '88', name : '88.AL-GASIYAH'},
      { id : '89', name : '89.Al-Fajr'},
      { id : '90', name : '90.Al-Balad'},
      { id : '91', name : '91.Ash-Shams'},
      { id : '92', name : '92.Al-Layl'},
      { id : '93', name : '93.Ad-Duha'},
      { id : '94', name : '94.AS-SARH'},
      { id : '95', name : '95.At-Tin'},
      { id : '96', name : '96.AL-ALAQ'},
      { id : '97', name : '97.Al-Qadr'},
      { id : '98', name : '98.Al-Bayyinah'},
      { id : '99', name : '99.Az-Zalzalah'},
      { id : '100', name : '100.Al-Adiyate'},
      { id : '101', name : '101.Al-Qariah'},
      { id : '102', name : '102.At-Takathur'},
      { id : '103', name : '103.Al-Asr'},
      { id : '104', name : '104.Al-Humazah '},
      { id : '105', name : '105.Al-Fil'},
      { id : '106', name : '106.Quraysh'},
      { id : '107', name : '107.AL-MAUN'},
      { id : '108', name : '108.AL-KAWTAR'},
      { id : '109', name : '109.Al-Kafiroune'},
      { id : '110', name : '110.An-Nasr'},
      { id : '111', name : '111.Al-Masad'},
      { id : '112', name : '112.Al-Ikhlas'},
      { id : '113', name : '113.Al-Falaq'},
      { id : '114', name : '114.An-Nass'}
    ];
  }
  public getMarqueeList():any[] {
    //return [];
    return [
      { id:1, text:"This text will bounce", index:11, behavior:"alternate", direction:"left" },
      { id:2, text:"This text will bounce", index:12, behavior:"alternate", direction:"right" }
    ];
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