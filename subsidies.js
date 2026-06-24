// 補助金データベース — このファイルを編集すると診断ツールに反映されます
// 最終更新: 2026-04-24
const SUBSIDIES = [
  {
    "id": "jizokuka-hojyokin",
    "name": "小規模事業者持続化補助金",
    "q14_key": "jizokuka",
    "max_amount": 2500000,
    "amount_note": "通常枠50万円、特別枠最大250万円（対象経費の2/3）",
    "timing": "before_investment",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主",
      "NPO等"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "医療法人・社会福祉法人は原則対象外",
    "description": "小規模事業者が販路開拓・集客強化のためにチラシ・HP・ECサイト・展示会出展などに使う費用を補助する制度。商工会議所や商工会のサポートを受けて経営計画書を作成して申請します。使い道が広く、広告費・看板・包装資材なども対象になる、小規模事業者にとって最も使いやすい補助金のひとつです。",
    "conditions": [
      "商工会議所・商工会の支援を受けて経営計画書を作成",
      "採択後に経費執行"
    ],
    "compatible_with": [],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {
      "パートナーシップ構築宣言": 1,
      "事業継続力強化計画": 1,
      "経営革新計画": 1
    },
    "q15_keywords": [
      "チラシ",
      "hp",
      "web",
      "広告",
      "販路",
      "展示会",
      "ホームページ"
    ]
  },
  {
    "id": "it-donyu",
    "name": "デジタル化・AI導入補助金2026（旧IT導入補助金）",
    "q14_key": "it-donyu",
    "max_amount": 4500000,
    "amount_note": "【2026年度改定・申請受付開始2026年3月30日〜】①通常枠（1プロセス以上）：5〜150万円、補助率2/3（小規模事業者は50万円以下3/4）。②通常枠（4プロセス以上）：150〜450万円、補助率2/3。③インボイス枠（電子取引類型）：最大350万円、補助率2/3。④セキュリティ対策推進枠：5〜150万円、補助率1/2",
    "timing": "before_investment",
    "lead_time_months": 2,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "社会福祉法人・医療法人・NPO等は原則対象外。IT導入支援事業者（認定ベンダー）経由での申請が必須",
    "description": "2026年度より「デジタル化・AI導入補助金」に名称変更・拡充。会計・勤怠・受発注・在庫管理・AI活用・ECサイト・クラウドサービスなど幅広いITツールが対象。通常枠は5〜150万円（補助率2/3）、4プロセス以上なら最大450万円まで拡大。認定ITベンダー経由で申請でき難易度が低く、2026年3月30日より申請受付開始。インボイス未登録の免税事業者向けの特例枠もあります。製造業でもAI検品・生産管理システムなどに活用可能です。",
    "conditions": [
      "IT導入支援事業者（認定ベンダー）経由での申請が必須",
      "gBizIDプライムが必要",
      "SECURITY ACTION（★1以上）の宣言"
    ],
    "compatible_with": [
      "jinzai-hito-investment",
      "it-security"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {
      "SECURITY ACTION": 1,
      "みらデジ経営チェック": 1
    },
    "q15_keywords": [
      "it",
      "システム",
      "ソフト",
      "クラウド",
      "ai",
      "デジタル",
      "erp",
      "会計",
      "勤怠",
      "ec",
      "生産管理",
      "在庫管理",
      "ai検品",
      "受発注"
    ]
  },
  {
    "id": "monozukuri-hojyokin",
    "name": "ものづくり補助金",
    "q14_key": "monozukuri",
    "max_amount": 40000000,
    "amount_note": "【製品・サービス高付加価値化枠（通常）】対象経費の1/2（小規模・赤字は2/3）、上限750万円〜4,000万円。※自動化専用設備は「省力化（オーダーメード）枠」（別エントリー）を確認",
    "timing": "before_investment",
    "lead_time_months": 12,
    "difficulty": 3,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "社会福祉法人・医療法人・NPO等は対象外。革新的な製品・サービス開発または生産プロセス改善が条件",
    "description": "革新的な製品・サービスの開発や生産プロセス改善のための設備投資を補助する制度。機械装置・システム構築・専門家費用などが対象で、上限は通常枠750万円〜省力化枠4,000万円と高額。ただし審査が厳しく、革新性・付加価値向上の説得力ある事業計画書の作成が採択の鍵です。",
    "conditions": [
      "革新的製品・サービス開発または生産プロセス改善",
      "付加価値額・給与総額の増加目標を設定"
    ],
    "compatible_with": [
      "jinzai-ikusei-shien",
      "jinzai-reskilling"
    ],
    "incompatible_with": [],
    "wage_required": true,
    "bonus_points": {
      "経営革新計画": 1,
      "パートナーシップ構築宣言": 1,
      "事業継続力強化計画": 1,
      "SECURITY ACTION": 1
    },
    "q15_keywords": [
      "設備",
      "機械",
      "装置",
      "製品開発",
      "製造",
      "加工",
      "自動化",
      "省力化",
      "木工",
      "家具",
      "木材加工",
      "CNC",
      "NC旋盤",
      "レーザー加工",
      "3Dプリンター",
      "検査装置",
      "試作",
      "金型"
    ]
  },
  {
    "id": "shooryoka",
    "name": "省力化投資補助金（カタログ注文型）",
    "q14_key": "shooryoka",
    "max_amount": 15000000,
    "amount_note": "【2026年3月19日改定】補助率1/2（小規模・再生事業者は2/3）。上限：従業員5人以下→500万円（改定前200万円）、6〜20人→1,000万円、21人以上→1,500万円。収益納付ルール撤廃。最低賃金引き上げ特例：全従業員の30%以上が地域最低賃金+50円以内→補助率2/3に優遇",
    "timing": "before_investment",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "カタログ掲載製品からの選択が必須。社会福祉法人・NPO等は対象外。2026年3月19日改定で従業員5人以下の上限が大幅引き上げ（200万→500万円）",
    "description": "人手不足解消のため、配膳ロボット・自動精算機・自動搬送機などの設備を導入する費用を補助する制度。2026年3月19日の改定で従業員5人以下の補助上限が200万円→500万円に大幅拡充。収益納付ルールも撤廃され、使いやすくなりました。カタログ登録済み製品から選ぶ必要がありますが難易度は低め。飲食・小売・製造など幅広い業種が対象で、賃上げ計画の提出が必須です。最低賃金水準が低い企業は補助率2/3の特例が適用される可能性があります。",
    "conditions": [
      "カタログ掲載製品の中から選択（自由調達不可）",
      "賃上げ計画の提出が必須",
      "従業員数により補助上限が変動"
    ],
    "compatible_with": [
      "gyomu-kaizen"
    ],
    "incompatible_with": [],
    "wage_required": true,
    "bonus_points": {},
    "q15_keywords": [
      "ロボット",
      "配膳",
      "自動精算",
      "自動化",
      "省人化",
      "省力",
      "自動搬送",
      "協働ロボット",
      "amr",
      "自動機"
    ]
  },
  {
    "id": "jigyo-shinsyutsu",
    "name": "新事業進出補助金（旧・事業再構築補助金）",
    "q14_key": "jigyo-shinsyutsu",
    "max_amount": 70000000,
    "amount_note": "対象経費の50%（上限7,000万円）。第4回公募：2026年5月19日〜6月19日予定。※2026年度中にものづくり補助金と統合予定",
    "timing": "before_investment",
    "lead_time_months": 12,
    "difficulty": 3,
    "company_size": [
      "中小企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "社会福祉法人・医療法人・NPO等は対象外。認定支援機関の確認が必須。2026年度中にものづくり補助金と統合（「新事業進出・ものづくり補助金」）予定のため、最新公募情報を必ず確認のこと",
    "description": "既存事業から新市場・新分野に進出するための設備投資・建物改装等を補助する制度（旧・事業再構築補助金の後継）。補助額は最大7,000万円と大きいが、認定支援機関との連携・新分野進出の証明が必須で審査は厳しめ。採択後に経費執行するため、計画から支給まで1〜2年かかります。なお2026年度中にものづくり補助金と統合予定のため、申請前に必ず最新の公募情報を確認してください。",
    "conditions": [
      "認定経営革新等支援機関（認定支援機関）の確認必須",
      "新市場・新分野への進出であること",
      "採択後に経費執行"
    ],
    "compatible_with": [
      "jinzai-reskilling"
    ],
    "incompatible_with": [],
    "wage_required": true,
    "bonus_points": {
      "経営革新計画": 1,
      "パートナーシップ構築宣言": 1
    },
    "q15_keywords": [
      "新事業",
      "新分野",
      "参入",
      "転換",
      "新規",
      "改装",
      "新築",
      "店舗"
    ]
  },
  {
    "id": "shoene",
    "name": "省エネ補助金（省エネルギー設備導入補助）",
    "q14_key": "shoene",
    "max_amount": 10000000,
    "amount_note": "省エネ効果に応じて対象経費の1/3〜1/2（上限1,000万円程度）",
    "timing": "before_investment",
    "lead_time_months": 9,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "省エネ効果の事前計算・報告が必要",
    "description": "老朽化した設備を高効率な省エネ機器（空調・冷凍機・ボイラー・LED等）に更新する際の費用を補助する制度。省エネ効果の事前計算と取り組み後の報告が必要で、削減効果が大きいほど採択に有利です。光熱費の削減と補助金の両取りができるため、高効率設備への更新を検討中の企業に特に有効です。",
    "conditions": [
      "省エネ効果の計算・報告が必要",
      "省エネルギー診断の実施推奨"
    ],
    "compatible_with": [],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "省エネ",
      "光熱費",
      "電気代",
      "エアコン",
      "冷凍機",
      "ボイラー",
      "led"
    ]
  },
  {
    "id": "jigyo-shokei",
    "name": "事業承継・M&A補助金",
    "q14_key": "jigyo-shokei",
    "max_amount": 8000000,
    "amount_note": "廃業費用または専門家費用の2/3（上限800万円）",
    "timing": "before_investment",
    "lead_time_months": 9,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "後継者不在等の要件あり",
    "description": "後継者不在による廃業を防ぐため、事業承継・M&Aに伴う専門家費用や廃業準備費用を補助する制度。親族内承継・第三者承継（M&A）・廃業の3パターンに対応。認定支援機関（税理士・弁護士等）との連携が必要で、後継者問題を抱える中小企業オーナーが活用しやすい制度です。",
    "conditions": [
      "後継者不在等の要件",
      "認定支援機関の確認"
    ],
    "compatible_with": [],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "承継",
      "後継者",
      "m&a",
      "買収",
      "廃業",
      "引継"
    ]
  },
  {
    "id": "jinzai-ikusei-shien",
    "name": "人材開発支援助成金 人材育成支援コース",
    "q14_key": "jinzai",
    "max_amount": 500000,
    "amount_note": "訓練費の45%（中小企業）＋賃金助成 1人1時間760円",
    "timing": "before_training",
    "lead_time_months": 3,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "雇用保険被保険者である従業員が対象。10時間以上のOFF-JTが必要",
    "description": "従業員に10時間以上のOFF-JT（業務と切り離した外部研修・通信教育等）を受けさせた際の訓練費用と賃金を助成する制度。外部セミナー・Eラーニング・社内研修など幅広い訓練が対象で、訓練実施計画届を開始1ヶ月前に提出することが必須です。中小企業は訓練費用の45%が助成されます。",
    "conditions": [
      "訓練実施計画届を訓練開始1ヶ月前に提出",
      "雇用保険被保険者が対象",
      "10時間以上のOFF-JT"
    ],
    "compatible_with": [
      "jinzai-kyuka-fuyo",
      "monozukuri-hojyokin"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "研修",
      "セミナー",
      "資格",
      "育成",
      "教育",
      "スキルアップ",
      "訓練"
    ]
  },
  {
    "id": "jinzai-hito-investment",
    "name": "人材開発支援助成金 人への投資促進コース",
    "q14_key": "jinzai",
    "max_amount": 1000000,
    "amount_note": "訓練費の75%（中小企業）＋賃金助成1,000円/時間。【令和8年度が最終年度】令和9年度以降は継続しない見込みのため、早期申請を推奨",
    "timing": "before_training",
    "lead_time_months": 3,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "DX・AI・グリーン分野等の高度デジタル訓練が対象。令和8年度が最終年度のため早期検討を推奨",
    "description": "DX・AI・グリーン分野等の高度デジタルスキル訓練に特化した助成コース。通常の育成コースより補助率が高く（75%）、IT人材育成・AIリスキリングを目的とした専門的な訓練プログラムが対象です。令和8年度（2026年度）が最終年度となっているため、検討中の場合は早期申請を強く推奨します。",
    "conditions": [
      "DX・AI・グリーン分野等の高度デジタル訓練",
      "訓練開始1ヶ月前に届出"
    ],
    "compatible_with": [
      "it-donyu"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "dx",
      "ai",
      "デジタル",
      "グリーン",
      "it人材",
      "高度"
    ]
  },
  {
    "id": "jinzai-reskilling",
    "name": "人材開発支援助成金 事業展開等リスキリング支援コース",
    "q14_key": "jinzai",
    "max_amount": 1500000,
    "amount_note": "訓練費の75%（中小企業）＋賃金助成",
    "timing": "before_training",
    "lead_time_months": 3,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "【令和8年3月2日改正施行】対象訓練の範囲が大幅拡充。新事業展開に伴う配置転換に加え、今後3年以内の人事・人材育成計画に基づく訓練も対象に追加された",
    "description": "新事業展開に向けて従業員をリスキリング（新しいスキル習得）させる際の訓練費用を補助するコース（補助率75%）。【令和8年3月2日改正】従来の「事業展開に伴う配置転換」に加え、「今後3年以内の人事構想・育成計画に基づく訓練」も助成対象に追加され、より長期的・計画的な人材育成にも活用できるようになりました。令和8年度が最終年度の見込みのため、早めの活用を推奨。",
    "conditions": [
      "人事・人材育成計画の策定（今後3年以内の計画）または新事業展開計画書の作成",
      "訓練内容と計画の関連を明示",
      "訓練開始1ヶ月前に届出"
    ],
    "compatible_with": [
      "jigyo-shinsyutsu",
      "monozukuri-hojyokin"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "リスキリング",
      "新事業",
      "転換",
      "配置転換",
      "新サービス"
    ]
  },
  {
    "id": "jinzai-kyuka-fuyo",
    "name": "人材開発支援助成金 教育訓練休暇等付与コース",
    "q14_key": "jinzai",
    "max_amount": 300000,
    "amount_note": "1事業所あたり最大30万円",
    "timing": "before_training",
    "lead_time_months": 3,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "有給の教育訓練休暇制度を就業規則に新規整備すること",
    "description": "従業員が自発的に学ぶための有給の教育訓練休暇制度を就業規則に新設した事業主に支給される助成金。制度を整備するだけでなく、実際に従業員が休暇を取得して研修・通信教育等を受けることが支給の条件です。自己啓発を支援する企業文化の醸成にも役立ちます。",
    "conditions": [
      "有給の教育訓練休暇制度を就業規則に新規整備",
      "実際に従業員が取得して訓練受講"
    ],
    "compatible_with": [
      "jinzai-ikusei-shien"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "自己啓発",
      "休暇",
      "自発的",
      "制度整備"
    ]
  },
  {
    "id": "jinzai-kensetsu-gino",
    "name": "人材開発支援助成金 建設労働者技能実習コース",
    "q14_key": "jinzai",
    "max_amount": 200000,
    "amount_note": "訓練費の実費＋賃金助成（上限20万円程度）",
    "timing": "before_training",
    "lead_time_months": 3,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": [
      "建設業"
    ],
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "建設業のみ対象",
    "description": "建設業の事業主が自社の建設労働者にOFF-JTによる技能実習を受けさせた際の訓練費用と賃金を助成するコース。建設業専用制度であり、他業種は申請できません。同じ人物で認定訓練コースと同時申請することはできません。",
    "conditions": [
      "建設業の事業主",
      "自社主催のOFF-JT（通常業務と明確に区別）"
    ],
    "compatible_with": [],
    "incompatible_with": [
      "jinzai-kensetsu-nintei"
    ],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "建設",
      "技能実習",
      "職人"
    ]
  },
  {
    "id": "jinzai-kensetsu-nintei",
    "name": "人材開発支援助成金 建設労働者認定訓練コース",
    "q14_key": "jinzai",
    "max_amount": 300000,
    "amount_note": "訓練費の1/6（上限30万円）",
    "timing": "before_training",
    "lead_time_months": 3,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": [
      "建設業"
    ],
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "建設業のみ対象。都道府県知事認定の職業訓練に受講させること",
    "description": "建設業の事業主が、都道府県知事が認定した職業訓練（技能検定対応訓練等）に建設労働者を受講させた際に訓練費用の一部を助成するコース。認定訓練機関への受講実績が必要で、技能実習コースとは重複して同一人物には適用できません。",
    "conditions": [
      "建設業の事業主",
      "都道府県知事認定の職業訓練に受講させる"
    ],
    "compatible_with": [],
    "incompatible_with": [
      "jinzai-kensetsu-gino"
    ],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "建設",
      "認定訓練",
      "技能検定"
    ]
  },
  {
    "id": "career-up-seishainuka",
    "name": "キャリアアップ助成金 正社員化コース",
    "q14_key": null,
    "max_amount": 800000,
    "amount_note": "【2025年4月改正】重点支援対象者（雇入れ3年以上等）：80万円。それ以外の有期雇用労働者：40万円（中小企業）",
    "timing": "after_hire",
    "lead_time_months": 9,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "有期雇用労働者（パート・アルバイト等）が在籍していること",
    "description": "パート・契約社員などの有期雇用労働者を正社員（無期雇用・フルタイム）に転換した事業主に支給される助成金。【2025年4月改正】雇入れから3年以上の「重点支援対象者」なら80万円、3年未満は40万円（中小企業）に変更されました。転換後6ヶ月の雇用継続と3%以上の賃金増加が必須条件。非正規を正規にするたびに繰り返し受給できます。",
    "conditions": [
      "キャリアアップ計画書を転換前に提出",
      "転換後6ヶ月雇用継続",
      "転換後賃金3%以上増加"
    ],
    "compatible_with": [
      "career-up-chingin-kaitei",
      "career-up-shoyo-taishokukin",
      "career-up-chingin-kyotsu"
    ],
    "incompatible_with": [
      "career-up-shogaisha-seishainuka"
    ],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "パート",
      "アルバイト",
      "非正規",
      "正社員転換",
      "正規化",
      "有期"
    ]
  },
  {
    "id": "career-up-shogaisha-seishainuka",
    "name": "キャリアアップ助成金 障害者正社員化コース",
    "q14_key": null,
    "max_amount": 1200000,
    "amount_note": "1人あたり120万円（中小企業）、重度障害者は20万円加算",
    "timing": "after_hire",
    "lead_time_months": 9,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "有期雇用の障害者が在籍していること。障害者手帳等の取得が必要",
    "description": "有期雇用の障害者を正社員に転換した際に1人あたり最大120万円を支給する助成金（通常の正社員化コース80万円より高額）。重度障害者の場合はさらに加算あり。障害者手帳等の確認が必要で、トライアル雇用→特定就職困難者コースと組み合わせて段階的に申請するのが王道です。",
    "conditions": [
      "キャリアアップ計画書を転換前に提出",
      "転換後6ヶ月雇用継続",
      "転換後賃金3%以上増加",
      "障害者手帳等の取得"
    ],
    "compatible_with": [
      "trial-shogaisha",
      "tokutei-shushokukonnansha"
    ],
    "incompatible_with": [
      "career-up-seishainuka"
    ],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "障害者",
      "障がい者",
      "障害",
      "手帳"
    ]
  },
  {
    "id": "career-up-chingin-kaitei",
    "name": "キャリアアップ助成金 賃金規定等改定コース",
    "q14_key": null,
    "max_amount": 500000,
    "amount_note": "1事業所あたり最大50万円（中小企業のみ）",
    "timing": "after_raise",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "中小企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "中小企業のみ対象。有期雇用労働者の賃金を3%以上引き上げること",
    "description": "有期雇用労働者の賃金を3%以上引き上げ、就業規則に賃金規定を整備した中小企業のみに支給される助成金。1事業所あたり最大50万円で、正社員化コースや賞与制度コースと組み合わせて同時申請することで受給額を積み上げられます。",
    "conditions": [
      "3%以上の賃金引上げ",
      "就業規則に賃金規定を整備",
      "キャリアアップ計画書を事前提出"
    ],
    "compatible_with": [
      "career-up-seishainuka",
      "gyomu-kaizen"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "賃上げ",
      "時給アップ",
      "賃金引上げ",
      "非正規の待遇改善"
    ]
  },
  {
    "id": "career-up-chingin-kyotsu",
    "name": "キャリアアップ助成金 賃金規定等共通化コース",
    "q14_key": null,
    "max_amount": 720000,
    "amount_note": "1事業所あたり最大72万円",
    "timing": "after_raise",
    "lead_time_months": 6,
    "difficulty": 3,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "正規・非正規共通の賃金規定を就業規則に整備すること",
    "description": "正規・非正規社員の賃金規定を共通化（同一労働同一賃金の実現）した事業主に支給される助成金。共通の賃金表を就業規則に整備し、6ヶ月分の賃金を支払った実績が必要です。難易度はやや高いですが、正社員化コースとセットで申請すると受給額が大きくなります。",
    "conditions": [
      "正規・非正規共通の賃金規定を就業規則に整備",
      "整備後6ヶ月分の賃金支払い"
    ],
    "compatible_with": [
      "career-up-seishainuka"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "同一労働同一賃金",
      "賃金体系統一",
      "共通化"
    ]
  },
  {
    "id": "career-up-shoyo-taishokukin",
    "name": "キャリアアップ助成金 賞与・退職金制度導入コース",
    "q14_key": null,
    "max_amount": 500000,
    "amount_note": "1事業所あたり最大50万円",
    "timing": "after_payment",
    "lead_time_months": 9,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "有期雇用労働者に実際に賞与または退職金を支給すること",
    "description": "有期雇用労働者に新たに賞与制度または退職金制度を設け、実際に支給した事業主に支給される助成金。就業規則に規定を整備するだけでなく、実際に支払った実績が条件です。パート・アルバイトの待遇改善と採用力向上につながる取り組みで、正社員化コースと組み合わせやすいです。",
    "conditions": [
      "就業規則に賞与・退職金規定を整備",
      "対象者に賞与または退職金を実際に支給"
    ],
    "compatible_with": [
      "career-up-seishainuka",
      "career-up-chingin-kaitei"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "賞与",
      "ボーナス",
      "退職金",
      "非正規の待遇"
    ]
  },
  {
    "id": "career-up-tanjikan-enchyo",
    "name": "キャリアアップ助成金 短時間労働者労働時間延長支援コース",
    "q14_key": null,
    "max_amount": 255000,
    "amount_note": "1人あたり最大25.5万円",
    "timing": "after_change",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "週所定労働時間が20時間未満のパートが在籍していること",
    "description": "週所定労働時間が20時間未満のパートタイマーの労働時間を延長して社会保険に加入させた事業主に支給される助成金。106万円・130万円の壁を超えて社会保険加入させる際の費用負担を支援します。延長後6ヶ月の雇用継続と社会保険適用が条件です。",
    "conditions": [
      "週所定労働時間を延長",
      "延長後6ヶ月雇用継続",
      "社会保険適用要件を満たす"
    ],
    "compatible_with": [],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "短時間",
      "週20時間",
      "社会保険加入",
      "扶養"
    ]
  },
  {
    "id": "trial-ippan",
    "name": "トライアル雇用助成金 一般トライアルコース",
    "q14_key": null,
    "max_amount": 120000,
    "amount_note": "月4万円×3ヶ月＝12万円/人",
    "timing": "before_hire",
    "lead_time_months": 4,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "大企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 0,
    "note_eligibility": "ハローワーク等の紹介状が必須。採用前の申請が必要",
    "description": "フリーターや長期失業者など就職困難な方を最大3ヶ月の試用期間（トライアル）で雇用した事業主に月4万円×3ヶ月を支給する助成金。ハローワークや職業紹介事業者の紹介状が必須で、採用決定前に申請する必要があります。採用リスクを下げながら人材を見極めたい企業向けです。",
    "conditions": [
      "ハローワーク等の紹介状が必須",
      "トライアル実施計画書を雇い入れ前に提出",
      "3ヶ月のトライアル期間"
    ],
    "compatible_with": [
      "tokutei-shushokukonnansha"
    ],
    "incompatible_with": [
      "trial-shogaisha",
      "trial-shogaisha-tanjikan"
    ],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "フリーター",
      "長期失業",
      "試用",
      "ハローワーク採用",
      "採用リスク"
    ]
  },
  {
    "id": "trial-shogaisha",
    "name": "トライアル雇用助成金 障害者トライアルコース",
    "q14_key": null,
    "max_amount": 240000,
    "amount_note": "月8万円×3ヶ月＝24万円/人（精神・発達障害者）",
    "timing": "before_hire",
    "lead_time_months": 4,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "大企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 0,
    "note_eligibility": "ハローワーク等の紹介状が必須。障害者の採用前に申請が必要",
    "description": "精神・発達・知的障害者を試験的に雇用した事業主に月8万円（精神・発達障害者）×3ヶ月を支給する助成金。障害者は就労経験が少ないため、お互いの適性を確認しながら採用できるメリットがあります。採用後も特定就職困難者コースや正社員化コースに継続して申請できます。",
    "conditions": [
      "ハローワーク等の紹介状が必須",
      "トライアル実施計画書を事前提出",
      "精神・発達・知的障害者が対象"
    ],
    "compatible_with": [
      "tokutei-shushokukonnansha",
      "career-up-shogaisha-seishainuka"
    ],
    "incompatible_with": [
      "trial-ippan",
      "trial-shogaisha-tanjikan"
    ],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "障害者採用",
      "障がい者",
      "精神障害",
      "発達障害",
      "知的障害"
    ]
  },
  {
    "id": "trial-shogaisha-tanjikan",
    "name": "トライアル雇用助成金 障害者短時間トライアルコース",
    "q14_key": null,
    "max_amount": 240000,
    "amount_note": "月2万円×最大12ヶ月＝24万円/人",
    "timing": "before_hire",
    "lead_time_months": 4,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "大企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 0,
    "note_eligibility": "週10時間以上20時間未満での雇用。精神・発達障害者等が対象",
    "description": "精神・発達障害者等を週10〜20時間未満の短時間から段階的に雇用する制度。フルタイム就労が難しい方を少しずつ慣らしながら採用でき、最大12ヶ月間支援を受けられます。一般トライアルコースとは同一人物で重複申請できません。",
    "conditions": [
      "ハローワーク等の紹介状が必須",
      "週10〜20時間未満の雇用から段階的に延長",
      "精神・発達障害者等"
    ],
    "compatible_with": [
      "tokutei-shushokukonnansha",
      "career-up-shogaisha-seishainuka"
    ],
    "incompatible_with": [
      "trial-ippan"
    ],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "短時間障害者",
      "就労移行",
      "週10時間",
      "段階的就労"
    ]
  },
  {
    "id": "tokutei-shushokukonnansha",
    "name": "特定求職者雇用開発助成金 特定就職困難者コース",
    "q14_key": null,
    "max_amount": 2400000,
    "amount_note": "障害者：240万円、60歳以上高齢者：70万円（いずれも中小企業）",
    "timing": "after_hire",
    "lead_time_months": 9,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 0,
    "note_eligibility": "ハローワーク等の紹介状が必須。雇い入れ後2週間以内に受給資格確認申請",
    "description": "障害者・高齢者・母子家庭の母親など就職困難な方をハローワーク等の紹介で雇用した事業主に支給される助成金。障害者採用では最大240万円と高額で、雇い入れ後2週間以内に受給資格確認申請が必要です。トライアル雇用と組み合わせて段階的に申請するのが一般的です。",
    "conditions": [
      "ハローワーク等の紹介状が必須",
      "雇い入れ後2週間以内に受給資格確認申請",
      "1年以上の継続雇用見込み"
    ],
    "compatible_with": [
      "trial-shogaisha",
      "trial-ippan",
      "career-up-shogaisha-seishainuka"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "障害者採用",
      "高齢者採用",
      "母子家庭",
      "就職困難者",
      "障害者雇用率"
    ]
  },
  {
    "id": "ryoritsu-papa-shien",
    "name": "両立支援等助成金 出生時両立支援コース（子育てパパ支援助成金）",
    "q14_key": null,
    "max_amount": 400000,
    "amount_note": "1人目20万円、2人目以降10万円（中小企業）",
    "timing": "after_return",
    "lead_time_months": 6,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "育休・育児目的休暇規定を就業規則に整備していること",
    "description": "男性社員が子の出生後8週間以内に連続5日以上の産後パパ育休を取得した際に支給される助成金（1人目20万円、2人目以降10万円）。育休・育児目的休暇規定を就業規則に整備していることが前提条件です。男性の育児参加を促進し、採用ブランディング向上にも貢献します。",
    "conditions": [
      "育休・育児目的休暇規定を就業規則に整備",
      "男性社員が子の出生後8週間以内に連続5日以上取得"
    ],
    "compatible_with": [
      "ryoritsu-ikukyu-kouhyo"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "パパ育休",
      "男性育休",
      "産後パパ",
      "男性の育児"
    ]
  },
  {
    "id": "ryoritsu-ikukyu-shien",
    "name": "両立支援等助成金 育児休業等支援コース",
    "q14_key": null,
    "max_amount": 1200000,
    "amount_note": "休業取得時30万円＋職場復帰時30万円等 最大120万円",
    "timing": "after_return",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "育休復帰支援プランを育休取得前に策定すること",
    "description": "育休取得者が出た際に育休復帰支援プランを策定し、代替要員の確保や職場復帰支援を行った中小企業に支給される助成金。休業取得時30万円＋職場復帰時30万円の2段階支給が基本で、最大120万円まで積み上げ可能です。育休前のプラン策定が必須条件です。",
    "conditions": [
      "育休復帰支援プランを育休取得前に策定",
      "就業規則に育休規定"
    ],
    "compatible_with": [
      "ryoritsu-ikukyu-kouhyo"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "育休",
      "育児休業",
      "産休",
      "復帰支援",
      "くるみん"
    ]
  },
  {
    "id": "ryoritsu-kaigo-boushi",
    "name": "両立支援等助成金 介護離職防止支援コース",
    "q14_key": null,
    "max_amount": 1000000,
    "amount_note": "介護休業取得時30万円＋復帰時30万円等 最大100万円。【令和8年度新設】介護休暇有給化助成：有給介護休暇導入で30万円、年10日以上なら50万円",
    "timing": "after_return",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "介護支援プランの事前策定が必要。【令和8年度新設】介護休暇有給化助成は有給の介護休暇制度を就業規則に規定・導入することが条件",
    "description": "介護が必要な家族を持つ従業員のために介護支援プランを策定し、介護休業取得・職場復帰を支援した事業主に支給される助成金。介護を理由とした離職は企業にとっても大きな損失であり、これを予防・支援する制度です。【令和8年度から新設】介護休暇を有給化した企業への助成が追加。有給の介護休暇制度を導入した場合は30万円、年10日以上の場合は50万円が支給されます。",
    "conditions": [
      "介護支援プランの事前策定",
      "就業規則に介護休業・短時間勤務規定"
    ],
    "compatible_with": [],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "介護",
      "介護離職",
      "介護休業",
      "40代",
      "50代"
    ]
  },
  {
    "id": "ryoritsu-funin-shien",
    "name": "両立支援等助成金 不妊治療及び女性の健康課題対応両立支援コース",
    "q14_key": null,
    "max_amount": 900000,
    "amount_note": "1事業所あたり最大90万円（2026年度より「女性の健康課題対応」も対象に追加）",
    "timing": "after_leave",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "不妊治療・更年期・月経症状等の健康課題対応の休暇制度を就業規則に整備し、実際に取得した従業員がいること",
    "description": "2026年度よりコース名が変更・拡充。不妊治療に加え、更年期症状・月経症状等の女性特有の健康課題に対応する休暇・休業制度を整備した事業主に最大90万円を支給。就業規則への規定整備に加えて実際の利用実績が必要です。女性活躍推進・採用力強化にも有効です。",
    "conditions": [
      "不妊治療のための休暇制度を就業規則に整備",
      "実際に休暇取得した従業員がいること"
    ],
    "compatible_with": [
      "ryoritsu-ikukyu-shien"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "不妊治療",
      "女性活躍",
      "福利厚生",
      "30代女性",
      "40代女性"
    ]
  },
  {
    "id": "ryoritsu-ikukyu-kouhyo",
    "name": "両立支援等助成金 育児休業等情報公表支援コース",
    "q14_key": null,
    "max_amount": 1000000,
    "amount_note": "1事業所あたり最大100万円（中小企業のみ）",
    "timing": "after_publish",
    "lead_time_months": 6,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "中小企業（常時雇用1,000人以下）のみ対象。自主的な育休取得率の公表が条件",
    "description": "育休取得率などの情報を自社HPや就職情報サイト等で自主的に公表した中小企業に最大100万円を支給する助成金（中小企業のみ）。公表自体が採用PR・採用ブランディングになるため、優秀な人材確保にも直結します。育休支援コースやパパ育休コースとの組み合わせが効果的です。",
    "conditions": [
      "育休取得率等の情報を自社HP等で自主的に公表",
      "育休取得促進の取り組みを実施"
    ],
    "compatible_with": [
      "ryoritsu-ikukyu-shien",
      "ryoritsu-papa-shien"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "採用力",
      "育休公表",
      "くるみん",
      "採用PR"
    ]
  },
  {
    "id": "ryoritsu-gyomu-daigae",
    "name": "両立支援等助成金 育休中等業務代替支援コース",
    "q14_key": null,
    "max_amount": 990000,
    "amount_note": "【令和8年度拡充】手当支給等（育児休業）最長1年以上：99万円/人（従来82.5万円）。短時間勤務対応：最大67.5万円。代替要員新規雇用：最大67.5万円。有期雇用労働者加算：10万円",
    "timing": "before_hire",
    "lead_time_months": 1,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "【令和8年度】常時雇用労働者数の要件撤廃で使いやすくなった。業務代替の見直し・効率化と手当制度の就業規則規定が必須。7日以上の育休取得者の業務代替実績が必要",
    "description": "育児休業取得者や短時間勤務者の業務を代替する周囲の労働者に手当を支給、または代替要員を新規雇用した場合に受給できる助成金（2024年1月新設）。令和8年度から最長1年以上の育休の場合は最大99万円/人（従来82.5万円から増額）に拡充。業務代替者への手当支給に必要な雇用労働者数の要件も撤廃されより使いやすくなりました。育休者の「周囲の頑張り」に直接報いることができる制度です。",
    "conditions": [
      "業務代替の見直し・効率化と就業規則への手当制度規定",
      "7日以上の育休取得者の業務代替実績",
      "代替業務体制の整備記録"
    ],
    "compatible_with": [
      "ryoritsu-ikukyu-shien",
      "ryoritsu-papa-shien",
      "ryoritsu-ikukyu-kouhyo"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "育休",
      "業務代替",
      "育児休業",
      "代替要員",
      "周囲の負担",
      "育休代替手当"
    ]
  },
  {
    "id": "seichokasoku",
    "name": "中小企業成長加速化補助金",
    "q14_key": "seichokasoku",
    "max_amount": 500000000,
    "amount_note": "設備投資等の対象経費の1/2（上限5億円）。工場・拠点の新増設、大型設備導入が対象。総予算1,000億円規模（2025年5月公募開始）",
    "timing": "before_investment",
    "lead_time_months": 12,
    "difficulty": 3,
    "company_size": [
      "中小企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "成長目標（売上・付加価値額等）の設定が必須。大規模投資が前提のため、通常枠（ものづくり補助金）との使い分けが重要",
    "description": "2025年新設の大型補助金。売上高100億円超を目指す中小企業が大胆な設備投資（工場新増設・大型機械等）を行う際の費用を最大5億円（補助率1/2）補助する制度。総予算1,000億円規模で、2025年5月から公募開始。「100億宣言」の申請・公表と認定支援機関（税理士等）の確認が必須。賃上げ目標の達成も条件です。",
    "conditions": [
      "認定経営革新等支援機関（認定支援機関）の確認必須",
      "明確な成長目標と事業計画書の提出",
      "大規模な設備投資（数千万円〜）が対象"
    ],
    "compatible_with": [
      "jinzai-reskilling",
      "jinzai-hito-investment",
      "monozukuri-hojyokin"
    ],
    "incompatible_with": [],
    "wage_required": true,
    "bonus_points": {
      "経営革新計画": 2,
      "パートナーシップ構築宣言": 1
    },
    "q15_keywords": [
      "工場",
      "拠点",
      "大型設備",
      "増設",
      "新設",
      "100億",
      "大規模投資"
    ]
  },
  {
    "id": "konenreisha-koyosuishin",
    "name": "65歳超雇用推進助成金",
    "q14_key": null,
    "max_amount": 2400000,
    "amount_note": "【2026年4月8日大改正】①65歳超継続雇用促進コース：定年延長幅・被保険者数に応じて最大240万円（改正前160万円から拡充）。複数回申請可能に変更。②高年齢者無期雇用転換コース：1人あたり30万円（中小企業以外23万円）。③高年齢者評価制度等雇用管理改善コース：支出経費の60%（上限50万円）",
    "timing": "after_hire",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "2026年4月8日大改正：支給額が最大240万円に拡充（旧160万円）、1事業主1回限り要件を廃止し複数回申請が可能に。専門家委託要件も廃止されシンプルな申請に",
    "description": "65歳以降も継続して活躍できる職場環境を整備した事業主に支給される助成金（3コース）。2026年4月8日の大改正により大幅に拡充。①65歳超継続雇用促進コース：65歳以上への定年引上げ等を実施した場合、最大240万円（改正前160万円）に増額、複数回申請も可能に。②高年齢者無期雇用転換コース：50歳以上の有期→無期転換で1人あたり30万円。③高年齢者評価制度等雇用管理改善コース：制度整備経費の60%補助。高齢化社会に対応した人材活用・定年延長に取り組む企業を後押しします。",
    "conditions": [
      "65歳以上への定年延長または継続雇用制度の整備",
      "就業規則への規定整備",
      "ハローワークへの届出"
    ],
    "compatible_with": [
      "jinzai-ikusei-shien"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "定年延長",
      "再雇用",
      "シニア",
      "65歳",
      "70歳",
      "高齢者活躍",
      "継続雇用"
    ]
  },
  {
    "id": "gyomu-kaizen",
    "name": "業務改善助成金",
    "q14_key": "shooryoka",
    "max_amount": 6000000,
    "amount_note": "設備投資費の80%（上限600万円）。30円以上の賃上げが条件",
    "timing": "before_investment",
    "lead_time_months": 6,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "【2025年拡充】事業場内最低賃金が地域別最低賃金未満の事業所まで対象拡大。一般事業者の上限は450万円（特例事業者は最大600万円）",
    "description": "事業場内の最低賃金を30円以上引き上げることを条件に、生産性向上のための設備投資費用を助成する制度。2025年9月から対象事業所の条件が拡充され、より多くの企業が利用可能になりました。一般事業者の上限は450万円（特例事業者は600万円）、助成率は4/5〜3/4。賃上げと設備投資を同時に実現できる制度です。",
    "conditions": [
      "事業場内最低賃金が地域別最低賃金未満であること（2025年拡充）",
      "30円以上の賃金引上げ計画",
      "交付決定後に設備購入"
    ],
    "compatible_with": [
      "career-up-chingin-kaitei"
    ],
    "incompatible_with": [],
    "wage_required": true,
    "bonus_points": {},
    "q15_keywords": [
      "最低賃金",
      "設備投資",
      "賃上げ",
      "省力化",
      "ポスレジ",
      "加工機",
      "木工機械",
      "工作機械",
      "製造設備",
      "機械設備",
      "生産設備",
      "乾燥炉",
      "プレス機",
      "旋盤",
      "研削盤"
    ]
  },
  {
    "id": "hatarakikata-jikangai",
    "name": "働き方改革推進支援助成金 時間外労働等改善助成金コース",
    "q14_key": null,
    "max_amount": 1000000,
    "amount_note": "対象費用の3/4（上限100万円）。勤怠管理システム・専門家指導費等が対象",
    "timing": "before_investment",
    "lead_time_months": 3,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "中小企業のみ対象。事業実施計画の事前提出が必要",
    "description": "時間外労働の削減・有給休暇取得促進のための取り組み（勤怠管理システム導入・36協定整備・専門家によるコンサルティング等）に要した費用を補助する助成金。中小企業のみが対象で費用の3/4（上限100万円）を助成します。労働基準法違反リスクを下げつつシステム導入コストを抑えたい企業に最適です。",
    "conditions": [
      "時間外労働の上限設定（36協定の整備）",
      "実施計画書を取り組み前に提出",
      "取り組み後に成果報告書を提出"
    ],
    "compatible_with": [
      "hatarakikata-interval",
      "jinzai-ikusei-shien"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "勤怠",
      "36協定",
      "残業削減",
      "時間外",
      "勤怠システム",
      "労務管理",
      "長時間労働",
      "シフト"
    ]
  },
  {
    "id": "hatarakikata-interval",
    "name": "働き方改革推進支援助成金 勤務間インターバル導入コース",
    "q14_key": null,
    "max_amount": 1000000,
    "amount_note": "対象費用の3/4（上限100万円）。インターバル制度導入に係る費用が対象",
    "timing": "before_investment",
    "lead_time_months": 3,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "中小企業のみ対象。就業規則にインターバル規定を整備すること",
    "description": "勤務終了から次の勤務開始までに一定の休息時間（9時間以上が推奨）を確保する制度を就業規則に整備した際の費用を助成する制度。深夜労働・長時間シフトが多い飲食・宿泊・運輸等の業種に特に有効で、社員の健康維持・離職防止につながります。費用の3/4（上限100万円）が助成されます。",
    "conditions": [
      "就業規則に勤務間インターバル規定を整備（9時間以上推奨）",
      "実施計画書を事前提出"
    ],
    "compatible_with": [
      "hatarakikata-jikangai"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "インターバル",
      "休息時間",
      "深夜労働",
      "シフト改善",
      "夜勤"
    ]
  },
  {
    "id": "jinzai-kakuho-koyokanri",
    "name": "人材確保等支援助成金 雇用管理制度助成コース",
    "q14_key": null,
    "max_amount": 2870000,
    "amount_note": "【2026年度拡充】制度整備助成57万円＋離職率目標達成時230万円（合計最大287万円・中小企業）。設備購入費用が新たに助成対象に追加。計画認定は2025年4月1日から受付再開",
    "timing": "after_hire",
    "lead_time_months": 12,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "中小企業のみ対象。2026年度より最大287万円に拡充（旧57万円）。設備購入費用が新たに対象に追加。離職率改善目標の達成が最終支給の条件",
    "description": "評価制度・賃金制度・研修制度などの雇用管理改善に取り組み、一定期間内に離職率を目標値以下に下げた中小企業に支給される助成金。2026年度より大幅拡充され最大287万円（旧57万円）に。制度整備助成57万円＋離職率目標達成時230万円の2段階構成。設備購入費用も新たに対象に加わりました。制度を整えるだけでは不足で、実際の定着率改善が条件となります。",
    "conditions": [
      "評価・処遇制度や研修制度等の雇用管理制度を整備",
      "整備後1年間の離職率が目標値以下に低下",
      "制度整備前後の離職率を比較・報告"
    ],
    "compatible_with": [
      "career-up-seishainuka",
      "jinzai-ikusei-shien"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "離職率",
      "定着率",
      "人材定着",
      "評価制度",
      "人事制度",
      "採用強化",
      "従業員定着"
    ]
  },
  {
    "id": "sangyo-koyo-antei-shukko",
    "name": "産業雇用安定助成金（在籍型出向支援コース）",
    "q14_key": null,
    "max_amount": 12000,
    "amount_note": "出向中の賃金の最大9/10（中小企業）。1人1日最大12,000円",
    "timing": "before_hire",
    "lead_time_months": 2,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "経営上の理由で一時的に余剰が生じた労働者の在籍型出向が対象",
    "description": "業績悪化で余剰人員が生じた場合に、解雇せず他社への在籍型出向で雇用を維持した事業主（出向元）に出向中の賃金の最大9/10を助成する制度。出向先での経験やスキル習得が労働者のキャリアアップにもつながります。雇用調整助成金の休業と組み合わせて活用するケースも多いです。",
    "conditions": [
      "経営上の理由による余剰人員の発生",
      "出向先と三者（出向元・出向先・労働者）の合意",
      "出向期間中の雇用保険料は出向元が負担"
    ],
    "compatible_with": [
      "koyo-chosei"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "出向",
      "在籍出向",
      "人員調整",
      "余剰人員",
      "売上減少",
      "雇用維持"
    ]
  },
  {
    "id": "judokyuen-boushi",
    "name": "受動喫煙防止対策助成金",
    "q14_key": null,
    "max_amount": 1000000,
    "amount_note": "対象費用の2/3（飲食業等：上限100万円、その他業種：上限50万円）",
    "timing": "before_investment",
    "lead_time_months": 3,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "中小企業のみ対象。喫煙専用室・加熱式たばこ専用喫煙室の設置工事が対象",
    "description": "職場の受動喫煙防止のために喫煙専用室等の設置・改修工事を行った中小企業に費用の2/3（上限100万円）を助成する制度。飲食業・宿泊業など煙草対策が求められる業種に特に有効で、工事計画があれば申請自体はシンプルです。健康経営や従業員の職場環境改善にも寄与します。",
    "conditions": [
      "喫煙専用室等の設置工事（設備費・工事費が対象）",
      "工事前にハローワーク等へ申請が必要",
      "労働者の受動喫煙防止が目的であること"
    ],
    "compatible_with": [
      "hatarakikata-jikangai"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "喫煙室",
      "禁煙",
      "受動喫煙",
      "分煙",
      "喫煙ブース",
      "飲食店",
      "たばこ"
    ]
  },
  {
    "id": "koyo-chosei",
    "name": "雇用調整助成金",
    "q14_key": null,
    "max_amount": 8870,
    "amount_note": "休業手当の2/3（中小企業）、1人1日上限8,870円（コロナ特例の上限15,000円は終了済み。最低賃金引き上げに伴い年度ごとに改定）",
    "timing": "after_leave",
    "lead_time_months": 2,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "最近3ヶ月で売上・生産量が10%以上減少。コロナ禍の特例措置（上限1.5万円・助成率10/10等）は終了し通常制度に戻っている",
    "description": "売上・生産量が最近3ヶ月で10%以上減少した際に、解雇せず休業・教育訓練・在籍出向で雇用を維持した事業主に休業手当の2/3（中小企業）を助成する制度。コロナ禍の特例措置は終了し、現在の上限は1人1日8,870円（通常時）。景気悪化・自然災害等の緊急時の雇用維持に機能しますが、売上減少の要件確認が重要です。",
    "conditions": [
      "最近3ヶ月で売上・生産量が10%以上減少",
      "雇用保険適用事業所",
      "解雇せず休業・訓練で対応"
    ],
    "compatible_with": [],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "売上減少",
      "休業",
      "解雇回避",
      "雇用維持",
      "不況"
    ]
  },
  {
    "id": "it-security",
    "name": "デジタル化・AI導入補助金 セキュリティ対策推進枠",
    "q14_key": "it-donyu",
    "max_amount": 1500000,
    "amount_note": "対象費用の1/2（補助額5〜150万円）。2年間のサービス利用料が対象。デジタル化・AI導入補助金2026の一枠",
    "timing": "before_investment",
    "lead_time_months": 3,
    "difficulty": 1,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": false,
    "min_employees": 0,
    "note_eligibility": "「サイバーセキュリティお助け隊サービスリスト」登録サービスの導入が対象。デジタル化・AI導入補助金2026のセキュリティ枠として位置づけ",
    "description": "中小企業のサイバーセキュリティ対策強化のため、登録セキュリティサービス（UTM・EDR・セキュリティ監視サービス等）の導入費用の1/2（上限100万円）を補助する制度。不正アクセス・ランサムウェア被害が増加する中、製造業・医療・小売など幅広い業種でサイバー対策が急務となっています。IT導入補助金の一枠で、gBizIDプライムがあれば比較的シンプルに申請できます。",
    "conditions": [
      "サイバーセキュリティお助け隊サービスリスト登録サービスを導入すること",
      "gBizIDプライムアカウントの取得",
      "SECURITY ACTIONの宣言"
    ],
    "compatible_with": [
      "it-donyu",
      "hatarakikata-jikangai"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {
      "SECURITY ACTION": 1
    },
    "q15_keywords": [
      "セキュリティ",
      "サイバー",
      "不正アクセス",
      "ウイルス",
      "ランサムウェア",
      "UTM",
      "EDR",
      "情報漏洩",
      "個人情報"
    ]
  },
  {
    "id": "shogaisha-shisetsu-setchino",
    "name": "障害者作業施設設置等助成金",
    "q14_key": null,
    "max_amount": 4500000,
    "amount_note": "設置・整備費用の2/3（上限450万円/人）",
    "timing": "before_investment",
    "lead_time_months": 3,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "大企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "雇用している障害者が作業しやすくなる施設・設備の設置・整備費用を助成。JEED（高齢・障害・求職者雇用支援機構）が実施",
    "description": "雇用している障害者が、その障害特性に応じて円滑に就業できるよう、専用の作業施設・設備・車両等を設置・整備する際の費用（2/3・上限450万円/人）を助成する制度。工場・店舗のバリアフリー改修、専用作業台・補助装置の導入、送迎車両の整備などが対象。障害者雇用義務のある企業（常用労働者43.5人以上）はもちろん、積極的に障害者採用を進める企業にとっても有効な制度です。",
    "conditions": [
      "雇用している（またはこれから雇用する）障害者の作業環境改善が目的",
      "JEED（機構）への事前相談・申請が必要",
      "設置・整備後に報告書の提出"
    ],
    "compatible_with": [
      "trial-shogaisha",
      "tokutei-shushokukonnansha"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "バリアフリー",
      "障害者採用",
      "車いす",
      "車椅子",
      "スロープ",
      "障害者就労",
      "作業施設",
      "障害者雇用"
    ]
  },
  {
    "id": "sangyo-koyo-skillup",
    "name": "産業雇用安定助成金 スキルアップ支援コース",
    "q14_key": "jinzai",
    "max_amount": 1200000,
    "amount_note": "訓練期間中の賃金の最大9/10（中小企業）＋訓練費最大120万円/人",
    "timing": "before_training",
    "lead_time_months": 2,
    "difficulty": 2,
    "company_size": [
      "中小企業",
      "小規模事業者"
    ],
    "legal_form_eligible": [
      "法人",
      "個人事業主"
    ],
    "industry_restriction": null,
    "requires_employee_insurance": true,
    "min_employees": 1,
    "note_eligibility": "業況の変化等に対応するため、在籍型出向でスキルアップを図る場合に活用。出向期間中も雇用関係は出向元と継続",
    "description": "業況悪化等で業務量が落ちた際に、解雇せず他社（出向先）でDX・IoT・新加工技術等のスキルを習得させ自社に還元する助成金。訓練中の賃金の最大9/10＋訓練費最大120万円/人を中小企業に助成します。例えば製造業が繁忙期の工場に出向させて溶接・NCプログラミング等の最新技術を学ばせるケースで有効。雇用調整助成金（休業）との組み合わせも可能で、厳しい時期を乗り越えながら人材レベルを上げる戦略的な制度です。",
    "conditions": [
      "業況悪化・需要変動等による一時的な業務量の減少",
      "出向先で技能習得・スキルアップを目的とした訓練の実施",
      "訓練終了後に自社への復帰を前提とすること"
    ],
    "compatible_with": [
      "koyo-chosei",
      "sangyo-koyo-antei-shukko",
      "jinzai-ikusei-shien"
    ],
    "incompatible_with": [],
    "wage_required": false,
    "bonus_points": {},
    "q15_keywords": [
      "技能習得",
      "スキルアップ",
      "出向訓練",
      "人材育成",
      "技術習得",
      "職業訓練",
      "DX研修",
      "IoT",
      "デジタル",
      "NC旋盤",
      "溶接",
      "CAD"
    ]
  }
];
