"use strict";var options=null;function initHtml(e,t){var n=setSrc(e,t),e='\n    <div class="dsys-op">\n      \x3c!-- 缩小 --\x3e\n      <div title="最小化窗口" onclick="smallIframe()" id="dsysSmall">-</div>\n      \x3c!-- 还原窗口 --\x3e\n      <div title="还原窗口" class="dsys-equal" id="dsysEqual" onclick="equalIframe()"></div>\n      \x3c!-- 新窗口打开 --\x3e\n      <div title="新窗口打开客服对话" onclick="bigIframe(\''.concat(n,'\')">+</div>\n    </div>\n    <iframe id="dsysIframe" src="').concat(n,'" frameborder="0"\n      class="dsys-iframe"></iframe>\n    '),n=document.createElement("div");n.id="dsysIframeBox",n.className="dsys-container",t&&(t.boxWidth&&(n.style.width=t.boxWidth+"px"),t.boxHeight&&(n.style.height=t.boxHeight+"px"),options=t),n.innerHTML=e,document.body.appendChild(n)}function smallIframe(e){var t=document.getElementById("dsysIframeBox"),n=document.getElementById("dsysSmall"),i=document.getElementById("dsysEqual"),l=options&&options.boxHeight||350;t.style.bottom=-(l-54)+"px",n.style.display="none",i.style.display="inline-block"}function bigIframe(e){console.log("src: ",e);var t=window.innerWidth/2-400,n=window.innerHeight/2-300;window.open(e,"client","directories=no,location=no,height=600,width=800,left="+t+",top="+n)}function equalIframe(){var e=document.getElementById("dsysIframeBox"),t=document.getElementById("dsysSmall"),n=document.getElementById("dsysEqual");e.style.bottom="0",t.style.display="inline-block",n.style.display="none"}function setSrc(e,t){var n="?domain="+t.domain+"&mall="+t.mall;if(e)try{n+="&email="+(e=JSON.parse(e)).email+"&name="+e.name,user_id=e.id}catch(e){}return"http://localhost:4200/client"+n}