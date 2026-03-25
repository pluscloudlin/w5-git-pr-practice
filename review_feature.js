// 這個檔案有幾個值得 review 的地方，試著找找看！

// 問題一：變數命名不清楚
function a(x) {
  var d = document.getElementById('chat-box');
  var m = document.createElement('div');
  m.textContent = x;
  d.appendChild(m);
}

// 問題二：重複的程式碼
function addUserMessage(text) {
  var chatBox = document.getElementById('chat-box');
  var div = document.createElement('div');
  div.className = 'message user';
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(text) {
  var chatBox = document.getElementById('chat-box');
  var div = document.createElement('div');
  div.className = 'message bot';
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;  // 這行和上面一樣
}

// 問題三：沒有處理空白輸入
function send(input) {
  addUserMessage(input);
  addBotMessage('收到：' + input);
}

// ============================
// 以下為修正後的版本
// ============================

// 修正一：變數命名清楚，函式與變數名稱具描述性
function appendMessageToChatBox(messageText) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.textContent = messageText;
  chatBox.appendChild(messageDiv);
}

// 修正二：提取共用邏輯，消除重複程式碼
function addMessage(text, role) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${role}`;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMessageFixed(text) {
  addMessage(text, 'user');
}

function addBotMessageFixed(text) {
  addMessage(text, 'bot');
}

// 修正三：加入空白輸入驗證
function sendFixed(input) {
  if (!input || !input.trim()) {
    return;
  }
  addUserMessageFixed(input);
  addBotMessageFixed('收到：' + input);
}
