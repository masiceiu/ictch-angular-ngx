import { Injectable } from '@angular/core';

const _years: number = 5;
const _productNames: string[] = '果汁100%オレンジ,果汁100%グレープ,果汁100%レモン,果汁100%ピーチ,コーヒーマイルド,コーヒービター,コーヒーミルク,ピリピリビール,オタル白ラベル,バードワイン,ホワイトソルト,ブラックペッパー,ピュアシュガー,うまい素,ピュアデミグラスソース,だしかつお,だしこんぶ,ピリカラタバスコ,のり山椒,特製和風醤油,バニラクリームアイス,チョコクリームアイス,紅茶バー,じゃがチップス,アメリカンクラッカー,バナナキャンディー,メロンミルクキャンディー,小倉あんぱん,インドカレーパン,チーズあんぱん,ロッキーチーズ,パルメザンチーズ,フレッシュバター,ライフマーガリン,ローカロリー牛乳,牛乳マイルド,ストロベリーヨーグルト,ブルーベリーヨーグルト,ラズベリーヨーグルト,ココナッツミルク,モーニングブレッド,バタートースト,バケットフランス,極上パスタ,極上マカロニ,伝統スパゲッティ,ヘルシークラッカー,コーンフレークプレーン,コーンフレークチョコ,コーンフレークシュガー,アメリカンポーク,うす味ウインナー,ベターローストハム,ベタープレスハム,ベター生ハム,特製サラミ,和風ハンバーグレトルト,照焼きミートボール,ミックスハム,ミートバー,もめんどうふ特上,きぬごしどうふ特上,冷凍ミックスベジタブル,冷凍クリームコロッケ,冷凍コーンクリームコロッケ,冷凍ポテトコロッケ,冷凍枝豆,冷凍やきおにぎり,乾燥バナナ,乾燥アップル,特選味のり,北海道昆布,やきいかするめくん,食卓わかめ,ふりかけかつお風味,ふりかけ鮭風味,大陸サーモン,特選にぼし,本がつお特上,ころもはんぺん'.split(',');

@Injectable()
export class PagingService {
  getOrders(length = 5): object[] {
    let orders: object[] = [];
    for (let i = 0; i < length; i++) {
      let date = new Date();
      orders.push({
        No: i + 1,
        商品名: this.randomArray(_productNames),
        受注日: this.addDays(date, -this.random(30)).toLocaleDateString(),
        金額: this.random(500, 10) * 100
      });
    }
    return orders;
  }

  random(max: number, min = 0): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomArray(items: any[]): any {
    return items[this.random(items.length)];
  }

  addDays(value: Date, days: number): Date {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate() + days);
  }
}