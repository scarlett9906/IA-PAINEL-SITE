
let chats = {}; let activeChat = "";
function playClick(){document.getElementById('clickSound').play();}
function newChat(cat){playClick();let n=prompt('Nome do chat:');if(!n)return;let id=cat+'-'+n;chats[id]=[];let btn=document.createElement('button');btn.textContent=n;btn.onclick=()=>openChat(id);document.getElementById(cat).appendChild(btn);openChat(id);}
function openChat(n){playClick();activeChat=n;renderMsgs();}
function renderMsgs(){let m=document.getElementById('messages');m.innerHTML="";(chats[activeChat]||[]).forEach(c=>{let d=document.createElement('div');d.textContent=c;d.onclick=()=>navigator.clipboard.writeText(c);m.appendChild(d);});}
function sendMessage(){if(!activeChat||activeChat=="CONFIG")return;let i=document.getElementById('userInput');chats[activeChat].push(i.value);i.value="";renderMsgs();}
function linkChat(){playClick();alert('Linkar ainda será finalizado...');}
function deleteChat(){playClick();if(confirm('Excluir chat?')){delete chats[activeChat];activeChat="";renderMsgs();}}
function renameChat(){playClick();let n=prompt('Novo nome:',activeChat);if(n&&!chats[n]){chats[n]=chats[activeChat];delete chats[activeChat];activeChat=n;renderMsgs();}}
function clearChat(){playClick();if(confirm('Limpar?')){chats[activeChat]=[];renderMsgs();}}
function restoreChat(){playClick();alert('Restaurar em breve...');}
function openConfig(){playClick();activeChat='CONFIG';document.getElementById('messages').innerHTML="<h2>Configurações IA MIREXP</h2>";}
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}});
