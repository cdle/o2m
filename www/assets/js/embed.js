// 引入说明
// 引入样式 <link href="http://localhost:4200/assets/css/embed.css" rel="stylesheet" />
// 引入js<script type="text/javascript" src="http://localhost:4200/assets/js/embed.js"></script>
// 获取用户信息初始化客服窗口
// let userInfo  = window.localStorage.userInfo;
// initHtml(userInfo,{domain:window.location.href})
// 如果需要修改嵌入的盒子宽高
// initHtml(userInfo,{boxWidth:500,boxHeight:400,domain:window.location.href})
let options =null;
function initHtml(userInfo,option) {
    let src = setSrc( userInfo,option);
    let html = `
    <div class="dsys-op">
      <!-- 缩小 -->
      <div title="最小化窗口" onclick="smallIframe()" id="dsysSmall">-</div>
      <!-- 还原窗口 -->
      <div title="还原窗口" class="dsys-equal" id="dsysEqual" onclick="equalIframe()"></div>
      <!-- 新窗口打开 -->
      <div title="新窗口打开客服对话" onclick="bigIframe('${src}')">+</div>
    </div>
    <iframe id="dsysIframe" src="${src}" frameborder="0"
      class="dsys-iframe"></iframe>
    `
    let div = document.createElement('div');
    div.id = 'dsysIframeBox';
    div.className='dsys-container';
    if(option){
        option.boxWidth && (div.style.width=option.boxWidth+'px')
        option.boxHeight && (div.style.height=option.boxHeight+'px')
        options = option;
    }
    div.innerHTML = html;
    document.body.appendChild(div)
}

function smallIframe(e) {
    let box = document.getElementById('dsysIframeBox');
    let small = document.getElementById('dsysSmall');
    let equal = document.getElementById('dsysEqual');
    //= -(box.height-54)
    let h = options &&  options.boxHeight  || 350;
    box.style.bottom = -(h-54 )+'px';
    small.style.display = 'none';
    equal.style.display = 'inline-block'
}

function bigIframe(src) {
    console.log('src: ', src);
    var left = window.innerWidth / 2 - 400,
        top = window.innerHeight / 2 - 300;
    window.open(src, 'client', 'directories=no,location=no,height=600,width=800,left=' + left +
        ',top=' + top);
}

function equalIframe() {
    let box = document.getElementById('dsysIframeBox');
    let small = document.getElementById('dsysSmall');
    let equal = document.getElementById('dsysEqual');
    box.style.bottom = '0';
    small.style.display = 'inline-block';
    equal.style.display = 'none'
}

function setSrc( userInfo,option) {
    let clientHost = 'http://localhost:4200/client';
    let attach = '?domain='+option.domain +'&mall='+option.mall;
    // let user_id = Date.now();//每刷新一次用户就会变化
    if (userInfo) {
        try {
            userInfo = JSON.parse(userInfo); 
            attach += '&email='+userInfo.email + '&name='+userInfo.name
            user_id = userInfo.id
        } catch (e) { }
    }
    // console.log(user_id)
    
    // let str = '?category=' + mall + '&user_id=' + user_id + (attach ? '&attach=' + attach : '')
     
    return clientHost + attach
}