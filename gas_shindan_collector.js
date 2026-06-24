/**
 * 助成金診断 — 診断1・2・3 統合データ収集スクリプト
 * =====================================================
 * 【セットアップ手順】
 * 1. Google スプレッドシートを新規作成
 * 2. 拡張機能 → Apps Script を開く
 * 3. このスクリプトを全文貼り付けて保存
 * 4. 「デプロイ」→「新しいデプロイ」→ 種類：ウェブアプリ
 *    - 次のユーザーとして実行：自分
 *    - アクセスできるユーザー：全員
 * 5. デプロイ後に表示されるURLをコピー
 * 6. shindan3.html の GAS_ENDPOINT にURLを貼り付ける
 *    const GAS_ENDPOINT = 'https://script.google.com/macros/s/XXXXX/exec';
 * =====================================================
 */

// ★ スプレッドシートIDを入れてください
// URLから取得: https://docs.google.com/spreadsheets/d/【このID】/edit
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

const SHEET_NAME = '診断データ';

// ─── ヘッダー定義（スプレッドシートの列）───
const HEADERS = [
  // メタ
  '送信日時',

  // ── 診断1（引き継ぎ） ──
  '【診断1】法人形態',
  '【診断1】業種',
  '【診断1】従業員数',
  '【診断1】売上高',
  '【診断1】賃上げ意向',
  '【診断1】投資計画',
  '【診断1】採用予定',
  '【診断1】その他フラグ',
  '【診断1】マッチした助成金',

  // ── 診断2（引き継ぎ） ──
  '【診断2】取り逃し概算額（万円）',
  '【診断2】取り逃し制度',

  // ── 診断3 第1部：登記情報 ──
  '法人名',
  '法人名フリガナ',
  '法人番号',
  '住所（〒）',
  '住所（都道府県・市区町村）',
  '住所（番地・建物）',
  '代表者氏名',
  '代表者フリガナ',
  '代表者役職',
  '設立年月日',
  '資本金（万円）',
  '事業内容',
  '業種コード',
  '労働保険番号',
  '雇用保険適用事業所番号',

  // ── 第2部：資格要件 ──
  '大企業出資',
  '大企業出資元',
  '大企業出資比率',
  'グループ会社',
  'グループ会社詳細',
  '社保・税金滞納',
  '滞納内容',
  '労基法違反歴',
  '違反内容',
  '不正受給歴',
  '不正受給内容',

  // ── 第3部：大目標 ──
  '今回の申請で実現したいこと',

  // ── 第4部：労務管理 ──
  '就業規則',
  '就業規則改定年',
  '就業規則・非正規条項あり',
  '就業規則・労基署届出済み',
  '36協定',
  '育児介護休業規程',
  '事業場内最低時給（円）',
  '雇用保険未加入者',
  '雇用保険未加入者数',
  '月平均残業時間',

  // ── 第5部：非正規社員 ──
  '第5部スキップ',
  'パート人数',
  '有期契約社員人数',
  '派遣人数',
  '最長在籍期間（ヶ月）',
  '現在時給（円）',
  '現在月給（万円）',
  '転換予定人数',
  '転換予定時期',
  '転換後時給（円）',
  '転換後月給（万円）',
  'キャリアアップ計画書',
  'キャリアアップ計画番号',
  '賞与制度あり',
  '退職金制度あり',

  // ── 第6部：採用計画 ──
  '第6部スキップ',
  '採用予定人数',
  '採用雇用形態',
  '採用予定時期',
  'ハローワーク経由',
  '採用属性_一般',
  '採用属性_障害者',
  '採用属性_高齢者',
  '採用属性_ひとり親',
  '採用属性_生活保護',
  '採用属性_45歳以上就労未経験',
  '採用属性_その他',
  '採用属性_その他内容',
  '障害者手帳種類',
  '障害者等級',
  '採用後週所定時間',
  '採用後雇用期間',
  '採用後契約期間（ヶ月）',

  // ── 第7部：受給歴・認定 ──
  '過去の受給・申請中制度',
  '認定_経営革新計画',
  '認定_事業継続力強化計画',
  '認定_パートナーシップ構築宣言',
  '認定_みらデジ',
  '認定_SECURITY ACTION★1',
  '認定_SECURITY ACTION★2',
  '認定_DX認定',
  '認定_なし',
  '顧問_税理士',
  '顧問_税理士事務所',
  '顧問_社労士',
  '顧問_社労士事務所',
  '顧問_中小企業診断士',
  '顧問_診断士事務所',
  '顧問_なし',

  // ── 第8部：キャリアアップ ──
  'CA_スキップ',
  'CA_転換規定の明記',
  'CA_転換対象雇用形態',
  'CA_転換後就業規則適用',
  'CA_転換後賞与退職金対象',
  'CA_転換急ぐ理由',
  'CA_転換で実現したいこと',

  // ── 第8部：特開金 ──
  '特開_スキップ',
  '特開_試用期間',
  '特開_試用期間月数',
  '特開_雇用契約書当日交付',
  '特開_交付困難な理由',
  '特開_前職・離職理由',
  '特開_採用後職種・業務内容',
  '特開_長期雇用予定',
  '特開_採用で実現したいこと',

  // ── 第8部：IT導入 ──
  'IT_スキップ',
  'IT_gBizIDプライム',
  'IT_ツール_会計財務',
  'IT_ツール_受発注在庫',
  'IT_ツール_CRM',
  'IT_ツール_勤怠給与',
  'IT_ツール_電子契約',
  'IT_ツール_EC',
  'IT_ツール_予約管理',
  'IT_ツール_セキュリティ',
  'IT_ツール_その他',
  'IT_ツール_その他内容',
  'IT_最も非効率な作業',
  'IT_効率化目標',
  'IT_現在使用ツール',
  'IT_インボイス登録状況',
  'IT_インボイス番号',
  'IT_ベンダー接触状況',
  'IT_ベンダー名',
  'IT_セキュリティ対策_UTM',
  'IT_セキュリティ対策_ウイルス対策',
  'IT_セキュリティ対策_バックアップ',
  'IT_セキュリティ対策_なし',

  // ── 第8部：持続化補助金 ──
  '持続化_スキップ',
  '持続化_商工会議所会員',
  '持続化_過去採択',
  '持続化_過去採択回数',
  '持続化_自社の強み',
  '持続化_狙う顧客層・エリア',
  '持続化_取組_チラシ広告',
  '持続化_取組_HP制作',
  '持続化_取組_展示会',
  '持続化_取組_設備機器',
  '持続化_取組_店舗改装',
  '持続化_取組_新商品サービス',
  '持続化_取組_その他',
  '持続化_取組_その他内容',
  '持続化_補助対象経費',
];

// ─── フィールドマッピング（フォームname → ヘッダー） ───
const FIELD_MAP = {
  's1_legal_form':      '【診断1】法人形態',
  's1_industry':        '【診断1】業種',
  's1_employees':       '【診断1】従業員数',
  's1_revenue':         '【診断1】売上高',
  's1_wage_plan':       '【診断1】賃上げ意向',
  's1_investment_plans':'【診断1】投資計画',
  's1_hiring_plan':     '【診断1】採用予定',
  's1_other_flags':     '【診断1】その他フラグ',
  's1_matched':         '【診断1】マッチした助成金',
  's2_total_miss':      '【診断2】取り逃し概算額（万円）',
  's2_missed_details':  '【診断2】取り逃し制度',
  'q1_name':            '法人名',
  'q1_kana':            '法人名フリガナ',
  'q2_hojin_num':       '法人番号',
  'q3_zip':             '住所（〒）',
  'q3_pref':            '住所（都道府県・市区町村）',
  'q3_addr':            '住所（番地・建物）',
  'q4_name':            '代表者氏名',
  'q4_kana':            '代表者フリガナ',
  'q4_role':            '代表者役職',
  'q5_founded':         '設立年月日',
  'q6_capital':         '資本金（万円）',
  'q7_business':        '事業内容',
  'q8_industry_code':   '業種コード',
  'q9_rodo_num':        '労働保険番号',
  'q10_koyo_num':       '雇用保険適用事業所番号',
  'q11':                '大企業出資',
  'q11_source':         '大企業出資元',
  'q11_ratio':          '大企業出資比率',
  'q12':                'グループ会社',
  'q12_detail':         'グループ会社詳細',
  'q13':                '社保・税金滞納',
  'q13_detail':         '滞納内容',
  'q14':                '労基法違反歴',
  'q14_detail':         '違反内容',
  'q15':                '不正受給歴',
  'q15_detail':         '不正受給内容',
  'q16_goal':           '今回の申請で実現したいこと',
  'q17_exist':          '就業規則',
  'q17_year':           '就業規則改定年',
  'q17_hiseiki':        '就業規則・非正規条項あり',
  'q17_todoke':         '就業規則・労基署届出済み',
  'q18':                '36協定',
  'q19':                '育児介護休業規程',
  'q20_min_wage':       '事業場内最低時給（円）',
  'q21':                '雇用保険未加入者',
  'q21_cnt':            '雇用保険未加入者数',
  'q22_overtime':       '月平均残業時間',
  'skip5':              '第5部スキップ',
  'q23_part':           'パート人数',
  'q23_fixed':          '有期契約社員人数',
  'q23_dispatch':       '派遣人数',
  'q24_months':         '最長在籍期間（ヶ月）',
  'q25_hourly':         '現在時給（円）',
  'q25_monthly':        '現在月給（万円）',
  'q26_cnt':            '転換予定人数',
  'q26_timing':         '転換予定時期',
  'q27_hourly':         '転換後時給（円）',
  'q27_monthly':        '転換後月給（万円）',
  'q28':                'キャリアアップ計画書',
  'q28_num':            'キャリアアップ計画番号',
  'q29_bonus':          '賞与制度あり',
  'q29_retire':         '退職金制度あり',
  'skip6':              '第6部スキップ',
  'q30_cnt':            '採用予定人数',
  'q30_type':           '採用雇用形態',
  'q30_timing':         '採用予定時期',
  'q31':                'ハローワーク経由',
  'q32_general':        '採用属性_一般',
  'q32_disabled':       '採用属性_障害者',
  'q32_senior':         '採用属性_高齢者',
  'q32_single':         '採用属性_ひとり親',
  'q32_welfare':        '採用属性_生活保護',
  'q32_mid45':          '採用属性_45歳以上就労未経験',
  'q32_other':          '採用属性_その他',
  'q32_other_text':     '採用属性_その他内容',
  'q33':                '障害者手帳種類',
  'q33_grade':          '障害者等級',
  'q34_hours':          '採用後週所定時間',
  'q34_contract':       '採用後雇用期間',
  'q34_months':         '採用後契約期間（ヶ月）',
  'q35_history':        '過去の受給・申請中制度',
  'q36_keikaku':        '認定_経営革新計画',
  'q36_jigyokei':       '認定_事業継続力強化計画',
  'q36_partner':        '認定_パートナーシップ構築宣言',
  'q36_miradegi':       '認定_みらデジ',
  'q36_security1':      '認定_SECURITY ACTION★1',
  'q36_security2':      '認定_SECURITY ACTION★2',
  'q36_dx':             '認定_DX認定',
  'q36_none':           '認定_なし',
  'q37_tax':            '顧問_税理士',
  'q37_tax_firm':       '顧問_税理士事務所',
  'q37_sr':             '顧問_社労士',
  'q37_sr_firm':        '顧問_社労士事務所',
  'q37_shindanshi':     '顧問_中小企業診断士',
  'q37_sh_firm':        '顧問_診断士事務所',
  'q37_none':           '顧問_なし',
  'skip8a':             'CA_スキップ',
  'q38':                'CA_転換規定の明記',
  'q39':                'CA_転換対象雇用形態',
  'q40':                'CA_転換後就業規則適用',
  'q41':                'CA_転換後賞与退職金対象',
  'q42_reason':         'CA_転換急ぐ理由',
  'q43_goal':           'CA_転換で実現したいこと',
  'skip8b':             '特開_スキップ',
  'q44':                '特開_試用期間',
  'q44_months':         '特開_試用期間月数',
  'q45':                '特開_雇用契約書当日交付',
  'q45_reason_text':    '特開_交付困難な理由',
  'q46_prev':           '特開_前職・離職理由',
  'q47_job':            '特開_採用後職種・業務内容',
  'q48':                '特開_長期雇用予定',
  'q49_goal':           '特開_採用で実現したいこと',
  'skip8c':             'IT_スキップ',
  'q50':                'IT_gBizIDプライム',
  'q51_kaikei':         'IT_ツール_会計財務',
  'q51_juchu':          'IT_ツール_受発注在庫',
  'q51_crm':            'IT_ツール_CRM',
  'q51_kinmu':          'IT_ツール_勤怠給与',
  'q51_contract':       'IT_ツール_電子契約',
  'q51_ec':             'IT_ツール_EC',
  'q51_yoyaku':         'IT_ツール_予約管理',
  'q51_security':       'IT_ツール_セキュリティ',
  'q51_other':          'IT_ツール_その他',
  'q51_other_detail':   'IT_ツール_その他内容',
  'q52_inefficient':    'IT_最も非効率な作業',
  'q53_improve':        'IT_効率化目標',
  'q54_current_tools':  'IT_現在使用ツール',
  'q55':                'IT_インボイス登録状況',
  'q55_invoice_num':    'IT_インボイス番号',
  'q56':                'IT_ベンダー接触状況',
  'q56_vendor_name':    'IT_ベンダー名',
  'q57_utm':            'IT_セキュリティ対策_UTM',
  'q57_antivirus':      'IT_セキュリティ対策_ウイルス対策',
  'q57_backup':         'IT_セキュリティ対策_バックアップ',
  'q57_none':           'IT_セキュリティ対策_なし',
  'skip8d':             '持続化_スキップ',
  'q58':                '持続化_商工会議所会員',
  'q59':                '持続化_過去採択',
  'q59_times':          '持続化_過去採択回数',
  'q60_strength':       '持続化_自社の強み',
  'q61_target':         '持続化_狙う顧客層・エリア',
  'q62_chirashi':       '持続化_取組_チラシ広告',
  'q62_hp':             '持続化_取組_HP制作',
  'q62_exhibit':        '持続化_取組_展示会',
  'q62_equip':          '持続化_取組_設備機器',
  'q62_reform':         '持続化_取組_店舗改装',
  'q62_newprod':        '持続化_取組_新商品サービス',
  'q62_other':          '持続化_取組_その他',
  'q62_other_detail':   '持続化_取組_その他内容',
  'q63_cost':           '持続化_補助対象経費',
};

// ─── メイン処理 ───
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // シートが存在しない場合は作成してヘッダーを付ける
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);

      // ヘッダー行のスタイル
      const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
      headerRange
        .setFontWeight('bold')
        .setBackground('#0a0f1e')
        .setFontColor('#ffffff')
        .setFontSize(10);
      sheet.setFrozenRows(1);
      sheet.setFrozenColumns(2); // 送信日時・法人名を固定

      // 列幅を調整
      sheet.setColumnWidth(1, 140);  // 送信日時
      sheet.setColumnWidth(13, 160); // 法人名
    }

    // ヘッダー→インデックスのマップ
    const headerRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
    const headerIndex = {};
    headerRow.forEach((h, i) => { headerIndex[h] = i; });

    // 行データを構築
    const row = new Array(HEADERS.length).fill('');
    row[headerIndex['送信日時']] = data.timestamp || '';

    // フィールドマッピングで埋める
    Object.entries(FIELD_MAP).forEach(([fieldName, headerName]) => {
      const idx = headerIndex[headerName];
      if (idx !== undefined && data[fieldName] !== undefined) {
        let val = data[fieldName];
        // チェックボックス: 1→✓、0→空
        if (val === '1') val = '✓';
        if (val === '0') val = '';
        row[idx] = val;
      }
    });

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ─── テスト用（GASエディタから手動実行） ───
function testDoPost() {
  const testData = {
    timestamp: new Date().toLocaleString('ja-JP'),
    // 診断1
    s1_legal_form: '法人',
    s1_industry: '建設業',
    s1_employees: '15',
    s1_revenue: '8000',
    s1_wage_plan: 'yes',
    s1_investment_plans: 'IT導入・設備投資',
    s1_hiring_plan: 'yes',
    s1_other_flags: '',
    s1_matched: 'キャリアアップ助成金、IT導入補助金、特定求職者雇用開発助成金',
    // 診断2
    s2_total_miss: '180',
    s2_missed_details: 'キャリアアップ助成金、特定求職者雇用開発助成金',
    // 診断3 第1部
    q1_name: 'テスト建設株式会社',
    q1_kana: 'テストケンセツカブシキガイシャ',
    q2_hojin_num: '1234567890123',
    q3_zip: '020-0001',
    q3_pref: '岩手県盛岡市',
    q3_addr: '中央通1-1-1',
    q4_name: '山田 太郎',
    q4_kana: 'ヤマダ タロウ',
    q4_role: '代表取締役',
    q5_founded: '2010年4月1日',
    q6_capital: '500',
    q7_business: '建築工事の設計・施工・監理',
    q8_industry_code: 'F建設業',
    // 第2部
    q11: 'ない',
    q12: 'ない',
    q13: 'ない（全額納付済み）',
    q14: 'ない',
    q15: 'ない',
    // 第3部
    q16_goal: 'パート社員2名を正社員に転換して組織を安定させたい',
    // 第4部
    q17_exist: 'ある',
    q17_year: '2022年',
    q18: '締結済み・届出済み',
    q19: 'ある',
    q20_min_wage: '950',
    q21: '全員加入済み',
    q22_overtime: '15',
    // 第8部 キャリアアップ
    q38: '明記されている',
    q39: '有期雇用（パート・契約社員）',
    q40: 'なる',
    q41: '含まれる',
    q43_goal: '人材の定着・採用コスト削減',
  };
  const fakeEvent = { postData: { contents: JSON.stringify(testData) } };
  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
}
