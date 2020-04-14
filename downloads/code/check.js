<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>function checkuserinfo()
{
   if(checkspace(document.userinfo.username.value)) {
	document.userinfo.username.focus();
    alert("�Բ�������д�û�����");
	return false;
  }
    if(checkspace(document.userinfo.userpassword.value) || document.userinfo.userpassword.value.length < 5 || document.userinfo.userpassword.value.length >10) {
	document.userinfo.userpassword.focus();
    alert("���볤�Ȳ��ܲ�����գ���5λ��10λ֮�䣬���������룡");
	return false;
  }
    if(document.userinfo.userpassword.value != document.userinfo.userpassword1.value) {
	document.userinfo.userpassword.focus();
	document.userinfo.userpassword.value = '';
	document.userinfo.userpassword1.value = '';
    alert("������������벻ͬ�����������룡");
	return false;
  }

 if(document.userinfo.useremail.value.length!=0)
  {
    if (document.userinfo.useremail.value.charAt(0)=="." ||        
         document.userinfo.useremail.value.charAt(0)=="@"||       
         document.userinfo.useremail.value.indexOf('@', 0) == -1 || 
         document.userinfo.useremail.value.indexOf('.', 0) == -1 || 
         document.userinfo.useremail.value.lastIndexOf("@")==document.userinfo.useremail.value.length-1 || 
         document.userinfo.useremail.value.lastIndexOf(".")==document.userinfo.useremail.value.length-1)
     {
      alert("Email��ַ��ʽ����ȷ��");
      document.userinfo.useremail.focus();
      return false;
      }
   }
 else
  {
   alert("Email����Ϊ�գ�");
   document.userinfo.useremail.focus();
   return false;
   }
   if(checkspace(document.userinfo.quesion.value)) {
	document.userinfo.quesion.focus();
    alert("�Բ�������д�������ʣ�");
	return false;
  }
   if(checkspace(document.userinfo.answer.value)) {
	document.userinfo.answer.focus();
    alert("�Բ�������д�������ʵĴ𰸣�");
	return false;
  }
}
function checkshouhuoxx()
{
   if(checkspace(document.shouhuoxx.userzhenshiname.value)) {
	document.shouhuoxx.userzhenshiname.focus();
    alert("�Բ�������д��ʵ������");
	return false;
  }
  if(checkspace(document.shouhuoxx.shouhuodizhi.value)) {
	document.shouhuoxx.shouhuodizhi.focus();
    alert("�Բ�������д�ջ�����ϸ�ջ���ַ��");
	return false;
  }
  if(checkspace(document.shouhuoxx.youbian.value)) {
	document.shouhuoxx.youbian.focus();
    alert("�Բ�������д�ʱ࣡");
	return false;
  }
  if(document.shouhuoxx.youbian.value.length!=6) {
	document.shouhuoxx.youbian.focus();
    alert("�Բ�������ȷ��д�ʱ࣡");
	return false;
  } 
    if(checkspace(document.shouhuoxx.usertel.value)) {
	document.shouhuoxx.usertel.focus();
    alert("�Բ���������������ϵ�绰��");
	return false;
  }
      if(checkspace(document.shouhuoxx.songhuofangshi.value)) {
	document.shouhuoxx.songhuofangshi.focus();
    alert("�Բ�������û��ѡ���ͻ���ʽ��");
	return false;
  }
      if(checkspace(document.shouhuoxx.zhifufangshi.value)) {
	document.shouhuoxx.zhifufangshi.focus();
    alert("�Բ�������û��ѡ��֧����ʽ��");
	return false;
  }
}

function checkspace(checkstr) {
  var str = '';
  for(i = 0; i < checkstr.length; i++) {
    str = str + ' ';
  }
  return (str == checkstr);
}
