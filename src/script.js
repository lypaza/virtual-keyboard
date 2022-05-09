import "./styles/main.scss"

document.head.innerHTML += `<meta charset="UTF-8">`;
document.head.innerHTML += `<meta http-equiv="X-UA-Compatible" content="IE=edge">`;
document.body.innerHTML += `<textarea class="text_window" autofocus></textarea>`;

//document.body.innerHTML += `<script src="/opt/lampp/htdocs/virtual-keyboard/src/script.js" charset="utf-8"></script>`

//document.body.insertAdjacentHTML('beforebegin', `<head><meta charset="UTF-8"></head>`);

//const div = document.createElement("div");



let keyboard = document.createElement("div");
keyboard.className = "keyboard";
document.body.append(keyboard);

//let text_window = document.createElement("textarea");
//text_window.className = "text_window";
//document.body.append(text_window);

document.querySelector(".text_window").addEventListener('keydown', (event) => {
    //alert(e.data);
    document.querySelector(".key1").classList.add("active");
    document.querySelector(".key1").classList.remove("key1");
    document.querySelector(".text_window").innerHTML += event.key;
    //document.querySelector(".key1").classList.remove("active");
});

document.querySelector(".text_window").addEventListener('keyup', (event) => {
    //alert(e.data);
    //document.querySelector(".key1").classList.add("active");
    document.querySelector(".text_window").innerHTML += event.key;
    document.querySelector(".active").classList.add("key1");
    document.querySelector(".key1").classList.remove("active");
});

let key1 = document.createElement("div");
key1.className = "key1";
document.querySelector(".keyboard").append(key1);
key1.innerHTML = "`";
const B_Key1 = document.querySelector(".key1");
const A_Key1 = () => {
    document.querySelector(".text_window").innerHTML += "`";
};
B_Key1.addEventListener("click", A_Key1);

let key2 = document.createElement("div");
key2.className = "key2";
document.querySelector(".keyboard").append(key2);
key2.innerHTML = "1";
const B_Key2 = document.querySelector(".key2");
const A_Key2 = () => {
    document.querySelector(".text_window").innerHTML += "1";
};
B_Key2.addEventListener("click", A_Key2);

let key3 = document.createElement("div");
key3.className = "key3";
document.querySelector(".keyboard").append(key3);
key3.innerHTML = "2";
const B_Key3 = document.querySelector(".key3");
const A_Key3 = () => {
    document.querySelector(".text_window").innerHTML += "2";
};
B_Key3.addEventListener("click", A_Key3);

let key4 = document.createElement("div");
key4.className = "key4";
document.querySelector(".keyboard").append(key4);
key4.innerHTML = "3";
const B_Key4 = document.querySelector(".key4");
const A_Key4 = () => {
    document.querySelector(".text_window").innerHTML += "3";
};
B_Key4.addEventListener("click", A_Key4);

let key5 = document.createElement("div");
key5.className = "key5";
document.querySelector(".keyboard").append(key5);
key5.innerHTML = "4";
const B_Key5 = document.querySelector(".key5");
const A_Key5 = () => {
    document.querySelector(".text_window").innerHTML += "4";
};
B_Key5.addEventListener("click", A_Key5);

let key6 = document.createElement("div");
key6.className = "key6";
document.querySelector(".keyboard").append(key6);
key6.innerHTML = "5";
const B_Key6 = document.querySelector(".key6");
const A_Key6 = () => {
    document.querySelector(".text_window").innerHTML += "5";
};
B_Key6.addEventListener("click", A_Key6);

let key7 = document.createElement("div");
key7.className = "key7";
document.querySelector(".keyboard").append(key7);
key7.innerHTML = "6";
const B_Key7 = document.querySelector(".key7");
const A_Key7 = () => {
    document.querySelector(".text_window").innerHTML += "6";
};
B_Key7.addEventListener("click", A_Key7);

let key8 = document.createElement("div");
key8.className = "key8";
document.querySelector(".keyboard").append(key8);
key8.innerHTML = "7";
const B_Key8 = document.querySelector(".key8");
const A_Key8 = () => {
    document.querySelector(".text_window").innerHTML += "7";
};
B_Key8.addEventListener("click", A_Key8);

let key9 = document.createElement("div");
key9.className = "key9";
document.querySelector(".keyboard").append(key9);
key9.innerHTML = "8";
const B_Key9 = document.querySelector(".key9");
const A_Key9 = () => {
    document.querySelector(".text_window").innerHTML += "8";
};
B_Key9.addEventListener("click", A_Key9);

let key10 = document.createElement("div");
key10.className = "key10";
document.querySelector(".keyboard").append(key10);
key10.innerHTML = "9";
const B_Key10 = document.querySelector(".key10");
const A_Key10 = () => {
    document.querySelector(".text_window").innerHTML += "9";
};
B_Key10.addEventListener("click", A_Key10);

let key11 = document.createElement("div");
key11.className = "key11";
document.querySelector(".keyboard").append(key11);
key11.innerHTML = "0";
const B_Key11 = document.querySelector(".key11");
const A_Key11 = () => {
    document.querySelector(".text_window").innerHTML += "0";
};
B_Key11.addEventListener("click", A_Key11);

let key12 = document.createElement("div");
key12.className = "key12";
document.querySelector(".keyboard").append(key12);
key12.innerHTML = "-";
const B_Key12 = document.querySelector(".key12");
const A_Key12 = () => {
    document.querySelector(".text_window").innerHTML += "-";
};
B_Key12.addEventListener("click", A_Key12);

let key13 = document.createElement("div");
key13.className = "key13";
document.querySelector(".keyboard").append(key13);
key13.innerHTML = "=";
const B_Key13 = document.querySelector(".key13");
const A_Key13 = () => {
    document.querySelector(".text_window").innerHTML += "=";
};
B_Key13.addEventListener("click", A_Key13);

let key14 = document.createElement("div");
key14.className = "key14";
document.querySelector(".keyboard").append(key14);
key14.innerHTML = "Backspace";
const B_Key14 = document.querySelector(".key14");
const A_Key14 = () => {
    let Backspace_text = document.querySelector(".text_window").textContent;
    let arr = Backspace_text.split('');
    arr.splice(-1, 1);
    Backspace_text = arr.join('');
    document.querySelector(".text_window").innerHTML = Backspace_text;
};
B_Key14.addEventListener("click", A_Key14);

let key15 = document.createElement("div");
key15.className = "key15";
document.querySelector(".keyboard").append(key15);
key15.innerHTML = "Tab";
const B_Key15 = document.querySelector(".key15");
const A_Key15 = () => {
    document.querySelector(".text_window").innerHTML += "   ";
};
B_Key15.addEventListener("click", A_Key15);

let key16 = document.createElement("div");
key16.className = "key16";
document.querySelector(".keyboard").append(key16);
key16.innerHTML = "q";
const B_Key16 = document.querySelector(".key16");
const A_Key16 = () => {
    document.querySelector(".text_window").innerHTML += "q";
};
B_Key16.addEventListener("click", A_Key16);

let key17 = document.createElement("div");
key17.className = "key17";
document.querySelector(".keyboard").append(key17);
key17.innerHTML = "w";
const B_Key17 = document.querySelector(".key17");
const A_Key17 = () => {
    document.querySelector(".text_window").innerHTML += "w";
};
B_Key17.addEventListener("click", A_Key17);

let key18 = document.createElement("div");
key18.className = "key18";
document.querySelector(".keyboard").append(key18);
key18.innerHTML = "e";
const B_Key18 = document.querySelector(".key18");
const A_Key18 = () => {
    document.querySelector(".text_window").innerHTML += "e";
};
B_Key18.addEventListener("click", A_Key18);

let key19 = document.createElement("div");
key19.className = "key19";
document.querySelector(".keyboard").append(key19);
key19.innerHTML = "r";
const B_Key19 = document.querySelector(".key19");
const A_Key19 = () => {
    document.querySelector(".text_window").innerHTML += "r";
};
B_Key19.addEventListener("click", A_Key19);

let key20 = document.createElement("div");
key20.className = "key20";
document.querySelector(".keyboard").append(key20);
key20.innerHTML = "t";
const B_Key20 = document.querySelector(".key20");
const A_Key20 = () => {
    document.querySelector(".text_window").innerHTML += "t";
};
B_Key20.addEventListener("click", A_Key20);

let key21 = document.createElement("div");
key21.className = "key21";
document.querySelector(".keyboard").append(key21);
key21.innerHTML = "y";
const B_Key21 = document.querySelector(".key21");
const A_Key21 = () => {
    document.querySelector(".text_window").innerHTML += "y";
};
B_Key21.addEventListener("click", A_Key21);

let key22 = document.createElement("div");
key22.className = "key22";
document.querySelector(".keyboard").append(key22);
key22.innerHTML = "u";
const B_Key22 = document.querySelector(".key22");
const A_Key22 = () => {
    document.querySelector(".text_window").innerHTML += "u";
};
B_Key22.addEventListener("click", A_Key22);

let key23 = document.createElement("div");
key23.className = "key23";
document.querySelector(".keyboard").append(key23);
key23.innerHTML = "i";
const B_Key23 = document.querySelector(".key23");
const A_Key23 = () => {
    document.querySelector(".text_window").innerHTML += "i";
};
B_Key23.addEventListener("click", A_Key23);

let key24 = document.createElement("div");
key24.className = "key24";
document.querySelector(".keyboard").append(key24);
key24.innerHTML = "o";
const B_Key24 = document.querySelector(".key24");
const A_Key24 = () => {
    document.querySelector(".text_window").innerHTML += "o";
};
B_Key24.addEventListener("click", A_Key24);

let key25 = document.createElement("div");
key25.className = "key25";
document.querySelector(".keyboard").append(key25);
key25.innerHTML = "p";
const B_Key25 = document.querySelector(".key25");
const A_Key25 = () => {
    document.querySelector(".text_window").innerHTML += "p";
};
B_Key25.addEventListener("click", A_Key25);

let key26 = document.createElement("div");
key26.className = "key26";
document.querySelector(".keyboard").append(key26);
key26.innerHTML = "[";
const B_Key26 = document.querySelector(".key26");
const A_Key26 = () => {
    document.querySelector(".text_window").innerHTML += "[";
};
B_Key26.addEventListener("click", A_Key26);

let key27 = document.createElement("div");
key27.className = "key27";
document.querySelector(".keyboard").append(key27);
key27.innerHTML = "]";
const B_Key27 = document.querySelector(".key27");
const A_Key27 = () => {
    document.querySelector(".text_window").innerHTML += "]";
};
B_Key27.addEventListener("click", A_Key27);

let key28 = document.createElement("div");
key28.className = "key28";
document.querySelector(".keyboard").append(key28);
key28.innerHTML = `\``;
const B_Key28 = document.querySelector(".key28");
const A_Key28 = () => {
    document.querySelector(".text_window").innerHTML += `\``;
};
B_Key28.addEventListener("click", A_Key28);

let key29 = document.createElement("div");
key29.className = "key29";
document.querySelector(".keyboard").append(key29);
key29.innerHTML = "Del";
const B_Key29 = document.querySelector(".key29");
const A_Key29 = () => {
    //document.querySelector(".text_window").innerHTML += "`";
    alert("!реализовать");
};
B_Key29.addEventListener("click", A_Key29);

let key30 = document.createElement("div");
key30.className = "key30";
document.querySelector(".keyboard").append(key30);
key30.innerHTML = "CapsLock";
const B_Key30 = document.querySelector(".key30");
const A_Key30 = () => {
    document.querySelector(".text_window").innerHTML += "AAA";
};
B_Key30.addEventListener("click", A_Key30);

let key31 = document.createElement("div");
key31.className = "key31";
document.querySelector(".keyboard").append(key31);
key31.innerHTML = "a";
const B_Key31 = document.querySelector(".key31");
const A_Key31 = () => {
    document.querySelector(".text_window").innerHTML += "a";
};
B_Key31.addEventListener("click", A_Key31);

let key32 = document.createElement("div");
key32.className = "key32";
document.querySelector(".keyboard").append(key32);
key32.innerHTML = "s";
const B_Key32 = document.querySelector(".key32");
const A_Key32 = () => {
    document.querySelector(".text_window").innerHTML += "s";
};
B_Key32.addEventListener("click", A_Key32);

let key33 = document.createElement("div");
key33.className = "key33";
document.querySelector(".keyboard").append(key33);
key33.innerHTML = "d";
const B_Key33 = document.querySelector(".key33");
const A_Key33 = () => {
    document.querySelector(".text_window").innerHTML += "d";
};
B_Key33.addEventListener("click", A_Key33);

let key34 = document.createElement("div");
key34.className = "key34";
document.querySelector(".keyboard").append(key34);
key34.innerHTML = "f";
const B_Key34 = document.querySelector(".key34");
const A_Key34 = () => {
    document.querySelector(".text_window").innerHTML += "f";
};
B_Key34.addEventListener("click", A_Key34);

let key35 = document.createElement("div");
key35.className = "key35";
document.querySelector(".keyboard").append(key35);
key35.innerHTML = "g";
const B_Key35 = document.querySelector(".key35");
const A_Key35 = () => {
    document.querySelector(".text_window").innerHTML += "g";
};
B_Key35.addEventListener("click", A_Key35);

let key36 = document.createElement("div");
key36.className = "key36";
document.querySelector(".keyboard").append(key36);
key36.innerHTML = "h";
const B_Key36 = document.querySelector(".key36");
const A_Key36 = () => {
    document.querySelector(".text_window").innerHTML += "h";
};
B_Key36.addEventListener("click", A_Key36);

let key37 = document.createElement("div");
key37.className = "key37";
document.querySelector(".keyboard").append(key37);
key37.innerHTML = "j";
const B_Key37 = document.querySelector(".key37");
const A_Key37 = () => {
    document.querySelector(".text_window").innerHTML += "j";
};
B_Key37.addEventListener("click", A_Key37);

let key38 = document.createElement("div");
key38.className = "key38";
document.querySelector(".keyboard").append(key38);
key38.innerHTML = "k";
const B_Key38 = document.querySelector(".key38");
const A_Key38 = () => {
    document.querySelector(".text_window").innerHTML += "k";
};
B_Key38.addEventListener("click", A_Key38);

let key39 = document.createElement("div");
key39.className = "key39";
document.querySelector(".keyboard").append(key39);
key39.innerHTML = "l";
const B_Key39 = document.querySelector(".key39");
const A_Key39 = () => {
    document.querySelector(".text_window").innerHTML += "l";
};
B_Key39.addEventListener("click", A_Key39);

let key40 = document.createElement("div");
key40.className = "key40";
document.querySelector(".keyboard").append(key40);
key40.innerHTML = ";";
const B_Key40 = document.querySelector(".key40");
const A_Key40 = () => {
    document.querySelector(".text_window").innerHTML += ";";
};
B_Key40.addEventListener("click", A_Key40);

let key41 = document.createElement("div");
key41.className = "key41";
document.querySelector(".keyboard").append(key41);
key41.innerHTML = "'";
const B_Key41 = document.querySelector(".key41");
const A_Key41 = () => {
    document.querySelector(".text_window").innerHTML += "'";
};
B_Key41.addEventListener("click", A_Key41);

let key42 = document.createElement("div");
key42.className = "key42";
document.querySelector(".keyboard").append(key42);
key42.innerHTML = "Enter";
const B_Key42 = document.querySelector(".key42");
const A_Key42 = () => {
    document.querySelector(".text_window").innerHTML += `\n`;
};
B_Key42.addEventListener("click", A_Key42);

let key43 = document.createElement("div");
key43.className = "key43";
document.querySelector(".keyboard").append(key43);
key43.innerHTML = "Shift";
const B_Key43 = document.querySelector(".key43");
const A_Key43 = () => {
    document.querySelector(".text_window").innerHTML += "ShiftAAA";
};
B_Key43.addEventListener("click", A_Key43);

let key44 = document.createElement("div");
key44.className = "key44";
document.querySelector(".keyboard").append(key44);
key44.innerHTML = "z";
const B_Key44 = document.querySelector(".key44");
const A_Key44 = () => {
    document.querySelector(".text_window").innerHTML += "z";
};
B_Key44.addEventListener("click", A_Key44);

let key45 = document.createElement("div");
key45.className = "key45";
document.querySelector(".keyboard").append(key45);
key45.innerHTML = "x";
const B_Key45 = document.querySelector(".key45");
const A_Key45 = () => {
    document.querySelector(".text_window").innerHTML += "x";
};
B_Key45.addEventListener("click", A_Key45);

let key46 = document.createElement("div");
key46.className = "key46";
document.querySelector(".keyboard").append(key46);
key46.innerHTML = "c";
const B_Key46 = document.querySelector(".key46");
const A_Key46 = () => {
    document.querySelector(".text_window").innerHTML += "c";
};
B_Key46.addEventListener("click", A_Key46);

let key47 = document.createElement("div");
key47.className = "key47";
document.querySelector(".keyboard").append(key47);
key47.innerHTML = "v";
const B_Key47 = document.querySelector(".key47");
const A_Key47 = () => {
    document.querySelector(".text_window").innerHTML += "v";
};
B_Key47.addEventListener("click", A_Key47);

let key48 = document.createElement("div");
key48.className = "key48";
document.querySelector(".keyboard").append(key48);
key48.innerHTML = "b";
const B_Key48 = document.querySelector(".key48");
const A_Key48 = () => {
    document.querySelector(".text_window").innerHTML += "b";
};
B_Key48.addEventListener("click", A_Key48);

let key49 = document.createElement("div");
key49.className = "key49";
document.querySelector(".keyboard").append(key49);
key49.innerHTML = "n";
const B_Key49 = document.querySelector(".key49");
const A_Key49 = () => {
    document.querySelector(".text_window").innerHTML += "n";
};
B_Key49.addEventListener("click", A_Key49);

let key50 = document.createElement("div");
key50.className = "key50";
document.querySelector(".keyboard").append(key50);
key50.innerHTML = "m";
const B_Key50 = document.querySelector(".key50");
const A_Key50 = () => {
    document.querySelector(".text_window").innerHTML += "m";
};
B_Key50.addEventListener("click", A_Key50);

let key51 = document.createElement("div");
key51.className = "key51";
document.querySelector(".keyboard").append(key51);
key51.innerHTML = ",";
const B_Key51 = document.querySelector(".key51");
const A_Key51 = () => {
    document.querySelector(".text_window").innerHTML += ",";
};
B_Key51.addEventListener("click", A_Key51);

let key52 = document.createElement("div");
key52.className = "key52";
document.querySelector(".keyboard").append(key52);
key52.innerHTML = ".";
const B_Key52 = document.querySelector(".key52");
const A_Key52 = () => {
    document.querySelector(".text_window").innerHTML += ".";
};
B_Key52.addEventListener("click", A_Key52);

let key53 = document.createElement("div");
key53.className = "key53";
document.querySelector(".keyboard").append(key53);
key53.innerHTML = "/";
const B_Key53 = document.querySelector(".key53");
const A_Key53 = () => {
    document.querySelector(".text_window").innerHTML += "/";
};
B_Key53.addEventListener("click", A_Key53);

let key54 = document.createElement("div");
key54.className = "key54";
document.querySelector(".keyboard").append(key54);
key54.innerHTML = "&#9650;";
const B_Key54 = document.querySelector(".key54");
const A_Key54 = () => {
    document.querySelector(".text_window").innerHTML += "&#9650;";
};
B_Key54.addEventListener("click", A_Key54);

let key55 = document.createElement("div");
key55.className = "key55";
document.querySelector(".keyboard").append(key55);
key55.innerHTML = "Shift";
const B_Key55 = document.querySelector(".key55");
const A_Key55 = () => {
    document.querySelector(".text_window").innerHTML += "Shiftright";
};
B_Key55.addEventListener("click", A_Key55);

let key56 = document.createElement("div");
key56.className = "key56";
document.querySelector(".keyboard").append(key56);
key56.innerHTML = "Ctrl";
const B_Key56 = document.querySelector(".key56");
const A_Key56 = () => {
    document.querySelector(".text_window").innerHTML += "Ctrlleft";
};
B_Key56.addEventListener("click", A_Key56);

let key57 = document.createElement("div");
key57.className = "key57";
document.querySelector(".keyboard").append(key57);
key57.innerHTML = "Win";
const B_Key57 = document.querySelector(".key57");
const A_Key57 = () => {
    document.querySelector(".text_window").innerHTML += "Winleft";
};
B_Key57.addEventListener("click", A_Key57);

let key58 = document.createElement("div");
key58.className = "key58";
document.querySelector(".keyboard").append(key58);
key58.innerHTML = "Alt";
const B_Key58 = document.querySelector(".key58");
const A_Key58 = () => {
    document.querySelector(".text_window").innerHTML += "Altleft";
};
B_Key58.addEventListener("click", A_Key58);

let key59 = document.createElement("div");
key59.className = "key59";
document.querySelector(".keyboard").append(key59);
key59.innerHTML = "";
const B_Key59 = document.querySelector(".key59");
const A_Key59 = () => {
    document.querySelector(".text_window").innerHTML += " ";
};
B_Key59.addEventListener("click", A_Key59);

let key60 = document.createElement("div");
key60.className = "key60";
document.querySelector(".keyboard").append(key60);
key60.innerHTML = "Alt";
const B_Key60 = document.querySelector(".key60");
const A_Key60 = () => {
    document.querySelector(".text_window").innerHTML += "Altright";
};
B_Key60.addEventListener("click", A_Key60);

let key61 = document.createElement("div");
key61.className = "key61";
document.querySelector(".keyboard").append(key61);
key61.innerHTML = "&#9668;";
const B_Key61 = document.querySelector(".key61");
const A_Key61 = () => {
    document.querySelector(".text_window").innerHTML += "&#9668;";
};
B_Key61.addEventListener("click", A_Key61);

let key62 = document.createElement("div");
key62.className = "key62";
document.querySelector(".keyboard").append(key62);
key62.innerHTML = "&#9660;";
const B_Key62 = document.querySelector(".key62");
const A_Key62 = () => {
    document.querySelector(".text_window").innerHTML += "&#9660;";
};
B_Key62.addEventListener("click", A_Key62);

let key63 = document.createElement("div");
key63.className = "key63";
document.querySelector(".keyboard").append(key63);
key63.innerHTML = "&#9658;";
const B_Key63 = document.querySelector(".key63");
const A_Key63 = () => {
    document.querySelector(".text_window").innerHTML += "&#9658;";
};
B_Key63.addEventListener("click", A_Key63);

let key64 = document.createElement("div");
key64.className = "key64";
document.querySelector(".keyboard").append(key64);
key64.innerHTML = "Ctrl";
const B_Key64 = document.querySelector(".key64");
const A_Key64 = () => {
    document.querySelector(".text_window").innerHTML += "Ctrlright";
};
B_Key64.addEventListener("click", A_Key64);






















