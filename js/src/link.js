link ={
    init: function () {
        var that = this;
        //�������õ��Ǹղŵ� linklist.json �ļ�·��
        $.getJSON("/links/linklist.json", function (data) {
            that.render(data);
        });
    },
    render: function (data) {
		var html, nickname, avatar, site, li = "";
		for (var i = 0; i < data.length; i++) {
           nickname = data[i].nickname;
           avatar = data[i].avatar;
           site = data[i].site;		   
		    li  += '<div class="card">' +
                    '<a href="' + site + '" target="_blank">' +
					    '<div class="thumb" style="background: url( '+ avatar +');">' +
						'</div>' +
				    '</a>' +
                    //href �� src �����ӵ�ַ�������Ƭ�ⲿ���ӣ�Ҳ���ԷŲ���Ŀ¼��
                      '<div class="card-header">' +
							'<div><a href="' + site + '" target="_blank">' + nickname + '</a></div>' +
					  '</div>' +
				 '</div>';
				 
        }
		$(".link-navigation").append(li);
    }
}
link.init();