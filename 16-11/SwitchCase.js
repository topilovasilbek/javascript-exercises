let browser = "Safari";

switch (browser) {
  case "Edge":
    console.log("You've got the Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    console.log("Okay we support these browsers too");
    break;
  default:
    console.log("We hope that this page looks ok!");
}


// The Switch statement - if statement bilan o`xshash.
// Asosiy farqi switch da biror faqat qat'iy tenglik(===) holatini tekshirish mumkin
// Yuqorida ko`rilgan misolda browser nomli o`zgaruvchida input keladi. Output esa
// shu o`zgaruvchi nimaga qat'iy tengligiga qarab bo`ladi. Buni case keyword orqali beriladi.
// Hech bir case ga mos kelmaganda default keyword dan keyingi kelgan code ishlaydi
// Bu yerda har bir case ning kodi tugagandan keyin break keyword ni qo`yish ham muhim.
// Agar break qo`yilmasa o`sha case mos kelgan joydan boshlab pastdagi boshqa caselarning kodlari
// ham ishlab ketadi.