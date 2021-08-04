export class AyatSearchModel {
  //[key: string]: any;
  private data = {};
  public getLangList():any[] {
     //return [];
     return [
      /*
      { id : 'ar', name : 'Arabic', imageUrl : 'https://www.countryflags.io/sa/flat/64.png'},
      { id : 'en', name : 'English', imageUrl : 'https://www.countryflags.io/be/flat/64.png'},
      { id : 'bn', name : 'Bangla', imageUrl : 'https://www.countryflags.io/bd/flat/64.png'},
      { id : 'fr', name : 'French', imageUrl : 'https://www.countryflags.io/fr/flat/64.png'},*/
      { id : 'am', name : 'Amharic', imageUrl : 'https://www.countryflags.io/am/flat/64.png'},
      { id : 'ar', name : 'Arabic', imageUrl : 'https://www.countryflags.io/ar/flat/64.png'},
      { id : 'az', name : 'Azerbaijani', imageUrl : 'https://www.countryflags.io/az/flat/64.png'},
      { id : 'be', name : 'mazigh', imageUrl : 'https://www.countryflags.io/be/flat/64.png'},
      { id : 'bg', name : 'Bulgarian', imageUrl : 'https://www.countryflags.io/bg/flat/64.png'},
      { id : 'bn', name : 'Bengali', imageUrl : 'https://www.countryflags.io/bd/flat/64.png'},
      { id : 'bs', name : 'Bosnian', imageUrl : 'https://www.countryflags.io/bs/flat/64.png'},
      { id : 'cs', name : 'Czech', imageUrl : 'https://www.countryflags.io/cz/flat/64.png'},
      { id : 'de', name : 'German', imageUrl : 'https://www.countryflags.io/de/flat/64.png'},
      { id : 'dv', name : 'Divehi', imageUrl : 'https://www.countryflags.io/mv/flat/64.png'},
      { id : 'en', name : 'English', imageUrl : 'https://www.countryflags.io/gb/flat/64.png'},
      { id : 'es', name : 'Spanish', imageUrl : 'https://www.countryflags.io/es/flat/64.png'},
      { id : 'fa', name : 'Persian', imageUrl : 'https://www.countryflags.io/ir/flat/64.png'},
      { id : 'fr', name : 'French', imageUrl : 'https://www.countryflags.io/fr/flat/64.png'},
      { id : 'ha', name : 'Hausa', imageUrl : 'https://www.countryflags.io/ng/flat/64.png'},
      { id : 'hi', name : 'Hindi', imageUrl : 'https://www.countryflags.io/in/flat/64.png'},
      { id : 'id', name : 'Indonesian', imageUrl : 'https://www.countryflags.io/id/flat/64.png'},
      { id : 'it', name : 'Italian', imageUrl : 'https://www.countryflags.io/it/flat/64.png'},
      { id : 'ja', name : 'Japanese', imageUrl : 'https://www.countryflags.io/jp/flat/64.png'},
      { id : 'ko', name : 'Korean', imageUrl : 'https://www.countryflags.io/kr/flat/64.png'},
      { id : 'ku', name : 'Kurdish', imageUrl : 'https://www.countryflags.io/iq/flat/64.png'},
      { id : 'ml', name : 'Malayalam', imageUrl : 'https://www.countryflags.io/ml/flat/64.png'},
      { id : 'ms', name : 'Malay', imageUrl : 'https://www.countryflags.io/ms/flat/64.png'},
      { id : 'nl', name : 'Dutch', imageUrl : 'https://www.countryflags.io/nl/flat/64.png'},
      { id : 'no', name : 'Norwegian', imageUrl : 'https://www.countryflags.io/no/flat/64.png'},
      { id : 'pl', name : 'Polish', imageUrl : 'https://www.countryflags.io/pl/flat/64.png'},
      { id : 'pt', name : 'Portuguese', imageUrl : 'https://www.countryflags.io/pt/flat/64.png'},
      { id : 'ro', name : 'Romanian', imageUrl : 'https://www.countryflags.io/ro/flat/64.png'},
      { id : 'ru', name : 'Russian', imageUrl : 'https://www.countryflags.io/ru/flat/64.png'},
      { id : 'sd', name : 'Sindhi', imageUrl : 'https://www.countryflags.io/sd/flat/64.png'},
      { id : 'so', name : 'Somali', imageUrl : 'https://www.countryflags.io/so/flat/64.png'},
      { id : 'sq', name : 'Albanian', imageUrl : 'https://www.countryflags.io/al/flat/64.png'},
      { id : 'sv', name : 'Swedish', imageUrl : 'https://www.countryflags.io/sv/flat/64.png'},
      { id : 'sw', name : 'Swahili', imageUrl : 'https://www.countryflags.io/ke/flat/64.png'},
      { id : 'ta', name : 'Tamil', imageUrl : 'https://www.countryflags.io/in/flat/64.png'},
      { id : 'tg', name : 'Tajik', imageUrl : 'https://www.countryflags.io/tg/flat/64.png'},
      { id : 'th', name : 'Thai', imageUrl : 'https://www.countryflags.io/th/flat/64.png'},
      { id : 'tr', name : 'Turkish', imageUrl : 'https://www.countryflags.io/tr/flat/64.png'},
      { id : 'tt', name : 'Tatar', imageUrl : 'https://www.countryflags.io/tt/flat/64.png'},
      { id : 'ug', name : 'Uyghur', imageUrl : 'https://www.countryflags.io/ug/flat/64.png'},
      { id : 'ur', name : 'Urdu', imageUrl : 'https://www.countryflags.io/pk/flat/64.png'},
      { id : 'uz', name : 'Uzbek', imageUrl : 'https://www.countryflags.io/uz/flat/64.png'},
      { id : 'zh', name : 'Chinese', imageUrl : 'https://www.countryflags.io/cn/flat/64.png'},
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