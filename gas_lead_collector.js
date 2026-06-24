/**
 * 助成金診断 — リード収集スクリプト
 * =====================================================
 * 【セットアップ手順】
 * 1. Google スプレッドシートを新規作成
 * 2. 拡張機能 → Apps Script を開く
 * 3. このスクリプトを貼り付けて保存
 * 4. 「デプロイ」→「新しいデプロイ」→ 種類：ウェブアプリ
 *    - 次のユーザーとして実行：自分
 *    - アクセスできるユーザー：全員
 * 5. デプロイ後に表示されるURLをコピー
 * 6. index.html の GAS_ENDPOINT にURLを貼り付ける
 *    const GAS_ENDPOINT = 'https://script.google.com/macros/s/XXXXX/exec';
 * =====================================================
 */

// ★ ここにスプレッドシートIDを入れてください
// スプレッドシートのURLから取得: https://docs.google.com/spreadsheets/d/【このID】/edit
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

// シート名（そのままでOK、または変更可）
const SHEET_NAME = '診断リード';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // シートが存在しない場合は作成してヘッダーを付ける
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        '送信日時', '会社名', '担当者名', '連絡先',
        '法人形態', '業種', '従業員数', '売上高',
        '賃上げ意向', '投資計画', '採用予定', 'その他フラグ',
        'マッチした助成金'
      ]);
      sheet.getRange(1, 1, 1, 13).setFontWeight('bold').setBackground('#0a0f1e').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // データを追記
    sheet.appendRow([
      data.timestamp       || '',
      data.company         || '',
      data.person          || '',
      data.contact         || '',
      data.legal_form      || '',
      data.industry        || '',
      data.employees       || '',
      data.revenue         || '',
      data.wage_plan       || '',
      data.investment_plans|| '',
      data.hiring_plan     || '',
      data.other_flags     || '',
      data.matched_subsidies || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// テスト用（Apps Scriptエディタから手動実行で動作確認できます）
function testDoPost() {
  const testData = {
    timestamp: new Date().toLocaleString('ja-JP'),
    company: 'テスト株式会社',
    person: '田中 太郎',
    contact: '090-0000-0000',
    legal_form: '法人',
    industry: '建設業',
    employees: '10',
    revenue: '5000',
    wage_plan: 'yes',
    investment_plans: 'IT導入・設備投資',
    hiring_plan: 'yes',
    other_flags: '',
    matched_subsidies: 'キャリアアップ助成金、IT導入補助金、特定求職者雇用開発助成金'
  };
  const fakeEvent = { postData: { contents: JSON.stringify(testData) } };
  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
}
