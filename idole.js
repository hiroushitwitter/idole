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
let idol_anser;
let win_count=0;
let ans_count = 0;
let current_score = 0;
function func_wordle_check(){
	let user_anser = document.getElementById('wordle_word').value;

let ans_word = [];
let ans_color = [];
let max_ans = Number(document.getElementById('ans_num').value);
let flag = 0 ;
	for(i=0;i<idol_list.length;i++){
		if(user_anser == idol_list[i])
			flag = 1;
	}
	if(ans_count == max_ans) ;
	else if(ans_count == max_ans+1){
		func_worlde_continue();
	}
	else if(user_anser.length < 5){
		document.getElementById("arert_comment").textContent   = "ちひろ「5文字のアイドルの名前を入力してください♪」";
		document.getElementById('wordle_word').focus();
	}
	else if(flag != 0){
		if(user_anser=="せきひろみ" && idol_anser !="せきひろみ" && ans_count == 0){
			document.getElementById("arert_comment").textContent   = "裕美「初手関裕美、私じゃきゃみのがしちゃうよ？」";
		}		
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
			current_score += Math.ceil(10000*(1/Math.sqrt(0.008*Math.PI))*Math.exp(-(x*x)/2));
			
			document.getElementById("score").textContent   = current_score;
			ans_count = max_ans+1;

		}
		else if(ans_count < max_ans){
		document.getElementById('wordle_word').focus();
		document.getElementById('wordle_word').value="";
		}
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
	}
}
function func_worlde_continue(){
var random = Math.floor( Math.random() * idol_list.length );
let max_ans = Number(document.getElementById('ans_num').value);
	idol_anser = idol_list[random]
	var st_list = document.getElementsByClassName('hyou');
	for(var i =0 ;i < st_list.length ; i++)
		st_list[i].childNodes[0].style.backgroundColor = '';
	for(i= 1; i <=  max_ans  ; i++){
		for(j= 1; j < 6 ; j++){
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
var random = Math.floor( Math.random() * idol_list.length );
let max_ans = Number(document.getElementById('ans_num').value);
	idol_anser = idol_list[random]
	var st_list = document.getElementsByClassName('hyou');
	for(var i =0 ;i < st_list.length ; i++)
		st_list[i].childNodes[0].style.backgroundColor = '';
	for(i= 1; i <=  max_ans  ; i++){
		for(j= 1; j < 6 ; j++){
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
	current_score = 0;
	document.getElementById("score").textContent   = current_score;
	document.getElementById('wordle_check').value = "チェック";
	win_count = 0 ;
}

function func_check_num(){
	let input_value = Number(document.getElementById('ans_num').value);
	let max_value = Number(document.getElementById('ans_num').max);
	let min_value = Number(document.getElementById('ans_num').min);
	
	if(input_value > max_value){
		document.getElementById('ans_num').value = max_value;
	}
	else if(input_value < min_value){
		document.getElementById('ans_num').value = min_value ;
	}
		
	else{
		let before_ans_table_row_num = document.getElementById('ans_table').rows.length;
		for(i=0;i<before_ans_table_row_num;i++)
			document.getElementById('ans_table').deleteRow(-1);
		for(i=0;i<document.getElementById('ans_num').value;i++){
			document.getElementById('ans_table').insertRow(-1); 
			for(j=0;j<6;j++)
				document.getElementById('ans_table').rows[i].insertCell(j);
		}
		for(i=0;i<document.getElementById('ans_num').value;i++){
			for(j=0;j<6;j++){
				if(j==0){
					document.getElementById('ans_table').rows[i].cells[j].innerHTML= i+1+".";
					document.getElementById('ans_table').rows[i].cells[j].style.borderWidth="0";
				}
				else{
					document.getElementById('ans_table').rows[i].cells[j].innerHTML= "　";
					document.getElementById('ans_table').rows[i].cells[j].id = "ans"+(i+1)+"_"+j;11
				}
			}
		}
	}
	func_wordle_reset();
}
function jpn(tbox){
tbox.style.imeMode="active";
}
function PageLoad(evt) {
	func_check_num();
	document.getElementById('wordle_check').addEventListener('click', func_wordle_check);
	document.getElementById('ans_num').addEventListener('change', func_check_num);
	document.getElementById('wordle_reset').addEventListener('click', func_wordle_reset);
}
