export default function Script() {
    const array = [
      "CECACAIADUCQKCRJGFWHJJYBAEBQADQBAQAAEBABAIAAOAQBAAERKAIDAIBAEBIKIV4AGAQFBKIQD2YBAEAQICABAEABU",
      "CEBQSBIKA4UTCRKJNR2KGANGAEBACAYCFAAQEAYDAIAQCAYMAECQVJYBAA",
      "CECQCBIKHICACAQLBQZDSAYCAIBQKCQBAECCIAIFAIKQEAQDAICRIAQCAIEASAICAEBCYMI", "CECQQAQGBMKCAIJCFU5DYAIDAYEACBIGAEAQIBQKAEBACAQBAEBAMJQBAIBAMAQS", "CECAGAIDAIGCQAIBAQEAOBIKA4YUK5FDAGTADJYBAEBAGAYBAEBAGBACAEAQGNYBAUFGA"
    ];
  
    var rnd = array[Math.floor(Math.random() * array.length)];
    document.getElementById("tb").value = rnd;
  }