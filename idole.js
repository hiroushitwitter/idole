<script type="text/javascript"> 
let idol_list = new Array(	'あいばゆみ',
							'あらきひな',
							'いまいかな',
							'おおたゆう',
							'かみやなお',
							'きたひなこ',
							'きたみゆず',
							'きばまなみ',
							'きりのあや',
							'こがこはる',
							'さくままゆ',
							'ささきちえ',
							'さとうしん',
							'しぶやりん',
							'せきひろみ',
							'せなしおり',
							'ただりいな',
							'つちやあこ',
							'なかのゆか',
							'なたーりあ',
							'なんばえみ',
							'にわひとみ',
							'はらだみよ',
							'ひのあかね',
							'ふじいとも',
							'ほりゆうこ',
							'ほんだみお',
							'まとばりさ',
							'みふねみゆ',
							'みよしさな',
							'やぐちみう',
							'やまとあき',
							'ゆうきはる',
							'ゆさこずえ',
							'わくいるみ'
							)
var random = Math.floor( Math.random() * idol_list.length );
let idol_anser = idol_list[random]
let ans_count = 0;
let max_ans_count = 5;
function func_wordle_check(){
	let user_anser = document.getElementById('wordle_word').value;

let ans_word = [];
let ans_color = [];
let flag = 0 ;
	for(i=0;i<idol_list.length;i++){
		if(user_anser == idol_list[i])
			flag = 1;
	}
	if(ans_count > max_ans_count-1) ;
	else if(user_anser.length < max_ans_count){
		document.getElementById("arert_comment").textContent   = "ちひろ「5文字のアイドルの名前を入力してください♪」";
		document.getElementById('wordle_word').focus();
	}
	else if(flag != 0){
		document.getElementById("arert_comment").textContent   = "　";
		ans_count++;
		for(var i= 0; i < user_anser.length ; i++){
			ans_color[i] =  '';
			for(var j= 0; j < user_anser.length ; j++){
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
			var id_ans = "ans"+ans_count+(i+1);
			document.getElementById(id_ans).innerText  = user_anser[i];
			document.getElementById(id_ans).style.backgroundColor = ans_color[i];
		}
		if(user_anser == idol_anser){
			document.getElementById("arert_comment").textContent   = "ちひろ「正解です！報酬はスタージュエルを購入できる権利です♪」";
			ans_count = max_ans_count+1;
			document.getElementById('wordle_word').value="";
		document.getElementById('wordle_check').disabled = true;
		}
		else if(ans_count < max_ans_count){
		document.getElementById('wordle_word').focus();
		document.getElementById('wordle_word').value="";
		}
	}
	else{
		document.getElementById("arert_comment").textContent   = "ちひろ「その名前のアイドルは事務所にいませんよ？」";
		document.getElementById('wordle_word').focus();
	}
	if(ans_count == max_ans_count){
		document.getElementById("arert_comment").textContent   = "ちひろ「正解は『"+idol_anser+"』ちゃんでした！」";
		document.getElementById('wordle_word').value="";
		document.getElementById('wordle_check').disabled = true;
		ans_count++;
	}
}

function func_wordle_reset(){
var random = Math.floor( Math.random() * idol_list.length );
	idol_anser = idol_list[random]
	var st_list = document.getElementsByClassName('hyou');
	for(var i =0 ;i < st_list.length ; i++)
		st_list[i].childNodes[0].style.backgroundColor = '';
	for(var j= 1; j < max_ans_count+1 ; j++){
		for(var i= 1; i < max_ans_count+1 ; i++){
			var id_ans = "ans"+j+i;
			document.getElementById(id_ans).innerText  ="　";
			document.getElementById(id_ans).style.backgroundColor = '';

		}
	}
	document.getElementById("arert_comment").innerText  ="　";
	ans_count = 0;
	document.getElementById('wordle_word').focus();
	document.getElementById('wordle_word').value="";
	document.getElementById('wordle_check').disabled = false;
	document.getElementById("arert_comment").textContent   = "ちひろ「プロデューサーさん、頑張ってください！」";
	
	


}
function PageLoad(evt) {
	document.getElementById('wordle_check').addEventListener('click', func_wordle_check);
	document.getElementById('wordle_reset').addEventListener('click', func_wordle_reset);
}
</script>
