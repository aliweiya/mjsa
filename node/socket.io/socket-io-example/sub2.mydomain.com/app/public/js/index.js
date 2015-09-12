
$(document).ready(function() {

	$('#msg').focus();
// give user a generic name to start //	
	
	var arr = ['宋江', '林冲', '西门庆', '贾宝玉', '林黛玉', '薛宝钗', '武松', '韦小宝'];
	
	$('#name').val(arr[Math.random() * arr.length|0]);
	$('#btn-send').click(function(){ sendMessage(); })
	$('#msg').keypress(function(e){ if (e.keyCode === 13) { sendMessage(); return false; } })

// initialize the socket connection to listen on the 'chat' namespace //
	socket = io.connect('/chat-sub2');
	socket.on('status', function (connections) {
		var i=0; for (p in connections) i++;
		var s = i > 1 ? ' are '+i+' People ' : ' is '+i+' Person ';
		$('#connected').html('There '+s+' Currently Connected');
	});
	socket.on('user-ready', function (data) {
		$('#incoming').append('<span class="shadow" style="color:'+data.color+'">'+data.name +' :: connected</span><br>');
		autoScroll();
	});
	socket.on('user-message', function (data) {
		$('#incoming').append('<span class="shadow" style="color:'+data.color+'">'+data.name +' :: '+ data.message+'</span><br>');
		autoScroll();
	});
	socket.on('user-disconnected', function (data) {
		$('#incoming').append('<span class="shadow" style="color:'+data.color+'">'+data.name +' :: disconnected</span><br>');
		autoScroll();
	});

// register the user's name with the socket connection on the server // 
	socket.emit('user-ready', {name : $('#name').val() });
	
	var autoScroll = function() { 
		document.getElementById('incoming').scrollTop = document.getElementById('incoming').scrollHeight; 
	}
	var sendMessage = function() {
		socket.emit('user-message', {name : $('#name').val() , message : $('#msg').val() });
		$('#msg').val('')
	}
});