let keys = {'0':' ','1':'u','2':'x','3':'/','4':'+','5':'N','6':'h','7':'.','8':'{','9':'n','`':'l','-':'-','=':'9','q':'A','w':'i','e':'@','r':'*','t':'8','y':'%','u':'`','i':'M','o':'T','p':'g','[':'_',']':'a','a':'=','s':'0','d':'O','f':'~','g':'3','h':'I','j':'q','k':':','l':';',';':'!','\'':'F','z':'X','x':'5','c':'d','v':'C','b':')','n':'K','m':'6',',':'&','.':'U','/':'f',' ':'b','~':'s','!':'j','@':'J','#':'P','$':'p','%':'^','^':'>','&':'c','*':'t','(':'<',')':'Z','_':'w','+':'E','Q':'D','W':',','E':'r','R':'$','T':'Y','Y':'e','U':'\'','I':'W','O':']','P':'S','{':'2','}':'?','|':'Q','A':'[','S':'H','D':'4','F':'k','G':'7','H':'|','J':'L','K':'B','L':'V',':':'1','Z':'z','X':'R','C':'o','V':'(','B':'y','N':'}','M':'#','<':'m','>':'v','?':'G'};

let symbols = {'0':'s','1':':','2':'{','3':'g','4':'D','5':'x','6':'m','7':'G','8':'t','9':'=','l':'`','u':'1','x':'2','/':'3','+':'4','N':'5','h':'6','.':'7','{':'8','n':'9',' ':'0','-':'-','A':'q','i':'w','@':'e','*':'r','%':'y','`':'u','M':'i','T':'o','g':'p','_':'[','a':']','=':'a','O':'d','~':'f','I':'h','q':'j',':':'k',';':'l','!':';','F':'\'','X':'z','d':'c','C':'v',')':'b','K':'n','&':',','U':'.','f':'/','b':' ','s':'~','j':'!','J':'@','P':'#','p':'$','^':'%','>':'^','c':'&','t':'*','<':'(','Z':')','w':'_','E':'+','D':'Q',',':'W','r':'E','$':'R','Y':'T','e':'Y','\'':'U','W':'I',']':'O','S':'P','?':'}','Q':'|','[':'A','H':'S','k':'F','|':'H','L':'J','B':'K','V':'L','z':'Z','R':'X','o':'C','(':'V','y':'B','}':'N','#':'M','m':'<','v':'>','G':'?'};

function encrypt(){
    let message = document.getElementById("normalmessage").value;
    if(message.length === 0){
        document.getElementById("emptymessage").innerHTML="EMPTY INPUT...!";
        return;
    }
    let encrypted = "";
    for(let c of message){
        encrypted += keys[c];
    }
    document.getElementById("normalmessage").value = encrypted;
}
function decrypt(){
    let message = document.getElementById("normalmessage").value;
    if(message.length === 0){
        document.getElementById("emptymessage").innerHTML="EMPTY INPUT...!";
        return;
    }
    let decrypted="";
    for(let c of message){
        decrypted += symbols[c];
    }
    document.getElementById("normalmessage").value = decrypted;
}
