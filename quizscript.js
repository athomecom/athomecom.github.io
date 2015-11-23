var numQues = 5;
var numChoi = 3;

var answers = new Array(49);
var questions = new Array(49);

answers[0] = ["Customer service", "After service", "Extra service", "Special help"];
answers[1] = ["Toll free number", "Free call", "Dial free number", "No cost call"];
answers[2] = ["Key chain", "Key holder", "Key lead", "Ring lead"];
answers[3] = ["Bus stop", "Bus station", "Bus area", "Area of buses"];
answers[4] = ["Windshield", "Front glass", "Glass in front", "Large-side glass"];
answers[5] = ["Pay raise", "Price up salary", "Salary up", "Money bonus"];
answers[6] = ["Eyeliner", "Eye mark", "Over eye", "Extra lids"];
answers[7] = ["Panty hose", "Leggings", "Long socks", "Long stockings"];
answers[8] = ["Budget hotel", "Business Hotel", "Price-saving hotel", "Cost-cut Hotel"];
answers[9] = ["Cost cutting", "Cost down", "Money efficiency saving", "One-touch savings"];
answers[10] = ["Game software", "Program game", "Game cartridge", "Cassette"];
answers[11] = ["Prime time", "Gold time", "Top-time", "Spotlight"];
answers[12] = ["Cell phone", "Handy phone", "Walk-and-talk", "Walkie talkie"];
answers[13] = ["Steering wheel", "Handle", "Turning wheel", "Steering handle"];
answers[14] = ["Stove", "Gas range", "Fire place", "Burners"];
answers[15] = ["Air Conditioner", "Cooler", "Fan", "Air blower"];
answers[16] = ["Outlet/socket", "Consent", "Power plug", "Three-prong hole"];
answers[17] = ["Side job", "Extra job", "Double business", "Back-alley job"];
answers[18] = ["Salaried office worker", "Salary man", "Office man", "White collar"];
answers[19] = ["Restroom", "Sink room", "Showering room", "Side room"];
answers[20] = ["Wooden floor", "Special mat", "Thin flooring", "Fake wood"];
answers[21] = ["Mechanical pencil", "Sharp pen", "Click pencil", "Thin pencil"];
answers[22] = ["Ball point pen", "Top-cap pen", "Ink point pen", "Interesting pencil"];
answers[23] = ["One on one", "Man to one", "Watch protection", "Match person"];
answers[24] = ["Gas station", "Gas stand", "Stop gas place", "No gas here"];
answers[25] = ["Bus stop", "Bus teh", "Bus station", "Bus port"];
answers[26] = ["Wake-up call", "Morning ring", "Morning call", "Early bird call"];
answers[27] = ["Breakfast special", "Morning service", "Early special", "Best meal"];
answers[28] = ["Oven toaster", "Bread toaster", "Oven fryer", "Stove"];
answers[29] = ["Personal computer", "Desk computer", "Portable computer", "Top-notch computer"];
answers[30] = ["Laptop", "Note computer", "Portable computer", "Mini computer"];
answers[31] = ["Stapler", "Hochikiss", "Click puncher", "Thin-click puncher"];
answers[32] = ["Rear view mirror", "Back mirror", "Safety mirror", "Looking glass"];
answers[33] = ["Weak coffee", "Thin coffee", "Bland coffee", "Domestic coffee"];
answers[34] = ["Second hand store", "Recycle shop", "Low-cost store", "Savings store"];
answers[35] = ["Velcro", "Magic tape", "Double stick tape", "Black sticker"];
answers[36] = ["Bathroom scale", "Health meter", "Health check scale", "Overweight check"];
answers[37] = ["Questionnaire", "Anket", "Question form", "Form for questions"];
answers[38] = ["Stroller", "Baby car", "Safety seat", "Baby walker"];
answers[39] = ["Garbage can", "Dumpster", "Dust box", "C-box"];
answers[40] = ["Photographer", "Picture man", "Velcroman", "Photoboy"];
answers[41] = ["Paper towel", "Kitchen paper", "Absorbant towel", "Low-cost paper"];
answers[42] = ["Caller ID", "Number display", "Safety check number", "ID me please"];
answers[43] = ["Cream puff", "Shuu puff", "Cream sweet bread", "Stuffed puff"];
answers[44] = ["Shovel", "Scope", "Scooper", "Flat-head scoop"];
answers[45] = ["Slim", "Smart", "Intelligent", "Quick"];
answers[46] = ["Playing cards", "Trump", "Casino cards", "Quick number cards"];
answers[47] = ["Dress shirt", "Y-shirt", "Tuxedo shirt", "Nice shirt"];
answers[48] = ["Pants", "Long shorts", "Zoobons", "Long leggings"];


questions[0] = "アフターサービス";
questions[1] = "フリーダイヤル";
questions[2] = "キーホルダー";
questions[3] = "バス停";
questions[4] = "フロントグラス";
questions[5] = "サラリーアップ";
questions[6] = "アイライン";
questions[7] = "パンティストッキング";
questions[8] = "ビジネスホテル";
questions[9] = "コストダウン";
questions[10] = "ゲームソフト";
questions[11] = "ゴールデンタイム";
questions[12] = "ハンディフォン";
questions[13] = "ハンドル";
questions[14] = "ガスレンジ";
questions[15] = "クーラー";
questions[16] = "コンセント";
questions[17] = "サイドビジネス";
questions[18] = "サラリーマン";
questions[19] = "トイレ";
questions[20] = "フローリング";
questions[21] = "シャープペン";
questions[22] = "ボールペン";
questions[23] = "マンツーマン";
questions[24] = "ガソリンスタンド";
questions[25] = "バス停";
questions[26] = "モーニングコール";
questions[27] = "モーニングサービス";
questions[28] = "トースター";
questions[29] = "パソコン";
questions[30] = "ノートパソコン";
questions[31] = "ホッチキス";
questions[32] = "バックミラー";
questions[33] = "アメリカンコーヒー";
questions[34] = "リサイクルショップ";
questions[35] = "マジックテープ";
questions[36] = "ヘルスメータ";
questions[37] = "アンケート";
questions[38] = "ベービーカー";
questions[39] = "ダストボックス";
questions[40] = "カメラマン";
questions[41] = "キッチンペーパー";
questions[42] = "ナンバーディスプレイ";
questions[43] = "シュークリーム";
questions[44] = "スコップ";
questions[45] = "スマート";
questions[46] = "トランプ";
questions[47] = "Yシャツ";
questions[48] = "ズボン";

function changeQuestions() {
    var randomNum = Math.floor(Math.random() * 49);
    
//    document.getElementById("q1_1").innerHTML = answers[randomNum];
    document.getElementById("q1_1").innerHTML = answers[0][1];
    document.getElementById("q1").innerHTML = questions[randomNum];
}

$(document).ready(function () {
    changeQuestions();
});



function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }

  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}