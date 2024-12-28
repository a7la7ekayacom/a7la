
﻿/*
---
By Midosoft / a7la7ekaya.com
...
*/

	
function termsFunction() {
	  		box = new LightFace({ 
	 			title: 'أهلا وسهلا بك في احلى حكاية.', 
				width: 700,
				height: 140,
	  			content: '<p  align="center" style="line-height:20px;font-size:12px;">مرحبا بك معنا , يساعدك احلى حكاية على التواصل و التشارك مع الآخرين , كما يقدم لك أفضل المنتجات و البرمجيات ... مجانا .<br />أنت الآن تتصفح الموقع بصفتك ضيف ما يعطيك صلحيات محدودة جدا ..<br />من خلال التسجيل ستكون لديك الحرية تصفح الأقسام المخفية و التواصل مع الأعضاء و طرح أفكارك <br /><a href="register">التسجيل</a> سريع ، بسيط و مجاني ، انضم إلينا ! بعد اتمامك قرآءة <a href="rules.php">القوانين</a> و الموافقة على مضمونها ..<br /><br /><span style="font-family: Arial; font-weight: bold; font-size: 15px; color: red;">إذا كان لديك أي مشاكل في عرض أو استخدام هذا الموقع ، فإننا نوصي بتحديث متصفحك إلى الإصدار الأخير من <a href="http://www.mozilla.com/firefox/" rel="nofollow" target="_new" >فايرفوكس</a></span> .</p>',
	 			buttons: [
				{ title: 'اغلاق', event: function() { this.close(); }, color: 'green' }
				]
	 		});
	 		box.open();
	 	}
		
		function adsFunction() {
	  		box = new LightFace({ 
	 			title: 'الإعلان معنا', 
				width: 300,
				height: 50,
	  			content: "<span style='line-height:18px;font-size:12px;'>الإعلان في احلى حكاية غير متوفر حاليا ... <br />للمزيد من المعلومات يمكنك <a href='/contact' target='_blank' accesskey='9' title='تواصل معنا'>مراسلة الإدارة </a>...</span>",
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
		function pvFunction() {
	  		box = new LightFace({ 
	 			title: 'مشاركة صورة / مقطع فيديو', 
				width: 340,
				height: 50,
	  			content: "<span style='line-height:18px;font-size:12px;'>مشاركة صورة أو مقطع فيديو غير متوفر حاليا<br />سنحرص على توفير هذه الخاصيا في أقرب وقت ممكن.</span>",
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
		function limitcaracFunction() {
	  		box = new LightFace({ 
	 			title: 'لماذا 500 حرف فقط ؟', 
				width: 550,
				height: 50,
	  			content: "<span style='line-height:20px;font-size:12px;'>إن الهدف من الحائط هو مشاركة أفكار في جمل قصيرة او بضع كلمات، أما اذا رغبت في مشاركة<br />مقال أو نص طويل <a href='forums.php'>فالمنتدى</a> يفتح لك أبواه ... فخير الكلام ما قل ودل.</span>",
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
		function advFunction() {
	  		box = new LightFace({ 
	 			title: 'بعض النصائح لتفيدك !', 
				width: 680,
				height: 260,
	  			content: '<div class="pageborder" align="center">'+
						'<table border="0" width="100%" cellpadding="0" cellspacing="1" >'+
						'<tr>'+
						'<td><span style="font: normal 11px tahoma;color:#FF0000">حتى يكون موضوعك مميز ننصحك بالتالي :</span>'+
						'<ul style="font-size:12px;">'+
						'<li>تأكد من ان موضوعك غير مكرر و غير مخالف <a title="قوانين احلى حكاية" target="_blank" href="rules.php">لقوانين الاحلى حكاية</a> بشكل عام و قوانين الركن بشكل خاص .</li>'+
						'<li>تأكد من أن موضوعك في الركن المناسب و اختر عنوان مناسب يعبر عن محتوى موضوعك .</li>'+
						'<li>تأكد من عدم استخدام الزخارف و تكرار الحروف في عنوان الموضوع .</li>'+
						'<li>استخدم الكلمات الدلالية فهي تساعد على فهرسة و انتشار موضوعك .</li>'+
						'<li>عند نقل موضوع من موقع آخر ابتكر صيغة جديدة لطرحه و خاصة لعنوانه  .</li>'+
						'<li>يرجى استخدم خدمة <a title="إختصار الروابط" target="_blank" href="/url">إختصار الروابط</a> لحفظ حقوق روابط الموضوع .</li>'+
						'<li>تأكد من عدم استخدام روابط خلفية و مخفية في الموضوع .</li>'+
						'<li>بعد اعتماد الموضوع استخدم مواقع النشر الموجودة في أعلى الموضوع لنشر موضوعك .</li>'+
						'<li>و أخيرا ، أحسن تنسيق موضوعك لتكون في قآئمة النخبة .</li>'+
						'</ul>'+
						'</td></tr>'+
						'</table>'+
						'</div>',
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
$(function(){$('td#inlineimgICON span.inlineimg-id span a').each(function(){var a=$(this).attr('href');var b=$(this).text();$(this).prepend('<a href="'+a+'" title="'+b+'"></a>');$(this).children('a').load(a+'#page-body #td_post_501 .postdetailsICON img:eq(0)',function(){$(this).children('img').attr('class','a7la7ekaya-div')});$(this).find('').insertBefore($(this))})});		
		function langFunction() {
	  		box = new LightFace({ 
	 			title: 'اختر لغتك', 
				width: 660,
				height: 310,
	  			content: '<div class="smallfont">'+
				'<div class="pageborder" >'+
				'<table cellpadding="0" cellspacing="0" >'+
					'<tr>'+
						'<td>'+
				'<ul style="list-style:none;font-size:13px;">'+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=af&u=@a7la7ekaya" title="" >Afrikaans‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=sq&u=@a7la7ekaya" title="" >Albanian</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=hy&u=@a7la7ekaya" title="" >Armenian</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=az&u=@a7la7ekaya" title="" >Azerbaijani</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=id&u=@a7la7ekaya" title="" >Bahasa Indonesia‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ms&u=@a7la7ekaya" title="" >Bahasa Melayu‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=be&u=@a7la7ekaya" title="" >Belarusian</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ca&u=@a7la7ekaya" title="" >Català‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=cs&u=@a7la7ekaya" title="" >Čeština‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=da&u=@a7la7ekaya" title="" >Dansk‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=de&u=@a7la7ekaya" title="" >Deutsch</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=nl&u=@a7la7ekaya" title="" >Deutch</a></li> '+
				'</ul>'+
						'</td>'+
						'<td>'+
				'<ul style="list-style:none;font-size:13px;">'+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=en&u=@a7la7ekaya" title="" >English</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=es&u=@a7la7ekaya" title="" >Español‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=et&u=@a7la7ekaya" title="" >Eesti</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=tl&u=@a7la7ekaya" title="" >Filipino</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=fr&u=@a7la7ekaya" title="" >Français</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ht&u=@a7la7ekaya" title="" >Haitian Creole</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=hr&u=@a7la7ekaya" title="" >Hrvatski</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ga&u=@a7la7ekaya" title="" >Irish</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=it&u=@a7la7ekaya" title="" >Italiano</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=la&u=@a7la7ekaya" title="" >Latin</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=lt&u=@a7la7ekaya" title="" >Lietuvių</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=hu&u=@a7la7ekaya" title="" >Magyar‎</a></li> '+
				'</ul>'+
						'</td>'+
						'<td>'+
				'<ul style="list-style:none;font-size:13px;">'+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=pl&u=@a7la7ekaya" title="" >Polski</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=pt&u=@a7la7ekaya" title="" >Português</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ru&u=@a7la7ekaya" title="" >Русский</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ro&u=@a7la7ekaya" title="" >Română</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=fi&u=@a7la7ekaya" title="" >Suomi‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=sw&u=@a7la7ekaya" title="" >Swahili</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=vi&u=@a7la7ekaya" title="" >Tiếng Việt‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=tr&u=@a7la7ekaya" title="" >Türkçe‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ur&u=@a7la7ekaya" title="" >Urdu</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=el&u=@a7la7ekaya" title="" >Ελληνικά</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=bg&u=@a7la7ekaya" title="" >Български‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=sr&u=@a7la7ekaya" title="" >Српски‎‎</a></li> '+
				'</ul>'+
						'</td>'+
						'<td>'+
				'<ul style="list-style:none;font-size:13px;">'+
	'<li><a rel="nofollow" target="_self" href="http://www.a7la7ekaya.com" title="" >العربية</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=iw&u=@a7la7ekaya" title="" >עברית</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=fa&u=@a7la7ekaya" title="" >فارسی</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=hi&u=@a7la7ekaya" title="" >हिन्दी‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=bn&u=@a7la7ekaya" title="" >বাংলা</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ja&u=@a7la7ekaya" title="" >日本語</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=zh-CN&u=@a7la7ekaya" title="" >中文(简体)‎</a></li> '+
	'<li><a rel="nofollow" target="_self" href="http://translate.google.com/translate?hl=en&sl=auto&tl=ko&u=@a7la7ekaya" title="" >한국어</a></li> '+
				'</ul>'+
						'</td>'+
				'</tr>'+
				'</table>'+
				'</div>'+
				'</div>',
	 			buttons: [
					{ title: 'الغاء', event: function() { this.close(); box.close(); },  },
				]
	 		});
	 		box.open();		
	 	}
		
			function iphoneFunction() {
	  		box = new LightFace({ 
	 			title: 'احلى حكاية للآي فون', 
				width: 280,
				height: 50,
	  			content: "<span style='line-height:18px;font-size:12px;'>هذا التطبيق غير متوفر حاليا لأسباب تقنية <br />يمكنك زيارة : m.a7la7ekaya.com من على جوالك.</span>",
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
			function likeFunction() {
	  		box = new LightFace({ 
	 			title: 'الاعجاب', 
				width: 320,
				height: 30,
	  			content: "<span style='line-height:18px;font-size:12px;'>قم بتسجيل الدخول أو <a href='http://www.a7la7ekaya.com/register' title='فتح حساب جديد'>فتح حساب</a> جديد لتتمكن من الاعجاب</span>",
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
		function welcomeFunction() {
	  		box = new LightFace({ 
	 			title: 'أهلا بك !', 
				width: 590,
				height: 260,
	  			content: '<div  style="line-height:18px;font-size:12px;">'+
						'<p>مرحبا بك في احلى حكاية , اذا كنت مبتدئ في التعامل مع المنتديات و تريد إجابات على أسئلتك عن كيفية عمل المنتدى واستخدامه نرجوا أن تقوم بزيارة <a href="faq.php" alt="مركز المساعدة">لمركز المساعدة</a> , أما إذا رغبت بقراءة المواضيع و الإطلاع و التشارك مع بقية الأعضاء فتفضل بزيارة الأقسام الذي ترغب أدناه.</p>'+
						'<p align="center"><a href="http://www.mozilla.com/firefox/" rel="nofollow" target="_new" ><img src="images/ff.png" alt="use firefox" /></a></p>'+
						'</div>',
	 			buttons: [
					{ title: 'موافق', event: function() { this.close(); box.close(); }, color: 'blue' },
				]
	 		});
	 		box.open();		
	 	}
		
				function adFunction() {
	  		box = new LightFace({ 
	 			title: 'إشهار', 
				width: 800,
				height: 400,
	  			content: '<iframe src="http://www.a7la7ekaya.com/invite.php" style="width:100%;height:100%" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0" scrolling="no"></iframe>',
	 			buttons: [
					{ title: 'غلق', event: function() { this.close(); box.close(); }, color: 'green' },
				]
	 		});
	 		box.open();		
	 	}﻿

