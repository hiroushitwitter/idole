let idol_list = new Array(
'あいかわちなつ',
'あいのなぎさ',
'あいはらゆきの',
'あいばゆみ',
'あかぎみりあ',
'あかにしえりか',
'あさのふうか',
'あさりななみ',
'あなすたしあ',
'あべなな',
'あやせほのか',
'あらきひな',
'ありうらかんな',
'あんざいみやこ',
'いがらしきょうこ',
'いけぶくろあきは',
'いじゅういんめぐみ',
'いちのせしき',
'いちはらにな',
'いぶさんたくろーす',
'いまいかな',
'いむらせつな',
'うえだすずほ',
'うじいえむつみ',
'うめきおとは',
'えがみつばき',
'えとうみさき',
'えびはらなほ',
'おいかわしずく',
'おおいしいずみ',
'おおたゆう',
'おおつきゆい',
'おおにしゆりこ',
'おおぬまくるみ',
'おおはらみちる',
'おかざきやすは',
'おがたちえり',
'おくやまさおり',
'おとくらゆうき',
'かたぎりさなえ',
'かみじょうはるな',
'かみやなお',
'かわしまみずき',
'かんざきらんこ',
'きしべあやか',
'きたがわまひろ',
'きたひなこ',
'きたみゆず',
'きばまなみ',
'きむらなつき',
'きゃしーぐらはむ',
'きりのあや',
'きりゅうつかさ',
'くさかべわかば',
'くどうしのぶ',
'くらりす',
'くりはらねね',
'くろかわちあき',
'くろさきちとせ',
'けいと',
'こがこはる',
'こしみずさちこ',
'こせきれいな',
'こばやかわさえ',
'こひなたみほ',
'こまついぶき',
'こむろちなみ',
'さいおんじことか',
'さいとうようこ',
'さえじまきよみ',
'さかきばらさとみ',
'さぎさわふみか',
'さくままゆ',
'さくらいももか',
'ささきちえ',
'さじょうゆきみ',
'さとうしん',
'さわだまりな',
'ざいぜんときこ',
'しいなのりこ',
'しおみしゅうこ',
'しのはられい',
'しぶやりん',
'しまむらうづき',
'しゅとうあおい',
'しらぎくほたる',
'しらさかこうめ',
'しらさきちよ',
'じょうがさきみか',
'じょうがさきりか',
'すぎさかうみ',
'すずみやせいか',
'すなづかあきら',
'せきひろみ',
'せなしおり',
'せんざきえま',
'そうまなつみ',
'たかがきかえで',
'たかはしれいこ',
'たかふじかこ',
'たかみねのあ',
'たかもりあいこ',
'ただりいな',
'たちばなありす',
'つきみやみやび',
'つじのあかり',
'つちやあこ',
'とうごうあい',
'とときあいり',
'どうみょうじかりん',
'なかのゆか',
'ながとみはすみ',
'なたーりあ',
'なみきめいこ',
'なるみやゆめ',
'なんじょうひかる',
'なんばえみ',
'にしかわほなみ',
'にしじまかい',
'にったみなみ',
'にのみやあすか',
'にわひとみ',
'ののむらそら',
'はっとりとうこ',
'はまかわあゆな',
'はまぐちあやめ',
'はやさかみれい',
'はやみかなで',
'はらだみよ',
'ひいらぎしの',
'ひさかわなぎ',
'ひさかわはやて',
'ひのあかね',
'ひめかわゆき',
'ひょうどうれな',
'ふくやままい',
'ふじいとも',
'ふじもとりな',
'ふじわらはじめ',
'ふたばあんず',
'ふるさわよりこ',
'へれん',
'ほうじょうかれん',
'ほししょうこ',
'ほりゆうこ',
'ほんだみお',
'まえかわみく',
'まきはらしほ',
'まつおちづる',
'まつながりょう',
'まつばらさや',
'まつもとさりな',
'まつやまくみこ',
'まとばりさ',
'まなかみさと',
'まなべいつき',
'みずきせいら',
'みずのみどり',
'みずもとゆかり',
'みふねみゆ',
'みむらかなこ',
'みやもとふれでりか',
'みよしさな',
'むかいたくみ',
'むなかたあつみ',
'むらかみともえ',
'むらまつさくら',
'めありーこくらん',
'もちだありさ',
'もちづきひじり',
'ももいあずき',
'もりくぼのの',
'もろぼしきらり',
'やおふぇいふぇい',
'やがみまきの',
'やぐちみう',
'やなぎきよら',
'やなせみゆき',
'やまとあき',
'ゆうきはる',
'ゆさこずえ',
'ゆめみりあむ',
'よこやまちか',
'よしおかさき',
'よりたよしの',
'らいら',
'りゅうざきかおる',
'わかばやしともか',
'わきやまたまみ',
'わくいるみ'
)
let idol_list_temp=[];

var random = Math.floor( Math.random() * idol_list.length );
let idol_anser;
let win_count=0;
let idol_ans_max;
let idol_ans_min;
let ans_count = 0;
let current_score = 0;
let high_score = 0;
let max_ans ;

function func_wordle_check(){
	let user_anser_temp1 = document.getElementById('wordle_word').value;
	let user_anser_temp2 = [];
	let user_anser;
let ans_word = [];
let ans_color = [];

let flag = 0 ;
	for(i=0;i<user_anser_temp1.length;i++){
		if(user_anser_temp1[i]=="ゔ")
			user_anser_temp2[i]="ぶ";
		else
			user_anser_temp2[i]=user_anser_temp1[i];
	}
	user_anser =user_anser_temp2.join('');
	console.log(user_anser);
	for(i=0;i<idol_list.length;i++){
		if(user_anser == idol_list[i])
			flag = 1;
	}

	if(ans_count == max_ans) ;
	else if(ans_count == max_ans+1){
		func_worlde_continue();
	}

	else if(flag != 0){
		document.getElementById("arert_comment").textContent   = "　";
		if(user_anser=="せきひろみ" && idol_anser !="せきひろみ" && ans_count == 0){
			let seki_runrun = Math.floor( Math.random() * 5 );
			switch(Number(seki_runrun)){
				case 0:document.getElementById("arert_comment").textContent   = "裕美「私じゃなきゃ見逃しちゃうよ？初手、関裕美」（　´ー｀）";
				break;
				case 1:document.getElementById("arert_comment").textContent   = "千鶴（初手に選んでもらえて「うらやましいなぁ…」( ﾟдﾟ)ハッ！";
				break;
				case 2:document.getElementById("arert_comment").textContent   = "ほたる「プロデューサーさんにお茶を汲んで…きませんでした！」⊂(・∀・)⊃";
				break;
				case 3:document.getElementById("arert_comment").textContent   = "泰葉「関裕美ですっ！…裕美ちゃんの演技ですがなにか」(￢＿￢)ｼﾞｰ";
				break;
				case 4:document.getElementById("arert_comment").textContent   = "乃々「…もりくぼのことも、忘れないでほしいんですけど…」ｲｼﾞｲｼﾞ( ´･ω･`)σ";
				break;
			}
		}		
		ans_count++;
		for(var i= 0; i < user_anser.length ; i++){
			ans_color[i] =  '';
			for(var j= 0; j < idol_anser.length ; j++){
				if(user_anser[i] == idol_anser[j]){
					if(i==j){
						document.getElementById(user_anser[i]).style.backgroundColor = 'green';
					}
					else if(document.getElementById(user_anser[i]).style.backgroundColor != 'green'){
						document.getElementById(user_anser[i]).style.backgroundColor = 'orange';
					}
					else ;
				}
				else if(document.getElementById(user_anser[i]).style.backgroundColor == 'green' || document.getElementById(user_anser[i]).style.backgroundColor == 'orange') ;
				else{
					document.getElementById(user_anser[i]).style.backgroundColor = 'gray';
				}

				if(user_anser[i] == idol_anser[j]){
					if(i==j){
						ans_color[i] =  'green';
					}
					else if(ans_color[i] != 'green'){
						ans_color[i] = 'orange';
					}
					else ;
				}
				else if(ans_color[i] == 'green' || ans_color[i] == 'orange') ;
				else
					ans_color[i] = 'gray';
			}
		}
		for(var i= 0; i < user_anser.length ; i++){
			var id_ans = "ans"+ans_count+"_"+(i+1);
			document.getElementById(id_ans).innerText  = user_anser[i];
			document.getElementById(id_ans).style.backgroundColor = ans_color[i];
		}
		if(user_anser == idol_anser){
			win_count++;
			document.getElementById("arert_comment").textContent   = "ちひろ「正解です！プロデューサーさんは現在"+win_count+"連勝中です♪」";
			document.getElementById('wordle_word').value="";
			document.getElementById('wordle_check').value = "続けて挑戦";
			let x =2* (ans_count)/max_ans;
			current_score += idol_list_temp.length*(11-max_ans)*Math.ceil(10*(1/Math.sqrt(0.008*Math.PI))*Math.exp(-(x*x)/2));
			
			document.getElementById("score").textContent   = current_score.toLocaleString();
			if(Number(current_score) > Number(high_score))
				high_score = current_score;
				document.getElementById("high_score").textContent = high_score.toLocaleString();
			ans_count = max_ans+1;
		document.getElementById("twitter_send").innerHTML ="<a href=\"javascript:twitText()\">結果をツイートする</a>";

		}
		else if(ans_count < max_ans){
		document.getElementById('wordle_word').focus();
		document.getElementById('wordle_word').value="";
		}
	}
	else if(user_anser == "せんかわちひろ"){
		document.getElementById("arert_comment").textContent   = "ちひろ「エイプリルフールですよね♪懐かしいです♪」";
		document.getElementById('wordle_word').focus();
	}
	else if(user_anser == "みしろせんむ"){
		document.getElementById("arert_comment").textContent   = "美城専務「専務の美城だ。私がアイドルだと？冗談も程々にしたまえ (〃▽〃)ﾎﾟｯ」";
		document.getElementById('wordle_word').focus();
	}
	else if(user_anser == "みしろじょうむ"){
		document.getElementById("arert_comment").textContent   = "美城専務「”専務”の美城だ。」";
		document.getElementById('wordle_word').focus();
	}
	else if(user_anser == ""){
		document.getElementById("arert_comment").textContent   = "ちひろ「アイドルの名前を入力してください♪」";
		document.getElementById('wordle_word').focus();
	}
	else{
		document.getElementById("arert_comment").textContent   = "ちひろ「その名前のアイドルは事務所にいませんよ？」";
		document.getElementById('wordle_word').focus();
	}
	if(ans_count == max_ans){
		if(win_count == 0)
			document.getElementById("arert_comment").textContent   = "ちひろ「正解は『"+idol_anser+"』ちゃんでした！";
		else
			document.getElementById("arert_comment").textContent   = "ちひろ「正解は『"+idol_anser+"』ちゃんでした！"+win_count+"連勝でしたね！」";
		document.getElementById('wordle_word').value="";
		document.getElementById('wordle_check').disabled = true;
		document.getElementById("twitter_send").innerHTML ="<a href=\"javascript:twitText()\">結果をツイートする</a>";

	}
}

function func_making_idol_anser(){
	let i;
	let j=0;
	idol_list_temp =[];
	for(i=0;i<idol_list.length;i++){
		if(idol_list[i].length >= idol_ans_min && idol_list[i].length <= idol_ans_max){
			idol_list_temp[j] = idol_list[i];
			j++;
		}
	}
	let random = Math.floor( Math.random() * idol_list_temp.length );
	idol_anser = idol_list_temp[random];
}

function func_worlde_continue(){
	func_making_idol_anser();

	var st_list = document.getElementsByClassName('hyou');
	for(var i =0 ;i < st_list.length ; i++)
		st_list[i].childNodes[0].style.backgroundColor = '';
	for(i= 1; i <=  max_ans  ; i++){
		for(j= 1; j < 10 ; j++){
			var id_ans = "ans"+i+"_"+j;
			document.getElementById(id_ans).innerText  ="　";
			document.getElementById(id_ans).style.backgroundColor = '';
		}
	}
	document.getElementById('wordle_word').focus();
	document.getElementById("arert_comment").innerText  ="　";
	ans_count = 0;
	document.getElementById('wordle_word').value="";
	document.getElementById('wordle_check').value = "チェック";
}

function func_wordle_reset(){
	func_making_idol_anser();

	var st_list = document.getElementsByClassName('hyou');
	for(var i =0 ;i < st_list.length ; i++)
		st_list[i].childNodes[0].style.backgroundColor = '';
	for(i= 1; i <=  max_ans  ; i++){
		for(j= 1; j < 10 ; j++){
			var id_ans = "ans"+i+"_"+j;
			document.getElementById(id_ans).innerText  ="　";
			document.getElementById(id_ans).style.backgroundColor = '';
		}
	}
	document.getElementById('wordle_word').focus();
	document.getElementById("arert_comment").innerText  ="　";
	ans_count = 0;
	document.getElementById('wordle_word').value="";
	document.getElementById("arert_comment").textContent   = "ちひろ「スタートです！プロデューサーさん、頑張ってください！」";
	document.getElementById('wordle_check').disabled = false;
	current_score = Number(0);
	document.getElementById("score").textContent   = current_score.toLocaleString();
	document.getElementById('wordle_check').value = "チェック";
	win_count = 0 ;
}

function func_check_idole_value_min(){
	let idole_max_value = Number(document.getElementById('idol_max_num').value);
	let idole_min_value = Number(document.getElementById('idol_min_num').value);
	let idole_min_value_min = Number(document.getElementById('idol_min_num').min);
	let idole_min_value_max = Number(document.getElementById('idol_min_num').max);
	
	if(idole_min_value > idole_max_value){
		document.getElementById('idol_min_num').value = idole_max_value;
		idol_ans_min = idole_max_value;
	}
	else if(idole_min_value > idole_min_value_max){
		document.getElementById('idol_min_num').value = idole_min_value_max;
		idol_ans_min = idole_min_value_max;
	}
	else if(idole_min_value < idole_min_value_min){
		document.getElementById('idol_min_num').value = idole_min_value_min ;
		idol_ans_min = idole_min_value_min;
	}
	else {
		idol_ans_min = idole_min_value;
	}
	func_making_table();
	func_wordle_reset();
}

function func_check_idole_value_max(){
	let idole_min_value = Number(document.getElementById('idol_min_num').value);
	let idole_max_value = Number(document.getElementById('idol_max_num').value);
	let idole_max_value_min = Number(document.getElementById('idol_max_num').min);
	let idole_max_value_max = Number(document.getElementById('idol_max_num').max);

	if(idole_max_value < idole_min_value){
		document.getElementById('idol_max_num').value = idole_min_value;
		idol_ans_max = idole_min_value;
	}
	else if(idole_max_value > idole_max_value_max){
		document.getElementById('idol_max_num').value = idole_max_value_max;
		idol_ans_max = idole_max_value_max;
	}
	else if(idole_max_value < idole_max_value_min){
		document.getElementById('idol_max_num').value = idole_min_value_min;
		idol_ans_max = idole_max_value_min;
	}
	else{
		idol_ans_max = idole_max_value;
	}
	func_making_table();
	func_wordle_reset();
	
}

function func_making_table(){
	let before_ans_table_row_num = document.getElementById('ans_table').rows.length;
	for(i=0;i<before_ans_table_row_num;i++)
		document.getElementById('ans_table').deleteRow(-1);
	for(i=0;i<max_ans;i++){
		document.getElementById('ans_table').insertRow(-1); 
		for(j=0;j<10;j++)
			document.getElementById('ans_table').rows[i].insertCell(j);
	}
	for(i=0;i<max_ans;i++){
		for(j=0;j<10;j++){
			if(j==0){
				document.getElementById('ans_table').rows[i].cells[j].innerHTML= i+1+".";
				document.getElementById('ans_table').rows[i].cells[j].style.borderWidth="0";
			}
			else{
				document.getElementById('ans_table').rows[i].cells[j].innerHTML= "　";
				document.getElementById('ans_table').rows[i].cells[j].id = "ans"+(i+1)+"_"+j;
				document.getElementById('ans_table').rows[i].cells[j].style.borderRadius = "5px";
				document.getElementById('ans_table').rows[i].cells[j].style.borderCollapse = "separate";
			}
		}
	}
}

function func_check_num(){
	let input_value = Number(document.getElementById('ans_num').value);
	let max_value = Number(document.getElementById('ans_num').max);
	let min_value = Number(document.getElementById('ans_num').min);
	idol_ans_min = Number(document.getElementById('idol_min_num').value);
	idol_ans_max = Number(document.getElementById('idol_max_num').value);

	if(input_value > max_value){
		document.getElementById('ans_num').value = max_value;
		max_ans = max_value;
	}
	else if(input_value < min_value){
		document.getElementById('ans_num').value = min_value ;
		max_ans = min_value;
	}
	else{
		max_ans = input_value;
	}
	func_making_table();
	func_wordle_reset();
}
function func_full_idol_select(){
	document.getElementById('idol_min_num').value = 3;
	document.getElementById('idol_max_num').value = 9;
	func_making_table();
	func_wordle_reset();

}


function twitText() {
	let s;
	let url;
	s = "Idolem@ster デレステ(デレステWorlde)のプレイ結果、 "+win_count.toLocaleString()+" 連続正解、最高得点は "+high_score.toLocaleString()+" 点でした！";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}
function PageLoad(evt) {
	func_check_num();
	document.getElementById('wordle_check').addEventListener('click', func_wordle_check);
	document.getElementById('ans_num').addEventListener('change', func_check_num);
	document.getElementById('idol_min_num').addEventListener('change', func_check_idole_value_min);
	document.getElementById('idol_max_num').addEventListener('change', func_check_idole_value_max);
	document.getElementById('wordle_reset').addEventListener('click', func_wordle_reset);
	document.getElementById('full_idol').addEventListener('click', func_full_idol_select);
}
